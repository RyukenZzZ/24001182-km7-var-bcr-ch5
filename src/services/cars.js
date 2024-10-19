const carsRepository = require("../repositories/cars");
const { imageUpload } = require("../utils/image-kit");

exports.getCars = async (req) => {
  return await Object.keys(req.query).length ? carsRepository.getCarsByQuery(req.query?.plate,req.query?.manufacture_id,req.query?.model_id,req.query?.type_id) : carsRepository.getCars();
};

exports.getCarsById = async (id) => {
  return await carsRepository.getCarsById(id);
};

exports.addCars = async (data, files) => {
  if (files) {
    data.image = await imageUpload(files);
  }
  return carsRepository.addCars(data);
};

exports.updateCars = async (id, data, files) => {
  if (files) {
    data.image = await imageUpload(files);
  }
  return carsRepository.updateCars(id, data);
};

exports.deleteCars = async (id) => {
  return await carsRepository.deleteCars(id);
};
