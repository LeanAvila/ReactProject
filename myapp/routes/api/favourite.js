const express = require('express');
const moongose = require('mongoose');
const userController = require('../../controllers/userControllers');
const routes = express.Router();
const userModel = require('../../model/user');
const { check, body, header } = require('express-validator');
const passport = require('passport');
const config = require('../../config/keys')
const ExtractJwt = require('passport-jwt').ExtractJwt
const { validationResult } = require('express-validator');
const favouriteController = require('../../controllers/favouriteControllers')




routes
  //<----------------------------- ADD FAVOURITES --------------------------------->
  .post('/add', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], favouriteController.addFavourite)



  //<---------------------------- DELETE FAVOURITES --------------------------------->
  .post('/delete', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], favouriteController.deleteFavourite)


  //<------------------------------- GET FAVOURITES ---------------------------------->
  .post('/all', [
    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], favouriteController.getFavourites)
module.exports = routes;
