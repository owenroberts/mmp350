const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

const admin = require('firebase-admin');
const serviceAccount = require('./mmp-350-test-firebase-adminsdk-j9cue-60dd382833.json');
const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://mmp-350-test.firebaseio.com'
});
const db = firebaseAdmin.database();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('views'));

function isAuthenticated(request, response, next) {
	next();
}

app.get('/', function(request, response) {
	const restRef = db.ref('/rest');
	restRef.once('value', function(snapshot) {
		response.render('home.ejs', {
			rest: snapshot.val()
		});
	});
});

app.get('/queen', isAuthenticated, function(request, response) {
	response.render('queen.ejs');
});

app.post('/', function(request, response) {
	response.render('results.ejs', { data: request.body.breakfast });
});

// const port = process.env.PORT || 8000;
// app.listen(port, function() {
// 	console.log('App running on port', port);
// });

exports.app = functions.https.onRequest(app);