const express = require('express')
const moongose = require('mongoose')
const userController = require('../../controllers/userControllers')
const routes = express.Router();
const userModel = require('../../model/user')
const User = moongose.model('users');
const { check, body } = require('express-validator');

routes.get('/all', userController.index)

      .post('/register', [
            body('userName').custom(value => {
                  if (value){
                        return userModel.find({userName: value}).then(user => {
                              if (user.length){
                                    return Promise.reject('username already exist')
                              }
                        })
                  }else {
                        return Promise.reject('username is required')
                  }
            }),
            /* Se que existe la function "isLength({min: 5})" , "not().isEmpty()", pero quiero ser un poco mas especifico con los errores que quiero
            mostrar, ya que si utilizo la forma mas simple, en caso de no agregar password, me salen 2 errores(el segundo sería la cantidad de caracteres
            minimos requeridos), pero el principal sería que esta vacio, es por eso que si esta vacio me muestre un solo error y no los 2
            */
            body('password').custom(value => {
                  if (value){
                        if (!value.length >= 5){
                              return Promise.reject('the min required is 5 characters')
                        }
                  }else{
                        return Promise.reject('password is required')
                  }
            }),

            body('passwordConfirmation').custom((value, {req}) => {
                  if (value){
                        if (value !== req.body.password) {
                              throw new Error('Password confirmation does not match password');
                            }
                            
                            // Indicates the success of this synchronous custom validator
                            return true;
                  }else{
                        return Promise.reject('confirm password is required')
                  }
            }),

            check('firstName', 'the password is required').not().isEmpty(),

            body('email').custom((value) => {
                  if (value){
                        return userModel.find({email: value}).then(user => {
                              if (user.length){
                                    return Promise.reject('email already in use');
                              }
                        })
                  }else{
                        return Promise.reject('email is required');
                  }
                  
            }),

            check('lastName', 'the password is required').not().isEmpty(),
            check('country', 'the country is required').not().isEmpty(),
          ], userController.create)

module.exports = routes