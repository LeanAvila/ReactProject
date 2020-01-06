//documentacion requerida para crear/modificar usuarios
const userModel = require('../model/user');

//documentacion requerida para validacion
const { validationResult } = require('express-validator');
const itineraryModel = require('../model/itinerary')
//documentacion requerida para JWT
const jwt = require('jsonwebtoken');
const config = require('../config/keys');



//<----------------------------------- ADD LIKE ------------------------------------->
exports.addLike = (req, res) => {
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
                res.status(422).json({error_auth : true})
            } else {
                //<---------------------------------- FORMA SIMPLE DE AGREGAR UN LIKE ---------------------------------------->
                // itineraryModel.findById({_id: req.body.itineraryId}).then(itinerary =>{
                //     if (itinerary){
                //         itinerary.update({$inc: {likes: 1}}, {new:true}).then(newItinerary =>{
                //             console.log(newItinerary, 'itineary')
                //         })
                //     }else {
                //         res.status(404).send('el itinerario no se encontro')
                //     }
                    
                    
                // })

                // userModel.findOneAndUpdate({_id: token._id}, {$addToSet : {likes: {$each : [req.body.itineraryId]}}}, {new: true}).then(newUser =>{
                //     if(newUser){
                //         //si salio todo bien, entonces envio los nuevos likes del usuario modificado     
                //         res.status(200).send({likes: newUser.likes})
                //     }else {
                //         res.status(500).send('hubo un error al momento de actualizar los likes del usuario')
                //     }
                // })


                //<---------------------------------- FORMA COMPLICADA DE AGREGAR UN LIKE (PERO MAS SEGURA) ---------------------------------------->
                userModel.findById({_id: token._id}).then(user => {
                    if (user){
                        itineraryModel.findById({_id: req.body.itineraryId}).then(itinerary =>{
                            //pregunto si el itinerario fue encontrado
                            if(itinerary){

                                //en ese caso, pregunto si el itinerario usuarios que le hayan dado like
                                if(itinerary.likes.users){

                                    //en caso de que existan varios usuarios que hayan dado like a este itinerario, 
                                    //entonces realizo un filter para ver si este usuario dio like
                                    let likeValidate = itinerary.likes.users.filter(item => (item.toString() == user._id.toString()))
                                    
                                    if(!likeValidate.length){
                                        //si no dio like entonces actualizo los likes del itinerario
                                        itinerary.updateOne({$addToSet: {"likes.users" : user._id}})
                                        .then(result => {
                                            if (result.ok){
                                                //tambien actualizo los likes del usuario y envio en la respuesta los mismos
                                                user.updateOne({$addToSet : {likes: {$each : [req.body.itineraryId]}}}, {new: true}).then(result =>{
                                                    // if(result.ok){
            
                                                    //     userModel.findById({_id: user._id}).then(newUser =>{
                                                    //         res.status(200).send({likes: newUser.likes})
                                                    //     })
                                                        
                                                    // }
                                                    //console.log(result, 'el nuevo usuario')
                                                    null
                                                })
                                            }
                                        })
                                        .catch(error => res.status(500).send({error}))

                                        
                                        

                                    }else{
                                        //en caso de que el usuario ya le haya dado like, entonces no tiro ningun error, simplemente le devuelvo los likes que ya tenía
                                        res.status(500).send({likes: user.likes})
                                    }

                                }
                                else{
                                    //en caso de que ningun usuario le haya dado like ( prevenir posible error de undefined con el filter ),
                                    //entonces simplemente actualizo el itinerario
                                    itinerary.updateOne({$addToSet: {"likes.users" : user._id}}, {new: true}).then(result => {
                                        if (result.ok){
                                            //actualizo el usuario con el nuevo itinerario, y envio los likes del usuario
                                            user.update({$addToSet : {likes: {$each : [req.body.itineraryId]}}}).then(result =>{
                                                if(result.ok){
        
                                                    userModel.findById({_id: user._id}).then(newUser =>{
                                                        res.status(200).send({likes: newUser.likes})
                                                    })
                                                    
                                                }
                                            })
                                        }
                                    }).catch(error => console.log(error))

                                    
                                    
                                }
                            }
                        })

                    }
                })



            }
        });
    }  
}

//<--------------------------------- DELETE LIKE ----------------------------------->
exports.deleteLike = (req, res) => {
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

                // //en caso de que el token sea valido, entonces se busca el itinerario
                // itineraryModel.findById({_id: req.body.itineraryId}).then(itinerary =>{
                //     console.log('itinerary', itinerary)
                //     if (itinerary){
                //         itinerary.updateOne({$inc: {"likes.total": -1}, $pull : {"likes.users" : user._id}}).then(newItinerary =>{
                //             console.log(newItinerary, 'newItinerary')
                //         })
                //     }else {
                //         res.status(404).send('el itinerario no se encontro')
                //     }                            
                // })

                // //elimino el itinerario de los "likes" del usuario
                // userModel.findByIdAndUpdate({_id: token._id}, {$pull : {"likes": req.body.itineraryId}}, {new: true}).then(newUser =>{
                //     if (newUser){
                //             res.status(200).send({likes: newUser.likes})
                //     }else {
                //         res.status(500).send({error: 'error al actualizar likes'})
                //     }
                    
                // })

                userModel.findById({_id: token._id}).then(user =>{

                    if (user){

                        itineraryModel.findById({_id: req.body.itineraryId}).then(itinerary => {

                            if (itinerary){
                                console.log('existe el itinerario')
                                //si existe el itinerario, pregunto mas especificamente
                                if (itinerary.likes.users.length){
                                    //valido si existe el usuario en los likes del itinerario
                                    let likeValidate = itinerary.likes.users.filter(item => (item.toString() == user._id.toString()))
                                    console.log('likeVAlidate', likeValidate)
                                    if (likeValidate.length){
                                        //si el usuario existe en los likes del itinerario, entonces se elimina del itinerario
                                        console.log('se actualiza el itinerario')

                                        itinerary.updateOne({$pull : {"likes.users" : user._id}}).then(result =>{
                                            if (result.ok){
                                                user.updateOne({$pull : {"likes": req.body.itineraryId}}).then(result =>{
                                                    if(result.ok){
        
                                                        userModel.findById({_id: user._id}).then(newUser =>{
                                                            res.status(200).send({likes: newUser.likes})
                                                        })
        
                                                    }
                                                })
                                            }
                                        }).catch(error => console.log(error))
                                        
                                        //y se actualiza el usuario (eliminando el id del itinerario de sus likes)
                                        
                                    }else {
                                        console.log('no se quito el like porque el usuario no estaba agregado')
                                        res.status(200).send({likes: user.likes})
                                    }   
                                }else {
                                    //para no tener errores al momento de hacer el filter (undefined), entonces si itinerary.likes.users es indefinido
                                    //pasa a esta seccion, en la cual simplemente no se hace nada y se devuelve el estado de likes del usuario

                                    res.status(200).send({likes: user.likes})

                                }
                            }

                        })
                    }

                })
            }
        });
    }  
}


//<--------------------------------- GET LIKES ----------------------------------->

exports.getLikes = (req, res) => {
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
                //en caso del que el token sea valido, devolvemos los likes del mismo
                userModel.findById({_id: token._id}).then(user =>{
                    if (user){
                        res.status(200).send({likes: user.likes})
                    }else{
                        res.status(500).send({error: 'error al momento de devolver todos los likes'})
                    }
                })
            }
        });
    }  
}