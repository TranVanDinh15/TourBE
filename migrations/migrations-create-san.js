'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // maloaitour: DataTypes.STRING,
        // masan: DataTypes.STRING,
        // dichvu: DataTypes.TEXT,
        // ghichu: DataTypes.TEXT,
        await queryInterface.createTable('SANS', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            maloaitour: {
                type: Sequelize.STRING,
            },
            masan: {
                type: Sequelize.STRING,
            },
            dichvu: {
                type: Sequelize.TEXT,
            },
            ghichu: {
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
        await queryInterface.dropTable('SANS');
    },
};
