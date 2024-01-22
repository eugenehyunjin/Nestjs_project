'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'email', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'password', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'mobile', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'role', { type: Sequelize.STRING });

    await queryInterface.removeColumn('users', 'firstName');
    await queryInterface.removeColumn('users', 'lastName');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'email', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'password', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'mobile', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'role', { type: Sequelize.STRING });

    await queryInterface.removeColumn('users', 'firstName');
    await queryInterface.removeColumn('users', 'lastName');
  }
};
