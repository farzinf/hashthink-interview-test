import { Router } from 'express';
import { celebrate } from 'celebrate';
import * as Validator from '../../validators';
import * as Controller from '../../controllers/image.controller';

const image = (app) => {
  const route = Router();
  route.get('/', Controller.list);
  route.post('/', celebrate(Validator.ImageCreate), Controller.create);
  app.use('/images', route);
};

export default image;