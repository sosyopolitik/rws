const express = require("express");
const controller = require("../controllers/users");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.getAll);

router.route("/:id").get(controller.getOne);

module.exports = router;
