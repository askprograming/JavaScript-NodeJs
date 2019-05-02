'use strict'
//const http = require("http");
//const fs = require("fs");
const books =require('./lib/books')
//const bodyParser = require("body-parser")
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public')); //set location for static files
app.use(require("body-parser").urlencoded({extended: true}));//parse form submission

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// send static file as response
app.get('/', function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
});




// Handle POST
app.post('/details', function(req,res){
    console.log(req.body)
    var header = 'Searching for:  ' + req.body.title + '<br>';
    var found = books.get(req.body.searchtitle);
    res.render("details", {title: req.body.searchtitle, result: found});
});

// Handle GET 
app.get('/delete', function(req,res){
    let result = books.delete(req.body.title); // delete book object
    res.render('delete', {title: req.body.title, result: result});
});

// define 404 handler
app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('express started');    
});