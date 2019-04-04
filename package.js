/*var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
*/

const http = require("http");
const fs = require("fs");

   http.createServer(function(req,res){
   console.log('request was made: ' + req.url);
     fs.readFile("home.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
   
   
   
   if(req.url === '/'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home page');
   }
   else if(req.url === '/about'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page');
   }   
   else if(req.url === '/contact'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('contact page');
   }
  else{
     res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Page Not found');
   }
   
}).listen(process.env.PORT || 3000);