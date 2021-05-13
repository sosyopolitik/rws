import {
  getAll,
  createOne,
  deleteOne,
  getOne,
  updateOne,
  createMany,
} from "#root/controllers/factory";
import PostModel from "#root/models/posts";

export const getAllPost = getAll(PostModel);

export const createOnePost = createOne(PostModel);

export const createManyPost = createMany(PostModel);

export const deleteOnePost = deleteOne(PostModel);

export const getOnePost = getOne(PostModel);

export const updateOnePost = updateOne(PostModel);
