var mongoose = require('mongoose')
const userModel = require ('../model/user')
const { validationResult } = require('express-validator');

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