'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class REGIONS extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    REGIONS.init(
        {
            maloaimien: DataTypes.STRING,
            tenmiencuatour: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'REGIONS',
        },
    );
    return REGIONS;
};
