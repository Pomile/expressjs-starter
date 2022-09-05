"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.controller"));

var _catchAsyncError = _interopRequireDefault(require("../../exception/catchAsyncError"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _user2 = require("./user.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require("express").Router();

router.patch("/", _authentication["default"].verify, _user2.validateUserProfile, (0, _catchAsyncError["default"])(_user["default"].updateProfile));
router.get("/", _authentication["default"].verify, (0, _catchAsyncError["default"])(_user["default"].getUserProfile));
var _default = router;
exports["default"] = _default;