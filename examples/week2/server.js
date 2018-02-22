const http = require('http');
const port = 8000;
let counter = 0;

http.createServer(function(request, response) { 
	// callback
	
	const path = request.url;
	console.log("requested=", path);
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	if (path != "/favicon.ico") {
		counter = counter + 1;
	}
	console.log("visitor #", counter);
	
	if (path == "/") {
		response.end("<h1>Hello world</h1><p>You are the " + counter + " visitor.</p><a href='/about'>About</a>");
	} else if (path == "/about") {
		response.end("<p>This is the about page</p><a href='/'>Back</a>");
	}
	
}).listen(port);

console.log("Server running at localhost:", port);