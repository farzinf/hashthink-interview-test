import { Joi } from 'celebrate';

export const ImageCreate = {
  body: Joi.object({
    name: Joi.string().required(),
    galleryId: Joi.number().required()
  })
};
export const ImageList = {};
