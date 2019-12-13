var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');
const userModel = require('../model/user');

const GOOGLE_CLIENT_ID =
  '573216299573-o8j4hlgck98ig342hsj2fka9ulm9cc4n.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'TRCydprp23ULlYi4EjQgVdw8';

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      userModel.findOne({ email: profile.email }).then(user => {
        cb(null, token);
      });
    }
  )
);
