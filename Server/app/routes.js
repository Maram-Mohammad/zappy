module.exports = (app) => {
    const tweets = require('./controllers/tweet.controller.js');
    app.get('/tweets', tweets.findAll);
}

module.exports = (app) => {
    const twit = require('./controllers/twitter.controller.js');
    app.get('/tweets', twit.fetchTweets);
}

module.exports = (app) => {
    const slack = require('./controllers/slack.controller.js');
    app.post('/onSlack', slack.listenMessages);
}
