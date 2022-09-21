'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meal_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      type_of_meal: {
        type: Sequelize.STRING
      },
      recipe: {
        type: Sequelize.STRING
      },
      meal_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meal_plans');
  }
};