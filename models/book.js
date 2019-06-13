

const mongoose = require('mongoose');
let credent = require('../models/credentials');

mongoose.connect(credent.connectionString, { dbName: 'project', useNewUrlParser: true, useFindAndModify: false }); 

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
  });


  const mySchema = mongoose.Schema({
    ISBN: Number,
    title: { type: String, required: true },
    author: String, 
    gender: String,
    publisher: String
});

module.exports = mongoose.model('books', mySchema);

