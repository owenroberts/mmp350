const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(request, response){
	response.render('home.ejs');
});

app.post('/', function(request, response){
	const username = request.body.username;
	response.render('login.ejs', {username: username} );
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("App running on port ", port);
});

