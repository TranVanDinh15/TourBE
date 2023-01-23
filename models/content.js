'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CONTENT extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    CONTENT.init(
        {
            maloaitour: DataTypes.STRING,
            manoidung: DataTypes.STRING,
            noidung: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'CONTENT',
        },
    );
    return CONTENT;
};
