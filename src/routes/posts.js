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

router
  .route("/:postId")
  .get(getOnePost)
  .patch(updateOnePost)
  .delete(deleteOnePost);

export default router;
