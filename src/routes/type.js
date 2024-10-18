const express = require("express");
const {
  validateGetParamsCarsType,
  validateGetQueryType,
  validatePostCarsType,
  validatePutCarsType,
} = require("../middlewares/type");
const {
  getCarsType,
  getCarsTypeById,
  addCarsType,
  updateCarsType,
  deleteCarsType,
} = require("../controllers/type");

const router = express.Router();

router
  .route("/")
  .get(validateGetQueryType, getCarsType)
  .post(validatePostCarsType, addCarsType);
router
  .route("/:id")
  .get(validateGetParamsCarsType, getCarsTypeById)
  .put(validatePutCarsType, updateCarsType)
  .delete(validateGetParamsCarsType, deleteCarsType);
module.exports = router;
