const manufactureService = require("../services/manufactures");
const { successResponse } = require("../utils/response");

// Fetch all manufactures
exports.getManufactures = async (req, res, next) => {
  try {
    const manufactures = await manufactureService.getManufactures();
    return successResponse(res, 200, manufactures);
  } catch (error) {
    next(error);
  }
};

// Fetch manufacture by ID
exports.getManufactureById = async (req, res, next) => {
  try {
    const manufacture = await manufactureService.getManufactureById(
      req.params.id
    );
    return successResponse(res, 200, manufacture);
  } catch (error) {
    next(error);
  }
};

// Create a new manufacture
exports.createManufacture = async (req, res, next) => {
  try {
    const manufacture = await manufactureService.createManufacture(
      req.body,
      req.files
    );
    return successResponse(res, 201, manufacture);
  } catch (error) {
    next(error);
  }
};

// Update a manufacture
exports.updateManufacture = async (req, res, next) => {
  try {
    const manufacture = await manufactureService.updateManufacture(
      req.params.id,
      req.body,
      req.files
    );
    return successResponse(res, 200, manufacture);
  } catch (error) {
    next(error);
  }
};

// Delete a manufacture
exports.deleteManufactureById = async (req, res, next) => {
  try {
    const manufacture = await manufactureService.deleteManufactureById(
      req.params.id
    );
    return successResponse(res, 200, manufacture);
  } catch (error) {
    next(error);
  }
};
