const express = require('express')

const cityModel = require('../../model/city');
const routes = express.Router();

//<---------------------- Return All Cities ----------------------->
routes.get ('/all', (req, res) => {
    cityModel.find()
    .then(cities => res.json(cities))
})


//<------------------- Return One City By Id --------------------->
routes.get('/:id',
	(req, res) => {
  		let cityRequested = req.params.id;
  		cityModel.findOne({ _id: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});
module.exports = routes



