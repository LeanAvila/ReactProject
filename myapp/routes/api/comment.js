const express = require('express')
const routes = express.Router()
const { check, body, header } = require('express-validator')
const commentControllers = require('../../controllers/commentControllers')




routes
  //<----------------------------- ADD LIKE --------------------------------->
  .post('/add', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], commentControllers.addComment)



  //<---------------------------- DELETE LIKE --------------------------------->
  .post('/delete', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    check ('content').not().isEmpty().withMessage('missing content of the comment'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], commentControllers.deleteComment)


  //<------------------------------- GET LIKES ---------------------------------->
  .post('/all', [
    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()
    
    ], commentControllers.updateComment)


module.exports = routes;