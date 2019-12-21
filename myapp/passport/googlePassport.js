//documentacion requerida para la Estrategia de Google
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');
const userModel = require('../model/user');

//documentacion requerida para JWT
const jwt = require('jsonwebtoken');
const config = require('../config/keys');
const options = { expiresIn: '1d' };



module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.GOOGLE_CLIENT_ID,
      clientSecret: config.google.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/user/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      
      //despues de logearse con google comprueba si existe en la db el usuario
      
      userModel.findOne({email: profile._json.email}).then(user => {

        if (user){
          //si el usuario existe entonces crea el token
          let payload = {
            _id: user._id,
            userName: user.userName,
            avatarPicture: user.avatarPicture
          };

          //creando el token
          jwt.sign(payload, config.SECRET_TOKEN, options, (error, token) => {

            if (error) {

              cb(error, false)
            
            } else {
            
              //si el token se pudo crear, entonces lo envia al CallBack junto con un msj con valor TRUE 
              //(en "../controllers/userControllers.js" --> "Callback Google Controller" explico que significa)
              cb(null, token, {message: true})
            
            }
          });
        }else {

          //en caso de que el usuario no exista, envio los datos del usuario de google, con un msj con valor FALSE
          //(en "../controllers/userControllers.js" --> "Callback Google Controller" explico que significa)
          cb(null, profile._json, {message: false})
          
        }
      })
    }
  )
);
