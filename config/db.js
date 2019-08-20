const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mushranlaravel', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});


// const UserModel = require('../models/user.model')
// const User = UserModel(sequelize, Sequelize)



module.exports = {
    // User,
    sequelize
}