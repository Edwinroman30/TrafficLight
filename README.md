# Traffic Light
In this repository you will find a smart solution for a Traffic Light. Essentially, using (IoT) Internet of Things tools. The main idea of it is to bring support to disabled people or any kind of person with issues at the time of crossing the streets.

### Overview:
<hr>
<center>
<img src="https://github.com/Edwinroman30/TrafficLight/blob/main/docs/IoT_Pedestrian_Traffic_Safaty.drawio.png" width="100%" heigth="50px">
</center>
<hr>


## Mosquitto Broker configurations:

##### To install mosquitto:

`sudo apt-get install mosquitto=2.0.12`


------------


##### Also install the mosquitto client:

`sudo apt-get installar mosquitto_client`

> Locate at the mosquitto files `root@username:/etc/mosquitto#`:


<br>


Lets configure the **mosquitto.conf** file:

> Cause we are using mosquitto version 2.x.x, that means its include security functionalities like authentication and forbid the external connections. That's why we're going to set some configurations to allow access from another machine to our server broker.

`nano mosquitto.conf`

> listener 1883 0.0.0.0 #To access with the IP address
protocol mqtt
allow_anonymous true 

> listener 9001 #To enable websockets
protocol websockets


<br>


##### Stopping the service:
`service mosquitto stop`

------------

##### Last step, run the mosquitto from the configuration files:

`mosquitto -c mosquitto.conf -p 1884`


<br>

## Documentation:
-  <a href="https://github.com/Edwinroman30/TrafficLight/tree/main/docs"> Documentation (Spanish) </a>
- <a href="https://github.com/Edwinroman30/TrafficLight/blob/main/docs/mosquitto_commands.md">Useful configuration resources.</a>
