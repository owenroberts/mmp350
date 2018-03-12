const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('firebase-admin');
const serviceAccount = require('./new-node-app-b198a-firebase-adminsdk-9d1oi-bcc5c54756.json');
const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://new-node-app-b198a.firebaseio.com'
});

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// create authentication middleware
function isAuthenticated(request, response, next) {
	if (request.query.user) {
		next();
	} else {
		response.redirect('/');
	}
}

app.get('/', function(request, response){
	response.render('home.ejs');
});

app.get('/post', isAuthenticated, function(request, response){
	response.render('post.ejs');
});

app.get('/login', function(request, response){
	response.render('login.ejs');
});

app.get('/create', function(request, response){
	response.render('create.ejs');
});


const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("App running on port ", port);
});

