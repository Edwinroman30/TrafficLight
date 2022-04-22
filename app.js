const MqttHandler = require('./model/mqttHandler');

const mqttServer = new MqttHandler();

mqttServer.connect();



// Connection
mqttServer.mqttClient.on('connect', () => {
        
    if(mqttServer.mqttClient.connected){

        // MQTT subscriptions, Movile app acctions
          mqttServer.mqttClient.subscribe('device/signal', {qos: 0});
          let posibleColorStatus = 0;

          function semaphore(){
            
                mqttServer.objSetInterval = setInterval(() => {
                    
                  //Keeping the semaphore just in three color state.
                    if(posibleColorStatus > 2){  
                        posibleColorStatus = 0;
                        
                        //Going back to defaul status.
                        mqttServer.initialStatus();
                        
                    }
                  
                  //When light is green or orange.
                    if( posibleColorStatus == 0 || posibleColorStatus == 1 )
                    { 
                      mqttServer.porcentToReduce = mqttServer.timeOfchange * (mqttServer.userRequest / 10);
                      mqttServer.timeOfchange = mqttServer.timeOfchange - mqttServer.porcentToReduce;

                      //Notify to clients when is Green and Orange
                      mqttServer.mqttClient.publish('semaphore/state', 
                        JSON.stringify( {colorStatus: mqttServer.colorStatus[posibleColorStatus] , timeOfchange: mqttServer.timeOfchange} ) );

                      if(mqttServer.timeOfchange < 0)
                          mqttServer.timeOfchange = 4; //Set a time in case of many Users requesting... 

                    }else{
                      //Going back to defaul status.
                      mqttServer.initialStatus();

                        //Notify to clients when is Red
                        mqttServer.mqttClient.publish('semaphore/state', 
                        JSON.stringify( {colorStatus: mqttServer.colorStatus[posibleColorStatus] , timeOfchange: mqttServer.timeOfchange} ) ); 
                       
                    } 
                   

                    console.log(`Color status: ${mqttServer.colorStatus[posibleColorStatus]} time to reduce ${mqttServer.porcentToReduce}`);
                    console.log(mqttServer.timeOfchange);
                    
                    posibleColorStatus++;
                    clearInterval(mqttServer.objSetInterval);
                    semaphore();
                },  mqttServer.timeOfchange * 1000);



          }

          semaphore();
    }

    // When a message arrives, console.log it
    mqttServer.mqttClient.on('message', function (topic, message) {

        mqttServer.userRequest= mqttServer.userRequest + 1;
        //console.log(message.toString());

    });

    console.log(`mqtt client connected`);

});

