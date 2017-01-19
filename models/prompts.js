let Sequelize = require('sequelize');
let db = require('./_db');


let Prompt = db.define('prompt',{
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},{});



module.exports = Prompt;
