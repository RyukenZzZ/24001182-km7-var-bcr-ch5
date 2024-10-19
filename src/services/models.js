const modelRepository = require("../repositories/models");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getModels = async (name) => {
    const models = await modelRepository.getModels(name);
    if (models.length === 0){
        throw new NotFoundError("Models with the following criteria were not found!");
    }
    return models;
};

exports.getModelById = async (id) => {
    const model = await modelRepository.getModelById(id);
    if (!model) {
        throw new NotFoundError("Model is Not Found!");
    }

    return model;
};

exports.createModel = async (data) => {
    // Create the data
    return modelRepository.createModel(data);
};

exports.updateModel = async (id, data) => {
    // find Model is exist or not (validate the data)
    const existingModel = await modelRepository.getModelById(id);
    if (!existingModel) {
        throw new NotFoundError("Model is Not Found!");
    }
        // replicated existing data with new data
        data = {
            ...existingModel, // existing Model
            ...data,
        };
    
    // if exist, we will delete the Model data
    const updatedModel = await modelRepository.updateModel(id, data);
    if (!updatedModel) {
        throw new InternalServerError(["Failed to update Model!"]);
    }

    return updatedModel;
};

exports.deleteModelById = async (id) => {
    // find Model is exist or not (validate the data)
    const existingModel = await modelRepository.getModelById(id);
    if (!existingModel) {
        throw new NotFoundError("Model is Not Found!");
    }

    // if exist, we will delete the Model data
    const deletedModel = await modelRepository.deleteModelById(id);
    if (!deletedModel) {
        throw new InternalServerError(["Failed to delete Model!"]);
    }

    return deletedModel;
};