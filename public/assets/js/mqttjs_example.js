<script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>

const options = {
    clean: true, // retain session
    connectTimeout: 4000, // Timeout period
    // Authentication information
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'emqx_test',
    password: 'emqx_test',
}

const  host         = "ws://10.0.0.9:9001/mqtt"; //Ws connection
const  userName     = ""; //If it is required.
const  userPassword = ""; //If it is required.

const _mqttClient   =  mqtt.connect(host, options);

//Suscription here!
_mqttClient.subscribe("semaphore/state");

//Listening on every message published on the topic above.
_mqttClient.on("message", function (topic, payload) {

    $messageRecived.innerHTML += 
    `
    <li> ${payload.toString()} </li>
    `;

    console.log([topic, payload].join(": "));
    client.end();
    
});
