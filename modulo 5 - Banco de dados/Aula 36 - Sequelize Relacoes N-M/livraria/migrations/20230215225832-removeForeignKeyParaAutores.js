'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeConstraint('livros', 'livros_ibfk_1');
    await queryInterface.removeColumn('livros', 'autores_id');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('livros', 'autores_id', Sequelize.INTEGER.UNSIGNED, {
      allowNull: false
    });
    await queryInterface.addConstraint('livros', {
      fields: ['autores_id'],
      type: 'foreign key',
      name: 'livros_ibfk_1',
      references: {
        table: 'autores',
        field:'id'
      },
    });
  }
};
