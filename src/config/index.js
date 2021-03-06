import dotenv from 'dotenv';

process.env.NODE_ENV ??= 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('Could not find .env file!');
}
export default {
  port: parseInt(process.env.PORT || '3000', 10),
  databaseURL: process.env.DATABASE_URL,
  nodeEnv: process.env.NODE_ENV,
};