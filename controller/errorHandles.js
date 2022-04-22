// Functions for the MQTT errors.

const mqttErrors = (err) => {
 
    console.log(err);
    this.mqttClient.end(true);

}

module.exports = {
    mqttErrors
}