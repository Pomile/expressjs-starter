"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _catchAsyncError = _interopRequireDefault(require("../exception/catchAsyncError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Schema validator
 * @param {Object} schemas
 */
var _default = function _default(schema, data) {
  return (0, _catchAsyncError["default"])(schema.validateAsync(data, {
    abortEarly: false
  }));
};

exports["default"] = _default;