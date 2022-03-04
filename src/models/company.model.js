import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../loaders/postgres.loader';

class Company extends Model { }

Company.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Company',
  // freezeTableName: true,
  tableName: 'companies',
});

export default Company;
