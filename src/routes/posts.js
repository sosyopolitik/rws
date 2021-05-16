import express from "express";
import {
  getAllPost,
  createOnePost,
  deleteOnePost,
  updateOnePost,
  getOnePost,
  getAllComment,
  getReplyComments,
} from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllPost).post(createOnePost);

router.route("/:id").get(getOnePost).patch(updateOnePost).delete(deleteOnePost);

router.route("/:id/comments").get(getAllComment);

router.route("/:id/comments/:commentId").get(getReplyComments);

export default router;
