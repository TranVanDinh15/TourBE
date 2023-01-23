'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SCHEDULES extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SCHEDULES.init(
        {
            maloaitour: DataTypes.STRING,
            manoidung: DataTypes.STRING,
            lichtrinhtheongay: DataTypes.STRING,
            noidung: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'SCHEDULES',
        },
    );
    return SCHEDULES;
};
