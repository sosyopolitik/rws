import {
  getAll,
  createOne,
  deleteOne,
  getOne,
  updateOne,
  createMany,
} from "#root/controllers/factory";
import PostModel from "#root/models/posts";

import { catchAsync, AppError } from "#root/utils";

export const getAllPost = getAll(PostModel);

export const createOnePost = createOne(PostModel);

export const createManyPost = createMany(PostModel);

export const deleteOnePost = deleteOne(PostModel);

export const getOnePost = catchAsync(async (req, res, next) => {
  let doc = await PostModel.findOne({ slug: req.params.id });

  if (!doc) {
    return next(
      new AppError(`${req.params.id} ile ilgili kayıt bulunamadı.`, 404)
    );
  }

  res.status(200).json({
    status: "success",
    doc,
  });
});

export const updateOnePost = updateOne(PostModel);
