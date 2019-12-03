var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var citySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    itineraries: {
        type: Array,
        required: true
    }
})

module.exports = cityModel = mongoose.model('cities', citySchema)