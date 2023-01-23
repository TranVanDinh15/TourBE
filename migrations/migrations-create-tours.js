'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // backGround: DataTypes.BLOB,
        // hinhanh1: DataTypes.BLOB,
        // hinhanh2: DataTypes.BLOB,
        // hinhanh3: DataTypes.BLOB,
        // hinhanh4: DataTypes.BLOB,
        // video: DataTypes.STRING,
        await queryInterface.createTable('TOURS', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            tentour: {
                type: Sequelize.STRING,
            },
            songayditour: {
                type: Sequelize.STRING,
            },
            backGround: {
                type: Sequelize.BLOB('long'),
            },
            chiPhi: {
                type: Sequelize.INTEGER,
            },
            hinhanh1: {
                type: Sequelize.BLOB('long'),
            },
            video: {
                type: Sequelize.STRING,
            },
            gioithieutour: {
                type: Sequelize.STRING,
            },
            maloaitour: {
                type: Sequelize.STRING,
            },
            maloaimien: {
                type: Sequelize.STRING,
            },
            matournuocngoai: {
                type: Sequelize.STRING,
            },
            diemxuatphat: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TOURS');
    },
};
