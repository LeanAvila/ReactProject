var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hashtag: {
        type: Array,
        required: true
    },
    cityId: { 
        type: Schema.ObjectId,
        ref: "cities" 
    } 
})

module.exports = itineraryModel = mongoose.model('itineraries', itinerarySchema)