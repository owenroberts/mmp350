const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send('<h1>Welcome to my website.</h1>');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("App running on port", port);
});