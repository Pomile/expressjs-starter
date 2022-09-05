"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var env = process.env.NODE_ENV || 'development';
var config = _database["default"][env];
var db = {};
var sequelize;

if (config.use_env_variable) {
  sequelize = new _sequelize["default"](process.env[config.use_env_variable], config);
} else {
  sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
}

var modulesPath = _path["default"].join(__dirname, "../../modules");

_fs["default"].readdirSync(modulesPath).forEach(function (mod) {
  var modulePath = _path["default"].join(basePath, mod);

  _fs["default"].readdirSync(modulePath).filter(function (file) {
    return file.indexOf('.') !== 0 && file.includes('model') && file.slice(-3) === '.js';
  }).forEach(function (file) {
    var model = sequelize["import"](_path["default"].join(modulePath, file));
    db[model.name] = model;
  });
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
var _default = db;
exports["default"] = _default;