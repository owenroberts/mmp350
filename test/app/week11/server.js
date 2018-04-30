const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://new-node-app-b198a.firebaseio.com'
});
const db = admin.database();

function isAuthenticated(request, response, next) {
	const uid = request.query.uid;
	firebaseAdmin.auth().getUser(uid)
		.then(function(user){
			next();
		})
		.catch(function(error){
			console.log(error);
			response.redirect('/');
		});
}

const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sassMiddleware({
	src: path.join(__dirname, 'public/css'),
	dest: path.join(__dirname, 'public/css'),
	debug: true,
	outputstyle: 'compressed',
	prefix: '/css'
}));
app.use(express.static('public'));

app.get('/', function(request, response) {
	response.render('home.ejs');
});

app.get('/login', function(request, response) {
	response.render('login.ejs');
});

app.get('/create', function(request, response) {
	response.render('create.ejs');
});

app.get('/post', isAuthenticated, function(request, response) {
	response.render('post.ejs');
});

app.get('/users', function(request, response){
	const ref = db.ref('users');
	ref.once('value')
		.then(function(snapshot){
			console.log(snapshot);
			response.render('users.ejs', {
				data: snapshot.val()
			});
		});
});

app.get('/user/:id', function(request, response) {
	const ref = db.ref('users/' + request.params.id);
	ref.once('value')
		.then(function(snapshot){
			response.render('user.ejs', {
				data: snapshot.val(),
				user: request.params.id
			});
		});
});

app.get('/profile', function(request, response){ 
	response.render('profile.ejs');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("App running on port", port);
});



