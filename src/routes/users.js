import express from "express";
import {
  getAllUser,
  getOneUser,
  createOneUser,
  deleteOneUser,
  updateOneUser,
} from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllUser).post(createOneUser);

router.route("/:id").get(getOneUser).patch(updateOneUser).delete(deleteOneUser);

export default router;
