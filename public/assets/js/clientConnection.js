const $btnChange = document.getElementById('btn-change');      
const $counterNumber = document.getElementById('counter-number');    
const 
    $redLight = document.getElementById('redLight'),
    $greenLight = document.getElementById('greenLight'),
    $yellowLight = document.getElementById('yellowLight'),
    $trackTable = document.getElementById('trackTable'),
    $tbody      = $trackTable.children[1];

        const clientOptions = {
            
            host : "broker.hivemq.com", //WebSocket connection.
            port : 8000,
            clientId : 'mqttjs_' + Math.random().toString(16).substr(2, 8), //Random identifier.
            userName : "", //If it's required.
            userPassword : "" //If it's required.
        }
        
          // Create a client instance
          const client = new Paho.MQTT.Client(clientOptions.host, Number(clientOptions.port), clientOptions.clientId);
        
          // set callback handlers
          client.onConnectionLost = onConnectionLost;
          client.onMessageArrived = onMessageArrived;
        
          // connect the client
          client.connect({onSuccess:onConnect});
        
        
          // called when the client connects
          function onConnect() {
              
            // Once a connection has been made, make a subscription and send a message.
              console.log("onConnect");
              client.subscribe("semaphore/state");
        
          }
        
          // called when the client loses its connection
          function onConnectionLost(responseObject) {

            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:"+responseObject.errorMessage);
            }

          }
        
          let timerInterval = null;

          // called when a message arrives
          function onMessageArrived(message) {
            
            let payload = JSON.parse(message.payloadString); 
            let time = payload.timeOfchange;
            clearInterval(timerInterval);


            if(payload.colorStatus.toString() === 'Green'){
                $redLight.classList.remove('red');                
                $greenLight.classList.add('green');
                $yellowLight.classList.remove('yellow');
            }

            
            if(payload.colorStatus.toString() === 'Yellow'){
                $greenLight.classList.remove('green');                
                $yellowLight.classList.add('yellow');
                $redLight.classList.remove('red');
            }

            
            if(payload.colorStatus.toString() === 'Red'){
                
                $yellowLight.classList.remove('yellow');                
                $redLight.classList.add('red');
                $greenLight.classList.remove('green');

                window.navigator.geolocation.getCurrentPosition((currentPosition)=>{
                    
                    
                    $tbody.innerHTML += `
                    <tr>
                        <td>${ currentPosition.timestamp }</td>
                        <td>${ currentPosition.coords.longitude }</td>
                        <td>${ currentPosition.coords.latitude }</td>
                        <td>${ currentPosition.coords.accuracy }</td>
                    </tr>
                    `;

                
                });

            }

            timerInterval = setInterval(() => {

                $counterNumber.textContent = time;
                time--;

                if(time == 0){
                    clearInterval(timerInterval);
                    time =  payload.timeOfchange;
                   
                }
                
            }, 1000);
           
          }

          $btnChange.addEventListener('click', (e) => {

                const message = new Paho.MQTT.Message("Hello");
                message.destinationName = "device/signal";
                client.send(message);
            
          });