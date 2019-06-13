
let router = require('express').Router();

// get users listing
router.get('/', (req, res, next) => {
  res.json({
    status:'API',
    message:'hello again',
  });
});

let bookcontroller = require('./models/booksdb');


router.route('/books')
    .get(bookcontroller.index)
    .post(bookcontroller.new);

router.route('/books')
    .get(bookcontroller.view)
    .delete(bookcontroller.delete);

module.exports = router;