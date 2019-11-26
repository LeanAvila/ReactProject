var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = itineraryModel = mongoose.model('itineraries', citySchema)