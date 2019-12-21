//documentacion requerida para crear/modificar/obtener datos de usuarios
const userModel = require('../model/user');
const commentModel = require('../model/comment');

//documentacion requerida para validacion
const { validationResult } = require('express-validator');

//documentacion requerida para JWT
const jwt = require('jsonwebtoken');
const config = require('../config/keys');


//A favoritos lo agrego en el modelo de mi usuario de mongo db atlas

/*

userModel : {
    avatarPicture: String,
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    country: String,
    favourites: Array (contienen los id de los itinerarios),
    likes : Array (contienen los id de los itinerarios),
    lastLoginDate: Date,
    signUpDate: Date
}

*/


//<----------------------------------- ADD COMMENT ------------------------------------->

exports.addComment = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, token) => {
            if (err) {

                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})

            } else {
                //busco el usuario
                userModel.findOne({_id: token._id}).then( user => {

                    if (user){

                        //si existe entonces crea el nuevo comentario
                        new commentModel({
                            avatarPicture: user.avatarPicture,
                            userId : user._id,
                            content: req.body.content,
                            itineraryId: req.body.itineraryId
                        }).save()
                        .then(newComment =>{
                            if (newComment){
                                commentModel.find({itineraryId: req.body.itineraryId}).then(commentsArray =>{
                                    if (commentsArray){
                                        //devuelve todos los comentarios actualizados
                                        res.status(200).send(commentsArray)
                                    }else{
                                        res.status(500).send({error: 'error al momento de devolver todos los favoritos'})
                                    }
                                })
                            }
                        })
                        
                        .catch(error => res.status(500).send({error}))

                        
                        

                    }
                })

            }
        });
    }  
}

//<--------------------------------- DELETE COMMENT ----------------------------------->

exports.deleteComment = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, token) => {
            if (err) {
                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})
            } else {

                //en caso de que el token sea valido, entonces elimina el comentario
                commentModel.findByIdAndRemove({_id: req.body.commentId}).then(documenDeleted => {
                    if(documenDeleted){
                        commentModel.find({itineraryId: req.body.itineraryId}).then(commentsArray =>{
                            if (commentsArray){
                                //devuelve todos los comentarios actualizados
                                res.status(200).send(commentsArray)
                            }else{
                                res.status(500).send({error: 'error al momento de devolver todos los favoritos'})
                            }
                        })
                    }else{
                        res.status(404).send('comment not found')
                    }
                })
                .catch(error => res.status(500).send(error))            }
        });
    }  
}


// //<--------------------------------------- GET COMMENTS -------------------------------------------->

exports.getComments = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, token) => {
            if (err) {
                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})
            } else {
                //en caso del que el token sea valido, devolvemos los favoritos del mismo

                commentModel.find({itineraryId: req.body.itineraryId}).then(commentsArray =>{
                    if (commentsArray){
                        res.status(200).send(commentsArray)
                    }else{
                        res.status(500).send({error: 'error al momento de devolver todos los favoritos'})
                    }
                })
            }
        });
    }  
}