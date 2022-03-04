import { Company } from '../models';


export async function list() {
  try {
    const result = await Company.findAll();
    return { result };
  } catch (e) {
    throw e;
  }
}

export async function create(company) {
  try {
    const result = await Company.create(company);
    return { result };
  } catch (e) {
    throw e;
  }
}
