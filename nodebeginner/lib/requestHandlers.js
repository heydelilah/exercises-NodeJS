var fs = require('fs');
var querystring = require("querystring");
var formidable = require('formidable');

function start(response) {
	var file = fs.readFileSync('lib/tpl/start.html');

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(file);
	response.end()
}
exports.start = start;

function upload(response, request) {
	var form = new formidable.IncomingForm({
		uploadDir: __dirname + '/data', // 设置上传图片的路径
		keepExtensions: true
	});

	form.parse(request, function(error, fields, files) {

	fs.renameSync(files.upload.path, "lib/data/test.png");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("received image:<br/>");
	response.write("<img src='/show' />");
	response.end();
	});
}
exports.upload = upload;

function show(response, data){
	fs.readFile("lib/data/test.png", "binary", function(err, file) {
		if(err) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(err + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}
exports.show = show;