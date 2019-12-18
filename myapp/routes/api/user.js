const express = require('express');
const moongose = require('mongoose');
const userController = require('../../controllers/userControllers');
const routes = express.Router();
const userModel = require('../../model/user');
const { check, body } = require('express-validator');
const passport = require('passport');
const url = require('url'); 

routes
  .post(
    '/auth',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      userModel
        .findOne({ _id: req.user._id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: 'User does not exist!' }));
    }
  )

  .get(
    '/auth/google/callback',
    passport.authenticate('google', { session: false }),
    function(req, res) {
      
      if(req.authInfo.message){
        res.cookie('token', req.user)
        res.status(301).redirect(`http://localhost:3000/home/${req.user}`)
      }else {
        console.log(req.user, 'usuario enviado por cb')

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
  )
  .get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

  .get('/all', userController.index)

  .post(
    '/register',
    [
      check('avatarPicture')
        .not()
        .isEmpty()
        .isString(),

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

      check('firstName', 'First Name is required')
        .not()
        .isEmpty(),

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

      check('lastName', 'Last Name is required')
        .not()
        .isEmpty(),
      check('country', 'The Country is required')
        .not()
        .isEmpty()
    ],
    userController.create
  )

  .post(
    '/login',
    [
      check('userName')
        .not()
        .isEmpty(),
      check('password')
        .not()
        .isEmpty()
    ],
    userController.login
  );

module.exports = routes;
