import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.symbol.description.js';
import 'core-js/modules/es.object.to-string.js';
import 'regenerator-runtime/runtime.js';
import axios from 'axios';
import BaseHook from '@hook/hook';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var abortableSymbol = Symbol("abortable");
var ableSymbol = Symbol("able");

var Ajax = /*#__PURE__*/function (_BaseHook) {
  _inherits(Ajax, _BaseHook);

  var _super = _createSuper(Ajax);

  function Ajax() {
    var _this;

    _classCallCheck(this, Ajax);

    _this = _super.call(this);
    _this[ableSymbol] = true;

    _this.addSetAndGetMethods("config", "getConfig");

    _this.addSetAndGetMethods("params", "getParams");

    return _this;
  }

  _createClass(Ajax, [{
    key: "method",
    value: function method(_method) {
      this.config("method", _method);
      return this;
    }
  }, {
    key: "url",
    value: function url(_url) {
      this.config("url", _url);
      return this;
    }
  }, {
    key: "abortable",
    value: function abortable() {
      var CancelToken = axios.CancelToken;
      var source = CancelToken.source();
      this[abortableSymbol] = source;
      this.config("cancelToken", source.token);
      return this;
    }
  }, {
    key: "abort",
    value: function abort(message) {
      var source = this[abortableSymbol];

      if (source) {
        source.cancel(message);
      }

      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      this[ableSymbol] = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this[ableSymbol] = true;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this[ableSymbol] === false;
    }
  }, {
    key: "convertResponse",
    value: function () {
      var _convertResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", res);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function convertResponse(_x) {
        return _convertResponse.apply(this, arguments);
      }

      return convertResponse;
    }()
  }, {
    key: "convertData",
    value: function () {
      var _convertData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", data);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function convertData(_x2) {
        return _convertData.apply(this, arguments);
      }

      return convertData;
    }()
  }, {
    key: "convertError",
    value: function () {
      var _convertError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(error) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", error);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function convertError(_x3) {
        return _convertError.apply(this, arguments);
      }

      return convertError;
    }()
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        var config, method;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this[ableSymbol]) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", this);

              case 2:
                _context6.prev = 2;
                _context6.next = 5;
                return this.emit("request");

              case 5:
                _context6.next = 9;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](2);

              case 9:
                try {
                  config = this.getConfig();
                  method = (config.method || "get").toUpperCase();

                  if (method === "PUT" || method === "POST" || method === "PATCH") {
                    this.config({
                      data: this.getParams()
                    });
                  } else {
                    this.config({
                      params: this.getParams()
                    });
                  }
                } catch (err) {}

                _context6.next = 12;
                return axios.request(this.getConfig()).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(raw) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            res = raw;
                            _context4.prev = 1;
                            _context4.next = 4;
                            return _this2.convertResponse(res);

                          case 4:
                            res = _context4.sent;
                            _context4.next = 9;
                            break;

                          case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4["catch"](1);

                          case 9:
                            _context4.prev = 9;
                            _context4.next = 12;
                            return _this2.convertData(res.data, res);

                          case 12:
                            res.data = _context4.sent;
                            _context4.next = 17;
                            break;

                          case 15:
                            _context4.prev = 15;
                            _context4.t1 = _context4["catch"](9);

                          case 17:
                            _context4.prev = 17;
                            _context4.next = 20;
                            return _this2.emit("netComplete", true, res);

                          case 20:
                            _context4.next = 24;
                            break;

                          case 22:
                            _context4.prev = 22;
                            _context4.t2 = _context4["catch"](17);

                          case 24:
                            _context4.prev = 24;
                            _context4.next = 27;
                            return _this2.emit("netSuccess", res.data, res);

                          case 27:
                            _context4.next = 31;
                            break;

                          case 29:
                            _context4.prev = 29;
                            _context4.t3 = _context4["catch"](24);

                          case 31:
                            _context4.prev = 31;
                            _context4.next = 34;
                            return _this2.emit("netCompleted", true, res);

                          case 34:
                            _context4.next = 38;
                            break;

                          case 36:
                            _context4.prev = 36;
                            _context4.t4 = _context4["catch"](31);

                          case 38:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[1, 7], [9, 15], [17, 22], [24, 29], [31, 36]]);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"]( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(rawError) {
                    var error;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            error = rawError;
                            _context5.prev = 1;
                            _context5.next = 4;
                            return _this2.convertError(error);

                          case 4:
                            error = _context5.sent;
                            _context5.next = 9;
                            break;

                          case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5["catch"](1);

                          case 9:
                            _context5.prev = 9;
                            _context5.next = 12;
                            return _this2.emit("netComplete", false, error);

                          case 12:
                            _context5.next = 16;
                            break;

                          case 14:
                            _context5.prev = 14;
                            _context5.t1 = _context5["catch"](9);

                          case 16:
                            _context5.prev = 16;

                            if (!error.response) {
                              _context5.next = 22;
                              break;
                            }

                            _context5.next = 20;
                            return _this2.emit("netResponseError", error.response, error);

                          case 20:
                            _context5.next = 29;
                            break;

                          case 22:
                            if (!error.request) {
                              _context5.next = 27;
                              break;
                            }

                            _context5.next = 25;
                            return _this2.emit("netRequestError", error.request, error);

                          case 25:
                            _context5.next = 29;
                            break;

                          case 27:
                            _context5.next = 29;
                            return _this2.emit("netUnknownError", error);

                          case 29:
                            _context5.next = 33;
                            break;

                          case 31:
                            _context5.prev = 31;
                            _context5.t2 = _context5["catch"](16);

                          case 33:
                            _context5.prev = 33;
                            _context5.next = 36;
                            return _this2.emit("netError", error);

                          case 36:
                            _context5.next = 40;
                            break;

                          case 38:
                            _context5.prev = 38;
                            _context5.t3 = _context5["catch"](33);

                          case 40:
                            _context5.prev = 40;
                            _context5.next = 43;
                            return _this2.emit("netCompleted", false, error);

                          case 43:
                            _context5.next = 47;
                            break;

                          case 45:
                            _context5.prev = 45;
                            _context5.t4 = _context5["catch"](40);

                          case 47:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[1, 7], [9, 14], [16, 31], [33, 38], [40, 45]]);
                  }));

                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 12:
                return _context6.abrupt("return", this);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 7]]);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }]);

  return Ajax;
}(BaseHook);

_defineProperty(Ajax, "create", function (url, method) {
  var ajax = new this();

  if (typeof url !== "undefined") {
    ajax.url(url);
  }

  if (typeof method !== "undefined") {
    ajax.method(method);
  }

  return ajax;
});

Ajax.axios = axios;

export default Ajax;
