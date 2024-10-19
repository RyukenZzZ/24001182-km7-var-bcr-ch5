const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetModels = (req, res, next) => {
    // Validate the query
    const validateQuery = z.object({
      name: z.string().optional().nullable(),
    });
  
    const resultValidateQuery = validateQuery.safeParse(req.params);
    if (!resultValidateQuery.success) {
      // If validation fails, return error messages
      throw new BadRequestError(resultValidateQuery.error.errors);
    }
  
    next();
  };

  exports.validateGetModelById = (req, res, next) => {
    //convert params id to number
    req.params = {
      ...req.params,
      id: Number(req.params.id), 
    }

    // Make a validation schema
    const validateParams = z.object({
      id: z.number(),
    });
  
    const result = validateParams.safeParse(req.params);
    if (!result.success) {
      // If validation fails, return error messages
      throw new BadRequestError(result.error.errors);
    }
  
    next();
  };

exports.validateCreateModel = (req, res, next) => {
  // Validation body schema
  const validateBody = z.object({
    name: z.string(),
    description: z.string(),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdateModel = (req, res, next) => {
    //convert params id to number
    req.params = {
      ...req.params,
      id: Number(req.params.id), 
    }

    // zod validation
    const validateParams = z.object({
      id: z.number(),
    });
  
    const resultValidateParams = validateParams.safeParse(req.params);
    if (!resultValidateParams.success) {
      // If validation fails, return error messages
      throw new BadRequestError(resultValidateParams.error.errors);
    }
  
    // Validation body schema
    const validateBody = z.object({
      name: z.string(),
      description:z.string(),
    });
  
    // Validate
    const resultValidateBody = validateBody.safeParse(req.body);
    if (!resultValidateBody.success) {
      // If validation fails, return error messages
      throw new BadRequestError(resultValidateBody.error.errors);
    }
    
    next();
  };

  exports.validateDeleteModelById = (req, res, next) => {
    //convert params id to number
    req.params = {
      ...req.params,
      id: Number(req.params.id), 
    }

    // Make a validation schema
    const validateParams = z.object({
      id: z.number(),
    });
  
    const result = validateParams.safeParse(req.params);
    if (!result.success) {
      // If validation fails, return error messages
      throw new BadRequestError(result.error.errors);
    }
  
    next();
  };
  
