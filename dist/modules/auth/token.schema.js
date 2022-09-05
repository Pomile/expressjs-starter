"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var tokenSchema = new Schema({
  email: {
    type: String
  },
  type: {
    type: String
  },
  token: {
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
}, {
  autoIndex: false
});
exports.tokenSchema = tokenSchema;