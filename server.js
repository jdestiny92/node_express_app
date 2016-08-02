var express = require('express');
var app = express();
var port = 3000;

var classes = ['darkknight', 'ranger', 'archer', 'samurai', 'paladin', 'summoner', 'cleric', 'alchemist', 'sorcerer'];

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/survey', function(req, res) {
	console.log('hello');
    res.sendfile('survey.html');
});

app.get('/:class', function(req, res) {
    var chosen = req.params.class;

	for(i=0; i<classes.length; i++){
		if(chosen == classes[i]){
			res.sendfile(classes[i] + '.html');
		}
	}
});

app.get('*', function(req, res) {
	res.sendfile('404.html');
});


app.listen(port);