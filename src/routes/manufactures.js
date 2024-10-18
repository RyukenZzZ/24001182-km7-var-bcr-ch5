const express = require("express");
const router = express.Router();
const {
  validateGetManufactures,
  validateGetManufactureById,
  validateCreateManufacture,
  validateUpdateManufacture,
  validateDeleteManufactureById,
} = require("../middlewares/manufacturesValidation");
const manufacturesController = require("../controllers/manufactures");

// Route definitions
router
  .route("/")
  .get(validateGetManufactures, manufacturesController.getManufactures)
  .post(validateCreateManufacture, manufacturesController.createManufacture);

router
  .route("/:id")
  .get(validateGetManufactureById, manufacturesController.getManufactureById)
  .put(validateUpdateManufacture, manufacturesController.updateManufacture)
  .delete(
    validateDeleteManufactureById,
    manufacturesController.deleteManufactureById
  );

module.exports = router;
