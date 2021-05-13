import express from "express";

import { userRoutes, postRoutes } from "#root/routes";

const app = express();

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

export default app;
