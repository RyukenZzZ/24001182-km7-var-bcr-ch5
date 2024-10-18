const manufactureRepository = require("../repositories/manufactures");
const { imageUpload } = require("../utils/image-kit");
const { NotFoundError, InternalServerError } = require("../utils/request");

// Fetch all manufactures
exports.getManufactures = async () => {
  return await manufactureRepository.getManufactures();
};

// Fetch manufacture by ID
exports.getManufactureById = async (id) => {
  const manufacture = await manufactureRepository.getManufactureById(id);
  if (!manufacture) {
    throw new NotFoundError("Manufacture not found!");
  }
  return manufacture;
};

// Create a new manufacture
exports.createManufacture = async (data, file) => {
  if (file?.logo) {
    data.logo = await imageUpload(file.logo);
  }
  const newManufacture = await manufactureRepository.createManufacture(data);
  if (!newManufacture) {
    throw new InternalServerError("Failed to create manufacture!");
  }
  return newManufacture;
};

// Update manufacture by ID
exports.updateManufacture = async (id, data, file) => {
  const existingManufacture = await manufactureRepository.getManufactureById(
    id
  );
  if (!existingManufacture) {
    throw new NotFoundError("Manufacture not found!");
  }

  if (file?.logo) {
    data.logo = await imageUpload(file.logo);
  }

  const updatedManufacture = await manufactureRepository.updateManufacture(
    id,
    data
  );
  if (!updatedManufacture) {
    throw new InternalServerError("Failed to update manufacture!");
  }
  return updatedManufacture;
};

// Delete manufacture by ID
exports.deleteManufactureById = async (id) => {
  const existingManufacture = await manufactureRepository.getManufactureById(
    id
  );
  if (!existingManufacture) {
    throw new NotFoundError("Manufacture not found!");
  }

  const deletedManufacture = await manufactureRepository.deleteManufactureById(
    id
  );
  if (!deletedManufacture) {
    throw new InternalServerError("Failed to delete manufacture!");
  }
  return deletedManufacture;
};
