var http = require('http');
var app = require('./app');
//var app = require('./key');

http.createServer(app.handleRequest).listen(8000);
