const Twit = require('twit')
var tweet = require('./app/models/tweet.model')

var T = new Twit({
    consumer_key: 'BjvThqCCFl6h1DpzUbCVCjYQt',
    consumer_secret: 'CPDsLHMLIgGChWGSpdAlrCJhPkCcwexIHcjfqof4pl5TIHLEkJ',
    access_token: '998915119978549249-bStzGfgWTRkCojnem89gpveDOtpRZPD',
    access_token_secret: '13dqsxQhI83lb2tkGunTXfJuJkX40KKYseUM8jshFcqVB',
})

var options = { screen_name: '_FictionFone' };



/*exports.fetchTweets = (req, res) => {
    T.get('statuses/user_timeline', options , function(err, data) {
        tweet.create(data,function(err,temp){
            if (err) {
                console.log(err);
            }
            else{
                console.log("success");
            }
        })
    })
};*/

exports.fetchTweets = (req, res) => {
    T.get('statuses/user_timeline', options , function(err, data) {

        for(i=0; i<data.length; i++) {
            tweet.findOne({
                    id_str: data[i].id_str
                })
                .exec()
                .then(function (tweet) {
                    console.log('already here');
                })
                .catch(function (err) {
                    tweet.create(data[i], function (err, data) {
                        console.log('success')
                    })
                });
        }

    })
};


