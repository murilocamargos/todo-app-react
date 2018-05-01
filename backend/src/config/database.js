const mongoose = require('mongoose')
// Mongoose API is deprecated
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')