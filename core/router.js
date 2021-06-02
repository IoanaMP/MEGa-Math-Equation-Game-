var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      //console.log("request was made: " + req.url)
      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
              renderHTML('./View/Pages/Homepage.html', response);
              break;
          case '/login':
              renderHTML('./View/Pages/Login.html', response);
              break;
         case '/register':
               renderHTML('./View/Pages/Register.html', response);
               break;
         case '/ecuatii':
            renderHTML('./View/Pages/Ecuatii.html', response);
            break;
         case '/documentatie':
            renderHTML('./View/Pages/Documentatie.html', response);
            break;
          default:
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};