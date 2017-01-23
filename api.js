var express = require('express');
const router = express.Router();


var userRoute = require('./routes/userRoute');
var weatherRoute = require('./routes/weatherRoute');


router.use('/user', userRoute);
router.use('/weather', weatherRoute);



module.exports = router;
