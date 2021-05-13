import express from "express";
import controller from "#root/controllers/users";

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.getAll);

router.route("/:id").get(controller.getOne);

export default router;
