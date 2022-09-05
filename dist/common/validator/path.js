"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathParamValidator = void 0;
var pathParamValidator = checkSchema({
  id: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    "in": ['params', 'path'],
    errorMessage: 'ID is wrong',
    isInt: true,
    // Sanitizers can go here as well
    toInt: true
  }
});
exports.pathParamValidator = pathParamValidator;