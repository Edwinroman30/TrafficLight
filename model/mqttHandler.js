const mqtt = require('mqtt');
const {mqttErrors} = require('../controller/errorHandles');

class MqttHandler {

  constructor() {
    
    this.mqttClient = null;
    this.host       = `mqtt://0.0.0.0`;
    this.username   = ''; // mqtt credentials if these are needed to connect
    this.password   = ''; // mqtt credentials if these are needed to connect
    
    this.location      = 'Ave. Winston Churchill';
    this.timeOfchange  =  10; //Given in seconds
    this.colorStatus   = ['Green','Orangen','Red'];
    
    this.objSetInterval       = null; // Time of the setInterval function.
    
    this.userRequest   = 0;
    this.porcentToReduce = 0;
  }
  
  connect() {
    
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', mqttErrors);

    this.mqttClient.on('close', () => {

        clearInterval(this.objSetInterval);
        console.log(`mqtt client disconnected`);

    });

  }

 initialStatus(commingValues){
    //Going back to defaul status.
    commingValues =  [10, 10,  10];
    this.timeOfchange = commingValues[0];
    this.porcentToReduce = 0;
    this.userRequest = 0; 
}


  // Sends a mqtt message to topic: mytopic
  sendMessageOnDevice1(message) {
      this.mqttClient.publish('mytopic', message);
  }

}

module.exports = MqttHandler;