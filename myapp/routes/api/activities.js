const express = require('express')
const activitiesModel = require('../../model/activities');
const routes = express.Router();

routes.get("/:id", (req, res) => {
    let cityRequested = req.params.name;
	activitiesModel.find({city: cityRequested}).then((activities) => {
            res.send(activities);
    })
});
module.exports = routes
