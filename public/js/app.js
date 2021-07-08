/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/ngapp/dist/ngapp/main.ae607e80ae94e30839db.js":
/*!*****************************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/main.ae607e80ae94e30839db.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e56) { throw _e56; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e57) { didErr = true; err = _e57; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self.webpackChunkngapp = self.webpackChunkngapp || []).push([[179], {
  255: function _(t) {
    function e(t) {
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND", e;
      });
    }

    e.keys = function () {
      return [];
    }, e.resolve = e, e.id = 255, t.exports = e;
  },
  939: function _(t, e, n) {
    "use strict";

    function r(t) {
      return "function" == typeof t;
    }

    var s = !1;
    var o = {
      Promise: void 0,

      set useDeprecatedSynchronousErrorHandling(t) {
        if (t) {
          var _t2 = new Error();

          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + _t2.stack);
        } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");

        s = t;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return s;
      }

    };

    function i(t) {
      setTimeout(function () {
        throw t;
      }, 0);
    }

    var l = {
      closed: !0,
      next: function next(t) {},
      error: function error(t) {
        if (o.useDeprecatedSynchronousErrorHandling) throw t;
        i(t);
      },
      complete: function complete() {}
    },
        u = Array.isArray || function (t) {
      return t && "number" == typeof t.length;
    };

    function a(t) {
      return null !== t && "object" == _typeof(t);
    }

    var c = function () {
      function t(t) {
        return Error.call(this), this.message = t ? "".concat(t.length, " errors occurred during unsubscription:\n").concat(t.map(function (t, e) {
          return "".concat(e + 1, ") ").concat(t.toString());
        }).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = t, this;
      }

      return t.prototype = Object.create(Error.prototype), t;
    }();

    var h = /*#__PURE__*/function () {
      function h(t) {
        _classCallCheck(this, h);

        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t);
      }

      _createClass(h, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var t;
          if (this.closed) return;
          var e = this._parentOrParents,
              n = this._ctorUnsubscribe,
              s = this._unsubscribe,
              o = this._subscriptions;
          if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, e instanceof h) e.remove(this);else if (null !== e) for (var _r2 = 0; _r2 < e.length; ++_r2) {
            e[_r2].remove(this);
          }

          if (r(s)) {
            n && (this._unsubscribe = void 0);

            try {
              s.call(this);
            } catch (i) {
              t = i instanceof c ? d(i.errors) : [i];
            }
          }

          if (u(o)) {
            var _e2 = -1,
                _n2 = o.length;

            for (; ++_e2 < _n2;) {
              var _n3 = o[_e2];
              if (a(_n3)) try {
                _n3.unsubscribe();
              } catch (i) {
                t = t || [], i instanceof c ? t = t.concat(d(i.errors)) : t.push(i);
              }
            }
          }

          if (t) throw new c(t);
        }
      }, {
        key: "add",
        value: function add(t) {
          var e = t;
          if (!t) return h.EMPTY;

          switch (_typeof(t)) {
            case "function":
              e = new h(t);

            case "object":
              if (e === this || e.closed || "function" != typeof e.unsubscribe) return e;
              if (this.closed) return e.unsubscribe(), e;

              if (!(e instanceof h)) {
                var _t3 = e;
                e = new h(), e._subscriptions = [_t3];
              }

              break;

            default:
              throw new Error("unrecognized teardown " + t + " added to Subscription.");
          }

          var _e3 = e,
              n = _e3._parentOrParents;
          if (null === n) e._parentOrParents = this;else if (n instanceof h) {
            if (n === this) return e;
            e._parentOrParents = [n, this];
          } else {
            if (-1 !== n.indexOf(this)) return e;
            n.push(this);
          }
          var r = this._subscriptions;
          return null === r ? this._subscriptions = [e] : r.push(e), e;
        }
      }, {
        key: "remove",
        value: function remove(t) {
          var e = this._subscriptions;

          if (e) {
            var _n4 = e.indexOf(t);

            -1 !== _n4 && e.splice(_n4, 1);
          }
        }
      }]);

      return h;
    }();

    function d(t) {
      return t.reduce(function (t, e) {
        return t.concat(e instanceof c ? e.errors : e);
      }, []);
    }

    h.EMPTY = function (t) {
      return t.closed = !0, t;
    }(new h());

    var f = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();

    var p = /*#__PURE__*/function (_h) {
      _inherits(p, _h);

      var _super = _createSuper(p);

      function p(t, e, n) {
        var _this;

        _classCallCheck(this, p);

        switch (_this = _super.call(this), _this.syncErrorValue = null, _this.syncErrorThrown = !1, _this.syncErrorThrowable = !1, _this.isStopped = !1, arguments.length) {
          case 0:
            _this.destination = l;
            break;

          case 1:
            if (!t) {
              _this.destination = l;
              break;
            }

            if ("object" == _typeof(t)) {
              t instanceof p ? (_this.syncErrorThrowable = t.syncErrorThrowable, _this.destination = t, t.add(_assertThisInitialized(_this))) : (_this.syncErrorThrowable = !0, _this.destination = new _(_assertThisInitialized(_this), t));
              break;
            }

          default:
            _this.syncErrorThrowable = !0, _this.destination = new _(_assertThisInitialized(_this), t, e, n);
        }

        return _this;
      }

      _createClass(p, [{
        key: f,
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next(t) {
          this.isStopped || this._next(t);
        }
      }, {
        key: "error",
        value: function error(t) {
          this.isStopped || (this.isStopped = !0, this._error(t));
        }
      }, {
        key: "complete",
        value: function complete() {
          this.isStopped || (this.isStopped = !0, this._complete());
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          this.closed || (this.isStopped = !0, _get(_getPrototypeOf(p.prototype), "unsubscribe", this).call(this));
        }
      }, {
        key: "_next",
        value: function _next(t) {
          this.destination.next(t);
        }
      }, {
        key: "_error",
        value: function _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.destination.complete(), this.unsubscribe();
        }
      }, {
        key: "_unsubscribeAndRecycle",
        value: function _unsubscribeAndRecycle() {
          var t = this._parentOrParents;
          return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this;
        }
      }], [{
        key: "create",
        value: function create(t, e, n) {
          var r = new p(t, e, n);
          return r.syncErrorThrowable = !1, r;
        }
      }]);

      return p;
    }(h);

    var _ = /*#__PURE__*/function (_p) {
      _inherits(_, _p);

      var _super2 = _createSuper(_);

      function _(t, e, n, s) {
        var _this2;

        _classCallCheck(this, _);

        var o;
        _this2 = _super2.call(this), _this2._parentSubscriber = t;

        var i = _assertThisInitialized(_this2);

        r(e) ? o = e : e && (o = e.next, n = e.error, s = e.complete, e !== l && (i = Object.create(e), r(i.unsubscribe) && _this2.add(i.unsubscribe.bind(i)), i.unsubscribe = _this2.unsubscribe.bind(_assertThisInitialized(_this2)))), _this2._context = i, _this2._next = o, _this2._error = n, _this2._complete = s;
        return _this2;
      }

      _createClass(_, [{
        key: "next",
        value: function next(t) {
          if (!this.isStopped && this._next) {
            var _e4 = this._parentSubscriber;
            o.useDeprecatedSynchronousErrorHandling && _e4.syncErrorThrowable ? this.__tryOrSetError(_e4, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
          }
        }
      }, {
        key: "error",
        value: function error(t) {
          if (!this.isStopped) {
            var _e5 = this._parentSubscriber,
                _n5 = o.useDeprecatedSynchronousErrorHandling;
            if (this._error) _n5 && _e5.syncErrorThrowable ? (this.__tryOrSetError(_e5, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());else if (_e5.syncErrorThrowable) _n5 ? (_e5.syncErrorValue = t, _e5.syncErrorThrown = !0) : i(t), this.unsubscribe();else {
              if (this.unsubscribe(), _n5) throw t;
              i(t);
            }
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var _this3 = this;

          if (!this.isStopped) {
            var _t4 = this._parentSubscriber;

            if (this._complete) {
              var _e6 = function _e6() {
                return _this3._complete.call(_this3._context);
              };

              o.useDeprecatedSynchronousErrorHandling && _t4.syncErrorThrowable ? (this.__tryOrSetError(_t4, _e6), this.unsubscribe()) : (this.__tryOrUnsub(_e6), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
      }, {
        key: "__tryOrUnsub",
        value: function __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if (this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling) throw n;
            i(n);
          }
        }
      }, {
        key: "__tryOrSetError",
        value: function __tryOrSetError(t, e, n) {
          if (!o.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");

          try {
            e.call(this._context, n);
          } catch (r) {
            return o.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (i(r), !0);
          }

          return !1;
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var t = this._parentSubscriber;
          this._context = null, this._parentSubscriber = null, t.unsubscribe();
        }
      }]);

      return _;
    }(p);

    var y = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function g(t) {
      return t;
    }

    var m = function () {
      var t = /*#__PURE__*/function () {
        function t(_t5) {
          _classCallCheck(this, t);

          this._isScalar = !1, _t5 && (this._subscribe = _t5);
        }

        _createClass(t, [{
          key: "lift",
          value: function lift(e) {
            var n = new t();
            return n.source = this, n.operator = e, n;
          }
        }, {
          key: "subscribe",
          value: function subscribe(_t6, e, n) {
            var r = this.operator,
                s = function (t, e, n) {
              if (t) {
                if (t instanceof p) return t;
                if (t[f]) return t[f]();
              }

              return t || e || n ? new p(t, e, n) : new p(l);
            }(_t6, e, n);

            if (s.add(r ? r.call(s, this.source) : this.source || o.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), o.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
            return s;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(_t7) {
            try {
              return this._subscribe(_t7);
            } catch (e) {
              o.useDeprecatedSynchronousErrorHandling && (_t7.syncErrorThrown = !0, _t7.syncErrorValue = e), function (t) {
                for (; t;) {
                  var _t15 = t,
                      _e7 = _t15.closed,
                      _n6 = _t15.destination,
                      _r3 = _t15.isStopped;
                  if (_e7 || _r3) return !1;
                  t = _n6 && _n6 instanceof p ? _n6 : null;
                }

                return !0;
              }(_t7) ? _t7.error(e) : console.warn(e);
            }
          }
        }, {
          key: "forEach",
          value: function forEach(_t8, e) {
            var _this4 = this;

            return new (e = v(e))(function (e, n) {
              var r;
              r = _this4.subscribe(function (e) {
                try {
                  _t8(e);
                } catch (s) {
                  n(s), r && r.unsubscribe();
                }
              }, n, e);
            });
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(_t9) {
            var e = this.source;
            return e && e.subscribe(_t9);
          }
        }, {
          key: y,
          value: function value() {
            return this;
          }
        }, {
          key: "pipe",
          value: function pipe() {
            for (var _len = arguments.length, _t10 = new Array(_len), _key = 0; _key < _len; _key++) {
              _t10[_key] = arguments[_key];
            }

            return 0 === _t10.length ? this : (0 === (e = _t10).length ? g : 1 === e.length ? e[0] : function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            })(this);
            var e;
          }
        }, {
          key: "toPromise",
          value: function toPromise(_t11) {
            var _this5 = this;

            return new (_t11 = v(_t11))(function (_t12, e) {
              var n;

              _this5.subscribe(function (_t13) {
                return n = _t13;
              }, function (_t14) {
                return e(_t14);
              }, function () {
                return _t12(n);
              });
            });
          }
        }]);

        return t;
      }();

      return t.create = function (e) {
        return new t(e);
      }, t;
    }();

    function v(t) {
      if (t || (t = o.Promise || Promise), !t) throw new Error("no Promise impl found");
      return t;
    }

    var b = function () {
      function t() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
      }

      return t.prototype = Object.create(Error.prototype), t;
    }();

    var w = /*#__PURE__*/function (_h2) {
      _inherits(w, _h2);

      var _super3 = _createSuper(w);

      function w(t, e) {
        var _this6;

        _classCallCheck(this, w);

        _this6 = _super3.call(this), _this6.subject = t, _this6.subscriber = e, _this6.closed = !1;
        return _this6;
      }

      _createClass(w, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          var t = this.subject,
              e = t.observers;
          if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
          var n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }]);

      return w;
    }(h);

    var C = /*#__PURE__*/function (_p2) {
      _inherits(C, _p2);

      var _super4 = _createSuper(C);

      function C(t) {
        var _this7;

        _classCallCheck(this, C);

        _this7 = _super4.call(this, t), _this7.destination = t;
        return _this7;
      }

      return C;
    }(p);

    var E = function () {
      var t = /*#__PURE__*/function (_m) {
        _inherits(t, _m);

        var _super5 = _createSuper(t);

        function t() {
          var _this8;

          _classCallCheck(this, t);

          _this8 = _super5.call(this), _this8.observers = [], _this8.closed = !1, _this8.isStopped = !1, _this8.hasError = !1, _this8.thrownError = null;
          return _this8;
        }

        _createClass(t, [{
          key: f,
          value: function value() {
            return new C(this);
          }
        }, {
          key: "lift",
          value: function lift(_t16) {
            var e = new A(this, this);
            return e.operator = _t16, e;
          }
        }, {
          key: "next",
          value: function next(_t17) {
            if (this.closed) throw new b();

            if (!this.isStopped) {
              var _e8 = this.observers,
                  _n7 = _e8.length,
                  _r4 = _e8.slice();

              for (var _s2 = 0; _s2 < _n7; _s2++) {
                _r4[_s2].next(_t17);
              }
            }
          }
        }, {
          key: "error",
          value: function error(_t18) {
            if (this.closed) throw new b();
            this.hasError = !0, this.thrownError = _t18, this.isStopped = !0;
            var e = this.observers,
                n = e.length,
                r = e.slice();

            for (var _s3 = 0; _s3 < n; _s3++) {
              r[_s3].error(_t18);
            }

            this.observers.length = 0;
          }
        }, {
          key: "complete",
          value: function complete() {
            if (this.closed) throw new b();
            this.isStopped = !0;

            var _t19 = this.observers,
                e = _t19.length,
                n = _t19.slice();

            for (var _r5 = 0; _r5 < e; _r5++) {
              n[_r5].complete();
            }

            this.observers.length = 0;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this.isStopped = !0, this.closed = !0, this.observers = null;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(_t20) {
            if (this.closed) throw new b();
            return _get(_getPrototypeOf(t.prototype), "_trySubscribe", this).call(this, _t20);
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(_t21) {
            if (this.closed) throw new b();
            return this.hasError ? (_t21.error(this.thrownError), h.EMPTY) : this.isStopped ? (_t21.complete(), h.EMPTY) : (this.observers.push(_t21), new w(this, _t21));
          }
        }, {
          key: "asObservable",
          value: function asObservable() {
            var _t22 = new m();

            return _t22.source = this, _t22;
          }
        }]);

        return t;
      }(m);

      return t.create = function (t, e) {
        return new A(t, e);
      }, t;
    }();

    var A = /*#__PURE__*/function (_E) {
      _inherits(A, _E);

      var _super6 = _createSuper(A);

      function A(t, e) {
        var _this9;

        _classCallCheck(this, A);

        _this9 = _super6.call(this), _this9.destination = t, _this9.source = e;
        return _this9;
      }

      _createClass(A, [{
        key: "next",
        value: function next(t) {
          var e = this.destination;
          e && e.next && e.next(t);
        }
      }, {
        key: "error",
        value: function error(t) {
          var e = this.destination;
          e && e.error && this.destination.error(t);
        }
      }, {
        key: "complete",
        value: function complete() {
          var t = this.destination;
          t && t.complete && this.destination.complete();
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(t) {
          var e = this.source;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }]);

      return A;
    }(E);

    function k(t, e) {
      return function (n) {
        if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new x(t, e));
      };
    }

    var x = /*#__PURE__*/function () {
      function x(t, e) {
        _classCallCheck(this, x);

        this.project = t, this.thisArg = e;
      }

      _createClass(x, [{
        key: "call",
        value: function call(t, e) {
          return e.subscribe(new S(t, this.project, this.thisArg));
        }
      }]);

      return x;
    }();

    var S = /*#__PURE__*/function (_p3) {
      _inherits(S, _p3);

      var _super7 = _createSuper(S);

      function S(t, e, n) {
        var _this10;

        _classCallCheck(this, S);

        _this10 = _super7.call(this, t), _this10.project = e, _this10.count = 0, _this10.thisArg = n || _assertThisInitialized(_this10);
        return _this10;
      }

      _createClass(S, [{
        key: "_next",
        value: function _next(t) {
          var e;

          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }

          this.destination.next(e);
        }
      }]);

      return S;
    }(p);

    var T = function T(t) {
      return function (e) {
        for (var _n8 = 0, _r6 = t.length; _n8 < _r6 && !e.closed; _n8++) {
          e.next(t[_n8]);
        }

        e.complete();
      };
    },
        V = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
        I = function I(t) {
      return t && "number" == typeof t.length && "function" != typeof t;
    };

    function O(t) {
      return !!t && "function" != typeof t.subscribe && "function" == typeof t.then;
    }

    var D = function D(t) {
      if (t && "function" == typeof t[y]) return n = t, function (t) {
        var e = n[y]();
        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return e.subscribe(t);
      };
      if (I(t)) return T(t);
      if (O(t)) return function (t) {
        return function (e) {
          return t.then(function (t) {
            e.closed || (e.next(t), e.complete());
          }, function (t) {
            return e.error(t);
          }).then(null, i), e;
        };
      }(t);
      if (t && "function" == typeof t[V]) return e = t, function (t) {
        var n = e[V]();

        for (;;) {
          var _e9 = void 0;

          try {
            _e9 = n.next();
          } catch (r) {
            return t.error(r), t;
          }

          if (_e9.done) {
            t.complete();
            break;
          }

          if (t.next(_e9.value), t.closed) break;
        }

        return "function" == typeof n["return"] && t.add(function () {
          n["return"] && n["return"]();
        }), t;
      };
      {
        var _e10 = a(t) ? "an invalid object" : "'".concat(t, "'");

        throw new TypeError("You provided ".concat(_e10, " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."));
      }
      var e, n;
    };

    function P(t, e) {
      return new m(function (n) {
        var r = new h();
        var s = 0;
        return r.add(e.schedule(function () {
          s !== t.length ? (n.next(t[s++]), n.closed || r.add(this.schedule())) : n.complete();
        })), r;
      });
    }

    function j(t, e) {
      return e ? function (t, e) {
        if (null != t) {
          if (function (t) {
            return t && "function" == typeof t[y];
          }(t)) return function (t, e) {
            return new m(function (n) {
              var r = new h();
              return r.add(e.schedule(function () {
                var s = t[y]();
                r.add(s.subscribe({
                  next: function next(t) {
                    r.add(e.schedule(function () {
                      return n.next(t);
                    }));
                  },
                  error: function error(t) {
                    r.add(e.schedule(function () {
                      return n.error(t);
                    }));
                  },
                  complete: function complete() {
                    r.add(e.schedule(function () {
                      return n.complete();
                    }));
                  }
                }));
              })), r;
            });
          }(t, e);
          if (O(t)) return function (t, e) {
            return new m(function (n) {
              var r = new h();
              return r.add(e.schedule(function () {
                return t.then(function (t) {
                  r.add(e.schedule(function () {
                    n.next(t), r.add(e.schedule(function () {
                      return n.complete();
                    }));
                  }));
                }, function (t) {
                  r.add(e.schedule(function () {
                    return n.error(t);
                  }));
                });
              })), r;
            });
          }(t, e);
          if (I(t)) return P(t, e);
          if (function (t) {
            return t && "function" == typeof t[V];
          }(t) || "string" == typeof t) return function (t, e) {
            if (!t) throw new Error("Iterable cannot be null");
            return new m(function (n) {
              var r = new h();
              var s;
              return r.add(function () {
                s && "function" == typeof s["return"] && s["return"]();
              }), r.add(e.schedule(function () {
                s = t[V](), r.add(e.schedule(function () {
                  if (n.closed) return;
                  var t, e;

                  try {
                    var _n9 = s.next();

                    t = _n9.value, e = _n9.done;
                  } catch (r) {
                    return void n.error(r);
                  }

                  e ? n.complete() : (n.next(t), this.schedule());
                }));
              })), r;
            });
          }(t, e);
        }

        throw new TypeError((null !== t && _typeof(t) || t) + " is not observable");
      }(t, e) : t instanceof m ? t : new m(D(t));
    }

    var M = /*#__PURE__*/function (_p4) {
      _inherits(M, _p4);

      var _super8 = _createSuper(M);

      function M(t) {
        var _this11;

        _classCallCheck(this, M);

        _this11 = _super8.call(this), _this11.parent = t;
        return _this11;
      }

      _createClass(M, [{
        key: "_next",
        value: function _next(t) {
          this.parent.notifyNext(t);
        }
      }, {
        key: "_error",
        value: function _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }]);

      return M;
    }(p);

    var H = /*#__PURE__*/function (_p5) {
      _inherits(H, _p5);

      var _super9 = _createSuper(H);

      function H() {
        _classCallCheck(this, H);

        return _super9.apply(this, arguments);
      }

      _createClass(H, [{
        key: "notifyNext",
        value: function notifyNext(t) {
          this.destination.next(t);
        }
      }, {
        key: "notifyError",
        value: function notifyError(t) {
          this.destination.error(t);
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete() {
          this.destination.complete();
        }
      }]);

      return H;
    }(p);

    function N(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
      return "function" == typeof e ? function (r) {
        return r.pipe(N(function (n, r) {
          return j(t(n, r)).pipe(k(function (t, s) {
            return e(n, t, r, s);
          }));
        }, n));
      } : ("number" == typeof e && (n = e), function (e) {
        return e.lift(new R(t, n));
      });
    }

    var R = /*#__PURE__*/function () {
      function R(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, R);

        this.project = t, this.concurrent = e;
      }

      _createClass(R, [{
        key: "call",
        value: function call(t, e) {
          return e.subscribe(new F(t, this.project, this.concurrent));
        }
      }]);

      return R;
    }();

    var F = /*#__PURE__*/function (_H) {
      _inherits(F, _H);

      var _super10 = _createSuper(F);

      function F(t, e) {
        var _this12;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, F);

        _this12 = _super10.call(this, t), _this12.project = e, _this12.concurrent = n, _this12.hasCompleted = !1, _this12.buffer = [], _this12.active = 0, _this12.index = 0;
        return _this12;
      }

      _createClass(F, [{
        key: "_next",
        value: function _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
      }, {
        key: "_tryNext",
        value: function _tryNext(t) {
          var e;
          var n = this.index++;

          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }

          this.active++, this._innerSub(e);
        }
      }, {
        key: "_innerSub",
        value: function _innerSub(t) {
          var e = new M(this),
              n = this.destination;
          n.add(e);

          var r = function (t, e) {
            if (e.closed) return;
            if (t instanceof m) return t.subscribe(e);
            var n;

            try {
              n = D(t)(e);
            } catch (r) {
              e.error(r);
            }

            return n;
          }(t, e);

          r !== e && n.add(r);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
        }
      }, {
        key: "notifyNext",
        value: function notifyNext(t) {
          this.destination.next(t);
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete() {
          var t = this.buffer;
          this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }]);

      return F;
    }(H);

    function L() {
      for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        t[_key2] = arguments[_key2];
      }

      var e = Number.POSITIVE_INFINITY,
          n = null,
          r = t[t.length - 1];
      var s;
      return (s = r) && "function" == typeof s.schedule ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof m ? t[0] : function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
        return N(g, t);
      }(e)(function (t, e) {
        return e ? P(t, e) : new m(T(t));
      }(t, n));
    }

    function B() {
      return function (t) {
        return t.lift(new Z(t));
      };
    }

    var Z = /*#__PURE__*/function () {
      function Z(t) {
        _classCallCheck(this, Z);

        this.connectable = t;
      }

      _createClass(Z, [{
        key: "call",
        value: function call(t, e) {
          var n = this.connectable;
          n._refCount++;
          var r = new $(t, n),
              s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }]);

      return Z;
    }();

    var $ = /*#__PURE__*/function (_p6) {
      _inherits($, _p6);

      var _super11 = _createSuper($);

      function $(t, e) {
        var _this13;

        _classCallCheck(this, $);

        _this13 = _super11.call(this, t), _this13.connectable = e;
        return _this13;
      }

      _createClass($, [{
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var t = this.connectable;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          var e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (t._refCount = e - 1, e > 1) return void (this.connection = null);
          var n = this.connection,
              r = t._connection;
          this.connection = null, !r || n && r !== n || r.unsubscribe();
        }
      }]);

      return $;
    }(p);

    var U = /*#__PURE__*/function (_m2) {
      _inherits(U, _m2);

      var _super12 = _createSuper(U);

      function U(t, e) {
        var _this14;

        _classCallCheck(this, U);

        _this14 = _super12.call(this), _this14.source = t, _this14.subjectFactory = e, _this14._refCount = 0, _this14._isComplete = !1;
        return _this14;
      }

      _createClass(U, [{
        key: "_subscribe",
        value: function _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
      }, {
        key: "getSubject",
        value: function getSubject() {
          var t = this._subject;
          return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject;
        }
      }, {
        key: "connect",
        value: function connect() {
          var t = this._connection;
          return t || (this._isComplete = !1, t = this._connection = new h(), t.add(this.source.subscribe(new W(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t;
        }
      }, {
        key: "refCount",
        value: function refCount() {
          return B()(this);
        }
      }]);

      return U;
    }(m);

    var z = function () {
      var t = U.prototype;
      return {
        operator: {
          value: null
        },
        _refCount: {
          value: 0,
          writable: !0
        },
        _subject: {
          value: null,
          writable: !0
        },
        _connection: {
          value: null,
          writable: !0
        },
        _subscribe: {
          value: t._subscribe
        },
        _isComplete: {
          value: t._isComplete,
          writable: !0
        },
        getSubject: {
          value: t.getSubject
        },
        connect: {
          value: t.connect
        },
        refCount: {
          value: t.refCount
        }
      };
    }();

    var W = /*#__PURE__*/function (_C) {
      _inherits(W, _C);

      var _super13 = _createSuper(W);

      function W(t, e) {
        var _this15;

        _classCallCheck(this, W);

        _this15 = _super13.call(this, t), _this15.connectable = e;
        return _this15;
      }

      _createClass(W, [{
        key: "_error",
        value: function _error(t) {
          this._unsubscribe(), _get(_getPrototypeOf(W.prototype), "_error", this).call(this, t);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(W.prototype), "_complete", this).call(this);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var t = this.connectable;

          if (t) {
            this.connectable = null;
            var _e11 = t._connection;
            t._refCount = 0, t._subject = null, t._connection = null, _e11 && _e11.unsubscribe();
          }
        }
      }]);

      return W;
    }(C);

    function Q() {
      return new E();
    }

    function q(t) {
      for (var _e12 in t) {
        if (t[_e12] === q) return _e12;
      }

      throw Error("Could not find renamed property on target object.");
    }

    function G(t, e) {
      for (var _n10 in e) {
        e.hasOwnProperty(_n10) && !t.hasOwnProperty(_n10) && (t[_n10] = e[_n10]);
      }
    }

    function J(t) {
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) return "[" + t.map(J).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return "".concat(t.overriddenName);
      if (t.name) return "".concat(t.name);
      var e = t.toString();
      if (null == e) return "" + e;
      var n = e.indexOf("\n");
      return -1 === n ? e : e.substring(0, n);
    }

    function K(t, e) {
      return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e;
    }

    var Y = q({
      __forward_ref__: q
    });

    function X(t) {
      return t.__forward_ref__ = X, t.toString = function () {
        return J(this());
      }, t;
    }

    function tt(t) {
      return et(t) ? t() : t;
    }

    function et(t) {
      return "function" == typeof t && t.hasOwnProperty(Y) && t.__forward_ref__ === X;
    }

    var nt = /*#__PURE__*/function (_Error) {
      _inherits(nt, _Error);

      var _super14 = _createSuper(nt);

      function nt(t, e) {
        var _this16;

        _classCallCheck(this, nt);

        _this16 = _super14.call(this, function (t, e) {
          return "".concat(t ? "NG0".concat(t, ": ") : "").concat(e);
        }(t, e)), _this16.code = t;
        return _this16;
      }

      return nt;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function rt(t) {
      return "string" == typeof t ? t : null == t ? "" : String(t);
    }

    function st(t) {
      return "function" == typeof t ? t.name || t.toString() : "object" == _typeof(t) && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : rt(t);
    }

    function ot(t, e) {
      var n = e ? " in ".concat(e) : "";
      throw new nt("201", "No provider for ".concat(st(t), " found").concat(n));
    }

    function it(t) {
      return {
        token: t.token,
        providedIn: t.providedIn || null,
        factory: t.factory,
        value: void 0
      };
    }

    function lt(t) {
      return {
        providers: t.providers || [],
        imports: t.imports || []
      };
    }

    function ut(t) {
      return at(t, ht) || at(t, ft);
    }

    function at(t, e) {
      return t.hasOwnProperty(e) ? t[e] : null;
    }

    function ct(t) {
      return t && (t.hasOwnProperty(dt) || t.hasOwnProperty(pt)) ? t[dt] : null;
    }

    var ht = q({
      "\u0275prov": q
    }),
        dt = q({
      "\u0275inj": q
    }),
        ft = q({
      ngInjectableDef: q
    }),
        pt = q({
      ngInjectorDef: q
    });

    var _t = function () {
      return (_t = _t || {})[_t.Default = 0] = "Default", _t[_t.Host = 1] = "Host", _t[_t.Self = 2] = "Self", _t[_t.SkipSelf = 4] = "SkipSelf", _t[_t.Optional = 8] = "Optional", _t;
    }();

    var yt;

    function gt(t) {
      var e = yt;
      return yt = t, e;
    }

    function mt(t, e, n) {
      var r = ut(t);
      return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & _t.Optional ? null : void 0 !== e ? e : void ot(J(t), "Injector");
    }

    function vt(t) {
      return {
        toString: t
      }.toString();
    }

    var bt = function () {
      return (bt = bt || {})[bt.OnPush = 0] = "OnPush", bt[bt.Default = 1] = "Default", bt;
    }(),
        wt = function () {
      return (wt = wt || {})[wt.Emulated = 0] = "Emulated", wt[wt.None = 2] = "None", wt[wt.ShadowDom = 3] = "ShadowDom", wt;
    }();

    var Ct = "undefined" != typeof globalThis && globalThis,
        Et = "undefined" != typeof window && window,
        At = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        kt = "undefined" != typeof __webpack_require__.g && __webpack_require__.g,
        xt = Ct || kt || Et || At,
        St = {},
        Tt = [],
        Vt = q({
      "\u0275cmp": q
    }),
        It = q({
      "\u0275dir": q
    }),
        Ot = q({
      "\u0275pipe": q
    }),
        Dt = q({
      "\u0275mod": q
    }),
        Pt = q({
      "\u0275loc": q
    }),
        jt = q({
      "\u0275fac": q
    }),
        Mt = q({
      __NG_ELEMENT_ID__: q
    });
    var Ht = 0;

    function Nt(t) {
      return vt(function () {
        var e = {},
            n = {
          type: t.type,
          providersResolver: null,
          decls: t.decls,
          vars: t.vars,
          factory: null,
          template: t.template || null,
          consts: t.consts || null,
          ngContentSelectors: t.ngContentSelectors,
          hostBindings: t.hostBindings || null,
          hostVars: t.hostVars || 0,
          hostAttrs: t.hostAttrs || null,
          contentQueries: t.contentQueries || null,
          declaredInputs: e,
          inputs: null,
          outputs: null,
          exportAs: t.exportAs || null,
          onPush: t.changeDetection === bt.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          selectors: t.selectors || Tt,
          viewQuery: t.viewQuery || null,
          features: t.features || null,
          data: t.data || {},
          encapsulation: t.encapsulation || wt.Emulated,
          id: "c",
          styles: t.styles || Tt,
          _: null,
          setInput: null,
          schemas: t.schemas || null,
          tView: null
        },
            r = t.directives,
            s = t.features,
            o = t.pipes;
        return n.id += Ht++, n.inputs = Zt(t.inputs, e), n.outputs = Zt(t.outputs), s && s.forEach(function (t) {
          return t(n);
        }), n.directiveDefs = r ? function () {
          return ("function" == typeof r ? r() : r).map(Rt);
        } : null, n.pipeDefs = o ? function () {
          return ("function" == typeof o ? o() : o).map(Ft);
        } : null, n;
      });
    }

    function Rt(t) {
      return Ut(t) || function (t) {
        return t[It] || null;
      }(t);
    }

    function Ft(t) {
      return function (t) {
        return t[Ot] || null;
      }(t);
    }

    var Lt = {};

    function Bt(t) {
      return vt(function () {
        var e = {
          type: t.type,
          bootstrap: t.bootstrap || Tt,
          declarations: t.declarations || Tt,
          imports: t.imports || Tt,
          exports: t.exports || Tt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return null != t.id && (Lt[t.id] = t.type), e;
      });
    }

    function Zt(t, e) {
      if (null == t) return St;
      var n = {};

      for (var _r7 in t) {
        if (t.hasOwnProperty(_r7)) {
          var _s4 = t[_r7],
              _o2 = _s4;
          Array.isArray(_s4) && (_o2 = _s4[1], _s4 = _s4[0]), n[_s4] = _r7, e && (e[_s4] = _o2);
        }
      }

      return n;
    }

    var $t = Nt;

    function Ut(t) {
      return t[Vt] || null;
    }

    function zt(t, e) {
      var n = t[Dt] || null;
      if (!n && !0 === e) throw new Error("Type ".concat(J(t), " does not have '\u0275mod' property."));
      return n;
    }

    var Wt = 20,
        Qt = 10;

    function qt(t) {
      return Array.isArray(t) && "object" == _typeof(t[1]);
    }

    function Gt(t) {
      return Array.isArray(t) && !0 === t[1];
    }

    function Jt(t) {
      return 0 != (8 & t.flags);
    }

    function Kt(t) {
      return 2 == (2 & t.flags);
    }

    function Yt(t) {
      return 1 == (1 & t.flags);
    }

    function Xt(t) {
      return null !== t.template;
    }

    function te(t, e) {
      return t.hasOwnProperty(jt) ? t[jt] : null;
    }

    var ee = /*#__PURE__*/function () {
      function ee(t, e, n) {
        _classCallCheck(this, ee);

        this.previousValue = t, this.currentValue = e, this.firstChange = n;
      }

      _createClass(ee, [{
        key: "isFirstChange",
        value: function isFirstChange() {
          return this.firstChange;
        }
      }]);

      return ee;
    }();

    function ne() {
      return re;
    }

    function re(t) {
      return t.type.prototype.ngOnChanges && (t.setInput = oe), se;
    }

    function se() {
      var t = ie(this),
          e = null == t ? void 0 : t.current;

      if (e) {
        var _n11 = t.previous;
        if (_n11 === St) t.previous = e;else for (var _t23 in e) {
          _n11[_t23] = e[_t23];
        }
        t.current = null, this.ngOnChanges(e);
      }
    }

    function oe(t, e, n, r) {
      var s = ie(t) || function (t, e) {
        return t.__ngSimpleChanges__ = e;
      }(t, {
        previous: St,
        current: null
      }),
          o = s.current || (s.current = {}),
          i = s.previous,
          l = this.declaredInputs[n],
          u = i[l];

      o[l] = new ee(u && u.currentValue, e, i === St), t[r] = e;
    }

    function ie(t) {
      return t.__ngSimpleChanges__ || null;
    }

    var le;

    function ue(t) {
      return !!t.listen;
    }

    ne.ngInherit = !0;
    var ae = {
      createRenderer: function createRenderer(t, e) {
        return void 0 !== le ? le : "undefined" != typeof document ? document : void 0;
      }
    };

    function ce(t) {
      for (; Array.isArray(t);) {
        t = t[0];
      }

      return t;
    }

    function he(t, e) {
      return ce(e[t]);
    }

    function de(t, e) {
      return ce(e[t.index]);
    }

    function fe(t, e) {
      return t.data[e];
    }

    function pe(t, e) {
      var n = e[t];
      return qt(n) ? n : n[0];
    }

    function _e(t) {
      return 128 == (128 & t[2]);
    }

    function ye(t, e) {
      return null == e ? null : t[e];
    }

    function ge(t) {
      t[18] = 0;
    }

    function me(t, e) {
      t[5] += e;
      var n = t,
          r = t[3];

      for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) {
        r[5] += e, n = r, r = r[3];
      }
    }

    var ve = {
      lFrame: Ne(null),
      bindingsEnabled: !0,
      isInCheckNoChangesMode: !1
    };

    function be() {
      return ve.bindingsEnabled;
    }

    function we() {
      return ve.lFrame.lView;
    }

    function Ce() {
      return ve.lFrame.tView;
    }

    function Ee() {
      var t = Ae();

      for (; null !== t && 64 === t.type;) {
        t = t.parent;
      }

      return t;
    }

    function Ae() {
      return ve.lFrame.currentTNode;
    }

    function ke(t, e) {
      var n = ve.lFrame;
      n.currentTNode = t, n.isParent = e;
    }

    function xe() {
      return ve.lFrame.isParent;
    }

    function Se() {
      return ve.isInCheckNoChangesMode;
    }

    function Te(t) {
      ve.isInCheckNoChangesMode = t;
    }

    function Ve() {
      return ve.lFrame.bindingIndex++;
    }

    function Ie(t, e) {
      var n = ve.lFrame;
      n.bindingIndex = n.bindingRootIndex = t, Oe(e);
    }

    function Oe(t) {
      ve.lFrame.currentDirectiveIndex = t;
    }

    function De(t) {
      ve.lFrame.currentQueryIndex = t;
    }

    function Pe(t) {
      var e = t[1];
      return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
    }

    function je(t, e, n) {
      if (n & _t.SkipSelf) {
        var _r8 = e,
            _s5 = t;

        for (; _r8 = _r8.parent, !(null !== _r8 || n & _t.Host || (_r8 = Pe(_s5), null === _r8) || (_s5 = _s5[15], 10 & _r8.type));) {
          ;
        }

        if (null === _r8) return !1;
        e = _r8, t = _s5;
      }

      var r = ve.lFrame = He();
      return r.currentTNode = e, r.lView = t, !0;
    }

    function Me(t) {
      var e = He(),
          n = t[1];
      ve.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1;
    }

    function He() {
      var t = ve.lFrame,
          e = null === t ? null : t.child;
      return null === e ? Ne(t) : e;
    }

    function Ne(t) {
      var e = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: t,
        child: null,
        inI18n: !1
      };
      return null !== t && (t.child = e), e;
    }

    function Re() {
      var t = ve.lFrame;
      return ve.lFrame = t.parent, t.currentTNode = null, t.lView = null, t;
    }

    var Fe = Re;

    function Le() {
      var t = Re();
      t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0;
    }

    function Be() {
      return ve.lFrame.selectedIndex;
    }

    function Ze(t) {
      ve.lFrame.selectedIndex = t;
    }

    function $e(t, e) {
      for (var _n12 = e.directiveStart, _r9 = e.directiveEnd; _n12 < _r9; _n12++) {
        var _e13 = t.data[_n12].type.prototype,
            _r10 = _e13.ngAfterContentInit,
            _s6 = _e13.ngAfterContentChecked,
            _o3 = _e13.ngAfterViewInit,
            _i2 = _e13.ngAfterViewChecked,
            _l2 = _e13.ngOnDestroy;
        _r10 && (t.contentHooks || (t.contentHooks = [])).push(-_n12, _r10), _s6 && ((t.contentHooks || (t.contentHooks = [])).push(_n12, _s6), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(_n12, _s6)), _o3 && (t.viewHooks || (t.viewHooks = [])).push(-_n12, _o3), _i2 && ((t.viewHooks || (t.viewHooks = [])).push(_n12, _i2), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(_n12, _i2)), null != _l2 && (t.destroyHooks || (t.destroyHooks = [])).push(_n12, _l2);
      }
    }

    function Ue(t, e, n) {
      Qe(t, e, 3, n);
    }

    function ze(t, e, n, r) {
      (3 & t[2]) === n && Qe(t, e, n, r);
    }

    function We(t, e) {
      var n = t[2];
      (3 & n) === e && (n &= 2047, n += 1, t[2] = n);
    }

    function Qe(t, e, n, r) {
      var s = null != r ? r : -1,
          o = e.length - 1;
      var i = 0;

      for (var _l3 = void 0 !== r ? 65535 & t[18] : 0; _l3 < o; _l3++) {
        if ("number" == typeof e[_l3 + 1]) {
          if (i = e[_l3], null != r && i >= r) break;
        } else e[_l3] < 0 && (t[18] += 65536), (i < s || -1 == s) && (qe(t, n, e, _l3), t[18] = (4294901760 & t[18]) + _l3 + 2), _l3++;
      }
    }

    function qe(t, e, n, r) {
      var s = n[r] < 0,
          o = n[r + 1],
          i = t[s ? -n[r] : n[r]];

      if (s) {
        if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
          t[2] += 2048;

          try {
            o.call(i);
          } finally {}
        }
      } else try {
        o.call(i);
      } finally {}
    }

    var Ge = -1;

    var Je = function Je(t, e, n) {
      _classCallCheck(this, Je);

      this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n;
    };

    function Ke(t, e, n) {
      var r = ue(t);
      var s = 0;

      for (; s < n.length;) {
        var _o4 = n[s];

        if ("number" == typeof _o4) {
          if (0 !== _o4) break;
          s++;
          var _i3 = n[s++],
              _l4 = n[s++],
              _u2 = n[s++];
          r ? t.setAttribute(e, _l4, _u2, _i3) : e.setAttributeNS(_i3, _l4, _u2);
        } else {
          var _i4 = _o4,
              _l5 = n[++s];
          Ye(_i4) ? r && t.setProperty(e, _i4, _l5) : r ? t.setAttribute(e, _i4, _l5) : e.setAttribute(_i4, _l5), s++;
        }
      }

      return s;
    }

    function Ye(t) {
      return 64 === t.charCodeAt(0);
    }

    function Xe(t, e) {
      if (null === e || 0 === e.length) ;else if (null === t || 0 === t.length) t = e.slice();else {
        var _n13 = -1;

        for (var _r11 = 0; _r11 < e.length; _r11++) {
          var _s7 = e[_r11];
          "number" == typeof _s7 ? _n13 = _s7 : 0 === _n13 || tn(t, _n13, _s7, null, -1 === _n13 || 2 === _n13 ? e[++_r11] : null);
        }
      }
      return t;
    }

    function tn(t, e, n, r, s) {
      var o = 0,
          i = t.length;
      if (-1 === e) i = -1;else for (; o < t.length;) {
        var _n14 = t[o++];

        if ("number" == typeof _n14) {
          if (_n14 === e) {
            i = -1;
            break;
          }

          if (_n14 > e) {
            i = o - 1;
            break;
          }
        }
      }

      for (; o < t.length;) {
        var _e14 = t[o];
        if ("number" == typeof _e14) break;

        if (_e14 === n) {
          if (null === r) return void (null !== s && (t[o + 1] = s));
          if (r === t[o + 1]) return void (t[o + 2] = s);
        }

        o++, null !== r && o++, null !== s && o++;
      }

      -1 !== i && (t.splice(i, 0, e), o = i + 1), t.splice(o++, 0, n), null !== r && t.splice(o++, 0, r), null !== s && t.splice(o++, 0, s);
    }

    function en(t) {
      return 32767 & t;
    }

    function nn(t, e) {
      var n = t >> 16,
          r = e;

      for (; n > 0;) {
        r = r[15], n--;
      }

      return r;
    }

    var rn = !0;

    function sn(t) {
      var e = rn;
      return rn = t, e;
    }

    var on = 0;

    function ln(t, e) {
      var n = an(t, e);
      if (-1 !== n) return n;
      var r = e[1];
      r.firstCreatePass && (t.injectorIndex = e.length, un(r.data, t), un(e, null), un(r.blueprint, null));
      var s = cn(t, e),
          o = t.injectorIndex;

      if (s !== Ge) {
        var _t24 = en(s),
            _n15 = nn(s, e),
            _r12 = _n15[1].data;

        for (var _s8 = 0; _s8 < 8; _s8++) {
          e[o + _s8] = _n15[_t24 + _s8] | _r12[_t24 + _s8];
        }
      }

      return e[o + 8] = s, o;
    }

    function un(t, e) {
      t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
    }

    function an(t, e) {
      return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex;
    }

    function cn(t, e) {
      if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
      var n = 0,
          r = null,
          s = e;

      for (; null !== s;) {
        var _t25 = s[1],
            _e15 = _t25.type;
        if (r = 2 === _e15 ? _t25.declTNode : 1 === _e15 ? s[6] : null, null === r) return Ge;
        if (n++, s = s[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16;
      }

      return Ge;
    }

    function hn(t, e, n) {
      !function (t, e, n) {
        var r;
        "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Mt) && (r = n[Mt]), null == r && (r = n[Mt] = on++);
        var s = 255 & r;
        e.data[t + (s >> 5)] |= 1 << s;
      }(t, e, n);
    }

    function dn(t, e, n) {
      if (n & _t.Optional) return t;
      ot(e, "NodeInjector");
    }

    function fn(t, e, n, r) {
      if (n & _t.Optional && void 0 === r && (r = null), 0 == (n & (_t.Self | _t.Host))) {
        var _s9 = t[9],
            _o5 = gt(void 0);

        try {
          return _s9 ? _s9.get(e, r, n & _t.Optional) : mt(e, r, n & _t.Optional);
        } finally {
          gt(_o5);
        }
      }

      return dn(r, e, n);
    }

    function pn(t, e, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _t.Default;
      var s = arguments.length > 4 ? arguments[4] : undefined;

      if (null !== t) {
        var _o6 = function (t) {
          if ("string" == typeof t) return t.charCodeAt(0) || 0;
          var e = t.hasOwnProperty(Mt) ? t[Mt] : void 0;
          return "number" == typeof e ? e >= 0 ? 255 & e : yn : e;
        }(n);

        if ("function" == typeof _o6) {
          if (!je(e, t, r)) return r & _t.Host ? dn(s, n, r) : fn(e, n, r, s);

          try {
            var _t26 = _o6(r);

            if (null != _t26 || r & _t.Optional) return _t26;
            ot(n);
          } finally {
            Fe();
          }
        } else if ("number" == typeof _o6) {
          var _s10 = null,
              _i5 = an(t, e),
              _l6 = Ge,
              _u3 = r & _t.Host ? e[16][6] : null;

          for ((-1 === _i5 || r & _t.SkipSelf) && (_l6 = -1 === _i5 ? cn(t, e) : e[_i5 + 8], _l6 !== Ge && bn(r, !1) ? (_s10 = e[1], _i5 = en(_l6), e = nn(_l6, e)) : _i5 = -1); -1 !== _i5;) {
            var _t27 = e[1];

            if (vn(_o6, _i5, _t27.data)) {
              var _t28 = gn(_i5, e, n, _s10, r, _u3);

              if (_t28 !== _n) return _t28;
            }

            _l6 = e[_i5 + 8], _l6 !== Ge && bn(r, e[1].data[_i5 + 8] === _u3) && vn(_o6, _i5, e) ? (_s10 = _t27, _i5 = en(_l6), e = nn(_l6, e)) : _i5 = -1;
          }
        }
      }

      return fn(e, n, r, s);
    }

    var _n = {};

    function yn() {
      return new wn(Ee(), we());
    }

    function gn(t, e, n, r, s, o) {
      var i = e[1],
          l = i.data[t + 8],
          u = function (t, e, n, r, s) {
        var o = t.providerIndexes,
            i = e.data,
            l = 1048575 & o,
            u = t.directiveStart,
            a = o >> 20,
            c = s ? l + a : t.directiveEnd;

        for (var _h3 = r ? l : l + a; _h3 < c; _h3++) {
          var _t29 = i[_h3];
          if (_h3 < u && n === _t29 || _h3 >= u && _t29.type === n) return _h3;
        }

        if (s) {
          var _t30 = i[u];
          if (_t30 && Xt(_t30) && _t30.type === n) return u;
        }

        return null;
      }(l, i, n, null == r ? Kt(l) && rn : r != i && 0 != (3 & l.type), s & _t.Host && o === l);

      return null !== u ? mn(e, i, u, l) : _n;
    }

    function mn(t, e, n, r) {
      var s = t[n];
      var o = e.data;

      if (s instanceof Je) {
        var _i6 = s;
        _i6.resolving && function (t, e) {
          throw new nt("200", "Circular dependency in DI detected for ".concat(t));
        }(st(o[n]));

        var _l7 = sn(_i6.canSeeViewProviders);

        _i6.resolving = !0;

        var _u4 = _i6.injectImpl ? gt(_i6.injectImpl) : null;

        je(t, r, _t.Default);

        try {
          s = t[n] = _i6.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
            var _e$type$prototype = e.type.prototype,
                r = _e$type$prototype.ngOnChanges,
                s = _e$type$prototype.ngOnInit,
                o = _e$type$prototype.ngDoCheck;

            if (r) {
              var _r13 = re(e);

              (n.preOrderHooks || (n.preOrderHooks = [])).push(t, _r13), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, _r13);
            }

            s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s), o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, o), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, o));
          }(n, o[n], e);
        } finally {
          null !== _u4 && gt(_u4), sn(_l7), _i6.resolving = !1, Fe();
        }
      }

      return s;
    }

    function vn(t, e, n) {
      return !!(n[e + (t >> 5)] & 1 << t);
    }

    function bn(t, e) {
      return !(t & _t.Self || t & _t.Host && e);
    }

    var wn = /*#__PURE__*/function () {
      function wn(t, e) {
        _classCallCheck(this, wn);

        this._tNode = t, this._lView = e;
      }

      _createClass(wn, [{
        key: "get",
        value: function get(t, e) {
          return pn(this._tNode, this._lView, t, void 0, e);
        }
      }]);

      return wn;
    }();

    function Cn(t) {
      return et(t) ? function () {
        var e = Cn(tt(t));
        return e && e();
      } : te(t);
    }

    var En = "__parameters__";

    function An(t, e, n) {
      return vt(function () {
        var r = function (t) {
          return function () {
            if (t) {
              var _n16 = t.apply(void 0, arguments);

              for (var _t31 in _n16) {
                this[_t31] = _n16[_t31];
              }
            }
          };
        }(e);

        function s() {
          for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            t[_key3] = arguments[_key3];
          }

          if (this instanceof s) return r.apply(this, t), this;

          var e = _construct(s, t);

          return n.annotation = e, n;

          function n(t, n, r) {
            var s = t.hasOwnProperty(En) ? t[En] : Object.defineProperty(t, En, {
              value: []
            })[En];

            for (; s.length <= r;) {
              s.push(null);
            }

            return (s[r] = s[r] || []).push(e), t;
          }
        }

        return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s;
      });
    }

    var kn = /*#__PURE__*/function () {
      function kn(t, e) {
        _classCallCheck(this, kn);

        this._desc = t, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.ɵprov = it({
          token: this,
          providedIn: e.providedIn || "root",
          factory: e.factory
        }));
      }

      _createClass(kn, [{
        key: "toString",
        value: function toString() {
          return "InjectionToken ".concat(this._desc);
        }
      }]);

      return kn;
    }();

    function xn(t, e) {
      t.forEach(function (t) {
        return Array.isArray(t) ? xn(t, e) : e(t);
      });
    }

    function Sn(t, e) {
      return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
    }

    function Tn(t, e, n) {
      var r = In(t, e);
      return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
        var s = t.length;
        if (s == e) t.push(n, r);else if (1 === s) t.push(r, t[0]), t[0] = n;else {
          for (s--, t.push(t[s - 1], t[s]); s > e;) {
            t[s] = t[s - 2], s--;
          }

          t[e] = n, t[e + 1] = r;
        }
      }(t, r, e, n)), r;
    }

    function Vn(t, e) {
      var n = In(t, e);
      if (n >= 0) return t[1 | n];
    }

    function In(t, e) {
      return function (t, e, n) {
        var r = 0,
            s = t.length >> 1;

        for (; s !== r;) {
          var _n17 = r + (s - r >> 1),
              _o7 = t[_n17 << 1];

          if (e === _o7) return _n17 << 1;
          _o7 > e ? s = _n17 : r = _n17 + 1;
        }

        return ~(s << 1);
      }(t, e);
    }

    var On = {},
        Dn = /\n/gm,
        Pn = "__source",
        jn = q({
      provide: String,
      useValue: q
    });
    var Mn;

    function Hn(t) {
      var e = Mn;
      return Mn = t, e;
    }

    function Nn(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _t.Default;
      if (void 0 === Mn) throw new Error("inject() must be called from an injection context");
      return null === Mn ? mt(t, void 0, e) : Mn.get(t, e & _t.Optional ? null : void 0, e);
    }

    function Rn(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _t.Default;
      return (yt || Nn)(tt(t), e);
    }

    function Fn(t) {
      var e = [];

      for (var _n18 = 0; _n18 < t.length; _n18++) {
        var _r14 = tt(t[_n18]);

        if (Array.isArray(_r14)) {
          if (0 === _r14.length) throw new Error("Arguments array must have arguments.");

          var _t32 = void 0,
              _n19 = _t.Default;

          for (var _e16 = 0; _e16 < _r14.length; _e16++) {
            var _s11 = _r14[_e16],
                _o8 = _s11.__NG_DI_FLAG__;
            "number" == typeof _o8 ? -1 === _o8 ? _t32 = _s11.token : _n19 |= _o8 : _t32 = _s11;
          }

          e.push(Rn(_t32, _n19));
        } else e.push(Rn(_r14));
      }

      return e;
    }

    function Ln(t, e) {
      return t.__NG_DI_FLAG__ = e, t.prototype.__NG_DI_FLAG__ = e, t;
    }

    var Bn = Ln(An("Inject", function (t) {
      return {
        token: t
      };
    }), -1),
        Zn = Ln(An("Optional"), 8),
        $n = Ln(An("SkipSelf"), 4);

    function Un(t, e) {
      t.__ngContext__ = e;
    }

    function zn(t) {
      var e = function (t) {
        return t.__ngContext__ || null;
      }(t);

      return e ? Array.isArray(e) ? e : e.lView : null;
    }

    function Wn(t) {
      return t.ngDebugContext;
    }

    function Qn(t) {
      return t.ngOriginalError;
    }

    function qn(t) {
      for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      t.error.apply(t, e);
    }

    var Gn = /*#__PURE__*/function () {
      function Gn() {
        _classCallCheck(this, Gn);

        this._console = console;
      }

      _createClass(Gn, [{
        key: "handleError",
        value: function handleError(t) {
          var e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function (t) {
            return t.ngErrorLogger || qn;
          }(t);

          r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n);
        }
      }, {
        key: "_findContext",
        value: function _findContext(t) {
          return t ? Wn(t) ? Wn(t) : this._findContext(Qn(t)) : null;
        }
      }, {
        key: "_findOriginalError",
        value: function _findOriginalError(t) {
          var e = Qn(t);

          for (; e && Qn(e);) {
            e = Qn(e);
          }

          return e;
        }
      }]);

      return Gn;
    }();

    var Jn = function () {
      return ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(xt);
    }();

    function Kn(t) {
      return t instanceof Function ? t() : t;
    }

    var Yn = function () {
      return (Yn = Yn || {})[Yn.Important = 1] = "Important", Yn[Yn.DashCase = 2] = "DashCase", Yn;
    }();

    function Xn(t, e) {
      return (void 0)(t, e);
    }

    function tr(t) {
      var e = t[3];
      return Gt(e) ? e[3] : e;
    }

    function er(t) {
      return rr(t[13]);
    }

    function nr(t) {
      return rr(t[4]);
    }

    function rr(t) {
      for (; null !== t && !Gt(t);) {
        t = t[4];
      }

      return t;
    }

    function sr(t, e, n, r, s) {
      if (null != r) {
        var _o9,
            _i7 = !1;

        Gt(r) ? _o9 = r : qt(r) && (_i7 = !0, r = r[0]);

        var _l8 = ce(r);

        0 === t && null !== n ? null == s ? ar(e, n, _l8) : ur(e, n, _l8, s || null, !0) : 1 === t && null !== n ? ur(e, n, _l8, s || null, !0) : 2 === t ? function (t, e, n) {
          var r = function (t, e) {
            return ue(t) ? t.parentNode(e) : e.parentNode;
          }(t, e);

          r && function (t, e, n, r) {
            ue(t) ? t.removeChild(e, n, r) : e.removeChild(n);
          }(t, r, e, n);
        }(e, _l8, _i7) : 3 === t && e.destroyNode(_l8), null != _o9 && function (t, e, n, r, s) {
          var o = n[7];
          o !== ce(n) && sr(e, t, r, o, s);

          for (var _i8 = Qt; _i8 < n.length; _i8++) {
            var _s12 = n[_i8];
            pr(_s12[1], _s12, t, e, r, o);
          }
        }(e, t, _o9, n, s);
      }
    }

    function or(t, e, n) {
      return ue(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e);
    }

    function ir(t, e) {
      var n = t[9],
          r = n.indexOf(e),
          s = e[3];
      1024 & e[2] && (e[2] &= -1025, me(s, -1)), n.splice(r, 1);
    }

    function lr(t, e) {
      if (!(256 & e[2])) {
        e[2] &= -129, e[2] |= 256, function (t, e) {
          var n;
          if (null != t && null != (n = t.destroyHooks)) for (var _r15 = 0; _r15 < n.length; _r15 += 2) {
            var _t33 = e[n[_r15]];

            if (!(_t33 instanceof Je)) {
              var _e17 = n[_r15 + 1];
              if (Array.isArray(_e17)) for (var _n21 = 0; _n21 < _e17.length; _n21 += 2) {
                var _r16 = _t33[_e17[_n21]],
                    _s13 = _e17[_n21 + 1];

                try {
                  _s13.call(_r16);
                } finally {}
              } else try {
                _e17.call(_t33);
              } finally {}
            }
          }
        }(t, e), function (t, e) {
          var n = t.cleanup,
              r = e[7];
          var s = -1;
          if (null !== n) for (var _o10 = 0; _o10 < n.length - 1; _o10 += 2) {
            if ("string" == typeof n[_o10]) {
              var _t34 = n[_o10 + 1],
                  _i9 = "function" == typeof _t34 ? _t34(e) : ce(e[_t34]),
                  _l9 = r[s = n[_o10 + 2]],
                  _u5 = n[_o10 + 3];

              "boolean" == typeof _u5 ? _i9.removeEventListener(n[_o10], _l9, _u5) : _u5 >= 0 ? r[s = _u5]() : r[s = -_u5].unsubscribe(), _o10 += 2;
            } else {
              var _t35 = r[s = n[_o10 + 1]];

              n[_o10].call(_t35);
            }
          }

          if (null !== r) {
            for (var _t36 = s + 1; _t36 < r.length; _t36++) {
              (0, r[_t36])();
            }

            e[7] = null;
          }
        }(t, e), 1 === e[1].type && ue(e[11]) && e[11].destroy();
        var _n20 = e[17];

        if (null !== _n20 && Gt(e[3])) {
          _n20 !== e[3] && ir(_n20, e);
          var _r17 = e[19];
          null !== _r17 && _r17.detachView(t);
        }
      }
    }

    function ur(t, e, n, r, s) {
      ue(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
    }

    function ar(t, e, n) {
      ue(t) ? t.appendChild(e, n) : e.appendChild(n);
    }

    function cr(t, e, n, r, s) {
      null !== r ? ur(t, e, n, r, s) : ar(t, e, n);
    }

    function hr(t, e, n, r) {
      var s = function (t, e, n) {
        return function (t, e, n) {
          var r = e;

          for (; null !== r && 40 & r.type;) {
            r = (e = r).parent;
          }

          if (null === r) return n[0];

          if (2 & r.flags) {
            var _e18 = t.data[r.directiveStart].encapsulation;
            if (_e18 === wt.None || _e18 === wt.Emulated) return null;
          }

          return de(r, n);
        }(t, e.parent, n);
      }(t, r, e),
          o = e[11],
          i = function (t, e, n) {
        return function (t, e, n) {
          return 40 & t.type ? de(t, n) : null;
        }(t, 0, n);
      }(r.parent || e[6], 0, e);

      if (null != s) if (Array.isArray(n)) for (var _l10 = 0; _l10 < n.length; _l10++) {
        cr(o, s, n[_l10], i, !1);
      } else cr(o, s, n, i, !1);
    }

    function dr(t, e) {
      return null !== e ? t[16][6].projection[e.projection] : null;
    }

    function fr(t, e, n, r, s, o, i) {
      for (; null != n;) {
        var _l11 = r[n.index],
            _u6 = n.type;
        if (i && 0 === e && (_l11 && Un(ce(_l11), r), n.flags |= 4), 64 != (64 & n.flags)) if (8 & _u6) fr(t, e, n.child, r, s, o, !1), sr(e, t, s, _l11, o);else if (32 & _u6) {
          var _i10 = Xn(n, r);

          var _u7 = void 0;

          for (; _u7 = _i10();) {
            sr(e, t, s, _u7, o);
          }

          sr(e, t, s, _l11, o);
        } else 16 & _u6 ? _r(t, e, r, n, s, o) : sr(e, t, s, _l11, o);
        n = i ? n.projectionNext : n.next;
      }
    }

    function pr(t, e, n, r, s, o) {
      fr(n, r, t.firstChild, e, s, o, !1);
    }

    function _r(t, e, n, r, s, o) {
      var i = n[16],
          l = i[6].projection[r.projection];
      if (Array.isArray(l)) for (var _u8 = 0; _u8 < l.length; _u8++) {
        sr(e, t, s, l[_u8], o);
      } else fr(t, e, l, i[3], s, o, !0);
    }

    function yr(t, e, n) {
      ue(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n;
    }

    function gr(t, e, n) {
      ue(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n;
    }

    function mr(t, e, n) {
      var r = t.length;

      for (;;) {
        var _s14 = t.indexOf(e, n);

        if (-1 === _s14) return _s14;

        if (0 === _s14 || t.charCodeAt(_s14 - 1) <= 32) {
          var _n22 = e.length;
          if (_s14 + _n22 === r || t.charCodeAt(_s14 + _n22) <= 32) return _s14;
        }

        n = _s14 + 1;
      }
    }

    var vr = "ng-template";

    function br(t, e, n) {
      var r = 0;

      for (; r < t.length;) {
        var _s15 = t[r++];

        if (n && "class" === _s15) {
          if (_s15 = t[r], -1 !== mr(_s15.toLowerCase(), e, 0)) return !0;
        } else if (1 === _s15) {
          for (; r < t.length && "string" == typeof (_s15 = t[r++]);) {
            if (_s15.toLowerCase() === e) return !0;
          }

          return !1;
        }
      }

      return !1;
    }

    function wr(t) {
      return 4 === t.type && t.value !== vr;
    }

    function Cr(t, e, n) {
      return e === (4 !== t.type || n ? t.value : vr);
    }

    function Er(t, e, n) {
      var r = 4;

      var s = t.attrs || [],
          o = function (t) {
        for (var _n23 = 0; _n23 < t.length; _n23++) {
          if (3 === (e = t[_n23]) || 4 === e || 6 === e) return _n23;
        }

        var e;
        return t.length;
      }(s);

      var i = !1;

      for (var _l12 = 0; _l12 < e.length; _l12++) {
        var _u9 = e[_l12];

        if ("number" != typeof _u9) {
          if (!i) if (4 & r) {
            if (r = 2 | 1 & r, "" !== _u9 && !Cr(t, _u9, n) || "" === _u9 && 1 === e.length) {
              if (Ar(r)) return !1;
              i = !0;
            }
          } else {
            var _a = 8 & r ? _u9 : e[++_l12];

            if (8 & r && null !== t.attrs) {
              if (!br(t.attrs, _a, n)) {
                if (Ar(r)) return !1;
                i = !0;
              }

              continue;
            }

            var _c = kr(8 & r ? "class" : _u9, s, wr(t), n);

            if (-1 === _c) {
              if (Ar(r)) return !1;
              i = !0;
              continue;
            }

            if ("" !== _a) {
              var _t37 = void 0;

              _t37 = _c > o ? "" : s[_c + 1].toLowerCase();

              var _e19 = 8 & r ? _t37 : null;

              if (_e19 && -1 !== mr(_e19, _a, 0) || 2 & r && _a !== _t37) {
                if (Ar(r)) return !1;
                i = !0;
              }
            }
          }
        } else {
          if (!i && !Ar(r) && !Ar(_u9)) return !1;
          if (i && Ar(_u9)) continue;
          i = !1, r = _u9 | 1 & r;
        }
      }

      return Ar(r) || i;
    }

    function Ar(t) {
      return 0 == (1 & t);
    }

    function kr(t, e, n, r) {
      if (null === e) return -1;
      var s = 0;

      if (r || !n) {
        var _n24 = !1;

        for (; s < e.length;) {
          var _r18 = e[s];
          if (_r18 === t) return s;
          if (3 === _r18 || 6 === _r18) _n24 = !0;else {
            if (1 === _r18 || 2 === _r18) {
              var _t38 = e[++s];

              for (; "string" == typeof _t38;) {
                _t38 = e[++s];
              }

              continue;
            }

            if (4 === _r18) break;

            if (0 === _r18) {
              s += 4;
              continue;
            }
          }
          s += _n24 ? 1 : 2;
        }

        return -1;
      }

      return function (t, e) {
        var n = t.indexOf(4);
        if (n > -1) for (n++; n < t.length;) {
          var _r19 = t[n];
          if ("number" == typeof _r19) return -1;
          if (_r19 === e) return n;
          n++;
        }
        return -1;
      }(e, t);
    }

    function xr(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

      for (var _r20 = 0; _r20 < e.length; _r20++) {
        if (Er(t, e[_r20], n)) return !0;
      }

      return !1;
    }

    function Sr(t, e) {
      return t ? ":not(" + e.trim() + ")" : e;
    }

    function Tr(t) {
      var e = t[0],
          n = 1,
          r = 2,
          s = "",
          o = !1;

      for (; n < t.length;) {
        var _i11 = t[n];
        if ("string" == typeof _i11) {
          if (2 & r) {
            var _e20 = t[++n];
            s += "[" + _i11 + (_e20.length > 0 ? '="' + _e20 + '"' : "") + "]";
          } else 8 & r ? s += "." + _i11 : 4 & r && (s += " " + _i11);
        } else "" === s || Ar(_i11) || (e += Sr(o, s), s = ""), r = _i11, o = o || !Ar(r);
        n++;
      }

      return "" !== s && (e += Sr(o, s)), e;
    }

    var Vr = {};

    function Ir(t) {
      Or(Ce(), we(), Be() + t, Se());
    }

    function Or(t, e, n, r) {
      if (!r) if (3 == (3 & e[2])) {
        var _r21 = t.preOrderCheckHooks;
        null !== _r21 && Ue(e, _r21, n);
      } else {
        var _r22 = t.preOrderHooks;
        null !== _r22 && ze(e, _r22, 0, n);
      }
      Ze(n);
    }

    function Dr(t, e) {
      return t << 17 | e << 2;
    }

    function Pr(t) {
      return t >> 17 & 32767;
    }

    function jr(t) {
      return 2 | t;
    }

    function Mr(t) {
      return (131068 & t) >> 2;
    }

    function Hr(t, e) {
      return -131069 & t | e << 2;
    }

    function Nr(t) {
      return 1 | t;
    }

    function Rr(t, e) {
      var n = t.contentQueries;
      if (null !== n) for (var _r23 = 0; _r23 < n.length; _r23 += 2) {
        var _s16 = n[_r23],
            _o11 = n[_r23 + 1];

        if (-1 !== _o11) {
          var _n25 = t.data[_o11];
          De(_s16), _n25.contentQueries(2, e[_o11], _o11);
        }
      }
    }

    function Fr(t, e, n, r, s, o, i, l, u, a) {
      var c = e.blueprint.slice();
      return c[0] = s, c[2] = 140 | r, ge(c), c[3] = c[15] = t, c[8] = n, c[10] = i || t && t[10], c[11] = l || t && t[11], c[12] = u || t && t[12] || null, c[9] = a || t && t[9] || null, c[6] = o, c[16] = 2 == e.type ? t[16] : c, c;
    }

    function Lr(t, e, n, r, s) {
      var o = t.data[e];
      if (null === o) o = function (t, e, n, r, s) {
        var o = Ae(),
            i = xe(),
            l = t.data[e] = function (t, e, n, r, s, o) {
          return {
            type: n,
            index: r,
            insertBeforeIndex: null,
            injectorIndex: e ? e.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            value: s,
            attrs: o,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: e,
            projection: null,
            styles: null,
            stylesWithoutHost: null,
            residualStyles: void 0,
            classes: null,
            classesWithoutHost: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          };
        }(0, i ? o : o && o.parent, n, e, r, s);

        return null === t.firstChild && (t.firstChild = l), null !== o && (i ? null == o.child && null !== l.parent && (o.child = l) : null === o.next && (o.next = l)), l;
      }(t, e, n, r, s), ve.lFrame.inI18n && (o.flags |= 64);else if (64 & o.type) {
        o.type = n, o.value = r, o.attrs = s;

        var _t39 = function () {
          var t = ve.lFrame,
              e = t.currentTNode;
          return t.isParent ? e : e.parent;
        }();

        o.injectorIndex = null === _t39 ? -1 : _t39.injectorIndex;
      }
      return ke(o, !0), o;
    }

    function Br(t, e, n, r) {
      if (0 === n) return -1;
      var s = e.length;

      for (var _o12 = 0; _o12 < n; _o12++) {
        e.push(r), t.blueprint.push(r), t.data.push(null);
      }

      return s;
    }

    function Zr(t, e, n) {
      Me(e);

      try {
        var _r24 = t.viewQuery;
        null !== _r24 && hs(1, _r24, n);
        var _s17 = t.template;
        null !== _s17 && zr(t, e, _s17, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Rr(t, e), t.staticViewQueries && hs(2, t.viewQuery, n);
        var _o13 = t.components;
        null !== _o13 && function (t, e) {
          for (var _n26 = 0; _n26 < e.length; _n26++) {
            is(t, e[_n26]);
          }
        }(e, _o13);
      } catch (r) {
        throw t.firstCreatePass && (t.incompleteFirstPass = !0), r;
      } finally {
        e[2] &= -5, Le();
      }
    }

    function $r(t, e, n, r) {
      var s = e[2];
      if (256 == (256 & s)) return;
      Me(e);
      var o = Se();

      try {
        ge(e), ve.lFrame.bindingIndex = t.bindingStartIndex, null !== n && zr(t, e, n, 2, r);

        var _i12 = 3 == (3 & s);

        if (!o) if (_i12) {
          var _n27 = t.preOrderCheckHooks;
          null !== _n27 && Ue(e, _n27, null);
        } else {
          var _n28 = t.preOrderHooks;
          null !== _n28 && ze(e, _n28, 0, null), We(e, 0);
        }
        if (function (t) {
          for (var _e21 = er(t); null !== _e21; _e21 = nr(_e21)) {
            if (!_e21[2]) continue;
            var _t40 = _e21[9];

            for (var _e22 = 0; _e22 < _t40.length; _e22++) {
              var _n29 = _t40[_e22],
                  _r25 = _n29[3];
              0 == (1024 & _n29[2]) && me(_r25, 1), _n29[2] |= 1024;
            }
          }
        }(e), function (t) {
          for (var _e23 = er(t); null !== _e23; _e23 = nr(_e23)) {
            for (var _t41 = Qt; _t41 < _e23.length; _t41++) {
              var _n30 = _e23[_t41],
                  _r26 = _n30[1];
              _e(_n30) && $r(_r26, _n30, _r26.template, _n30[8]);
            }
          }
        }(e), null !== t.contentQueries && Rr(t, e), !o) if (_i12) {
          var _n31 = t.contentCheckHooks;
          null !== _n31 && Ue(e, _n31);
        } else {
          var _n32 = t.contentHooks;
          null !== _n32 && ze(e, _n32, 1), We(e, 1);
        }
        !function (t, e) {
          var n = t.hostBindingOpCodes;
          if (null !== n) try {
            for (var _t42 = 0; _t42 < n.length; _t42++) {
              var _r27 = n[_t42];
              if (_r27 < 0) Ze(~_r27);else {
                var _s18 = _r27,
                    _o14 = n[++_t42],
                    _i13 = n[++_t42];
                Ie(_o14, _s18), _i13(2, e[_s18]);
              }
            }
          } finally {
            Ze(-1);
          }
        }(t, e);
        var _l13 = t.components;
        null !== _l13 && function (t, e) {
          for (var _n33 = 0; _n33 < e.length; _n33++) {
            ss(t, e[_n33]);
          }
        }(e, _l13);
        var _u10 = t.viewQuery;
        if (null !== _u10 && hs(2, _u10, r), !o) if (_i12) {
          var _n34 = t.viewCheckHooks;
          null !== _n34 && Ue(e, _n34);
        } else {
          var _n35 = t.viewHooks;
          null !== _n35 && ze(e, _n35, 2), We(e, 2);
        }
        !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), o || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, me(e[3], -1));
      } finally {
        Le();
      }
    }

    function Ur(t, e, n, r) {
      var s = e[10],
          o = !Se(),
          i = 4 == (4 & e[2]);

      try {
        o && !i && s.begin && s.begin(), i && Zr(t, e, r), $r(t, e, n, r);
      } finally {
        o && !i && s.end && s.end();
      }
    }

    function zr(t, e, n, r, s) {
      var o = Be(),
          i = 2 & r;

      try {
        Ze(-1), i && e.length > Wt && Or(t, e, Wt, Se()), n(r, s);
      } finally {
        Ze(o);
      }
    }

    function Wr(t) {
      var e = t.tView;
      return null === e || e.incompleteFirstPass ? t.tView = Qr(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e;
    }

    function Qr(t, e, n, r, s, o, i, l, u, a) {
      var c = Wt + r,
          h = c + s,
          d = function (t, e) {
        var n = [];

        for (var _r28 = 0; _r28 < e; _r28++) {
          n.push(_r28 < t ? null : Vr);
        }

        return n;
      }(c, h),
          f = "function" == typeof a ? a() : a;

      return d[1] = {
        type: t,
        blueprint: d,
        template: n,
        queries: null,
        viewQuery: l,
        declTNode: e,
        data: d.slice().fill(null, c),
        bindingStartIndex: c,
        expandoStartIndex: h,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: "function" == typeof o ? o() : o,
        pipeRegistry: "function" == typeof i ? i() : i,
        firstChild: null,
        schemas: u,
        consts: f,
        incompleteFirstPass: !1
      };
    }

    function qr(t, e, n) {
      for (var _r29 in t) {
        if (t.hasOwnProperty(_r29)) {
          var _s19 = t[_r29];
          (n = null === n ? {} : n).hasOwnProperty(_r29) ? n[_r29].push(e, _s19) : n[_r29] = [e, _s19];
        }
      }

      return n;
    }

    function Gr(t, e, n, r, s, o) {
      var i = o.hostBindings;

      if (i) {
        var _n36 = t.hostBindingOpCodes;
        null === _n36 && (_n36 = t.hostBindingOpCodes = []);

        var _o15 = ~e.index;

        (function (t) {
          var e = t.length;

          for (; e > 0;) {
            var _n37 = t[--e];
            if ("number" == typeof _n37 && _n37 < 0) return _n37;
          }

          return 0;
        })(_n36) != _o15 && _n36.push(_o15), _n36.push(r, s, i);
      }
    }

    function Jr(t, e) {
      null !== t.hostBindings && t.hostBindings(1, e);
    }

    function Kr(t, e) {
      e.flags |= 2, (t.components || (t.components = [])).push(e.index);
    }

    function Yr(t, e, n) {
      if (n) {
        if (e.exportAs) for (var _r30 = 0; _r30 < e.exportAs.length; _r30++) {
          n[e.exportAs[_r30]] = t;
        }
        Xt(e) && (n[""] = t);
      }
    }

    function Xr(t, e, n) {
      t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e;
    }

    function ts(t, e, n, r, s) {
      t.data[r] = s;
      var o = s.factory || (s.factory = te(s.type)),
          i = new Je(o, Xt(s), null);
      t.blueprint[r] = i, n[r] = i, Gr(t, e, 0, r, Br(t, n, s.hostVars, Vr), s);
    }

    function es(t, e, n) {
      var r = de(e, t),
          s = Wr(n),
          o = t[10],
          i = ls(t, Fr(t, s, null, n.onPush ? 64 : 16, r, e, o, o.createRenderer(r, n), null, null));
      t[e.index] = i;
    }

    function ns(t, e, n, r, s, o) {
      var i = o[e];

      if (null !== i) {
        var _t43 = r.setInput;

        for (var _e24 = 0; _e24 < i.length;) {
          var _s20 = i[_e24++],
              _o16 = i[_e24++],
              _l14 = i[_e24++];
          null !== _t43 ? r.setInput(n, _l14, _s20, _o16) : n[_o16] = _l14;
        }
      }
    }

    function rs(t, e) {
      var n = null,
          r = 0;

      for (; r < e.length;) {
        var _s21 = e[r];
        if (0 !== _s21) {
          if (5 !== _s21) {
            if ("number" == typeof _s21) break;
            t.hasOwnProperty(_s21) && (null === n && (n = []), n.push(_s21, t[_s21], e[r + 1])), r += 2;
          } else r += 2;
        } else r += 4;
      }

      return n;
    }

    function ss(t, e) {
      var n = pe(e, t);

      if (_e(n)) {
        var _t44 = n[1];
        80 & n[2] ? $r(_t44, n, _t44.template, n[8]) : n[5] > 0 && os(n);
      }
    }

    function os(t) {
      for (var _n38 = er(t); null !== _n38; _n38 = nr(_n38)) {
        for (var _t45 = Qt; _t45 < _n38.length; _t45++) {
          var _e25 = _n38[_t45];

          if (1024 & _e25[2]) {
            var _t46 = _e25[1];
            $r(_t46, _e25, _t46.template, _e25[8]);
          } else _e25[5] > 0 && os(_e25);
        }
      }

      var e = t[1].components;
      if (null !== e) for (var _n39 = 0; _n39 < e.length; _n39++) {
        var _r31 = pe(e[_n39], t);

        _e(_r31) && _r31[5] > 0 && os(_r31);
      }
    }

    function is(t, e) {
      var n = pe(e, t),
          r = n[1];
      !function (t, e) {
        for (var _n40 = e.length; _n40 < t.blueprint.length; _n40++) {
          e.push(t.blueprint[_n40]);
        }
      }(r, n), Zr(r, n, n[8]);
    }

    function ls(t, e) {
      return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e;
    }

    function us(t) {
      for (; t;) {
        t[2] |= 64;

        var _e26 = tr(t);

        if (0 != (512 & t[2]) && !_e26) return t;
        t = _e26;
      }

      return null;
    }

    function as(t, e, n) {
      var r = e[10];
      r.begin && r.begin();

      try {
        $r(t, e, t.template, n);
      } catch (s) {
        throw _s(e, s), s;
      } finally {
        r.end && r.end();
      }
    }

    function cs(t) {
      !function (t) {
        for (var _e27 = 0; _e27 < t.components.length; _e27++) {
          var _n41 = t.components[_e27],
              _r32 = zn(_n41),
              _s22 = _r32[1];

          Ur(_s22, _r32, _s22.template, _n41);
        }
      }(t[8]);
    }

    function hs(t, e, n) {
      De(0), e(t, n);
    }

    var ds = function () {
      return Promise.resolve(null);
    }();

    function fs(t) {
      return t[7] || (t[7] = []);
    }

    function ps(t) {
      return t.cleanup || (t.cleanup = []);
    }

    function _s(t, e) {
      var n = t[9],
          r = n ? n.get(Gn, null) : null;
      r && r.handleError(e);
    }

    function ys(t, e, n, r, s) {
      for (var _o17 = 0; _o17 < n.length;) {
        var _i14 = n[_o17++],
            _l15 = n[_o17++],
            _u11 = e[_i14],
            _a2 = t.data[_i14];
        null !== _a2.setInput ? _a2.setInput(_u11, s, r, _l15) : _u11[_l15] = s;
      }
    }

    function gs(t, e, n) {
      var r = n ? t.styles : null,
          s = n ? t.classes : null,
          o = 0;
      if (null !== e) for (var _i15 = 0; _i15 < e.length; _i15++) {
        var _t47 = e[_i15];
        "number" == typeof _t47 ? o = _t47 : 1 == o ? s = K(s, _t47) : 2 == o && (r = K(r, _t47 + ": " + e[++_i15] + ";"));
      }
      n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = s : t.classesWithoutHost = s;
    }

    var ms = new kn("INJECTOR", -1);

    var vs = /*#__PURE__*/function () {
      function vs() {
        _classCallCheck(this, vs);
      }

      _createClass(vs, [{
        key: "get",
        value: function get(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : On;

          if (e === On) {
            var _e28 = new Error("NullInjectorError: No provider for ".concat(J(t), "!"));

            throw _e28.name = "NullInjectorError", _e28;
          }

          return e;
        }
      }]);

      return vs;
    }();

    var bs = new kn("Set Injector scope."),
        ws = {},
        Cs = {};
    var Es;

    function As() {
      return void 0 === Es && (Es = new vs()), Es;
    }

    function ks(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      return new xs(t, n, e || As(), r);
    }

    var xs = /*#__PURE__*/function () {
      function xs(t, e, n) {
        var _this17 = this;

        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, xs);

        this.parent = n, this.records = new Map(), this.injectorDefTypes = new Set(), this.onDestroy = new Set(), this._destroyed = !1;
        var s = [];
        e && xn(e, function (n) {
          return _this17.processProvider(n, t, e);
        }), xn([t], function (t) {
          return _this17.processInjectorType(t, [], s);
        }), this.records.set(ms, Vs(void 0, this));
        var o = this.records.get(bs);
        this.scope = null != o ? o.value : null, this.source = r || ("object" == _typeof(t) ? null : J(t));
      }

      _createClass(xs, [{
        key: "destroyed",
        get: function get() {
          return this._destroyed;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.assertNotDestroyed(), this._destroyed = !0;

          try {
            this.onDestroy.forEach(function (t) {
              return t.ngOnDestroy();
            });
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
      }, {
        key: "get",
        value: function get(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : On;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _t.Default;
          this.assertNotDestroyed();
          var r = Hn(this);

          try {
            if (!(n & _t.SkipSelf)) {
              var _e29 = this.records.get(t);

              if (void 0 === _e29) {
                var _n42 = ("function" == typeof (s = t) || "object" == _typeof(s) && s instanceof kn) && ut(t);

                _e29 = _n42 && this.injectableDefInScope(_n42) ? Vs(Ss(t), ws) : null, this.records.set(t, _e29);
              }

              if (null != _e29) return this.hydrate(t, _e29);
            }

            return (n & _t.Self ? As() : this.parent).get(t, e = n & _t.Optional && e === On ? null : e);
          } catch (o) {
            if ("NullInjectorError" === o.name) {
              if ((o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(J(t)), r) throw o;
              return function (t, e, n, r) {
                var s = t.ngTempTokenPath;
                throw e[Pn] && s.unshift(e[Pn]), t.message = function (t, e, n) {
                  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                  t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                  var s = J(e);
                  if (Array.isArray(e)) s = e.map(J).join(" -> ");else if ("object" == _typeof(e)) {
                    var _t48 = [];

                    for (var _n43 in e) {
                      if (e.hasOwnProperty(_n43)) {
                        var _r33 = e[_n43];

                        _t48.push(_n43 + ":" + ("string" == typeof _r33 ? JSON.stringify(_r33) : J(_r33)));
                      }
                    }

                    s = "{".concat(_t48.join(", "), "}");
                  }
                  return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(s, "]: ").concat(t.replace(Dn, "\n  "));
                }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t;
              }(o, t, "R3InjectorError", this.source);
            }

            throw o;
          } finally {
            Hn(r);
          }

          var s;
        }
      }, {
        key: "_resolveInjectorDefTypes",
        value: function _resolveInjectorDefTypes() {
          var _this18 = this;

          this.injectorDefTypes.forEach(function (t) {
            return _this18.get(t);
          });
        }
      }, {
        key: "toString",
        value: function toString() {
          var t = [];
          return this.records.forEach(function (e, n) {
            return t.push(J(n));
          }), "R3Injector[".concat(t.join(", "), "]");
        }
      }, {
        key: "assertNotDestroyed",
        value: function assertNotDestroyed() {
          if (this._destroyed) throw new Error("Injector has already been destroyed.");
        }
      }, {
        key: "processInjectorType",
        value: function processInjectorType(t, e, n) {
          var _this19 = this;

          if (!(t = tt(t))) return !1;
          var r = ct(t);
          var s = null == r && t.ngModule || void 0,
              o = void 0 === s ? t : s,
              i = -1 !== n.indexOf(o);
          if (void 0 !== s && (r = ct(s)), null == r) return !1;

          if (null != r.imports && !i) {
            var _t49;

            n.push(o);

            try {
              xn(r.imports, function (r) {
                _this19.processInjectorType(r, e, n) && (void 0 === _t49 && (_t49 = []), _t49.push(r));
              });
            } finally {}

            if (void 0 !== _t49) {
              var _loop = function _loop(_e30) {
                var _t49$_e = _t49[_e30],
                    n = _t49$_e.ngModule,
                    r = _t49$_e.providers;
                xn(r, function (t) {
                  return _this19.processProvider(t, n, r || Tt);
                });
              };

              for (var _e30 = 0; _e30 < _t49.length; _e30++) {
                _loop(_e30);
              }
            }
          }

          this.injectorDefTypes.add(o);

          var l = te(o) || function () {
            return new o();
          };

          this.records.set(o, Vs(l, ws));
          var u = r.providers;

          if (null != u && !i) {
            var _e31 = t;
            xn(u, function (t) {
              return _this19.processProvider(t, _e31, u);
            });
          }

          return void 0 !== s && void 0 !== t.providers;
        }
      }, {
        key: "processProvider",
        value: function processProvider(t, e, n) {
          var r = Os(t = tt(t)) ? t : tt(t && t.provide);

          var s = function (t, e, n) {
            return Is(t) ? Vs(void 0, t.useValue) : Vs(Ts(t), ws);
          }(t);

          if (Os(t) || !0 !== t.multi) this.records.get(r);else {
            var _e32 = this.records.get(r);

            _e32 || (_e32 = Vs(void 0, ws, !0), _e32.factory = function () {
              return Fn(_e32.multi);
            }, this.records.set(r, _e32)), r = t, _e32.multi.push(t);
          }
          this.records.set(r, s);
        }
      }, {
        key: "hydrate",
        value: function hydrate(t, e) {
          var n;
          return e.value === ws && (e.value = Cs, e.value = e.factory()), "object" == _typeof(e.value) && e.value && null !== (n = e.value) && "object" == _typeof(n) && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value;
        }
      }, {
        key: "injectableDefInScope",
        value: function injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          var e = tt(t.providedIn);
          return "string" == typeof e ? "any" === e || e === this.scope : this.injectorDefTypes.has(e);
        }
      }]);

      return xs;
    }();

    function Ss(t) {
      var e = ut(t),
          n = null !== e ? e.factory : te(t);
      if (null !== n) return n;
      if (t instanceof kn) throw new Error("Token ".concat(J(t), " is missing a \u0275prov definition."));
      if (t instanceof Function) return function (t) {
        var e = t.length;

        if (e > 0) {
          var _n44 = function (t, e) {
            var n = [];

            for (var _r34 = 0; _r34 < t; _r34++) {
              n.push("?");
            }

            return n;
          }(e);

          throw new Error("Can't resolve all parameters for ".concat(J(t), ": (").concat(_n44.join(", "), ")."));
        }

        var n = function (t) {
          var e = t && (t[ht] || t[ft]);

          if (e) {
            var _n45 = function (t) {
              if (t.hasOwnProperty("name")) return t.name;
              var e = ("" + t).match(/^function\s*([^\s(]+)/);
              return null === e ? "" : e[1];
            }(t);

            return console.warn("DEPRECATED: DI is instantiating a token \"".concat(_n45, "\" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the \"").concat(_n45, "\" class.")), e;
          }

          return null;
        }(t);

        return null !== n ? function () {
          return n.factory(t);
        } : function () {
          return new t();
        };
      }(t);
      throw new Error("unreachable");
    }

    function Ts(t, e, n) {
      var r;

      if (Os(t)) {
        var _e33 = tt(t);

        return te(_e33) || Ss(_e33);
      }

      if (Is(t)) r = function r() {
        return tt(t.useValue);
      };else if ((s = t) && s.useFactory) r = function r() {
        return t.useFactory.apply(t, _toConsumableArray(Fn(t.deps || [])));
      };else if (function (t) {
        return !(!t || !t.useExisting);
      }(t)) r = function r() {
        return Rn(tt(t.useExisting));
      };else {
        var _e34 = tt(t && (t.useClass || t.provide));

        if (!function (t) {
          return !!t.deps;
        }(t)) return te(_e34) || Ss(_e34);

        r = function r() {
          return _construct(_e34, _toConsumableArray(Fn(t.deps)));
        };
      }
      var s;
      return r;
    }

    function Vs(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return {
        factory: t,
        value: e,
        multi: n ? [] : void 0
      };
    }

    function Is(t) {
      return null !== t && "object" == _typeof(t) && jn in t;
    }

    function Os(t) {
      return "function" == typeof t;
    }

    var Ds = function Ds(t, e, n) {
      return function (t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var r = arguments.length > 3 ? arguments[3] : undefined;
        var s = ks(t, e, n, r);
        return s._resolveInjectorDefTypes(), s;
      }({
        name: n
      }, e, t, n);
    };

    var Ps = /*#__PURE__*/function () {
      function Ps() {
        _classCallCheck(this, Ps);
      }

      _createClass(Ps, null, [{
        key: "create",
        value: function create(t, e) {
          return Array.isArray(t) ? Ds(t, e, "") : Ds(t.providers, t.parent, t.name || "");
        }
      }]);

      return Ps;
    }();

    function js(t, e) {
      $e(zn(t)[1], Ee());
    }

    function Ms(t) {
      var e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
      var r = [t];

      for (; e;) {
        var _s23 = void 0;

        if (Xt(t)) _s23 = e.ɵcmp || e.ɵdir;else {
          if (e.ɵcmp) throw new Error("Directives cannot inherit Components");
          _s23 = e.ɵdir;
        }

        if (_s23) {
          if (n) {
            r.push(_s23);
            var _e36 = t;
            _e36.inputs = Hs(t.inputs), _e36.declaredInputs = Hs(t.declaredInputs), _e36.outputs = Hs(t.outputs);
            var _n46 = _s23.hostBindings;
            _n46 && Fs(t, _n46);
            var _o18 = _s23.viewQuery,
                _i16 = _s23.contentQueries;

            if (_o18 && Ns(t, _o18), _i16 && Rs(t, _i16), G(t.inputs, _s23.inputs), G(t.declaredInputs, _s23.declaredInputs), G(t.outputs, _s23.outputs), Xt(_s23) && _s23.data.animation) {
              var _e37 = t.data;
              _e37.animation = (_e37.animation || []).concat(_s23.data.animation);
            }
          }

          var _e35 = _s23.features;
          if (_e35) for (var _r35 = 0; _r35 < _e35.length; _r35++) {
            var _s24 = _e35[_r35];
            _s24 && _s24.ngInherit && _s24(t), _s24 === Ms && (n = !1);
          }
        }

        e = Object.getPrototypeOf(e);
      }

      !function (t) {
        var e = 0,
            n = null;

        for (var _r36 = t.length - 1; _r36 >= 0; _r36--) {
          var _s25 = t[_r36];
          _s25.hostVars = e += _s25.hostVars, _s25.hostAttrs = Xe(_s25.hostAttrs, n = Xe(n, _s25.hostAttrs));
        }
      }(r);
    }

    function Hs(t) {
      return t === St ? {} : t === Tt ? [] : t;
    }

    function Ns(t, e) {
      var n = t.viewQuery;
      t.viewQuery = n ? function (t, r) {
        e(t, r), n(t, r);
      } : e;
    }

    function Rs(t, e) {
      var n = t.contentQueries;
      t.contentQueries = n ? function (t, r, s) {
        e(t, r, s), n(t, r, s);
      } : e;
    }

    function Fs(t, e) {
      var n = t.hostBindings;
      t.hostBindings = n ? function (t, r) {
        e(t, r), n(t, r);
      } : e;
    }

    Ps.THROW_IF_NOT_FOUND = On, Ps.NULL = new vs(), Ps.ɵprov = it({
      token: Ps,
      providedIn: "any",
      factory: function factory() {
        return Rn(ms);
      }
    }), Ps.__NG_ELEMENT_ID__ = -1;
    var Ls = null;

    function Bs() {
      if (!Ls) {
        var _t50 = xt.Symbol;
        if (_t50 && _t50.iterator) Ls = _t50.iterator;else {
          var _t51 = Object.getOwnPropertyNames(Map.prototype);

          for (var _e38 = 0; _e38 < _t51.length; ++_e38) {
            var _n47 = _t51[_e38];
            "entries" !== _n47 && "size" !== _n47 && Map.prototype[_n47] === Map.prototype.entries && (Ls = _n47);
          }
        }
      }

      return Ls;
    }

    function Zs(t) {
      return !!$s(t) && (Array.isArray(t) || !(t instanceof Map) && Bs() in t);
    }

    function $s(t) {
      return null !== t && ("function" == typeof t || "object" == _typeof(t));
    }

    function Us(t, e, n) {
      return !Object.is(t[e], n) && (t[e] = n, !0);
    }

    function zs(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _t.Default;
      var n = we();
      return null === n ? Rn(t, e) : pn(Ee(), n, tt(t), e);
    }

    function Ws(t, e, n) {
      var r = we();
      return Us(r, Ve(), e) && function (t, e, n, r, s, o, i, l) {
        var u = de(e, n);
        var a,
            c = e.inputs;
        var h;
        null != c && (a = c[r]) ? (ys(t, n, a, r, s), Kt(e) && function (t, e) {
          var n = pe(e, t);
          16 & n[2] || (n[2] |= 64);
        }(n, e.index)) : 3 & e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != i ? i(s, e.value || "", r) : s, ue(o) ? o.setProperty(u, r, s) : Ye(r) || (u.setProperty ? u.setProperty(r, s) : u[r] = s));
      }(Ce(), function () {
        var t = ve.lFrame;
        return fe(t.tView, t.selectedIndex);
      }(), r, t, e, r[11], n), Ws;
    }

    function Qs(t, e, n, r, s) {
      var o = s ? "class" : "style";
      ys(t, n, e.inputs[o], o, r);
    }

    function qs(t, e, n, r) {
      var s = we(),
          o = Ce(),
          i = Wt + t,
          l = s[11],
          u = s[i] = or(l, e, ve.lFrame.currentNamespace),
          a = o.firstCreatePass ? function (t, e, n, r, s, o, i) {
        var l = e.consts,
            u = Lr(e, t, 2, s, ye(l, o));
        return function (t, e, n, r) {
          var s = !1;

          if (be()) {
            var _o19 = function (t, e, n) {
              var r = t.directiveRegistry;
              var s = null;
              if (r) for (var _o20 = 0; _o20 < r.length; _o20++) {
                var _i18 = r[_o20];
                xr(n, _i18.selectors, !1) && (s || (s = []), hn(ln(n, e), t, _i18.type), Xt(_i18) ? (Kr(t, n), s.unshift(_i18)) : s.push(_i18));
              }
              return s;
            }(t, e, n),
                _i17 = null === r ? null : {
              "": -1
            };

            if (null !== _o19) {
              s = !0, Xr(n, t.data.length, _o19.length);

              for (var _t52 = 0; _t52 < _o19.length; _t52++) {
                var _e39 = _o19[_t52];
                _e39.providersResolver && _e39.providersResolver(_e39);
              }

              var _r37 = !1,
                  _l16 = !1,
                  _u12 = Br(t, e, _o19.length, null);

              for (var _s26 = 0; _s26 < _o19.length; _s26++) {
                var _a3 = _o19[_s26];
                n.mergedAttrs = Xe(n.mergedAttrs, _a3.hostAttrs), ts(t, n, e, _u12, _a3), Yr(_u12, _a3, _i17), null !== _a3.contentQueries && (n.flags |= 8), null === _a3.hostBindings && null === _a3.hostAttrs && 0 === _a3.hostVars || (n.flags |= 128);
                var _c2 = _a3.type.prototype;
                !_r37 && (_c2.ngOnChanges || _c2.ngOnInit || _c2.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index), _r37 = !0), _l16 || !_c2.ngOnChanges && !_c2.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index), _l16 = !0), _u12++;
              }

              !function (t, e) {
                var n = e.directiveEnd,
                    r = t.data,
                    s = e.attrs,
                    o = [];
                var i = null,
                    l = null;

                for (var _u13 = e.directiveStart; _u13 < n; _u13++) {
                  var _t53 = r[_u13],
                      _n48 = _t53.inputs,
                      _a4 = null === s || wr(e) ? null : rs(_n48, s);

                  o.push(_a4), i = qr(_n48, _u13, i), l = qr(_t53.outputs, _u13, l);
                }

                null !== i && (i.hasOwnProperty("class") && (e.flags |= 16), i.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = o, e.inputs = i, e.outputs = l;
              }(t, n);
            }

            _i17 && function (t, e, n) {
              if (e) {
                var _r38 = t.localNames = [];

                for (var _t54 = 0; _t54 < e.length; _t54 += 2) {
                  var _s27 = n[e[_t54 + 1]];
                  if (null == _s27) throw new nt("301", "Export of name '".concat(e[_t54 + 1], "' not found!"));

                  _r38.push(e[_t54], _s27);
                }
              }
            }(n, r, _i17);
          }

          n.mergedAttrs = Xe(n.mergedAttrs, n.attrs);
        }(e, n, u, ye(l, i)), null !== u.attrs && gs(u, u.attrs, !1), null !== u.mergedAttrs && gs(u, u.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, u), u;
      }(i, o, s, 0, e, n, r) : o.data[i];
      ke(a, !0);
      var c = a.mergedAttrs;
      null !== c && Ke(l, u, c);
      var h = a.classes;
      null !== h && gr(l, u, h);
      var d = a.styles;
      null !== d && yr(l, u, d), 64 != (64 & a.flags) && hr(o, s, u, a), 0 === ve.lFrame.elementDepthCount && Un(u, s), ve.lFrame.elementDepthCount++, Yt(a) && (function (t, e, n) {
        be() && (function (t, e, n, r) {
          var s = n.directiveStart,
              o = n.directiveEnd;
          t.firstCreatePass || ln(n, e), Un(r, e);
          var i = n.initialInputs;

          for (var _l17 = s; _l17 < o; _l17++) {
            var _r39 = t.data[_l17],
                _o21 = Xt(_r39);

            _o21 && es(e, n, _r39);

            var _u14 = mn(e, t, _l17, n);

            Un(_u14, e), null !== i && ns(0, _l17 - s, _u14, _r39, 0, i), _o21 && (pe(n.index, e)[8] = _u14);
          }
        }(t, e, n, de(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
          var r = n.directiveStart,
              s = n.directiveEnd,
              o = n.index,
              i = ve.lFrame.currentDirectiveIndex;

          try {
            Ze(o);

            for (var _n49 = r; _n49 < s; _n49++) {
              var _r40 = t.data[_n49],
                  _s28 = e[_n49];
              Oe(_n49), null === _r40.hostBindings && 0 === _r40.hostVars && null === _r40.hostAttrs || Jr(_r40, _s28);
            }
          } finally {
            Ze(-1), Oe(i);
          }
        }(t, e, n));
      }(o, s, a), function (t, e, n) {
        if (Jt(e)) {
          var _r41 = e.directiveEnd;

          for (var _s29 = e.directiveStart; _s29 < _r41; _s29++) {
            var _e40 = t.data[_s29];
            _e40.contentQueries && _e40.contentQueries(1, n[_s29], _s29);
          }
        }
      }(o, a, s)), null !== r && function (t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : de;
        var r = e.localNames;

        if (null !== r) {
          var _s30 = e.index + 1;

          for (var _o22 = 0; _o22 < r.length; _o22 += 2) {
            var _i19 = r[_o22 + 1],
                _l18 = -1 === _i19 ? n(e, t) : t[_i19];

            t[_s30++] = _l18;
          }
        }
      }(s, a);
    }

    function Gs() {
      var t = Ee();
      xe() ? ve.lFrame.isParent = !1 : (t = t.parent, ke(t, !1));
      var e = t;
      ve.lFrame.elementDepthCount--;
      var n = Ce();
      n.firstCreatePass && ($e(n, t), Jt(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
        return 0 != (16 & t.flags);
      }(e) && Qs(n, e, we(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
        return 0 != (32 & t.flags);
      }(e) && Qs(n, e, we(), e.stylesWithoutHost, !1);
    }

    function Js(t) {
      return !!t && "function" == typeof t.then;
    }

    var Ks = function Ks(t) {
      return !!t && "function" == typeof t.subscribe;
    };

    function Ys(t, e, n, r) {
      var s = we(),
          o = Ce(),
          i = Ee();
      return function (t, e, n, r, s, o, i, l) {
        var u = Yt(r),
            a = t.firstCreatePass && ps(t),
            c = fs(e);
        var h = !0;

        if (3 & r.type || l) {
          var _d = de(r, e),
              _f = l ? l(_d) : _d,
              _p7 = c.length,
              _2 = l ? function (t) {
            return l(ce(t[r.index]));
          } : r.index;

          if (ue(n)) {
            var _i20 = null;
            if (!l && u && (_i20 = function (t, e, n, r) {
              var s = t.cleanup;
              if (null != s) for (var _o23 = 0; _o23 < s.length - 1; _o23 += 2) {
                var _t55 = s[_o23];

                if (_t55 === n && s[_o23 + 1] === r) {
                  var _t56 = e[7],
                      _n50 = s[_o23 + 2];
                  return _t56.length > _n50 ? _t56[_n50] : null;
                }

                "string" == typeof _t55 && (_o23 += 2);
              }
              return null;
            }(t, e, s, r.index)), null !== _i20) (_i20.__ngLastListenerFn__ || _i20).__ngNextListenerFn__ = o, _i20.__ngLastListenerFn__ = o, h = !1;else {
              o = to(r, e, 0, o, !1);

              var _t57 = n.listen(_f, s, o);

              c.push(o, _t57), a && a.push(s, _2, _p7, _p7 + 1);
            }
          } else o = to(r, e, 0, o, !0), _f.addEventListener(s, o, i), c.push(o), a && a.push(s, _2, _p7, i);
        } else o = to(r, e, 0, o, !1);

        var d = r.outputs;
        var f;

        if (h && null !== d && (f = d[s])) {
          var _t58 = f.length;
          if (_t58) for (var _n51 = 0; _n51 < _t58; _n51 += 2) {
            var _t59 = e[f[_n51]][f[_n51 + 1]].subscribe(o),
                _i21 = c.length;

            c.push(o, _t59), a && a.push(s, r.index, _i21, -(_i21 + 1));
          }
        }
      }(o, s, s[11], i, t, e, !!n, r), Ys;
    }

    function Xs(t, e, n, r) {
      try {
        return !1 !== n(r);
      } catch (s) {
        return _s(t, s), !1;
      }
    }

    function to(t, e, n, r, s) {
      return function n(o) {
        if (o === Function) return r;
        var i = 2 & t.flags ? pe(t.index, e) : e;
        0 == (32 & e[2]) && us(i);
        var l = Xs(e, 0, r, o),
            u = n.__ngNextListenerFn__;

        for (; u;) {
          l = Xs(e, 0, u, o) && l, u = u.__ngNextListenerFn__;
        }

        return s && !1 === l && (o.preventDefault(), o.returnValue = !1), l;
      };
    }

    function eo(t, e, n, r, s) {
      var o = t[n + 1],
          i = null === e;
      var l = r ? Pr(o) : Mr(o),
          u = !1;

      for (; 0 !== l && (!1 === u || i);) {
        var _n52 = t[l + 1];
        no(t[l], e) && (u = !0, t[l + 1] = r ? Nr(_n52) : jr(_n52)), l = r ? Pr(_n52) : Mr(_n52);
      }

      u && (t[n + 1] = r ? jr(o) : Nr(o));
    }

    function no(t, e) {
      return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && In(t, e) >= 0;
    }

    function ro(t, e) {
      return function (t, e, n, r) {
        var s = we(),
            o = Ce(),
            i = function (t) {
          var e = ve.lFrame,
              n = e.bindingIndex;
          return e.bindingIndex = e.bindingIndex + 2, n;
        }();

        o.firstUpdatePass && function (t, e, n, r) {
          var s = t.data;

          if (null === s[n + 1]) {
            var _o24 = s[Be()],
                _i22 = function (t, e) {
              return e >= t.expandoStartIndex;
            }(t, n);

            (function (t, e) {
              return 0 != (16 & t.flags);
            })(_o24) && null === e && !_i22 && (e = !1), e = function (t, e, n, r) {
              var s = function (t) {
                var e = ve.lFrame.currentDirectiveIndex;
                return -1 === e ? null : t[e];
              }(t);

              var o = e.residualClasses;
              if (null === s) 0 === e.classBindings && (n = oo(n = so(null, t, e, n, r), e.attrs, r), o = null);else {
                var _i23 = e.directiveStylingLast;
                if (-1 === _i23 || t[_i23] !== s) if (n = so(s, t, e, n, r), null === o) {
                  var _n53 = function (t, e, n) {
                    var r = e.classBindings;
                    if (0 !== Mr(r)) return t[Pr(r)];
                  }(t, e);

                  void 0 !== _n53 && Array.isArray(_n53) && (_n53 = so(null, t, e, _n53[1], r), _n53 = oo(_n53, e.attrs, r), function (t, e, n, r) {
                    t[Pr(e.classBindings)] = r;
                  }(t, e, 0, _n53));
                } else o = function (t, e, n) {
                  var r;
                  var s = e.directiveEnd;

                  for (var _o25 = 1 + e.directiveStylingLast; _o25 < s; _o25++) {
                    r = oo(r, t[_o25].hostAttrs, true);
                  }

                  return oo(r, e.attrs, true);
                }(t, e);
              }
              return void 0 !== o && (e.residualClasses = o), n;
            }(s, _o24, e, r), function (t, e, n, r, s, o) {
              var i = e.classBindings,
                  l = Pr(i),
                  u = Mr(i);
              t[r] = n;
              var a,
                  c = !1;

              if (Array.isArray(n)) {
                var _t60 = n;
                a = _t60[1], (null === a || In(_t60, a) > 0) && (c = !0);
              } else a = n;

              if (s) {
                if (0 !== u) {
                  var _e41 = Pr(t[l + 1]);

                  t[r + 1] = Dr(_e41, l), 0 !== _e41 && (t[_e41 + 1] = Hr(t[_e41 + 1], r)), t[l + 1] = 131071 & t[l + 1] | r << 17;
                } else t[r + 1] = Dr(l, 0), 0 !== l && (t[l + 1] = Hr(t[l + 1], r)), l = r;
              } else t[r + 1] = Dr(u, 0), 0 === l ? l = r : t[u + 1] = Hr(t[u + 1], r), u = r;
              c && (t[r + 1] = jr(t[r + 1])), eo(t, a, r, !0), eo(t, a, r, !1), function (t, e, n, r, s) {
                var o = t.residualClasses;
                null != o && "string" == typeof e && In(o, e) >= 0 && (n[r + 1] = Nr(n[r + 1]));
              }(e, a, t, r), i = Dr(l, u), e.classBindings = i;
            }(s, _o24, e, n, _i22);
          }
        }(o, t, i, true), e !== Vr && Us(s, i, e) && function (t, e, n, r, s, o, i, l) {
          if (!(3 & e.type)) return;
          var u = t.data,
              a = u[l + 1];
          lo(1 == (1 & a) ? io(u, e, n, s, Mr(a), i) : void 0) || (lo(o) || function (t) {
            return 2 == (2 & t);
          }(a) && (o = io(u, null, n, s, l, i)), function (t, e, n, r, s) {
            var o = ue(t);
            s ? o ? t.addClass(n, r) : n.classList.add(r) : o ? t.removeClass(n, r) : n.classList.remove(r);
          }(r, 0, he(Be(), n), s, o));
        }(o, o.data[Be()], s, s[11], t, s[i + 1] = function (t, e) {
          return null == t || "object" == _typeof(t) && (t = J(function (t) {
            return t instanceof /*#__PURE__*/function () {
              function _class(t) {
                _classCallCheck(this, _class);

                this.changingThisBreaksApplicationSecurity = t;
              }

              _createClass(_class, [{
                key: "toString",
                value: function toString() {
                  return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity, " (see https://g.co/ng/security#xss)");
                }
              }]);

              return _class;
            }() ? t.changingThisBreaksApplicationSecurity : t;
          }(t))), t;
        }(e), true, i);
      }(t, e), ro;
    }

    function so(t, e, n, r, s) {
      var o = null;
      var i = n.directiveEnd;
      var l = n.directiveStylingLast;

      for (-1 === l ? l = n.directiveStart : l++; l < i && (o = e[l], r = oo(r, o.hostAttrs, s), o !== t);) {
        l++;
      }

      return null !== t && (n.directiveStylingLast = l), r;
    }

    function oo(t, e, n) {
      var r = n ? 1 : 2;
      var s = -1;
      if (null !== e) for (var _o26 = 0; _o26 < e.length; _o26++) {
        var _i24 = e[_o26];
        "number" == typeof _i24 ? s = _i24 : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), Tn(t, _i24, !!n || e[++_o26]));
      }
      return void 0 === t ? null : t;
    }

    function io(t, e, n, r, s, o) {
      var i = null === e;
      var l;

      for (; s > 0;) {
        var _e42 = t[s],
            _o27 = Array.isArray(_e42),
            _u15 = _o27 ? _e42[1] : _e42,
            _a5 = null === _u15;

        var _c3 = n[s + 1];
        _c3 === Vr && (_c3 = _a5 ? Tt : void 0);

        var _h4 = _a5 ? Vn(_c3, r) : _u15 === r ? _c3 : void 0;

        if (_o27 && !lo(_h4) && (_h4 = Vn(_e42, r)), lo(_h4) && (l = _h4, i)) return l;
        var _d2 = t[s + 1];
        s = i ? Pr(_d2) : Mr(_d2);
      }

      if (null !== e) {
        var _t61 = o ? e.residualClasses : e.residualStyles;

        null != _t61 && (l = Vn(_t61, r));
      }

      return l;
    }

    function lo(t) {
      return void 0 !== t;
    }

    function uo(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      var n = we(),
          r = Ce(),
          s = t + Wt,
          o = r.firstCreatePass ? Lr(r, s, 1, e, null) : r.data[s],
          i = n[s] = function (t, e) {
        return ue(t) ? t.createText(e) : t.createTextNode(e);
      }(n[11], e);

      hr(r, n, i, o), ke(o, !1);
    }

    function ao(t) {
      return co("", t, ""), ao;
    }

    function co(t, e, n) {
      var r = we(),
          s = function (t, e, n, r) {
        return Us(t, Ve(), n) ? e + rt(n) + r : Vr;
      }(r, t, e, n);

      return s !== Vr && function (t, e, n) {
        var r = he(e, t);
        !function (t, e, n) {
          ue(t) ? t.setValue(e, n) : e.textContent = n;
        }(t[11], r, n);
      }(r, Be(), s), co;
    }

    var ho = void 0;
    var fo = ["en", [["a", "p"], ["AM", "PM"], ho], [["AM", "PM"], ho, ho], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], ho, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], ho, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", ho, "{1} 'at' {0}", ho], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
      var e = Math.floor(Math.abs(t)),
          n = t.toString().replace(/^[^.]*\.?/, "").length;
      return 1 === e && 0 === n ? 1 : 5;
    }];
    var po = {};

    function _o(t) {
      return t in po || (po[t] = xt.ng && xt.ng.common && xt.ng.common.locales && xt.ng.common.locales[t]), po[t];
    }

    var yo = function () {
      return (yo = yo || {})[yo.LocaleId = 0] = "LocaleId", yo[yo.DayPeriodsFormat = 1] = "DayPeriodsFormat", yo[yo.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", yo[yo.DaysFormat = 3] = "DaysFormat", yo[yo.DaysStandalone = 4] = "DaysStandalone", yo[yo.MonthsFormat = 5] = "MonthsFormat", yo[yo.MonthsStandalone = 6] = "MonthsStandalone", yo[yo.Eras = 7] = "Eras", yo[yo.FirstDayOfWeek = 8] = "FirstDayOfWeek", yo[yo.WeekendRange = 9] = "WeekendRange", yo[yo.DateFormat = 10] = "DateFormat", yo[yo.TimeFormat = 11] = "TimeFormat", yo[yo.DateTimeFormat = 12] = "DateTimeFormat", yo[yo.NumberSymbols = 13] = "NumberSymbols", yo[yo.NumberFormats = 14] = "NumberFormats", yo[yo.CurrencyCode = 15] = "CurrencyCode", yo[yo.CurrencySymbol = 16] = "CurrencySymbol", yo[yo.CurrencyName = 17] = "CurrencyName", yo[yo.Currencies = 18] = "Currencies", yo[yo.Directionality = 19] = "Directionality", yo[yo.PluralCase = 20] = "PluralCase", yo[yo.ExtraData = 21] = "ExtraData", yo;
    }();

    var go = "en-US";
    var mo = go;

    function vo(t) {
      var e, n;
      n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
        throw new Error("ASSERTION ERROR: ".concat(t, " [Expected=> null != ").concat(e, " <=Actual]"));
      }(n, e), "string" == typeof t && (mo = t.toLowerCase().replace(/_/g, "-"));
    }

    function bo(t, e, n, r, s) {
      if (t = tt(t), Array.isArray(t)) for (var _o28 = 0; _o28 < t.length; _o28++) {
        bo(t[_o28], e, n, r, s);
      } else {
        var _o29 = Ce(),
            _i25 = we();

        var _l19 = Os(t) ? t : tt(t.provide),
            _u16 = Ts(t);

        var _a6 = Ee(),
            _c4 = 1048575 & _a6.providerIndexes,
            _h5 = _a6.directiveStart,
            _d3 = _a6.providerIndexes >> 20;

        if (Os(t) || !t.multi) {
          var _r42 = new Je(_u16, s, zs),
              _f2 = Eo(_l19, e, s ? _c4 : _c4 + _d3, _h5);

          -1 === _f2 ? (hn(ln(_a6, _i25), _o29, _l19), wo(_o29, t, e.length), e.push(_l19), _a6.directiveStart++, _a6.directiveEnd++, s && (_a6.providerIndexes += 1048576), n.push(_r42), _i25.push(_r42)) : (n[_f2] = _r42, _i25[_f2] = _r42);
        } else {
          var _f3 = Eo(_l19, e, _c4 + _d3, _h5),
              _p8 = Eo(_l19, e, _c4, _c4 + _d3),
              _3 = _f3 >= 0 && n[_f3],
              _y = _p8 >= 0 && n[_p8];

          if (s && !_y || !s && !_3) {
            hn(ln(_a6, _i25), _o29, _l19);

            var _c5 = function (t, e, n, r, s) {
              var o = new Je(t, n, zs);
              return o.multi = [], o.index = e, o.componentProviders = 0, Co(o, s, r && !n), o;
            }(s ? ko : Ao, n.length, s, r, _u16);

            !s && _y && (n[_p8].providerFactory = _c5), wo(_o29, t, e.length, 0), e.push(_l19), _a6.directiveStart++, _a6.directiveEnd++, s && (_a6.providerIndexes += 1048576), n.push(_c5), _i25.push(_c5);
          } else wo(_o29, t, _f3 > -1 ? _f3 : _p8, Co(n[s ? _p8 : _f3], _u16, !s && r));

          !s && r && _y && n[_p8].componentProviders++;
        }
      }
    }

    function wo(t, e, n, r) {
      var s = Os(e);

      if (s || e.useClass) {
        var _o30 = (e.useClass || e).prototype.ngOnDestroy;

        if (_o30) {
          var _i26 = t.destroyHooks || (t.destroyHooks = []);

          if (!s && e.multi) {
            var _t62 = _i26.indexOf(n);

            -1 === _t62 ? _i26.push(n, [r, _o30]) : _i26[_t62 + 1].push(r, _o30);
          } else _i26.push(n, _o30);
        }
      }
    }

    function Co(t, e, n) {
      return n && t.componentProviders++, t.multi.push(e) - 1;
    }

    function Eo(t, e, n, r) {
      for (var _s31 = n; _s31 < r; _s31++) {
        if (e[_s31] === t) return _s31;
      }

      return -1;
    }

    function Ao(t, e, n, r) {
      return xo(this.multi, []);
    }

    function ko(t, e, n, r) {
      var s = this.multi;
      var o;

      if (this.providerFactory) {
        var _t63 = this.providerFactory.componentProviders,
            _e43 = mn(n, n[1], this.providerFactory.index, r);

        o = _e43.slice(0, _t63), xo(s, o);

        for (var _n54 = _t63; _n54 < _e43.length; _n54++) {
          o.push(_e43[_n54]);
        }
      } else o = [], xo(s, o);

      return o;
    }

    function xo(t, e) {
      for (var _n55 = 0; _n55 < t.length; _n55++) {
        e.push((0, t[_n55])());
      }

      return e;
    }

    function So(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return function (n) {
        n.providersResolver = function (n, r) {
          return function (t, e, n) {
            var r = Ce();

            if (r.firstCreatePass) {
              var _s32 = Xt(t);

              bo(n, r.data, r.blueprint, _s32, !0), bo(e, r.data, r.blueprint, _s32, !1);
            }
          }(n, r ? r(t) : t, e);
        };
      };
    }

    var To = function To() {
      _classCallCheck(this, To);
    };

    var Vo = /*#__PURE__*/function () {
      function Vo() {
        _classCallCheck(this, Vo);
      }

      _createClass(Vo, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          throw function (t) {
            var e = Error("No component factory found for ".concat(J(t), ". Did you add it to @NgModule.entryComponents?"));
            return e.ngComponent = t, e;
          }(t);
        }
      }]);

      return Vo;
    }();

    var Io = function Io() {
      _classCallCheck(this, Io);
    };

    function Oo() {}

    function Do(t, e) {
      return new jo(de(t, e));
    }

    Io.NULL = new Vo();

    var Po = function Po() {
      return Do(Ee(), we());
    };

    var jo = function () {
      var t = function t(_t64) {
        _classCallCheck(this, t);

        this.nativeElement = _t64;
      };

      return t.__NG_ELEMENT_ID__ = Po, t;
    }();

    var Mo = function Mo() {
      _classCallCheck(this, Mo);
    };

    var Ho = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.__NG_ELEMENT_ID__ = function () {
        return No();
      }, t;
    }();

    var No = function No() {
      var t = we(),
          e = pe(Ee().index, t);
      return function (t) {
        return t[11];
      }(qt(e) ? e : t);
    };

    var Ro = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵprov = it({
        token: t,
        providedIn: "root",
        factory: function factory() {
          return null;
        }
      }), t;
    }();

    var Fo = function Fo(t) {
      _classCallCheck(this, Fo);

      this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".");
    };

    var Lo = new Fo("12.1.1");

    var Bo = /*#__PURE__*/function () {
      function Bo() {
        _classCallCheck(this, Bo);
      }

      _createClass(Bo, [{
        key: "supports",
        value: function supports(t) {
          return Zs(t);
        }
      }, {
        key: "create",
        value: function create(t) {
          return new $o(t);
        }
      }]);

      return Bo;
    }();

    var Zo = function Zo(t, e) {
      return e;
    };

    var $o = /*#__PURE__*/function () {
      function $o(t) {
        _classCallCheck(this, $o);

        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Zo;
      }

      _createClass($o, [{
        key: "forEachItem",
        value: function forEachItem(t) {
          var e;

          for (e = this._itHead; null !== e; e = e._next) {
            t(e);
          }
        }
      }, {
        key: "forEachOperation",
        value: function forEachOperation(t) {
          var e = this._itHead,
              n = this._removalsHead,
              r = 0,
              s = null;

          for (; e || n;) {
            var _o31 = !n || e && e.currentIndex < Qo(n, r, s) ? e : n,
                _i27 = Qo(_o31, r, s),
                _l20 = _o31.currentIndex;

            if (_o31 === n) r--, n = n._nextRemoved;else if (e = e._next, null == _o31.previousIndex) r++;else {
              s || (s = []);

              var _t65 = _i27 - r,
                  _e44 = _l20 - r;

              if (_t65 != _e44) {
                for (var _n56 = 0; _n56 < _t65; _n56++) {
                  var _r43 = _n56 < s.length ? s[_n56] : s[_n56] = 0,
                      _o32 = _r43 + _n56;

                  _e44 <= _o32 && _o32 < _t65 && (s[_n56] = _r43 + 1);
                }

                s[_o31.previousIndex] = _e44 - _t65;
              }
            }
            _i27 !== _l20 && t(_o31, _i27, _l20);
          }
        }
      }, {
        key: "forEachPreviousItem",
        value: function forEachPreviousItem(t) {
          var e;

          for (e = this._previousItHead; null !== e; e = e._nextPrevious) {
            t(e);
          }
        }
      }, {
        key: "forEachAddedItem",
        value: function forEachAddedItem(t) {
          var e;

          for (e = this._additionsHead; null !== e; e = e._nextAdded) {
            t(e);
          }
        }
      }, {
        key: "forEachMovedItem",
        value: function forEachMovedItem(t) {
          var e;

          for (e = this._movesHead; null !== e; e = e._nextMoved) {
            t(e);
          }
        }
      }, {
        key: "forEachRemovedItem",
        value: function forEachRemovedItem(t) {
          var e;

          for (e = this._removalsHead; null !== e; e = e._nextRemoved) {
            t(e);
          }
        }
      }, {
        key: "forEachIdentityChange",
        value: function forEachIdentityChange(t) {
          var e;

          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) {
            t(e);
          }
        }
      }, {
        key: "diff",
        value: function diff(t) {
          if (null == t && (t = []), !Zs(t)) throw new Error("Error trying to diff '".concat(J(t), "'. Only arrays and iterables are allowed"));
          return this.check(t) ? this : null;
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {}
      }, {
        key: "check",
        value: function check(t) {
          var _this20 = this;

          this._reset();

          var e,
              n,
              r,
              s = this._itHead,
              o = !1;

          if (Array.isArray(t)) {
            this.length = t.length;

            for (var _e45 = 0; _e45 < this.length; _e45++) {
              n = t[_e45], r = this._trackByFn(_e45, n), null !== s && Object.is(s.trackById, r) ? (o && (s = this._verifyReinsertion(s, n, r, _e45)), Object.is(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, _e45), o = !0), s = s._next;
            }
          } else e = 0, function (t, e) {
            if (Array.isArray(t)) for (var _n57 = 0; _n57 < t.length; _n57++) {
              e(t[_n57]);
            } else {
              var _n58 = t[Bs()]();

              var _r44;

              for (; !(_r44 = _n58.next()).done;) {
                e(_r44.value);
              }
            }
          }(t, function (t) {
            r = _this20._trackByFn(e, t), null !== s && Object.is(s.trackById, r) ? (o && (s = _this20._verifyReinsertion(s, t, r, e)), Object.is(s.item, t) || _this20._addIdentityChange(s, t)) : (s = _this20._mismatch(s, t, r, e), o = !0), s = s._next, e++;
          }), this.length = e;

          return this._truncate(s), this.collection = t, this.isDirty;
        }
      }, {
        key: "isDirty",
        get: function get() {
          return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
        }
      }, {
        key: "_reset",
        value: function _reset() {
          if (this.isDirty) {
            var _t66;

            for (_t66 = this._previousItHead = this._itHead; null !== _t66; _t66 = _t66._next) {
              _t66._nextPrevious = _t66._next;
            }

            for (_t66 = this._additionsHead; null !== _t66; _t66 = _t66._nextAdded) {
              _t66.previousIndex = _t66.currentIndex;
            }

            for (this._additionsHead = this._additionsTail = null, _t66 = this._movesHead; null !== _t66; _t66 = _t66._nextMoved) {
              _t66.previousIndex = _t66.currentIndex;
            }

            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
          }
        }
      }, {
        key: "_mismatch",
        value: function _mismatch(t, e, n, r) {
          var s;
          return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : t = this._addAfter(new Uo(e, n), s, r), t;
        }
      }, {
        key: "_verifyReinsertion",
        value: function _verifyReinsertion(t, e, n, r) {
          var s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t;
        }
      }, {
        key: "_truncate",
        value: function _truncate(t) {
          for (; null !== t;) {
            var _e46 = t._next;
            this._addToRemovals(this._unlink(t)), t = _e46;
          }

          null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
      }, {
        key: "_reinsertAfter",
        value: function _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          var r = t._prevRemoved,
              s = t._nextRemoved;
          return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
      }, {
        key: "_moveAfter",
        value: function _moveAfter(t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
      }, {
        key: "_addAfter",
        value: function _addAfter(t, e, n) {
          return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t;
        }
      }, {
        key: "_insertAfter",
        value: function _insertAfter(t, e, n) {
          var r = null === e ? this._itHead : e._next;
          return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Wo()), this._linkedRecords.put(t), t.currentIndex = n, t;
        }
      }, {
        key: "_remove",
        value: function _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
      }, {
        key: "_unlink",
        value: function _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          var e = t._prev,
              n = t._next;
          return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t;
        }
      }, {
        key: "_addToMoves",
        value: function _addToMoves(t, e) {
          return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t;
        }
      }, {
        key: "_addToRemovals",
        value: function _addToRemovals(t) {
          return null === this._unlinkedRecords && (this._unlinkedRecords = new Wo()), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t;
        }
      }, {
        key: "_addIdentityChange",
        value: function _addIdentityChange(t, e) {
          return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t;
        }
      }]);

      return $o;
    }();

    var Uo = function Uo(t, e) {
      _classCallCheck(this, Uo);

      this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
    };

    var zo = /*#__PURE__*/function () {
      function zo() {
        _classCallCheck(this, zo);

        this._head = null, this._tail = null;
      }

      _createClass(zo, [{
        key: "add",
        value: function add(t) {
          null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t);
        }
      }, {
        key: "get",
        value: function get(t, e) {
          var n;

          for (n = this._head; null !== n; n = n._nextDup) {
            if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t)) return n;
          }

          return null;
        }
      }, {
        key: "remove",
        value: function remove(t) {
          var e = t._prevDup,
              n = t._nextDup;
          return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head;
        }
      }]);

      return zo;
    }();

    var Wo = /*#__PURE__*/function () {
      function Wo() {
        _classCallCheck(this, Wo);

        this.map = new Map();
      }

      _createClass(Wo, [{
        key: "put",
        value: function put(t) {
          var e = t.trackById;
          var n = this.map.get(e);
          n || (n = new zo(), this.map.set(e, n)), n.add(t);
        }
      }, {
        key: "get",
        value: function get(t, e) {
          var n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
      }, {
        key: "remove",
        value: function remove(t) {
          var e = t.trackById;
          return this.map.get(e).remove(t) && this.map["delete"](e), t;
        }
      }, {
        key: "isEmpty",
        get: function get() {
          return 0 === this.map.size;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.map.clear();
        }
      }]);

      return Wo;
    }();

    function Qo(t, e, n) {
      var r = t.previousIndex;
      if (null === r) return r;
      var s = 0;
      return n && r < n.length && (s = n[r]), r + e + s;
    }

    var qo = /*#__PURE__*/function () {
      function qo() {
        _classCallCheck(this, qo);
      }

      _createClass(qo, [{
        key: "supports",
        value: function supports(t) {
          return t instanceof Map || $s(t);
        }
      }, {
        key: "create",
        value: function create() {
          return new Go();
        }
      }]);

      return qo;
    }();

    var Go = /*#__PURE__*/function () {
      function Go() {
        _classCallCheck(this, Go);

        this._records = new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
      }

      _createClass(Go, [{
        key: "isDirty",
        get: function get() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
      }, {
        key: "forEachItem",
        value: function forEachItem(t) {
          var e;

          for (e = this._mapHead; null !== e; e = e._next) {
            t(e);
          }
        }
      }, {
        key: "forEachPreviousItem",
        value: function forEachPreviousItem(t) {
          var e;

          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) {
            t(e);
          }
        }
      }, {
        key: "forEachChangedItem",
        value: function forEachChangedItem(t) {
          var e;

          for (e = this._changesHead; null !== e; e = e._nextChanged) {
            t(e);
          }
        }
      }, {
        key: "forEachAddedItem",
        value: function forEachAddedItem(t) {
          var e;

          for (e = this._additionsHead; null !== e; e = e._nextAdded) {
            t(e);
          }
        }
      }, {
        key: "forEachRemovedItem",
        value: function forEachRemovedItem(t) {
          var e;

          for (e = this._removalsHead; null !== e; e = e._nextRemoved) {
            t(e);
          }
        }
      }, {
        key: "diff",
        value: function diff(t) {
          if (t) {
            if (!(t instanceof Map || $s(t))) throw new Error("Error trying to diff '".concat(J(t), "'. Only maps and objects are allowed"));
          } else t = new Map();

          return this.check(t) ? this : null;
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {}
      }, {
        key: "check",
        value: function check(t) {
          var _this21 = this;

          this._reset();

          var e = this._mapHead;

          if (this._appendAfter = null, this._forEach(t, function (t, n) {
            if (e && e.key === n) _this21._maybeAddToChanges(e, t), _this21._appendAfter = e, e = e._next;else {
              var _r45 = _this21._getOrCreateRecordForKey(n, t);

              e = _this21._insertBeforeOrAppend(e, _r45);
            }
          }), e) {
            e._prev && (e._prev._next = null), this._removalsHead = e;

            for (var _t67 = e; null !== _t67; _t67 = _t67._nextRemoved) {
              _t67 === this._mapHead && (this._mapHead = null), this._records["delete"](_t67.key), _t67._nextRemoved = _t67._next, _t67.previousValue = _t67.currentValue, _t67.currentValue = null, _t67._prev = null, _t67._next = null;
            }
          }

          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
        }
      }, {
        key: "_insertBeforeOrAppend",
        value: function _insertBeforeOrAppend(t, e) {
          if (t) {
            var _n59 = t._prev;
            return e._next = t, e._prev = _n59, t._prev = e, _n59 && (_n59._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t;
          }

          return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null;
        }
      }, {
        key: "_getOrCreateRecordForKey",
        value: function _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            var _n60 = this._records.get(t);

            this._maybeAddToChanges(_n60, e);

            var _r46 = _n60._prev,
                _s33 = _n60._next;
            return _r46 && (_r46._next = _s33), _s33 && (_s33._prev = _r46), _n60._next = null, _n60._prev = null, _n60;
          }

          var n = new Jo(t);
          return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n;
        }
      }, {
        key: "_reset",
        value: function _reset() {
          if (this.isDirty) {
            var _t68;

            for (this._previousMapHead = this._mapHead, _t68 = this._previousMapHead; null !== _t68; _t68 = _t68._next) {
              _t68._nextPrevious = _t68._next;
            }

            for (_t68 = this._changesHead; null !== _t68; _t68 = _t68._nextChanged) {
              _t68.previousValue = _t68.currentValue;
            }

            for (_t68 = this._additionsHead; null != _t68; _t68 = _t68._nextAdded) {
              _t68.previousValue = _t68.currentValue;
            }

            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
          }
        }
      }, {
        key: "_maybeAddToChanges",
        value: function _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t));
        }
      }, {
        key: "_addToAdditions",
        value: function _addToAdditions(t) {
          null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t);
        }
      }, {
        key: "_addToChanges",
        value: function _addToChanges(t) {
          null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t);
        }
      }, {
        key: "_forEach",
        value: function _forEach(t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) {
            return e(t[n], n);
          });
        }
      }]);

      return Go;
    }();

    var Jo = function Jo(t) {
      _classCallCheck(this, Jo);

      this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null;
    };

    function Ko() {
      return new Yo([new Bo()]);
    }

    var Yo = function () {
      var t = /*#__PURE__*/function () {
        function t(_t69) {
          _classCallCheck(this, t);

          this.factories = _t69;
        }

        _createClass(t, [{
          key: "find",
          value: function find(_t71) {
            var e = this.factories.find(function (e) {
              return e.supports(_t71);
            });
            if (null != e) return e;
            throw new Error("Cannot find a differ supporting object '".concat(_t71, "' of type '").concat((n = _t71, n.name || _typeof(n)), "'"));
            var n;
          }
        }], [{
          key: "create",
          value: function create(e, n) {
            if (null != n) {
              var _t72 = n.factories.slice();

              e = e.concat(_t72);
            }

            return new t(e);
          }
        }, {
          key: "extend",
          value: function extend(e) {
            return {
              provide: t,
              useFactory: function useFactory(n) {
                return t.create(e, n || Ko());
              },
              deps: [[t, new $n(), new Zn()]]
            };
          }
        }]);

        return t;
      }();

      return t.ɵprov = it({
        token: t,
        providedIn: "root",
        factory: Ko
      }), t;
    }();

    function Xo() {
      return new ti([new qo()]);
    }

    var ti = function () {
      var t = /*#__PURE__*/function () {
        function t(_t73) {
          _classCallCheck(this, t);

          this.factories = _t73;
        }

        _createClass(t, [{
          key: "find",
          value: function find(_t75) {
            var e = this.factories.find(function (e) {
              return e.supports(_t75);
            });
            if (e) return e;
            throw new Error("Cannot find a differ supporting object '".concat(_t75, "'"));
          }
        }], [{
          key: "create",
          value: function create(e, n) {
            if (n) {
              var _t76 = n.factories.slice();

              e = e.concat(_t76);
            }

            return new t(e);
          }
        }, {
          key: "extend",
          value: function extend(e) {
            return {
              provide: t,
              useFactory: function useFactory(n) {
                return t.create(e, n || Xo());
              },
              deps: [[t, new $n(), new Zn()]]
            };
          }
        }]);

        return t;
      }();

      return t.ɵprov = it({
        token: t,
        providedIn: "root",
        factory: Xo
      }), t;
    }();

    function ei(t, e, n, r) {
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

      for (; null !== n;) {
        var _o33 = e[n.index];
        if (null !== _o33 && r.push(ce(_o33)), Gt(_o33)) for (var _t77 = Qt; _t77 < _o33.length; _t77++) {
          var _e47 = _o33[_t77],
              _n61 = _e47[1].firstChild;
          null !== _n61 && ei(_e47[1], _e47, _n61, r);
        }
        var _i28 = n.type;
        if (8 & _i28) ei(t, e, n.child, r);else if (32 & _i28) {
          var _t78 = Xn(n, e);

          var _s34 = void 0;

          for (; _s34 = _t78();) {
            r.push(_s34);
          }
        } else if (16 & _i28) {
          var _t79 = dr(e, n);

          if (Array.isArray(_t79)) r.push.apply(r, _toConsumableArray(_t79));else {
            var _n62 = tr(e[16]);

            ei(_n62[1], _n62, _t79, r, !0);
          }
        }
        n = s ? n.projectionNext : n.next;
      }

      return r;
    }

    var ni = /*#__PURE__*/function (_ref) {
      _inherits(ni, _ref);

      var _super15 = _createSuper(ni);

      function ni(t) {
        var _this22;

        _classCallCheck(this, ni);

        _this22 = _super15.call(this, t), _this22._view = t;
        return _this22;
      }

      _createClass(ni, [{
        key: "detectChanges",
        value: function detectChanges() {
          cs(this._view);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {
          !function (t) {
            Te(!0);

            try {
              cs(t);
            } finally {
              Te(!1);
            }
          }(this._view);
        }
      }, {
        key: "context",
        get: function get() {
          return null;
        }
      }]);

      return ni;
    }( /*#__PURE__*/function () {
      function _class2(t, e) {
        _classCallCheck(this, _class2);

        this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._attachedToViewContainer = !1;
      }

      _createClass(_class2, [{
        key: "rootNodes",
        get: function get() {
          var t = this._lView,
              e = t[1];
          return ei(e, t, e.firstChild, []);
        }
      }, {
        key: "context",
        get: function get() {
          return this._lView[8];
        },
        set: function set(t) {
          this._lView[8] = t;
        }
      }, {
        key: "destroyed",
        get: function get() {
          return 256 == (256 & this._lView[2]);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this._appRef) this._appRef.detachView(this);else if (this._attachedToViewContainer) {
            var _t80 = this._lView[3];

            if (Gt(_t80)) {
              var _e48 = _t80[8],
                  _n63 = _e48 ? _e48.indexOf(this) : -1;

              _n63 > -1 && (function (t, e) {
                if (t.length <= Qt) return;
                var n = Qt + e,
                    r = t[n];

                if (r) {
                  var _o34 = r[17];
                  null !== _o34 && _o34 !== t && ir(_o34, r), e > 0 && (t[n - 1][4] = r[4]);

                  var _i29 = Sn(t, Qt + e);

                  pr(r[1], s = r, s[11], 2, null, null), s[0] = null, s[6] = null;
                  var _l21 = _i29[19];
                  null !== _l21 && _l21.detachView(_i29[1]), r[3] = null, r[4] = null, r[2] &= -129;
                }

                var s;
              }(_t80, _n63), Sn(_e48, _n63));
            }

            this._attachedToViewContainer = !1;
          }
          !function (t, e) {
            if (!(256 & e[2])) {
              var _n64 = e[11];
              ue(_n64) && _n64.destroyNode && pr(t, e, _n64, 3, null, null), function (t) {
                var e = t[13];
                if (!e) return lr(t[1], t);

                for (; e;) {
                  var _n65 = null;
                  if (qt(e)) _n65 = e[13];else {
                    var _t81 = e[10];
                    _t81 && (_n65 = _t81);
                  }

                  if (!_n65) {
                    for (; e && !e[4] && e !== t;) {
                      qt(e) && lr(e[1], e), e = e[3];
                    }

                    null === e && (e = t), qt(e) && lr(e[1], e), _n65 = e && e[4];
                  }

                  e = _n65;
                }
              }(e);
            }
          }(this._lView[1], this._lView);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          !function (t, e, n, r) {
            var s = fs(e);
            s.push(r);
          }(0, this._lView, 0, t);
        }
      }, {
        key: "markForCheck",
        value: function markForCheck() {
          us(this._cdRefInjectingView || this._lView);
        }
      }, {
        key: "detach",
        value: function detach() {
          this._lView[2] &= -129;
        }
      }, {
        key: "reattach",
        value: function reattach() {
          this._lView[2] |= 128;
        }
      }, {
        key: "detectChanges",
        value: function detectChanges() {
          as(this._lView[1], this._lView, this.context);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {
          !function (t, e, n) {
            Te(!0);

            try {
              as(t, e, n);
            } finally {
              Te(!1);
            }
          }(this._lView[1], this._lView, this.context);
        }
      }, {
        key: "attachToViewContainerRef",
        value: function attachToViewContainerRef() {
          if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
          this._attachedToViewContainer = !0;
        }
      }, {
        key: "detachFromAppRef",
        value: function detachFromAppRef() {
          var t;
          this._appRef = null, pr(this._lView[1], t = this._lView, t[11], 2, null, null);
        }
      }, {
        key: "attachToAppRef",
        value: function attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
          this._appRef = t;
        }
      }]);

      return _class2;
    }());

    var ri = [new qo()],
        si = new Yo([new Bo()]),
        oi = new ti(ri);

    var ii = function ii() {
      _classCallCheck(this, ii);
    };

    var li = {};

    var ui = /*#__PURE__*/function (_Io) {
      _inherits(ui, _Io);

      var _super16 = _createSuper(ui);

      function ui(t) {
        var _this23;

        _classCallCheck(this, ui);

        _this23 = _super16.call(this), _this23.ngModule = t;
        return _this23;
      }

      _createClass(ui, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          var e = Ut(t);
          return new hi(e, this.ngModule);
        }
      }]);

      return ui;
    }(Io);

    function ai(t) {
      var e = [];

      for (var _n66 in t) {
        t.hasOwnProperty(_n66) && e.push({
          propName: t[_n66],
          templateName: _n66
        });
      }

      return e;
    }

    var ci = new kn("SCHEDULER_TOKEN", {
      providedIn: "root",
      factory: function factory() {
        return Jn;
      }
    });

    var hi = /*#__PURE__*/function (_To) {
      _inherits(hi, _To);

      var _super17 = _createSuper(hi);

      function hi(t, e) {
        var _this24;

        _classCallCheck(this, hi);

        _this24 = _super17.call(this), _this24.componentDef = t, _this24.ngModule = e, _this24.componentType = t.type, _this24.selector = t.selectors.map(Tr).join(","), _this24.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], _this24.isBoundToModule = !!e;
        return _this24;
      }

      _createClass(hi, [{
        key: "inputs",
        get: function get() {
          return ai(this.componentDef.inputs);
        }
      }, {
        key: "outputs",
        get: function get() {
          return ai(this.componentDef.outputs);
        }
      }, {
        key: "create",
        value: function create(t, e, n, r) {
          var s = (r = r || this.ngModule) ? function (t, e) {
            return {
              get: function get(n, r, s) {
                var o = t.get(n, li, s);
                return o !== li || r === li ? o : e.get(n, r, s);
              }
            };
          }(t, r.injector) : t,
              o = s.get(Mo, ae),
              i = s.get(Ro, null),
              l = o.createRenderer(null, this.componentDef),
              u = this.componentDef.selectors[0][0] || "div",
              a = n ? function (t, e, n) {
            if (ue(t)) return t.selectRootElement(e, n === wt.ShadowDom);
            var r = "string" == typeof e ? t.querySelector(e) : e;
            return r.textContent = "", r;
          }(l, n, this.componentDef.encapsulation) : or(o.createRenderer(null, this.componentDef), u, function (t) {
            var e = t.toLowerCase();
            return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null;
          }(u)),
              c = this.componentDef.onPush ? 576 : 528,
              h = {
            components: [],
            scheduler: Jn,
            clean: ds,
            playerHandler: null,
            flags: 0
          },
              d = Qr(0, null, null, 1, 0, null, null, null, null, null),
              f = Fr(null, d, h, c, null, null, o, l, i, s);

          var p, _;

          Me(f);

          try {
            var _t82 = function (t, e, n, r, s, o) {
              var i = n[1];
              n[20] = t;
              var l = Lr(i, 20, 2, "#host", null),
                  u = l.mergedAttrs = e.hostAttrs;
              null !== u && (gs(l, u, !0), null !== t && (Ke(s, t, u), null !== l.classes && gr(s, t, l.classes), null !== l.styles && yr(s, t, l.styles)));
              var a = r.createRenderer(t, e),
                  c = Fr(n, Wr(e), null, e.onPush ? 64 : 16, n[20], l, r, a, null, null);
              return i.firstCreatePass && (hn(ln(l, n), i, e.type), Kr(i, l), Xr(l, n.length, 1)), ls(n, c), n[20] = c;
            }(a, this.componentDef, f, o, l);

            if (a) if (n) Ke(l, a, ["ng-version", Lo.full]);else {
              var _ref2 = function (t) {
                var e = [],
                    n = [];
                var r = 1,
                    s = 2;

                for (; r < t.length;) {
                  var _o35 = t[r];
                  if ("string" == typeof _o35) 2 === s ? "" !== _o35 && e.push(_o35, t[++r]) : 8 === s && n.push(_o35);else {
                    if (!Ar(s)) break;
                    s = _o35;
                  }
                  r++;
                }

                return {
                  attrs: e,
                  classes: n
                };
              }(this.componentDef.selectors[0]),
                  _t83 = _ref2.attrs,
                  _e49 = _ref2.classes;

              _t83 && Ke(l, a, _t83), _e49 && _e49.length > 0 && gr(l, a, _e49.join(" "));
            }

            if (_ = fe(d, Wt), void 0 !== e) {
              var _t84 = _.projection = [];

              for (var _n67 = 0; _n67 < this.ngContentSelectors.length; _n67++) {
                var _r47 = e[_n67];

                _t84.push(null != _r47 ? Array.from(_r47) : null);
              }
            }

            p = function (t, e, n, r, s) {
              var o = n[1],
                  i = function (t, e, n) {
                var r = Ee();
                t.firstCreatePass && (n.providersResolver && n.providersResolver(n), ts(t, r, e, Br(t, e, 1, null), n));
                var s = mn(e, t, r.directiveStart, r);
                Un(s, e);
                var o = de(r, e);
                return o && Un(o, e), s;
              }(o, n, e);

              if (r.components.push(i), t[8] = i, s && s.forEach(function (t) {
                return t(i, e);
              }), e.contentQueries) {
                var _t85 = Ee();

                e.contentQueries(1, i, _t85.directiveStart);
              }

              var l = Ee();
              return !o.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (Ze(l.index), Gr(n[1], l, 0, l.directiveStart, l.directiveEnd, e), Jr(e, i)), i;
            }(_t82, this.componentDef, f, h, [js]), Zr(d, f, null);
          } finally {
            Le();
          }

          return new di(this.componentType, p, Do(_, f), f, _);
        }
      }]);

      return hi;
    }(To);

    var di = /*#__PURE__*/function (_ref3) {
      _inherits(di, _ref3);

      var _super18 = _createSuper(di);

      function di(t, e, n, r, s) {
        var _this25;

        _classCallCheck(this, di);

        _this25 = _super18.call(this), _this25.location = n, _this25._rootLView = r, _this25._tNode = s, _this25.instance = e, _this25.hostView = _this25.changeDetectorRef = new ni(r), _this25.componentType = t;
        return _this25;
      }

      _createClass(di, [{
        key: "injector",
        get: function get() {
          return new wn(this._tNode, this._rootLView);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.hostView.destroy();
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }]);

      return di;
    }( /*#__PURE__*/function () {
      function _class3() {
        _classCallCheck(this, _class3);
      }

      return _class3;
    }());

    var fi = new Map();

    var pi = /*#__PURE__*/function (_ii) {
      _inherits(pi, _ii);

      var _super19 = _createSuper(pi);

      function pi(t, e) {
        var _this26;

        _classCallCheck(this, pi);

        _this26 = _super19.call(this), _this26._parent = e, _this26._bootstrapComponents = [], _this26.injector = _assertThisInitialized(_this26), _this26.destroyCbs = [], _this26.componentFactoryResolver = new ui(_assertThisInitialized(_this26));
        var n = zt(t),
            r = t[Pt] || null;
        r && vo(r), _this26._bootstrapComponents = Kn(n.bootstrap), _this26._r3Injector = ks(t, e, [{
          provide: ii,
          useValue: _assertThisInitialized(_this26)
        }, {
          provide: Io,
          useValue: _this26.componentFactoryResolver
        }], J(t)), _this26._r3Injector._resolveInjectorDefTypes(), _this26.instance = _this26.get(t);
        return _this26;
      }

      _createClass(pi, [{
        key: "get",
        value: function get(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ps.THROW_IF_NOT_FOUND;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _t.Default;
          return t === Ps || t === ii || t === ms ? this : this._r3Injector.get(t, e, n);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach(function (t) {
            return t();
          }), this.destroyCbs = null;
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }]);

      return pi;
    }(ii);

    var _i = /*#__PURE__*/function (_ref4) {
      _inherits(_i, _ref4);

      var _super20 = _createSuper(_i);

      function _i(t) {
        var _this27;

        _classCallCheck(this, _i);

        _this27 = _super20.call(this), _this27.moduleType = t, null !== zt(t) && function (t) {
          var e = new Set();
          !function t(n) {
            var r = zt(n, !0),
                s = r.id;
            null !== s && (function (t, e, n) {
              if (e && e !== n) throw new Error("Duplicate module registered for ".concat(t, " - ").concat(J(e), " vs ").concat(J(e.name)));
            }(s, fi.get(s), n), fi.set(s, n));
            var o = Kn(r.imports);

            var _iterator = _createForOfIteratorHelper(o),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _i30 = _step.value;
                e.has(_i30) || (e.add(_i30), t(_i30));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }(t);
        }(t);
        return _this27;
      }

      _createClass(_i, [{
        key: "create",
        value: function create(t) {
          return new pi(this.moduleType, t);
        }
      }]);

      return _i;
    }( /*#__PURE__*/function () {
      function _class4() {
        _classCallCheck(this, _class4);
      }

      return _class4;
    }());

    function yi(t) {
      return function (e) {
        setTimeout(t, void 0, e);
      };
    }

    var gi = /*#__PURE__*/function (_E2) {
      _inherits(gi, _E2);

      var _super21 = _createSuper(gi);

      function gi() {
        var _this28;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

        _classCallCheck(this, gi);

        _this28 = _super21.call(this), _this28.__isAsync = t;
        return _this28;
      }

      _createClass(gi, [{
        key: "emit",
        value: function emit(t) {
          _get(_getPrototypeOf(gi.prototype), "next", this).call(this, t);
        }
      }, {
        key: "subscribe",
        value: function subscribe(t, e, n) {
          var r, s, o;

          var i = t,
              l = e || function () {
            return null;
          },
              u = n;

          if (t && "object" == _typeof(t)) {
            var _e50 = t;
            i = null === (r = _e50.next) || void 0 === r ? void 0 : r.bind(_e50), l = null === (s = _e50.error) || void 0 === s ? void 0 : s.bind(_e50), u = null === (o = _e50.complete) || void 0 === o ? void 0 : o.bind(_e50);
          }

          this.__isAsync && (l = yi(l), i && (i = yi(i)), u && (u = yi(u)));

          var a = _get(_getPrototypeOf(gi.prototype), "subscribe", this).call(this, {
            next: i,
            error: l,
            complete: u
          });

          return t instanceof h && t.add(a), a;
        }
      }]);

      return gi;
    }(E);

    Symbol;
    var mi = new kn("Application Initializer");

    var vi = function () {
      var t = /*#__PURE__*/function () {
        function t(_t86) {
          var _this29 = this;

          _classCallCheck(this, t);

          this.appInits = _t86, this.resolve = Oo, this.reject = Oo, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (_t87, e) {
            _this29.resolve = _t87, _this29.reject = e;
          });
        }

        _createClass(t, [{
          key: "runInitializers",
          value: function runInitializers() {
            var _this30 = this;

            if (this.initialized) return;

            var _t88 = [],
                e = function e() {
              _this30.done = !0, _this30.resolve();
            };

            if (this.appInits) {
              var _loop2 = function _loop2(_n68) {
                var e = _this30.appInits[_n68]();

                if (Js(e)) _t88.push(e);else if (Ks(e)) {
                  var _n69 = new Promise(function (_t89, n) {
                    e.subscribe({
                      complete: _t89,
                      error: n
                    });
                  });

                  _t88.push(_n69);
                }
              };

              for (var _n68 = 0; _n68 < this.appInits.length; _n68++) {
                _loop2(_n68);
              }
            }

            Promise.all(_t88).then(function () {
              e();
            })["catch"](function (_t90) {
              _this30.reject(_t90);
            }), 0 === _t88.length && e(), this.initialized = !0;
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(mi, 8));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var bi = new kn("AppId"),
        wi = {
      provide: bi,
      useFactory: function useFactory() {
        return "".concat(Ci()).concat(Ci()).concat(Ci());
      },
      deps: []
    };

    function Ci() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }

    var Ei = new kn("Platform Initializer"),
        Ai = new kn("Platform ID"),
        ki = new kn("appBootstrapListener");

    var xi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "log",
          value: function log(_t91) {
            console.log(_t91);
          }
        }, {
          key: "warn",
          value: function warn(_t92) {
            console.warn(_t92);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Si = new kn("LocaleId"),
        Ti = new kn("DefaultCurrencyCode");

    var Vi = function Vi(t, e) {
      _classCallCheck(this, Vi);

      this.ngModuleFactory = t, this.componentFactories = e;
    };

    var Ii = function Ii(t) {
      return new _i(t);
    },
        Oi = Ii,
        Di = function Di(t) {
      return Promise.resolve(Ii(t));
    },
        Pi = function Pi(t) {
      var e = Ii(t),
          n = Kn(zt(t).declarations).reduce(function (t, e) {
        var n = Ut(e);
        return n && t.push(new hi(n)), t;
      }, []);
      return new Vi(e, n);
    },
        ji = Pi,
        Mi = function Mi(t) {
      return Promise.resolve(Pi(t));
    };

    var Hi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.compileModuleSync = Oi, this.compileModuleAsync = Di, this.compileModuleAndAllComponentsSync = ji, this.compileModuleAndAllComponentsAsync = Mi;
        }

        _createClass(t, [{
          key: "clearCache",
          value: function clearCache() {}
        }, {
          key: "clearCacheFor",
          value: function clearCacheFor(_t93) {}
        }, {
          key: "getModuleId",
          value: function getModuleId(_t94) {}
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Ni = function () {
      return Promise.resolve(0);
    }();

    function Ri(t) {
      "undefined" == typeof Zone ? Ni.then(function () {
        t && t.apply(null, null);
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
    }

    var Fi = /*#__PURE__*/function () {
      function Fi(_ref5) {
        var _ref5$enableLongStack = _ref5.enableLongStackTrace,
            t = _ref5$enableLongStack === void 0 ? !1 : _ref5$enableLongStack,
            _ref5$shouldCoalesceE = _ref5.shouldCoalesceEventChangeDetection,
            e = _ref5$shouldCoalesceE === void 0 ? !1 : _ref5$shouldCoalesceE,
            _ref5$shouldCoalesceR = _ref5.shouldCoalesceRunChangeDetection,
            n = _ref5$shouldCoalesceR === void 0 ? !1 : _ref5$shouldCoalesceR;

        _classCallCheck(this, Fi);

        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new gi(!1), this.onMicrotaskEmpty = new gi(!1), this.onStable = new gi(!1), this.onError = new gi(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched();
        var r = this;
        r._nesting = 0, r._outer = r._inner = Zone.current, Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())), t && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), r.shouldCoalesceEventChangeDetection = !n && e, r.shouldCoalesceRunChangeDetection = n, r.lastRequestAnimationFrameId = -1, r.nativeRequestAnimationFrame = function () {
          var t = xt.requestAnimationFrame,
              e = xt.cancelAnimationFrame;

          if ("undefined" != typeof Zone && t && e) {
            var _n70 = t[Zone.__symbol__("OriginalDelegate")];

            _n70 && (t = _n70);

            var _r48 = e[Zone.__symbol__("OriginalDelegate")];

            _r48 && (e = _r48);
          }

          return {
            nativeRequestAnimationFrame: t,
            nativeCancelAnimationFrame: e
          };
        }().nativeRequestAnimationFrame, function (t) {
          var e = function e() {
            !function (t) {
              t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(xt, function () {
                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", function () {
                  t.lastRequestAnimationFrameId = -1, Zi(t), t.isCheckStableRunning = !0, Bi(t), t.isCheckStableRunning = !1;
                }, void 0, function () {}, function () {})), t.fakeTopEventTask.invoke();
              }), Zi(t));
            }(t);
          };

          t._inner = t._inner.fork({
            name: "angular",
            properties: {
              isAngularZone: !0
            },
            onInvokeTask: function onInvokeTask(n, r, s, o, i, l) {
              try {
                return $i(t), n.invokeTask(s, o, i, l);
              } finally {
                (t.shouldCoalesceEventChangeDetection && "eventTask" === o.type || t.shouldCoalesceRunChangeDetection) && e(), Ui(t);
              }
            },
            onInvoke: function onInvoke(n, r, s, o, i, l, u) {
              try {
                return $i(t), n.invoke(s, o, i, l, u);
              } finally {
                t.shouldCoalesceRunChangeDetection && e(), Ui(t);
              }
            },
            onHasTask: function onHasTask(e, n, r, s) {
              e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, Zi(t), Bi(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask));
            },
            onHandleError: function onHandleError(e, n, r, s) {
              return e.handleError(r, s), t.runOutsideAngular(function () {
                return t.onError.emit(s);
              }), !1;
            }
          });
        }(r);
      }

      _createClass(Fi, [{
        key: "run",
        value: function run(t, e, n) {
          return this._inner.run(t, e, n);
        }
      }, {
        key: "runTask",
        value: function runTask(t, e, n, r) {
          var s = this._inner,
              o = s.scheduleEventTask("NgZoneEvent: " + r, t, Li, Oo, Oo);

          try {
            return s.runTask(o, e, n);
          } finally {
            s.cancelTask(o);
          }
        }
      }, {
        key: "runGuarded",
        value: function runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
      }, {
        key: "runOutsideAngular",
        value: function runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }], [{
        key: "isInAngularZone",
        value: function isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
      }, {
        key: "assertInAngularZone",
        value: function assertInAngularZone() {
          if (!Fi.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!");
        }
      }, {
        key: "assertNotInAngularZone",
        value: function assertNotInAngularZone() {
          if (Fi.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!");
        }
      }]);

      return Fi;
    }();

    var Li = {};

    function Bi(t) {
      if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null);
      } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
          t.runOutsideAngular(function () {
            return t.onStable.emit(null);
          });
        } finally {
          t.isStable = !0;
        }
      }
    }

    function Zi(t) {
      t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId);
    }

    function $i(t) {
      t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null));
    }

    function Ui(t) {
      t._nesting--, Bi(t);
    }

    var zi = /*#__PURE__*/function () {
      function zi() {
        _classCallCheck(this, zi);

        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new gi(), this.onMicrotaskEmpty = new gi(), this.onStable = new gi(), this.onError = new gi();
      }

      _createClass(zi, [{
        key: "run",
        value: function run(t, e, n) {
          return t.apply(e, n);
        }
      }, {
        key: "runGuarded",
        value: function runGuarded(t, e, n) {
          return t.apply(e, n);
        }
      }, {
        key: "runOutsideAngular",
        value: function runOutsideAngular(t) {
          return t();
        }
      }, {
        key: "runTask",
        value: function runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }]);

      return zi;
    }();

    var Wi = function () {
      var t = /*#__PURE__*/function () {
        function t(_t95) {
          var _this31 = this;

          _classCallCheck(this, t);

          this._ngZone = _t95, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), _t95.run(function () {
            _this31.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone");
          });
        }

        _createClass(t, [{
          key: "_watchAngularEvents",
          value: function _watchAngularEvents() {
            var _this32 = this;

            this._ngZone.onUnstable.subscribe({
              next: function next() {
                _this32._didWork = !0, _this32._isZoneStable = !1;
              }
            }), this._ngZone.runOutsideAngular(function () {
              _this32._ngZone.onStable.subscribe({
                next: function next() {
                  Fi.assertNotInAngularZone(), Ri(function () {
                    _this32._isZoneStable = !0, _this32._runCallbacksIfReady();
                  });
                }
              });
            });
          }
        }, {
          key: "increasePendingRequestCount",
          value: function increasePendingRequestCount() {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
          }
        }, {
          key: "decreasePendingRequestCount",
          value: function decreasePendingRequestCount() {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }
        }, {
          key: "isStable",
          value: function isStable() {
            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
          }
        }, {
          key: "_runCallbacksIfReady",
          value: function _runCallbacksIfReady() {
            var _this33 = this;

            if (this.isStable()) Ri(function () {
              for (; 0 !== _this33._callbacks.length;) {
                var _t103 = _this33._callbacks.pop();

                clearTimeout(_t103.timeoutId), _t103.doneCb(_this33._didWork);
              }

              _this33._didWork = !1;
            });else {
              var _t104 = this.getPendingTasks();

              this._callbacks = this._callbacks.filter(function (e) {
                return !e.updateCb || !e.updateCb(_t104) || (clearTimeout(e.timeoutId), !1);
              }), this._didWork = !0;
            }
          }
        }, {
          key: "getPendingTasks",
          value: function getPendingTasks() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (_t98) {
              return {
                source: _t98.source,
                creationLocation: _t98.creationLocation,
                data: _t98.data
              };
            }) : [];
          }
        }, {
          key: "addCallback",
          value: function addCallback(_t99, e, n) {
            var _this34 = this;

            var r = -1;
            e && e > 0 && (r = setTimeout(function () {
              _this34._callbacks = _this34._callbacks.filter(function (_t100) {
                return _t100.timeoutId !== r;
              }), _t99(_this34._didWork, _this34.getPendingTasks());
            }, e)), this._callbacks.push({
              doneCb: _t99,
              timeoutId: r,
              updateCb: n
            });
          }
        }, {
          key: "whenStable",
          value: function whenStable(_t101, e, n) {
            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
            this.addCallback(_t101, e, n), this._runCallbacksIfReady();
          }
        }, {
          key: "getPendingRequestCount",
          value: function getPendingRequestCount() {
            return this._pendingCount;
          }
        }, {
          key: "findProviders",
          value: function findProviders(_t102, e, n) {
            return [];
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(Fi));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }(),
        Qi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._applications = new Map(), Ji.addToWindow(this);
        }

        _createClass(t, [{
          key: "registerApplication",
          value: function registerApplication(_t105, e) {
            this._applications.set(_t105, e);
          }
        }, {
          key: "unregisterApplication",
          value: function unregisterApplication(_t106) {
            this._applications["delete"](_t106);
          }
        }, {
          key: "unregisterAllApplications",
          value: function unregisterAllApplications() {
            this._applications.clear();
          }
        }, {
          key: "getTestability",
          value: function getTestability(_t107) {
            return this._applications.get(_t107) || null;
          }
        }, {
          key: "getAllTestabilities",
          value: function getAllTestabilities() {
            return Array.from(this._applications.values());
          }
        }, {
          key: "getAllRootElements",
          value: function getAllRootElements() {
            return Array.from(this._applications.keys());
          }
        }, {
          key: "findTestabilityInTree",
          value: function findTestabilityInTree(_t108) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return Ji.findTestabilityInTree(this, _t108, e);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var qi = /*#__PURE__*/function () {
      function qi() {
        _classCallCheck(this, qi);
      }

      _createClass(qi, [{
        key: "addToWindow",
        value: function addToWindow(t) {}
      }, {
        key: "findTestabilityInTree",
        value: function findTestabilityInTree(t, e, n) {
          return null;
        }
      }]);

      return qi;
    }();

    var Gi,
        Ji = new qi(),
        Ki = !0,
        Yi = !1;
    var Xi = new kn("AllowMultipleToken");

    function tl(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var r = "Platform: ".concat(e),
          s = new kn(r);
      return function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var o = el();
        if (!o || o.injector.get(Xi, !1)) if (t) t(n.concat(e).concat({
          provide: s,
          useValue: !0
        }));else {
          var _t109 = n.concat(e).concat({
            provide: s,
            useValue: !0
          }, {
            provide: bs,
            useValue: "platform"
          });

          !function (t) {
            if (Gi && !Gi.destroyed && !Gi.injector.get(Xi, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
            Gi = t.get(nl);
            var e = t.get(Ei, null);
            e && e.forEach(function (t) {
              return t();
            });
          }(Ps.create({
            providers: _t109,
            name: r
          }));
        }
        return function (t) {
          var e = el();
          if (!e) throw new Error("No platform exists!");
          if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
          return e;
        }(s);
      };
    }

    function el() {
      return Gi && !Gi.destroyed ? Gi : null;
    }

    var nl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t110) {
          _classCallCheck(this, t);

          this._injector = _t110, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
        }

        _createClass(t, [{
          key: "bootstrapModuleFactory",
          value: function bootstrapModuleFactory(_t111, e) {
            var _this35 = this;

            var n = function (t, e) {
              var n;
              return n = "noop" === t ? new zi() : ("zone.js" === t ? void 0 : t) || new Fi({
                enableLongStackTrace: (Yi = !0, Ki),
                shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
              }), n;
            }(e ? e.ngZone : void 0, {
              ngZoneEventCoalescing: e && e.ngZoneEventCoalescing || !1,
              ngZoneRunCoalescing: e && e.ngZoneRunCoalescing || !1
            }),
                r = [{
              provide: Fi,
              useValue: n
            }];

            return n.run(function () {
              var e = Ps.create({
                providers: r,
                parent: _this35.injector,
                name: _t111.moduleType.name
              }),
                  s = _t111.create(e),
                  o = s.injector.get(Gn, null);

              if (!o) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
              return n.runOutsideAngular(function () {
                var _t112 = n.onError.subscribe({
                  next: function next(_t113) {
                    o.handleError(_t113);
                  }
                });

                s.onDestroy(function () {
                  ol(_this35._modules, s), _t112.unsubscribe();
                });
              }), function (t, e, n) {
                try {
                  var _r49 = n();

                  return Js(_r49) ? _r49["catch"](function (n) {
                    throw e.runOutsideAngular(function () {
                      return t.handleError(n);
                    }), n;
                  }) : _r49;
                } catch (r) {
                  throw e.runOutsideAngular(function () {
                    return t.handleError(r);
                  }), r;
                }
              }(o, n, function () {
                var _t114 = s.injector.get(vi);

                return _t114.runInitializers(), _t114.donePromise.then(function () {
                  return vo(s.injector.get(Si, go) || go), _this35._moduleDoBootstrap(s), s;
                });
              });
            });
          }
        }, {
          key: "bootstrapModule",
          value: function bootstrapModule(_t115) {
            var _this36 = this;

            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var n = rl({}, e);
            return function (t, e, n) {
              var r = new _i(n);
              return Promise.resolve(r);
            }(0, 0, _t115).then(function (_t116) {
              return _this36.bootstrapModuleFactory(_t116, n);
            });
          }
        }, {
          key: "_moduleDoBootstrap",
          value: function _moduleDoBootstrap(_t117) {
            var e = _t117.injector.get(sl);

            if (_t117._bootstrapComponents.length > 0) _t117._bootstrapComponents.forEach(function (_t118) {
              return e.bootstrap(_t118);
            });else {
              if (!_t117.instance.ngDoBootstrap) throw new Error("The module ".concat(J(_t117.instance.constructor), " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. Please define one of these."));

              _t117.instance.ngDoBootstrap(e);
            }

            this._modules.push(_t117);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(_t119) {
            this._destroyListeners.push(_t119);
          }
        }, {
          key: "injector",
          get: function get() {
            return this._injector;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._destroyed) throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(function (_t120) {
              return _t120.destroy();
            }), this._destroyListeners.forEach(function (_t121) {
              return _t121();
            }), this._destroyed = !0;
          }
        }, {
          key: "destroyed",
          get: function get() {
            return this._destroyed;
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(Ps));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function rl(t, e) {
      return Array.isArray(e) ? e.reduce(rl, t) : Object.assign(Object.assign({}, t), e);
    }

    var sl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t122, e, n, r, s) {
          var _this37 = this;

          _classCallCheck(this, t);

          this._zone = _t122, this._injector = e, this._exceptionHandler = n, this._componentFactoryResolver = r, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
            next: function next() {
              _this37._zone.run(function () {
                _this37.tick();
              });
            }
          });
          var o = new m(function (_t123) {
            _this37._stable = _this37._zone.isStable && !_this37._zone.hasPendingMacrotasks && !_this37._zone.hasPendingMicrotasks, _this37._zone.runOutsideAngular(function () {
              _t123.next(_this37._stable), _t123.complete();
            });
          }),
              i = new m(function (_t124) {
            var e;

            _this37._zone.runOutsideAngular(function () {
              e = _this37._zone.onStable.subscribe(function () {
                Fi.assertNotInAngularZone(), Ri(function () {
                  _this37._stable || _this37._zone.hasPendingMacrotasks || _this37._zone.hasPendingMicrotasks || (_this37._stable = !0, _t124.next(!0));
                });
              });
            });

            var n = _this37._zone.onUnstable.subscribe(function () {
              Fi.assertInAngularZone(), _this37._stable && (_this37._stable = !1, _this37._zone.runOutsideAngular(function () {
                _t124.next(!1);
              }));
            });

            return function () {
              e.unsubscribe(), n.unsubscribe();
            };
          });
          this.isStable = L(o, i.pipe(function (_t125) {
            return B()((e = Q, function (t) {
              var n;
              n = "function" == typeof e ? e : function () {
                return e;
              };
              var r = Object.create(t, z);
              return r.source = t, r.subjectFactory = n, r;
            })(_t125));
            var e;
          }));
        }

        _createClass(t, [{
          key: "bootstrap",
          value: function bootstrap(_t126, e) {
            var _this38 = this;

            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
            var n;
            n = _t126 instanceof To ? _t126 : this._componentFactoryResolver.resolveComponentFactory(_t126), this.componentTypes.push(n.componentType);
            var r = n.isBoundToModule ? void 0 : this._injector.get(ii),
                s = n.create(Ps.NULL, [], e || n.selector, r),
                o = s.location.nativeElement,
                i = s.injector.get(Wi, null),
                l = i && s.injector.get(Qi);
            return i && l && l.registerApplication(o, i), s.onDestroy(function () {
              _this38.detachView(s.hostView), ol(_this38.components, s), l && l.unregisterApplication(o);
            }), this._loadComponent(s), s;
          }
        }, {
          key: "tick",
          value: function tick() {
            var _this39 = this;

            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");

            try {
              this._runningTick = !0;

              var _iterator2 = _createForOfIteratorHelper(this._views),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _t133 = _step2.value;

                  _t133.detectChanges();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } catch (_t128) {
              this._zone.runOutsideAngular(function () {
                return _this39._exceptionHandler.handleError(_t128);
              });
            } finally {
              this._runningTick = !1;
            }
          }
        }, {
          key: "attachView",
          value: function attachView(_t129) {
            var e = _t129;
            this._views.push(e), e.attachToAppRef(this);
          }
        }, {
          key: "detachView",
          value: function detachView(_t130) {
            var e = _t130;
            ol(this._views, e), e.detachFromAppRef();
          }
        }, {
          key: "_loadComponent",
          value: function _loadComponent(_t131) {
            this.attachView(_t131.hostView), this.tick(), this.components.push(_t131), this._injector.get(ki, []).concat(this._bootstrapListeners).forEach(function (e) {
              return e(_t131);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._views.slice().forEach(function (_t132) {
              return _t132.destroy();
            }), this._onMicrotaskEmptySubscription.unsubscribe();
          }
        }, {
          key: "viewCount",
          get: function get() {
            return this._views.length;
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(Fi), Rn(Ps), Rn(Gn), Rn(Io), Rn(vi));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function ol(t, e) {
      var n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    }

    var il = tl(null, "core", [{
      provide: Ai,
      useValue: "unknown"
    }, {
      provide: nl,
      deps: [Ps]
    }, {
      provide: Qi,
      deps: []
    }, {
      provide: xi,
      deps: []
    }]),
        ll = [{
      provide: sl,
      useClass: sl,
      deps: [Fi, Ps, Gn, Io, vi]
    }, {
      provide: ci,
      deps: [Fi],
      useFactory: function useFactory(t) {
        var e = [];
        return t.onStable.subscribe(function () {
          for (; e.length;) {
            e.pop()();
          }
        }), function (t) {
          e.push(t);
        };
      }
    }, {
      provide: vi,
      useClass: vi,
      deps: [[new Zn(), mi]]
    }, {
      provide: Hi,
      useClass: Hi,
      deps: []
    }, wi, {
      provide: Yo,
      useFactory: function useFactory() {
        return si;
      },
      deps: []
    }, {
      provide: ti,
      useFactory: function useFactory() {
        return oi;
      },
      deps: []
    }, {
      provide: Si,
      useFactory: function useFactory(t) {
        return vo(t = t || "undefined" != typeof $localize && $localize.locale || go), t;
      },
      deps: [[new Bn(Si), new Zn(), new $n()]]
    }, {
      provide: Ti,
      useValue: "USD"
    }];

    var ul = function () {
      var t = function t(_t134) {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(sl));
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        providers: ll
      }), t;
    }(),
        al = null;

    function cl() {
      return al;
    }

    var hl = new kn("DocumentToken");

    var dl = function () {
      return (dl = dl || {})[dl.Zero = 0] = "Zero", dl[dl.One = 1] = "One", dl[dl.Two = 2] = "Two", dl[dl.Few = 3] = "Few", dl[dl.Many = 4] = "Many", dl[dl.Other = 5] = "Other", dl;
    }();

    var fl = function fl() {
      _classCallCheck(this, fl);
    };

    var pl = function () {
      var t = /*#__PURE__*/function (_fl) {
        _inherits(t, _fl);

        var _super22 = _createSuper(t);

        function t(_t135) {
          var _this40;

          _classCallCheck(this, t);

          _this40 = _super22.call(this), _this40.locale = _t135;
          return _this40;
        }

        _createClass(t, [{
          key: "getPluralCategory",
          value: function getPluralCategory(_t136, e) {
            switch (function (t) {
              return function (t) {
                var e = function (t) {
                  return t.toLowerCase().replace(/_/g, "-");
                }(t);

                var n = _o(e);

                if (n) return n;
                var r = e.split("-")[0];
                if (n = _o(r), n) return n;
                if ("en" === r) return fo;
                throw new Error("Missing locale data for the locale \"".concat(t, "\"."));
              }(t)[yo.PluralCase];
            }(e || this.locale)(_t136)) {
              case dl.Zero:
                return "zero";

              case dl.One:
                return "one";

              case dl.Two:
                return "two";

              case dl.Few:
                return "few";

              case dl.Many:
                return "many";

              default:
                return "other";
            }
          }
        }]);

        return t;
      }(fl);

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(Si));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }(),
        _l = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        providers: [{
          provide: fl,
          useClass: pl
        }]
      }), t;
    }();

    var yl = /*#__PURE__*/function (_ref6) {
      _inherits(yl, _ref6);

      var _super23 = _createSuper(yl);

      function yl() {
        _classCallCheck(this, yl);

        return _super23.apply(this, arguments);
      }

      _createClass(yl, [{
        key: "onAndCancel",
        value: function onAndCancel(t, e, n) {
          return t.addEventListener(e, n, !1), function () {
            t.removeEventListener(e, n, !1);
          };
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
      }, {
        key: "remove",
        value: function remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }, {
        key: "createElement",
        value: function createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
      }, {
        key: "createHtmlDocument",
        value: function createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
      }, {
        key: "getDefaultDocument",
        value: function getDefaultDocument() {
          return document;
        }
      }, {
        key: "isElementNode",
        value: function isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
      }, {
        key: "isShadowRoot",
        value: function isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
      }, {
        key: "getGlobalEventTarget",
        value: function getGlobalEventTarget(t, e) {
          return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null;
        }
      }, {
        key: "getBaseHref",
        value: function getBaseHref(t) {
          var e = (ml = ml || document.querySelector("base"), ml ? ml.getAttribute("href") : null);
          return null == e ? null : function (t) {
            gl = gl || document.createElement("a"), gl.setAttribute("href", t);
            var e = gl.pathname;
            return "/" === e.charAt(0) ? e : "/".concat(e);
          }(e);
        }
      }, {
        key: "resetBaseElement",
        value: function resetBaseElement() {
          ml = null;
        }
      }, {
        key: "getUserAgent",
        value: function getUserAgent() {
          return window.navigator.userAgent;
        }
      }, {
        key: "getCookie",
        value: function getCookie(t) {
          return function (t, e) {
            e = encodeURIComponent(e);

            var _iterator3 = _createForOfIteratorHelper(t.split(";")),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _n71 = _step3.value;

                var _t137 = _n71.indexOf("="),
                    _ref7 = -1 == _t137 ? [_n71, ""] : [_n71.slice(0, _t137), _n71.slice(_t137 + 1)],
                    _ref8 = _slicedToArray(_ref7, 2),
                    _r50 = _ref8[0],
                    _s35 = _ref8[1];

                if (_r50.trim() === e) return decodeURIComponent(_s35);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return null;
          }(document.cookie, t);
        }
      }], [{
        key: "makeCurrent",
        value: function makeCurrent() {
          var t;
          t = new yl(), al || (al = t);
        }
      }]);

      return yl;
    }( /*#__PURE__*/function (_ref9) {
      _inherits(_class5, _ref9);

      var _super24 = _createSuper(_class5);

      function _class5() {
        var _this41;

        _classCallCheck(this, _class5);

        _this41 = _super24.apply(this, arguments), _this41.supportsDOMEvents = !0;
        return _this41;
      }

      return _class5;
    }( /*#__PURE__*/function () {
      function _class6() {
        _classCallCheck(this, _class6);
      }

      return _class6;
    }()));

    var gl,
        ml = null;
    var vl = new kn("TRANSITION_ID"),
        bl = [{
      provide: mi,
      useFactory: function useFactory(t, e, n) {
        return function () {
          n.get(vi).donePromise.then(function () {
            var n = cl();
            Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(function (e) {
              return e.getAttribute("ng-transition") === t;
            }).forEach(function (t) {
              return n.remove(t);
            });
          });
        };
      },
      deps: [vl, hl, Ps],
      multi: !0
    }];

    var wl = /*#__PURE__*/function () {
      function wl() {
        _classCallCheck(this, wl);
      }

      _createClass(wl, [{
        key: "addToWindow",
        value: function addToWindow(t) {
          xt.getAngularTestability = function (e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error("Could not find testability for element.");
            return r;
          }, xt.getAllAngularTestabilities = function () {
            return t.getAllTestabilities();
          }, xt.getAllAngularRootElements = function () {
            return t.getAllRootElements();
          }, xt.frameworkStabilizers || (xt.frameworkStabilizers = []), xt.frameworkStabilizers.push(function (t) {
            var e = xt.getAllAngularTestabilities();
            var n = e.length,
                r = !1;

            var s = function s(e) {
              r = r || e, n--, 0 == n && t(r);
            };

            e.forEach(function (t) {
              t.whenStable(s);
            });
          });
        }
      }, {
        key: "findTestabilityInTree",
        value: function findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          var r = t.getTestability(e);
          return null != r ? r : n ? cl().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null;
        }
      }], [{
        key: "init",
        value: function init() {
          var t;
          t = new wl(), Ji = t;
        }
      }]);

      return wl;
    }();

    var Cl = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "build",
          value: function build() {
            return new XMLHttpRequest();
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var El = new kn("EventManagerPlugins");

    var Al = function () {
      var t = /*#__PURE__*/function () {
        function t(_t138, e) {
          var _this42 = this;

          _classCallCheck(this, t);

          this._zone = e, this._eventNameToPlugin = new Map(), _t138.forEach(function (_t139) {
            return _t139.manager = _this42;
          }), this._plugins = _t138.slice().reverse();
        }

        _createClass(t, [{
          key: "addEventListener",
          value: function addEventListener(_t140, e, n) {
            return this._findPluginFor(e).addEventListener(_t140, e, n);
          }
        }, {
          key: "addGlobalEventListener",
          value: function addGlobalEventListener(_t141, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(_t141, e, n);
          }
        }, {
          key: "getZone",
          value: function getZone() {
            return this._zone;
          }
        }, {
          key: "_findPluginFor",
          value: function _findPluginFor(_t142) {
            var e = this._eventNameToPlugin.get(_t142);

            if (e) return e;
            var n = this._plugins;

            for (var _r51 = 0; _r51 < n.length; _r51++) {
              var _e51 = n[_r51];
              if (_e51.supports(_t142)) return this._eventNameToPlugin.set(_t142, _e51), _e51;
            }

            throw new Error("No event manager plugin found for event ".concat(_t142));
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(El), Rn(Fi));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var kl = /*#__PURE__*/function () {
      function kl(t) {
        _classCallCheck(this, kl);

        this._doc = t;
      }

      _createClass(kl, [{
        key: "addGlobalEventListener",
        value: function addGlobalEventListener(t, e, n) {
          var r = cl().getGlobalEventTarget(this._doc, t);
          if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(e));
          return this.addEventListener(r, e, n);
        }
      }]);

      return kl;
    }();

    var xl = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._stylesSet = new Set();
        }

        _createClass(t, [{
          key: "addStyles",
          value: function addStyles(_t143) {
            var _this43 = this;

            var e = new Set();
            _t143.forEach(function (_t144) {
              _this43._stylesSet.has(_t144) || (_this43._stylesSet.add(_t144), e.add(_t144));
            }), this.onStylesAdded(e);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(_t145) {}
        }, {
          key: "getAllStyles",
          value: function getAllStyles() {
            return Array.from(this._stylesSet);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }(),
        Sl = function () {
      var t = /*#__PURE__*/function (_xl) {
        _inherits(t, _xl);

        var _super25 = _createSuper(t);

        function t(_t146) {
          var _this44;

          _classCallCheck(this, t);

          _this44 = _super25.call(this), _this44._doc = _t146, _this44._hostNodes = new Map(), _this44._hostNodes.set(_t146.head, []);
          return _this44;
        }

        _createClass(t, [{
          key: "_addStylesToHost",
          value: function _addStylesToHost(_t147, e, n) {
            var _this45 = this;

            _t147.forEach(function (_t148) {
              var r = _this45._doc.createElement("style");

              r.textContent = _t148, n.push(e.appendChild(r));
            });
          }
        }, {
          key: "addHost",
          value: function addHost(_t149) {
            var e = [];
            this._addStylesToHost(this._stylesSet, _t149, e), this._hostNodes.set(_t149, e);
          }
        }, {
          key: "removeHost",
          value: function removeHost(_t150) {
            var e = this._hostNodes.get(_t150);

            e && e.forEach(Tl), this._hostNodes["delete"](_t150);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(_t151) {
            var _this46 = this;

            this._hostNodes.forEach(function (e, n) {
              _this46._addStylesToHost(_t151, n, e);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._hostNodes.forEach(function (_t152) {
              return _t152.forEach(Tl);
            });
          }
        }]);

        return t;
      }(xl);

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(hl));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function Tl(t) {
      cl().remove(t);
    }

    var Vl = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    },
        Il = /%COMP%/g;

    function Ol(t, e, n) {
      for (var _r52 = 0; _r52 < e.length; _r52++) {
        var _s36 = e[_r52];
        Array.isArray(_s36) ? Ol(t, _s36, n) : (_s36 = _s36.replace(Il, t), n.push(_s36));
      }

      return n;
    }

    function Dl(t) {
      return function (e) {
        if ("__ngUnwrap__" === e) return t;
        !1 === t(e) && (e.preventDefault(), e.returnValue = !1);
      };
    }

    var Pl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t153, e, n) {
          _classCallCheck(this, t);

          this.eventManager = _t153, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map(), this.defaultRenderer = new jl(_t153);
        }

        _createClass(t, [{
          key: "createRenderer",
          value: function createRenderer(_t154, e) {
            if (!_t154 || !e) return this.defaultRenderer;

            switch (e.encapsulation) {
              case wt.Emulated:
                {
                  var _n72 = this.rendererByCompId.get(e.id);

                  return _n72 || (_n72 = new Ml(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, _n72)), _n72.applyToHost(_t154), _n72;
                }

              case 1:
              case wt.ShadowDom:
                return new Hl(this.eventManager, this.sharedStylesHost, _t154, e);

              default:
                if (!this.rendererByCompId.has(e.id)) {
                  var _t156 = Ol(e.id, e.styles, []);

                  this.sharedStylesHost.addStyles(_t156), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }

                return this.defaultRenderer;
            }
          }
        }, {
          key: "begin",
          value: function begin() {}
        }, {
          key: "end",
          value: function end() {}
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(Al), Rn(Sl), Rn(bi));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var jl = /*#__PURE__*/function () {
      function jl(t) {
        _classCallCheck(this, jl);

        this.eventManager = t, this.data = Object.create(null);
      }

      _createClass(jl, [{
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "createElement",
        value: function createElement(t, e) {
          return e ? document.createElementNS(Vl[e] || e, t) : document.createElement(t);
        }
      }, {
        key: "createComment",
        value: function createComment(t) {
          return document.createComment(t);
        }
      }, {
        key: "createText",
        value: function createText(t) {
          return document.createTextNode(t);
        }
      }, {
        key: "appendChild",
        value: function appendChild(t, e) {
          t.appendChild(e);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
      }, {
        key: "removeChild",
        value: function removeChild(t, e) {
          t && t.removeChild(e);
        }
      }, {
        key: "selectRootElement",
        value: function selectRootElement(t, e) {
          var n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error("The selector \"".concat(t, "\" did not match any elements"));
          return e || (n.textContent = ""), n;
        }
      }, {
        key: "parentNode",
        value: function parentNode(t) {
          return t.parentNode;
        }
      }, {
        key: "nextSibling",
        value: function nextSibling(t) {
          return t.nextSibling;
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            var _s37 = Vl[r];
            _s37 ? t.setAttributeNS(_s37, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
      }, {
        key: "removeAttribute",
        value: function removeAttribute(t, e, n) {
          if (n) {
            var _r53 = Vl[n];
            _r53 ? t.removeAttributeNS(_r53, e) : t.removeAttribute("".concat(n, ":").concat(e));
          } else t.removeAttribute(e);
        }
      }, {
        key: "addClass",
        value: function addClass(t, e) {
          t.classList.add(e);
        }
      }, {
        key: "removeClass",
        value: function removeClass(t, e) {
          t.classList.remove(e);
        }
      }, {
        key: "setStyle",
        value: function setStyle(t, e, n, r) {
          r & (Yn.DashCase | Yn.Important) ? t.style.setProperty(e, n, r & Yn.Important ? "important" : "") : t.style[e] = n;
        }
      }, {
        key: "removeStyle",
        value: function removeStyle(t, e, n) {
          n & Yn.DashCase ? t.style.removeProperty(e) : t.style[e] = "";
        }
      }, {
        key: "setProperty",
        value: function setProperty(t, e, n) {
          t[e] = n;
        }
      }, {
        key: "setValue",
        value: function setValue(t, e) {
          t.nodeValue = e;
        }
      }, {
        key: "listen",
        value: function listen(t, e, n) {
          return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Dl(n)) : this.eventManager.addEventListener(t, e, Dl(n));
        }
      }]);

      return jl;
    }();

    var Ml = /*#__PURE__*/function (_jl) {
      _inherits(Ml, _jl);

      var _super26 = _createSuper(Ml);

      function Ml(t, e, n, r) {
        var _this47;

        _classCallCheck(this, Ml);

        _this47 = _super26.call(this, t), _this47.component = n;
        var s = Ol(r + "-" + n.id, n.styles, []);
        e.addStyles(s), _this47.contentAttr = "_ngcontent-%COMP%".replace(Il, r + "-" + n.id), _this47.hostAttr = "_nghost-%COMP%".replace(Il, r + "-" + n.id);
        return _this47;
      }

      _createClass(Ml, [{
        key: "applyToHost",
        value: function applyToHost(t) {
          _get(_getPrototypeOf(Ml.prototype), "setAttribute", this).call(this, t, this.hostAttr, "");
        }
      }, {
        key: "createElement",
        value: function createElement(t, e) {
          var n = _get(_getPrototypeOf(Ml.prototype), "createElement", this).call(this, t, e);

          return _get(_getPrototypeOf(Ml.prototype), "setAttribute", this).call(this, n, this.contentAttr, ""), n;
        }
      }]);

      return Ml;
    }(jl);

    var Hl = /*#__PURE__*/function (_jl2) {
      _inherits(Hl, _jl2);

      var _super27 = _createSuper(Hl);

      function Hl(t, e, n, r) {
        var _this48;

        _classCallCheck(this, Hl);

        _this48 = _super27.call(this, t), _this48.sharedStylesHost = e, _this48.hostEl = n, _this48.shadowRoot = n.attachShadow({
          mode: "open"
        }), _this48.sharedStylesHost.addHost(_this48.shadowRoot);
        var s = Ol(r.id, r.styles, []);

        for (var _o36 = 0; _o36 < s.length; _o36++) {
          var _t157 = document.createElement("style");

          _t157.textContent = s[_o36], _this48.shadowRoot.appendChild(_t157);
        }

        return _this48;
      }

      _createClass(Hl, [{
        key: "nodeOrShadowRoot",
        value: function nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }, {
        key: "appendChild",
        value: function appendChild(t, e) {
          return _get(_getPrototypeOf(Hl.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(t), e);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(t, e, n) {
          return _get(_getPrototypeOf(Hl.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(t), e, n);
        }
      }, {
        key: "removeChild",
        value: function removeChild(t, e) {
          return _get(_getPrototypeOf(Hl.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(t), e);
        }
      }, {
        key: "parentNode",
        value: function parentNode(t) {
          return this.nodeOrShadowRoot(_get(_getPrototypeOf(Hl.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(t)));
        }
      }]);

      return Hl;
    }(jl);

    var Nl = function () {
      var t = /*#__PURE__*/function (_kl) {
        _inherits(t, _kl);

        var _super28 = _createSuper(t);

        function t(_t158) {
          _classCallCheck(this, t);

          return _super28.call(this, _t158);
        }

        _createClass(t, [{
          key: "supports",
          value: function supports(_t159) {
            return !0;
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(_t160, e, n) {
            var _this49 = this;

            return _t160.addEventListener(e, n, !1), function () {
              return _this49.removeEventListener(_t160, e, n);
            };
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(_t161, e, n) {
            return _t161.removeEventListener(e, n);
          }
        }]);

        return t;
      }(kl);

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(hl));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Rl = ["alt", "control", "meta", "shift"],
        Fl = {
      "\b": "Backspace",
      "\t": "Tab",
      "\x7f": "Delete",
      "\x1b": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS"
    },
        Ll = {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5",
      F: "6",
      G: "7",
      H: "8",
      I: "9",
      J: "*",
      K: "+",
      M: "-",
      N: ".",
      O: "/",
      "`": "0",
      "\x90": "NumLock"
    },
        Bl = {
      alt: function alt(t) {
        return t.altKey;
      },
      control: function control(t) {
        return t.ctrlKey;
      },
      meta: function meta(t) {
        return t.metaKey;
      },
      shift: function shift(t) {
        return t.shiftKey;
      }
    };

    var Zl = function () {
      var t = /*#__PURE__*/function (_kl2) {
        _inherits(t, _kl2);

        var _super29 = _createSuper(t);

        function t(_t162) {
          _classCallCheck(this, t);

          return _super29.call(this, _t162);
        }

        _createClass(t, [{
          key: "supports",
          value: function supports(e) {
            return null != t.parseEventName(e);
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(e, n, r) {
            var s = t.parseEventName(n),
                o = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
              return cl().onAndCancel(e, s.domEventName, o);
            });
          }
        }], [{
          key: "parseEventName",
          value: function parseEventName(e) {
            var n = e.toLowerCase().split("."),
                r = n.shift();
            if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;

            var s = t._normalizeKey(n.pop());

            var o = "";
            if (Rl.forEach(function (_t163) {
              var e = n.indexOf(_t163);
              e > -1 && (n.splice(e, 1), o += _t163 + ".");
            }), o += s, 0 != n.length || 0 === s.length) return null;
            var i = {};
            return i.domEventName = r, i.fullKey = o, i;
          }
        }, {
          key: "getEventFullKey",
          value: function getEventFullKey(_t164) {
            var e = "",
                n = function (t) {
              var e = t.key;

              if (null == e) {
                if (e = t.keyIdentifier, null == e) return "Unidentified";
                e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Ll.hasOwnProperty(e) && (e = Ll[e]));
              }

              return Fl[e] || e;
            }(_t164);

            return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Rl.forEach(function (r) {
              r != n && (0, Bl[r])(_t164) && (e += r + ".");
            }), e += n, e;
          }
        }, {
          key: "eventCallback",
          value: function eventCallback(e, n, r) {
            return function (s) {
              t.getEventFullKey(s) === e && r.runGuarded(function () {
                return n(s);
              });
            };
          }
        }, {
          key: "_normalizeKey",
          value: function _normalizeKey(_t165) {
            switch (_t165) {
              case "esc":
                return "escape";

              default:
                return _t165;
            }
          }
        }]);

        return t;
      }(kl);

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(hl));
      }, t.ɵprov = it({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var $l = tl(il, "browser", [{
      provide: Ai,
      useValue: "browser"
    }, {
      provide: Ei,
      useValue: function useValue() {
        yl.makeCurrent(), wl.init();
      },
      multi: !0
    }, {
      provide: hl,
      useFactory: function useFactory() {
        return function (t) {
          le = t;
        }(document), document;
      },
      deps: []
    }]),
        Ul = [[], {
      provide: bs,
      useValue: "root"
    }, {
      provide: Gn,
      useFactory: function useFactory() {
        return new Gn();
      },
      deps: []
    }, {
      provide: El,
      useClass: Nl,
      multi: !0,
      deps: [hl, Fi, Ai]
    }, {
      provide: El,
      useClass: Zl,
      multi: !0,
      deps: [hl]
    }, [], {
      provide: Pl,
      useClass: Pl,
      deps: [Al, Sl, bi]
    }, {
      provide: Mo,
      useExisting: Pl
    }, {
      provide: xl,
      useExisting: Sl
    }, {
      provide: Sl,
      useClass: Sl,
      deps: [hl]
    }, {
      provide: Wi,
      useClass: Wi,
      deps: [Fi]
    }, {
      provide: Al,
      useClass: Al,
      deps: [El, Fi]
    }, {
      provide: function provide() {
        _classCallCheck(this, provide);
      },
      useClass: Cl,
      deps: []
    }, []];

    var zl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t166) {
          _classCallCheck(this, t);

          if (_t166) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }

        _createClass(t, null, [{
          key: "withServerTransition",
          value: function withServerTransition(e) {
            return {
              ngModule: t,
              providers: [{
                provide: bi,
                useValue: e.appId
              }, {
                provide: vl,
                useExisting: bi
              }, bl]
            };
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Rn(t, 12));
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        providers: Ul,
        imports: [_l, ul]
      }), t;
    }();

    function Wl(t, e) {
      return new m(function (n) {
        var r = t.length;
        if (0 === r) return void n.complete();
        var s = new Array(r);
        var o = 0,
            i = 0;

        var _loop3 = function _loop3(_l22) {
          var u = j(t[_l22]);
          var a = !1;
          n.add(u.subscribe({
            next: function next(t) {
              a || (a = !0, i++), s[_l22] = t;
            },
            error: function error(t) {
              return n.error(t);
            },
            complete: function complete() {
              o++, o !== r && a || (i === r && n.next(e ? e.reduce(function (t, e, n) {
                return t[e] = s[n], t;
              }, {}) : s), n.complete());
            }
          }));
        };

        for (var _l22 = 0; _l22 < r; _l22++) {
          _loop3(_l22);
        }
      });
    }

    "undefined" != typeof window && window;

    var Ql = function () {
      var t = /*#__PURE__*/function () {
        function t(_t167, e) {
          _classCallCheck(this, t);

          this._renderer = _t167, this._elementRef = e, this.onChange = function (_t168) {}, this.onTouched = function () {};
        }

        _createClass(t, [{
          key: "setProperty",
          value: function setProperty(_t169, e) {
            this._renderer.setProperty(this._elementRef.nativeElement, _t169, e);
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(_t170) {
            this.onTouched = _t170;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(_t171) {
            this.onChange = _t171;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(_t172) {
            this.setProperty("disabled", _t172);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(zs(Ho), zs(jo));
      }, t.ɵdir = $t({
        type: t
      }), t;
    }(),
        ql = function () {
      var t = /*#__PURE__*/function (_Ql) {
        _inherits(t, _Ql);

        var _super30 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super30.apply(this, arguments);
        }

        return t;
      }(Ql);

      return t.ɵfac = function () {
        var e;
        return function (n) {
          return (e || (r = t, e = vt(function () {
            var t = r.prototype.constructor,
                e = t[jt] || Cn(t),
                n = Object.prototype;
            var s = Object.getPrototypeOf(r.prototype).constructor;

            for (; s && s !== n;) {
              var _t173 = s[jt] || Cn(s);

              if (_t173 && _t173 !== e) return _t173;
              s = Object.getPrototypeOf(s);
            }

            return function (t) {
              return new t();
            };
          })))(n || t);
          var r;
        };
      }(), t.ɵdir = $t({
        type: t,
        features: [Ms]
      }), t;
    }();

    var Gl = new kn("NgValueAccessor"),
        Jl = {
      provide: Gl,
      useExisting: X(function () {
        return Yl;
      }),
      multi: !0
    },
        Kl = new kn("CompositionEventMode");

    var Yl = function () {
      var t = /*#__PURE__*/function (_Ql2) {
        _inherits(t, _Ql2);

        var _super31 = _createSuper(t);

        function t(_t174, e, n) {
          var _this50;

          _classCallCheck(this, t);

          _this50 = _super31.call(this, _t174, e), _this50._compositionMode = n, _this50._composing = !1, null == _this50._compositionMode && (_this50._compositionMode = !function () {
            var t = cl() ? cl().getUserAgent() : "";
            return /android (\d+)/.test(t.toLowerCase());
          }());
          return _this50;
        }

        _createClass(t, [{
          key: "writeValue",
          value: function writeValue(_t175) {
            this.setProperty("value", null == _t175 ? "" : _t175);
          }
        }, {
          key: "_handleInput",
          value: function _handleInput(_t176) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(_t176);
          }
        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = !0;
          }
        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(_t177) {
            this._composing = !1, this._compositionMode && this.onChange(_t177);
          }
        }]);

        return t;
      }(Ql);

      return t.ɵfac = function (e) {
        return new (e || t)(zs(Ho), zs(jo), zs(Kl, 8));
      }, t.ɵdir = $t({
        type: t,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function hostBindings(t, e) {
          1 & t && Ys("input", function (t) {
            return e._handleInput(t.target.value);
          })("blur", function () {
            return e.onTouched();
          })("compositionstart", function () {
            return e._compositionStart();
          })("compositionend", function (t) {
            return e._compositionEnd(t.target.value);
          });
        },
        features: [So([Jl]), Ms]
      }), t;
    }();

    var Xl = new kn("NgValidators"),
        tu = new kn("NgAsyncValidators");

    function eu(t) {
      return null != t;
    }

    function nu(t) {
      var e = Js(t) ? j(t) : t;
      return Ks(e), e;
    }

    function ru(t) {
      var e = {};
      return t.forEach(function (t) {
        e = null != t ? Object.assign(Object.assign({}, e), t) : e;
      }), 0 === Object.keys(e).length ? null : e;
    }

    function su(t, e) {
      return e.map(function (e) {
        return e(t);
      });
    }

    function ou(t) {
      return t.map(function (t) {
        return function (t) {
          return !t.validate;
        }(t) ? t : function (e) {
          return t.validate(e);
        };
      });
    }

    function iu(t) {
      return null != t ? function (t) {
        if (!t) return null;
        var e = t.filter(eu);
        return 0 == e.length ? null : function (t) {
          return ru(su(t, e));
        };
      }(ou(t)) : null;
    }

    function lu(t) {
      return null != t ? function (t) {
        if (!t) return null;
        var e = t.filter(eu);
        return 0 == e.length ? null : function (t) {
          return function () {
            for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              t[_key5] = arguments[_key5];
            }

            if (1 === t.length) {
              var _e52 = t[0];
              if (u(_e52)) return Wl(_e52, null);

              if (a(_e52) && Object.getPrototypeOf(_e52) === Object.prototype) {
                var _t178 = Object.keys(_e52);

                return Wl(_t178.map(function (t) {
                  return _e52[t];
                }), _t178);
              }
            }

            if ("function" == typeof t[t.length - 1]) {
              var _e53 = t.pop();

              return Wl(t = 1 === t.length && u(t[0]) ? t[0] : t, null).pipe(k(function (t) {
                return _e53.apply(void 0, _toConsumableArray(t));
              }));
            }

            return Wl(t, null);
          }(su(t, e).map(nu)).pipe(k(ru));
        };
      }(ou(t)) : null;
    }

    function uu(t, e) {
      return null === t ? [e] : Array.isArray(t) ? [].concat(_toConsumableArray(t), [e]) : [t, e];
    }

    function au(t) {
      return t._rawValidators;
    }

    function cu(t) {
      return t._rawAsyncValidators;
    }

    var hu = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._rawValidators = [], this._rawAsyncValidators = [], this._onDestroyCallbacks = [];
        }

        _createClass(t, [{
          key: "value",
          get: function get() {
            return this.control ? this.control.value : null;
          }
        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }, {
          key: "_setValidators",
          value: function _setValidators(_t179) {
            this._rawValidators = _t179 || [], this._composedValidatorFn = iu(this._rawValidators);
          }
        }, {
          key: "_setAsyncValidators",
          value: function _setAsyncValidators(_t180) {
            this._rawAsyncValidators = _t180 || [], this._composedAsyncValidatorFn = lu(this._rawAsyncValidators);
          }
        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn || null;
          }
        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn || null;
          }
        }, {
          key: "_registerOnDestroy",
          value: function _registerOnDestroy(_t181) {
            this._onDestroyCallbacks.push(_t181);
          }
        }, {
          key: "_invokeOnDestroyCallbacks",
          value: function _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(function (_t182) {
              return _t182();
            }), this._onDestroyCallbacks = [];
          }
        }, {
          key: "reset",
          value: function reset(_t183) {
            this.control && this.control.reset(_t183);
          }
        }, {
          key: "hasError",
          value: function hasError(_t184, e) {
            return !!this.control && this.control.hasError(_t184, e);
          }
        }, {
          key: "getError",
          value: function getError(_t185, e) {
            return this.control ? this.control.getError(_t185, e) : null;
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵdir = $t({
        type: t
      }), t;
    }();

    var du = /*#__PURE__*/function (_hu) {
      _inherits(du, _hu);

      var _super32 = _createSuper(du);

      function du() {
        var _this51;

        _classCallCheck(this, du);

        _this51 = _super32.apply(this, arguments), _this51._parent = null, _this51.name = null, _this51.valueAccessor = null;
        return _this51;
      }

      return du;
    }(hu);

    var fu = function () {
      var t = /*#__PURE__*/function (_ref10) {
        _inherits(t, _ref10);

        var _super33 = _createSuper(t);

        function t(_t186) {
          _classCallCheck(this, t);

          return _super33.call(this, _t186);
        }

        return t;
      }( /*#__PURE__*/function () {
        function _class7(t) {
          _classCallCheck(this, _class7);

          this._cd = t;
        }

        _createClass(_class7, [{
          key: "is",
          value: function is(t) {
            var e, n, r;
            return "submitted" === t ? !!(null === (e = this._cd) || void 0 === e ? void 0 : e.submitted) : !!(null === (r = null === (n = this._cd) || void 0 === n ? void 0 : n.control) || void 0 === r ? void 0 : r[t]);
          }
        }]);

        return _class7;
      }());

      return t.ɵfac = function (e) {
        return new (e || t)(zs(du, 2));
      }, t.ɵdir = $t({
        type: t,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function hostBindings(t, e) {
          2 & t && ro("ng-untouched", e.is("untouched"))("ng-touched", e.is("touched"))("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))("ng-valid", e.is("valid"))("ng-invalid", e.is("invalid"))("ng-pending", e.is("pending"));
        },
        features: [Ms]
      }), t;
    }();

    function pu(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

      var r = function r() {};

      e.valueAccessor && (e.valueAccessor.registerOnChange(r), e.valueAccessor.registerOnTouched(r)), function (t, e) {
        var n = !1;

        if (null !== t) {
          if (null !== e.validator) {
            var _r54 = au(t);

            if (Array.isArray(_r54) && _r54.length > 0) {
              var _s38 = _r54.filter(function (t) {
                return t !== e.validator;
              });

              _s38.length !== _r54.length && (n = !0, t.setValidators(_s38));
            }
          }

          if (null !== e.asyncValidator) {
            var _r55 = cu(t);

            if (Array.isArray(_r55) && _r55.length > 0) {
              var _s39 = _r55.filter(function (t) {
                return t !== e.asyncValidator;
              });

              _s39.length !== _r55.length && (n = !0, t.setAsyncValidators(_s39));
            }
          }
        }

        var r = function r() {};

        _u(e._rawValidators, r), _u(e._rawAsyncValidators, r);
      }(t, e), t && (e._invokeOnDestroyCallbacks(), t._registerOnCollectionChange(function () {}));
    }

    function _u(t, e) {
      t.forEach(function (t) {
        t.registerOnValidatorChange && t.registerOnValidatorChange(e);
      });
    }

    function yu(t, e) {
      t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
        emitModelToViewChange: !1
      }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1;
    }

    function gu(t, e) {
      var n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    }

    var mu = "VALID",
        vu = "INVALID",
        bu = "PENDING",
        wu = "DISABLED";

    function Cu(t) {
      return (xu(t) ? t.validators : t) || null;
    }

    function Eu(t) {
      return Array.isArray(t) ? iu(t) : t || null;
    }

    function Au(t, e) {
      return (xu(e) ? e.asyncValidators : t) || null;
    }

    function ku(t) {
      return Array.isArray(t) ? lu(t) : t || null;
    }

    function xu(t) {
      return null != t && !Array.isArray(t) && "object" == _typeof(t);
    }

    var Su = /*#__PURE__*/function () {
      function Su(t, e) {
        _classCallCheck(this, Su);

        this._hasOwnPendingAsyncValidator = !1, this._onCollectionChange = function () {}, this._parent = null, this.pristine = !0, this.touched = !1, this._onDisabledChange = [], this._rawValidators = t, this._rawAsyncValidators = e, this._composedValidatorFn = Eu(this._rawValidators), this._composedAsyncValidatorFn = ku(this._rawAsyncValidators);
      }

      _createClass(Su, [{
        key: "validator",
        get: function get() {
          return this._composedValidatorFn;
        },
        set: function set(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
      }, {
        key: "asyncValidator",
        get: function get() {
          return this._composedAsyncValidatorFn;
        },
        set: function set(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
      }, {
        key: "valid",
        get: function get() {
          return this.status === mu;
        }
      }, {
        key: "invalid",
        get: function get() {
          return this.status === vu;
        }
      }, {
        key: "pending",
        get: function get() {
          return this.status == bu;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.status === wu;
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.status !== wu;
        }
      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
        }
      }, {
        key: "setValidators",
        value: function setValidators(t) {
          this._rawValidators = t, this._composedValidatorFn = Eu(t);
        }
      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(t) {
          this._rawAsyncValidators = t, this._composedAsyncValidatorFn = ku(t);
        }
      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: !0
          }), this._forEachChild(function (t) {
            return t.markAllAsTouched();
          });
        }
      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = !1, this._pendingTouched = !1, this._forEachChild(function (t) {
            t.markAsUntouched({
              onlySelf: !0
            });
          }), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function (t) {
            t.markAsPristine({
              onlySelf: !0
            });
          }), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.status = bu, !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
      }, {
        key: "disable",
        value: function disable() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var e = this._parentMarkedDirty(t.onlySelf);

          this.status = wu, this.errors = null, this._forEachChild(function (e) {
            e.disable(Object.assign(Object.assign({}, t), {
              onlySelf: !0
            }));
          }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, t), {
            skipPristineCheck: e
          })), this._onDisabledChange.forEach(function (t) {
            return t(!0);
          });
        }
      }, {
        key: "enable",
        value: function enable() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var e = this._parentMarkedDirty(t.onlySelf);

          this.status = mu, this._forEachChild(function (e) {
            e.enable(Object.assign(Object.assign({}, t), {
              onlySelf: !0
            }));
          }), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
          }), this._updateAncestors(Object.assign(Object.assign({}, t), {
            skipPristineCheck: e
          })), this._onDisabledChange.forEach(function (t) {
            return t(!1);
          });
        }
      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(t) {
          this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched());
        }
      }, {
        key: "setParent",
        value: function setParent(t) {
          this._parent = t;
        }
      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), this.status !== mu && this.status !== bu || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
        }
      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: !0
          };
          this._forEachChild(function (e) {
            return e._updateTreeValidity(t);
          }), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
          });
        }
      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          this.status = this._allControlsDisabled() ? wu : mu;
        }
      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(t) {
          var _this52 = this;

          if (this.asyncValidator) {
            this.status = bu, this._hasOwnPendingAsyncValidator = !0;

            var _e54 = nu(this.asyncValidator(this));

            this._asyncValidationSubscription = _e54.subscribe(function (e) {
              _this52._hasOwnPendingAsyncValidator = !1, _this52.setErrors(e, {
                emitEvent: t
              });
            });
          }
        }
      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(), this._hasOwnPendingAsyncValidator = !1);
        }
      }, {
        key: "setErrors",
        value: function setErrors(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent);
        }
      }, {
        key: "get",
        value: function get(t) {
          return function (t, e, n) {
            if (null == e) return null;
            if (Array.isArray(e) || (e = e.split(".")), Array.isArray(e) && 0 === e.length) return null;
            var r = t;
            return e.forEach(function (t) {
              r = r instanceof Vu ? r.controls.hasOwnProperty(t) ? r.controls[t] : null : r instanceof Iu && r.at(t) || null;
            }), r;
          }(this, t);
        }
      }, {
        key: "getError",
        value: function getError(t, e) {
          var n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
      }, {
        key: "hasError",
        value: function hasError(t, e) {
          return !!this.getError(t, e);
        }
      }, {
        key: "root",
        get: function get() {
          var t = this;

          for (; t._parent;) {
            t = t._parent;
          }

          return t;
        }
      }, {
        key: "_updateControlsErrors",
        value: function _updateControlsErrors(t) {
          this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t);
        }
      }, {
        key: "_initObservables",
        value: function _initObservables() {
          this.valueChanges = new gi(), this.statusChanges = new gi();
        }
      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          return this._allControlsDisabled() ? wu : this.errors ? vu : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(bu) ? bu : this._anyControlsHaveStatus(vu) ? vu : mu;
        }
      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(t) {
          return this._anyControls(function (e) {
            return e.status === t;
          });
        }
      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(function (t) {
            return t.dirty;
          });
        }
      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(function (t) {
            return t.touched;
          });
        }
      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(t) {
          return "object" == _typeof(t) && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t;
        }
      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(t) {
          xu(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(t) {
          return !t && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
        }
      }]);

      return Su;
    }();

    var Tu = /*#__PURE__*/function (_Su) {
      _inherits(Tu, _Su);

      var _super34 = _createSuper(Tu);

      function Tu() {
        var _this53;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 ? arguments[1] : undefined;
        var n = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, Tu);

        _this53 = _super34.call(this, Cu(e), Au(n, e)), _this53._onChange = [], _this53._applyFormState(t), _this53._setUpdateStrategy(e), _this53._initObservables(), _this53.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!_this53.asyncValidator
        });
        return _this53;
      }

      _createClass(Tu, [{
        key: "setValue",
        value: function setValue(t) {
          var _this54 = this;

          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(function (t) {
            return t(_this54.value, !1 !== e.emitViewToModelChange);
          }), this.updateValueAndValidity(e);
        }
      }, {
        key: "patchValue",
        value: function patchValue(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(t, e);
        }
      }, {
        key: "reset",
        value: function reset() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1;
        }
      }, {
        key: "_updateValue",
        value: function _updateValue() {}
      }, {
        key: "_anyControls",
        value: function _anyControls(t) {
          return !1;
        }
      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(t) {
          this._onChange.push(t);
        }
      }, {
        key: "_unregisterOnChange",
        value: function _unregisterOnChange(t) {
          gu(this._onChange, t);
        }
      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
      }, {
        key: "_unregisterOnDisabledChange",
        value: function _unregisterOnDisabledChange(t) {
          gu(this._onDisabledChange, t);
        }
      }, {
        key: "_forEachChild",
        value: function _forEachChild(t) {}
      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
          }), 0));
        }
      }, {
        key: "_applyFormState",
        value: function _applyFormState(t) {
          this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
          }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
          })) : this.value = this._pendingValue = t;
        }
      }]);

      return Tu;
    }(Su);

    var Vu = /*#__PURE__*/function (_Su2) {
      _inherits(Vu, _Su2);

      var _super35 = _createSuper(Vu);

      function Vu(t, e, n) {
        var _this55;

        _classCallCheck(this, Vu);

        _this55 = _super35.call(this, Cu(e), Au(n, e)), _this55.controls = t, _this55._initObservables(), _this55._setUpdateStrategy(e), _this55._setUpControls(), _this55.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!_this55.asyncValidator
        });
        return _this55;
      }

      _createClass(Vu, [{
        key: "registerControl",
        value: function registerControl(t, e) {
          return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
      }, {
        key: "addControl",
        value: function addControl(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.registerControl(t, e), this.updateValueAndValidity({
            emitEvent: n.emitEvent
          }), this._onCollectionChange();
        }
      }, {
        key: "removeControl",
        value: function removeControl(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], this.updateValueAndValidity({
            emitEvent: e.emitEvent
          }), this._onCollectionChange();
        }
      }, {
        key: "setControl",
        value: function setControl(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity({
            emitEvent: n.emitEvent
          }), this._onCollectionChange();
        }
      }, {
        key: "contains",
        value: function contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
      }, {
        key: "setValue",
        value: function setValue(t) {
          var _this56 = this;

          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this._checkAllValuesPresent(t), Object.keys(t).forEach(function (n) {
            _this56._throwIfControlMissing(n), _this56.controls[n].setValue(t[n], {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this.updateValueAndValidity(e);
        }
      }, {
        key: "patchValue",
        value: function patchValue(t) {
          var _this57 = this;

          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          null != t && (Object.keys(t).forEach(function (n) {
            _this57.controls[n] && _this57.controls[n].patchValue(t[n], {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this.updateValueAndValidity(e));
        }
      }, {
        key: "reset",
        value: function reset() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this._forEachChild(function (n, r) {
            n.reset(t[r], {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e);
        }
      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({}, function (t, e, n) {
            return t[n] = e instanceof Tu ? e.value : e.getRawValue(), t;
          });
        }
      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var t = this._reduceChildren(!1, function (t, e) {
            return !!e._syncPendingControls() || t;
          });

          return t && this.updateValueAndValidity({
            onlySelf: !0
          }), t;
        }
      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          if (!this.controls[t]) throw new Error("Cannot find form control with name: ".concat(t, "."));
        }
      }, {
        key: "_forEachChild",
        value: function _forEachChild(t) {
          var _this58 = this;

          Object.keys(this.controls).forEach(function (e) {
            var n = _this58.controls[e];
            n && t(n, e);
          });
        }
      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this59 = this;

          this._forEachChild(function (t) {
            t.setParent(_this59), t._registerOnCollectionChange(_this59._onCollectionChange);
          });
        }
      }, {
        key: "_updateValue",
        value: function _updateValue() {
          this.value = this._reduceValue();
        }
      }, {
        key: "_anyControls",
        value: function _anyControls(t) {
          for (var _i31 = 0, _Object$keys = Object.keys(this.controls); _i31 < _Object$keys.length; _i31++) {
            var _e55 = _Object$keys[_i31];
            var _n73 = this.controls[_e55];
            if (this.contains(_e55) && t(_n73)) return !0;
          }

          return !1;
        }
      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this60 = this;

          return this._reduceChildren({}, function (t, e, n) {
            return (e.enabled || _this60.disabled) && (t[n] = e.value), t;
          });
        }
      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(t, e) {
          var n = t;
          return this._forEachChild(function (t, r) {
            n = e(n, t, r);
          }), n;
        }
      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i32 = 0, _Object$keys2 = Object.keys(this.controls); _i32 < _Object$keys2.length; _i32++) {
            var _t187 = _Object$keys2[_i32];
            if (this.controls[_t187].enabled) return !1;
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(t) {
          this._forEachChild(function (e, n) {
            if (void 0 === t[n]) throw new Error("Must supply a value for form control with name: '".concat(n, "'."));
          });
        }
      }]);

      return Vu;
    }(Su);

    var Iu = /*#__PURE__*/function (_Su3) {
      _inherits(Iu, _Su3);

      var _super36 = _createSuper(Iu);

      function Iu(t, e, n) {
        var _this61;

        _classCallCheck(this, Iu);

        _this61 = _super36.call(this, Cu(e), Au(n, e)), _this61.controls = t, _this61._initObservables(), _this61._setUpdateStrategy(e), _this61._setUpControls(), _this61.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!_this61.asyncValidator
        });
        return _this61;
      }

      _createClass(Iu, [{
        key: "at",
        value: function at(t) {
          return this.controls[t];
        }
      }, {
        key: "push",
        value: function push(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.controls.push(t), this._registerControl(t), this.updateValueAndValidity({
            emitEvent: e.emitEvent
          }), this._onCollectionChange();
        }
      }, {
        key: "insert",
        value: function insert(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity({
            emitEvent: n.emitEvent
          });
        }
      }, {
        key: "removeAt",
        value: function removeAt(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), this.controls.splice(t, 1), this.updateValueAndValidity({
            emitEvent: e.emitEvent
          });
        }
      }, {
        key: "setControl",
        value: function setControl(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity({
            emitEvent: n.emitEvent
          }), this._onCollectionChange();
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }, {
        key: "setValue",
        value: function setValue(t) {
          var _this62 = this;

          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this._checkAllValuesPresent(t), t.forEach(function (t, n) {
            _this62._throwIfControlMissing(n), _this62.at(n).setValue(t, {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this.updateValueAndValidity(e);
        }
      }, {
        key: "patchValue",
        value: function patchValue(t) {
          var _this63 = this;

          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          null != t && (t.forEach(function (t, n) {
            _this63.at(n) && _this63.at(n).patchValue(t, {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this.updateValueAndValidity(e));
        }
      }, {
        key: "reset",
        value: function reset() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this._forEachChild(function (n, r) {
            n.reset(t[r], {
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
          }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e);
        }
      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(function (t) {
            return t instanceof Tu ? t.value : t.getRawValue();
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.controls.length < 1 || (this._forEachChild(function (t) {
            return t._registerOnCollectionChange(function () {});
          }), this.controls.splice(0), this.updateValueAndValidity({
            emitEvent: t.emitEvent
          }));
        }
      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var t = this.controls.reduce(function (t, e) {
            return !!e._syncPendingControls() || t;
          }, !1);
          return t && this.updateValueAndValidity({
            onlySelf: !0
          }), t;
        }
      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(t) {
          if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          if (!this.at(t)) throw new Error("Cannot find form control at index ".concat(t));
        }
      }, {
        key: "_forEachChild",
        value: function _forEachChild(t) {
          this.controls.forEach(function (e, n) {
            t(e, n);
          });
        }
      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this64 = this;

          this.value = this.controls.filter(function (t) {
            return t.enabled || _this64.disabled;
          }).map(function (t) {
            return t.value;
          });
        }
      }, {
        key: "_anyControls",
        value: function _anyControls(t) {
          return this.controls.some(function (e) {
            return e.enabled && t(e);
          });
        }
      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this65 = this;

          this._forEachChild(function (t) {
            return _this65._registerControl(t);
          });
        }
      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(t) {
          this._forEachChild(function (e, n) {
            if (void 0 === t[n]) throw new Error("Must supply a value for form control at index: ".concat(n, "."));
          });
        }
      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iterator4 = _createForOfIteratorHelper(this.controls),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _t188 = _step4.value;
              if (_t188.enabled) return !1;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return this.controls.length > 0 || this.disabled;
        }
      }, {
        key: "_registerControl",
        value: function _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }]);

      return Iu;
    }(Su);

    var Ou = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({}), t;
    }();

    var Du = new kn("NgModelWithFormControlWarning"),
        Pu = {
      provide: du,
      useExisting: X(function () {
        return ju;
      })
    };

    var ju = function () {
      var t = /*#__PURE__*/function (_du) {
        _inherits(t, _du);

        var _super37 = _createSuper(t);

        function t(_t189, e, n, r) {
          var _this66;

          _classCallCheck(this, t);

          _this66 = _super37.call(this), _this66._ngModelWarningConfig = r, _this66.update = new gi(), _this66._ngModelWarningSent = !1, _this66._setValidators(_t189), _this66._setAsyncValidators(e), _this66.valueAccessor = function (t, e) {
            if (!e) return null;
            var n, r, s;
            return Array.isArray(e), e.forEach(function (t) {
              t.constructor === Yl ? n = t : Object.getPrototypeOf(t.constructor) === ql ? r = t : s = t;
            }), s || r || n || null;
          }(0, n);
          return _this66;
        }

        _createClass(t, [{
          key: "isDisabled",
          set: function set(_t190) {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_t191) {
            if (this._isControlChanged(_t191)) {
              var _r56 = _t191.form.previousValue;
              _r56 && pu(_r56, this, !1), function (t, e) {
                var n = au(t);
                null !== e.validator ? t.setValidators(uu(n, e.validator)) : "function" == typeof n && t.setValidators([n]);
                var r = cu(t);
                null !== e.asyncValidator ? t.setAsyncValidators(uu(r, e.asyncValidator)) : "function" == typeof r && t.setAsyncValidators([r]);

                var s = function s() {
                  return t.updateValueAndValidity();
                };

                _u(e._rawValidators, s), _u(e._rawAsyncValidators, s);
              }(e = this.form, n = this), n.valueAccessor.writeValue(e.value), function (t, e) {
                e.valueAccessor.registerOnChange(function (n) {
                  t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && yu(t, e);
                });
              }(e, n), function (t, e) {
                var n = function n(t, _n74) {
                  e.valueAccessor.writeValue(t), _n74 && e.viewToModelUpdate(t);
                };

                t.registerOnChange(n), e._registerOnDestroy(function () {
                  t._unregisterOnChange(n);
                });
              }(e, n), function (t, e) {
                e.valueAccessor.registerOnTouched(function () {
                  t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && yu(t, e), "submit" !== t.updateOn && t.markAsTouched();
                });
              }(e, n), function (t, e) {
                if (e.valueAccessor.setDisabledState) {
                  var _n75 = function _n75(t) {
                    e.valueAccessor.setDisabledState(t);
                  };

                  t.registerOnDisabledChange(_n75), e._registerOnDestroy(function () {
                    t._unregisterOnDisabledChange(_n75);
                  });
                }
              }(e, n), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this.form.updateValueAndValidity({
                emitEvent: !1
              });
            }

            var e, n;
            (function (t, e) {
              if (!t.hasOwnProperty("model")) return !1;
              var n = t.model;
              return !!n.isFirstChange() || !Object.is(e, n.currentValue);
            })(_t191, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.form && pu(this.form, this, !1);
          }
        }, {
          key: "path",
          get: function get() {
            return [];
          }
        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(_t192) {
            this.viewModel = _t192, this.update.emit(_t192);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(_t193) {
            return _t193.hasOwnProperty("form");
          }
        }]);

        return t;
      }(du);

      return t.ɵfac = function (e) {
        return new (e || t)(zs(Xl, 10), zs(tu, 10), zs(Gl, 10), zs(Du, 8));
      }, t.ɵdir = $t({
        type: t,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [So([Pu]), Ms, ne]
      }), t._ngModelWarningSentOnce = !1, t;
    }(),
        Mu = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        imports: [[Ou]]
      }), t;
    }(),
        Hu = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        imports: [Mu]
      }), t;
    }(),
        Nu = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, null, [{
          key: "withConfig",
          value: function withConfig(e) {
            return {
              ngModule: t,
              providers: [{
                provide: Du,
                useValue: e.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t
      }), t.ɵinj = lt({
        imports: [Mu]
      }), t;
    }(),
        Ru = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.message = "please input your name:", this.input = new Tu("noname");
          }
        }, {
          key: "doAction",
          value: function doAction() {
            this.message = "Hello, " + this.input.value + "!!";
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵcmp = Nt({
        type: t,
        selectors: [["app-my"]],
        decls: 6,
        vars: 2,
        consts: [["type", "text", 3, "formControl"], [3, "click"]],
        template: function template(t, e) {
          1 & t && (qs(0, "div"), qs(1, "p"), uo(2), Gs(), qs(3, "input", 0, undefined), Gs(), qs(4, "button", 1), Ys("click", function () {
            return e.doAction();
          }), uo(5, "Click"), Gs(), Gs()), 2 & t && (Ir(2), ao(e.message), Ir(1), Ws("formControl", e.input));
        },
        directives: [Yl, fu, ju],
        styles: [""]
      }), t;
    }(),
        Fu = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Bt({
        type: t,
        bootstrap: [Ru]
      }), t.ɵinj = lt({
        providers: [],
        imports: [[zl, Hu, Nu]]
      }), t;
    }();

    (function () {
      if (Yi) throw new Error("Cannot enable prod mode after platform setup.");
      Ki = !1;
    })(), $l().bootstrapModule(Fu)["catch"](function (t) {
      return console.error(t);
    });
  }
}, function (t) {
  "use strict";

  t(t.s = 939);
}]);

