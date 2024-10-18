const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetModel = (req, res, next) => {
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

exports.validateCreateModel = (req, res, next) => {
  // Validation body schema
  const validateBody = z.object({
    name: z.string(),
    description: z.string(),
    manufacture_id: z.string(),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};