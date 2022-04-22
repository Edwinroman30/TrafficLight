class Semaphore{

    constructor(mqttClient){

        this.location      = 'Ave. Winston Churchill';
        this.timeOfchange  = 10; //Given in seconds
        this.colorStatus   = ['Green','Orangen','Red'];
        this.mqttClient    = mqttClient;
    }


    //se simplicara a tenerlo mas raw
    start(){

        let i = 0;
        setInterval(()=>{

            if(i > 2)
                i = 0

            console.log(this.colorStatus[i]);
            i++;

        },this.timeOfchange * 1000)
               
    }


}

module.exports = Semaphore;