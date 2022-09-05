"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserProfile = exports.validateUser = void 0;

var _expressValidator = require("express-validator");

var validateUser = [(0, _expressValidator.check)('firstName').isLength({
  min: 2
}).withMessage('firstname too short'), (0, _expressValidator.check)('lastName').isLength({
  min: 2
}).withMessage('lastname too short'), (0, _expressValidator.check)('email').isEmail().normalizeEmail(), (0, _expressValidator.check)('password').isLength({
  min: 8
}).withMessage('must be at least 8 chars long'), (0, _expressValidator.check)('confirmPassword').matches('password').withMessage('passsword mismatch')];
exports.validateUser = validateUser;
var validateUserProfile = [(0, _expressValidator.body)('firstName').isLength({
  min: 2
}).withMessage('firstname too short'), (0, _expressValidator.body)('lastName').isLength({
  min: 2
}).withMessage('lastname too short'), (0, _expressValidator.body)('interest').isArray({
  min: 1
}).withMessage('Must have at least one interest').isLength({
  min: 2
}).withMessage("Must not be ehjghghjghjgmpty")];
exports.validateUserProfile = validateUserProfile;