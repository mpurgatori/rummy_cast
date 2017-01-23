const express = require('express');
const router = express.Router();

const User = require('../models/user');



router.get('/', function(req,res,next){
  if(req.session.name){
    User.find({
      where:{
        id: req.session.nameId
      }
    })
    .then(user => res.send(user.name))
  }
  res.send('noName')
  .catch(next)
})


router.post('/', function (req, res, next) {
  return User.create(req.body)
  .then(user => {
    req.session.nameId = user.id;
    res.json(user.name);
  })
  .catch(next)
});


module.exports = router;
