import { SchemaValidator } from "../validator";
import { PartialResponse } from "../types";

class RouteHandler {
  private controller;

  constructor(controller) {
    this.controller = controller;
    this.handleRequest = this.handleRequest.bind(this);
  }

  async handleRequest(req, res) {
    try {
      const { baseUrl, path: reqPath, params: reqParams } = req;

      let path = baseUrl + reqPath;

      //if request has params then replace params with :param to authorize request and validate schema
      const params = reqParams;

      if (Object.keys(params).length) {
        for (const key in params) {
          const element = params[key];
          path = path.replace(`/${element}`, `/:${key}`);
        }
      }

      // Validate the request body using the provided schema
      SchemaValidator.validateRequestSchema(req, path);

      // Execute the controller logic
      const result = await this.controller(req);

      // Send a successful response with status 200
      this.sendResponse(res, result);
    } catch (error) {
      // Send an error response with status 500
      this.sendErrorResponse(error, res);
    }
  }

  private sendResponse(res, result, statusCode = 200) {
    res.status(statusCode).json({
      success: true,
      message: "",
      ...result,
    }) as PartialResponse<any>;
  }

  private sendErrorResponse(error, res) {
    let errorCode: number;
    let message: string;
    switch (true) {
      case error.isJoi:
        errorCode = 400;
        message = error.details.map((error: any) => error.message).join(", ");
        break;
      case error.code === 404:
        errorCode = error.code;
        message = error.message || "Not Found";
        break;
      default:
        // Handle other errors
        errorCode = 500;
        console.error(error.stack);
        message = "Internal Server Error";
        break;
    }

    const result = {
      success: false,
      message,
      error_code: errorCode,
      data: null,
    } as PartialResponse<any>;

    res.status(errorCode).json(result);
  }
}

export default RouteHandler;
