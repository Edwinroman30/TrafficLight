const express = require('express');
const MqttHandler = require('mqttHandler');

class Server{

    constructor(){

        this.app = express();
        this.mqttHandler = new MqttHandler();
        this.middleware();
        this.route();

    }


    middleware(){

        //JSON PARSER.
        this.app.use( express.json() );
        
        //Body-parsers data.
        this.app.use( express.urlencoded({extended : false}) );
        
        //Static Content.
        this.app.use( express.static('public') );

    }

    route(){

        this.app.get()

    }


}

modu