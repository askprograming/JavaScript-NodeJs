'use strict'
const express = require("express");
const app = express();
const booksdb = require("./lib/booksdb.js");

app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public')); //set location for static files
app.use(require("body-parser").urlencoded({extended: true}));//parse form submission

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");


app.get('/', (req, res, next) => {
  booksdb.getAll().then((items) => {
    res.render('home', {books: items }); 
  }).catch((err) =>{
    return next(err);
  });
});

// to see details 
app.get('/details', (req,res,next) => {
  booksdb.findOne({ title:req.query.title }, (err, books) => {
      if (err) return next(err);
      res.type('text/html');
      res.render('details', {result: books} ); 
  });
});

app.post('/details', (req,res, next) => {
  booksdb.findOne({ title:req.body.title }, (err, books) => {
      if (err) return next(err);
      res.type('text/html');
      res.render('details', {result: books} ); 
  });
});

app.get('/delete', (req,res, next) =>{
  booksdb.remove({title:req.query.title}, (err, result) => {
      if(err) return next(err);
      let deleted = result.n !==0; 
      book.count({}, (err,total) => {
          res.type('text/html');
          res.render('delete', {title: req.query.title, deleted:deleted, total:total} );
      });
  });
});

// define 404 handler
app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});
//app.listen(process.env.PORT || 3000);

app.listen(app.get('port'), function() { 
    console.log('express started');    
});

