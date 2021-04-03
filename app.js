const express = require("express");

const { userRoutes, postRoutes } = require("./routes");

const app = express();

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use("/", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

module.exports = app;
