// Functions for the MQTT errors.

const mqttErrors = (err) => {

    // TODO: Set a reconnect time to avoid the immediately close or to determinate if 
    // TODO: the library or module has something to manage the timeOut of reconnection.

    console.log(err.message);
    this.mqttClient.end();
    clearInterval(this.objSetInterval);
    process.exit(0);

};

module.exports = {
    mqttErrors
}