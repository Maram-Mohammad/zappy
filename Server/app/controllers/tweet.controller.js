const Tweet = require('../models/tweet.model.js');

exports.findAll = (req, res) => {
    Tweet.find()
        .then(tweets => {
        res.send(tweets);
}).catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving tweets."
    });
});
};