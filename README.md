# Cyber 2.0 log analysis

This repo contains a dummy representasion netowrk logs in json format as recoreded by the monitoring applications.

log fields:
```
{
  os: <operating system>,
  hostname: <computer name that *reported* the log>,
  client_time: <request / receive computer time>,
  full_server_time: <server timestamp>,
  process_id: <the process id>,
  process_name: <the executable name>,
  process_path: <process path>,
  application_name: <application display name>,
  protocol: <network protocol>,
  status: <network alert>,
  source_port: <source port>,
  destination_port: <destination port>,
  direction: <network direction>,
  file_path: <process path>,
  x_cast: <network not unicast / unicast>,
  state: <client defence state>,
  source_ip: <source ip>,
  destination_ip: <destination ip>,
  sequence_number: <ipc sequence_number -  irrelevant>,
  sub_sequence_number: <ipc sub_sequence_number - irrelevant>,
  user_name: <logged user>,
  mog_counter: <request sum aggregation from client>,
  destination_path: <file system access request path>,
  reason: <file system access request status>,
  image_path: <the dll that originated request path>,
  image_name: <dll name>,
  parent_path: <the application that owns the dll path>,
  parent_name: <the application that owns the dll display name>,
  chain_array: <ipc - irrelevant>
}
```

Limitations / System spec:
  * The logs are sent in intervals to the server.
  * Several fields are automatically added by elastic / logstash therefore are not mentioned.
  * Dll can send request on behalf of an application.
  * The logs are supplied from several computers in the same network.

The logs contain request types:
  * tcp.
  * udp.
  * udp broadcast.
  * fsa activity (network file system access).


## Assignment Description

The purpose of this assignment is to identify malicious application from the logs supplied
and display them in a simple dashboard.
There are several malicious application activity recorded in the logs.

An application will be considered malicious by having:
  * A lot of blocked activity on single computer.
  * A lot of legitimate network activity on port / dest.



## Backend

The backend should supply the following api routes:
  * Top 3 infected computers.
  * Top 3 malicious applications in the top 3 infected computers.
  * Top 3 malicious application names.
   


## Frontend
No real demand, a page as simple as 3 html table with a button for data request.

The only demand is that the application ui will be part of the node project.

## Frameworks
Must use a node js backend.
Node event loop hang must be taken in consideration.
Can convert the json to any performant data structure /database.

If needed a deployment instruction must be supplied (Not limited to the assignment time limit).