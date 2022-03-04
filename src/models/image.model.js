import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../loaders/postgres.loader';

class Image extends Model { }

Image.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  galleryId: {
    type: DataTypes.INTEGER,
    references: {
      model: sequelize.models.Gallery,
      key: "galleryId"
    }
  }
}, {
  sequelize,
  modelName: 'Image',
  // freezeTableName: true,
  tableName: 'images',
});

Image.belongsTo(sequelize.models.Gallery, { foreignKey: 'galleryId', as: 'gallery' });
sequelize.models.Gallery.hasMany(Image, { as: 'images', foreignKey: 'galleryId' })

export default Image;