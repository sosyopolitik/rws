import express from "express";
import {
  getAllTag,
  getOneTag,
  createOneTag,
  deleteOneTag,
  updateOneTag,
} from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllTag).post(createOneTag);

router.route("/:id").get(getOneTag).patch(updateOneTag).delete(deleteOneTag);

export default router;
