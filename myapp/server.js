var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
mongoose.connect('mongodb+srv://leanAvila:12345@cluster0-tzvlh.gcp.mongodb.net/data?retryWrites=true&w=majority',
    { useNewUrlParser: true });

var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: String,
    country: String
},
    {
        collection: 'cities'
    }
);

var cityModel = mongoose.model('cities', citySchema);

app.get('/api/cities', cors(), function (req, res) {
    cityModel.find(function (err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
    .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(function(err) {
        console.error(err)
    })
})

app.listen(3001, function () {
    console.log('servidor escuchando el puerto 8080');
})

