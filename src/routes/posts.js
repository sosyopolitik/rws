import express from "express";
import controller from "#root/controllers/posts";

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.getAll);

router.route("/:postId").get(controller.getOne);

export default router;
