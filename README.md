# Traffic Light
In this repository you will find a smart solution for a Traffic Light. Essentially, using (IoT) Internet of Things tools. The main idea of it is to bring support to disabled people or any kind of person with issues at the time of crossing the streets.

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
> 
listener 9001 #To enable websockets
protocol websockets


<br>


##### Stopping the service:
`service mosquitto stop`

------------

**Last step, run the mosquitto from the configuration files:**
`mosquitto -c mosquitto.conf -p 1884`


<br>

Useful foros:

> https://stackoverflow.com/questions/54878001/cannot-get-mosquitto-to-allow-connection-from-outside-local-network

> https://www.youtube.com/playlist?list=plzermiwkdsxyydzmk7z4wzzy8neg0z-fw

Using segure connection on mosquitto:
> 
https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-the-mosquitto-mqtt-messaging-broker-on-debian-9

> https://www.programmersought.net/en/article/324140099.html

Mosquitto instalation on windows 10:
> https://www.youtube.com/watch?v=cl6n3wafweq