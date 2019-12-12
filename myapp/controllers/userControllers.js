var mongoose = require('mongoose')
const userModel = require ('../model/user')
const { validationResult } = require('express-validator');
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/keys')
const options = {expiresIn: 2592000};

exports.index = (req, res) => {
    userModel.find({})
    .then (users => {
        if (users.length) {
            return res.status(200).send(users)
        }else{
            return res.status(204).send({message: 'NO CONTENT'})
        }
    }).catch (error => res.status(500).send(error))
}

exports.create  = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).json(errors);
        return res.status(422).json({ errors: errors.array() });
    } else {
        new userModel(req.body) 
        .save()
        .then(user => res.status(200).send({user}))
        .catch(error => res.status(500).send({error}))
    }
}

exports.login = (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array() });
    } else {
        let userName = req.body.userName;
        let password = req.body.password;

        userModel.findOne({userName}).then(user => {
            if (!user){
                return res.status(404).send({message: 'El usuario no existe'});
            }else {
                bycrypt.compare(password, user.password).then (match => {
                    if (match){

                        let payload = {
                            _id: user._id,
                            userName: user.userName,
                            avatarPicture: user.avatarPicture
                        }

                        jwt.sign(payload, config.SECRET_TOKEN, options, (error, token) =>{
                            if (error){
                                res.status(500).send({error})
                            } else {
                                res.status(200).send({token})
                            }
                        })

                    } else {
                        return res.status(200).send({message: 'Acceso Denegado (contraseña Incorrecta)'})
                    }
                })
            }
        })
    }
}