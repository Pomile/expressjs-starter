"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignup = exports.validatePasswordReset = exports.validateLogin = exports.validateEmail = exports.validateConfirmEmail = void 0;

var _expressValidator = require("express-validator");

var validateSignup = [(0, _expressValidator.body)('firstName').isLength({
  min: 2
}).withMessage('firstname too short'), (0, _expressValidator.body)('lastName').isLength({
  min: 2
}).withMessage('lastname too short'), (0, _expressValidator.body)('email').isEmail().normalizeEmail(), (0, _expressValidator.body)('password').isLength({
  min: 8
}).withMessage('must be at least 8 chars long').matches(/\d/).withMessage('must contain a number'), (0, _expressValidator.body)('confirmPassword').custom(function (value, _ref) {
  var req = _ref.req;

  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  } // Indicates the success of this synchronous custom validator


  return true;
})];
exports.validateSignup = validateSignup;
var validateLogin = [(0, _expressValidator.body)('email').isEmail().normalizeEmail(), (0, _expressValidator.body)('password').notEmpty()];
exports.validateLogin = validateLogin;
var validateEmail = [(0, _expressValidator.body)('email').isEmail().normalizeEmail()];
exports.validateEmail = validateEmail;
var validateConfirmEmail = [(0, _expressValidator.body)('token').notEmpty()];
exports.validateConfirmEmail = validateConfirmEmail;
var validatePasswordReset = [(0, _expressValidator.body)('token').notEmpty(), (0, _expressValidator.body)('password').isLength({
  min: 8
}).withMessage('must be at least 8 chars long').matches(/\d/).withMessage('must contain a number'), (0, _expressValidator.body)('confirmPassword').custom(function (value, _ref2) {
  var req = _ref2.req;

  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  } // Indicates the success of this synchronous custom validator


  return true;
})];
exports.validatePasswordReset = validatePasswordReset;