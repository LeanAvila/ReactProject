var mongoose = require('mongoose')
var bcrypt = require ('bcryptjs')

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirmation: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    lastLoginDate :{
        type: Date,
        default: Date.now()
    },
    signUpDate : {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre('save', function(next){
    let user = this
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            next()
        });
    });
});

module.exports = userModel = mongoose.model('users', userSchema)