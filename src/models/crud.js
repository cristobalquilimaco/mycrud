const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
 
const Crud = sequelize.define('crud', {

    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
 
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
 
    },
    birthday: {
        type: DataTypes.STRING,

    }
});

module.exports = Crud;