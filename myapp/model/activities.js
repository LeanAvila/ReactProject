var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    details: {
        type: Array,
        required: true
    }
})

module.exports = itineraryModel = mongoose.model('activities', itinerarySchema)