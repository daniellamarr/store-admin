'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plotNumber: {
        type: Sequelize.STRING
      },
      estate: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      estateAddress: {
        type: Sequelize.STRING
      },
      plotDimensions: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Plots');
  }
};