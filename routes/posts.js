const express = require("express");
const controller = require("../controllers/posts");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.getAll);

router.route("/:postId").get(controller.getOne);

module.exports = router;
