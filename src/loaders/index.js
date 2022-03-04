import expressLoader from './express.loader';
import postgresLoader from './postgres.loader';

export default async ({ app, config }) => {
  try {
    await postgresLoader();
    await expressLoader({ app });
  } catch (e) {
    console.log(e);
    throw e;
  }
};