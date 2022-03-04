import { Router } from 'express';
import { celebrate } from 'celebrate';
import * as Validator from '../../validators';
import * as Controller from '../../controllers/company.controller';

const company = (app) => {
  const route = Router();
  route.get('/', Controller.list);
  route.post('/', celebrate(Validator.CompanyCreate), Controller.create);
  app.use('/companies', route);
};

export default company;