"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerExpressHandlebars = _interopRequireDefault(require("nodemailer-express-handlebars"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SMTP_USERNAME
 * SMTP_PORT
 * SMTP_PASSWORD
 */
var Mail = /*#__PURE__*/_createClass(function Mail() {
  _classCallCheck(this, Mail);
});

_defineProperty(Mail, "transporter", _nodemailer["default"].createTransport({
  host: process.env.SMTP_HOST,
  secure: false,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
}));

_defineProperty(Mail, "_sendEmail", function (options, cb) {
  Mail.transporter.use("compile", (0, _nodemailerExpressHandlebars["default"])({
    viewEngine: {
      partialsDir: _path["default"].join(__dirname, "../views"),
      layoutsDir: _path["default"].join(__dirname, "../views"),
      defaultLayout: ""
    },
    viewPath: _path["default"].join(__dirname, "../views")
  }));
  var attachments = options.attachments ? [_objectSpread({}, options.attachments)] : null;
  var mailOptions = {
    from: "".concat(process.env.SMTP_FROM_NAME, " <").concat(process.env.SMTP_FROM_EMAIL, ">"),
    to: options.email,
    subject: options.subject,
    text: options.message,
    template: options.template,
    context: _objectSpread({}, options.params),
    attachments: attachments
  };
  Mail.transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return cb(err, null);
    }

    return cb(null, data);
  });
});

var _default = Mail;
exports["default"] = _default;