'use strict'
const express = require("express");
const app = express();
const booksdb = require("./models/booksdb.js/index.js");

app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public')); //set location for static files
app.use(require("body-parser").urlencoded({extended: true}));//parse form submission

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");


// home 
app.get('/', (req,res) => {
    res.render('home');
});

app.get('/books', (req, res, next) => {
  booksdb.getAll().then((items) => {
    res.send({books: items});
  }).catch((err) => {
    return next(err);
  });
});


app.post()
//get details
app.post('/details', (req,res) => {
  booksdb.get(req.body.title).then((item)=>{
      res.render('details', {title:req.body.title, item})
  })
});

//delete and count
app.get('/delete', (req,res) => {
  booksdb.delete(req.query.title).then(()=>{
      booksdb.count().then((count) => {
          res.render('delete', {title: req.query.title, count} );
      })
  });
});

// define 404 handler
app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});
//app.listen(process.env.PORT || 4000);

app.listen(app.get('port'), function() { 
    console.log('express started');    
});

