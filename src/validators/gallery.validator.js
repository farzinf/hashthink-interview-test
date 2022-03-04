import { Joi } from 'celebrate';

export const GalleryCreate = {
  body: Joi.object({
    name: Joi.string().required(),
    companyId: Joi.number().required()
  })
};
export const GalleryList = {};
