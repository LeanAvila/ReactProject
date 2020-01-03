const express = require('express')
const mongoose = require('mongoose')
const itineraryModel = require('../../model/itinerary');
const routes = express.Router();
const Cities = mongoose.model('cities');
const commentModel = require('../../model/comment')

//<--------------------- Return Itineraries of a City ------------------------>
// routes.get("/:id", (req, res) => {
//     let cityRequested = req.params.id;
//     console.log(cityRequested)
// 	itineraryModel.find({cityId: cityRequested}).then((itineraries) => {
//         Cities.populate(itineraries, {path: "cityId"},function(err, itineraries){
//             res.send(itineraries);
//         }); 
//     })
// });

//<--------------------- Return Itineraries of a City ------------------------>
routes.get('/:id', (req,res) => {
    let cityRequested = req.params.id;

    itineraryModel.find({cityId: cityRequested}).then(itineraries => {
        Cities.populate(itineraries, {path: "cityId"}).then(populatedItinerariesWithCities =>{
            commentModel.populate(populatedItinerariesWithCities, {path: "comments"}).then(populatedItineraries => {
                res.status(200).send(populatedItineraries)
            })
        })
        
    })
})

//<------------------------ Return All itineraries ---------------------------->
routes.get ('/all/itineraries', (req, res) => {
    itineraryModel.find()
    .then(itineraries => res.json(itineraries))
})

module.exports = routes


