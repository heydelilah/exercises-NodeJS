var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var names = ['ss'];

app.use(bodyParser.urlencoded({extended: true}));

app.all('/', function(req, res, next){
	next();
})

app.get('/', function(req, res){
	// res.send('hello delilah');
	res.render('index.jade', {
		names: names
	})
});

app.post('/', function(req, res){
	names.push(req.body.name);
	console.log(names);
	res.redirect('/');

})

app.listen(3001, function(){
	console.log('running');
})