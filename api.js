let express = require('express');
const router = express.Router();


let userRoute = require('./routes/userRoute');
let weatherRoute = require('./routes/weatherRoute');


router.use('/user', userRoute);
router.use('/weather', weatherRoute);



module.exports = router;
