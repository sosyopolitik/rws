import {
  getAll,
  createOne,
  deleteOne,
  getOne,
  updateOne,
  createMany,
} from "#root/controllers/factory";
import CategoryModel from "#root/models/categories";

export const getAllCategory = getAll(CategoryModel);

export const createOneCategory = createOne(CategoryModel);

export const createManyCategory = createMany(CategoryModel);

export const deleteOneCategory = deleteOne(CategoryModel);

export const getOneCategory = getOne(CategoryModel);

export const updateOneCategory = updateOne(CategoryModel);
