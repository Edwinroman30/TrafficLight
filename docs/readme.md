## Introducción:

Este Proyecto consiste en desarrollar una solución de IOT para cruce de peatones
inteligente en calles de la ciudad de Santo Domingo. Esta primera fase consiste en
identificar escenarios de problemas que usted pueda resolver utilizando tecnologías IOT
(internet of things) para cruce de peatones.


### Overview:
<hr>
<center>
<img src="https://github.com/Edwinroman30/TrafficLight/blob/main/docs/IoT_Pedestrian_Traffic_Safaty.drawio.png" width="100%" heigth="50px">
</center>
<hr>


El alcance de esta primera fase, es que ustedes especifiquen su stack de tecnología y la
arquitectura para el proyecto web App potencialmente aplicable para soluciones del
tránsito público, específicamente el cruce de peatones, en condiciones normales, o en
condiciones especiales (discapacidad física, motriz, etc).

### Enlaces de interes:

- http://mqtt.org/
- https://www.rabbitmq.com/
- https://kafka.apache.org/
- https://redis.io/topics/pubsub
- http://www.jtech.ua.es/j2ee/publico/mens-2010-11/sesion01-apuntes.html
- https://mosquitto.org/
- https://pypi.org/project/paho-mqtt/
- https://nifi.apache.org/
- http://docs.getnoodl.com/connecting-to-data.html


## Requerimiento:

Desarrollar una solución de IOT para cruce de peatones inteligente en calles de la
ciudad de Santo Domingo. Este sistema consiste en identificar escenarios de
problemas que usted pueda resolver utilizando tecnologías IOT (internet of things)
para cruce de peatones. Debe de desarrollar una web app potencialmente aplicable
para soluciones del tránsito público, específicamente el cruce de peatones, en
condiciones normales, o en condiciones especiales (discapacidad física, motriz,
etc).

- Permitir enviar señal en la app para poder cruzar la vía.
- Permitir cancelar mi solicitud de cruce antes de 10 segundos.
- La aplicación de móvil (o aplicación web progresiva) debe de dar
seguimiento / enviar un track de la posición de usuario.
- Cada parada tiene un SBC (Single Boards Computers) preferiblemente una
Raspberry Pi, la cual recibirá las señales emitidas por la app móvil (o
aplicación web progresiva).
- Para poder emitir señal a los SBC, los usuarios deben de estar a una distancia
no menor de 3 metros de los terminales SBC.
- El cambio del semáforo estará determinado por la demanda concentrada en
los terminales o SBC.
- El semáforo debe de tener un tiempo X determinado para cambiar de estados,
el cual será establecido cuando haya un cambio en el mismo.
- En al menos unos de los SCB o terminales (preferiblemente ambos) debe de
haber dispositivos que marquen en pantalla los últimos 10 segundos
restantes para cruzar y también un parlante que reproduzca el sonido de los
números.
- Cuando acabe la secuencia de conteo anterior y el estado del semáforo sea
rojo, este debe de mostrar en pantalla un mensaje de que no puede cruzar
(también puede ser un símbolo).
- Llevar un registro del cruce o recorrido donde cada 10 pasos son 1 metro.
- Vibrar el móvil del usuario mientras se pueda cruzar.

Nota: En la actual versión de este proyecto solo se cumple con los puntos esenciales de este, por lo que hago la aclaración
de que no poseé 100% como por ejemplo: Vibrar el móvil del usuario mientras se pueda cruzar. (Aunque se puede implementar).

## Objetivo:

El objetivo principal de este proyecto es poder brindar mayor seguridad y
confortabilidad a los transeúntes con discapacidades (visual, auditiva o motriz) a la
hora de recorrer las vías más transitadas de sus entornos. Este proyecto plantea
usar tecnologías de Internet de las cosas (IoT por sus siglas en Inglés) para brindar
una solución eficaz e innovadora.

## Alcances del proyecto:

##### Alcance:
Construir un nuevo semáforo, que permita a los usuarios peatonales tener mejor
facilidad a la hora de cruzar la calle, el mismo se desarrollará en un plazo de 7 dias ,
y de acuerdo con las especificaciones técnicas del documento adjunto facilitados

##### Limitación:
Pueden encontrarse problemas de compatibilidad en los diferentes dispositivos con
los cuales se correrán las aplicaciones, así como pueden fallar las diferentes
tecnologías de IOT.

### Stack de tecnologías:

- NodeJS.
- JavaScript (client side).
- Mongo DB.
- WebSocket.
- MQTT.
- Paho.js Library
