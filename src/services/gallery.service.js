import { Gallery } from '../models';


export async function list() {
  try {
    const result = await Gallery.findAll();
    return { result };
  } catch (e) {
    throw e;
  }
}

export async function create(gallery) {
  try {
    const result = await Gallery.create(gallery);
    return { result };
  } catch (e) {
    throw e;
  }
}
