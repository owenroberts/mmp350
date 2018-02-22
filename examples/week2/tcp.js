const net = require('net');

net.createServer(function(socket){
	//here's our callback
	
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	console.log("connection:", socket.name);
	socket.write("Welcome to my TCP server.\n");
	
	// incoming data
	socket.on('data', function(data){
		console.log(socket.name + " said " + data, "\n");
		socket.write("You said ", data, "\n");
	});
	
	// socket left
	socket.on('end', function() {
		console.log(socket.name, "has left\n");
	});
	
}).listen(5000);

console.log("TCP connection started on localhost 5000");