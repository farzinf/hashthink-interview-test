import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../loaders/postgres.loader';

class Gallery extends Model { }

Gallery.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: sequelize.models.Company,
      key: "companyId"
    }
  }
}, {
  sequelize,
  modelName: 'Gallery',
  // freezeTableName: true,
  tableName: 'galleries',
});

Gallery.belongsTo(sequelize.models.Company, { foreignKey: 'companyId', as: 'company' });
sequelize.models.Company.hasMany(Gallery, { as: 'galleries', foreignKey: 'companyId' })

export default Gallery;