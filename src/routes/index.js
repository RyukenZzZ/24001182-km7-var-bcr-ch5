const express = require("express");
const typeRouter = require("./type");

const router = express.Router();

router.use("/type", typeRouter);

module.exports = router;
