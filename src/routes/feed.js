import express from "express";
import { feed } from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.route("/").post(feed);

export default router;
