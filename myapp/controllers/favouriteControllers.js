//documentacion requerida para crear/modificar usuarios
const userModel = require('../model/user');

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
                //es importante agregar la configuracion {new: true} ya que si no, en el callback, el usuario vuelto (err, newUser), no esta actualizado,
                //entonces con esa propiedad de {new: true} le especificas a mongoose que queres recibir el usuario acualizado.
                userModel.findOneAndUpdate({_id: data._id}, {$addToSet : {favourites: {$each : [req.body.itineraryId]}}}, {new: true}, (err, newUser) =>{
                    if(err){

                        //si hubo un error con la actualizacion de datos, se envia error al cliente
                        res.status(500).send(err)

                    }else {

                        //si salio todo bien, entonces envio los nuevos favoritos del usuario modificado
                        res.status(200).send({favourites: newUser.favourites})
                        
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
                //es importante agregar la configuracion {new: true} ya que si no, en el callback, el usuario vuelto (err, newUser), no esta actualizado,
                //entonces con esa propiedad de {new: true} le especificas a mongoose que queres recibir el usuario acualizado.
                userModel.findByIdAndUpdate({_id: data._id}, {$pull : {"favourites": req.body.itineraryId}}, {new: true}).then(newUser =>{
                    if (newUser){

                        //si salio todo bien, entonces envio los nuevos favoritos del usuario modificado
                        res.status(200).send({favourites: newUser.favourites})

                    }else {

                        //si hubo un error con la actualizacion de datos, se envia error al cliente
                        res.status(500).send({error: 'error al actualizar favoritos'})

                    }
                    
                })
            }
        });
    }  
}


//<--------------------------------------- GET FAVOURITES -------------------------------------------->

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