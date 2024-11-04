import requestValidationConfig from "./config";

class SchemaValidator {
  static validateRequestSchema(req: any, path: string) {
    const method = requestValidationConfig[path]?.method;
    if (method && req.method !== method) return;

    const schema = requestValidationConfig[path]?.requestSchema;
    if (!schema) return;

    const validateData = { ...req.query, ...req.params, ...req.body };
    const { error } = schema.validate(validateData);
    if (error) {
      // If the request body doesn't match the schema, return error
      throw error;
    }

    return;
  }
}

export default SchemaValidator;
