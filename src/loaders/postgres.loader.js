import { Sequelize } from 'sequelize';
import config from '../config';

let sequelize = new Sequelize(config.databaseURL || '');

export default async () => {
  try {
    await sequelize.authenticate();
  } catch (e) {
    throw e;
  }
};

export {
  sequelize,
};
