var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
app.use(express.static('public'));
app.set('view engine', 'html');
var classes = ['darkknight', 'ranger', 'archer', 'samurai', 'paladin', 'summoner', 'cleric', 'alchemist', 'sorcerer'];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/survey', function(req, res) {
	res.sendFile(__dirname + '/public/survey.html');
});

app.get('/:class', function(req, res) {
    var chosen = req.params.class;

	for(i=0; i<classes.length; i++){
		if(chosen == classes[i]){
			res.sendFile(__dirname + '/public/' + classes[i] + '.html');
		}
	}
});

app.get('*', function(req, res) {
	alert('Sorry, that page does not exist!');
});


app.listen(port);