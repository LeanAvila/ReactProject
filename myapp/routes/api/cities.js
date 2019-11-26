const express = require('express')

const cityModel = require('../../model/city');
const routes = express.Router();


routes.get ('/', (req, res) => {
    cityModel.find()
    .then(cities => res.json(cities))
})

// routes.get('/:name',
// 	(req, res) => {
//   		let cityRequested = req.params.name;
//   		cityModel.findOne({ city: cityRequested })
// 			.then(city => {
// 				res.send(city)
// 			})
// 			.catch(err => console.log(err));
// });
module.exports = routes



