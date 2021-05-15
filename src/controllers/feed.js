import mongoose from "mongoose";
import PostModel from "#root/models/posts";
import { catchAsync } from "#root/utils";

export const feed = catchAsync(async (req, res, next) => {
  const userId = mongoose.Types.ObjectId("609ea9f0fb11bc1b1873d8f8");
  const docs = await PostModel.aggregate([
    {
      $lookup: {
        from: "likes",
        let: { id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$postId", "$$id"] },
                  {
                    $eq: ["$userId", userId],
                  },
                ],
              },
            },
          },
        ],
        as: "isLiked",
      },
    },
    {
      $project: {
        title: 1,
        slug: 1,
        description: 1,
        views: 1,
        likes: 1,
        comments: 1,
        savedCounts: 1,
        author: 1,
        tags: 1,
        createdAt: 1,
        isLiked: {
          $cond: {
            if: { $gte: [{ $size: "$isLiked" }, 1] },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);
  res.status(200).json({ docs, status: "success", length: docs.length });
});
