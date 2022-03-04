import { sendResponse } from '../utils';
import { ImageService } from '../services';

export const list = async (req, res, next) => {
  try {
    const response = await ImageService.list();
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};

export const create = async (req, res, next) => {
  try {
    const response = await ImageService.create(req.body);
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};
