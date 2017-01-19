const express = require('express');
const router = express.Router();

let categoryRouter = require('./routes/categoriesRoute');
let replyRouter = require('./routes/repliesRoute');
let courseRouter = require('./routes/coursesRoute');
let studentRouter = require('./routes/studentsRoute');
let teacherRouter = require('./routes/teachersRoute');
let promptRouter = require('./routes/promptsRoute');
let sessionsRouter = require('./routes/sessionsRoute');


router.use('/categories', categoryRouter);
router.use('/replies', replyRouter);
router.use('/courses', courseRouter);
router.use('/students', studentRouter);
router.use('/teachers', teacherRouter);
router.use('/prompts', promptRouter);
router.use('/sessions', sessionsRouter);



module.exports = router;
