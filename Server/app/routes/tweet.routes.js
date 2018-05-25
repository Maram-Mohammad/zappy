module.exports = (app) => {
    const tweets = require('../controllers/tweet.controller.js');

    // Retrieve all Tweets
    app.get('/tweets', tweets.findAll);

   }
