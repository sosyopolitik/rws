import express from "express";
import { signup, login } from "#root/controllers";

const router = express.Router({ mergeParams: true });

router.post("/signup", signup);

router.post("/login", login);

export default router;
