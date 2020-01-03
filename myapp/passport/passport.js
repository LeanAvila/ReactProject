//documentacion requerida para crear estrategia de JWT (middleware)
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');

//documentacion requerdida para comprobar si existe usuario en mi DB
const userModel = require('../model/user');

//documentacion requerida para desencriptar token
const opts = {};
const config = require('../config/keys');

//documentacion requerida para extraer el token de las headers
const ExtractJwt = require('passport-jwt').ExtractJwt;

//extraigo del header el token con "ExtractJwt.fromAuthHeaderAsBearerToken()" y lo agrego a mi obj de "opts"
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//agrego mi SECRET_TOKEN a mi obj de "opts"
opts.secretOrKey = config.SECRET_TOKEN;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    
    //compruebo si el contenido del token (jwt_payload) tiene un usuario que existe en la DB
    userModel.findById(jwt_payload._id)
      .then(user => {

        if (user) {
          /*si el usuario existe en mi DB, entonces le devuelvo los datos 
          funcion done (Error: any, User: any)), en el parametro User van los datos que queremos devolver en la respuesta
          es como un res.status(200).send({error: null, user: 'usuario'})
          */
          return done(null, user);
        }

        //si el usuario no existe en la DB entonces le devuelvo FALSE como usuario
        return done(null, false);
      })
  })
);