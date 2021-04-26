var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CustomerSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);



