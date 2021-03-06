var express = require('express');


const app = express();
const path = require('path');
const rootPath = path.join(__dirname);


var apiRouter = require('./api');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', apiRouter);

app.use(express.static('public'))

app.get('*', function (req, res, next) {
  //console.log('THIS IS REQ SESSION',req.session);
  res.sendFile(rootPath+'/index.html')
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(3000, function(){
  console.log('Here on port 3000');
})

module.exports = app;
