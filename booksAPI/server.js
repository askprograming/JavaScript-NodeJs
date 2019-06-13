const express = require('express');
const bodyParser = require('body-parser');

const models = express();

models.use(bodyParser.urlencoded({ extended: true }))


// Require routes
require('./routes')(app);

models.use(bodyParser.json())

//config database
const credent = require('./modules/credentials.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting database
mongoose.connect(credent.connectionString, { dbName: 'project', useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

//home
models.get('/', (req, res) => {
    res.json({"message": "welcome to the books app!"});
});


models.listen(4000, () => {
    console.log("Server is listening on port 4000");
});