let express = require('express');
let morgan = require('morgan');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let db = require('./models/index');

const app = express();
const path = require('path');
const rootPath = path.join(__dirname);


let apiRouter = require('./api');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('default'));
app.use(cookieParser());

app.use(session({
  secret:'rummy dog',
  cookie: {
    maxAge: 1000000
  }
}));

app.use('/api', apiRouter);

app.use(express.static('public'))

app.get('*', function (req, res, next) {
  //console.log('THIS IS REQ SESSION',req.session);
  res.sendFile(rootPath+'/browser/index.html')
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(3000, function(){
  console.log('Here on port 3000');
})

module.exports = app;
