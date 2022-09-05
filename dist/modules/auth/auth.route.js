"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./auth.controller"));

var _catchAsyncError = _interopRequireDefault(require("../../exception/catchAsyncError"));

var _auth2 = require("./auth.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require("express").Router();

router.post("/signup", _auth2.validateSignup, (0, _catchAsyncError["default"])(_auth["default"].signUp));
router.post("/login", _auth2.validateLogin, (0, _catchAsyncError["default"])(_auth["default"].login));
router.get("/google", (0, _catchAsyncError["default"])(_auth["default"].getGoogleOAuthUrl));
router.get("/facebook", (0, _catchAsyncError["default"])(_auth["default"].getFacebookOAuthUrl));
router.get("/google/callback", (0, _catchAsyncError["default"])(_auth["default"].googleOAuthCallback));
router.get("/facebook/callback", (0, _catchAsyncError["default"])(_auth["default"].facebookOAuthCallback));
router.post("/verify-email", _auth2.validateConfirmEmail, (0, _catchAsyncError["default"])(_auth["default"].confirmEmail));
router.post("/generate/password-reset-link", _auth2.validateEmail, (0, _catchAsyncError["default"])(_auth["default"].generatePasswordResetToken));
router.post("/password-reset/token", _auth2.validateConfirmEmail, (0, _catchAsyncError["default"])(_auth["default"].verifyPasswordResetToken));
router.post("/password-reset", _auth2.validatePasswordReset, (0, _catchAsyncError["default"])(_auth["default"].resetPassword));
var _default = router;
exports["default"] = _default;