/***/ }),

/***/ "./resources/ngapp/dist/ngapp/polyfills.9cecb7ad41f1b7dfcce5.js":
/*!**********************************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/polyfills.9cecb7ad41f1b7dfcce5.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e23) { throw _e23; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e24) { didErr = true; err = _e24; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(self.webpackChunkngapp = self.webpackChunkngapp || []).push([[429], {
  277: function _() {
    "use strict";

    !function (e) {
      var t = e.performance;

      function n(e) {
        t && t.mark && t.mark(e);
      }

      function o(e, n) {
        t && t.measure && t.measure(e, n);
      }

      n("Zone");
      var r = e.__Zone_symbol_prefix || "__zone_symbol__";

      function s(e) {
        return r + e;
      }

      var a = !0 === e[s("forceDuplicateZoneCheck")];

      if (e.Zone) {
        if (a || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
        return e.Zone;
      }

      var i = function () {
        var t = /*#__PURE__*/function () {
          function t(e, _t) {
            _classCallCheck(this, t);

            this._parent = e, this._name = _t ? _t.name || "unnamed" : "<root>", this._properties = _t && _t.properties || {}, this._zoneDelegate = new l(this, this._parent && this._parent._zoneDelegate, _t);
          }

          _createClass(t, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(e) {
              var _t2 = this.getZoneWith(e);

              if (_t2) return _t2._properties[e];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(e) {
              var _t3 = this;

              for (; _t3;) {
                if (_t3._properties.hasOwnProperty(e)) return _t3;
                _t3 = _t3._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(e) {
              if (!e) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, e);
            }
          }, {
            key: "wrap",
            value: function wrap(e, _t4) {
              if ("function" != typeof e) throw new Error("Expecting function got: " + e);

              var n = this._zoneDelegate.intercept(this, e, _t4),
                  o = this;

              return function () {
                return o.runGuarded(n, this, arguments, _t4);
              };
            }
          }, {
            key: "run",
            value: function run(e, _t5, n, o) {
              z = {
                parent: z,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, e, _t5, n, o);
              } finally {
                z = z.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(e) {
              var _t6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

              var n = arguments.length > 2 ? arguments[2] : undefined;
              var o = arguments.length > 3 ? arguments[3] : undefined;
              z = {
                parent: z,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, e, _t6, n, o);
                } catch (r) {
                  if (this._zoneDelegate.handleError(this, r)) throw r;
                }
              } finally {
                z = z.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(e, _t7, n) {
              if (e.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");
              if (e.state === v && (e.type === P || e.type === D)) return;
              var o = e.state != E;
              o && e._transitionTo(E, b), e.runCount++;
              var r = j;
              j = e, z = {
                parent: z,
                zone: this
              };

              try {
                e.type == D && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);

                try {
                  return this._zoneDelegate.invokeTask(this, e, _t7, n);
                } catch (s) {
                  if (this._zoneDelegate.handleError(this, s)) throw s;
                }
              } finally {
                e.state !== v && e.state !== Z && (e.type == P || e.data && e.data.isPeriodic ? o && e._transitionTo(b, E) : (e.runCount = 0, this._updateTaskCount(e, -1), o && e._transitionTo(v, E, v))), z = z.parent, j = r;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(e) {
              if (e.zone && e.zone !== this) {
                var _t15 = this;

                for (; _t15;) {
                  if (_t15 === e.zone) throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(e.zone.name));
                  _t15 = _t15.parent;
                }
              }

              e._transitionTo(T, v);

              var _t8 = [];
              e._zoneDelegates = _t8, e._zone = this;

              try {
                e = this._zoneDelegate.scheduleTask(this, e);
              } catch (n) {
                throw e._transitionTo(Z, T, v), this._zoneDelegate.handleError(this, n), n;
              }

              return e._zoneDelegates === _t8 && this._updateTaskCount(e, 1), e.state == T && e._transitionTo(b, T), e;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(e, _t10, n, o) {
              return this.scheduleTask(new u(S, e, _t10, n, o, void 0));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(e, _t11, n, o, r) {
              return this.scheduleTask(new u(D, e, _t11, n, o, r));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(e, _t12, n, o, r) {
              return this.scheduleTask(new u(P, e, _t12, n, o, r));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(e) {
              if (e.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");

              e._transitionTo(w, b, E);

              try {
                this._zoneDelegate.cancelTask(this, e);
              } catch (_t13) {
                throw e._transitionTo(Z, w), this._zoneDelegate.handleError(this, _t13), _t13;
              }

              return this._updateTaskCount(e, -1), e._transitionTo(v, w), e.runCount = 0, e;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(e, _t14) {
              var n = e._zoneDelegates;
              -1 == _t14 && (e._zoneDelegates = null);

              for (var _o = 0; _o < n.length; _o++) {
                n[_o]._updateTaskCount(e.type, _t14);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (e.Promise !== O.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
            }
          }, {
            key: "root",
            get: function get() {
              var e = t.current;

              for (; e.parent;) {
                e = e.parent;
              }

              return e;
            }
          }, {
            key: "current",
            get: function get() {
              return z.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return j;
            }
          }, {
            key: "__load_patch",
            value: function __load_patch(r, s) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

              if (O.hasOwnProperty(r)) {
                if (!i && a) throw Error("Already loaded patch: " + r);
              } else if (!e["__Zone_disable_" + r]) {
                var _a = "Zone:" + r;

                n(_a), O[r] = s(e, t, C), o(_a, _a);
              }
            }
          }]);

          return t;
        }();

        return t.__symbol__ = s, t;
      }();

      var c = {
        name: "",
        onHasTask: function onHasTask(e, t, n, o) {
          return e.hasTask(n, o);
        },
        onScheduleTask: function onScheduleTask(e, t, n, o) {
          return e.scheduleTask(n, o);
        },
        onInvokeTask: function onInvokeTask(e, t, n, o, r, s) {
          return e.invokeTask(n, o, r, s);
        },
        onCancelTask: function onCancelTask(e, t, n, o) {
          return e.cancelTask(n, o);
        }
      };

      var l = /*#__PURE__*/function () {
        function l(e, t, n) {
          _classCallCheck(this, l);

          this._taskCounts = {
            microTask: 0,
            macroTask: 0,
            eventTask: 0
          }, this.zone = e, this._parentDelegate = t, this._forkZS = n && (n && n.onFork ? n : t._forkZS), this._forkDlgt = n && (n.onFork ? t : t._forkDlgt), this._forkCurrZone = n && (n.onFork ? this.zone : t._forkCurrZone), this._interceptZS = n && (n.onIntercept ? n : t._interceptZS), this._interceptDlgt = n && (n.onIntercept ? t : t._interceptDlgt), this._interceptCurrZone = n && (n.onIntercept ? this.zone : t._interceptCurrZone), this._invokeZS = n && (n.onInvoke ? n : t._invokeZS), this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt), this._invokeCurrZone = n && (n.onInvoke ? this.zone : t._invokeCurrZone), this._handleErrorZS = n && (n.onHandleError ? n : t._handleErrorZS), this._handleErrorDlgt = n && (n.onHandleError ? t : t._handleErrorDlgt), this._handleErrorCurrZone = n && (n.onHandleError ? this.zone : t._handleErrorCurrZone), this._scheduleTaskZS = n && (n.onScheduleTask ? n : t._scheduleTaskZS), this._scheduleTaskDlgt = n && (n.onScheduleTask ? t : t._scheduleTaskDlgt), this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone), this._invokeTaskZS = n && (n.onInvokeTask ? n : t._invokeTaskZS), this._invokeTaskDlgt = n && (n.onInvokeTask ? t : t._invokeTaskDlgt), this._invokeTaskCurrZone = n && (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone), this._cancelTaskZS = n && (n.onCancelTask ? n : t._cancelTaskZS), this._cancelTaskDlgt = n && (n.onCancelTask ? t : t._cancelTaskDlgt), this._cancelTaskCurrZone = n && (n.onCancelTask ? this.zone : t._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
          var o = n && n.onHasTask;
          (o || t && t._hasTaskZS) && (this._hasTaskZS = o ? n : c, this._hasTaskDlgt = t, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = e, n.onScheduleTask || (this._scheduleTaskZS = c, this._scheduleTaskDlgt = t, this._scheduleTaskCurrZone = this.zone), n.onInvokeTask || (this._invokeTaskZS = c, this._invokeTaskDlgt = t, this._invokeTaskCurrZone = this.zone), n.onCancelTask || (this._cancelTaskZS = c, this._cancelTaskDlgt = t, this._cancelTaskCurrZone = this.zone));
        }

        _createClass(l, [{
          key: "fork",
          value: function fork(e, t) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new i(e, t);
          }
        }, {
          key: "intercept",
          value: function intercept(e, t, n) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n) : t;
          }
        }, {
          key: "invoke",
          value: function invoke(e, t, n, o, r) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, o, r) : t.apply(n, o);
          }
        }, {
          key: "handleError",
          value: function handleError(e, t) {
            return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t);
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(e, t) {
            var n = t;
            if (this._scheduleTaskZS) this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner), n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t), n || (n = t);else if (t.scheduleFn) t.scheduleFn(t);else {
              if (t.type != S) throw new Error("Task is missing scheduleFn.");
              k(t);
            }
            return n;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(e, t, n, o) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, o) : t.callback.apply(n, o);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(e, t) {
            var n;
            if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);else {
              if (!t.cancelFn) throw Error("Task is not cancelable");
              n = t.cancelFn(t);
            }
            return n;
          }
        }, {
          key: "hasTask",
          value: function hasTask(e, t) {
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t);
            } catch (n) {
              this.handleError(e, n);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(e, t) {
            var n = this._taskCounts,
                o = n[e],
                r = n[e] = o + t;
            if (r < 0) throw new Error("More tasks executed then were scheduled.");
            0 != o && 0 != r || this.hasTask(this.zone, {
              microTask: n.microTask > 0,
              macroTask: n.macroTask > 0,
              eventTask: n.eventTask > 0,
              change: e
            });
          }
        }]);

        return l;
      }();

      var u = /*#__PURE__*/function () {
        function u(t, n, o, r, s, a) {
          _classCallCheck(this, u);

          if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = n, this.data = r, this.scheduleFn = s, this.cancelFn = a, !o) throw new Error("callback is not defined");
          this.callback = o;
          var i = this;
          this.invoke = t === P && r && r.useG ? u.invokeTask : function () {
            return u.invokeTask.call(e, i, this, arguments);
          };
        }

        _createClass(u, [{
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(v, T);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(e, t, n) {
            if (this._state !== t && this._state !== n) throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(e, "', expecting state '").concat(t, "'").concat(n ? " or '" + n + "'" : "", ", was '").concat(this._state, "'."));
            this._state = e, e == v && (this._zoneDelegates = null);
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(e, t, n) {
            e || (e = this), I++;

            try {
              return e.runCount++, e.zone.runTask(e, t, n);
            } finally {
              1 == I && m(), I--;
            }
          }
        }]);

        return u;
      }();

      var h = s("setTimeout"),
          p = s("Promise"),
          f = s("then");

      var d,
          g = [],
          _ = !1;

      function k(t) {
        if (0 === I && 0 === g.length) if (d || e[p] && (d = e[p].resolve(0)), d) {
          var _e = d[f];
          _e || (_e = d.then), _e.call(d, m);
        } else e[h](m, 0);
        t && g.push(t);
      }

      function m() {
        if (!_) {
          for (_ = !0; g.length;) {
            var _t16 = g;
            g = [];

            for (var _n = 0; _n < _t16.length; _n++) {
              var _o2 = _t16[_n];

              try {
                _o2.zone.runTask(_o2, null, null);
              } catch (e) {
                C.onUnhandledError(e);
              }
            }
          }

          C.microtaskDrainDone(), _ = !1;
        }
      }

      var y = {
        name: "NO ZONE"
      },
          v = "notScheduled",
          T = "scheduling",
          b = "scheduled",
          E = "running",
          w = "canceling",
          Z = "unknown",
          S = "microTask",
          D = "macroTask",
          P = "eventTask",
          O = {},
          C = {
        symbol: s,
        currentZoneFrame: function currentZoneFrame() {
          return z;
        },
        onUnhandledError: R,
        microtaskDrainDone: R,
        scheduleMicroTask: k,
        showUncaughtError: function showUncaughtError() {
          return !i[s("ignoreConsoleErrorUncaughtError")];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: R,
        patchMethod: function patchMethod() {
          return R;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return R;
        },
        patchMacroTask: function patchMacroTask() {
          return R;
        },
        patchEventPrototype: function patchEventPrototype() {
          return R;
        },
        isIEOrEdge: function isIEOrEdge() {
          return !1;
        },
        getGlobalObjects: function getGlobalObjects() {},
        ObjectDefineProperty: function ObjectDefineProperty() {
          return R;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {},
        ObjectCreate: function ObjectCreate() {},
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return R;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return R;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return R;
        },
        _redefineProperty: function _redefineProperty() {
          return R;
        },
        patchCallbacks: function patchCallbacks() {
          return R;
        }
      };
      var z = {
        parent: null,
        zone: new i(null, null)
      },
          j = null,
          I = 0;

      function R() {}

      o("Zone", "Zone"), e.Zone = i;
    }("undefined" != typeof window && window || "undefined" != typeof self && self || __webpack_require__.g);

    var e = Object.getOwnPropertyDescriptor,
        t = Object.defineProperty,
        n = Object.getPrototypeOf,
        o = Object.create,
        r = Array.prototype.slice,
        s = "addEventListener",
        a = "removeEventListener",
        i = Zone.__symbol__(s),
        c = Zone.__symbol__(a),
        l = "true",
        u = "false",
        h = Zone.__symbol__("");

    function p(e, t) {
      return Zone.current.wrap(e, t);
    }

    function f(e, t, n, o, r) {
      return Zone.current.scheduleMacroTask(e, t, n, o, r);
    }

    var d = Zone.__symbol__,
        g = "undefined" != typeof window,
        _ = g ? window : void 0,
        k = g && _ || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || __webpack_require__.g,
        m = [null];

    function y(e, t) {
      for (var _n2 = e.length - 1; _n2 >= 0; _n2--) {
        "function" == typeof e[_n2] && (e[_n2] = p(e[_n2], t + "_" + _n2));
      }

      return e;
    }

    function v(e) {
      return !e || !1 !== e.writable && !("function" == typeof e.get && void 0 === e.set);
    }

    var T = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
        b = !("nw" in k) && void 0 !== k.process && "[object process]" === {}.toString.call(k.process),
        E = !b && !T && !(!g || !_.HTMLElement),
        w = void 0 !== k.process && "[object process]" === {}.toString.call(k.process) && !T && !(!g || !_.HTMLElement),
        Z = {},
        S = function S(e) {
      if (!(e = e || k.event)) return;
      var t = Z[e.type];
      t || (t = Z[e.type] = d("ON_PROPERTY" + e.type));
      var n = this || e.target || k,
          o = n[t];
      var r;

      if (E && n === _ && "error" === e.type) {
        var _t17 = e;
        r = o && o.call(this, _t17.message, _t17.filename, _t17.lineno, _t17.colno, _t17.error), !0 === r && e.preventDefault();
      } else r = o && o.apply(this, arguments), null == r || r || e.preventDefault();

      return r;
    };

    function D(n, o, r) {
      var s = e(n, o);
      if (!s && r && e(r, o) && (s = {
        enumerable: !0,
        configurable: !0
      }), !s || !s.configurable) return;
      var a = d("on" + o + "patched");
      if (n.hasOwnProperty(a) && n[a]) return;
      delete s.writable, delete s.value;
      var i = s.get,
          c = s.set,
          l = o.substr(2);
      var u = Z[l];
      u || (u = Z[l] = d("ON_PROPERTY" + l)), s.set = function (e) {
        var t = this;
        t || n !== k || (t = k), t && (t[u] && t.removeEventListener(l, S), c && c.apply(t, m), "function" == typeof e ? (t[u] = e, t.addEventListener(l, S, !1)) : t[u] = null);
      }, s.get = function () {
        var e = this;
        if (e || n !== k || (e = k), !e) return null;
        var t = e[u];
        if (t) return t;

        if (i) {
          var _t18 = i && i.call(this);

          if (_t18) return s.set.call(this, _t18), "function" == typeof e.removeAttribute && e.removeAttribute(o), _t18;
        }

        return null;
      }, t(n, o, s), n[a] = !0;
    }

    function P(e, t, n) {
      if (t) for (var _o3 = 0; _o3 < t.length; _o3++) {
        D(e, "on" + t[_o3], n);
      } else {
        var _t19 = [];

        for (var _n3 in e) {
          "on" == _n3.substr(0, 2) && _t19.push(_n3);
        }

        for (var _o4 = 0; _o4 < _t19.length; _o4++) {
          D(e, _t19[_o4], n);
        }
      }
    }

    var O = d("originalInstance");

    function C(e) {
      var n = k[e];
      if (!n) return;
      k[d(e)] = n, k[e] = function () {
        var t = y(arguments, e);

        switch (t.length) {
          case 0:
            this[O] = new n();
            break;

          case 1:
            this[O] = new n(t[0]);
            break;

          case 2:
            this[O] = new n(t[0], t[1]);
            break;

          case 3:
            this[O] = new n(t[0], t[1], t[2]);
            break;

          case 4:
            this[O] = new n(t[0], t[1], t[2], t[3]);
            break;

          default:
            throw new Error("Arg list too long.");
        }
      }, I(k[e], n);
      var o = new n(function () {});
      var r;

      for (r in o) {
        "XMLHttpRequest" === e && "responseBlob" === r || function (n) {
          "function" == typeof o[n] ? k[e].prototype[n] = function () {
            return this[O][n].apply(this[O], arguments);
          } : t(k[e].prototype, n, {
            set: function set(t) {
              "function" == typeof t ? (this[O][n] = p(t, e + "." + n), I(this[O][n], t)) : this[O][n] = t;
            },
            get: function get() {
              return this[O][n];
            }
          });
        }(r);
      }

      for (r in n) {
        "prototype" !== r && n.hasOwnProperty(r) && (k[e][r] = n[r]);
      }
    }

    function z(t, o, r) {
      var s = t;

      for (; s && !s.hasOwnProperty(o);) {
        s = n(s);
      }

      !s && t[o] && (s = t);
      var a = d(o);
      var i = null;

      if (s && (!(i = s[a]) || !s.hasOwnProperty(a)) && (i = s[a] = s[o], v(s && e(s, o)))) {
        var _e2 = r(i, a, o);

        s[o] = function () {
          return _e2(this, arguments);
        }, I(s[o], i);
      }

      return i;
    }

    function j(e, t, n) {
      var o = null;

      function r(e) {
        var t = e.data;
        return t.args[t.cbIdx] = function () {
          e.invoke.apply(this, arguments);
        }, o.apply(t.target, t.args), e;
      }

      o = z(e, t, function (e) {
        return function (t, o) {
          var s = n(t, o);
          return s.cbIdx >= 0 && "function" == typeof o[s.cbIdx] ? f(s.name, o[s.cbIdx], s, r) : e.apply(t, o);
        };
      });
    }

    function I(e, t) {
      e[d("OriginalDelegate")] = t;
    }

    var R = !1,
        M = !1;

    function N() {
      try {
        var _e3 = _.navigator.userAgent;
        if (-1 !== _e3.indexOf("MSIE ") || -1 !== _e3.indexOf("Trident/")) return !0;
      } catch (e) {}

      return !1;
    }

    function x() {
      if (R) return M;
      R = !0;

      try {
        var _e4 = _.navigator.userAgent;
        -1 === _e4.indexOf("MSIE ") && -1 === _e4.indexOf("Trident/") && -1 === _e4.indexOf("Edge/") || (M = !0);
      } catch (e) {}

      return M;
    }

    Zone.__load_patch("ZoneAwarePromise", function (e, t, n) {
      var o = Object.getOwnPropertyDescriptor,
          r = Object.defineProperty,
          s = n.symbol,
          a = [],
          i = !0 === e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          c = s("Promise"),
          l = s("then");
      n.onUnhandledError = function (e) {
        if (n.showUncaughtError()) {
          var _t20 = e && e.rejection;

          _t20 ? console.error("Unhandled Promise rejection:", _t20 instanceof Error ? _t20.message : _t20, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", _t20, _t20 instanceof Error ? _t20.stack : void 0) : console.error(e);
        }
      }, n.microtaskDrainDone = function () {
        var _loop = function _loop() {
          var t = a.shift();

          try {
            t.zone.runGuarded(function () {
              if (t.throwOriginal) throw t.rejection;
              throw t;
            });
          } catch (e) {
            h(e);
          }
        };

        for (; a.length;) {
          _loop();
        }
      };
      var u = s("unhandledPromiseRejectionHandler");

      function h(e) {
        n.onUnhandledError(e);

        try {
          var _n4 = t[u];
          "function" == typeof _n4 && _n4.call(this, e);
        } catch (o) {}
      }

      function p(e) {
        return e && e.then;
      }

      function f(e) {
        return e;
      }

      function d(e) {
        return C.reject(e);
      }

      var g = s("state"),
          _ = s("value"),
          k = s("finally"),
          m = s("parentPromiseValue"),
          y = s("parentPromiseState"),
          v = null,
          T = !0,
          b = !1;

      function E(e, t) {
        return function (n) {
          try {
            Z(e, t, n);
          } catch (o) {
            Z(e, !1, o);
          }
        };
      }

      var w = s("currentTaskTrace");

      function Z(e, o, s) {
        var c = function () {
          var e = !1;
          return function (t) {
            return function () {
              e || (e = !0, t.apply(null, arguments));
            };
          };
        }();

        if (e === s) throw new TypeError("Promise resolved with itself");

        if (e[g] === v) {
          var _h = null;

          try {
            "object" != _typeof(s) && "function" != typeof s || (_h = s && s.then);
          } catch (u) {
            return c(function () {
              Z(e, !1, u);
            })(), e;
          }

          if (o !== b && s instanceof C && s.hasOwnProperty(g) && s.hasOwnProperty(_) && s[g] !== v) D(s), Z(e, s[g], s[_]);else if (o !== b && "function" == typeof _h) try {
            _h.call(s, c(E(e, o)), c(E(e, !1)));
          } catch (u) {
            c(function () {
              Z(e, !1, u);
            })();
          } else {
            e[g] = o;
            var _c = e[_];

            if (e[_] = s, e[k] === k && o === T && (e[g] = e[y], e[_] = e[m]), o === b && s instanceof Error) {
              var _e5 = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;

              _e5 && r(s, w, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: _e5
              });
            }

            for (var _t21 = 0; _t21 < _c.length;) {
              P(e, _c[_t21++], _c[_t21++], _c[_t21++], _c[_t21++]);
            }

            if (0 == _c.length && o == b) {
              e[g] = 0;
              var _o5 = s;

              try {
                throw new Error("Uncaught (in promise): " + ((l = s) && l.toString === Object.prototype.toString ? (l.constructor && l.constructor.name || "") + ": " + JSON.stringify(l) : l ? l.toString() : Object.prototype.toString.call(l)) + (s && s.stack ? "\n" + s.stack : ""));
              } catch (u) {
                _o5 = u;
              }

              i && (_o5.throwOriginal = !0), _o5.rejection = s, _o5.promise = e, _o5.zone = t.current, _o5.task = t.currentTask, a.push(_o5), n.scheduleMicroTask();
            }
          }
        }

        var l;
        return e;
      }

      var S = s("rejectionHandledHandler");

      function D(e) {
        if (0 === e[g]) {
          try {
            var _n5 = t[S];
            _n5 && "function" == typeof _n5 && _n5.call(this, {
              rejection: e[_],
              promise: e
            });
          } catch (n) {}

          e[g] = b;

          for (var _t22 = 0; _t22 < a.length; _t22++) {
            e === a[_t22].promise && a.splice(_t22, 1);
          }
        }
      }

      function P(e, t, n, o, r) {
        D(e);
        var s = e[g],
            a = s ? "function" == typeof o ? o : f : "function" == typeof r ? r : d;
        t.scheduleMicroTask("Promise.then", function () {
          try {
            var _o6 = e[_],
                _r = !!n && k === n[k];

            _r && (n[m] = _o6, n[y] = s);

            var _i = t.run(a, void 0, _r && a !== d && a !== f ? [] : [_o6]);

            Z(n, !0, _i);
          } catch (o) {
            Z(n, !1, o);
          }
        }, n);
      }

      var O = function O() {};

      var C = /*#__PURE__*/function () {
        function C(e) {
          _classCallCheck(this, C);

          var t = this;
          if (!(t instanceof C)) throw new Error("Must be an instanceof Promise.");
          t[g] = v, t[_] = [];

          try {
            e && e(E(t, T), E(t, b));
          } catch (n) {
            Z(t, !1, n);
          }
        }

        _createClass(C, [{
          key: Symbol.toStringTag,
          get: function get() {
            return "Promise";
          }
        }, {
          key: Symbol.species,
          get: function get() {
            return C;
          }
        }, {
          key: "then",
          value: function then(e, n) {
            var o = this.constructor[Symbol.species];
            o && "function" == typeof o || (o = this.constructor || C);
            var r = new o(O),
                s = t.current;
            return this[g] == v ? this[_].push(s, r, e, n) : P(this, s, r, e, n), r;
          }
        }, {
          key: "catch",
          value: function _catch(e) {
            return this.then(null, e);
          }
        }, {
          key: "finally",
          value: function _finally(e) {
            var n = this.constructor[Symbol.species];
            n && "function" == typeof n || (n = C);
            var o = new n(O);
            o[k] = k;
            var r = t.current;
            return this[g] == v ? this[_].push(r, o, e, e) : P(this, r, o, e, e), o;
          }
        }], [{
          key: "toString",
          value: function toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
        }, {
          key: "resolve",
          value: function resolve(e) {
            return Z(new this(null), T, e);
          }
        }, {
          key: "reject",
          value: function reject(e) {
            return Z(new this(null), b, e);
          }
        }, {
          key: "race",
          value: function race(e) {
            var t,
                n,
                o = new this(function (e, o) {
              t = e, n = o;
            });

            function r(e) {
              t(e);
            }

            function s(e) {
              n(e);
            }

            var _iterator = _createForOfIteratorHelper(e),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a2 = _step.value;
                p(_a2) || (_a2 = this.resolve(_a2)), _a2.then(r, s);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return o;
          }
        }, {
          key: "all",
          value: function all(e) {
            return C.allWithCallback(e);
          }
        }, {
          key: "allSettled",
          value: function allSettled(e) {
            return (this && this.prototype instanceof C ? this : C).allWithCallback(e, {
              thenCallback: function thenCallback(e) {
                return {
                  status: "fulfilled",
                  value: e
                };
              },
              errorCallback: function errorCallback(e) {
                return {
                  status: "rejected",
                  reason: e
                };
              }
            });
          }
        }, {
          key: "allWithCallback",
          value: function allWithCallback(e, t) {
            var _this = this;

            var n,
                o,
                r = new this(function (e, t) {
              n = e, o = t;
            }),
                s = 2,
                a = 0;
            var i = [];

            var _iterator2 = _createForOfIteratorHelper(e),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var l = _step2.value;
                p(l) || (l = _this.resolve(l));
                var e = a;

                try {
                  l.then(function (o) {
                    i[e] = t ? t.thenCallback(o) : o, s--, 0 === s && n(i);
                  }, function (r) {
                    t ? (i[e] = t.errorCallback(r), s--, 0 === s && n(i)) : o(r);
                  });
                } catch (c) {
                  o(c);
                }

                s++, a++;
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return s -= 2, 0 === s && n(i), r;
          }
        }]);

        return C;
      }();

      C.resolve = C.resolve, C.reject = C.reject, C.race = C.race, C.all = C.all;
      var j = e[c] = e.Promise;
      e.Promise = C;
      var I = s("thenPatched");

      function R(e) {
        var t = e.prototype,
            n = o(t, "then");
        if (n && (!1 === n.writable || !n.configurable)) return;
        var r = t.then;
        t[l] = r, e.prototype.then = function (e, t) {
          var _this2 = this;

          return new C(function (e, t) {
            r.call(_this2, e, t);
          }).then(e, t);
        }, e[I] = !0;
      }

      return n.patchThen = R, j && (R(j), z(e, "fetch", function (e) {
        return t = e, function (e, n) {
          var o = t.apply(e, n);
          if (o instanceof C) return o;
          var r = o.constructor;
          return r[I] || R(r), o;
        };
        var t;
      })), Promise[t.__symbol__("uncaughtPromiseErrors")] = a, C;
    }), Zone.__load_patch("toString", function (e) {
      var t = Function.prototype.toString,
          n = d("OriginalDelegate"),
          o = d("Promise"),
          r = d("Error"),
          s = function s() {
        if ("function" == typeof this) {
          var _s = this[n];
          if (_s) return "function" == typeof _s ? t.call(_s) : Object.prototype.toString.call(_s);

          if (this === Promise) {
            var _n6 = e[o];
            if (_n6) return t.call(_n6);
          }

          if (this === Error) {
            var _n7 = e[r];
            if (_n7) return t.call(_n7);
          }
        }

        return t.call(this);
      };

      s[n] = t, Function.prototype.toString = s;
      var a = Object.prototype.toString;

      Object.prototype.toString = function () {
        return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : a.call(this);
      };
    });
    var L = !1;
    if ("undefined" != typeof window) try {
      var _e6 = Object.defineProperty({}, "passive", {
        get: function get() {
          L = !0;
        }
      });

      window.addEventListener("test", _e6, _e6), window.removeEventListener("test", _e6, _e6);
    } catch (he) {
      L = !1;
    }
    var A = {
      useG: !0
    },
        H = {},
        F = {},
        q = new RegExp("^" + h + "(\\w+)(true|false)$"),
        G = d("propagationStopped");

    function B(e, t) {
      var n = (t ? t(e) : e) + u,
          o = (t ? t(e) : e) + l,
          r = h + n,
          s = h + o;
      H[e] = {}, H[e]["false"] = r, H[e]["true"] = s;
    }

    function W(e, t, o) {
      var r = o && o.add || s,
          i = o && o.rm || a,
          c = o && o.listeners || "eventListeners",
          p = o && o.rmAll || "removeAllListeners",
          f = d(r),
          g = "." + r + ":",
          _ = function _(e, t, n) {
        if (e.isRemoved) return;
        var o = e.callback;
        "object" == _typeof(o) && o.handleEvent && (e.callback = function (e) {
          return o.handleEvent(e);
        }, e.originalDelegate = o), e.invoke(e, t, [n]);
        var r = e.options;
        r && "object" == _typeof(r) && r.once && t[i].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, r);
      },
          k = function k(t) {
        if (!(t = t || e.event)) return;
        var n = this || t.target || e,
            o = n[H[t.type]["false"]];
        if (o) if (1 === o.length) _(o[0], n, t);else {
          var _e7 = o.slice();

          for (var _o7 = 0; _o7 < _e7.length && (!t || !0 !== t[G]); _o7++) {
            _(_e7[_o7], n, t);
          }
        }
      },
          m = function m(t) {
        if (!(t = t || e.event)) return;
        var n = this || t.target || e,
            o = n[H[t.type]["true"]];
        if (o) if (1 === o.length) _(o[0], n, t);else {
          var _e8 = o.slice();

          for (var _o8 = 0; _o8 < _e8.length && (!t || !0 !== t[G]); _o8++) {
            _(_e8[_o8], n, t);
          }
        }
      };

      function y(t, o) {
        if (!t) return !1;
        var s = !0;
        o && void 0 !== o.useG && (s = o.useG);
        var a = o && o.vh;

        var _ = !0;

        o && void 0 !== o.chkDup && (_ = o.chkDup);
        var y = !1;
        o && void 0 !== o.rt && (y = o.rt);
        var v = t;

        for (; v && !v.hasOwnProperty(r);) {
          v = n(v);
        }

        if (!v && t[r] && (v = t), !v) return !1;
        if (v[f]) return !1;
        var T = o && o.eventNameToString,
            E = {},
            w = v[f] = v[r],
            Z = v[d(i)] = v[i],
            S = v[d(c)] = v[c],
            D = v[d(p)] = v[p];
        var P;

        function O(e, t) {
          return !L && "object" == _typeof(e) && e ? !!e.capture : L && t ? "boolean" == typeof e ? {
            capture: e,
            passive: !0
          } : e ? "object" == _typeof(e) && !1 !== e.passive ? Object.assign(Object.assign({}, e), {
            passive: !0
          }) : e : {
            passive: !0
          } : e;
        }

        o && o.prepend && (P = v[d(o.prepend)] = v[o.prepend]);

        var C = s ? function (e) {
          if (!E.isExisting) return w.call(E.target, E.eventName, E.capture ? m : k, E.options);
        } : function (e) {
          return w.call(E.target, E.eventName, e.invoke, E.options);
        },
            z = s ? function (e) {
          if (!e.isRemoved) {
            var _t23 = H[e.eventName];

            var _n8;

            _t23 && (_n8 = _t23[e.capture ? l : u]);

            var _o9 = _n8 && e.target[_n8];

            if (_o9) for (var _r2 = 0; _r2 < _o9.length; _r2++) {
              if (_o9[_r2] === e) {
                _o9.splice(_r2, 1), e.isRemoved = !0, 0 === _o9.length && (e.allRemoved = !0, e.target[_n8] = null);
                break;
              }
            }
          }

          if (e.allRemoved) return Z.call(e.target, e.eventName, e.capture ? m : k, e.options);
        } : function (e) {
          return Z.call(e.target, e.eventName, e.invoke, e.options);
        },
            j = o && o.diff ? o.diff : function (e, t) {
          var n = _typeof(t);

          return "function" === n && e.callback === t || "object" === n && e.originalDelegate === t;
        },
            R = Zone[d("UNPATCHED_EVENTS")],
            M = e[d("PASSIVE_EVENTS")],
            N = function N(t, n, r, i) {
          var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
          return function () {
            var p = this || e;
            var f = arguments[0];
            o && o.transferEventName && (f = o.transferEventName(f));
            var d = arguments[1];
            if (!d) return t.apply(this, arguments);
            if (b && "uncaughtException" === f) return t.apply(this, arguments);
            var g = !1;

            if ("function" != typeof d) {
              if (!d.handleEvent) return t.apply(this, arguments);
              g = !0;
            }

            if (a && !a(t, d, p, arguments)) return;
            var k = L && !!M && -1 !== M.indexOf(f),
                m = O(arguments[2], k);
            if (R) for (var _e9 = 0; _e9 < R.length; _e9++) {
              if (f === R[_e9]) return k ? t.call(p, f, d, m) : t.apply(this, arguments);
            }
            var y = !!m && ("boolean" == typeof m || m.capture),
                v = !(!m || "object" != _typeof(m)) && m.once,
                w = Zone.current;
            var Z = H[f];
            Z || (B(f, T), Z = H[f]);
            var S = Z[y ? l : u];
            var D,
                P = p[S],
                C = !1;

            if (P) {
              if (C = !0, _) for (var _e10 = 0; _e10 < P.length; _e10++) {
                if (j(P[_e10], d)) return;
              }
            } else P = p[S] = [];

            var z = p.constructor.name,
                I = F[z];
            I && (D = I[f]), D || (D = z + n + (T ? T(f) : f)), E.options = m, v && (E.options.once = !1), E.target = p, E.capture = y, E.eventName = f, E.isExisting = C;
            var N = s ? A : void 0;
            N && (N.taskData = E);
            var x = w.scheduleEventTask(D, d, N, r, i);
            return E.target = null, N && (N.taskData = null), v && (m.once = !0), (L || "boolean" != typeof x.options) && (x.options = m), x.target = p, x.capture = y, x.eventName = f, g && (x.originalDelegate = d), h ? P.unshift(x) : P.push(x), c ? p : void 0;
          };
        };

        return v[r] = N(w, g, C, z, y), P && (v.prependListener = N(P, ".prependListener:", function (e) {
          return P.call(E.target, E.eventName, e.invoke, E.options);
        }, z, y, !0)), v[i] = function () {
          var t = this || e;
          var n = arguments[0];
          o && o.transferEventName && (n = o.transferEventName(n));
          var r = arguments[2],
              s = !!r && ("boolean" == typeof r || r.capture),
              i = arguments[1];
          if (!i) return Z.apply(this, arguments);
          if (a && !a(Z, i, t, arguments)) return;
          var c = H[n];
          var p;
          c && (p = c[s ? l : u]);
          var f = p && t[p];
          if (f) for (var _e11 = 0; _e11 < f.length; _e11++) {
            var _o10 = f[_e11];
            if (j(_o10, i)) return f.splice(_e11, 1), _o10.isRemoved = !0, 0 === f.length && (_o10.allRemoved = !0, t[p] = null, "string" == typeof n) && (t[h + "ON_PROPERTY" + n] = null), _o10.zone.cancelTask(_o10), y ? t : void 0;
          }
          return Z.apply(this, arguments);
        }, v[c] = function () {
          var t = this || e;
          var n = arguments[0];
          o && o.transferEventName && (n = o.transferEventName(n));
          var r = [],
              s = U(t, T ? T(n) : n);

          for (var _e12 = 0; _e12 < s.length; _e12++) {
            var _t24 = s[_e12];
            r.push(_t24.originalDelegate ? _t24.originalDelegate : _t24.callback);
          }

          return r;
        }, v[p] = function () {
          var t = this || e;
          var n = arguments[0];

          if (n) {
            o && o.transferEventName && (n = o.transferEventName(n));
            var _e13 = H[n];

            if (_e13) {
              var _o11 = t[_e13["false"]],
                  _r3 = t[_e13["true"]];

              if (_o11) {
                var _e14 = _o11.slice();

                for (var _t25 = 0; _t25 < _e14.length; _t25++) {
                  var _o12 = _e14[_t25];
                  this[i].call(this, n, _o12.originalDelegate ? _o12.originalDelegate : _o12.callback, _o12.options);
                }
              }

              if (_r3) {
                var _e15 = _r3.slice();

                for (var _t26 = 0; _t26 < _e15.length; _t26++) {
                  var _o13 = _e15[_t26];
                  this[i].call(this, n, _o13.originalDelegate ? _o13.originalDelegate : _o13.callback, _o13.options);
                }
              }
            }
          } else {
            var _e16 = Object.keys(t);

            for (var _t27 = 0; _t27 < _e16.length; _t27++) {
              var _n9 = q.exec(_e16[_t27]);

              var _o14 = _n9 && _n9[1];

              _o14 && "removeListener" !== _o14 && this[p].call(this, _o14);
            }

            this[p].call(this, "removeListener");
          }

          if (y) return this;
        }, I(v[r], w), I(v[i], Z), D && I(v[p], D), S && I(v[c], S), !0;
      }

      var v = [];

      for (var _n10 = 0; _n10 < t.length; _n10++) {
        v[_n10] = y(t[_n10], o);
      }

      return v;
    }

    function U(e, t) {
      if (!t) {
        var _n11 = [];

        for (var _o15 in e) {
          var _r4 = q.exec(_o15);

          var _s2 = _r4 && _r4[1];

          if (_s2 && (!t || _s2 === t)) {
            var _t28 = e[_o15];
            if (_t28) for (var _e17 = 0; _e17 < _t28.length; _e17++) {
              _n11.push(_t28[_e17]);
            }
          }
        }

        return _n11;
      }

      var n = H[t];
      n || (B(t), n = H[t]);
      var o = e[n["false"]],
          r = e[n["true"]];
      return o ? r ? o.concat(r) : o.slice() : r ? r.slice() : [];
    }

    function V(e, t) {
      var n = e.Event;
      n && n.prototype && t.patchMethod(n.prototype, "stopImmediatePropagation", function (e) {
        return function (t, n) {
          t[G] = !0, e && e.apply(t, n);
        };
      });
    }

    function $(e, t, n, o, r) {
      var s = Zone.__symbol__(o);

      if (t[s]) return;
      var a = t[s] = t[o];
      t[o] = function (s, i, c) {
        return i && i.prototype && r.forEach(function (t) {
          var r = "".concat(n, ".").concat(o, "::") + t,
              s = i.prototype;

          if (s.hasOwnProperty(t)) {
            var _n12 = e.ObjectGetOwnPropertyDescriptor(s, t);

            _n12 && _n12.value ? (_n12.value = e.wrapWithCurrentZone(_n12.value, r), e._redefineProperty(i.prototype, t, _n12)) : s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
          } else s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
        }), a.call(t, s, i, c);
      }, e.attachOriginToPatched(t[o], a);
    }

    var X = ["absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplayconnected", "vrdisplaydisconnected", "vrdisplaypresentchange"],
        Y = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
        J = ["load"],
        K = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
        Q = ["bounce", "finish", "start"],
        ee = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
        te = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
        ne = ["close", "error", "open", "message"],
        oe = ["error", "message"],
        re = ["abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel"].concat(["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"], ["autocomplete", "autocompleteerror"], ["toggle"], ["afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume"], X, ["beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend"], ["activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit"]);

    function se(e, t, n) {
      if (!n || 0 === n.length) return t;
      var o = n.filter(function (t) {
        return t.target === e;
      });
      if (!o || 0 === o.length) return t;
      var r = o[0].ignoreProperties;
      return t.filter(function (e) {
        return -1 === r.indexOf(e);
      });
    }

    function ae(e, t, n, o) {
      e && P(e, se(e, t, n), o);
    }

    function ie(e, t) {
      if (b && !w) return;
      if (Zone[e.symbol("patchEvents")]) return;
      var o = "undefined" != typeof WebSocket,
          r = t.__Zone_ignore_on_properties;

      if (E) {
        var _e18 = window,
            _t29 = N() ? [{
          target: _e18,
          ignoreProperties: ["error"]
        }] : [];

        ae(_e18, re.concat(["messageerror"]), r ? r.concat(_t29) : r, n(_e18)), ae(Document.prototype, re, r), void 0 !== _e18.SVGElement && ae(_e18.SVGElement.prototype, re, r), ae(Element.prototype, re, r), ae(HTMLElement.prototype, re, r), ae(HTMLMediaElement.prototype, Y, r), ae(HTMLFrameSetElement.prototype, X.concat(K), r), ae(HTMLBodyElement.prototype, X.concat(K), r), ae(HTMLFrameElement.prototype, J, r), ae(HTMLIFrameElement.prototype, J, r);
        var _o16 = _e18.HTMLMarqueeElement;
        _o16 && ae(_o16.prototype, Q, r);
        var _s3 = _e18.Worker;
        _s3 && ae(_s3.prototype, oe, r);
      }

      var s = t.XMLHttpRequest;
      s && ae(s.prototype, ee, r);
      var a = t.XMLHttpRequestEventTarget;
      a && ae(a && a.prototype, ee, r), "undefined" != typeof IDBIndex && (ae(IDBIndex.prototype, te, r), ae(IDBRequest.prototype, te, r), ae(IDBOpenDBRequest.prototype, te, r), ae(IDBDatabase.prototype, te, r), ae(IDBTransaction.prototype, te, r), ae(IDBCursor.prototype, te, r)), o && ae(WebSocket.prototype, ne, r);
    }

    Zone.__load_patch("util", function (n, i, c) {
      c.patchOnProperties = P, c.patchMethod = z, c.bindArguments = y, c.patchMacroTask = j;

      var f = i.__symbol__("BLACK_LISTED_EVENTS"),
          d = i.__symbol__("UNPATCHED_EVENTS");

      n[d] && (n[f] = n[d]), n[f] && (i[f] = i[d] = n[f]), c.patchEventPrototype = V, c.patchEventTarget = W, c.isIEOrEdge = x, c.ObjectDefineProperty = t, c.ObjectGetOwnPropertyDescriptor = e, c.ObjectCreate = o, c.ArraySlice = r, c.patchClass = C, c.wrapWithCurrentZone = p, c.filterProperties = se, c.attachOriginToPatched = I, c._redefineProperty = Object.defineProperty, c.patchCallbacks = $, c.getGlobalObjects = function () {
        return {
          globalSources: F,
          zoneSymbolEventNames: H,
          eventNames: re,
          isBrowser: E,
          isMix: w,
          isNode: b,
          TRUE_STR: l,
          FALSE_STR: u,
          ZONE_SYMBOL_PREFIX: h,
          ADD_EVENT_LISTENER_STR: s,
          REMOVE_EVENT_LISTENER_STR: a
        };
      };
    });

    var ce = d("zoneTask");

    function le(e, t, n, o) {
      var r = null,
          s = null;
      n += o;
      var a = {};

      function i(t) {
        var n = t.data;
        return n.args[0] = function () {
          return t.invoke.apply(this, arguments);
        }, n.handleId = r.apply(e, n.args), t;
      }

      function c(t) {
        return s.call(e, t.data.handleId);
      }

      r = z(e, t += o, function (n) {
        return function (r, s) {
          if ("function" == typeof s[0]) {
            var _e19 = {
              isPeriodic: "Interval" === o,
              delay: "Timeout" === o || "Interval" === o ? s[1] || 0 : void 0,
              args: s
            },
                _n13 = s[0];

            s[0] = function () {
              try {
                return _n13.apply(this, arguments);
              } finally {
                _e19.isPeriodic || ("number" == typeof _e19.handleId ? delete a[_e19.handleId] : _e19.handleId && (_e19.handleId[ce] = null));
              }
            };

            var _r5 = f(t, s[0], _e19, i, c);

            if (!_r5) return _r5;
            var _l = _r5.data.handleId;
            return "number" == typeof _l ? a[_l] = _r5 : _l && (_l[ce] = _r5), _l && _l.ref && _l.unref && "function" == typeof _l.ref && "function" == typeof _l.unref && (_r5.ref = _l.ref.bind(_l), _r5.unref = _l.unref.bind(_l)), "number" == typeof _l || _l ? _l : _r5;
          }

          return n.apply(e, s);
        };
      }), s = z(e, n, function (t) {
        return function (n, o) {
          var r = o[0];
          var s;
          "number" == typeof r ? s = a[r] : (s = r && r[ce], s || (s = r)), s && "string" == typeof s.type ? "notScheduled" !== s.state && (s.cancelFn && s.data.isPeriodic || 0 === s.runCount) && ("number" == typeof r ? delete a[r] : r && (r[ce] = null), s.zone.cancelTask(s)) : t.apply(e, o);
        };
      });
    }

    function ue(e, t) {
      if (Zone[t.symbol("patchEventTarget")]) return;

      var _t$getGlobalObjects = t.getGlobalObjects(),
          n = _t$getGlobalObjects.eventNames,
          o = _t$getGlobalObjects.zoneSymbolEventNames,
          r = _t$getGlobalObjects.TRUE_STR,
          s = _t$getGlobalObjects.FALSE_STR,
          a = _t$getGlobalObjects.ZONE_SYMBOL_PREFIX;

      for (var _c2 = 0; _c2 < n.length; _c2++) {
        var _e20 = n[_c2],
            _t30 = a + (_e20 + s),
            _i2 = a + (_e20 + r);

        o[_e20] = {}, o[_e20][s] = _t30, o[_e20][r] = _i2;
      }

      var i = e.EventTarget;
      return i && i.prototype ? (t.patchEventTarget(e, [i && i.prototype]), !0) : void 0;
    }

    Zone.__load_patch("legacy", function (e) {
      var t = e[Zone.__symbol__("legacyPatch")];

      t && t();
    }), Zone.__load_patch("queueMicrotask", function (e, t, n) {
      n.patchMethod(e, "queueMicrotask", function (e) {
        return function (e, n) {
          t.current.scheduleMicroTask("queueMicrotask", n[0]);
        };
      });
    }), Zone.__load_patch("timers", function (e) {
      var t = "set",
          n = "clear";
      le(e, t, n, "Timeout"), le(e, t, n, "Interval"), le(e, t, n, "Immediate");
    }), Zone.__load_patch("requestAnimationFrame", function (e) {
      le(e, "request", "cancel", "AnimationFrame"), le(e, "mozRequest", "mozCancel", "AnimationFrame"), le(e, "webkitRequest", "webkitCancel", "AnimationFrame");
    }), Zone.__load_patch("blocking", function (e, t) {
      var n = ["alert", "prompt", "confirm"];

      for (var _o17 = 0; _o17 < n.length; _o17++) {
        z(e, n[_o17], function (n, o, r) {
          return function (o, s) {
            return t.current.run(n, e, s, r);
          };
        });
      }
    }), Zone.__load_patch("EventTarget", function (e, t, n) {
      !function (e, t) {
        t.patchEventPrototype(e, t);
      }(e, n), ue(e, n);
      var o = e.XMLHttpRequestEventTarget;
      o && o.prototype && n.patchEventTarget(e, [o.prototype]);
    }), Zone.__load_patch("MutationObserver", function (e, t, n) {
      C("MutationObserver"), C("WebKitMutationObserver");
    }), Zone.__load_patch("IntersectionObserver", function (e, t, n) {
      C("IntersectionObserver");
    }), Zone.__load_patch("FileReader", function (e, t, n) {
      C("FileReader");
    }), Zone.__load_patch("on_property", function (e, t, n) {
      ie(n, e);
    }), Zone.__load_patch("customElements", function (e, t, n) {
      !function (e, t) {
        var _t$getGlobalObjects2 = t.getGlobalObjects(),
            n = _t$getGlobalObjects2.isBrowser,
            o = _t$getGlobalObjects2.isMix;

        (n || o) && e.customElements && "customElements" in e && t.patchCallbacks(t, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"]);
      }(e, n);
    }), Zone.__load_patch("XHR", function (e, t) {
      !function (e) {
        var u = e.XMLHttpRequest;
        if (!u) return;
        var h = u.prototype;
        var p = h[i],
            g = h[c];

        if (!p) {
          var _t31 = e.XMLHttpRequestEventTarget;

          if (_t31) {
            var _e21 = _t31.prototype;
            p = _e21[i], g = _e21[c];
          }
        }

        var _ = "readystatechange",
            k = "scheduled";

        function m(e) {
          var o = e.data,
              a = o.target;
          a[s] = !1, a[l] = !1;
          var u = a[r];
          p || (p = a[i], g = a[c]), u && g.call(a, _, u);

          var h = a[r] = function () {
            if (a.readyState === a.DONE) if (!o.aborted && a[s] && e.state === k) {
              var _n14 = a[t.__symbol__("loadfalse")];

              if (0 !== a.status && _n14 && _n14.length > 0) {
                var _r6 = e.invoke;
                e.invoke = function () {
                  var n = a[t.__symbol__("loadfalse")];

                  for (var _t32 = 0; _t32 < n.length; _t32++) {
                    n[_t32] === e && n.splice(_t32, 1);
                  }

                  o.aborted || e.state !== k || _r6.call(e);
                }, _n14.push(e);
              } else e.invoke();
            } else o.aborted || !1 !== a[s] || (a[l] = !0);
          };

          return p.call(a, _, h), a[n] || (a[n] = e), w.apply(a, o.args), a[s] = !0, e;
        }

        function y() {}

        function v(e) {
          var t = e.data;
          return t.aborted = !0, Z.apply(t.target, t.args);
        }

        var T = z(h, "open", function () {
          return function (e, t) {
            return e[o] = 0 == t[2], e[a] = t[1], T.apply(e, t);
          };
        }),
            b = d("fetchTaskAborting"),
            E = d("fetchTaskScheduling"),
            w = z(h, "send", function () {
          return function (e, n) {
            if (!0 === t.current[E]) return w.apply(e, n);
            if (e[o]) return w.apply(e, n);
            {
              var _t33 = {
                target: e,
                url: e[a],
                isPeriodic: !1,
                args: n,
                aborted: !1
              },
                  _o18 = f("XMLHttpRequest.send", y, _t33, m, v);

              e && !0 === e[l] && !_t33.aborted && _o18.state === k && _o18.invoke();
            }
          };
        }),
            Z = z(h, "abort", function () {
          return function (e, o) {
            var r = e[n];

            if (r && "string" == typeof r.type) {
              if (null == r.cancelFn || r.data && r.data.aborted) return;
              r.zone.cancelTask(r);
            } else if (!0 === t.current[b]) return Z.apply(e, o);
          };
        });
      }(e);
      var n = d("xhrTask"),
          o = d("xhrSync"),
          r = d("xhrListener"),
          s = d("xhrScheduled"),
          a = d("xhrURL"),
          l = d("xhrErrorBeforeScheduled");
    }), Zone.__load_patch("geolocation", function (t) {
      t.navigator && t.navigator.geolocation && function (t, n) {
        var o = t.constructor.name;

        var _loop3 = function _loop3(_r7) {
          var s = n[_r7],
              a = t[s];

          if (a) {
            if (!v(e(t, s))) return "continue";

            t[s] = function (e) {
              var t = function t() {
                return e.apply(this, y(arguments, o + "." + s));
              };

              return I(t, e), t;
            }(a);
          }
        };

        for (var _r7 = 0; _r7 < n.length; _r7++) {
          var _ret = _loop3(_r7);

          if (_ret === "continue") continue;
        }
      }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
    }), Zone.__load_patch("PromiseRejectionEvent", function (e, t) {
      function n(t) {
        return function (n) {
          U(e, t).forEach(function (o) {
            var r = e.PromiseRejectionEvent;

            if (r) {
              var _e22 = new r(t, {
                promise: n.promise,
                reason: n.rejection
              });

              o.invoke(_e22);
            }
          });
        };
      }

      e.PromiseRejectionEvent && (t[d("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), t[d("rejectionHandledHandler")] = n("rejectionhandled"));
    });
  },
  435: function _(e, t, n) {
    "use strict";

    n(277);
  }
}, function (e) {
  "use strict";

  e(e.s = 435);
}]);

