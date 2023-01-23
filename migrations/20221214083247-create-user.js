'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('USERS', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            date: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            role: {
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
        await queryInterface.dropTable('USERS');
    },
};
