import CommentsModel from "#root/models/comments";

import { catchAsync, AppError } from "#root/utils";

export const getAllComment = catchAsync(async (req, res, next) => {
  let docs = await CommentsModel.find({
    postId: req.params.id,
    parentCommentId: null,
  });

  res.status(200).json({
    status: "success",
    docs,
    length: docs.length,
  });
});

export const getReplyComments = catchAsync(async (req, res, next) => {
  let docs = await CommentsModel.find({
    postId: req.params.id,
    parentCommentId: req.params.commentId,
  });
  res.status(200).json({
    status: "success",
    docs,
  });
});
