import express from "express";
import {
  getAllPost,
  createOnePost,
  deleteOnePost,
  updateOnePost,
  getOnePost,
} from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllPost).post(createOnePost);

router.route("/:id").get(getOnePost).patch(updateOnePost).delete(deleteOnePost);

// const pipeline = {
//   from: "likes",
//   let: { id: "$_id" },
//   pipeline: [
//     {
//       $match: {
//         $expr: {
//           $and: [
//             { $eq: ["$postId", "$$id"] },
//             { $eq: ["$userId", ObjectId("609eada4764ef9001562a120")] },
//           ],
//         },
//       },
//     },
//   ],
//   as: "liked",
// };

// deneme:  {
//         $cond: {
//            if: { $gte: [ { $size:"$liked" }, 1 ] } ,
//            then: true,
//            else: "Not enough data." }
//       }

export default router;
