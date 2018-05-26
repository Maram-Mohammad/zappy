const mongoose = require('mongoose');
var tweeetSchema = new mongoose.Schema({
    "created_at": {
        "type": "string"
    },
    "text": {
        "type": "string"
    },
    "id_str": {
        "type": "string"
    },

});
module.exports = mongoose.model('Tweet', tweeetSchema);
