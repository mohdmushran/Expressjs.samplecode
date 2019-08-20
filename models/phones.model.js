'use strict';

const Sequelize = require('sequelize');
var sequelize = require('./index');

module.exports = (sequelize, DataTypes) => {
  var MobilePhone = sequelize.define('MobilePhone', {
        brand: {
            type: Sequelize.STRING,
            // allowNull: false
        },
        model: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'mobile_phones'
     });

  return MobilePhone;
};