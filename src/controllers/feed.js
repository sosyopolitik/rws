import PostModel from "#root/models/posts";
import { catchAsync } from "#root/utils";

export const feed = catchAsync((req, res, next) => {
  res.status(200).json({});
});
