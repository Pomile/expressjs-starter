"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathParamValidator = exports.pageValidator = void 0;

var _require = require('express-validator'),
    checkSchema = _require.checkSchema;

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
var pageValidator = checkSchema({
  page: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    "in": ['params', 'query'],
    errorMessage: 'Invalid page',
    isInt: true,
    // Sanitizers can go here as well
    toInt: true
  },
  limit: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    "in": ['params', 'query'],
    errorMessage: 'Invalid limit',
    isInt: true,
    // Sanitizers can go here as well
    toInt: true
  }
});
exports.pageValidator = pageValidator;