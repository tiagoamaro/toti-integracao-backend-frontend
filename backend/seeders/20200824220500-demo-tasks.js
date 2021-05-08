'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Tasks', [{
      description: 'Comprar batata',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comprar cenoura',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comprar maçãs',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
