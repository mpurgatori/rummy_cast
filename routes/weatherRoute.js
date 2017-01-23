const express = require('express');
const router = express.Router();


var Forecast = require('forecast');

var geolocation = require('geolocation')

// Initialize
var forecast = new Forecast({
  service: 'darksky',
  key: '1f5f1896bd7113b89dbc5123611e8d94',
  units: 'fahrenheit',
  cache: true,      // Cache API requests
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 27,
    seconds: 45
  }
});



router.get('/', function(req,res,next){
    forecast.get([41.8781, -87.6298], true, function(err, weather) {
      return res.send(weather.currently);
    })
})


module.exports = router;
