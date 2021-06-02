const http = require('http')
const port = 3030
const url = require('url');
const fs = require('fs');

http.createServer(async (request, response) => {
  response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./View/index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
  
}).listen(port);