const express = require('express')
const activitiesModel = require('../../model/activities');
const routes = express.Router();

// routes.get("/:id", (req, res) => {

//     console.log(req.params.id);
    
//     let itineraryRequested = req.params.id;

//     // activitiesModel.findOne({idItinerary: itineraryRequested}, (err, activities) =>{
//     //     console.log(activities);
        
//     //     return res.send(activities);
//     // })

//     activitiesModel.find({idItinerary: itineraryRequested})
//     .then ((activities) => {
//         console.log(activities);
        
//         return res.send(activities)
//     })

// });

routes.get("/:id", (req, res) => {
    let itineraryRequested = req.params.id;
	activitiesModel.find({idItinerary: itineraryRequested}).then((activities) => {
            res.send(activities);
    })
});
module.exports = routes
