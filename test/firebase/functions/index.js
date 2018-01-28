const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send(`${Date.now()}`);
});

exports.app = functions.https.onRequest(app);