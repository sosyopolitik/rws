import express from "express";
import { AppError } from "#root/utils";
import globalErrorHandler from "#root/controllers/error";

import { userRoutes, postRoutes, tagRoutes, feedRoutes } from "#root/routes";

const app = express();

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/tags", tagRoutes);
app.use("/api/v1/feed", feedRoutes);

app.use("/", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
