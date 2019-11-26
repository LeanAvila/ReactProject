const express = require('express')
const moongose = require('mongoose')
const itineraryModel = require('../../model/itinerary');
const routes = express.Router();
const Cities = moongose.model('cities');

routes.get("/:id", (req, res) => {
    let cityRequested = req.params.name;
	itineraryModel.findOne({city: cityRequested}).then((itinerary) => {
        Cities.populate(itinerary, {path: "cityId"},function(err, itinerary){
        	res.send(itinerary);
        }); 
    })
});
module.exports = routes


