var chai = require('chai')
var should = chai.should();
var app = require('../server');


describe('Server', function () {
	it('should be defined', function () {
		app.start.should.exist;
	});
});