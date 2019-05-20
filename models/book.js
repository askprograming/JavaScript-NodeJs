const mongoose = require('mongoose');

// remote db connection settings//to connect with mongodb 
const connectionString = "mongodb+srv://dbuser:bdpassword@cluster0-3fmsb.mongodb.net/test?retryWrites=true";
mongoose.connect(connectionString, { dbName: 'project', useNewUrlParser: true });
 

const conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

const mySchema = mongoose.Schema({
    ISBN: Number,
    title: { type: String, required: true },
    author: String, 
    gender: String,
    publisher: String, 

},

//{collection: 'books' }
); 
module.exports = mongoose.model('books', mySchema);