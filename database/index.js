const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/customers', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;