import { sendResponse } from '../utils';
import { GalleryService } from '../services';

export const list = async (req, res, next) => {
  try {
    const response = await GalleryService.list();
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};

export const create = async (req, res, next) => {
  try {
    const response = await GalleryService.create(req.body);
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};
