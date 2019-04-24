const http = require("http");
const fs = require("fs");
const express = require('express');
const books =require('./lib/books');


http.createServer((req, res) =>{
    const path = req.url.toLocaleLowerCase();

    switch(path){
        case '/':
            fs.readFile("/public/home.html", (err, data)=>{
                if(err) return console.error(err);
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data.toString());
            });

            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('about page');
            break;

        case '/getAll':
            res.writeHead(200, {'Content -type':'text/plain'});
            let found1= home.getAll();
            let result1= (found1)?JSON.stringify(found1):"Not found";
            res.write(result1 + "\n");
            res.end("\n");
            break;

        case '/delete':
            let deleted = books.delete(title);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let deletedd = (deleted) ? JSON.stringify(deleted): "Not found";
            break;
        case '/add':
            let added = books.add(title.nodeintro);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(results);
            break;
        default:
            res.writeHead(404,{'content-type':'text/plain'});
            res.end('404:page not found');
            break;
    }
}).listen(process.env.PORT || 3000);
