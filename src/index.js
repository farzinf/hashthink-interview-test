import express from 'express';
import config from './config';
import startApp from './app';

const app = express();
startApp({ app, config }).then();