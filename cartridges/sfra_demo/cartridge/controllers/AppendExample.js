'use strict';

var server = require('server');

server.get('Start', function (req, res, next) {

	res.render('viewdataexample', {param1:"Hello from AppendExample"});
	next();
});

module.exports = server.exports();