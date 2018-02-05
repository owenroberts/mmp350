var net = require('net');

net.createServer(function(socket) {

	// identify new client
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	console.log('client', socket.name);
	socket.write("Welcome to the tcp server\n");

	// incoming data event
	socket.on('data', function(data) {
		console.log("Client said: " + data); // server log
		socket.write("You said: " + data); // write to client
	});


	// end event
	socket.on('end', function(){
		console.log(socket.name, "left us.")
	});
    
}).listen(5000);

console.log("Tcp server started on localhost 5000");