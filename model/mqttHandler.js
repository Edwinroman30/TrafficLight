const mqtt = require('mqtt');
const {mqttErrors, closeHandler} = require('../controller');

class MqttHandler {

  constructor() {
    
    this.mqttClient           = null;
    this.host                 = `mqtt://broker.hivemq.com:1883`;
    this.username             = ''; // mqtt credentials if these are needed to connect
    this.password             = ''; // mqtt credentials if these are needed to connect
    
    this.timeOfchange         =  10; //Given in seconds
    this.colorStatus          = ['Green','Yellow','Red']; 
    this.objSetInterval       = null; // Time of the setInterval function.
    
    this.userRequest          = 0;
    this.porcentToReduce      = 0;
  }
  
  connect() {
    
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', mqttErrors);

    // Mqtt close calback
    this.mqttClient.on('close', closeHandler);

  }

 initialStatus(){
    
  //Going back to defaul status.
    this.timeOfchange = 10; //Replace in the dotENV
    this.porcentToReduce = 0;
    this.userRequest = 0; 
}


  // Sends a mqtt message to topic: mytopic
  sendMessageOnDevice1(message) {
      this.mqttClient.publish('mytopic', message);
  }

}

module.exports = MqttHandler;