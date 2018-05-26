module.exports = (app) => {
    const tweets = require('./controllers/tweet.controller.js');
    app.get('/tweets', tweets.findAll);
}

