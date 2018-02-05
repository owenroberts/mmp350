const http = require('http');
const port = 8000;
let counter = 0;

http.createServer(function(request, response) {
	var path = request.url;
	console.log("requested=", path);
	response.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers

	counter = counter + 1;
	console.log("counter=", counter);

	if (path == "/") {
		response.end("Hello World. You are visitor #" + counter + " <a href='/cool'>Cool.</a>");
	} else if (path == "/cool") {
		response.end("This is page 2. <a href='/'>Back.</a>\n"); // send response and close connection
	}
}).listen(port);

console.log('Server running at localhost:' + port);