let Sequelize = require('sequelize');
let db = require('./_db');


let User = db.define('user',{
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},{});



module.exports = User;
