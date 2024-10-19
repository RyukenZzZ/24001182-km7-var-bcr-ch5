const modelService = require("../services/models");
const { successResponse } = require("../utils/response");

exports.getModels = async (req, res, next) => {
    // Call the usecase or service
    const data = await modelService.getModels(
        req.query?.name,
    );
    successResponse(res, data);
};

exports.getModelById = async (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const data = await modelService.getModelById(id);
    successResponse(res, data, "Model found successfully.");
};

exports.createModel = async (req, res, next) => {
    // Create the new Model
    const data = await modelService.createModel(req.body);
    successResponse(res, data, "Model successfully added!");
};

exports.updateModel = async (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const data = await modelService.updateModel(id, req.body, req.files);
    successResponse(res, data, "Model successfully changed !");
};

exports.deleteModelById = async (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const data = await modelService.deleteModelById(id);
    successResponse(res, data, "Model succesfully deleted !");
};