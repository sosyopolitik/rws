import express from "express";
import {
  getAllCategory,
  getOneCategory,
  createOneCategory,
  deleteOneCategory,
  updateOneCategory,
} from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllCategory).post(createOneCategory);

router
  .route("/:id")
  .get(getOneCategory)
  .patch(updateOneCategory)
  .delete(deleteOneCategory);

export default router;
