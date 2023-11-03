"use strict";

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
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "eric1@gmail.com",
          username: "eric1",
          password: "123456",
        },
        {
          email: "eric2@gmail.com",
          username: "eric2",
          password: "123456",
        },
        {
          email: "eric3@gmail.com",
          username: "eric3",
          password: "123456",
        },
        {
          email: "eric4@gmail.com",
          username: "eric4",
          password: "123456",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
