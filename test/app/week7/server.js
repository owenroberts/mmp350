const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('firebase-admin');
const serviceAccount = require('./key.json');
const firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://new-node-app-b198a.firebaseio.com'
});
const db = admin.database();

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// create authentication middleware
function isAuthenticated(request, response, next) {
	const uid = request.query.uid;
	firebaseAdmin.auth().getUser(uid)
		.then(function(user){
			next();
		})
		.catch(function(error){
			response.redirect('/');
		});
}

app.get('/', function(request, response){
	const ref = db.ref('users').orderByKey();
	ref.once('value')
		.then(function(snapshot){
			console.log(snapshot.val());
			response.render('home.ejs', {
				data: snapshot.val()
			});
		});
	// response.render('home.ejs');
});

app.get('/post', isAuthenticated, function(request, response){
	response.render('post.ejs');
});

app.get('/user/:id', function(request, response) {
	response.render('user.ejs');
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

