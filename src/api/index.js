import { Router } from 'express';
import * as Routes from './routes';

export default () => {
  const app = Router();
  Routes.companyRoute(app);
  Routes.galleryRoute(app);
  Routes.imageRoute(app);
  return app;
};