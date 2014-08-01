var express = require('express');
var app = express();

var hbs = require('hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.bodyParser()); // ?

app.use(express.static('public'));

var blogEngine = require('./blog')

// Router
app.get('/', function(req, res) {
	res.render('index.html', {
		title:"My Blog",
		entries:blogEngine.getBlogEntries()
	});
});

app.get('/about', function(req, res) {
	res.render('about.html');
});

app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article.html', {
		title: entry.title,
		blog: entry
	});
});

app.get('/upload', function(req, res){
	res.render('upload.html');
})
app.get('/upload', function(req, res){
	res.render('upload.html',{content: ''});
})

app.post('/show', function(req, res){
	res.render('show.html', {content: req.body.text})
})


app.listen(8888);