const express = require('express')

const cityModel = require('../../model/city');
const routes = express.Router();


routes.get ('/', (req, res) => {
    cityModel.find()
    .then(cities => res.json(cities))
})


module.exports = routes



