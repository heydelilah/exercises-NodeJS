var chai = require('chai')
var should = chai.should();
var sinon = require('sinon');

var server = require('../server');

describe('Server', function () {
	beforeEach(function () {

	});
	it('should be defined', function () {
		server.start.should.exist;
	});
	it('should create a server', function () {
		var cb = sinon.spy();
		server.start(cb);
		// @todo...
	});
});