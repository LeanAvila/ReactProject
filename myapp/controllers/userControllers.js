//documentacion requerida para crear/modificar usuarios
const userModel = require('../model/user');

//documentacion requerida para validacion
const { validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');

//documentacion requerida para JWT
const jwt = require('jsonwebtoken');
const config = require('../config/keys');
const options = { expiresIn: 2592000 };

//documentacion requerida para crear URLs
const url = require('url'); 


//<------------------------- Create Controller ------------------------------->

exports.create = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    //si existen errores de validacion entonces los retorna en un array JSON
    return res.status(422).json({ errors: errors.array() });
  } else {
    //si no hay errores entonces crea el usuario
    new userModel(req.body)
      .save()
      .then((user) => {
        //despues de crear el usuario, crea el token y lo devuelve en la respuesta
        let payload = {
          _id: user._id,
          userName: user.userName,
          avatarPicture: user.avatarPicture
        };

        //creando el token
        jwt.sign(payload, config.SECRET_TOKEN, options, (error, token) => {
          if (error) {
            res.status(500).send({ error });
          } else {
            res.status(200).send({token})
          }
        });
      })
      .catch(error => res.status(500).send({ error }));
  }
};



//<----------------------------- Login Controller ---------------------------------->

exports.login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    //si existen errore de validacion entonces los retorna en un array JSON
    return res.status(422).json({ errors: errors.array() });

  } else {

    //si no hay errores entonces procedemos a comprobar los usuarios 

    /*
    body = {
      userName : String,
      passWord : String
    }
    */

    let userName = req.body.userName;
    let password = req.body.password;

    userModel.findOne({ userName }).then(user => {

      if (!user) {

        //si el usuario no existe, entonces devuelve un error 404 (not Found) con un mensaje
        return res.status(404).send({ message: 'El usuario no existe' });

      } else {

        //si el usuario existe, se compara la contraseña con bycrypt
        bycrypt.compare(password, user.password).then(match => {
          //match retorna true si coinciden las contraseñas, en caso contrario false

          if (match) {

            //si hubo coincidencia entonces crea el token y lo devuelve en la respuesta
            let payload = {
              _id: user._id,
              userName: user.userName,
              avatarPicture: user.avatarPicture
            };

            //creando el token
            jwt.sign(payload, config.SECRET_TOKEN, options, (error, token) => {
              if (error) {
                res.status(500).send({ error });
              } else {
                res.status(200).send({token})
              }
            });

          } else {

            //si la contraseña no es la misma, devuelve un msj de 'Acceso Denegado'
            return res.status(200).send({ message: 'Acceso Denegado (contraseña Incorrecta)' });

          }
        });

      }
    });
  }
};


//<------------------------------- CallBack Google Controller ----------------------------->

exports.googleCallback = (req, res) => {
  /*
  req.authInfo = {
    message : boolean
  }
  
  message = 
    true: significa que el usuario de google existe y que en "req.user" esta recibiendo el token
    false: significa que el usuario de google no existe y que en "req.user" esta recibiendo los datos del usuario de google
  */

  if(req.authInfo.message){

    //redireccionando a la pagina principal con el token en la URL (en el query)
    res.status(301).redirect(`http://localhost:3000/home/?token=${req.user}`)

  }else {

    //redireccionando a la pagina "signup" para crear una cuenta, ya que el usuario de google no existe en mongo db
    res.status(301).redirect(url.format({
      pathname: 'http://localhost:3000/signup',
      query: {
        firstName : req.user.given_name,
        lastName: req.user.family_name,
        email: req.user.email,
        avatarPicture: req.user.picture
      }
    }))

  }
}