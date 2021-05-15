import express from "express";
import { getAllLike, like } from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllLike).post(like);

export default router;
