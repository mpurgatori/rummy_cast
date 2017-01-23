var express = require('express');
const router = express.Router();


var weatherRoute = require('./routes/weatherRoute');

router.use('/weather', weatherRoute);



module.exports = router;
