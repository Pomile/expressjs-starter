class Response {
  
  constructor(code, message, data) {
    this.status = true;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export class ErrorResponse {
  
  constructor(code, message) {
    this.status = false;
    this.code = code;
    this.message = message;
  }
}

export class ValidationErrorResponse {
  
  constructor(code, message, data, pathParams, queryParams) {
    this.status = false;
    this.code = code;
    this.message = message;
    this.params = pathParams;
    this.query = queryParams;
    delete data.message;
    delete data.pathParams;
    delete data.queryParams;
    this.data = data;
  }
}

export default { Response, ValidationErrorResponse, ErrorResponse };
