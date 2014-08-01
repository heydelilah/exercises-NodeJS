### About
- Use Express to Build a simple blog.

### Tech Points
- Express(NodeJS)
- Handlebars

### References & Resources
- http://code.tutsplus.com/tutorials/introduction-to-express--net-33367  - by Raymond Camden (19 Jul 2013)

###  Live demo:
- Demo: http://heydelilah.github.io/exercises-NodeJS/tuts-ExpressBlog/index.html

### Notes
- `express` (-g) will generate a skeleton;
- `var app = express();`
- Router: `app.get('url', function(req, res){});`
- Response: `res.send();`, `res.sendFile('url');`
- Template:
	- `app.set('view engine', 'html');`
	- `app.engine('html', hbs.__express);`
	- `res.render('name or url');`
- Dynamic URLs : `:id`, `req.params.id`