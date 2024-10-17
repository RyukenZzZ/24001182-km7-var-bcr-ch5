const modelRepository = require("../repositories/model");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.createCar = async (data, file) => {
    // Create the data
    return modelRepository.createCar(data);
};