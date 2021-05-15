import { getAll } from "#root/controllers/factory";
import LikeModel from "#root/models/likes";

import { catchAsync, AppError } from "#root/utils";

export const getAllLike = getAll(LikeModel);

export const like = catchAsync(async (req, res, next) => {
  // TODO: userid req.user objesinden gelecek bodyden gönderilmeyecek
  const userId = req.body.userId;
  const postId = req.body.postId;

  const action = req.body.action;

  if (!action) {
    next(AppError("Action is required."));
  }

  if (action === "unlike") {
    const unlikedDoc = await LikeModel.deleteOne({ userId, postId });
    res.status(204).json({
      status: "success",
      doc: unlikedDoc,
      messafe: "İlgili beğeni kaldırıldı",
    });
  }

  if (action === "like") {
    const likedDoc = await LikeModel.create({ userId, postId });
    res.status(201).json({
      status: "success",
      doc: likedDoc,
      message: "Beğeni eklendi.",
    });
  }
});
