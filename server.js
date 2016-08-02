var express = require('express');
var app = express();
var port = 3000;

var classes = ['dark knight', 'ranger', 'archer', 'samurai', 'paladin', 'summoner', 'cleric', 'alchemist', 'sorcerer'];

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/survey', function(req, res) {
    res.sendfile('survey.html');
});

app.get('/:class', function(req, res) {
    var chosen = req.params.class;

	console.log(chosen);
});


app.listen(port);