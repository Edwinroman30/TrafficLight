const $messageRecived = document.getElementById('messageRecived');      
        
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

      /**
      const message = new Paho.MQTT.Message("Hello");
      message.destinationName = "World";
      client.send(message);
      **/
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {

    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
    }

  }

  // called when a message arrives
  function onMessageArrived(message) {

      console.log("onMessageArrived:"+message.payloadString);
      
      $messageRecived.innerHTML += `
          <li> ${message.payloadString.toString()} </li>
      `;
      
  }