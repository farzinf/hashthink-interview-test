import { Router } from 'express';
import { celebrate } from 'celebrate';
import * as Validator from '../../validators';
import * as Controller from '../../controllers/gallery.controller';

const gallery = (app) => {
  const route = Router();
  route.get('/', Controller.list);
  route.post('/', celebrate(Validator.GalleryCreate), Controller.create);
  app.use('/galleries', route);
};

export default gallery;