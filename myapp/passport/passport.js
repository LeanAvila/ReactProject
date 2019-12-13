const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/user');
const key = require('../config/keys');
const passport = require('passport');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.SECRET_TOKEN;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    userModel
      .findById(jwt_payload._id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);
