var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var registerSchema   = new Schema({
    name: String,
    username: String,
    priority: String
});

module.exports = mongoose.model('register', registerSchema);