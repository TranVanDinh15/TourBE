'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TRAVELABROADS extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TRAVELABROADS.init(
        {
            matournuocngoai: DataTypes.STRING,
            tencactournuocngoai: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'TRAVELABROADS',
        },
    );
    return TRAVELABROADS;
};
