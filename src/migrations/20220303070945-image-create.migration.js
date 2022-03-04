module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      galleryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'galleries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('images');
  },
}