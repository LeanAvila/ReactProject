var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    title: {
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
    likes: {
        total: {
            type: Number
        },
        users: {
            type: Array
        }
    },
    comments: {
        type: Array,
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