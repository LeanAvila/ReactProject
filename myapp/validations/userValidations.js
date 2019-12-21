const { check, body } = require('express-validator');
const userModel = require('../model/user');

//<--------------------------- CREATE VALIDATION ------------------------------>
exports.create = [
    check('avatarPicture').not().isEmpty().isString(),
    
    //verifico si el username "esta usado", "si contiene algun valor"
    body('userName').custom(value => {
      if (value) {
        return userModel.find({ userName: value }).then(user => {
          if (user.length) {
            return Promise.reject('Username already exist');
          }
        });
      } else {
        return Promise.reject('Username is required');
      }
    }),

    //verifico si la password "minimo requerido de caracteres", "si contiene algun valor"
    body('password').custom(value => {
      if (value) {
        if (!value.length >= 5) {
          throw new Error('The min required for password is 5 characters');
        }

        return true;
      } else {
        return Promise.reject('Password is required');
      }
    }),

    //verifico si las contraseñas coinciden
    body('passwordConfirmation').custom((value, { req }) => {
      if (value) {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }

        // Indicates the success of this synchronous custom validator
        return true;
      } else {
        return Promise.reject('Confirm Password is required');
      }
    }),

    check('firstName', 'First Name is required').not().isEmpty(),

    //verifico si el email "ya esta usado", "si tiene algun valor (requerido)"
    body('email').custom(value => {
      if (value) {
        return userModel.find({ email: value }).then(user => {
          if (user.length) {
            return Promise.reject('Email already in use');
          }
        });
      } else {
        return Promise.reject('Email is required');
      }
    }),

    check('lastName', 'Last Name is required').not().isEmpty(),
    check('country', 'The Country is required').not().isEmpty()
  ]


//<--------------------------- LOGIN VALIDATION ------------------------------>

  exports.login = [
    check('userName').not().isEmpty(),
    check('password').not().isEmpty()
  ]

