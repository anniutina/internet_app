// request.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Consignment = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    weight: {
        type: Number
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean
    }
},  { collection: 'requests' });

// mongoose.model(modelName, schema)
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural version of your model name.

module.exports = mongoose.model('Consignment', Consignment);