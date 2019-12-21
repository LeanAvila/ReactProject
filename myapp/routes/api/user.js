const userController = require('../../controllers/userControllers');
const passport = require('passport');
const express = require('express');
const routes = express.Router();
const userValidations = require('../../validations/userValidations')

routes

  //<--------------------------------- Auth JWT ------------------------------------>
  .post(
    '/auth', 
    passport.authenticate('jwt', { session: false }),
    userController.authJwt 
  )
  
  //<----------------------------- Auth With Google -------------------------------->
  .get(
    '/auth/google/callback',
    passport.authenticate('google', { session: false }),
    userController.googleCallback
  )

  .get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))


  //<------------------------------- Register User --------------------------------->
  .post(
    '/register', 
    userValidations.create,
    userController.create
  )

  //<-------------------------------- Login User ------------------------------------>
  .post(
    '/login', 
    userValidations.login,
    userController.login
  )
  
module.exports = routes;
