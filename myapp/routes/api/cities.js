const express = require('express')

const cityModel = require('../../model/city');
const routes = express.Router();

//<---------------------- Return All Cities ----------------------->
routes.get ('/all', (req, res) => {
    cityModel.find()
    .then(cities => res.json(cities))
})


//<------------------- Return One City By Name --------------------->
routes.get('/:name',
	(req, res) => {
  		let cityRequested = req.params.name;
  		cityModel.findOne({ city: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});
module.exports = routes



