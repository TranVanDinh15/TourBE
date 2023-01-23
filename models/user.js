'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class USERS extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    USERS.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.STRING,
            date: DataTypes.STRING,
            address: DataTypes.STRING,
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'USERS',
        },
    );
    return USERS;
};
