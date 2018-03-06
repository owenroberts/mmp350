const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("App running on port", port);
});



