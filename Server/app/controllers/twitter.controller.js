const Twit = require('twit')
var Tweet = require('../models/tweet.model')

var T = new Twit({
    consumer_key: 'BjvThqCCFl6h1DpzUbCVCjYQt',
    consumer_secret: 'CPDsLHMLIgGChWGSpdAlrCJhPkCcwexIHcjfqof4pl5TIHLEkJ',
    access_token: '998915119978549249-bStzGfgWTRkCojnem89gpveDOtpRZPD',
    access_token_secret: '13dqsxQhI83lb2tkGunTXfJuJkX40KKYseUM8jshFcqVB',
})

var options = { screen_name: '_FictionFone' };


function addData(tweetData){
    Tweet.find({ id_str: tweetData.id_str }, function (err, tweets) {
        if (tweets.length) {
            console.log(' exists already');
        } else {
            var tweet = new Tweet(tweetData)
            tweet.save(function (err) {
            });
        }
    });
}


const getTweets = function( ) {
    T.get('statuses/user_timeline', options , function(err, data) {
        for(i=0; i<data.length; i++) {
            addData(data[i]);
        }
    }).then(()=>{
        return 'successfully done';
    }).catch(()=>{
        return "error"
    })
}



module.exports = {
    getTweets
} ;

