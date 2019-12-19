//documentacion requerida para crear/modificar usuarios
const userModel = require('../model/user');

//documentacion requerida para validacion
const { validationResult } = require('express-validator');

//documentacion requerida para JWT
const jwt = require('jsonwebtoken');
const config = require('../config/keys');



//<----------------------------------- ADD FAVOURITE ------------------------------------->
exports.addFavourite = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, data) => {
            if (err) {
                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})
            } else {
                //en caso de que el token sea valido, entonces se actualiza el usuario con el metodo de moongose "findOneAndUpdate"
                userModel.findOneAndUpdate({_id: data._id}, {$addToSet : {favourites: {$each : [req.body.itineraryId]}}}, (err, data) =>{
                    if(err){
                        //si hubo un error con la actualizacion de datos, se envia error al cliente
                        res.status(500).send(err)
                    }else {
                        //si salio todo bien, entonces envio los nuevos favoritos del usuario modificado
                        userModel.findById({_id: data._id}).then(newUser =>{
                            res.status(200).send({favourites: newUser.favourites})
                        })
                        
                    }
                })
            }
        });
    }  
}

//<--------------------------------- DELETE FAVOURITE ----------------------------------->
exports.deleteFavourite = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, data) => {
            if (err) {
                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})
            } else {
                //en caso de que el token sea valido, entonces se actualiza el usuario con el metodo de moongose "findOneAndUpdate"
                userModel.findByIdAndUpdate({_id: data._id}, {$pull : {"favourites": req.body.itineraryId}}).then(user =>{
                    if (user){
                        //despues de haberse actualizado, en el user me devuelve el usuario, pero sin haberse modificado (aunque en la base de datos haya cambiado)
                        //entonces hago devuelta un findById del mismo usuario, y ahí si lo recibo actualizado (sin el elemento favorito que elimine)
                        userModel.findById({_id: user._id}).then(newUser =>{
                            res.status(200).send({favourites: newUser.favourites})
                        })
                    }else {
                        res.status(500).send({error: 'error al actualizar favoritos'})
                    }
                    
                })
            }
        });
    }  
}


//<--------------------------------- GET FAVOURITES ----------------------------------->

exports.getFavourites = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //si existen errores de validacion entonces los retorna en un array JSON
        return res.status(422).json({ errors: errors.array() });
    } else {
        //si no hay errores, entonces primero extrae el token de las cabeceras
        token = req.headers.authorization.split(' ')

        //despues de extraerlo, entonces verificamos si el token sigue siendo valido
        jwt.verify(token[1], config.SECRET_TOKEN, (err, data) => {
            if (err) {
                //si el token no es mas valido, significa que el usuario tiene que volver a loguearse
                res.status(422).json({errors : ['you is not login, pleace re-login']})
            } else {
                //en caso del que el token sea valido, devolvemos los favoritos del mismo
                userModel.findById({_id: data._id}).then(user =>{
                    if (user){
                        res.status(200).send({favourites: user.favourites})
                    }else{
                        res.status(500).send({error: 'error al momento de devolver todos los favoritos'})
                    }
                })
            }
        });
    }  
}