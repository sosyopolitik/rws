import PostModel from "#root/models/posts";
import { catchAsync } from "#root/utils";

export const feed = catchAsync(async (req, res, next) => {
  const docs = await PostModel.find()
    .populate("author")
    .select("-content -__v ");
  res.status(200).json({ docs, status: "success", length: docs.length });
});
