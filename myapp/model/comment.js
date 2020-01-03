var mongoose = require('mongoose')
const moment = require('moment')

var Schema = mongoose.Schema;

var commentModel = new Schema({
    avatarPicture: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        req: true
    },
    userId:{
        type: Schema.ObjectId,
        ref: "users"
    },
    publicationDate: {
        type: String,
        default: moment().format('MMM Do YYYY, H:mm:ss')
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
            type: Array,
            default: []
        }
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments"
        }
    ],
    itineraryId: {
        type: Schema.ObjectId,
        ref: "itineraries"
    }
})

module.exports = commentModel = mongoose.model('comments', commentModel)