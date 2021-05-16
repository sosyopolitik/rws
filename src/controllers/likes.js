import { getAll } from "#root/controllers/factory";
import LikeModel from "#root/models/likes";
import PostModel from "#root/models/posts";

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
    const postLikeCount = await PostModel.updateOne(
      { _id: postId },
      { $inc: { likes: -1 } }
    );
    const unlikedDoc = await LikeModel.deleteOne({ userId, postId });

    res.status(204).json({
      status: "success",
      doc: unlikedDoc,
      messafe: "İlgili beğeni kaldırıldı",
    });
  }

  if (action === "like") {
    const doc = await LikeModel.findOne({ userId, postId });
    if (doc) {
      return next(
        new AppError(
          `Bu post ilgili kullanıcı tarafından zaten beğenilmiştir.`,
          404
        )
      );
    }
    const likedDoc = await LikeModel.create({ userId, postId });
    const postLikeCount = await PostModel.updateOne(
      { _id: postId },
      { $inc: { likes: 1 } }
    );

    res.status(201).json({
      status: "success",
      doc: likedDoc,
      message: "Beğeni eklendi.",
    });
  }
});
