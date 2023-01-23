'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TOURS extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TOURS.init(
        {
            tentour: DataTypes.STRING,
            songayditour: DataTypes.STRING,
            backGround: DataTypes.BLOB('long'),
            hinhanh1: DataTypes.BLOB('long'),
            chiPhi: DataTypes.INTEGER,
            video: DataTypes.STRING,
            gioithieutour: DataTypes.STRING,
            maloaitour: DataTypes.STRING,
            maloaimien: DataTypes.STRING,
            matournuocngoai: DataTypes.STRING,
            diemxuatphat: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'TOURS',
        },
    );
    return TOURS;
};
