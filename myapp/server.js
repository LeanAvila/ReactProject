var express = require('express');
var mongoose = require('mongoose');
var app = express();
const cors = require('cors');

const cities = require('./routes/api/cities');
const users = require('./routes/api/user');
const itinerary = require('./routes/api/itinerary');
const activities = require('./routes/api/activities');
const favourites = require('./routes/api/favourite')
const likes = require('./routes/api/likes')

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

const db = require('./config/keys').MongoURI;

const passport = require('passport');
//passport middleware
app.use(passport.initialize());
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

//configuraciones
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());

mongoose.connect(db)
  .then(() => console.log('Mongo conected...'))
  .catch(err => console.log(err));

//rutas
app.use('/cities', cities);
app.use('/itineraries', itinerary)
app.use('/activities', activities)
app.use('/user', users)
app.use('/favourite', favourites)
app.use('/like', likes)
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server start on port ${port}`));
