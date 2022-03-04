import { sendResponse } from '../utils';
import { CompanyService } from '../services';

export const list = async (req, res, next) => {
  try {
    const response = await CompanyService.list();
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};

export const create = async (req, res, next) => {
  try {
    const response = await CompanyService.create(req.body);
    sendResponse({ res, response });
  } catch (e) {
    return next(e);
  }
};
