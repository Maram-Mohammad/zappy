const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const app = express();
const Twit = require('twit')
var tweet = require('./app/models/tweet.model')
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


var T = new Twit({
    consumer_key: 'BjvThqCCFl6h1DpzUbCVCjYQt',
    consumer_secret: 'CPDsLHMLIgGChWGSpdAlrCJhPkCcwexIHcjfqof4pl5TIHLEkJ',
    access_token: '998915119978549249-bStzGfgWTRkCojnem89gpveDOtpRZPD',
    access_token_secret: '13dqsxQhI83lb2tkGunTXfJuJkX40KKYseUM8jshFcqVB',
})

var options = { screen_name: '_FictionFone' };
T.get('statuses/user_timeline', options , function(err, data) {
    tweet.update({ "id_str": { "$in": data.id_str} },{ "$addToSet": { "text": { "$each": data.text } } },{upsert: true, safe: false},function(err,temp){
        if (err) {
            console.log(err);
        }
        else{
            console.log("success");
        }
    })
})
/*T.get('statuses/user_timeline', options , function(err, data) {
    tweet.create(data,function(err,temp){
        if (err) {
            console.log(err);
        }
        else{
            console.log("success");
        }
    })
})*/
require('./app/routes/tweet.routes.js')(app);
app.listen(3100,function(){
    console.log("Server Will listen on port 3100")
})

