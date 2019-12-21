var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var commentModel = new Schema({
    avatarPicture: {
        type: String,
        required: true
    },
    userId:{
        type: Schema.ObjectId,
        ref: "users"
    },
    publicationDate: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        total: {
            type: Number,
            default: 0
        },
        users: {
            type: Array
        }
    },
    comments: {
        type: Array,
        default: []
    },
    itineraryId: {
        type: Schema.ObjectId,
        ref: "itineraries"
    }
})

module.exports = commentModel = mongoose.model('comments', commentModel)