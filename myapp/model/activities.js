var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var activitySchema = new Schema({
    pic: {
        type: String,
        required: true
    },
    idItinerary: {
        type: Schema.ObjectId,
        ref: "itineraries"
    },
    details: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true
    }
})

module.exports = activityModel = mongoose.model('activities', activitySchema)