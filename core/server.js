var http = require('http');
var app = require('./router');

http.createServer(app.handleRequest).listen(8000);
console.log("Listening");