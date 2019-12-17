var express = require('express');
var mongoose = require('mongoose');
var app = express();
const cors = require('cors');

const cookieParser = require('cookie-parser')
const cities = require('./routes/api/cities');
const users = require('./routes/api/user');
const itinerary = require('./routes/api/itinerary');
const activities = require('./routes/api/activities');

const bodyParser = require('body-parser');

const db = require('./config/keys').MongoURI;
const passport = require('passport');
//passport middleware
app.use(passport.initialize());
//passport configuration
require('./passport/passport.js');
require('./passport/googlePassport.js');

passport.serializeUser(function(user, done) {
  console.log('I should have jack ')
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  console.log('I wont have jack shit')
  done(null, obj)
})


app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());

mongoose
  .connect(db)
  .then(() => console.log('Mongo conected...'))
  .catch(err => console.log(err));

app.use('/cities', cities);

app.use('/itineraries', itinerary);

app.use('/activities', activities);

app.use('/user', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port ${port}`));

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
