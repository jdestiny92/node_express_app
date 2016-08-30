var express = require('express');
var app = express();
//app.use(express.static(__dirname + '/results'));
var port = process.env.PORT || 3000;

var classes = ['darkknight', 'ranger', 'archer', 'samurai', 'paladin', 'summoner', 'cleric', 'alchemist', 'sorcerer'];

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/survey', function(req, res) {
	res.render('survey.html');
});

app.get('/:class', function(req, res) {
    var chosen = req.params.class;

	for(i=0; i<classes.length; i++){
		if(chosen == classes[i]){
			res.render('results/' + classes[i] + '.html');
		}
	}
});

app.get('*', function(req, res) {
	alert('Sorry, that page does not exist!');
});


app.listen(port);