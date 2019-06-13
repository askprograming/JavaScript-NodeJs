const booksdb = require('../models/booksdb');


// get all 
exports.getAll = (req, res) => {
    booksdb.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error"
        });
    });
};

// get 
exports.get = (req, res) => {
    booksdb.findOne({'title': req.params.name}, (err, result) => {
        if(err) {
            return err; 
        } return result
        }).then(result => {
            res.send(result);
    })}

// add new book
exports.add = (req, res) => {
    let newbook = {
        ISBN: req.body.ISBN, 
        title: req.body.title, 
        author: req.body.author,
        gender: req.body.gender,
        publisher:req.body.publisher
    }; 

    booksdb.updateOne({'title': newbook.name}, newbook, {upsert: true}, (err, result) => {
        if(err) {
            return err; 
        } return result
    }).then(() => {
    res.status(200).send({
        message: "book added."
    })
    });
}

// delete 
exports.delete = (req, res) => {
    booksdb.findOneAndDelete({'title': req.params.name}, (err, result) => {
        if(err) {
            return err; 
        } return result
        }).then(result => {
            res.status(200).send({
                message: "book deleted."
            })
    })}

//count
exports.count = () => {
    return booksdb.countDocuments((err, count) => {
      return count })};