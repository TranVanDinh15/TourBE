'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('SCHEDULES', {
            // maloaitour: DataTypes.STRING,
            // manoidung: DataTypes.STRING,
            // noidung: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            maloaitour: {
                type: Sequelize.STRING,
            },
            lichtrinhtheongay: {
                type: Sequelize.STRING,
            },
            manoidung: {
                type: Sequelize.STRING,
            },
            noidung: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('SCHEDULES');
    },
};
