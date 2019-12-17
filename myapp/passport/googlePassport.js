var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');
const userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');
const options = { expiresIn: 2592000 };

const GOOGLE_CLIENT_ID =
  '496117572524-uddcmontarrk71psjed81n9424cqmn04.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'I3qYJi6Y5zgbrrjLVRVLy2Yz';

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/user/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(profile, "profile google");
      
      userModel.findOne({email: profile._json.email}).then(user => {
        console.log(user, 'usuario')
        if (user){
          let payload = {
            _id: user._id,
            userName: user.userName,
            avatarPicture: user.avatarPicture
          };
          
          jwt.sign(payload, config.SECRET_TOKEN, options, (error, token) => {
            
            if (error) {
              cb(error, false)
            } else {
              cb(null, token, {message: true})
            }
          });
        }else {
            cb(null, profile._json, {message: false})
        }
      })
    }
  )
);
