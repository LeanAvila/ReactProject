const express = require('express')
const activitiesModel = require('../../model/activities');
const routes = express.Router();

// routes.get("/:id", (req, res) => {
//     let itineraryRequested = req.query;

//     activitiesModel.find({}, (activities) =>{
//         res.send(activities);
//     })

// });

routes.get("/:id", (req, res) => {
	activitiesModel.find({}).then((activities) => {
            res.send(activities);
    })
});
module.exports = routes
