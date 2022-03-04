import { Joi } from 'celebrate';

export const CompanyCreate = {
  body: Joi.object({
    name: Joi.string().required()
  })
};
export const CompanyList = {};
