import { Image } from '../models';

export async function list() {
  try {
    const result = await Image.findAll();
    return { result };
  } catch (e) {
    throw e;
  }
}

export async function create(gallery) {
  try {
    const result = await Image.create(gallery);
    return { result };
  } catch (e) {
    throw e;
  }
}