/***/ }),

/***/ "./resources/ngapp/dist/ngapp/runtime.bbfb57b8daa2fca80e25.js":
/*!********************************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/runtime.bbfb57b8daa2fca80e25.js ***!
  \********************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  "use strict";

  var r,
      e = {},
      n = {};

  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = n[r] = {
      exports: {}
    };
    return e[r](a, a.exports, t), a.exports;
  }

  t.m = e, r = [], t.O = function (e, n, o, a) {
    if (!n) {
      var p = 1 / 0;

      for (f = 0; f < r.length; f++) {
        for (var _r$f = _slicedToArray(r[f], 3), n = _r$f[0], o = _r$f[1], a = _r$f[2], l = !0, u = 0; u < n.length; u++) {
          (!1 & a || p >= a) && Object.keys(t.O).every(function (r) {
            return t.O[r](n[u]);
          }) ? n.splice(u--, 1) : (l = !1, a < p && (p = a));
        }

        l && (r.splice(f--, 1), e = o());
      }

      return e;
    }

    a = a || 0;

    for (var f = r.length; f > 0 && r[f - 1][2] > a; f--) {
      r[f] = r[f - 1];
    }

    r[f] = [n, o, a];
  }, t.n = function (r) {
    var e = r && r.__esModule ? function () {
      return r["default"];
    } : function () {
      return r;
    };
    return t.d(e, {
      a: e
    }), e;
  }, t.d = function (r, e) {
    for (var n in e) {
      t.o(e, n) && !t.o(r, n) && Object.defineProperty(r, n, {
        enumerable: !0,
        get: e[n]
      });
    }
  }, t.o = function (r, e) {
    return Object.prototype.hasOwnProperty.call(r, e);
  }, function () {
    var r = {
      666: 0
    };

    t.O.j = function (e) {
      return 0 === r[e];
    };

    var e = function e(_e2, n) {
      var o,
          a,
          _n2 = _slicedToArray(n, 3),
          p = _n2[0],
          l = _n2[1],
          u = _n2[2],
          f = 0;

      for (o in l) {
        t.o(l, o) && (t.m[o] = l[o]);
      }

      if (u) var s = u(t);

      for (_e2 && _e2(n); f < p.length; f++) {
        t.o(r, a = p[f]) && r[a] && r[a][0](), r[p[f]] = 0;
      }

      return t.O(s);
    },
        n = self.webpackChunkngapp = self.webpackChunkngapp || [];

    n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n));
  }();
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css":
/*!********************************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_styles_31d6cfe0d16ae931b73c_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./styles.31d6cfe0d16ae931b73c.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_styles_31d6cfe0d16ae931b73c_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_styles_31d6cfe0d16ae931b73c_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/ngapp/dist/ngapp/runtime.bbfb57b8daa2fca80e25.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/ngapp/dist/ngapp/styles.31d6cfe0d16ae931b73c.css")))
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/ngapp/dist/ngapp/polyfills.9cecb7ad41f1b7dfcce5.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/ngapp/dist/ngapp/main.ae607e80ae94e30839db.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;