const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('firebase-admin');
const serviceAccount = require('./mmp-350-test-firebase-adminsdk-j9cue-60dd382833.json');
const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://mmp-350-test.firebaseio.com'
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('views'));

function isAuthenticated(request, response, next) {

}

app.get('/', function(request, response) {
	//response.send("<h1>I'm alive!</h1>");
	response.render('home.ejs');
});

app.get('/queen', isAuthenticated, function(request, response) {
	response.render('queen.ejs');
});

app.post('/', function(request, response) {
	response.render('results.ejs', { data: request.body.breakfast });
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log('App running on port', port);
});