var url = require('url');
var fs = require('fs');
var path = require('path');


function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        //response.end();
    });
}

module.exports = {
  handleRequest: function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      //console.log("request was made: " + req.url)
      var pathr = url.parse(req.url).pathname;
    if (req.method === "GET"){
    if(req.url === "/" || req.url === "/homepage"){
        fs.readFile("./View/Pages/Homepage.html", "UTF-8", function(err, html){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, '../View', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }else if(req.url.match("\.js$")){
        var cssPath = path.join(__dirname, '../View', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "application/javascript"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname, '../View', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);
    }else if(req.url.match("\.svg$")){
        var svgPath = path.join(__dirname, '../View/Pages', req.url);
        var fileStream = fs.createReadStream(svgPath);
        res.writeHead(200, {"Content-Type": "image/svg+xml"});
        fileStream.pipe(res);
    }else if(req.url.match("login")){
        fs.readFile("./View/Pages/login.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("register")){
        fs.readFile("./View/Pages/register.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("ecuatii")){
        fs.readFile("./View/Pages/ecuatii.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("adminpage")){
        fs.readFile("./View/Pages/adminpage.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("adaugaecuatii")){
        fs.readFile("./View/Pages/adaugaecuatii.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("documentatie")){
        fs.readFile("./View/Pages/documentatie.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }}
    /*
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
      }*/

  }
};