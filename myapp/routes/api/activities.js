const express = require('express')
const activitiesModel = require('../../model/activities');
const routes = express.Router();

routes.get("/:id", (req, res) => {
    let itineraryRequested = req.params.id;
	activitiesModel.find({idItinerary: itineraryRequested}).then((activities) => {
            res.send(activities);
    })
});

module.exports = routes
