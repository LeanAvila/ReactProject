const express = require('express')
const moongose = require('mongoose')
const itineraryModel = require('../../model/itinerary');
const routes = express.Router();
const Cities = moongose.model('cities');


//<--------------------- Return Itineraries of a City ------------------------>
routes.get("/:id", (req, res) => {
    let cityRequested = req.params.id;
    console.log(cityRequested)
	itineraryModel.find({cityId: cityRequested}).then((itineraries) => {
        Cities.populate(itineraries, {path: "cityId"},function(err, itineraries){
            res.send(itineraries);
        }); 
    })
});


//<------------------------ Return All itineraries ---------------------------->
routes.get ('/all', (req, res) => {
    itineraryModel.find()
    .then(itineraries => res.json(itineraries))
})

module.exports = routes


