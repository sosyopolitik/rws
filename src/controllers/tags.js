import {
  getAll,
  createOne,
  deleteOne,
  getOne,
  updateOne,
  createMany,
} from "#root/controllers/factory";
import TagModel from "#root/models/tags";

export const getAllTag = getAll(TagModel);

export const createOneTag = createOne(TagModel);

export const createManyTag = createMany(TagModel);

export const deleteOneTag = deleteOne(TagModel);

export const getOneTag = getOne(TagModel);

export const updateOneTag = updateOne(TagModel);
