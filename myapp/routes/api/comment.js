const express = require('express')
const routes = express.Router()
const { check, body, header } = require('express-validator')
const commentControllers = require('../../controllers/commentControllers')




routes
  //<----------------------------- ADD COMMENT --------------------------------->
  .post('/add', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    //verifico si el contenido del comentario no esta vacio
    check ('content').not().isEmpty().withMessage('missing content of the comment'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], commentControllers.addComment)



  //<---------------------------- DELETE COMMENT --------------------------------->
  .post('/delete', [
    //verificando si itineraryId no esta vacio
    check ('itineraryId').not().isEmpty().withMessage('missing itineraryId'),

    check ('commentId').not().isEmpty().withMessage('missing comment id'),

    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()

    ], commentControllers.deleteComment)


  //<------------------------------- GET COMMENTS ---------------------------------->
  .post('/all', [

    //verificando si el itineraryId no esta vacio
    check('itineraryId', 'missing itinerary id').not().isEmpty(),
    //verificando si el token es enviado en la cabecera "authorization"
    header('authorization', 'el token es requerido').not().isEmpty()
    
    ], commentControllers.getComments)


module.exports = routes;