const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
mongoose.Promise = global.Promise;

mongoose.connect(config.url)
    .then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
process.exit();
});


require('./app/routes.js')(app);
app.listen(3100,function(){
    console.log("Server Will listen on port 3100")
})

