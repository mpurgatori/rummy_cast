let db = require('./_db');

let Student = require('./students');
let Teacher = require('./teachers');
let Prompt = require('./prompts');
let Reply = require('./replies');
let Category = require('./categories');
let Course = require('./courses');





//***********One to Many
Student.hasMany(Reply); //A Student writes many replies
Prompt.hasMany(Reply); //A prompt will have many replies

Reply.belongsTo(Prompt); //A reply gets one prompt
Reply.belongsTo(Student); //A reply is from one Student
Prompt.belongsTo(Category); //A Prompt falls under one category


//Teachers to courses
Teacher.hasMany(Course);
Course.belongsTo(Teacher);


//***********Many to many

//Lots of students can be in lots of courses
//Lots of courses contains lots of students
Student.belongsToMany(Course, {through: 'StudentCourses'});
Course.belongsToMany(Student, {through: 'StudentCourses'});

//Lots of Teachers can teach lots of students
//Lots of Students are taught by lots of teachers
Teacher.belongsToMany(Student, {through: 'TeacherStudents'});
Student.belongsToMany(Teacher, {through: 'TeacherStudents'});


//Course.belongsToMany(Prompt, {through: 'CoursePrompts'});

Course.hasMany(Prompt);
Prompt.belongsTo(Course);





module.exports = db;
