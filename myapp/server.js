var express = require('express');
var mongoose = require('mongoose');
var app = express();
const cors = require('cors')
const cities = require('./routes/api/cities');
const bodyParser = require('body-parser')
const itinerary = require('./routes/api/itinerary')
const db = require('./config/keys').MongoURI;

app.use(bodyParser.json())
app.use(cors())


mongoose.connect(db)
.then(() => console.log ('Mongo conected...'))
.catch(err => console.log(err))

app.use('/api/cities', cities)


app.use('/api/itinerary', itinerary)


const port = process.env.PORT || 5000

app.listen (port, () => console.log (`server start on port ${port}`))

// app.get('/cities/all', cors(), function (req, res) {
//     cityModel.find(function (err, result) {
//         if (err) throw err;
//         if (result) {
//             res.json(result)
//         } else {
//             res.send(JSON.stringify({
//                 error: 'Error'
//             }))
//         }
//     })
//     .then(
//         function(datos){
//             return res.send(datos)
//         }
//     )
//     .catch(function(err) {
//         console.error(err)
//     })
// })

// app.listen(3001, function () {
//     console.log('servidor escuchando el puerto 3001');
// })
