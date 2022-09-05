"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errorHandler = _interopRequireDefault(require("../../exception/errorHandler"));

var _user = require("../user/user.model");

var _token = require("./token.model");

var _token2 = require("../../helper/token");

var _util = require("../../helper/util");

var _event = _interopRequireDefault(require("../../helper/event"));

var _Mail = _interopRequireDefault(require("../../services/Mail"));

var _user2 = _interopRequireDefault(require("../user/user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL;

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, null, [{
    key: "signUp",
    value:
    /**
     * @description Create a user
     * @param {object} data
     * @returns {object}
     */
    function () {
      var _signUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        var user, token, hash;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user.User.findOne({
                  email: data.email
                });

              case 2:
                user = _context.sent;

                if (!user) {
                  _context.next = 5;
                  break;
                }

                throw new _errorHandler["default"]('user already exists', 404);

              case 5:
                _context.next = 7;
                return _user.User.create(data);

              case 7:
                user = _context.sent;
                token = (0, _token2.generateToken)({
                  id: user._id,
                  fullname: user.fullname,
                  email: user.email
                });
                hash = (0, _util.genHash)(data.email);

                _Mail["default"].sendWelcome({
                  firstName: user.firstName,
                  email: user.email
                });

                _event["default"].fire('save:email-verification-token', {
                  token: hash,
                  type: "email-verification",
                  email: user.email
                });

                return _context.abrupt("return", {
                  fullname: user.fullname,
                  email: user.email,
                  token: token
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function signUp(_x) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
        var user, token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user.User.findOne({
                  email: data.email
                });

              case 2:
                user = _context2.sent;

                if (user) {
                  _context2.next = 5;
                  break;
                }

                throw new _errorHandler["default"]('incorrect email or password', 401);

              case 5:
                _context2.next = 7;
                return user.comparePassword(data.password, user.password, function (err, result) {
                  if (err) throw new _errorHandler["default"]('incorrect email or password', 401);
                  return result;
                });

              case 7:
                token = (0, _token2.generateToken)({
                  id: user._id,
                  fullname: user.fullname,
                  email: user.email
                });
                return _context2.abrupt("return", {
                  fullname: user.fullname,
                  email: user.email,
                  token: "Bearer ".concat(token)
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "verifyEmail",
    value: function () {
      var _verifyEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(hash) {
        var token;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _token.Token.findOne({
                  token: hash
                });

              case 2:
                token = _context3.sent;
                console.log(token);

                if (!token) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 7;
                return _user.User.updateOne({
                  email: token.email
                }, {
                  isVerified: true
                });

              case 7:
                // console.log(token);
                _event["default"].fire('remove:email-verification-token', {
                  email: token.email,
                  type: 'email-verification'
                });

                return _context3.abrupt("return", 'Email confirmed successfully');

              case 11:
                throw new _errorHandler["default"]('Email verification token expired', 404);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function verifyEmail(_x3) {
        return _verifyEmail.apply(this, arguments);
      }

      return verifyEmail;
    }()
  }, {
    key: "generatePasswordResetToken",
    value: function () {
      var _generatePasswordResetToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(email) {
        var user, token;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _user.User.findOne({
                  email: email
                });

              case 2:
                user = _context4.sent;

                if (user) {
                  _context4.next = 5;
                  break;
                }

                throw new _errorHandler["default"]("Email not found", 404);

              case 5:
                token = (0, _util.genHash)(email);

                _event["default"].fire('save:password-reset-token', {
                  token: token,
                  type: "password-reset-verification",
                  email: email
                });

                return _context4.abrupt("return", 'Password reset link sent');

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function generatePasswordResetToken(_x4) {
        return _generatePasswordResetToken.apply(this, arguments);
      }

      return generatePasswordResetToken;
    }()
    /**
     * Verify Password Reset Token
     * @param {*} hash 
     * @returns 
     */

  }, {
    key: "verifyPasswordResetToken",
    value: function () {
      var _verifyPasswordResetToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(hash) {
        var token;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _token.Token.findOne({
                  token: hash
                });

              case 2:
                token = _context5.sent;

                if (!token) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", 'Email confirmed successfully');

              case 7:
                throw new _errorHandler["default"]('Email verification token expired', 404);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function verifyPasswordResetToken(_x5) {
        return _verifyPasswordResetToken.apply(this, arguments);
      }

      return verifyPasswordResetToken;
    }()
    /**
     * Verify Password Reset Token
     * @param {*} hash 
     * @returns 
     */

  }, {
    key: "resetPassword",
    value: function () {
      var _resetPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(hash, password) {
        var token;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log(hash);
                _context6.next = 3;
                return _token.Token.findOne({
                  token: hash
                });

              case 3:
                token = _context6.sent;
                console.log("token: " + token);

                if (!token) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 8;
                return _user.User.findOneAndUpdate({
                  email: token.email
                }, {
                  password: password
                }, {
                  "new": true
                });

              case 8:
                _event["default"].fire('remove:password-reset-token', {
                  email: token.email,
                  type: 'password-reset-verification'
                });

                return _context6.abrupt("return", 'Password changed successfully');

              case 12:
                throw new _errorHandler["default"]('Invalid token', 400);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function resetPassword(_x6, _x7) {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }()
    /**
     * Generate Google OAuth URL
     */

  }, {
    key: "getGoogleOAuthUrl",
    value: function (_getGoogleOAuthUrl) {
      function getGoogleOAuthUrl() {
        return _getGoogleOAuthUrl.apply(this, arguments);
      }

      getGoogleOAuthUrl.toString = function () {
        return _getGoogleOAuthUrl.toString();
      };

      return getGoogleOAuthUrl;
    }(function () {
      var authorizationUrl = getGoogleOAuthUrl();
      return authorizationUrl;
    }
    /**
     * Generate Facebook OAuth URL
     */
    )
  }, {
    key: "getFacebookOAuthUrl",
    value: function (_getFacebookOAuthUrl) {
      function getFacebookOAuthUrl() {
        return _getFacebookOAuthUrl.apply(this, arguments);
      }

      getFacebookOAuthUrl.toString = function () {
        return _getFacebookOAuthUrl.toString();
      };

      return getFacebookOAuthUrl;
    }(function () {
      var authorizationUrl = getFacebookOAuthUrl();
      return authorizationUrl;
    })
  }, {
    key: "googleOAuthCallback",
    value: function () {
      var _googleOAuthCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(code) {
        var data, oauthUserInfo, token;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return getGoogleUser({
                  code: code
                });

              case 2:
                oauthUserInfo = _context7.sent;

                if (!oauthUserInfo) {
                  _context7.next = 11;
                  break;
                }

                _context7.next = 6;
                return _user2["default"].updateOrCreateUserFromOAuth('google', oauthUserInfo);

              case 6:
                data = _context7.sent;
                token = (0, _token2.generateToken)({
                  id: data.user._id,
                  fullname: data.user.fullname,
                  email: data.user.email
                });
                return _context7.abrupt("return", {
                  fullname: data.user.fullname,
                  email: data.user.email,
                  token: token
                });

              case 11:
                throw new _errorHandler["default"]("UnAuthorized. Something went wrong", 401);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function googleOAuthCallback(_x8) {
        return _googleOAuthCallback.apply(this, arguments);
      }

      return googleOAuthCallback;
    }()
  }, {
    key: "facebookOAuthCallback",
    value: function () {
      var _facebookOAuthCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(code) {
        var data, oauthUserInfo, token;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return getFacebookUser({
                  code: code
                });

              case 2:
                oauthUserInfo = _context8.sent;

                if (!oauthUserInfo) {
                  _context8.next = 12;
                  break;
                }

                _context8.next = 6;
                return _user2["default"].updateOrCreateUserFromOAuth('facebook', oauthUserInfo);

              case 6:
                data = _context8.sent;
                console.log(data);
                token = (0, _token2.generateToken)({
                  id: data.user._id,
                  fullname: data.user.fullname,
                  email: data.user.email
                });
                return _context8.abrupt("return", {
                  fullname: data.user.fullname,
                  email: data.user.email,
                  token: token
                });

              case 12:
                throw new _errorHandler["default"]("UnAuthorized. Something went wrong", 401);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function facebookOAuthCallback(_x9) {
        return _facebookOAuthCallback.apply(this, arguments);
      }

      return facebookOAuthCallback;
    }()
  }]);

  return AuthService;
}();

var _default = AuthService;
exports["default"] = _default;