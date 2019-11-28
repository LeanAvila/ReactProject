const express = require('express')
const moongose = require('mongoose')
const itineraryModel = require('../../model/itinerary');
const routes = express.Router();
const Cities = moongose.model('cities');

routes.get("/:id", (req, res) => {
    let cityRequested = req.params.name;
	itineraryModel.find({city: cityRequested}).then((itineraries) => {
        Cities.populate(itineraries, {path: "itineraries"},function(err, itineraries){
            res.send(itineraries);
        }); 
    })
});
module.exports = routes


