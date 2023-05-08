'use strict';

const select_master = require('../models/select_master');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('option_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      opt_name: {
        type: Sequelize.STRING
      },
      sel_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'select_masters',
          key: 'id'
        }
      },
      opt_value: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('option_masters');
  }
};