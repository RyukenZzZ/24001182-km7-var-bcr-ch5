const express = require("express");

const carsRouter = require("./cars");
const modelsRouter = require("./models");
const typeRouter = require("./type");

const router = express.Router();

router.use("/cars", carsRouter);
router.use("/models", modelsRouter);
router.use("/type", typeRouter);

module.exports = router;
