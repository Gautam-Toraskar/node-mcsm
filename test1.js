var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost/testapi/');

describe('User', function (done) {
	it('should return a 200 response', function () {
		api
			.get('/')
			.set('Accept', 'application/json')
			.end(function (err, res) {
				console.log('hello world');
			});

		// console.log('hello world 2');
			// .expect(200, done)
	});
});