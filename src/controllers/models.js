const modelService = require("../services/models");
const { successResponse } = require("../utils/response");

exports.createModel = async (req, res, next) => {
    // Create the new Car
    const data = await modelService.createModel(req.body);
    successResponse(res, data, "Model successfully added!");
};