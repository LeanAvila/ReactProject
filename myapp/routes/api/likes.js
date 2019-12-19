const express = require('express')
const routes = express.Router()
const { check, body, header } = require('express-validator')
const likeControllers = require('../../controllers/likeControllers')




routes
  //<----------------------------- ADD LIKE --------------------------------->
  .post('/add', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], likeControllers.addLike)



  //<---------------------------- DELETE LIKE --------------------------------->
  .post('/delete', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], likeControllers.deleteLike)


  //<------------------------------- GET LIKES ---------------------------------->
  .post('/all', [
    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()
    
    ], likeControllers.getLikes)
module.exports = routes;