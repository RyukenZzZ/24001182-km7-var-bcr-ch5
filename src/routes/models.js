const express = require("express");
const {
    validateGetModels,
    validateGetModelById,
    validateDeleteModelById,
    validateCreateModel,
    validateUpdateModel,
} = require("../middlewares/models");
const {
    getModels,
    getModelById,
    deleteModelById,
    createModel,
    updateModel,
} = require("../controllers/models");

const router = express.Router();

router.get("/", validateGetModels, getModels);
router.post("/", validateCreateModel, createModel);
router.get("/:id", validateGetModelById, getModelById);
router.put("/:id", validateUpdateModel, updateModel);
router.delete("/:id", validateDeleteModelById, deleteModelById);

module.exports = router;