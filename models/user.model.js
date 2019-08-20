'use strict';

const Sequelize = require('sequelize');
var sequelize = require('./index');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        email_verified_at: {
            type: Sequelize.DATE
        },
        password: {
            type: Sequelize.STRING
        },
        remember_token: {
            type: Sequelize.STRING
        }
    }, { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
     });

  return User;
};