var chai = require('chai')
var should = chai.should();
var sinon = require('sinon');

var app = require('../requestHandlers');

describe('RequestHandlers', function () {
	describe('start', function () {
		beforeEach(function () {
			this.spy = sinon.spy();
			app.start(this.spy)
			// @todo...
		});
	});

});