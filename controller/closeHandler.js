// Functions for the MQTT close event.

const closeHandler = () => {
      
    clearInterval(this.objSetInterval);
    console.log(`mqtt client disconnected`);

}

module.exports = {closeHandler};