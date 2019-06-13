module.exports = (app) => {
    const book = require('../controller');

    app.get('/api/v1/book', book.getAll);

    app.get('/api/v1/book/:title', book.get);

    app.post('/api/v1/book', book.add);

    app.delete('/api/v1/book/delete/:title', book.delete);

}
