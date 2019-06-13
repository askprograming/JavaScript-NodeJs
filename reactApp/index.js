const express = require('express');        
const app = express();                 
let bodyParser = require('body-parser');

let book = require('./models/book');

let handlebook =  require("express-handlebook");
app.engine(".html", handlebook({extname: '.html', defaultLayout: false}));
app.set("view engine", ".html");



// configure app 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set port
const port = process.env.PORT || 4000;        


//API routes
let router = express.Router();  

// middleware 
router.use((req, res, next) => {
    console.log('yes its working');
    next(); 
});

//home 
app.get('/', (req,res) => {
    book.find({}, (err, books) => {
        if (err)
            res.send(err);
            res.render('home', {books: JSON.stringify(books)} );
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error"
        });
    });
   });


// test route 
router.get('/', (req, res) => {
    res.json({ message: 'api route' });   
});

// routes ends in /books
router.route('/books')


// get all the books 
    .get((req, res) => {
        book.find((err, books) => {
            if (err)
                res.send(err);

            res.json(books);
        });
    });


// routes ends in /books/:book_title
router.route('/books/:book_title')

// get a book  
    .get((req, res) => {
        book.findByTitle(req.params.book_title,  (err, book) => {
            if (err)
                res.send(err);
            res.json(book);
        });
    })


//add 
router.route('/books/add')
    .post((req,res, next) => {
    if (!req.body._title) { 
        let book = newbook({name:req.body.name,title:req.body.title,type:req.body.type});
        book.save((err,newbook) => {
            if (err) return next(err);
            console.log(newbook)
            res.json({updated: 0, _title: newbook._title});
        });
    } else { 
        // update 
        book.updateOne({ _title: req.body._title}, {name:req.body.name, title: req.body.title, type: req.body.type }, (err, result) => {
            if (err) return next(err);
            res.json({updated: result.nModified, _title: req.body._title});
        });
    }
});

// delete 
router.route('/books/delete/:book_title')
    .get((req, res, next) => {
        book.remove({_title:req.params.book_title }, (err, result) => {
            if (err) return next(err);
            res.json({message: 'deleted.'});
    });
});

//  routes
app.use('/api', router);

app.listen(port);
console.log('Server is running ' + port);