import {
  getAll,
  createOne,
  deleteOne,
  getOne,
  updateOne,
  createMany,
} from "#root/controllers/factory";
import UserModel from "#root/models/users";

export const getAllUser = getAll(UserModel);

export const createOneUser = createOne(UserModel);

export const createManyUser = createMany(UserModel);

export const deleteOneUser = deleteOne(UserModel);

export const getOneUser = getOne(UserModel);

export const updateOneUser = updateOne(UserModel);
