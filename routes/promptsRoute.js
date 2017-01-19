const express = require('express');
const router = express.Router();

const Prompt = require('../models/prompts');
const Course = require('../models/courses');
const Student = require('../models/students');
const Reply  = require('../models/replies');



router.post('/', function(req,res,next){
  return Prompt.create(req.body)
  .catch(next)
})


router.get('/', function (req, res, next) {
  let role = null;
  let query = {
    include: [{
      model: Reply
    }]
  }
  if (req.session.studentId) {
    role='student';
    query.include.push({
      model: Course,
      include: [{
        model: Student,
        where: {
          id: req.session.studentId
        }
      }]
    })
  }
    if (req.session.teacherId){role='teacher'};
    if (!role){
      let err = new Error('User not authorized');
      err.status = 401;
      throw err;
    };
    return Prompt.findAll(query)
    .then(prompts => {
      if (role === 'student') {
        return prompts.map(prompt => {
          prompt.dataValues.replies = prompt.dataValues.replies.filter(reply => reply.studentId === req.session.studentId);
            return prompt;
        });
      }
      return prompts;
    })
    .then(prompts => res.send(prompts))
    .catch(next)
  });


module.exports = router;
