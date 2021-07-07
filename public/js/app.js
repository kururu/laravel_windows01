/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/ngapp/dist/ngapp/main.89881a79dd5b779099e1.js":
/*!*****************************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/main.89881a79dd5b779099e1.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e49) { throw _e49; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e50) { didErr = true; err = _e50; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
  392: function _(t, e, n) {
    "use strict";

    function r(t) {
      return "function" == typeof t;
    }

    var o = !1;
    var s = {
      Promise: void 0,

      set useDeprecatedSynchronousErrorHandling(t) {
        if (t) {
          var _t2 = new Error();

          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + _t2.stack);
        } else o && console.log("RxJS: Back to a better error behavior. Thank you. <3");

        o = t;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return o;
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
        if (s.useDeprecatedSynchronousErrorHandling) throw t;
        i(t);
      },
      complete: function complete() {}
    },
        a = Array.isArray || function (t) {
      return t && "number" == typeof t.length;
    };

    function c(t) {
      return null !== t && "object" == _typeof(t);
    }

    var u = function () {
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
              o = this._unsubscribe,
              s = this._subscriptions;
          if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, e instanceof h) e.remove(this);else if (null !== e) for (var _r2 = 0; _r2 < e.length; ++_r2) {
            e[_r2].remove(this);
          }

          if (r(o)) {
            n && (this._unsubscribe = void 0);

            try {
              o.call(this);
            } catch (i) {
              t = i instanceof u ? d(i.errors) : [i];
            }
          }

          if (a(s)) {
            var _e2 = -1,
                _n2 = s.length;

            for (; ++_e2 < _n2;) {
              var _n3 = s[_e2];
              if (c(_n3)) try {
                _n3.unsubscribe();
              } catch (i) {
                t = t || [], i instanceof u ? t = t.concat(d(i.errors)) : t.push(i);
              }
            }
          }

          if (t) throw new u(t);
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
        return t.concat(e instanceof u ? e.errors : e);
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
              t instanceof p ? (_this.syncErrorThrowable = t.syncErrorThrowable, _this.destination = t, t.add(_assertThisInitialized(_this))) : (_this.syncErrorThrowable = !0, _this.destination = new g(_assertThisInitialized(_this), t));
              break;
            }

          default:
            _this.syncErrorThrowable = !0, _this.destination = new g(_assertThisInitialized(_this), t, e, n);
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

    var g = /*#__PURE__*/function (_p) {
      _inherits(g, _p);

      var _super2 = _createSuper(g);

      function g(t, e, n, o) {
        var _this2;

        _classCallCheck(this, g);

        var s;
        _this2 = _super2.call(this), _this2._parentSubscriber = t;

        var i = _assertThisInitialized(_this2);

        r(e) ? s = e : e && (s = e.next, n = e.error, o = e.complete, e !== l && (i = Object.create(e), r(i.unsubscribe) && _this2.add(i.unsubscribe.bind(i)), i.unsubscribe = _this2.unsubscribe.bind(_assertThisInitialized(_this2)))), _this2._context = i, _this2._next = s, _this2._error = n, _this2._complete = o;
        return _this2;
      }

      _createClass(g, [{
        key: "next",
        value: function next(t) {
          if (!this.isStopped && this._next) {
            var _e4 = this._parentSubscriber;
            s.useDeprecatedSynchronousErrorHandling && _e4.syncErrorThrowable ? this.__tryOrSetError(_e4, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
          }
        }
      }, {
        key: "error",
        value: function error(t) {
          if (!this.isStopped) {
            var _e5 = this._parentSubscriber,
                _n5 = s.useDeprecatedSynchronousErrorHandling;
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

              s.useDeprecatedSynchronousErrorHandling && _t4.syncErrorThrowable ? (this.__tryOrSetError(_t4, _e6), this.unsubscribe()) : (this.__tryOrUnsub(_e6), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
      }, {
        key: "__tryOrUnsub",
        value: function __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw n;
            i(n);
          }
        }
      }, {
        key: "__tryOrSetError",
        value: function __tryOrSetError(t, e, n) {
          if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");

          try {
            e.call(this._context, n);
          } catch (r) {
            return s.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (i(r), !0);
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

      return g;
    }(p);

    var _ = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function m(t) {
      return t;
    }

    var y = function () {
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
                o = function (t, e, n) {
              if (t) {
                if (t instanceof p) return t;
                if (t[f]) return t[f]();
              }

              return t || e || n ? new p(t, e, n) : new p(l);
            }(_t6, e, n);

            if (o.add(r ? r.call(o, this.source) : this.source || s.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), s.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
            return o;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(_t7) {
            try {
              return this._subscribe(_t7);
            } catch (e) {
              s.useDeprecatedSynchronousErrorHandling && (_t7.syncErrorThrown = !0, _t7.syncErrorValue = e), function (t) {
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
                } catch (o) {
                  n(o), r && r.unsubscribe();
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
          key: _,
          value: function value() {
            return this;
          }
        }, {
          key: "pipe",
          value: function pipe() {
            for (var _len = arguments.length, _t10 = new Array(_len), _key = 0; _key < _len; _key++) {
              _t10[_key] = arguments[_key];
            }

            return 0 === _t10.length ? this : (0 === (e = _t10).length ? m : 1 === e.length ? e[0] : function (t) {
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
      if (t || (t = s.Promise || Promise), !t) throw new Error("no Promise impl found");
      return t;
    }

    var w = function () {
      function t() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
      }

      return t.prototype = Object.create(Error.prototype), t;
    }();

    var b = /*#__PURE__*/function (_h2) {
      _inherits(b, _h2);

      var _super3 = _createSuper(b);

      function b(t, e) {
        var _this6;

        _classCallCheck(this, b);

        _this6 = _super3.call(this), _this6.subject = t, _this6.subscriber = e, _this6.closed = !1;
        return _this6;
      }

      _createClass(b, [{
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

      return b;
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

    var x = function () {
      var t = /*#__PURE__*/function (_y) {
        _inherits(t, _y);

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
            var e = new k(this, this);
            return e.operator = _t16, e;
          }
        }, {
          key: "next",
          value: function next(_t17) {
            if (this.closed) throw new w();

            if (!this.isStopped) {
              var _e8 = this.observers,
                  _n7 = _e8.length,
                  _r4 = _e8.slice();

              for (var _o2 = 0; _o2 < _n7; _o2++) {
                _r4[_o2].next(_t17);
              }
            }
          }
        }, {
          key: "error",
          value: function error(_t18) {
            if (this.closed) throw new w();
            this.hasError = !0, this.thrownError = _t18, this.isStopped = !0;
            var e = this.observers,
                n = e.length,
                r = e.slice();

            for (var _o3 = 0; _o3 < n; _o3++) {
              r[_o3].error(_t18);
            }

            this.observers.length = 0;
          }
        }, {
          key: "complete",
          value: function complete() {
            if (this.closed) throw new w();
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
            if (this.closed) throw new w();
            return _get(_getPrototypeOf(t.prototype), "_trySubscribe", this).call(this, _t20);
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(_t21) {
            if (this.closed) throw new w();
            return this.hasError ? (_t21.error(this.thrownError), h.EMPTY) : this.isStopped ? (_t21.complete(), h.EMPTY) : (this.observers.push(_t21), new b(this, _t21));
          }
        }, {
          key: "asObservable",
          value: function asObservable() {
            var _t22 = new y();

            return _t22.source = this, _t22;
          }
        }]);

        return t;
      }(y);

      return t.create = function (t, e) {
        return new k(t, e);
      }, t;
    }();

    var k = /*#__PURE__*/function (_x) {
      _inherits(k, _x);

      var _super6 = _createSuper(k);

      function k(t, e) {
        var _this9;

        _classCallCheck(this, k);

        _this9 = _super6.call(this), _this9.destination = t, _this9.source = e;
        return _this9;
      }

      _createClass(k, [{
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

      return k;
    }(x);

    var E = /*#__PURE__*/function () {
      function E(t, e) {
        _classCallCheck(this, E);

        this.project = t, this.thisArg = e;
      }

      _createClass(E, [{
        key: "call",
        value: function call(t, e) {
          return e.subscribe(new T(t, this.project, this.thisArg));
        }
      }]);

      return E;
    }();

    var T = /*#__PURE__*/function (_p3) {
      _inherits(T, _p3);

      var _super7 = _createSuper(T);

      function T(t, e, n) {
        var _this10;

        _classCallCheck(this, T);

        _this10 = _super7.call(this, t), _this10.project = e, _this10.count = 0, _this10.thisArg = n || _assertThisInitialized(_this10);
        return _this10;
      }

      _createClass(T, [{
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

      return T;
    }(p);

    var S = function S(t) {
      return function (e) {
        for (var _n8 = 0, _r6 = t.length; _n8 < _r6 && !e.closed; _n8++) {
          e.next(t[_n8]);
        }

        e.complete();
      };
    },
        A = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

    var I = function I(t) {
      if (t && "function" == typeof t[_]) return o = t, function (t) {
        var e = o[_]();

        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return e.subscribe(t);
      };
      if ((e = t) && "number" == typeof e.length && "function" != typeof e) return S(t);
      var e, n, r, o;
      if ((n = t) && "function" != typeof n.subscribe && "function" == typeof n.then) return function (t) {
        return function (e) {
          return t.then(function (t) {
            e.closed || (e.next(t), e.complete());
          }, function (t) {
            return e.error(t);
          }).then(null, i), e;
        };
      }(t);
      if (t && "function" == typeof t[A]) return r = t, function (t) {
        var e = r[A]();

        for (;;) {
          var _r7 = void 0;

          try {
            _r7 = e.next();
          } catch (n) {
            return t.error(n), t;
          }

          if (_r7.done) {
            t.complete();
            break;
          }

          if (t.next(_r7.value), t.closed) break;
        }

        return "function" == typeof e["return"] && t.add(function () {
          e["return"] && e["return"]();
        }), t;
      };
      {
        var _e9 = c(t) ? "an invalid object" : "'".concat(t, "'");

        throw new TypeError("You provided ".concat(_e9, " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."));
      }
    };

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

    var P = /*#__PURE__*/function (_p5) {
      _inherits(P, _p5);

      var _super9 = _createSuper(P);

      function P() {
        _classCallCheck(this, P);

        return _super9.apply(this, arguments);
      }

      _createClass(P, [{
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

      return P;
    }(p);

    function O(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
      return "function" == typeof e ? function (r) {
        return r.pipe(O(function (n, r) {
          return (o = t(n, r), o instanceof y ? o : new y(I(o))).pipe(function (t, e) {
            return function (e) {
              return e.lift(new E(t, void 0));
            };
          }(function (t, o) {
            return e(n, t, r, o);
          }));
          var o;
        }, n));
      } : ("number" == typeof e && (n = e), function (e) {
        return e.lift(new D(t, n));
      });
    }

    var D = /*#__PURE__*/function () {
      function D(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, D);

        this.project = t, this.concurrent = e;
      }

      _createClass(D, [{
        key: "call",
        value: function call(t, e) {
          return e.subscribe(new j(t, this.project, this.concurrent));
        }
      }]);

      return D;
    }();

    var j = /*#__PURE__*/function (_P) {
      _inherits(j, _P);

      var _super10 = _createSuper(j);

      function j(t, e) {
        var _this12;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, j);

        _this12 = _super10.call(this, t), _this12.project = e, _this12.concurrent = n, _this12.hasCompleted = !1, _this12.buffer = [], _this12.active = 0, _this12.index = 0;
        return _this12;
      }

      _createClass(j, [{
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
            if (t instanceof y) return t.subscribe(e);
            var n;

            try {
              n = I(t)(e);
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

      return j;
    }(P);

    function N() {
      return function (t) {
        return t.lift(new R(t));
      };
    }

    var R = /*#__PURE__*/function () {
      function R(t) {
        _classCallCheck(this, R);

        this.connectable = t;
      }

      _createClass(R, [{
        key: "call",
        value: function call(t, e) {
          var n = this.connectable;
          n._refCount++;
          var r = new H(t, n),
              o = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), o;
        }
      }]);

      return R;
    }();

    var H = /*#__PURE__*/function (_p6) {
      _inherits(H, _p6);

      var _super11 = _createSuper(H);

      function H(t, e) {
        var _this13;

        _classCallCheck(this, H);

        _this13 = _super11.call(this, t), _this13.connectable = e;
        return _this13;
      }

      _createClass(H, [{
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

      return H;
    }(p);

    var V = /*#__PURE__*/function (_y2) {
      _inherits(V, _y2);

      var _super12 = _createSuper(V);

      function V(t, e) {
        var _this14;

        _classCallCheck(this, V);

        _this14 = _super12.call(this), _this14.source = t, _this14.subjectFactory = e, _this14._refCount = 0, _this14._isComplete = !1;
        return _this14;
      }

      _createClass(V, [{
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
          return t || (this._isComplete = !1, t = this._connection = new h(), t.add(this.source.subscribe(new L(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t;
        }
      }, {
        key: "refCount",
        value: function refCount() {
          return N()(this);
        }
      }]);

      return V;
    }(y);

    var F = function () {
      var t = V.prototype;
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

    var L = /*#__PURE__*/function (_C) {
      _inherits(L, _C);

      var _super13 = _createSuper(L);

      function L(t, e) {
        var _this15;

        _classCallCheck(this, L);

        _this15 = _super13.call(this, t), _this15.connectable = e;
        return _this15;
      }

      _createClass(L, [{
        key: "_error",
        value: function _error(t) {
          this._unsubscribe(), _get(_getPrototypeOf(L.prototype), "_error", this).call(this, t);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(L.prototype), "_complete", this).call(this);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var t = this.connectable;

          if (t) {
            this.connectable = null;
            var _e10 = t._connection;
            t._refCount = 0, t._subject = null, t._connection = null, _e10 && _e10.unsubscribe();
          }
        }
      }]);

      return L;
    }(C);

    function Z() {
      return new x();
    }

    function z(t) {
      for (var _e11 in t) {
        if (t[_e11] === z) return _e11;
      }

      throw Error("Could not find renamed property on target object.");
    }

    function B(t) {
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) return "[" + t.map(B).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return "".concat(t.overriddenName);
      if (t.name) return "".concat(t.name);
      var e = t.toString();
      if (null == e) return "" + e;
      var n = e.indexOf("\n");
      return -1 === n ? e : e.substring(0, n);
    }

    function $(t, e) {
      return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e;
    }

    var G = z({
      __forward_ref__: z
    });

    function U(t) {
      return t.__forward_ref__ = U, t.toString = function () {
        return B(this());
      }, t;
    }

    function W(t) {
      return "function" == typeof (e = t) && e.hasOwnProperty(G) && e.__forward_ref__ === U ? t() : t;
      var e;
    }

    var q = /*#__PURE__*/function (_Error) {
      _inherits(q, _Error);

      var _super14 = _createSuper(q);

      function q(t, e) {
        var _this16;

        _classCallCheck(this, q);

        _this16 = _super14.call(this, function (t, e) {
          return "".concat(t ? "NG0".concat(t, ": ") : "").concat(e);
        }(t, e)), _this16.code = t;
        return _this16;
      }

      return q;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function Q(t) {
      return "string" == typeof t ? t : null == t ? "" : String(t);
    }

    function J(t) {
      return "function" == typeof t ? t.name || t.toString() : "object" == _typeof(t) && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Q(t);
    }

    function Y(t, e) {
      var n = e ? " in ".concat(e) : "";
      throw new q("201", "No provider for ".concat(J(t), " found").concat(n));
    }

    function K(t) {
      return {
        token: t.token,
        providedIn: t.providedIn || null,
        factory: t.factory,
        value: void 0
      };
    }

    function X(t) {
      return {
        providers: t.providers || [],
        imports: t.imports || []
      };
    }

    function tt(t) {
      return et(t, rt) || et(t, st);
    }

    function et(t, e) {
      return t.hasOwnProperty(e) ? t[e] : null;
    }

    function nt(t) {
      return t && (t.hasOwnProperty(ot) || t.hasOwnProperty(it)) ? t[ot] : null;
    }

    var rt = z({
      "\u0275prov": z
    }),
        ot = z({
      "\u0275inj": z
    }),
        st = z({
      ngInjectableDef: z
    }),
        it = z({
      ngInjectorDef: z
    });

    var lt = function () {
      return (lt = lt || {})[lt.Default = 0] = "Default", lt[lt.Host = 1] = "Host", lt[lt.Self = 2] = "Self", lt[lt.SkipSelf = 4] = "SkipSelf", lt[lt.Optional = 8] = "Optional", lt;
    }();

    var at;

    function ct(t) {
      var e = at;
      return at = t, e;
    }

    function ut(t, e, n) {
      var r = tt(t);
      return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & lt.Optional ? null : void 0 !== e ? e : void Y(B(t), "Injector");
    }

    function ht(t) {
      return {
        toString: t
      }.toString();
    }

    var dt = function () {
      return (dt = dt || {})[dt.OnPush = 0] = "OnPush", dt[dt.Default = 1] = "Default", dt;
    }(),
        ft = function () {
      return (ft = ft || {})[ft.Emulated = 0] = "Emulated", ft[ft.None = 2] = "None", ft[ft.ShadowDom = 3] = "ShadowDom", ft;
    }();

    var pt = "undefined" != typeof globalThis && globalThis,
        gt = "undefined" != typeof window && window,
        _t = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        mt = "undefined" != typeof __webpack_require__.g && __webpack_require__.g,
        yt = pt || mt || gt || _t,
        vt = {},
        wt = [],
        bt = z({
      "\u0275cmp": z
    }),
        Ct = z({
      "\u0275dir": z
    }),
        xt = z({
      "\u0275pipe": z
    }),
        kt = z({
      "\u0275mod": z
    }),
        Et = z({
      "\u0275loc": z
    }),
        Tt = z({
      "\u0275fac": z
    }),
        St = z({
      __NG_ELEMENT_ID__: z
    });

    var At = 0;

    function It(t) {
      return ht(function () {
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
          onPush: t.changeDetection === dt.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          selectors: t.selectors || wt,
          viewQuery: t.viewQuery || null,
          features: t.features || null,
          data: t.data || {},
          encapsulation: t.encapsulation || ft.Emulated,
          id: "c",
          styles: t.styles || wt,
          _: null,
          setInput: null,
          schemas: t.schemas || null,
          tView: null
        },
            r = t.directives,
            o = t.features,
            s = t.pipes;
        return n.id += At++, n.inputs = jt(t.inputs, e), n.outputs = jt(t.outputs), o && o.forEach(function (t) {
          return t(n);
        }), n.directiveDefs = r ? function () {
          return ("function" == typeof r ? r() : r).map(Mt);
        } : null, n.pipeDefs = s ? function () {
          return ("function" == typeof s ? s() : s).map(Pt);
        } : null, n;
      });
    }

    function Mt(t) {
      return Rt(t) || function (t) {
        return t[Ct] || null;
      }(t);
    }

    function Pt(t) {
      return function (t) {
        return t[xt] || null;
      }(t);
    }

    var Ot = {};

    function Dt(t) {
      return ht(function () {
        var e = {
          type: t.type,
          bootstrap: t.bootstrap || wt,
          declarations: t.declarations || wt,
          imports: t.imports || wt,
          exports: t.exports || wt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return null != t.id && (Ot[t.id] = t.type), e;
      });
    }

    function jt(t, e) {
      if (null == t) return vt;
      var n = {};

      for (var _r8 in t) {
        if (t.hasOwnProperty(_r8)) {
          var _o4 = t[_r8],
              _s2 = _o4;
          Array.isArray(_o4) && (_s2 = _o4[1], _o4 = _o4[0]), n[_o4] = _r8, e && (e[_o4] = _s2);
        }
      }

      return n;
    }

    var Nt = It;

    function Rt(t) {
      return t[bt] || null;
    }

    function Ht(t, e) {
      var n = t[kt] || null;
      if (!n && !0 === e) throw new Error("Type ".concat(B(t), " does not have '\u0275mod' property."));
      return n;
    }

    var Vt = 20,
        Ft = 10;

    function Lt(t) {
      return Array.isArray(t) && "object" == _typeof(t[1]);
    }

    function Zt(t) {
      return Array.isArray(t) && !0 === t[1];
    }

    function zt(t) {
      return 0 != (8 & t.flags);
    }

    function Bt(t) {
      return 2 == (2 & t.flags);
    }

    function $t(t) {
      return 1 == (1 & t.flags);
    }

    function Gt(t) {
      return null !== t.template;
    }

    function Ut(t, e) {
      return t.hasOwnProperty(Tt) ? t[Tt] : null;
    }

    var Wt = /*#__PURE__*/function () {
      function Wt(t, e, n) {
        _classCallCheck(this, Wt);

        this.previousValue = t, this.currentValue = e, this.firstChange = n;
      }

      _createClass(Wt, [{
        key: "isFirstChange",
        value: function isFirstChange() {
          return this.firstChange;
        }
      }]);

      return Wt;
    }();

    function qt() {
      var t = Jt(this),
          e = null == t ? void 0 : t.current;

      if (e) {
        var _n9 = t.previous;
        if (_n9 === vt) t.previous = e;else for (var _t23 in e) {
          _n9[_t23] = e[_t23];
        }
        t.current = null, this.ngOnChanges(e);
      }
    }

    function Qt(t, e, n, r) {
      var o = Jt(t) || function (t, e) {
        return t.__ngSimpleChanges__ = e;
      }(t, {
        previous: vt,
        current: null
      }),
          s = o.current || (o.current = {}),
          i = o.previous,
          l = this.declaredInputs[n],
          a = i[l];

      s[l] = new Wt(a && a.currentValue, e, i === vt), t[r] = e;
    }

    function Jt(t) {
      return t.__ngSimpleChanges__ || null;
    }

    var Yt = "http://www.w3.org/2000/svg";
    var Kt;

    function Xt(t) {
      return !!t.listen;
    }

    var te = {
      createRenderer: function createRenderer(t, e) {
        return void 0 !== Kt ? Kt : "undefined" != typeof document ? document : void 0;
      }
    };

    function ee(t) {
      for (; Array.isArray(t);) {
        t = t[0];
      }

      return t;
    }

    function ne(t, e) {
      return ee(e[t.index]);
    }

    function re(t, e) {
      return t.data[e];
    }

    function oe(t, e) {
      var n = e[t];
      return Lt(n) ? n : n[0];
    }

    function se(t) {
      return 128 == (128 & t[2]);
    }

    function ie(t, e) {
      return null == e ? null : t[e];
    }

    function le(t) {
      t[18] = 0;
    }

    function ae(t, e) {
      t[5] += e;
      var n = t,
          r = t[3];

      for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) {
        r[5] += e, n = r, r = r[3];
      }
    }

    var ce = {
      lFrame: Ae(null),
      bindingsEnabled: !0,
      isInCheckNoChangesMode: !1
    };

    function ue() {
      return ce.bindingsEnabled;
    }

    function he() {
      return ce.lFrame.lView;
    }

    function de() {
      return ce.lFrame.tView;
    }

    function fe(t) {
      return ce.lFrame.contextLView = t, t[8];
    }

    function pe() {
      var t = ge();

      for (; null !== t && 64 === t.type;) {
        t = t.parent;
      }

      return t;
    }

    function ge() {
      return ce.lFrame.currentTNode;
    }

    function _e(t, e) {
      var n = ce.lFrame;
      n.currentTNode = t, n.isParent = e;
    }

    function me() {
      return ce.lFrame.isParent;
    }

    function ye() {
      return ce.isInCheckNoChangesMode;
    }

    function ve(t) {
      ce.isInCheckNoChangesMode = t;
    }

    function we() {
      return ce.lFrame.bindingIndex++;
    }

    function be(t, e) {
      var n = ce.lFrame;
      n.bindingIndex = n.bindingRootIndex = t, Ce(e);
    }

    function Ce(t) {
      ce.lFrame.currentDirectiveIndex = t;
    }

    function xe(t) {
      ce.lFrame.currentQueryIndex = t;
    }

    function ke(t) {
      var e = t[1];
      return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
    }

    function Ee(t, e, n) {
      if (n & lt.SkipSelf) {
        var _r9 = e,
            _o5 = t;

        for (; _r9 = _r9.parent, !(null !== _r9 || n & lt.Host || (_r9 = ke(_o5), null === _r9) || (_o5 = _o5[15], 10 & _r9.type));) {
          ;
        }

        if (null === _r9) return !1;
        e = _r9, t = _o5;
      }

      var r = ce.lFrame = Se();
      return r.currentTNode = e, r.lView = t, !0;
    }

    function Te(t) {
      var e = Se(),
          n = t[1];
      ce.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1;
    }

    function Se() {
      var t = ce.lFrame,
          e = null === t ? null : t.child;
      return null === e ? Ae(t) : e;
    }

    function Ae(t) {
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

    function Ie() {
      var t = ce.lFrame;
      return ce.lFrame = t.parent, t.currentTNode = null, t.lView = null, t;
    }

    var Me = Ie;

    function Pe() {
      var t = Ie();
      t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0;
    }

    function Oe() {
      return ce.lFrame.selectedIndex;
    }

    function De(t) {
      ce.lFrame.selectedIndex = t;
    }

    function je() {
      ce.lFrame.currentNamespace = Yt;
    }

    function Ne() {
      ce.lFrame.currentNamespace = null;
    }

    function Re(t, e) {
      for (var _n10 = e.directiveStart, _r10 = e.directiveEnd; _n10 < _r10; _n10++) {
        var _e12 = t.data[_n10].type.prototype,
            _r11 = _e12.ngAfterContentInit,
            _o6 = _e12.ngAfterContentChecked,
            _s3 = _e12.ngAfterViewInit,
            _i2 = _e12.ngAfterViewChecked,
            _l2 = _e12.ngOnDestroy;
        _r11 && (t.contentHooks || (t.contentHooks = [])).push(-_n10, _r11), _o6 && ((t.contentHooks || (t.contentHooks = [])).push(_n10, _o6), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(_n10, _o6)), _s3 && (t.viewHooks || (t.viewHooks = [])).push(-_n10, _s3), _i2 && ((t.viewHooks || (t.viewHooks = [])).push(_n10, _i2), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(_n10, _i2)), null != _l2 && (t.destroyHooks || (t.destroyHooks = [])).push(_n10, _l2);
      }
    }

    function He(t, e, n) {
      Le(t, e, 3, n);
    }

    function Ve(t, e, n, r) {
      (3 & t[2]) === n && Le(t, e, n, r);
    }

    function Fe(t, e) {
      var n = t[2];
      (3 & n) === e && (n &= 2047, n += 1, t[2] = n);
    }

    function Le(t, e, n, r) {
      var o = null != r ? r : -1,
          s = e.length - 1;
      var i = 0;

      for (var _l3 = void 0 !== r ? 65535 & t[18] : 0; _l3 < s; _l3++) {
        if ("number" == typeof e[_l3 + 1]) {
          if (i = e[_l3], null != r && i >= r) break;
        } else e[_l3] < 0 && (t[18] += 65536), (i < o || -1 == o) && (Ze(t, n, e, _l3), t[18] = (4294901760 & t[18]) + _l3 + 2), _l3++;
      }
    }

    function Ze(t, e, n, r) {
      var o = n[r] < 0,
          s = n[r + 1],
          i = t[o ? -n[r] : n[r]];

      if (o) {
        if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
          t[2] += 2048;

          try {
            s.call(i);
          } finally {}
        }
      } else try {
        s.call(i);
      } finally {}
    }

    var ze = -1;

    var Be = function Be(t, e, n) {
      _classCallCheck(this, Be);

      this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n;
    };

    function $e(t, e, n) {
      var r = Xt(t);
      var o = 0;

      for (; o < n.length;) {
        var _s4 = n[o];

        if ("number" == typeof _s4) {
          if (0 !== _s4) break;
          o++;
          var _i3 = n[o++],
              _l4 = n[o++],
              _a = n[o++];
          r ? t.setAttribute(e, _l4, _a, _i3) : e.setAttributeNS(_i3, _l4, _a);
        } else {
          var _i4 = _s4,
              _l5 = n[++o];
          Ge(_i4) ? r && t.setProperty(e, _i4, _l5) : r ? t.setAttribute(e, _i4, _l5) : e.setAttribute(_i4, _l5), o++;
        }
      }

      return o;
    }

    function Ge(t) {
      return 64 === t.charCodeAt(0);
    }

    function Ue(t, e) {
      if (null === e || 0 === e.length) ;else if (null === t || 0 === t.length) t = e.slice();else {
        var _n11 = -1;

        for (var _r12 = 0; _r12 < e.length; _r12++) {
          var _o7 = e[_r12];
          "number" == typeof _o7 ? _n11 = _o7 : 0 === _n11 || We(t, _n11, _o7, null, -1 === _n11 || 2 === _n11 ? e[++_r12] : null);
        }
      }
      return t;
    }

    function We(t, e, n, r, o) {
      var s = 0,
          i = t.length;
      if (-1 === e) i = -1;else for (; s < t.length;) {
        var _n12 = t[s++];

        if ("number" == typeof _n12) {
          if (_n12 === e) {
            i = -1;
            break;
          }

          if (_n12 > e) {
            i = s - 1;
            break;
          }
        }
      }

      for (; s < t.length;) {
        var _e13 = t[s];
        if ("number" == typeof _e13) break;

        if (_e13 === n) {
          if (null === r) return void (null !== o && (t[s + 1] = o));
          if (r === t[s + 1]) return void (t[s + 2] = o);
        }

        s++, null !== r && s++, null !== o && s++;
      }

      -1 !== i && (t.splice(i, 0, e), s = i + 1), t.splice(s++, 0, n), null !== r && t.splice(s++, 0, r), null !== o && t.splice(s++, 0, o);
    }

    function qe(t) {
      return t !== ze;
    }

    function Qe(t) {
      return 32767 & t;
    }

    function Je(t, e) {
      var n = t >> 16,
          r = e;

      for (; n > 0;) {
        r = r[15], n--;
      }

      return r;
    }

    var Ye = !0;

    function Ke(t) {
      var e = Ye;
      return Ye = t, e;
    }

    var Xe = 0;

    function tn(t, e) {
      var n = nn(t, e);
      if (-1 !== n) return n;
      var r = e[1];
      r.firstCreatePass && (t.injectorIndex = e.length, en(r.data, t), en(e, null), en(r.blueprint, null));
      var o = rn(t, e),
          s = t.injectorIndex;

      if (qe(o)) {
        var _t24 = Qe(o),
            _n13 = Je(o, e),
            _r13 = _n13[1].data;

        for (var _o8 = 0; _o8 < 8; _o8++) {
          e[s + _o8] = _n13[_t24 + _o8] | _r13[_t24 + _o8];
        }
      }

      return e[s + 8] = o, s;
    }

    function en(t, e) {
      t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
    }

    function nn(t, e) {
      return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex;
    }

    function rn(t, e) {
      if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
      var n = 0,
          r = null,
          o = e;

      for (; null !== o;) {
        var _t25 = o[1],
            _e14 = _t25.type;
        if (r = 2 === _e14 ? _t25.declTNode : 1 === _e14 ? o[6] : null, null === r) return ze;
        if (n++, o = o[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16;
      }

      return ze;
    }

    function on(t, e, n) {
      !function (t, e, n) {
        var r;
        "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(St) && (r = n[St]), null == r && (r = n[St] = Xe++);
        var o = 255 & r;
        e.data[t + (o >> 5)] |= 1 << o;
      }(t, e, n);
    }

    function sn(t, e, n) {
      if (n & lt.Optional) return t;
      Y(e, "NodeInjector");
    }

    function ln(t, e, n, r) {
      if (n & lt.Optional && void 0 === r && (r = null), 0 == (n & (lt.Self | lt.Host))) {
        var _o9 = t[9],
            _s5 = ct(void 0);

        try {
          return _o9 ? _o9.get(e, r, n & lt.Optional) : ut(e, r, n & lt.Optional);
        } finally {
          ct(_s5);
        }
      }

      return sn(r, e, n);
    }

    function an(t, e, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lt.Default;
      var o = arguments.length > 4 ? arguments[4] : undefined;

      if (null !== t) {
        var _s6 = function (t) {
          if ("string" == typeof t) return t.charCodeAt(0) || 0;
          var e = t.hasOwnProperty(St) ? t[St] : void 0;
          return "number" == typeof e ? e >= 0 ? 255 & e : un : e;
        }(n);

        if ("function" == typeof _s6) {
          if (!Ee(e, t, r)) return r & lt.Host ? sn(o, n, r) : ln(e, n, r, o);

          try {
            var _t26 = _s6(r);

            if (null != _t26 || r & lt.Optional) return _t26;
            Y(n);
          } finally {
            Me();
          }
        } else if ("number" == typeof _s6) {
          var _o10 = null,
              _i5 = nn(t, e),
              _l6 = ze,
              _a2 = r & lt.Host ? e[16][6] : null;

          for ((-1 === _i5 || r & lt.SkipSelf) && (_l6 = -1 === _i5 ? rn(t, e) : e[_i5 + 8], _l6 !== ze && pn(r, !1) ? (_o10 = e[1], _i5 = Qe(_l6), e = Je(_l6, e)) : _i5 = -1); -1 !== _i5;) {
            var _t27 = e[1];

            if (fn(_s6, _i5, _t27.data)) {
              var _t28 = hn(_i5, e, n, _o10, r, _a2);

              if (_t28 !== cn) return _t28;
            }

            _l6 = e[_i5 + 8], _l6 !== ze && pn(r, e[1].data[_i5 + 8] === _a2) && fn(_s6, _i5, e) ? (_o10 = _t27, _i5 = Qe(_l6), e = Je(_l6, e)) : _i5 = -1;
          }
        }
      }

      return ln(e, n, r, o);
    }

    var cn = {};

    function un() {
      return new gn(pe(), he());
    }

    function hn(t, e, n, r, o, s) {
      var i = e[1],
          l = i.data[t + 8],
          a = function (t, e, n, r, o) {
        var s = t.providerIndexes,
            i = e.data,
            l = 1048575 & s,
            a = t.directiveStart,
            c = s >> 20,
            u = o ? l + c : t.directiveEnd;

        for (var _h3 = r ? l : l + c; _h3 < u; _h3++) {
          var _t29 = i[_h3];
          if (_h3 < a && n === _t29 || _h3 >= a && _t29.type === n) return _h3;
        }

        if (o) {
          var _t30 = i[a];
          if (_t30 && Gt(_t30) && _t30.type === n) return a;
        }

        return null;
      }(l, i, n, null == r ? Bt(l) && Ye : r != i && 0 != (3 & l.type), o & lt.Host && s === l);

      return null !== a ? dn(e, i, a, l) : cn;
    }

    function dn(t, e, n, r) {
      var o = t[n];
      var s = e.data;

      if (o instanceof Be) {
        var _i6 = o;
        _i6.resolving && function (t, e) {
          throw new q("200", "Circular dependency in DI detected for ".concat(t));
        }(J(s[n]));

        var _l7 = Ke(_i6.canSeeViewProviders);

        _i6.resolving = !0;

        var _a3 = _i6.injectImpl ? ct(_i6.injectImpl) : null;

        Ee(t, r, lt.Default);

        try {
          o = t[n] = _i6.factory(void 0, s, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
            var _e$type$prototype = e.type.prototype,
                r = _e$type$prototype.ngOnChanges,
                o = _e$type$prototype.ngOnInit,
                s = _e$type$prototype.ngDoCheck;

            if (r) {
              var _r14 = ((i = e).type.prototype.ngOnChanges && (i.setInput = Qt), qt);

              (n.preOrderHooks || (n.preOrderHooks = [])).push(t, _r14), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, _r14);
            }

            var i;
            o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, o), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s));
          }(n, s[n], e);
        } finally {
          null !== _a3 && ct(_a3), Ke(_l7), _i6.resolving = !1, Me();
        }
      }

      return o;
    }

    function fn(t, e, n) {
      return !!(n[e + (t >> 5)] & 1 << t);
    }

    function pn(t, e) {
      return !(t & lt.Self || t & lt.Host && e);
    }

    var gn = /*#__PURE__*/function () {
      function gn(t, e) {
        _classCallCheck(this, gn);

        this._tNode = t, this._lView = e;
      }

      _createClass(gn, [{
        key: "get",
        value: function get(t, e) {
          return an(this._tNode, this._lView, t, void 0, e);
        }
      }]);

      return gn;
    }();

    var _n = "__parameters__";

    function mn(t, e, n) {
      return ht(function () {
        var r = function (t) {
          return function () {
            if (t) {
              var _n14 = t.apply(void 0, arguments);

              for (var _t31 in _n14) {
                this[_t31] = _n14[_t31];
              }
            }
          };
        }(e);

        function o() {
          for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            t[_key2] = arguments[_key2];
          }

          if (this instanceof o) return r.apply(this, t), this;

          var e = _construct(o, t);

          return n.annotation = e, n;

          function n(t, n, r) {
            var o = t.hasOwnProperty(_n) ? t[_n] : Object.defineProperty(t, _n, {
              value: []
            })[_n];

            for (; o.length <= r;) {
              o.push(null);
            }

            return (o[r] = o[r] || []).push(e), t;
          }
        }

        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o;
      });
    }

    var yn = /*#__PURE__*/function () {
      function yn(t, e) {
        _classCallCheck(this, yn);

        this._desc = t, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.ɵprov = K({
          token: this,
          providedIn: e.providedIn || "root",
          factory: e.factory
        }));
      }

      _createClass(yn, [{
        key: "toString",
        value: function toString() {
          return "InjectionToken ".concat(this._desc);
        }
      }]);

      return yn;
    }();

    function vn(t, e) {
      t.forEach(function (t) {
        return Array.isArray(t) ? vn(t, e) : e(t);
      });
    }

    function wn(t, e, n) {
      e >= t.length ? t.push(n) : t.splice(e, 0, n);
    }

    function bn(t, e) {
      return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
    }

    var Cn = {},
        xn = /\n/gm,
        kn = "__source",
        En = z({
      provide: String,
      useValue: z
    });
    var Tn;

    function Sn(t) {
      var e = Tn;
      return Tn = t, e;
    }

    function An(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lt.Default;
      if (void 0 === Tn) throw new Error("inject() must be called from an injection context");
      return null === Tn ? ut(t, void 0, e) : Tn.get(t, e & lt.Optional ? null : void 0, e);
    }

    function In(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lt.Default;
      return (at || An)(W(t), e);
    }

    function Mn(t) {
      var e = [];

      for (var _n15 = 0; _n15 < t.length; _n15++) {
        var _r15 = W(t[_n15]);

        if (Array.isArray(_r15)) {
          if (0 === _r15.length) throw new Error("Arguments array must have arguments.");

          var _t32 = void 0,
              _n16 = lt.Default;

          for (var _e15 = 0; _e15 < _r15.length; _e15++) {
            var _o11 = _r15[_e15],
                _s7 = _o11.__NG_DI_FLAG__;
            "number" == typeof _s7 ? -1 === _s7 ? _t32 = _o11.token : _n16 |= _s7 : _t32 = _o11;
          }

          e.push(In(_t32, _n16));
        } else e.push(In(_r15));
      }

      return e;
    }

    function Pn(t, e) {
      return t.__NG_DI_FLAG__ = e, t.prototype.__NG_DI_FLAG__ = e, t;
    }

    var On = Pn(mn("Inject", function (t) {
      return {
        token: t
      };
    }), -1),
        Dn = Pn(mn("Optional"), 8),
        jn = Pn(mn("SkipSelf"), 4);

    function Nn(t, e) {
      t.__ngContext__ = e;
    }

    function Rn(t) {
      var e = function (t) {
        return t.__ngContext__ || null;
      }(t);

      return e ? Array.isArray(e) ? e : e.lView : null;
    }

    function Hn(t) {
      return t.ngDebugContext;
    }

    function Vn(t) {
      return t.ngOriginalError;
    }

    function Fn(t) {
      for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      t.error.apply(t, e);
    }

    var Ln = /*#__PURE__*/function () {
      function Ln() {
        _classCallCheck(this, Ln);

        this._console = console;
      }

      _createClass(Ln, [{
        key: "handleError",
        value: function handleError(t) {
          var e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function (t) {
            return t.ngErrorLogger || Fn;
          }(t);

          r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n);
        }
      }, {
        key: "_findContext",
        value: function _findContext(t) {
          return t ? Hn(t) ? Hn(t) : this._findContext(Vn(t)) : null;
        }
      }, {
        key: "_findOriginalError",
        value: function _findOriginalError(t) {
          var e = Vn(t);

          for (; e && Vn(e);) {
            e = Vn(e);
          }

          return e;
        }
      }]);

      return Ln;
    }();

    var Zn = function () {
      return ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(yt);
    }();

    function zn(t) {
      return t instanceof Function ? t() : t;
    }

    var Bn = function () {
      return (Bn = Bn || {})[Bn.Important = 1] = "Important", Bn[Bn.DashCase = 2] = "DashCase", Bn;
    }();

    function $n(t, e) {
      return (void 0)(t, e);
    }

    function Gn(t) {
      var e = t[3];
      return Zt(e) ? e[3] : e;
    }

    function Un(t) {
      return qn(t[13]);
    }

    function Wn(t) {
      return qn(t[4]);
    }

    function qn(t) {
      for (; null !== t && !Zt(t);) {
        t = t[4];
      }

      return t;
    }

    function Qn(t, e, n, r, o) {
      if (null != r) {
        var _s8,
            _i7 = !1;

        Zt(r) ? _s8 = r : Lt(r) && (_i7 = !0, r = r[0]);

        var _l8 = ee(r);

        0 === t && null !== n ? null == o ? nr(e, n, _l8) : er(e, n, _l8, o || null, !0) : 1 === t && null !== n ? er(e, n, _l8, o || null, !0) : 2 === t ? function (t, e, n) {
          var r = or(t, e);
          r && function (t, e, n, r) {
            Xt(t) ? t.removeChild(e, n, r) : e.removeChild(n);
          }(t, r, e, n);
        }(e, _l8, _i7) : 3 === t && e.destroyNode(_l8), null != _s8 && function (t, e, n, r, o) {
          var s = n[7];
          s !== ee(n) && Qn(e, t, r, s, o);

          for (var _i8 = Ft; _i8 < n.length; _i8++) {
            var _o12 = n[_i8];
            ur(_o12[1], _o12, t, e, r, s);
          }
        }(e, t, _s8, n, o);
      }
    }

    function Jn(t, e, n) {
      return Xt(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e);
    }

    function Yn(t, e) {
      var n = t[9],
          r = n.indexOf(e),
          o = e[3];
      1024 & e[2] && (e[2] &= -1025, ae(o, -1)), n.splice(r, 1);
    }

    function Kn(t, e) {
      if (t.length <= Ft) return;
      var n = Ft + e,
          r = t[n];

      if (r) {
        var _s9 = r[17];
        null !== _s9 && _s9 !== t && Yn(_s9, r), e > 0 && (t[n - 1][4] = r[4]);

        var _i9 = bn(t, Ft + e);

        ur(r[1], o = r, o[11], 2, null, null), o[0] = null, o[6] = null;
        var _l9 = _i9[19];
        null !== _l9 && _l9.detachView(_i9[1]), r[3] = null, r[4] = null, r[2] &= -129;
      }

      var o;
      return r;
    }

    function Xn(t, e) {
      if (!(256 & e[2])) {
        var _n17 = e[11];
        Xt(_n17) && _n17.destroyNode && ur(t, e, _n17, 3, null, null), function (t) {
          var e = t[13];
          if (!e) return tr(t[1], t);

          for (; e;) {
            var _n18 = null;
            if (Lt(e)) _n18 = e[13];else {
              var _t33 = e[10];
              _t33 && (_n18 = _t33);
            }

            if (!_n18) {
              for (; e && !e[4] && e !== t;) {
                Lt(e) && tr(e[1], e), e = e[3];
              }

              null === e && (e = t), Lt(e) && tr(e[1], e), _n18 = e && e[4];
            }

            e = _n18;
          }
        }(e);
      }
    }

    function tr(t, e) {
      if (!(256 & e[2])) {
        e[2] &= -129, e[2] |= 256, function (t, e) {
          var n;
          if (null != t && null != (n = t.destroyHooks)) for (var _r16 = 0; _r16 < n.length; _r16 += 2) {
            var _t34 = e[n[_r16]];

            if (!(_t34 instanceof Be)) {
              var _e16 = n[_r16 + 1];
              if (Array.isArray(_e16)) for (var _n20 = 0; _n20 < _e16.length; _n20 += 2) {
                var _r17 = _t34[_e16[_n20]],
                    _o13 = _e16[_n20 + 1];

                try {
                  _o13.call(_r17);
                } finally {}
              } else try {
                _e16.call(_t34);
              } finally {}
            }
          }
        }(t, e), function (t, e) {
          var n = t.cleanup,
              r = e[7];
          var o = -1;
          if (null !== n) for (var _s10 = 0; _s10 < n.length - 1; _s10 += 2) {
            if ("string" == typeof n[_s10]) {
              var _t35 = n[_s10 + 1],
                  _i10 = "function" == typeof _t35 ? _t35(e) : ee(e[_t35]),
                  _l10 = r[o = n[_s10 + 2]],
                  _a4 = n[_s10 + 3];

              "boolean" == typeof _a4 ? _i10.removeEventListener(n[_s10], _l10, _a4) : _a4 >= 0 ? r[o = _a4]() : r[o = -_a4].unsubscribe(), _s10 += 2;
            } else {
              var _t36 = r[o = n[_s10 + 1]];

              n[_s10].call(_t36);
            }
          }

          if (null !== r) {
            for (var _t37 = o + 1; _t37 < r.length; _t37++) {
              (0, r[_t37])();
            }

            e[7] = null;
          }
        }(t, e), 1 === e[1].type && Xt(e[11]) && e[11].destroy();
        var _n19 = e[17];

        if (null !== _n19 && Zt(e[3])) {
          _n19 !== e[3] && Yn(_n19, e);
          var _r18 = e[19];
          null !== _r18 && _r18.detachView(t);
        }
      }
    }

    function er(t, e, n, r, o) {
      Xt(t) ? t.insertBefore(e, n, r, o) : e.insertBefore(n, r, o);
    }

    function nr(t, e, n) {
      Xt(t) ? t.appendChild(e, n) : e.appendChild(n);
    }

    function rr(t, e, n, r, o) {
      null !== r ? er(t, e, n, r, o) : nr(t, e, n);
    }

    function or(t, e) {
      return Xt(t) ? t.parentNode(e) : e.parentNode;
    }

    function sr(t, e, n, r) {
      var o = function (t, e, n) {
        return function (t, e, n) {
          var r = e;

          for (; null !== r && 40 & r.type;) {
            r = (e = r).parent;
          }

          if (null === r) return n[0];

          if (2 & r.flags) {
            var _e17 = t.data[r.directiveStart].encapsulation;
            if (_e17 === ft.None || _e17 === ft.Emulated) return null;
          }

          return ne(r, n);
        }(t, e.parent, n);
      }(t, r, e),
          s = e[11],
          i = function (t, e, n) {
        return function (t, e, n) {
          return 40 & t.type ? ne(t, n) : null;
        }(t, 0, n);
      }(r.parent || e[6], 0, e);

      if (null != o) if (Array.isArray(n)) for (var _l11 = 0; _l11 < n.length; _l11++) {
        rr(s, o, n[_l11], i, !1);
      } else rr(s, o, n, i, !1);
    }

    function ir(t, e) {
      if (null !== e) {
        var _n21 = e.type;
        if (3 & _n21) return ne(e, t);
        if (4 & _n21) return ar(-1, t[e.index]);

        if (8 & _n21) {
          var _n22 = e.child;
          if (null !== _n22) return ir(t, _n22);
          {
            var _n23 = t[e.index];
            return Zt(_n23) ? ar(-1, _n23) : ee(_n23);
          }
        }

        if (32 & _n21) return $n(e, t)() || ee(t[e.index]);
        {
          var _n24 = lr(t, e);

          return null !== _n24 ? Array.isArray(_n24) ? _n24[0] : ir(Gn(t[16]), _n24) : ir(t, e.next);
        }
      }

      return null;
    }

    function lr(t, e) {
      return null !== e ? t[16][6].projection[e.projection] : null;
    }

    function ar(t, e) {
      var n = Ft + t + 1;

      if (n < e.length) {
        var _t38 = e[n],
            _r19 = _t38[1].firstChild;
        if (null !== _r19) return ir(_t38, _r19);
      }

      return e[7];
    }

    function cr(t, e, n, r, o, s, i) {
      for (; null != n;) {
        var _l12 = r[n.index],
            _a5 = n.type;
        if (i && 0 === e && (_l12 && Nn(ee(_l12), r), n.flags |= 4), 64 != (64 & n.flags)) if (8 & _a5) cr(t, e, n.child, r, o, s, !1), Qn(e, t, o, _l12, s);else if (32 & _a5) {
          var _i11 = $n(n, r);

          var _a6 = void 0;

          for (; _a6 = _i11();) {
            Qn(e, t, o, _a6, s);
          }

          Qn(e, t, o, _l12, s);
        } else 16 & _a5 ? hr(t, e, r, n, o, s) : Qn(e, t, o, _l12, s);
        n = i ? n.projectionNext : n.next;
      }
    }

    function ur(t, e, n, r, o, s) {
      cr(n, r, t.firstChild, e, o, s, !1);
    }

    function hr(t, e, n, r, o, s) {
      var i = n[16],
          l = i[6].projection[r.projection];
      if (Array.isArray(l)) for (var _a7 = 0; _a7 < l.length; _a7++) {
        Qn(e, t, o, l[_a7], s);
      } else cr(t, e, l, i[3], o, s, !0);
    }

    function dr(t, e, n) {
      Xt(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n;
    }

    function fr(t, e, n) {
      Xt(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n;
    }

    function pr(t, e, n) {
      var r = t.length;

      for (;;) {
        var _o14 = t.indexOf(e, n);

        if (-1 === _o14) return _o14;

        if (0 === _o14 || t.charCodeAt(_o14 - 1) <= 32) {
          var _n25 = e.length;
          if (_o14 + _n25 === r || t.charCodeAt(_o14 + _n25) <= 32) return _o14;
        }

        n = _o14 + 1;
      }
    }

    var gr = "ng-template";

    function _r(t, e, n) {
      var r = 0;

      for (; r < t.length;) {
        var _o15 = t[r++];

        if (n && "class" === _o15) {
          if (_o15 = t[r], -1 !== pr(_o15.toLowerCase(), e, 0)) return !0;
        } else if (1 === _o15) {
          for (; r < t.length && "string" == typeof (_o15 = t[r++]);) {
            if (_o15.toLowerCase() === e) return !0;
          }

          return !1;
        }
      }

      return !1;
    }

    function mr(t) {
      return 4 === t.type && t.value !== gr;
    }

    function yr(t, e, n) {
      return e === (4 !== t.type || n ? t.value : gr);
    }

    function vr(t, e, n) {
      var r = 4;

      var o = t.attrs || [],
          s = function (t) {
        for (var _n26 = 0; _n26 < t.length; _n26++) {
          if (3 === (e = t[_n26]) || 4 === e || 6 === e) return _n26;
        }

        var e;
        return t.length;
      }(o);

      var i = !1;

      for (var _l13 = 0; _l13 < e.length; _l13++) {
        var _a8 = e[_l13];

        if ("number" != typeof _a8) {
          if (!i) if (4 & r) {
            if (r = 2 | 1 & r, "" !== _a8 && !yr(t, _a8, n) || "" === _a8 && 1 === e.length) {
              if (wr(r)) return !1;
              i = !0;
            }
          } else {
            var _c = 8 & r ? _a8 : e[++_l13];

            if (8 & r && null !== t.attrs) {
              if (!_r(t.attrs, _c, n)) {
                if (wr(r)) return !1;
                i = !0;
              }

              continue;
            }

            var _u = br(8 & r ? "class" : _a8, o, mr(t), n);

            if (-1 === _u) {
              if (wr(r)) return !1;
              i = !0;
              continue;
            }

            if ("" !== _c) {
              var _t39 = void 0;

              _t39 = _u > s ? "" : o[_u + 1].toLowerCase();

              var _e18 = 8 & r ? _t39 : null;

              if (_e18 && -1 !== pr(_e18, _c, 0) || 2 & r && _c !== _t39) {
                if (wr(r)) return !1;
                i = !0;
              }
            }
          }
        } else {
          if (!i && !wr(r) && !wr(_a8)) return !1;
          if (i && wr(_a8)) continue;
          i = !1, r = _a8 | 1 & r;
        }
      }

      return wr(r) || i;
    }

    function wr(t) {
      return 0 == (1 & t);
    }

    function br(t, e, n, r) {
      if (null === e) return -1;
      var o = 0;

      if (r || !n) {
        var _n27 = !1;

        for (; o < e.length;) {
          var _r20 = e[o];
          if (_r20 === t) return o;
          if (3 === _r20 || 6 === _r20) _n27 = !0;else {
            if (1 === _r20 || 2 === _r20) {
              var _t40 = e[++o];

              for (; "string" == typeof _t40;) {
                _t40 = e[++o];
              }

              continue;
            }

            if (4 === _r20) break;

            if (0 === _r20) {
              o += 4;
              continue;
            }
          }
          o += _n27 ? 1 : 2;
        }

        return -1;
      }

      return function (t, e) {
        var n = t.indexOf(4);
        if (n > -1) for (n++; n < t.length;) {
          var _r21 = t[n];
          if ("number" == typeof _r21) return -1;
          if (_r21 === e) return n;
          n++;
        }
        return -1;
      }(e, t);
    }

    function Cr(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

      for (var _r22 = 0; _r22 < e.length; _r22++) {
        if (vr(t, e[_r22], n)) return !0;
      }

      return !1;
    }

    function xr(t, e) {
      return t ? ":not(" + e.trim() + ")" : e;
    }

    function kr(t) {
      var e = t[0],
          n = 1,
          r = 2,
          o = "",
          s = !1;

      for (; n < t.length;) {
        var _i12 = t[n];
        if ("string" == typeof _i12) {
          if (2 & r) {
            var _e19 = t[++n];
            o += "[" + _i12 + (_e19.length > 0 ? '="' + _e19 + '"' : "") + "]";
          } else 8 & r ? o += "." + _i12 : 4 & r && (o += " " + _i12);
        } else "" === o || wr(_i12) || (e += xr(s, o), o = ""), r = _i12, s = s || !wr(r);
        n++;
      }

      return "" !== o && (e += xr(s, o)), e;
    }

    var Er = {};

    function Tr(t) {
      Sr(de(), he(), Oe() + t, ye());
    }

    function Sr(t, e, n, r) {
      if (!r) if (3 == (3 & e[2])) {
        var _r23 = t.preOrderCheckHooks;
        null !== _r23 && He(e, _r23, n);
      } else {
        var _r24 = t.preOrderHooks;
        null !== _r24 && Ve(e, _r24, 0, n);
      }
      De(n);
    }

    function Ar(t, e) {
      var n = t.contentQueries;
      if (null !== n) for (var _r25 = 0; _r25 < n.length; _r25 += 2) {
        var _o16 = n[_r25],
            _s11 = n[_r25 + 1];

        if (-1 !== _s11) {
          var _n28 = t.data[_s11];
          xe(_o16), _n28.contentQueries(2, e[_s11], _s11);
        }
      }
    }

    function Ir(t, e, n, r, o, s, i, l, a, c) {
      var u = e.blueprint.slice();
      return u[0] = o, u[2] = 140 | r, le(u), u[3] = u[15] = t, u[8] = n, u[10] = i || t && t[10], u[11] = l || t && t[11], u[12] = a || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = s, u[16] = 2 == e.type ? t[16] : u, u;
    }

    function Mr(t, e, n, r, o) {
      var s = t.data[e];
      if (null === s) s = function (t, e, n, r, o) {
        var s = ge(),
            i = me(),
            l = t.data[e] = function (t, e, n, r, o, s) {
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
            value: o,
            attrs: s,
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
        }(0, i ? s : s && s.parent, n, e, r, o);

        return null === t.firstChild && (t.firstChild = l), null !== s && (i ? null == s.child && null !== l.parent && (s.child = l) : null === s.next && (s.next = l)), l;
      }(t, e, n, r, o), ce.lFrame.inI18n && (s.flags |= 64);else if (64 & s.type) {
        s.type = n, s.value = r, s.attrs = o;

        var _t41 = function () {
          var t = ce.lFrame,
              e = t.currentTNode;
          return t.isParent ? e : e.parent;
        }();

        s.injectorIndex = null === _t41 ? -1 : _t41.injectorIndex;
      }
      return _e(s, !0), s;
    }

    function Pr(t, e, n, r) {
      if (0 === n) return -1;
      var o = e.length;

      for (var _s12 = 0; _s12 < n; _s12++) {
        e.push(r), t.blueprint.push(r), t.data.push(null);
      }

      return o;
    }

    function Or(t, e, n) {
      Te(e);

      try {
        var _r26 = t.viewQuery;
        null !== _r26 && so(1, _r26, n);
        var _o17 = t.template;
        null !== _o17 && Nr(t, e, _o17, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Ar(t, e), t.staticViewQueries && so(2, t.viewQuery, n);
        var _s13 = t.components;
        null !== _s13 && function (t, e) {
          for (var _n29 = 0; _n29 < e.length; _n29++) {
            to(t, e[_n29]);
          }
        }(e, _s13);
      } catch (r) {
        throw t.firstCreatePass && (t.incompleteFirstPass = !0), r;
      } finally {
        e[2] &= -5, Pe();
      }
    }

    function Dr(t, e, n, r) {
      var o = e[2];
      if (256 == (256 & o)) return;
      Te(e);
      var s = ye();

      try {
        le(e), ce.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Nr(t, e, n, 2, r);

        var _i13 = 3 == (3 & o);

        if (!s) if (_i13) {
          var _n30 = t.preOrderCheckHooks;
          null !== _n30 && He(e, _n30, null);
        } else {
          var _n31 = t.preOrderHooks;
          null !== _n31 && Ve(e, _n31, 0, null), Fe(e, 0);
        }
        if (function (t) {
          for (var _e20 = Un(t); null !== _e20; _e20 = Wn(_e20)) {
            if (!_e20[2]) continue;
            var _t42 = _e20[9];

            for (var _e21 = 0; _e21 < _t42.length; _e21++) {
              var _n32 = _t42[_e21],
                  _r27 = _n32[3];
              0 == (1024 & _n32[2]) && ae(_r27, 1), _n32[2] |= 1024;
            }
          }
        }(e), function (t) {
          for (var _e22 = Un(t); null !== _e22; _e22 = Wn(_e22)) {
            for (var _t43 = Ft; _t43 < _e22.length; _t43++) {
              var _n33 = _e22[_t43],
                  _r28 = _n33[1];
              se(_n33) && Dr(_r28, _n33, _r28.template, _n33[8]);
            }
          }
        }(e), null !== t.contentQueries && Ar(t, e), !s) if (_i13) {
          var _n34 = t.contentCheckHooks;
          null !== _n34 && He(e, _n34);
        } else {
          var _n35 = t.contentHooks;
          null !== _n35 && Ve(e, _n35, 1), Fe(e, 1);
        }
        !function (t, e) {
          var n = t.hostBindingOpCodes;
          if (null !== n) try {
            for (var _t44 = 0; _t44 < n.length; _t44++) {
              var _r29 = n[_t44];
              if (_r29 < 0) De(~_r29);else {
                var _o18 = _r29,
                    _s14 = n[++_t44],
                    _i14 = n[++_t44];
                be(_s14, _o18), _i14(2, e[_o18]);
              }
            }
          } finally {
            De(-1);
          }
        }(t, e);
        var _l14 = t.components;
        null !== _l14 && function (t, e) {
          for (var _n36 = 0; _n36 < e.length; _n36++) {
            Kr(t, e[_n36]);
          }
        }(e, _l14);
        var _a9 = t.viewQuery;
        if (null !== _a9 && so(2, _a9, r), !s) if (_i13) {
          var _n37 = t.viewCheckHooks;
          null !== _n37 && He(e, _n37);
        } else {
          var _n38 = t.viewHooks;
          null !== _n38 && Ve(e, _n38, 2), Fe(e, 2);
        }
        !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), s || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, ae(e[3], -1));
      } finally {
        Pe();
      }
    }

    function jr(t, e, n, r) {
      var o = e[10],
          s = !ye(),
          i = 4 == (4 & e[2]);

      try {
        s && !i && o.begin && o.begin(), i && Or(t, e, r), Dr(t, e, n, r);
      } finally {
        s && !i && o.end && o.end();
      }
    }

    function Nr(t, e, n, r, o) {
      var s = Oe(),
          i = 2 & r;

      try {
        De(-1), i && e.length > Vt && Sr(t, e, Vt, ye()), n(r, o);
      } finally {
        De(s);
      }
    }

    function Rr(t, e, n) {
      ue() && (function (t, e, n, r) {
        var o = n.directiveStart,
            s = n.directiveEnd;
        t.firstCreatePass || tn(n, e), Nn(r, e);
        var i = n.initialInputs;

        for (var _l15 = o; _l15 < s; _l15++) {
          var _r30 = t.data[_l15],
              _s15 = Gt(_r30);

          _s15 && qr(e, n, _r30);

          var _a10 = dn(e, t, _l15, n);

          Nn(_a10, e), null !== i && Qr(0, _l15 - o, _a10, _r30, 0, i), _s15 && (oe(n.index, e)[8] = _a10);
        }
      }(t, e, n, ne(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
        var r = n.directiveStart,
            o = n.directiveEnd,
            s = n.index,
            i = ce.lFrame.currentDirectiveIndex;

        try {
          De(s);

          for (var _n39 = r; _n39 < o; _n39++) {
            var _r31 = t.data[_n39],
                _o19 = e[_n39];
            Ce(_n39), null === _r31.hostBindings && 0 === _r31.hostVars && null === _r31.hostAttrs || Br(_r31, _o19);
          }
        } finally {
          De(-1), Ce(i);
        }
      }(t, e, n));
    }

    function Hr(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ne;
      var r = e.localNames;

      if (null !== r) {
        var _o20 = e.index + 1;

        for (var _s16 = 0; _s16 < r.length; _s16 += 2) {
          var _i15 = r[_s16 + 1],
              _l16 = -1 === _i15 ? n(e, t) : t[_i15];

          t[_o20++] = _l16;
        }
      }
    }

    function Vr(t) {
      var e = t.tView;
      return null === e || e.incompleteFirstPass ? t.tView = Fr(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e;
    }

    function Fr(t, e, n, r, o, s, i, l, a, c) {
      var u = Vt + r,
          h = u + o,
          d = function (t, e) {
        var n = [];

        for (var _r32 = 0; _r32 < e; _r32++) {
          n.push(_r32 < t ? null : Er);
        }

        return n;
      }(u, h),
          f = "function" == typeof c ? c() : c;

      return d[1] = {
        type: t,
        blueprint: d,
        template: n,
        queries: null,
        viewQuery: l,
        declTNode: e,
        data: d.slice().fill(null, u),
        bindingStartIndex: u,
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
        directiveRegistry: "function" == typeof s ? s() : s,
        pipeRegistry: "function" == typeof i ? i() : i,
        firstChild: null,
        schemas: a,
        consts: f,
        incompleteFirstPass: !1
      };
    }

    function Lr(t, e, n) {
      for (var _r33 in t) {
        if (t.hasOwnProperty(_r33)) {
          var _o21 = t[_r33];
          (n = null === n ? {} : n).hasOwnProperty(_r33) ? n[_r33].push(e, _o21) : n[_r33] = [e, _o21];
        }
      }

      return n;
    }

    function Zr(t, e, n, r) {
      var o = !1;

      if (ue()) {
        var _s17 = function (t, e, n) {
          var r = t.directiveRegistry;
          var o = null;
          if (r) for (var _s18 = 0; _s18 < r.length; _s18++) {
            var _i17 = r[_s18];
            Cr(n, _i17.selectors, !1) && (o || (o = []), on(tn(n, e), t, _i17.type), Gt(_i17) ? ($r(t, n), o.unshift(_i17)) : o.push(_i17));
          }
          return o;
        }(t, e, n),
            _i16 = null === r ? null : {
          "": -1
        };

        if (null !== _s17) {
          o = !0, Ur(n, t.data.length, _s17.length);

          for (var _t45 = 0; _t45 < _s17.length; _t45++) {
            var _e23 = _s17[_t45];
            _e23.providersResolver && _e23.providersResolver(_e23);
          }

          var _r34 = !1,
              _l17 = !1,
              _a11 = Pr(t, e, _s17.length, null);

          for (var _o22 = 0; _o22 < _s17.length; _o22++) {
            var _c2 = _s17[_o22];
            n.mergedAttrs = Ue(n.mergedAttrs, _c2.hostAttrs), Wr(t, n, e, _a11, _c2), Gr(_a11, _c2, _i16), null !== _c2.contentQueries && (n.flags |= 8), null === _c2.hostBindings && null === _c2.hostAttrs && 0 === _c2.hostVars || (n.flags |= 128);
            var _u2 = _c2.type.prototype;
            !_r34 && (_u2.ngOnChanges || _u2.ngOnInit || _u2.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index), _r34 = !0), _l17 || !_u2.ngOnChanges && !_u2.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index), _l17 = !0), _a11++;
          }

          !function (t, e) {
            var n = e.directiveEnd,
                r = t.data,
                o = e.attrs,
                s = [];
            var i = null,
                l = null;

            for (var _a12 = e.directiveStart; _a12 < n; _a12++) {
              var _t46 = r[_a12],
                  _n40 = _t46.inputs,
                  _c3 = null === o || mr(e) ? null : Jr(_n40, o);

              s.push(_c3), i = Lr(_n40, _a12, i), l = Lr(_t46.outputs, _a12, l);
            }

            null !== i && (i.hasOwnProperty("class") && (e.flags |= 16), i.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = s, e.inputs = i, e.outputs = l;
          }(t, n);
        }

        _i16 && function (t, e, n) {
          if (e) {
            var _r35 = t.localNames = [];

            for (var _t47 = 0; _t47 < e.length; _t47 += 2) {
              var _o23 = n[e[_t47 + 1]];
              if (null == _o23) throw new q("301", "Export of name '".concat(e[_t47 + 1], "' not found!"));

              _r35.push(e[_t47], _o23);
            }
          }
        }(n, r, _i16);
      }

      return n.mergedAttrs = Ue(n.mergedAttrs, n.attrs), o;
    }

    function zr(t, e, n, r, o, s) {
      var i = s.hostBindings;

      if (i) {
        var _n41 = t.hostBindingOpCodes;
        null === _n41 && (_n41 = t.hostBindingOpCodes = []);

        var _s19 = ~e.index;

        (function (t) {
          var e = t.length;

          for (; e > 0;) {
            var _n42 = t[--e];
            if ("number" == typeof _n42 && _n42 < 0) return _n42;
          }

          return 0;
        })(_n41) != _s19 && _n41.push(_s19), _n41.push(r, o, i);
      }
    }

    function Br(t, e) {
      null !== t.hostBindings && t.hostBindings(1, e);
    }

    function $r(t, e) {
      e.flags |= 2, (t.components || (t.components = [])).push(e.index);
    }

    function Gr(t, e, n) {
      if (n) {
        if (e.exportAs) for (var _r36 = 0; _r36 < e.exportAs.length; _r36++) {
          n[e.exportAs[_r36]] = t;
        }
        Gt(e) && (n[""] = t);
      }
    }

    function Ur(t, e, n) {
      t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e;
    }

    function Wr(t, e, n, r, o) {
      t.data[r] = o;
      var s = o.factory || (o.factory = Ut(o.type)),
          i = new Be(s, Gt(o), null);
      t.blueprint[r] = i, n[r] = i, zr(t, e, 0, r, Pr(t, n, o.hostVars, Er), o);
    }

    function qr(t, e, n) {
      var r = ne(e, t),
          o = Vr(n),
          s = t[10],
          i = eo(t, Ir(t, o, null, n.onPush ? 64 : 16, r, e, s, s.createRenderer(r, n), null, null));
      t[e.index] = i;
    }

    function Qr(t, e, n, r, o, s) {
      var i = s[e];

      if (null !== i) {
        var _t48 = r.setInput;

        for (var _e24 = 0; _e24 < i.length;) {
          var _o24 = i[_e24++],
              _s20 = i[_e24++],
              _l18 = i[_e24++];
          null !== _t48 ? r.setInput(n, _l18, _o24, _s20) : n[_s20] = _l18;
        }
      }
    }

    function Jr(t, e) {
      var n = null,
          r = 0;

      for (; r < e.length;) {
        var _o25 = e[r];
        if (0 !== _o25) {
          if (5 !== _o25) {
            if ("number" == typeof _o25) break;
            t.hasOwnProperty(_o25) && (null === n && (n = []), n.push(_o25, t[_o25], e[r + 1])), r += 2;
          } else r += 2;
        } else r += 4;
      }

      return n;
    }

    function Yr(t, e, n, r) {
      return new Array(t, !0, !1, e, null, 0, r, n, null, null);
    }

    function Kr(t, e) {
      var n = oe(e, t);

      if (se(n)) {
        var _t49 = n[1];
        80 & n[2] ? Dr(_t49, n, _t49.template, n[8]) : n[5] > 0 && Xr(n);
      }
    }

    function Xr(t) {
      for (var _n43 = Un(t); null !== _n43; _n43 = Wn(_n43)) {
        for (var _t50 = Ft; _t50 < _n43.length; _t50++) {
          var _e25 = _n43[_t50];

          if (1024 & _e25[2]) {
            var _t51 = _e25[1];
            Dr(_t51, _e25, _t51.template, _e25[8]);
          } else _e25[5] > 0 && Xr(_e25);
        }
      }

      var e = t[1].components;
      if (null !== e) for (var _n44 = 0; _n44 < e.length; _n44++) {
        var _r37 = oe(e[_n44], t);

        se(_r37) && _r37[5] > 0 && Xr(_r37);
      }
    }

    function to(t, e) {
      var n = oe(e, t),
          r = n[1];
      !function (t, e) {
        for (var _n45 = e.length; _n45 < t.blueprint.length; _n45++) {
          e.push(t.blueprint[_n45]);
        }
      }(r, n), Or(r, n, n[8]);
    }

    function eo(t, e) {
      return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e;
    }

    function no(t) {
      for (; t;) {
        t[2] |= 64;

        var _e26 = Gn(t);

        if (0 != (512 & t[2]) && !_e26) return t;
        t = _e26;
      }

      return null;
    }

    function ro(t, e, n) {
      var r = e[10];
      r.begin && r.begin();

      try {
        Dr(t, e, t.template, n);
      } catch (o) {
        throw co(e, o), o;
      } finally {
        r.end && r.end();
      }
    }

    function oo(t) {
      !function (t) {
        for (var _e27 = 0; _e27 < t.components.length; _e27++) {
          var _n46 = t.components[_e27],
              _r38 = Rn(_n46),
              _o26 = _r38[1];

          jr(_o26, _r38, _o26.template, _n46);
        }
      }(t[8]);
    }

    function so(t, e, n) {
      xe(0), e(t, n);
    }

    var io = function () {
      return Promise.resolve(null);
    }();

    function lo(t) {
      return t[7] || (t[7] = []);
    }

    function ao(t) {
      return t.cleanup || (t.cleanup = []);
    }

    function co(t, e) {
      var n = t[9],
          r = n ? n.get(Ln, null) : null;
      r && r.handleError(e);
    }

    function uo(t, e, n, r, o) {
      for (var _s21 = 0; _s21 < n.length;) {
        var _i18 = n[_s21++],
            _l19 = n[_s21++],
            _a13 = e[_i18],
            _c4 = t.data[_i18];
        null !== _c4.setInput ? _c4.setInput(_a13, o, r, _l19) : _a13[_l19] = o;
      }
    }

    function ho(t, e, n) {
      var r = n ? t.styles : null,
          o = n ? t.classes : null,
          s = 0;
      if (null !== e) for (var _i19 = 0; _i19 < e.length; _i19++) {
        var _t52 = e[_i19];
        "number" == typeof _t52 ? s = _t52 : 1 == s ? o = $(o, _t52) : 2 == s && (r = $(r, _t52 + ": " + e[++_i19] + ";"));
      }
      n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = o : t.classesWithoutHost = o;
    }

    var fo = new yn("INJECTOR", -1);

    var po = /*#__PURE__*/function () {
      function po() {
        _classCallCheck(this, po);
      }

      _createClass(po, [{
        key: "get",
        value: function get(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cn;

          if (e === Cn) {
            var _e28 = new Error("NullInjectorError: No provider for ".concat(B(t), "!"));

            throw _e28.name = "NullInjectorError", _e28;
          }

          return e;
        }
      }]);

      return po;
    }();

    var go = new yn("Set Injector scope."),
        _o = {},
        mo = {};
    var yo;

    function vo() {
      return void 0 === yo && (yo = new po()), yo;
    }

    function wo(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      return new bo(t, n, e || vo(), r);
    }

    var bo = /*#__PURE__*/function () {
      function bo(t, e, n) {
        var _this17 = this;

        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, bo);

        this.parent = n, this.records = new Map(), this.injectorDefTypes = new Set(), this.onDestroy = new Set(), this._destroyed = !1;
        var o = [];
        e && vn(e, function (n) {
          return _this17.processProvider(n, t, e);
        }), vn([t], function (t) {
          return _this17.processInjectorType(t, [], o);
        }), this.records.set(fo, xo(void 0, this));
        var s = this.records.get(go);
        this.scope = null != s ? s.value : null, this.source = r || ("object" == _typeof(t) ? null : B(t));
      }

      _createClass(bo, [{
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
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cn;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : lt.Default;
          this.assertNotDestroyed();
          var r = Sn(this);

          try {
            if (!(n & lt.SkipSelf)) {
              var _e29 = this.records.get(t);

              if (void 0 === _e29) {
                var _n47 = ("function" == typeof (o = t) || "object" == _typeof(o) && o instanceof yn) && tt(t);

                _e29 = _n47 && this.injectableDefInScope(_n47) ? xo(Co(t), _o) : null, this.records.set(t, _e29);
              }

              if (null != _e29) return this.hydrate(t, _e29);
            }

            return (n & lt.Self ? vo() : this.parent).get(t, e = n & lt.Optional && e === Cn ? null : e);
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(B(t)), r) throw s;
              return function (t, e, n, r) {
                var o = t.ngTempTokenPath;
                throw e[kn] && o.unshift(e[kn]), t.message = function (t, e, n) {
                  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                  t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                  var o = B(e);
                  if (Array.isArray(e)) o = e.map(B).join(" -> ");else if ("object" == _typeof(e)) {
                    var _t53 = [];

                    for (var _n48 in e) {
                      if (e.hasOwnProperty(_n48)) {
                        var _r39 = e[_n48];

                        _t53.push(_n48 + ":" + ("string" == typeof _r39 ? JSON.stringify(_r39) : B(_r39)));
                      }
                    }

                    o = "{".concat(_t53.join(", "), "}");
                  }
                  return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(o, "]: ").concat(t.replace(xn, "\n  "));
                }("\n" + t.message, o, n, r), t.ngTokenPath = o, t.ngTempTokenPath = null, t;
              }(s, t, "R3InjectorError", this.source);
            }

            throw s;
          } finally {
            Sn(r);
          }

          var o;
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
            return t.push(B(n));
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

          if (!(t = W(t))) return !1;
          var r = nt(t);
          var o = null == r && t.ngModule || void 0,
              s = void 0 === o ? t : o,
              i = -1 !== n.indexOf(s);
          if (void 0 !== o && (r = nt(o)), null == r) return !1;

          if (null != r.imports && !i) {
            var _t54;

            n.push(s);

            try {
              vn(r.imports, function (r) {
                _this19.processInjectorType(r, e, n) && (void 0 === _t54 && (_t54 = []), _t54.push(r));
              });
            } finally {}

            if (void 0 !== _t54) {
              var _loop = function _loop(_e30) {
                var _t54$_e = _t54[_e30],
                    n = _t54$_e.ngModule,
                    r = _t54$_e.providers;
                vn(r, function (t) {
                  return _this19.processProvider(t, n, r || wt);
                });
              };

              for (var _e30 = 0; _e30 < _t54.length; _e30++) {
                _loop(_e30);
              }
            }
          }

          this.injectorDefTypes.add(s);

          var l = Ut(s) || function () {
            return new s();
          };

          this.records.set(s, xo(l, _o));
          var a = r.providers;

          if (null != a && !i) {
            var _e31 = t;
            vn(a, function (t) {
              return _this19.processProvider(t, _e31, a);
            });
          }

          return void 0 !== o && void 0 !== t.providers;
        }
      }, {
        key: "processProvider",
        value: function processProvider(t, e, n) {
          var r = Eo(t = W(t)) ? t : W(t && t.provide);

          var o = function (t, e, n) {
            return ko(t) ? xo(void 0, t.useValue) : xo(function (t, e, n) {
              var r;

              if (Eo(t)) {
                var _e32 = W(t);

                return Ut(_e32) || Co(_e32);
              }

              if (ko(t)) r = function r() {
                return W(t.useValue);
              };else if ((o = t) && o.useFactory) r = function r() {
                return t.useFactory.apply(t, _toConsumableArray(Mn(t.deps || [])));
              };else if (function (t) {
                return !(!t || !t.useExisting);
              }(t)) r = function r() {
                return In(W(t.useExisting));
              };else {
                var _e33 = W(t && (t.useClass || t.provide));

                if (!function (t) {
                  return !!t.deps;
                }(t)) return Ut(_e33) || Co(_e33);

                r = function r() {
                  return _construct(_e33, _toConsumableArray(Mn(t.deps)));
                };
              }
              var o;
              return r;
            }(t), _o);
          }(t);

          if (Eo(t) || !0 !== t.multi) this.records.get(r);else {
            var _e34 = this.records.get(r);

            _e34 || (_e34 = xo(void 0, _o, !0), _e34.factory = function () {
              return Mn(_e34.multi);
            }, this.records.set(r, _e34)), r = t, _e34.multi.push(t);
          }
          this.records.set(r, o);
        }
      }, {
        key: "hydrate",
        value: function hydrate(t, e) {
          var n;
          return e.value === _o && (e.value = mo, e.value = e.factory()), "object" == _typeof(e.value) && e.value && null !== (n = e.value) && "object" == _typeof(n) && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value;
        }
      }, {
        key: "injectableDefInScope",
        value: function injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          var e = W(t.providedIn);
          return "string" == typeof e ? "any" === e || e === this.scope : this.injectorDefTypes.has(e);
        }
      }]);

      return bo;
    }();

    function Co(t) {
      var e = tt(t),
          n = null !== e ? e.factory : Ut(t);
      if (null !== n) return n;
      if (t instanceof yn) throw new Error("Token ".concat(B(t), " is missing a \u0275prov definition."));
      if (t instanceof Function) return function (t) {
        var e = t.length;

        if (e > 0) {
          var _n49 = function (t, e) {
            var n = [];

            for (var _r40 = 0; _r40 < t; _r40++) {
              n.push("?");
            }

            return n;
          }(e);

          throw new Error("Can't resolve all parameters for ".concat(B(t), ": (").concat(_n49.join(", "), ")."));
        }

        var n = function (t) {
          var e = t && (t[rt] || t[st]);

          if (e) {
            var _n50 = function (t) {
              if (t.hasOwnProperty("name")) return t.name;
              var e = ("" + t).match(/^function\s*([^\s(]+)/);
              return null === e ? "" : e[1];
            }(t);

            return console.warn("DEPRECATED: DI is instantiating a token \"".concat(_n50, "\" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the \"").concat(_n50, "\" class.")), e;
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

    function xo(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return {
        factory: t,
        value: e,
        multi: n ? [] : void 0
      };
    }

    function ko(t) {
      return null !== t && "object" == _typeof(t) && En in t;
    }

    function Eo(t) {
      return "function" == typeof t;
    }

    var To = function To(t, e, n) {
      return function (t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var r = arguments.length > 3 ? arguments[3] : undefined;
        var o = wo(t, e, n, r);
        return o._resolveInjectorDefTypes(), o;
      }({
        name: n
      }, e, t, n);
    };

    var So = /*#__PURE__*/function () {
      function So() {
        _classCallCheck(this, So);
      }

      _createClass(So, null, [{
        key: "create",
        value: function create(t, e) {
          return Array.isArray(t) ? To(t, e, "") : To(t.providers, t.parent, t.name || "");
        }
      }]);

      return So;
    }();

    function Ao(t, e) {
      Re(Rn(t)[1], pe());
    }

    So.THROW_IF_NOT_FOUND = Cn, So.NULL = new po(), So.ɵprov = K({
      token: So,
      providedIn: "any",
      factory: function factory() {
        return In(fo);
      }
    }), So.__NG_ELEMENT_ID__ = -1;
    var Io = null;

    function Mo() {
      if (!Io) {
        var _t55 = yt.Symbol;
        if (_t55 && _t55.iterator) Io = _t55.iterator;else {
          var _t56 = Object.getOwnPropertyNames(Map.prototype);

          for (var _e35 = 0; _e35 < _t56.length; ++_e35) {
            var _n51 = _t56[_e35];
            "entries" !== _n51 && "size" !== _n51 && Map.prototype[_n51] === Map.prototype.entries && (Io = _n51);
          }
        }
      }

      return Io;
    }

    function Po(t) {
      return !!Oo(t) && (Array.isArray(t) || !(t instanceof Map) && Mo() in t);
    }

    function Oo(t) {
      return null !== t && ("function" == typeof t || "object" == _typeof(t));
    }

    function Do(t, e, n) {
      return !Object.is(t[e], n) && (t[e] = n, !0);
    }

    function jo(t, e, n, r, o, s, i, l) {
      var a = he(),
          c = de(),
          u = t + Vt,
          h = c.firstCreatePass ? function (t, e, n, r, o, s, i, l, a) {
        var c = e.consts,
            u = Mr(e, t, 4, i || null, ie(c, l));
        Zr(e, n, u, ie(c, a)), Re(e, u);
        var h = u.tViews = Fr(2, u, r, o, s, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c);
        return null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u;
      }(u, c, a, e, n, r, o, s, i) : c.data[u];

      _e(h, !1);

      var d = a[11].createComment("");
      sr(c, a, d, h), Nn(d, a), eo(a, a[u] = Yr(d, a, d, h)), $t(h) && Rr(c, a, h), null != i && Hr(a, h, l);
    }

    function No(t) {
      return function (t, e) {
        return t[e];
      }(ce.lFrame.contextLView, Vt + t);
    }

    function Ro(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lt.Default;
      var n = he();
      return null === n ? In(t, e) : an(pe(), n, W(t), e);
    }

    function Ho(t, e, n) {
      var r = he();
      return Do(r, we(), e) && function (t, e, n, r, o, s, i, l) {
        var a = ne(e, n);
        var c,
            u = e.inputs;
        var h;
        null != u && (c = u[r]) ? (uo(t, n, c, r, o), Bt(e) && function (t, e) {
          var n = oe(e, t);
          16 & n[2] || (n[2] |= 64);
        }(n, e.index)) : 3 & e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, o = null != i ? i(o, e.value || "", r) : o, Xt(s) ? s.setProperty(a, r, o) : Ge(r) || (a.setProperty ? a.setProperty(r, o) : a[r] = o));
      }(de(), function () {
        var t = ce.lFrame;
        return re(t.tView, t.selectedIndex);
      }(), r, t, e, r[11], n), Ho;
    }

    function Vo(t, e, n, r, o) {
      var s = o ? "class" : "style";
      uo(t, n, e.inputs[s], s, r);
    }

    function Fo(t, e, n, r) {
      var o = he(),
          s = de(),
          i = Vt + t,
          l = o[11],
          a = o[i] = Jn(l, e, ce.lFrame.currentNamespace),
          c = s.firstCreatePass ? function (t, e, n, r, o, s, i) {
        var l = e.consts,
            a = Mr(e, t, 2, o, ie(l, s));
        return Zr(e, n, a, ie(l, i)), null !== a.attrs && ho(a, a.attrs, !1), null !== a.mergedAttrs && ho(a, a.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, a), a;
      }(i, s, o, 0, e, n, r) : s.data[i];

      _e(c, !0);

      var u = c.mergedAttrs;
      null !== u && $e(l, a, u);
      var h = c.classes;
      null !== h && fr(l, a, h);
      var d = c.styles;
      null !== d && dr(l, a, d), 64 != (64 & c.flags) && sr(s, o, a, c), 0 === ce.lFrame.elementDepthCount && Nn(a, o), ce.lFrame.elementDepthCount++, $t(c) && (Rr(s, o, c), function (t, e, n) {
        if (zt(e)) {
          var _r41 = e.directiveEnd;

          for (var _o27 = e.directiveStart; _o27 < _r41; _o27++) {
            var _e36 = t.data[_o27];
            _e36.contentQueries && _e36.contentQueries(1, n[_o27], _o27);
          }
        }
      }(s, c, o)), null !== r && Hr(o, c);
    }

    function Lo() {
      var t = pe();
      me() ? ce.lFrame.isParent = !1 : (t = t.parent, _e(t, !1));
      var e = t;
      ce.lFrame.elementDepthCount--;
      var n = de();
      n.firstCreatePass && (Re(n, t), zt(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
        return 0 != (16 & t.flags);
      }(e) && Vo(n, e, he(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
        return 0 != (32 & t.flags);
      }(e) && Vo(n, e, he(), e.stylesWithoutHost, !1);
    }

    function Zo(t, e, n, r) {
      Fo(t, e, n, r), Lo();
    }

    function zo(t) {
      return !!t && "function" == typeof t.then;
    }

    function Bo(t, e, n, r) {
      var o = he(),
          s = de(),
          i = pe();
      return function (t, e, n, r, o, s, i, l) {
        var a = $t(r),
            c = t.firstCreatePass && ao(t),
            u = lo(e);
        var h = !0;

        if (3 & r.type || l) {
          var _d = ne(r, e),
              _f = l ? l(_d) : _d,
              _p7 = u.length,
              _g = l ? function (t) {
            return l(ee(t[r.index]));
          } : r.index;

          if (Xt(n)) {
            var _i20 = null;
            if (!l && a && (_i20 = function (t, e, n, r) {
              var o = t.cleanup;
              if (null != o) for (var _s22 = 0; _s22 < o.length - 1; _s22 += 2) {
                var _t57 = o[_s22];

                if (_t57 === n && o[_s22 + 1] === r) {
                  var _t58 = e[7],
                      _n52 = o[_s22 + 2];
                  return _t58.length > _n52 ? _t58[_n52] : null;
                }

                "string" == typeof _t57 && (_s22 += 2);
              }
              return null;
            }(t, e, o, r.index)), null !== _i20) (_i20.__ngLastListenerFn__ || _i20).__ngNextListenerFn__ = s, _i20.__ngLastListenerFn__ = s, h = !1;else {
              s = Go(r, e, 0, s, !1);

              var _t59 = n.listen(_f, o, s);

              u.push(s, _t59), c && c.push(o, _g, _p7, _p7 + 1);
            }
          } else s = Go(r, e, 0, s, !0), _f.addEventListener(o, s, i), u.push(s), c && c.push(o, _g, _p7, i);
        } else s = Go(r, e, 0, s, !1);

        var d = r.outputs;
        var f;

        if (h && null !== d && (f = d[o])) {
          var _t60 = f.length;
          if (_t60) for (var _n53 = 0; _n53 < _t60; _n53 += 2) {
            var _t61 = e[f[_n53]][f[_n53 + 1]].subscribe(s),
                _i21 = u.length;

            u.push(s, _t61), c && c.push(o, r.index, _i21, -(_i21 + 1));
          }
        }
      }(s, o, o[11], i, t, e, !!n, r), Bo;
    }

    function $o(t, e, n, r) {
      try {
        return !1 !== n(r);
      } catch (o) {
        return co(t, o), !1;
      }
    }

    function Go(t, e, n, r, o) {
      return function n(s) {
        if (s === Function) return r;
        var i = 2 & t.flags ? oe(t.index, e) : e;
        0 == (32 & e[2]) && no(i);
        var l = $o(e, 0, r, s),
            a = n.__ngNextListenerFn__;

        for (; a;) {
          l = $o(e, 0, a, s) && l, a = a.__ngNextListenerFn__;
        }

        return o && !1 === l && (s.preventDefault(), s.returnValue = !1), l;
      };
    }

    function Uo(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      var n = he(),
          r = de(),
          o = t + Vt,
          s = r.firstCreatePass ? Mr(r, o, 1, e, null) : r.data[o],
          i = n[o] = function (t, e) {
        return Xt(t) ? t.createText(e) : t.createTextNode(e);
      }(n[11], e);

      sr(r, n, i, s), _e(s, !1);
    }

    function Wo(t, e, n) {
      var r = he(),
          o = function (t, e, n, r) {
        return Do(t, we(), n) ? e + Q(n) + r : Er;
      }(r, t, e, n);

      return o !== Er && function (t, e, n) {
        var r = function (t, e) {
          return ee(e[t]);
        }(e, t);

        !function (t, e, n) {
          Xt(t) ? t.setValue(e, n) : e.textContent = n;
        }(t[11], r, n);
      }(r, Oe(), o), Wo;
    }

    var qo = void 0;
    var Qo = ["en", [["a", "p"], ["AM", "PM"], qo], [["AM", "PM"], qo, qo], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], qo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], qo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", qo, "{1} 'at' {0}", qo], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
      var e = Math.floor(Math.abs(t)),
          n = t.toString().replace(/^[^.]*\.?/, "").length;
      return 1 === e && 0 === n ? 1 : 5;
    }];
    var Jo = {};

    function Yo(t) {
      return t in Jo || (Jo[t] = yt.ng && yt.ng.common && yt.ng.common.locales && yt.ng.common.locales[t]), Jo[t];
    }

    var Ko = function () {
      return (Ko = Ko || {})[Ko.LocaleId = 0] = "LocaleId", Ko[Ko.DayPeriodsFormat = 1] = "DayPeriodsFormat", Ko[Ko.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", Ko[Ko.DaysFormat = 3] = "DaysFormat", Ko[Ko.DaysStandalone = 4] = "DaysStandalone", Ko[Ko.MonthsFormat = 5] = "MonthsFormat", Ko[Ko.MonthsStandalone = 6] = "MonthsStandalone", Ko[Ko.Eras = 7] = "Eras", Ko[Ko.FirstDayOfWeek = 8] = "FirstDayOfWeek", Ko[Ko.WeekendRange = 9] = "WeekendRange", Ko[Ko.DateFormat = 10] = "DateFormat", Ko[Ko.TimeFormat = 11] = "TimeFormat", Ko[Ko.DateTimeFormat = 12] = "DateTimeFormat", Ko[Ko.NumberSymbols = 13] = "NumberSymbols", Ko[Ko.NumberFormats = 14] = "NumberFormats", Ko[Ko.CurrencyCode = 15] = "CurrencyCode", Ko[Ko.CurrencySymbol = 16] = "CurrencySymbol", Ko[Ko.CurrencyName = 17] = "CurrencyName", Ko[Ko.Currencies = 18] = "Currencies", Ko[Ko.Directionality = 19] = "Directionality", Ko[Ko.PluralCase = 20] = "PluralCase", Ko[Ko.ExtraData = 21] = "ExtraData", Ko;
    }();

    var Xo = "en-US";
    var ts = Xo;

    function es(t) {
      var e, n;
      n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
        throw new Error("ASSERTION ERROR: ".concat(t, " [Expected=> null != ").concat(e, " <=Actual]"));
      }(n, e), "string" == typeof t && (ts = t.toLowerCase().replace(/_/g, "-"));
    }

    var ns = function ns() {
      _classCallCheck(this, ns);
    };

    var rs = /*#__PURE__*/function () {
      function rs() {
        _classCallCheck(this, rs);
      }

      _createClass(rs, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          throw function (t) {
            var e = Error("No component factory found for ".concat(B(t), ". Did you add it to @NgModule.entryComponents?"));
            return e.ngComponent = t, e;
          }(t);
        }
      }]);

      return rs;
    }();

    var os = function os() {
      _classCallCheck(this, os);
    };

    function ss() {}

    function is(t, e) {
      return new as(ne(t, e));
    }

    os.NULL = new rs();

    var ls = function ls() {
      return is(pe(), he());
    };

    var as = function () {
      var t = function t(_t62) {
        _classCallCheck(this, t);

        this.nativeElement = _t62;
      };

      return t.__NG_ELEMENT_ID__ = ls, t;
    }();

    var cs = function cs() {
      _classCallCheck(this, cs);
    };

    var us = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵprov = K({
        token: t,
        providedIn: "root",
        factory: function factory() {
          return null;
        }
      }), t;
    }();

    var hs = function hs(t) {
      _classCallCheck(this, hs);

      this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".");
    };

    var ds = new hs("12.1.1");

    var fs = /*#__PURE__*/function () {
      function fs() {
        _classCallCheck(this, fs);
      }

      _createClass(fs, [{
        key: "supports",
        value: function supports(t) {
          return Po(t);
        }
      }, {
        key: "create",
        value: function create(t) {
          return new gs(t);
        }
      }]);

      return fs;
    }();

    var ps = function ps(t, e) {
      return e;
    };

    var gs = /*#__PURE__*/function () {
      function gs(t) {
        _classCallCheck(this, gs);

        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || ps;
      }

      _createClass(gs, [{
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
              o = null;

          for (; e || n;) {
            var _s23 = !n || e && e.currentIndex < vs(n, r, o) ? e : n,
                _i22 = vs(_s23, r, o),
                _l20 = _s23.currentIndex;

            if (_s23 === n) r--, n = n._nextRemoved;else if (e = e._next, null == _s23.previousIndex) r++;else {
              o || (o = []);

              var _t63 = _i22 - r,
                  _e37 = _l20 - r;

              if (_t63 != _e37) {
                for (var _n54 = 0; _n54 < _t63; _n54++) {
                  var _r42 = _n54 < o.length ? o[_n54] : o[_n54] = 0,
                      _s24 = _r42 + _n54;

                  _e37 <= _s24 && _s24 < _t63 && (o[_n54] = _r42 + 1);
                }

                o[_s23.previousIndex] = _e37 - _t63;
              }
            }
            _i22 !== _l20 && t(_s23, _i22, _l20);
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
          if (null == t && (t = []), !Po(t)) throw new Error("Error trying to diff '".concat(B(t), "'. Only arrays and iterables are allowed"));
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
              o = this._itHead,
              s = !1;

          if (Array.isArray(t)) {
            this.length = t.length;

            for (var _e38 = 0; _e38 < this.length; _e38++) {
              n = t[_e38], r = this._trackByFn(_e38, n), null !== o && Object.is(o.trackById, r) ? (s && (o = this._verifyReinsertion(o, n, r, _e38)), Object.is(o.item, n) || this._addIdentityChange(o, n)) : (o = this._mismatch(o, n, r, _e38), s = !0), o = o._next;
            }
          } else e = 0, function (t, e) {
            if (Array.isArray(t)) for (var _n55 = 0; _n55 < t.length; _n55++) {
              e(t[_n55]);
            } else {
              var _n56 = t[Mo()]();

              var _r43;

              for (; !(_r43 = _n56.next()).done;) {
                e(_r43.value);
              }
            }
          }(t, function (t) {
            r = _this20._trackByFn(e, t), null !== o && Object.is(o.trackById, r) ? (s && (o = _this20._verifyReinsertion(o, t, r, e)), Object.is(o.item, t) || _this20._addIdentityChange(o, t)) : (o = _this20._mismatch(o, t, r, e), s = !0), o = o._next, e++;
          }), this.length = e;

          return this._truncate(o), this.collection = t, this.isDirty;
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
            var _t64;

            for (_t64 = this._previousItHead = this._itHead; null !== _t64; _t64 = _t64._next) {
              _t64._nextPrevious = _t64._next;
            }

            for (_t64 = this._additionsHead; null !== _t64; _t64 = _t64._nextAdded) {
              _t64.previousIndex = _t64.currentIndex;
            }

            for (this._additionsHead = this._additionsTail = null, _t64 = this._movesHead; null !== _t64; _t64 = _t64._nextMoved) {
              _t64.previousIndex = _t64.currentIndex;
            }

            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
          }
        }
      }, {
        key: "_mismatch",
        value: function _mismatch(t, e, n, r) {
          var o;
          return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : t = this._addAfter(new _s(e, n), o, r), t;
        }
      }, {
        key: "_verifyReinsertion",
        value: function _verifyReinsertion(t, e, n, r) {
          var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t;
        }
      }, {
        key: "_truncate",
        value: function _truncate(t) {
          for (; null !== t;) {
            var _e39 = t._next;
            this._addToRemovals(this._unlink(t)), t = _e39;
          }

          null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
      }, {
        key: "_reinsertAfter",
        value: function _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          var r = t._prevRemoved,
              o = t._nextRemoved;
          return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t;
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
          return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new ys()), this._linkedRecords.put(t), t.currentIndex = n, t;
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
          return null === this._unlinkedRecords && (this._unlinkedRecords = new ys()), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t;
        }
      }, {
        key: "_addIdentityChange",
        value: function _addIdentityChange(t, e) {
          return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t;
        }
      }]);

      return gs;
    }();

    var _s = function _s(t, e) {
      _classCallCheck(this, _s);

      this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
    };

    var ms = /*#__PURE__*/function () {
      function ms() {
        _classCallCheck(this, ms);

        this._head = null, this._tail = null;
      }

      _createClass(ms, [{
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

      return ms;
    }();

    var ys = /*#__PURE__*/function () {
      function ys() {
        _classCallCheck(this, ys);

        this.map = new Map();
      }

      _createClass(ys, [{
        key: "put",
        value: function put(t) {
          var e = t.trackById;
          var n = this.map.get(e);
          n || (n = new ms(), this.map.set(e, n)), n.add(t);
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

      return ys;
    }();

    function vs(t, e, n) {
      var r = t.previousIndex;
      if (null === r) return r;
      var o = 0;
      return n && r < n.length && (o = n[r]), r + e + o;
    }

    var ws = /*#__PURE__*/function () {
      function ws() {
        _classCallCheck(this, ws);
      }

      _createClass(ws, [{
        key: "supports",
        value: function supports(t) {
          return t instanceof Map || Oo(t);
        }
      }, {
        key: "create",
        value: function create() {
          return new bs();
        }
      }]);

      return ws;
    }();

    var bs = /*#__PURE__*/function () {
      function bs() {
        _classCallCheck(this, bs);

        this._records = new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
      }

      _createClass(bs, [{
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
            if (!(t instanceof Map || Oo(t))) throw new Error("Error trying to diff '".concat(B(t), "'. Only maps and objects are allowed"));
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
              var _r44 = _this21._getOrCreateRecordForKey(n, t);

              e = _this21._insertBeforeOrAppend(e, _r44);
            }
          }), e) {
            e._prev && (e._prev._next = null), this._removalsHead = e;

            for (var _t65 = e; null !== _t65; _t65 = _t65._nextRemoved) {
              _t65 === this._mapHead && (this._mapHead = null), this._records["delete"](_t65.key), _t65._nextRemoved = _t65._next, _t65.previousValue = _t65.currentValue, _t65.currentValue = null, _t65._prev = null, _t65._next = null;
            }
          }

          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
        }
      }, {
        key: "_insertBeforeOrAppend",
        value: function _insertBeforeOrAppend(t, e) {
          if (t) {
            var _n57 = t._prev;
            return e._next = t, e._prev = _n57, t._prev = e, _n57 && (_n57._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t;
          }

          return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null;
        }
      }, {
        key: "_getOrCreateRecordForKey",
        value: function _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            var _n58 = this._records.get(t);

            this._maybeAddToChanges(_n58, e);

            var _r45 = _n58._prev,
                _o28 = _n58._next;
            return _r45 && (_r45._next = _o28), _o28 && (_o28._prev = _r45), _n58._next = null, _n58._prev = null, _n58;
          }

          var n = new Cs(t);
          return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n;
        }
      }, {
        key: "_reset",
        value: function _reset() {
          if (this.isDirty) {
            var _t66;

            for (this._previousMapHead = this._mapHead, _t66 = this._previousMapHead; null !== _t66; _t66 = _t66._next) {
              _t66._nextPrevious = _t66._next;
            }

            for (_t66 = this._changesHead; null !== _t66; _t66 = _t66._nextChanged) {
              _t66.previousValue = _t66.currentValue;
            }

            for (_t66 = this._additionsHead; null != _t66; _t66 = _t66._nextAdded) {
              _t66.previousValue = _t66.currentValue;
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

      return bs;
    }();

    var Cs = function Cs(t) {
      _classCallCheck(this, Cs);

      this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null;
    };

    function xs() {
      return new ks([new fs()]);
    }

    var ks = function () {
      var t = /*#__PURE__*/function () {
        function t(_t67) {
          _classCallCheck(this, t);

          this.factories = _t67;
        }

        _createClass(t, [{
          key: "find",
          value: function find(_t69) {
            var e = this.factories.find(function (e) {
              return e.supports(_t69);
            });
            if (null != e) return e;
            throw new Error("Cannot find a differ supporting object '".concat(_t69, "' of type '").concat((n = _t69, n.name || _typeof(n)), "'"));
            var n;
          }
        }], [{
          key: "create",
          value: function create(e, n) {
            if (null != n) {
              var _t70 = n.factories.slice();

              e = e.concat(_t70);
            }

            return new t(e);
          }
        }, {
          key: "extend",
          value: function extend(e) {
            return {
              provide: t,
              useFactory: function useFactory(n) {
                return t.create(e, n || xs());
              },
              deps: [[t, new jn(), new Dn()]]
            };
          }
        }]);

        return t;
      }();

      return t.ɵprov = K({
        token: t,
        providedIn: "root",
        factory: xs
      }), t;
    }();

    function Es() {
      return new Ts([new ws()]);
    }

    var Ts = function () {
      var t = /*#__PURE__*/function () {
        function t(_t71) {
          _classCallCheck(this, t);

          this.factories = _t71;
        }

        _createClass(t, [{
          key: "find",
          value: function find(_t73) {
            var e = this.factories.find(function (e) {
              return e.supports(_t73);
            });
            if (e) return e;
            throw new Error("Cannot find a differ supporting object '".concat(_t73, "'"));
          }
        }], [{
          key: "create",
          value: function create(e, n) {
            if (n) {
              var _t74 = n.factories.slice();

              e = e.concat(_t74);
            }

            return new t(e);
          }
        }, {
          key: "extend",
          value: function extend(e) {
            return {
              provide: t,
              useFactory: function useFactory(n) {
                return t.create(e, n || Es());
              },
              deps: [[t, new jn(), new Dn()]]
            };
          }
        }]);

        return t;
      }();

      return t.ɵprov = K({
        token: t,
        providedIn: "root",
        factory: Es
      }), t;
    }();

    function Ss(t, e, n, r) {
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

      for (; null !== n;) {
        var _s25 = e[n.index];
        if (null !== _s25 && r.push(ee(_s25)), Zt(_s25)) for (var _t75 = Ft; _t75 < _s25.length; _t75++) {
          var _e40 = _s25[_t75],
              _n59 = _e40[1].firstChild;
          null !== _n59 && Ss(_e40[1], _e40, _n59, r);
        }
        var _i23 = n.type;
        if (8 & _i23) Ss(t, e, n.child, r);else if (32 & _i23) {
          var _t76 = $n(n, e);

          var _o29 = void 0;

          for (; _o29 = _t76();) {
            r.push(_o29);
          }
        } else if (16 & _i23) {
          var _t77 = lr(e, n);

          if (Array.isArray(_t77)) r.push.apply(r, _toConsumableArray(_t77));else {
            var _n60 = Gn(e[16]);

            Ss(_n60[1], _n60, _t77, r, !0);
          }
        }
        n = o ? n.projectionNext : n.next;
      }

      return r;
    }

    var As = /*#__PURE__*/function () {
      function As(t, e) {
        _classCallCheck(this, As);

        this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._attachedToViewContainer = !1;
      }

      _createClass(As, [{
        key: "rootNodes",
        get: function get() {
          var t = this._lView,
              e = t[1];
          return Ss(e, t, e.firstChild, []);
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
            var _t78 = this._lView[3];

            if (Zt(_t78)) {
              var _e41 = _t78[8],
                  _n61 = _e41 ? _e41.indexOf(this) : -1;

              _n61 > -1 && (Kn(_t78, _n61), bn(_e41, _n61));
            }

            this._attachedToViewContainer = !1;
          }
          Xn(this._lView[1], this._lView);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          !function (t, e, n, r) {
            var o = lo(e);
            o.push(r);
          }(0, this._lView, 0, t);
        }
      }, {
        key: "markForCheck",
        value: function markForCheck() {
          no(this._cdRefInjectingView || this._lView);
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
          ro(this._lView[1], this._lView, this.context);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {
          !function (t, e, n) {
            ve(!0);

            try {
              ro(t, e, n);
            } finally {
              ve(!1);
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
          this._appRef = null, ur(this._lView[1], t = this._lView, t[11], 2, null, null);
        }
      }, {
        key: "attachToAppRef",
        value: function attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
          this._appRef = t;
        }
      }]);

      return As;
    }();

    var Is = /*#__PURE__*/function (_As) {
      _inherits(Is, _As);

      var _super15 = _createSuper(Is);

      function Is(t) {
        var _this22;

        _classCallCheck(this, Is);

        _this22 = _super15.call(this, t), _this22._view = t;
        return _this22;
      }

      _createClass(Is, [{
        key: "detectChanges",
        value: function detectChanges() {
          oo(this._view);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {
          !function (t) {
            ve(!0);

            try {
              oo(t);
            } finally {
              ve(!1);
            }
          }(this._view);
        }
      }, {
        key: "context",
        get: function get() {
          return null;
        }
      }]);

      return Is;
    }(As);

    var Ms = [new ws()],
        Ps = new ks([new fs()]),
        Os = new Ts(Ms),
        Ds = function Ds() {
      return t = pe(), e = he(), 4 & t.type ? new Rs(e, t, is(t, e)) : null;
      var t, e;
    };

    var js = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.__NG_ELEMENT_ID__ = Ds, t;
    }();

    var Ns = js,
        Rs = /*#__PURE__*/function (_Ns) {
      _inherits(Rs, _Ns);

      var _super16 = _createSuper(Rs);

      function Rs(t, e, n) {
        var _this23;

        _classCallCheck(this, Rs);

        _this23 = _super16.call(this), _this23._declarationLView = t, _this23._declarationTContainer = e, _this23.elementRef = n;
        return _this23;
      }

      _createClass(Rs, [{
        key: "createEmbeddedView",
        value: function createEmbeddedView(t) {
          var e = this._declarationTContainer.tViews,
              n = Ir(this._declarationLView, e, t, 16, null, e.declTNode, null, null, null, null);
          n[17] = this._declarationLView[this._declarationTContainer.index];
          var r = this._declarationLView[19];
          return null !== r && (n[19] = r.createEmbeddedView(e)), Or(e, n, t), new As(n);
        }
      }]);

      return Rs;
    }(Ns);

    var Hs = function Hs() {
      _classCallCheck(this, Hs);
    };

    var Vs = function Vs() {
      return function (t, e) {
        var n;
        var r = e[t.index];
        if (Zt(r)) n = r;else {
          var _o30;

          if (8 & t.type) _o30 = ee(r);else {
            var _n62 = e[11];
            _o30 = _n62.createComment("");

            var _r46 = ne(t, e);

            er(_n62, or(_n62, _r46), _o30, function (t, e) {
              return Xt(t) ? t.nextSibling(e) : e.nextSibling;
            }(_n62, _r46), !1);
          }
          e[t.index] = n = Yr(r, e, _o30, t), eo(e, n);
        }
        return new Zs(n, t, e);
      }(pe(), he());
    };

    var Fs = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.__NG_ELEMENT_ID__ = Vs, t;
    }();

    var Ls = Fs,
        Zs = /*#__PURE__*/function (_Ls) {
      _inherits(Zs, _Ls);

      var _super17 = _createSuper(Zs);

      function Zs(t, e, n) {
        var _this24;

        _classCallCheck(this, Zs);

        _this24 = _super17.call(this), _this24._lContainer = t, _this24._hostTNode = e, _this24._hostLView = n;
        return _this24;
      }

      _createClass(Zs, [{
        key: "element",
        get: function get() {
          return is(this._hostTNode, this._hostLView);
        }
      }, {
        key: "injector",
        get: function get() {
          return new gn(this._hostTNode, this._hostLView);
        }
      }, {
        key: "parentInjector",
        get: function get() {
          var t = rn(this._hostTNode, this._hostLView);

          if (qe(t)) {
            var _e42 = Je(t, this._hostLView),
                _n63 = Qe(t);

            return new gn(_e42[1].data[_n63 + 8], _e42);
          }

          return new gn(null, this._hostLView);
        }
      }, {
        key: "clear",
        value: function clear() {
          for (; this.length > 0;) {
            this.remove(this.length - 1);
          }
        }
      }, {
        key: "get",
        value: function get(t) {
          var e = zs(this._lContainer);
          return null !== e && e[t] || null;
        }
      }, {
        key: "length",
        get: function get() {
          return this._lContainer.length - Ft;
        }
      }, {
        key: "createEmbeddedView",
        value: function createEmbeddedView(t, e, n) {
          var r = t.createEmbeddedView(e || {});
          return this.insert(r, n), r;
        }
      }, {
        key: "createComponent",
        value: function createComponent(t, e, n, r, o) {
          var s = n || this.parentInjector;

          if (!o && null == t.ngModule && s) {
            var _t79 = s.get(Hs, null);

            _t79 && (o = _t79);
          }

          var i = t.create(s, r, void 0, o);
          return this.insert(i.hostView, e), i;
        }
      }, {
        key: "insert",
        value: function insert(t, e) {
          var n = t._lView,
              r = n[1];

          if (Zt(n[3])) {
            var _e43 = this.indexOf(t);

            if (-1 !== _e43) this.detach(_e43);else {
              var _e44 = n[3],
                  _r47 = new Zs(_e44, _e44[6], _e44[3]);

              _r47.detach(_r47.indexOf(t));
            }
          }

          var o = this._adjustIndex(e),
              s = this._lContainer;

          !function (t, e, n, r) {
            var o = Ft + r,
                s = n.length;
            r > 0 && (n[o - 1][4] = e), r < s - Ft ? (e[4] = n[o], wn(n, Ft + r, e)) : (n.push(e), e[4] = null), e[3] = n;
            var i = e[17];
            null !== i && n !== i && function (t, e) {
              var n = t[9];
              e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e);
            }(i, e);
            var l = e[19];
            null !== l && l.insertView(t), e[2] |= 128;
          }(r, n, s, o);
          var i = ar(o, s),
              l = n[11],
              a = or(l, s[7]);
          return null !== a && function (t, e, n, r, o, s) {
            r[0] = o, r[6] = e, ur(t, r, n, 1, o, s);
          }(r, s[6], l, n, a, i), t.attachToViewContainerRef(), wn(Bs(s), o, t), t;
        }
      }, {
        key: "move",
        value: function move(t, e) {
          return this.insert(t, e);
        }
      }, {
        key: "indexOf",
        value: function indexOf(t) {
          var e = zs(this._lContainer);
          return null !== e ? e.indexOf(t) : -1;
        }
      }, {
        key: "remove",
        value: function remove(t) {
          var e = this._adjustIndex(t, -1),
              n = Kn(this._lContainer, e);

          n && (bn(Bs(this._lContainer), e), Xn(n[1], n));
        }
      }, {
        key: "detach",
        value: function detach(t) {
          var e = this._adjustIndex(t, -1),
              n = Kn(this._lContainer, e);

          return n && null != bn(Bs(this._lContainer), e) ? new As(n) : null;
        }
      }, {
        key: "_adjustIndex",
        value: function _adjustIndex(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return null == t ? this.length + e : t;
        }
      }]);

      return Zs;
    }(Ls);

    function zs(t) {
      return t[8];
    }

    function Bs(t) {
      return t[8] || (t[8] = []);
    }

    var $s = {};

    var Gs = /*#__PURE__*/function (_os) {
      _inherits(Gs, _os);

      var _super18 = _createSuper(Gs);

      function Gs(t) {
        var _this25;

        _classCallCheck(this, Gs);

        _this25 = _super18.call(this), _this25.ngModule = t;
        return _this25;
      }

      _createClass(Gs, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          var e = Rt(t);
          return new qs(e, this.ngModule);
        }
      }]);

      return Gs;
    }(os);

    function Us(t) {
      var e = [];

      for (var _n64 in t) {
        t.hasOwnProperty(_n64) && e.push({
          propName: t[_n64],
          templateName: _n64
        });
      }

      return e;
    }

    var Ws = new yn("SCHEDULER_TOKEN", {
      providedIn: "root",
      factory: function factory() {
        return Zn;
      }
    });

    var qs = /*#__PURE__*/function (_ns) {
      _inherits(qs, _ns);

      var _super19 = _createSuper(qs);

      function qs(t, e) {
        var _this26;

        _classCallCheck(this, qs);

        _this26 = _super19.call(this), _this26.componentDef = t, _this26.ngModule = e, _this26.componentType = t.type, _this26.selector = t.selectors.map(kr).join(","), _this26.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], _this26.isBoundToModule = !!e;
        return _this26;
      }

      _createClass(qs, [{
        key: "inputs",
        get: function get() {
          return Us(this.componentDef.inputs);
        }
      }, {
        key: "outputs",
        get: function get() {
          return Us(this.componentDef.outputs);
        }
      }, {
        key: "create",
        value: function create(t, e, n, r) {
          var o = (r = r || this.ngModule) ? function (t, e) {
            return {
              get: function get(n, r, o) {
                var s = t.get(n, $s, o);
                return s !== $s || r === $s ? s : e.get(n, r, o);
              }
            };
          }(t, r.injector) : t,
              s = o.get(cs, te),
              i = o.get(us, null),
              l = s.createRenderer(null, this.componentDef),
              a = this.componentDef.selectors[0][0] || "div",
              c = n ? function (t, e, n) {
            if (Xt(t)) return t.selectRootElement(e, n === ft.ShadowDom);
            var r = "string" == typeof e ? t.querySelector(e) : e;
            return r.textContent = "", r;
          }(l, n, this.componentDef.encapsulation) : Jn(s.createRenderer(null, this.componentDef), a, function (t) {
            var e = t.toLowerCase();
            return "svg" === e ? Yt : "math" === e ? "http://www.w3.org/1998/MathML/" : null;
          }(a)),
              u = this.componentDef.onPush ? 576 : 528,
              h = {
            components: [],
            scheduler: Zn,
            clean: io,
            playerHandler: null,
            flags: 0
          },
              d = Fr(0, null, null, 1, 0, null, null, null, null, null),
              f = Ir(null, d, h, u, null, null, s, l, i, o);
          var p, g;
          Te(f);

          try {
            var _t80 = function (t, e, n, r, o, s) {
              var i = n[1];
              n[20] = t;
              var l = Mr(i, 20, 2, "#host", null),
                  a = l.mergedAttrs = e.hostAttrs;
              null !== a && (ho(l, a, !0), null !== t && ($e(o, t, a), null !== l.classes && fr(o, t, l.classes), null !== l.styles && dr(o, t, l.styles)));
              var c = r.createRenderer(t, e),
                  u = Ir(n, Vr(e), null, e.onPush ? 64 : 16, n[20], l, r, c, null, null);
              return i.firstCreatePass && (on(tn(l, n), i, e.type), $r(i, l), Ur(l, n.length, 1)), eo(n, u), n[20] = u;
            }(c, this.componentDef, f, s, l);

            if (c) if (n) $e(l, c, ["ng-version", ds.full]);else {
              var _ref = function (t) {
                var e = [],
                    n = [];
                var r = 1,
                    o = 2;

                for (; r < t.length;) {
                  var _s26 = t[r];
                  if ("string" == typeof _s26) 2 === o ? "" !== _s26 && e.push(_s26, t[++r]) : 8 === o && n.push(_s26);else {
                    if (!wr(o)) break;
                    o = _s26;
                  }
                  r++;
                }

                return {
                  attrs: e,
                  classes: n
                };
              }(this.componentDef.selectors[0]),
                  _t81 = _ref.attrs,
                  _e45 = _ref.classes;

              _t81 && $e(l, c, _t81), _e45 && _e45.length > 0 && fr(l, c, _e45.join(" "));
            }

            if (g = re(d, Vt), void 0 !== e) {
              var _t82 = g.projection = [];

              for (var _n65 = 0; _n65 < this.ngContentSelectors.length; _n65++) {
                var _r48 = e[_n65];

                _t82.push(null != _r48 ? Array.from(_r48) : null);
              }
            }

            p = function (t, e, n, r, o) {
              var s = n[1],
                  i = function (t, e, n) {
                var r = pe();
                t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Wr(t, r, e, Pr(t, e, 1, null), n));
                var o = dn(e, t, r.directiveStart, r);
                Nn(o, e);
                var s = ne(r, e);
                return s && Nn(s, e), o;
              }(s, n, e);

              if (r.components.push(i), t[8] = i, o && o.forEach(function (t) {
                return t(i, e);
              }), e.contentQueries) {
                var _t83 = pe();

                e.contentQueries(1, i, _t83.directiveStart);
              }

              var l = pe();
              return !s.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (De(l.index), zr(n[1], l, 0, l.directiveStart, l.directiveEnd, e), Br(e, i)), i;
            }(_t80, this.componentDef, f, h, [Ao]), Or(d, f, null);
          } finally {
            Pe();
          }

          return new Qs(this.componentType, p, is(g, f), f, g);
        }
      }]);

      return qs;
    }(ns);

    var Qs = /*#__PURE__*/function (_ref2) {
      _inherits(Qs, _ref2);

      var _super20 = _createSuper(Qs);

      function Qs(t, e, n, r, o) {
        var _this27;

        _classCallCheck(this, Qs);

        _this27 = _super20.call(this), _this27.location = n, _this27._rootLView = r, _this27._tNode = o, _this27.instance = e, _this27.hostView = _this27.changeDetectorRef = new Is(r), _this27.componentType = t;
        return _this27;
      }

      _createClass(Qs, [{
        key: "injector",
        get: function get() {
          return new gn(this._tNode, this._rootLView);
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

      return Qs;
    }( /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      return _class;
    }());

    var Js = new Map();

    var Ys = /*#__PURE__*/function (_Hs) {
      _inherits(Ys, _Hs);

      var _super21 = _createSuper(Ys);

      function Ys(t, e) {
        var _this28;

        _classCallCheck(this, Ys);

        _this28 = _super21.call(this), _this28._parent = e, _this28._bootstrapComponents = [], _this28.injector = _assertThisInitialized(_this28), _this28.destroyCbs = [], _this28.componentFactoryResolver = new Gs(_assertThisInitialized(_this28));
        var n = Ht(t),
            r = t[Et] || null;
        r && es(r), _this28._bootstrapComponents = zn(n.bootstrap), _this28._r3Injector = wo(t, e, [{
          provide: Hs,
          useValue: _assertThisInitialized(_this28)
        }, {
          provide: os,
          useValue: _this28.componentFactoryResolver
        }], B(t)), _this28._r3Injector._resolveInjectorDefTypes(), _this28.instance = _this28.get(t);
        return _this28;
      }

      _createClass(Ys, [{
        key: "get",
        value: function get(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : So.THROW_IF_NOT_FOUND;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : lt.Default;
          return t === So || t === Hs || t === fo ? this : this._r3Injector.get(t, e, n);
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

      return Ys;
    }(Hs);

    var Ks = /*#__PURE__*/function (_ref3) {
      _inherits(Ks, _ref3);

      var _super22 = _createSuper(Ks);

      function Ks(t) {
        var _this29;

        _classCallCheck(this, Ks);

        _this29 = _super22.call(this), _this29.moduleType = t, null !== Ht(t) && function (t) {
          var e = new Set();
          !function t(n) {
            var r = Ht(n, !0),
                o = r.id;
            null !== o && (function (t, e, n) {
              if (e && e !== n) throw new Error("Duplicate module registered for ".concat(t, " - ").concat(B(e), " vs ").concat(B(e.name)));
            }(o, Js.get(o), n), Js.set(o, n));
            var s = zn(r.imports);

            var _iterator = _createForOfIteratorHelper(s),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _i24 = _step.value;
                e.has(_i24) || (e.add(_i24), t(_i24));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }(t);
        }(t);
        return _this29;
      }

      _createClass(Ks, [{
        key: "create",
        value: function create(t) {
          return new Ys(this.moduleType, t);
        }
      }]);

      return Ks;
    }( /*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }

      return _class2;
    }());

    function Xs(t) {
      return function (e) {
        setTimeout(t, void 0, e);
      };
    }

    var ti = /*#__PURE__*/function (_x2) {
      _inherits(ti, _x2);

      var _super23 = _createSuper(ti);

      function ti() {
        var _this30;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

        _classCallCheck(this, ti);

        _this30 = _super23.call(this), _this30.__isAsync = t;
        return _this30;
      }

      _createClass(ti, [{
        key: "emit",
        value: function emit(t) {
          _get(_getPrototypeOf(ti.prototype), "next", this).call(this, t);
        }
      }, {
        key: "subscribe",
        value: function subscribe(t, e, n) {
          var r, o, s;

          var i = t,
              l = e || function () {
            return null;
          },
              a = n;

          if (t && "object" == _typeof(t)) {
            var _e46 = t;
            i = null === (r = _e46.next) || void 0 === r ? void 0 : r.bind(_e46), l = null === (o = _e46.error) || void 0 === o ? void 0 : o.bind(_e46), a = null === (s = _e46.complete) || void 0 === s ? void 0 : s.bind(_e46);
          }

          this.__isAsync && (l = Xs(l), i && (i = Xs(i)), a && (a = Xs(a)));

          var c = _get(_getPrototypeOf(ti.prototype), "subscribe", this).call(this, {
            next: i,
            error: l,
            complete: a
          });

          return t instanceof h && t.add(c), c;
        }
      }]);

      return ti;
    }(x);

    Symbol;
    var ei = new yn("Application Initializer");

    var ni = function () {
      var t = /*#__PURE__*/function () {
        function t(_t84) {
          var _this31 = this;

          _classCallCheck(this, t);

          this.appInits = _t84, this.resolve = ss, this.reject = ss, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (_t85, e) {
            _this31.resolve = _t85, _this31.reject = e;
          });
        }

        _createClass(t, [{
          key: "runInitializers",
          value: function runInitializers() {
            var _this32 = this;

            if (this.initialized) return;

            var _t86 = [],
                e = function e() {
              _this32.done = !0, _this32.resolve();
            };

            if (this.appInits) {
              var _loop2 = function _loop2(_r49) {
                var e = _this32.appInits[_r49]();

                if (zo(e)) _t86.push(e);else if ((n = e) && "function" == typeof n.subscribe) {
                  var _n66 = new Promise(function (_t87, n) {
                    e.subscribe({
                      complete: _t87,
                      error: n
                    });
                  });

                  _t86.push(_n66);
                }
              };

              for (var _r49 = 0; _r49 < this.appInits.length; _r49++) {
                _loop2(_r49);
              }
            }

            var n;
            Promise.all(_t86).then(function () {
              e();
            })["catch"](function (_t88) {
              _this32.reject(_t88);
            }), 0 === _t86.length && e(), this.initialized = !0;
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(In(ei, 8));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var ri = new yn("AppId"),
        oi = {
      provide: ri,
      useFactory: function useFactory() {
        return "".concat(si()).concat(si()).concat(si());
      },
      deps: []
    };

    function si() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }

    var ii = new yn("Platform Initializer"),
        li = new yn("Platform ID"),
        ai = new yn("appBootstrapListener");

    var ci = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "log",
          value: function log(_t89) {
            console.log(_t89);
          }
        }, {
          key: "warn",
          value: function warn(_t90) {
            console.warn(_t90);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var ui = new yn("LocaleId"),
        hi = new yn("DefaultCurrencyCode");

    var di = function di(t, e) {
      _classCallCheck(this, di);

      this.ngModuleFactory = t, this.componentFactories = e;
    };

    var fi = function fi(t) {
      return new Ks(t);
    },
        pi = fi,
        gi = function gi(t) {
      return Promise.resolve(fi(t));
    },
        _i = function _i(t) {
      var e = fi(t),
          n = zn(Ht(t).declarations).reduce(function (t, e) {
        var n = Rt(e);
        return n && t.push(new qs(n)), t;
      }, []);
      return new di(e, n);
    },
        mi = _i,
        yi = function yi(t) {
      return Promise.resolve(_i(t));
    };

    var vi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.compileModuleSync = pi, this.compileModuleAsync = gi, this.compileModuleAndAllComponentsSync = mi, this.compileModuleAndAllComponentsAsync = yi;
        }

        _createClass(t, [{
          key: "clearCache",
          value: function clearCache() {}
        }, {
          key: "clearCacheFor",
          value: function clearCacheFor(_t91) {}
        }, {
          key: "getModuleId",
          value: function getModuleId(_t92) {}
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var wi = function () {
      return Promise.resolve(0);
    }();

    function bi(t) {
      "undefined" == typeof Zone ? wi.then(function () {
        t && t.apply(null, null);
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
    }

    var Ci = /*#__PURE__*/function () {
      function Ci(_ref4) {
        var _ref4$enableLongStack = _ref4.enableLongStackTrace,
            t = _ref4$enableLongStack === void 0 ? !1 : _ref4$enableLongStack,
            _ref4$shouldCoalesceE = _ref4.shouldCoalesceEventChangeDetection,
            e = _ref4$shouldCoalesceE === void 0 ? !1 : _ref4$shouldCoalesceE,
            _ref4$shouldCoalesceR = _ref4.shouldCoalesceRunChangeDetection,
            n = _ref4$shouldCoalesceR === void 0 ? !1 : _ref4$shouldCoalesceR;

        _classCallCheck(this, Ci);

        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ti(!1), this.onMicrotaskEmpty = new ti(!1), this.onStable = new ti(!1), this.onError = new ti(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched();
        var r = this;
        r._nesting = 0, r._outer = r._inner = Zone.current, Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())), t && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), r.shouldCoalesceEventChangeDetection = !n && e, r.shouldCoalesceRunChangeDetection = n, r.lastRequestAnimationFrameId = -1, r.nativeRequestAnimationFrame = function () {
          var t = yt.requestAnimationFrame,
              e = yt.cancelAnimationFrame;

          if ("undefined" != typeof Zone && t && e) {
            var _n67 = t[Zone.__symbol__("OriginalDelegate")];

            _n67 && (t = _n67);

            var _r50 = e[Zone.__symbol__("OriginalDelegate")];

            _r50 && (e = _r50);
          }

          return {
            nativeRequestAnimationFrame: t,
            nativeCancelAnimationFrame: e
          };
        }().nativeRequestAnimationFrame, function (t) {
          var e = function e() {
            !function (t) {
              t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(yt, function () {
                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", function () {
                  t.lastRequestAnimationFrameId = -1, Ei(t), t.isCheckStableRunning = !0, ki(t), t.isCheckStableRunning = !1;
                }, void 0, function () {}, function () {})), t.fakeTopEventTask.invoke();
              }), Ei(t));
            }(t);
          };

          t._inner = t._inner.fork({
            name: "angular",
            properties: {
              isAngularZone: !0
            },
            onInvokeTask: function onInvokeTask(n, r, o, s, i, l) {
              try {
                return Ti(t), n.invokeTask(o, s, i, l);
              } finally {
                (t.shouldCoalesceEventChangeDetection && "eventTask" === s.type || t.shouldCoalesceRunChangeDetection) && e(), Si(t);
              }
            },
            onInvoke: function onInvoke(n, r, o, s, i, l, a) {
              try {
                return Ti(t), n.invoke(o, s, i, l, a);
              } finally {
                t.shouldCoalesceRunChangeDetection && e(), Si(t);
              }
            },
            onHasTask: function onHasTask(e, n, r, o) {
              e.hasTask(r, o), n === r && ("microTask" == o.change ? (t._hasPendingMicrotasks = o.microTask, Ei(t), ki(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask));
            },
            onHandleError: function onHandleError(e, n, r, o) {
              return e.handleError(r, o), t.runOutsideAngular(function () {
                return t.onError.emit(o);
              }), !1;
            }
          });
        }(r);
      }

      _createClass(Ci, [{
        key: "run",
        value: function run(t, e, n) {
          return this._inner.run(t, e, n);
        }
      }, {
        key: "runTask",
        value: function runTask(t, e, n, r) {
          var o = this._inner,
              s = o.scheduleEventTask("NgZoneEvent: " + r, t, xi, ss, ss);

          try {
            return o.runTask(s, e, n);
          } finally {
            o.cancelTask(s);
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
          if (!Ci.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!");
        }
      }, {
        key: "assertNotInAngularZone",
        value: function assertNotInAngularZone() {
          if (Ci.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!");
        }
      }]);

      return Ci;
    }();

    var xi = {};

    function ki(t) {
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

    function Ei(t) {
      t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId);
    }

    function Ti(t) {
      t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null));
    }

    function Si(t) {
      t._nesting--, ki(t);
    }

    var Ai = /*#__PURE__*/function () {
      function Ai() {
        _classCallCheck(this, Ai);

        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ti(), this.onMicrotaskEmpty = new ti(), this.onStable = new ti(), this.onError = new ti();
      }

      _createClass(Ai, [{
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

      return Ai;
    }();

    var Ii = function () {
      var t = /*#__PURE__*/function () {
        function t(_t93) {
          var _this33 = this;

          _classCallCheck(this, t);

          this._ngZone = _t93, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), _t93.run(function () {
            _this33.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone");
          });
        }

        _createClass(t, [{
          key: "_watchAngularEvents",
          value: function _watchAngularEvents() {
            var _this34 = this;

            this._ngZone.onUnstable.subscribe({
              next: function next() {
                _this34._didWork = !0, _this34._isZoneStable = !1;
              }
            }), this._ngZone.runOutsideAngular(function () {
              _this34._ngZone.onStable.subscribe({
                next: function next() {
                  Ci.assertNotInAngularZone(), bi(function () {
                    _this34._isZoneStable = !0, _this34._runCallbacksIfReady();
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
            var _this35 = this;

            if (this.isStable()) bi(function () {
              for (; 0 !== _this35._callbacks.length;) {
                var _t101 = _this35._callbacks.pop();

                clearTimeout(_t101.timeoutId), _t101.doneCb(_this35._didWork);
              }

              _this35._didWork = !1;
            });else {
              var _t102 = this.getPendingTasks();

              this._callbacks = this._callbacks.filter(function (e) {
                return !e.updateCb || !e.updateCb(_t102) || (clearTimeout(e.timeoutId), !1);
              }), this._didWork = !0;
            }
          }
        }, {
          key: "getPendingTasks",
          value: function getPendingTasks() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (_t96) {
              return {
                source: _t96.source,
                creationLocation: _t96.creationLocation,
                data: _t96.data
              };
            }) : [];
          }
        }, {
          key: "addCallback",
          value: function addCallback(_t97, e, n) {
            var _this36 = this;

            var r = -1;
            e && e > 0 && (r = setTimeout(function () {
              _this36._callbacks = _this36._callbacks.filter(function (_t98) {
                return _t98.timeoutId !== r;
              }), _t97(_this36._didWork, _this36.getPendingTasks());
            }, e)), this._callbacks.push({
              doneCb: _t97,
              timeoutId: r,
              updateCb: n
            });
          }
        }, {
          key: "whenStable",
          value: function whenStable(_t99, e, n) {
            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
            this.addCallback(_t99, e, n), this._runCallbacksIfReady();
          }
        }, {
          key: "getPendingRequestCount",
          value: function getPendingRequestCount() {
            return this._pendingCount;
          }
        }, {
          key: "findProviders",
          value: function findProviders(_t100, e, n) {
            return [];
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(In(Ci));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }(),
        Mi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._applications = new Map(), Di.addToWindow(this);
        }

        _createClass(t, [{
          key: "registerApplication",
          value: function registerApplication(_t103, e) {
            this._applications.set(_t103, e);
          }
        }, {
          key: "unregisterApplication",
          value: function unregisterApplication(_t104) {
            this._applications["delete"](_t104);
          }
        }, {
          key: "unregisterAllApplications",
          value: function unregisterAllApplications() {
            this._applications.clear();
          }
        }, {
          key: "getTestability",
          value: function getTestability(_t105) {
            return this._applications.get(_t105) || null;
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
          value: function findTestabilityInTree(_t106) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return Di.findTestabilityInTree(this, _t106, e);
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Pi = /*#__PURE__*/function () {
      function Pi() {
        _classCallCheck(this, Pi);
      }

      _createClass(Pi, [{
        key: "addToWindow",
        value: function addToWindow(t) {}
      }, {
        key: "findTestabilityInTree",
        value: function findTestabilityInTree(t, e, n) {
          return null;
        }
      }]);

      return Pi;
    }();

    var Oi,
        Di = new Pi(),
        ji = !0,
        Ni = !1;
    var Ri = new yn("AllowMultipleToken");

    function Hi(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var r = "Platform: ".concat(e),
          o = new yn(r);
      return function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var s = Vi();
        if (!s || s.injector.get(Ri, !1)) if (t) t(n.concat(e).concat({
          provide: o,
          useValue: !0
        }));else {
          var _t107 = n.concat(e).concat({
            provide: o,
            useValue: !0
          }, {
            provide: go,
            useValue: "platform"
          });

          !function (t) {
            if (Oi && !Oi.destroyed && !Oi.injector.get(Ri, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
            Oi = t.get(Fi);
            var e = t.get(ii, null);
            e && e.forEach(function (t) {
              return t();
            });
          }(So.create({
            providers: _t107,
            name: r
          }));
        }
        return function (t) {
          var e = Vi();
          if (!e) throw new Error("No platform exists!");
          if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
          return e;
        }(o);
      };
    }

    function Vi() {
      return Oi && !Oi.destroyed ? Oi : null;
    }

    var Fi = function () {
      var t = /*#__PURE__*/function () {
        function t(_t108) {
          _classCallCheck(this, t);

          this._injector = _t108, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
        }

        _createClass(t, [{
          key: "bootstrapModuleFactory",
          value: function bootstrapModuleFactory(_t109, e) {
            var _this37 = this;

            var n = function (t, e) {
              var n;
              return n = "noop" === t ? new Ai() : ("zone.js" === t ? void 0 : t) || new Ci({
                enableLongStackTrace: (Ni = !0, ji),
                shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
              }), n;
            }(e ? e.ngZone : void 0, {
              ngZoneEventCoalescing: e && e.ngZoneEventCoalescing || !1,
              ngZoneRunCoalescing: e && e.ngZoneRunCoalescing || !1
            }),
                r = [{
              provide: Ci,
              useValue: n
            }];

            return n.run(function () {
              var e = So.create({
                providers: r,
                parent: _this37.injector,
                name: _t109.moduleType.name
              }),
                  o = _t109.create(e),
                  s = o.injector.get(Ln, null);

              if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
              return n.runOutsideAngular(function () {
                var _t110 = n.onError.subscribe({
                  next: function next(_t111) {
                    s.handleError(_t111);
                  }
                });

                o.onDestroy(function () {
                  zi(_this37._modules, o), _t110.unsubscribe();
                });
              }), function (t, e, n) {
                try {
                  var _r51 = n();

                  return zo(_r51) ? _r51["catch"](function (n) {
                    throw e.runOutsideAngular(function () {
                      return t.handleError(n);
                    }), n;
                  }) : _r51;
                } catch (r) {
                  throw e.runOutsideAngular(function () {
                    return t.handleError(r);
                  }), r;
                }
              }(s, n, function () {
                var _t112 = o.injector.get(ni);

                return _t112.runInitializers(), _t112.donePromise.then(function () {
                  return es(o.injector.get(ui, Xo) || Xo), _this37._moduleDoBootstrap(o), o;
                });
              });
            });
          }
        }, {
          key: "bootstrapModule",
          value: function bootstrapModule(_t113) {
            var _this38 = this;

            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var n = Li({}, e);
            return function (t, e, n) {
              var r = new Ks(n);
              return Promise.resolve(r);
            }(0, 0, _t113).then(function (_t114) {
              return _this38.bootstrapModuleFactory(_t114, n);
            });
          }
        }, {
          key: "_moduleDoBootstrap",
          value: function _moduleDoBootstrap(_t115) {
            var e = _t115.injector.get(Zi);

            if (_t115._bootstrapComponents.length > 0) _t115._bootstrapComponents.forEach(function (_t116) {
              return e.bootstrap(_t116);
            });else {
              if (!_t115.instance.ngDoBootstrap) throw new Error("The module ".concat(B(_t115.instance.constructor), " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. Please define one of these."));

              _t115.instance.ngDoBootstrap(e);
            }

            this._modules.push(_t115);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(_t117) {
            this._destroyListeners.push(_t117);
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
            this._modules.slice().forEach(function (_t118) {
              return _t118.destroy();
            }), this._destroyListeners.forEach(function (_t119) {
              return _t119();
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
        return new (e || t)(In(So));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function Li(t, e) {
      return Array.isArray(e) ? e.reduce(Li, t) : Object.assign(Object.assign({}, t), e);
    }

    var Zi = function () {
      var t = /*#__PURE__*/function () {
        function t(_t120, e, n, r, o) {
          var _this39 = this;

          _classCallCheck(this, t);

          this._zone = _t120, this._injector = e, this._exceptionHandler = n, this._componentFactoryResolver = r, this._initStatus = o, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
            next: function next() {
              _this39._zone.run(function () {
                _this39.tick();
              });
            }
          });
          var s = new y(function (_t121) {
            _this39._stable = _this39._zone.isStable && !_this39._zone.hasPendingMacrotasks && !_this39._zone.hasPendingMicrotasks, _this39._zone.runOutsideAngular(function () {
              _t121.next(_this39._stable), _t121.complete();
            });
          }),
              i = new y(function (_t122) {
            var e;

            _this39._zone.runOutsideAngular(function () {
              e = _this39._zone.onStable.subscribe(function () {
                Ci.assertNotInAngularZone(), bi(function () {
                  _this39._stable || _this39._zone.hasPendingMacrotasks || _this39._zone.hasPendingMicrotasks || (_this39._stable = !0, _t122.next(!0));
                });
              });
            });

            var n = _this39._zone.onUnstable.subscribe(function () {
              Ci.assertInAngularZone(), _this39._stable && (_this39._stable = !1, _this39._zone.runOutsideAngular(function () {
                _t122.next(!1);
              }));
            });

            return function () {
              e.unsubscribe(), n.unsubscribe();
            };
          });

          this.isStable = function () {
            for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              t[_key4] = arguments[_key4];
            }

            var e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
            var o;
            return (o = r) && "function" == typeof o.schedule ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof y ? t[0] : function () {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
              return O(m, t);
            }(e)(function (t, e) {
              return e ? function (t, e) {
                return new y(function (n) {
                  var r = new h();
                  var o = 0;
                  return r.add(e.schedule(function () {
                    o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete();
                  })), r;
                });
              }(t, e) : new y(S(t));
            }(t, n));
          }(s, i.pipe(function (_t123) {
            return N()((e = Z, function (t) {
              var n;
              n = "function" == typeof e ? e : function () {
                return e;
              };
              var r = Object.create(t, F);
              return r.source = t, r.subjectFactory = n, r;
            })(_t123));
            var e;
          }));
        }

        _createClass(t, [{
          key: "bootstrap",
          value: function bootstrap(_t124, e) {
            var _this40 = this;

            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
            var n;
            n = _t124 instanceof ns ? _t124 : this._componentFactoryResolver.resolveComponentFactory(_t124), this.componentTypes.push(n.componentType);
            var r = n.isBoundToModule ? void 0 : this._injector.get(Hs),
                o = n.create(So.NULL, [], e || n.selector, r),
                s = o.location.nativeElement,
                i = o.injector.get(Ii, null),
                l = i && o.injector.get(Mi);
            return i && l && l.registerApplication(s, i), o.onDestroy(function () {
              _this40.detachView(o.hostView), zi(_this40.components, o), l && l.unregisterApplication(s);
            }), this._loadComponent(o), o;
          }
        }, {
          key: "tick",
          value: function tick() {
            var _this41 = this;

            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");

            try {
              this._runningTick = !0;

              var _iterator2 = _createForOfIteratorHelper(this._views),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _t131 = _step2.value;

                  _t131.detectChanges();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } catch (_t126) {
              this._zone.runOutsideAngular(function () {
                return _this41._exceptionHandler.handleError(_t126);
              });
            } finally {
              this._runningTick = !1;
            }
          }
        }, {
          key: "attachView",
          value: function attachView(_t127) {
            var e = _t127;
            this._views.push(e), e.attachToAppRef(this);
          }
        }, {
          key: "detachView",
          value: function detachView(_t128) {
            var e = _t128;
            zi(this._views, e), e.detachFromAppRef();
          }
        }, {
          key: "_loadComponent",
          value: function _loadComponent(_t129) {
            this.attachView(_t129.hostView), this.tick(), this.components.push(_t129), this._injector.get(ai, []).concat(this._bootstrapListeners).forEach(function (e) {
              return e(_t129);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._views.slice().forEach(function (_t130) {
              return _t130.destroy();
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
        return new (e || t)(In(Ci), In(So), In(Ln), In(os), In(ni));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function zi(t, e) {
      var n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    }

    var Bi = Hi(null, "core", [{
      provide: li,
      useValue: "unknown"
    }, {
      provide: Fi,
      deps: [So]
    }, {
      provide: Mi,
      deps: []
    }, {
      provide: ci,
      deps: []
    }]),
        $i = [{
      provide: Zi,
      useClass: Zi,
      deps: [Ci, So, Ln, os, ni]
    }, {
      provide: Ws,
      deps: [Ci],
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
      provide: ni,
      useClass: ni,
      deps: [[new Dn(), ei]]
    }, {
      provide: vi,
      useClass: vi,
      deps: []
    }, oi, {
      provide: ks,
      useFactory: function useFactory() {
        return Ps;
      },
      deps: []
    }, {
      provide: Ts,
      useFactory: function useFactory() {
        return Os;
      },
      deps: []
    }, {
      provide: ui,
      useFactory: function useFactory(t) {
        return es(t = t || "undefined" != typeof $localize && $localize.locale || Xo), t;
      },
      deps: [[new On(ui), new Dn(), new jn()]]
    }, {
      provide: hi,
      useValue: "USD"
    }];

    var Gi = function () {
      var t = function t(_t132) {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)(In(Zi));
      }, t.ɵmod = Dt({
        type: t
      }), t.ɵinj = X({
        providers: $i
      }), t;
    }(),
        Ui = null;

    function Wi() {
      return Ui;
    }

    var qi = new yn("DocumentToken");

    var Qi = function () {
      return (Qi = Qi || {})[Qi.Zero = 0] = "Zero", Qi[Qi.One = 1] = "One", Qi[Qi.Two = 2] = "Two", Qi[Qi.Few = 3] = "Few", Qi[Qi.Many = 4] = "Many", Qi[Qi.Other = 5] = "Other", Qi;
    }();

    var Ji = function Ji() {
      _classCallCheck(this, Ji);
    };

    var Yi = function () {
      var t = /*#__PURE__*/function (_Ji) {
        _inherits(t, _Ji);

        var _super24 = _createSuper(t);

        function t(_t133) {
          var _this42;

          _classCallCheck(this, t);

          _this42 = _super24.call(this), _this42.locale = _t133;
          return _this42;
        }

        _createClass(t, [{
          key: "getPluralCategory",
          value: function getPluralCategory(_t134, e) {
            switch (function (t) {
              return function (t) {
                var e = function (t) {
                  return t.toLowerCase().replace(/_/g, "-");
                }(t);

                var n = Yo(e);
                if (n) return n;
                var r = e.split("-")[0];
                if (n = Yo(r), n) return n;
                if ("en" === r) return Qo;
                throw new Error("Missing locale data for the locale \"".concat(t, "\"."));
              }(t)[Ko.PluralCase];
            }(e || this.locale)(_t134)) {
              case Qi.Zero:
                return "zero";

              case Qi.One:
                return "one";

              case Qi.Two:
                return "two";

              case Qi.Few:
                return "few";

              case Qi.Many:
                return "many";

              default:
                return "other";
            }
          }
        }]);

        return t;
      }(Ji);

      return t.ɵfac = function (e) {
        return new (e || t)(In(ui));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Ki = /*#__PURE__*/function () {
      function Ki(t, e) {
        _classCallCheck(this, Ki);

        this._viewContainerRef = t, this._templateRef = e, this._created = !1;
      }

      _createClass(Ki, [{
        key: "create",
        value: function create() {
          this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._created = !1, this._viewContainerRef.clear();
        }
      }, {
        key: "enforceState",
        value: function enforceState(t) {
          t && !this._created ? this.create() : !t && this._created && this.destroy();
        }
      }]);

      return Ki;
    }();

    var Xi = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1;
        }

        _createClass(t, [{
          key: "ngSwitch",
          set: function set(_t135) {
            this._ngSwitch = _t135, 0 === this._caseCount && this._updateDefaultCases(!0);
          }
        }, {
          key: "_addCase",
          value: function _addCase() {
            return this._caseCount++;
          }
        }, {
          key: "_addDefault",
          value: function _addDefault(_t136) {
            this._defaultViews || (this._defaultViews = []), this._defaultViews.push(_t136);
          }
        }, {
          key: "_matchCase",
          value: function _matchCase(_t137) {
            var e = _t137 == this._ngSwitch;
            return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e;
          }
        }, {
          key: "_updateDefaultCases",
          value: function _updateDefaultCases(_t138) {
            if (this._defaultViews && _t138 !== this._defaultUsed) {
              this._defaultUsed = _t138;

              for (var _e47 = 0; _e47 < this._defaultViews.length; _e47++) {
                this._defaultViews[_e47].enforceState(_t138);
              }
            }
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵdir = Nt({
        type: t,
        selectors: [["", "ngSwitch", ""]],
        inputs: {
          ngSwitch: "ngSwitch"
        }
      }), t;
    }(),
        tl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t139, e, n) {
          _classCallCheck(this, t);

          this.ngSwitch = n, n._addCase(), this._view = new Ki(_t139, e);
        }

        _createClass(t, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(Ro(Fs), Ro(js), Ro(Xi, 9));
      }, t.ɵdir = Nt({
        type: t,
        selectors: [["", "ngSwitchCase", ""]],
        inputs: {
          ngSwitchCase: "ngSwitchCase"
        }
      }), t;
    }(),
        el = function () {
      var t = function t(_t140, e, n) {
        _classCallCheck(this, t);

        n._addDefault(new Ki(_t140, e));
      };

      return t.ɵfac = function (e) {
        return new (e || t)(Ro(Fs), Ro(js), Ro(Xi, 9));
      }, t.ɵdir = Nt({
        type: t,
        selectors: [["", "ngSwitchDefault", ""]]
      }), t;
    }(),
        nl = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Dt({
        type: t
      }), t.ɵinj = X({
        providers: [{
          provide: Ji,
          useClass: Yi
        }]
      }), t;
    }();

    var rl = /*#__PURE__*/function (_ref5) {
      _inherits(rl, _ref5);

      var _super25 = _createSuper(rl);

      function rl() {
        _classCallCheck(this, rl);

        return _super25.apply(this, arguments);
      }

      _createClass(rl, [{
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
          var e = (sl = sl || document.querySelector("base"), sl ? sl.getAttribute("href") : null);
          return null == e ? null : function (t) {
            ol = ol || document.createElement("a"), ol.setAttribute("href", t);
            var e = ol.pathname;
            return "/" === e.charAt(0) ? e : "/".concat(e);
          }(e);
        }
      }, {
        key: "resetBaseElement",
        value: function resetBaseElement() {
          sl = null;
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
                var _n68 = _step3.value;

                var _t141 = _n68.indexOf("="),
                    _ref6 = -1 == _t141 ? [_n68, ""] : [_n68.slice(0, _t141), _n68.slice(_t141 + 1)],
                    _ref7 = _slicedToArray(_ref6, 2),
                    _r52 = _ref7[0],
                    _o31 = _ref7[1];

                if (_r52.trim() === e) return decodeURIComponent(_o31);
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
          t = new rl(), Ui || (Ui = t);
        }
      }]);

      return rl;
    }( /*#__PURE__*/function (_ref8) {
      _inherits(_class3, _ref8);

      var _super26 = _createSuper(_class3);

      function _class3() {
        var _this43;

        _classCallCheck(this, _class3);

        _this43 = _super26.apply(this, arguments), _this43.supportsDOMEvents = !0;
        return _this43;
      }

      return _class3;
    }( /*#__PURE__*/function () {
      function _class4() {
        _classCallCheck(this, _class4);
      }

      return _class4;
    }()));

    var ol,
        sl = null;
    var il = new yn("TRANSITION_ID"),
        ll = [{
      provide: ei,
      useFactory: function useFactory(t, e, n) {
        return function () {
          n.get(ni).donePromise.then(function () {
            var n = Wi();
            Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(function (e) {
              return e.getAttribute("ng-transition") === t;
            }).forEach(function (t) {
              return n.remove(t);
            });
          });
        };
      },
      deps: [il, qi, So],
      multi: !0
    }];

    var al = /*#__PURE__*/function () {
      function al() {
        _classCallCheck(this, al);
      }

      _createClass(al, [{
        key: "addToWindow",
        value: function addToWindow(t) {
          yt.getAngularTestability = function (e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error("Could not find testability for element.");
            return r;
          }, yt.getAllAngularTestabilities = function () {
            return t.getAllTestabilities();
          }, yt.getAllAngularRootElements = function () {
            return t.getAllRootElements();
          }, yt.frameworkStabilizers || (yt.frameworkStabilizers = []), yt.frameworkStabilizers.push(function (t) {
            var e = yt.getAllAngularTestabilities();
            var n = e.length,
                r = !1;

            var o = function o(e) {
              r = r || e, n--, 0 == n && t(r);
            };

            e.forEach(function (t) {
              t.whenStable(o);
            });
          });
        }
      }, {
        key: "findTestabilityInTree",
        value: function findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          var r = t.getTestability(e);
          return null != r ? r : n ? Wi().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null;
        }
      }], [{
        key: "init",
        value: function init() {
          var t;
          t = new al(), Di = t;
        }
      }]);

      return al;
    }();

    var cl = function () {
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
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var ul = new yn("EventManagerPlugins");

    var hl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t142, e) {
          var _this44 = this;

          _classCallCheck(this, t);

          this._zone = e, this._eventNameToPlugin = new Map(), _t142.forEach(function (_t143) {
            return _t143.manager = _this44;
          }), this._plugins = _t142.slice().reverse();
        }

        _createClass(t, [{
          key: "addEventListener",
          value: function addEventListener(_t144, e, n) {
            return this._findPluginFor(e).addEventListener(_t144, e, n);
          }
        }, {
          key: "addGlobalEventListener",
          value: function addGlobalEventListener(_t145, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(_t145, e, n);
          }
        }, {
          key: "getZone",
          value: function getZone() {
            return this._zone;
          }
        }, {
          key: "_findPluginFor",
          value: function _findPluginFor(_t146) {
            var e = this._eventNameToPlugin.get(_t146);

            if (e) return e;
            var n = this._plugins;

            for (var _r53 = 0; _r53 < n.length; _r53++) {
              var _e48 = n[_r53];
              if (_e48.supports(_t146)) return this._eventNameToPlugin.set(_t146, _e48), _e48;
            }

            throw new Error("No event manager plugin found for event ".concat(_t146));
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(In(ul), In(Ci));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var dl = /*#__PURE__*/function () {
      function dl(t) {
        _classCallCheck(this, dl);

        this._doc = t;
      }

      _createClass(dl, [{
        key: "addGlobalEventListener",
        value: function addGlobalEventListener(t, e, n) {
          var r = Wi().getGlobalEventTarget(this._doc, t);
          if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(e));
          return this.addEventListener(r, e, n);
        }
      }]);

      return dl;
    }();

    var fl = function () {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._stylesSet = new Set();
        }

        _createClass(t, [{
          key: "addStyles",
          value: function addStyles(_t147) {
            var _this45 = this;

            var e = new Set();
            _t147.forEach(function (_t148) {
              _this45._stylesSet.has(_t148) || (_this45._stylesSet.add(_t148), e.add(_t148));
            }), this.onStylesAdded(e);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(_t149) {}
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
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }(),
        pl = function () {
      var t = /*#__PURE__*/function (_fl) {
        _inherits(t, _fl);

        var _super27 = _createSuper(t);

        function t(_t150) {
          var _this46;

          _classCallCheck(this, t);

          _this46 = _super27.call(this), _this46._doc = _t150, _this46._hostNodes = new Map(), _this46._hostNodes.set(_t150.head, []);
          return _this46;
        }

        _createClass(t, [{
          key: "_addStylesToHost",
          value: function _addStylesToHost(_t151, e, n) {
            var _this47 = this;

            _t151.forEach(function (_t152) {
              var r = _this47._doc.createElement("style");

              r.textContent = _t152, n.push(e.appendChild(r));
            });
          }
        }, {
          key: "addHost",
          value: function addHost(_t153) {
            var e = [];
            this._addStylesToHost(this._stylesSet, _t153, e), this._hostNodes.set(_t153, e);
          }
        }, {
          key: "removeHost",
          value: function removeHost(_t154) {
            var e = this._hostNodes.get(_t154);

            e && e.forEach(gl), this._hostNodes["delete"](_t154);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(_t155) {
            var _this48 = this;

            this._hostNodes.forEach(function (e, n) {
              _this48._addStylesToHost(_t155, n, e);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._hostNodes.forEach(function (_t156) {
              return _t156.forEach(gl);
            });
          }
        }]);

        return t;
      }(fl);

      return t.ɵfac = function (e) {
        return new (e || t)(In(qi));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    function gl(t) {
      Wi().remove(t);
    }

    var _l = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    },
        ml = /%COMP%/g;

    function yl(t, e, n) {
      for (var _r54 = 0; _r54 < e.length; _r54++) {
        var _o32 = e[_r54];
        Array.isArray(_o32) ? yl(t, _o32, n) : (_o32 = _o32.replace(ml, t), n.push(_o32));
      }

      return n;
    }

    function vl(t) {
      return function (e) {
        if ("__ngUnwrap__" === e) return t;
        !1 === t(e) && (e.preventDefault(), e.returnValue = !1);
      };
    }

    var wl = function () {
      var t = /*#__PURE__*/function () {
        function t(_t157, e, n) {
          _classCallCheck(this, t);

          this.eventManager = _t157, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map(), this.defaultRenderer = new bl(_t157);
        }

        _createClass(t, [{
          key: "createRenderer",
          value: function createRenderer(_t158, e) {
            if (!_t158 || !e) return this.defaultRenderer;

            switch (e.encapsulation) {
              case ft.Emulated:
                {
                  var _n69 = this.rendererByCompId.get(e.id);

                  return _n69 || (_n69 = new Cl(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, _n69)), _n69.applyToHost(_t158), _n69;
                }

              case 1:
              case ft.ShadowDom:
                return new xl(this.eventManager, this.sharedStylesHost, _t158, e);

              default:
                if (!this.rendererByCompId.has(e.id)) {
                  var _t160 = yl(e.id, e.styles, []);

                  this.sharedStylesHost.addStyles(_t160), this.rendererByCompId.set(e.id, this.defaultRenderer);
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
        return new (e || t)(In(hl), In(pl), In(ri));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var bl = /*#__PURE__*/function () {
      function bl(t) {
        _classCallCheck(this, bl);

        this.eventManager = t, this.data = Object.create(null);
      }

      _createClass(bl, [{
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "createElement",
        value: function createElement(t, e) {
          return e ? document.createElementNS(_l[e] || e, t) : document.createElement(t);
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
            var _o33 = _l[r];
            _o33 ? t.setAttributeNS(_o33, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
      }, {
        key: "removeAttribute",
        value: function removeAttribute(t, e, n) {
          if (n) {
            var _r55 = _l[n];
            _r55 ? t.removeAttributeNS(_r55, e) : t.removeAttribute("".concat(n, ":").concat(e));
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
          r & (Bn.DashCase | Bn.Important) ? t.style.setProperty(e, n, r & Bn.Important ? "important" : "") : t.style[e] = n;
        }
      }, {
        key: "removeStyle",
        value: function removeStyle(t, e, n) {
          n & Bn.DashCase ? t.style.removeProperty(e) : t.style[e] = "";
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
          return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, vl(n)) : this.eventManager.addEventListener(t, e, vl(n));
        }
      }]);

      return bl;
    }();

    var Cl = /*#__PURE__*/function (_bl) {
      _inherits(Cl, _bl);

      var _super28 = _createSuper(Cl);

      function Cl(t, e, n, r) {
        var _this49;

        _classCallCheck(this, Cl);

        _this49 = _super28.call(this, t), _this49.component = n;
        var o = yl(r + "-" + n.id, n.styles, []);
        e.addStyles(o), _this49.contentAttr = "_ngcontent-%COMP%".replace(ml, r + "-" + n.id), _this49.hostAttr = "_nghost-%COMP%".replace(ml, r + "-" + n.id);
        return _this49;
      }

      _createClass(Cl, [{
        key: "applyToHost",
        value: function applyToHost(t) {
          _get(_getPrototypeOf(Cl.prototype), "setAttribute", this).call(this, t, this.hostAttr, "");
        }
      }, {
        key: "createElement",
        value: function createElement(t, e) {
          var n = _get(_getPrototypeOf(Cl.prototype), "createElement", this).call(this, t, e);

          return _get(_getPrototypeOf(Cl.prototype), "setAttribute", this).call(this, n, this.contentAttr, ""), n;
        }
      }]);

      return Cl;
    }(bl);

    var xl = /*#__PURE__*/function (_bl2) {
      _inherits(xl, _bl2);

      var _super29 = _createSuper(xl);

      function xl(t, e, n, r) {
        var _this50;

        _classCallCheck(this, xl);

        _this50 = _super29.call(this, t), _this50.sharedStylesHost = e, _this50.hostEl = n, _this50.shadowRoot = n.attachShadow({
          mode: "open"
        }), _this50.sharedStylesHost.addHost(_this50.shadowRoot);
        var o = yl(r.id, r.styles, []);

        for (var _s27 = 0; _s27 < o.length; _s27++) {
          var _t161 = document.createElement("style");

          _t161.textContent = o[_s27], _this50.shadowRoot.appendChild(_t161);
        }

        return _this50;
      }

      _createClass(xl, [{
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
          return _get(_getPrototypeOf(xl.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(t), e);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(t, e, n) {
          return _get(_getPrototypeOf(xl.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(t), e, n);
        }
      }, {
        key: "removeChild",
        value: function removeChild(t, e) {
          return _get(_getPrototypeOf(xl.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(t), e);
        }
      }, {
        key: "parentNode",
        value: function parentNode(t) {
          return this.nodeOrShadowRoot(_get(_getPrototypeOf(xl.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(t)));
        }
      }]);

      return xl;
    }(bl);

    var kl = function () {
      var t = /*#__PURE__*/function (_dl) {
        _inherits(t, _dl);

        var _super30 = _createSuper(t);

        function t(_t162) {
          _classCallCheck(this, t);

          return _super30.call(this, _t162);
        }

        _createClass(t, [{
          key: "supports",
          value: function supports(_t163) {
            return !0;
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(_t164, e, n) {
            var _this51 = this;

            return _t164.addEventListener(e, n, !1), function () {
              return _this51.removeEventListener(_t164, e, n);
            };
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(_t165, e, n) {
            return _t165.removeEventListener(e, n);
          }
        }]);

        return t;
      }(dl);

      return t.ɵfac = function (e) {
        return new (e || t)(In(qi));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var El = ["alt", "control", "meta", "shift"],
        Tl = {
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
        Sl = {
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
        Al = {
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

    var Il = function () {
      var t = /*#__PURE__*/function (_dl2) {
        _inherits(t, _dl2);

        var _super31 = _createSuper(t);

        function t(_t166) {
          _classCallCheck(this, t);

          return _super31.call(this, _t166);
        }

        _createClass(t, [{
          key: "supports",
          value: function supports(e) {
            return null != t.parseEventName(e);
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(e, n, r) {
            var o = t.parseEventName(n),
                s = t.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
              return Wi().onAndCancel(e, o.domEventName, s);
            });
          }
        }], [{
          key: "parseEventName",
          value: function parseEventName(e) {
            var n = e.toLowerCase().split("."),
                r = n.shift();
            if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;

            var o = t._normalizeKey(n.pop());

            var s = "";
            if (El.forEach(function (_t167) {
              var e = n.indexOf(_t167);
              e > -1 && (n.splice(e, 1), s += _t167 + ".");
            }), s += o, 0 != n.length || 0 === o.length) return null;
            var i = {};
            return i.domEventName = r, i.fullKey = s, i;
          }
        }, {
          key: "getEventFullKey",
          value: function getEventFullKey(_t168) {
            var e = "",
                n = function (t) {
              var e = t.key;

              if (null == e) {
                if (e = t.keyIdentifier, null == e) return "Unidentified";
                e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Sl.hasOwnProperty(e) && (e = Sl[e]));
              }

              return Tl[e] || e;
            }(_t168);

            return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), El.forEach(function (r) {
              r != n && (0, Al[r])(_t168) && (e += r + ".");
            }), e += n, e;
          }
        }, {
          key: "eventCallback",
          value: function eventCallback(e, n, r) {
            return function (o) {
              t.getEventFullKey(o) === e && r.runGuarded(function () {
                return n(o);
              });
            };
          }
        }, {
          key: "_normalizeKey",
          value: function _normalizeKey(_t169) {
            switch (_t169) {
              case "esc":
                return "escape";

              default:
                return _t169;
            }
          }
        }]);

        return t;
      }(dl);

      return t.ɵfac = function (e) {
        return new (e || t)(In(qi));
      }, t.ɵprov = K({
        token: t,
        factory: t.ɵfac
      }), t;
    }();

    var Ml = Hi(Bi, "browser", [{
      provide: li,
      useValue: "browser"
    }, {
      provide: ii,
      useValue: function useValue() {
        rl.makeCurrent(), al.init();
      },
      multi: !0
    }, {
      provide: qi,
      useFactory: function useFactory() {
        return function (t) {
          Kt = t;
        }(document), document;
      },
      deps: []
    }]),
        Pl = [[], {
      provide: go,
      useValue: "root"
    }, {
      provide: Ln,
      useFactory: function useFactory() {
        return new Ln();
      },
      deps: []
    }, {
      provide: ul,
      useClass: kl,
      multi: !0,
      deps: [qi, Ci, li]
    }, {
      provide: ul,
      useClass: Il,
      multi: !0,
      deps: [qi]
    }, [], {
      provide: wl,
      useClass: wl,
      deps: [hl, pl, ri]
    }, {
      provide: cs,
      useExisting: wl
    }, {
      provide: fl,
      useExisting: pl
    }, {
      provide: pl,
      useClass: pl,
      deps: [qi]
    }, {
      provide: Ii,
      useClass: Ii,
      deps: [Ci]
    }, {
      provide: hl,
      useClass: hl,
      deps: [ul, Ci]
    }, {
      provide: function provide() {
        _classCallCheck(this, provide);
      },
      useClass: cl,
      deps: []
    }, []];

    var Ol = function () {
      var t = /*#__PURE__*/function () {
        function t(_t170) {
          _classCallCheck(this, t);

          if (_t170) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }

        _createClass(t, null, [{
          key: "withServerTransition",
          value: function withServerTransition(e) {
            return {
              ngModule: t,
              providers: [{
                provide: ri,
                useValue: e.appId
              }, {
                provide: il,
                useExisting: ri
              }, ll]
            };
          }
        }]);

        return t;
      }();

      return t.ɵfac = function (e) {
        return new (e || t)(In(t, 12));
      }, t.ɵmod = Dt({
        type: t
      }), t.ɵinj = X({
        providers: Pl,
        imports: [nl, Gi]
      }), t;
    }();

    function Dl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng generate component xyz"), Lo());
    }

    function jl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng add @angular/material"), Lo());
    }

    function Nl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng add @angular/pwa"), Lo());
    }

    function Rl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng add _____"), Lo());
    }

    function Hl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng test"), Lo());
    }

    function Vl(t, e) {
      1 & t && (Fo(0, "pre"), Uo(1, "ng build"), Lo());
    }

    "undefined" != typeof window && window;

    var Fl = function () {
      var t = function t() {
        _classCallCheck(this, t);

        this.title = "ngapp";
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵcmp = It({
        type: t,
        selectors: [["app-root"]],
        decls: 157,
        vars: 7,
        consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "card-container"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli", 1, "card"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/", 1, "card"], ["d", "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/devtools/", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "material-icons"], ["fill", "none", "height", "24", "width", "24"], ["d", "M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z"], ["points", "10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44"], ["type", "hidden"], ["selection", ""], ["tabindex", "0", 1, "card", "card-small", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Discord", "href", "https://discord.gg/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "viewBox", "0 0 245 240"], ["d", "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"], ["d", "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
        template: function template(t, e) {
          if (1 & t) {
            var _t171 = he();

            Fo(0, "div", 0), Zo(1, "img", 1), Fo(2, "span"), Uo(3, "Welcome"), Lo(), Zo(4, "div", 2), Fo(5, "a", 3), je(), Fo(6, "svg", 4), Zo(7, "rect", 5), Zo(8, "path", 6), Lo(), Lo(), Ne(), Fo(9, "a", 7), je(), Fo(10, "svg", 8), Zo(11, "path", 9), Zo(12, "path", 10), Lo(), Lo(), Lo(), Ne(), Fo(13, "div", 11), Fo(14, "div", 12), je(), Fo(15, "svg", 13), Fo(16, "title"), Uo(17, "Rocket Ship"), Lo(), Fo(18, "g", 14), Zo(19, "circle", 15), Fo(20, "g", 16), Zo(21, "path", 17), Zo(22, "path", 18), Lo(), Lo(), Lo(), Ne(), Fo(23, "span"), Uo(24), Lo(), je(), Fo(25, "svg", 19), Fo(26, "title"), Uo(27, "Rocket Ship Smoke"), Lo(), Zo(28, "path", 20), Lo(), Lo(), Ne(), Fo(29, "h2"), Uo(30, "Resources"), Lo(), Fo(31, "p"), Uo(32, "Here are some links to help you get started:"), Lo(), Fo(33, "div", 21), Fo(34, "a", 22), je(), Fo(35, "svg", 23), Zo(36, "path", 24), Lo(), Ne(), Fo(37, "span"), Uo(38, "Learn Angular"), Lo(), je(), Fo(39, "svg", 23), Zo(40, "path", 25), Lo(), Lo(), Ne(), Fo(41, "a", 26), je(), Fo(42, "svg", 23), Zo(43, "path", 27), Lo(), Ne(), Fo(44, "span"), Uo(45, "CLI Documentation"), Lo(), je(), Fo(46, "svg", 23), Zo(47, "path", 25), Lo(), Lo(), Ne(), Fo(48, "a", 28), je(), Fo(49, "svg", 23), Zo(50, "path", 29), Lo(), Ne(), Fo(51, "span"), Uo(52, "Angular Blog"), Lo(), je(), Fo(53, "svg", 23), Zo(54, "path", 25), Lo(), Lo(), Ne(), Fo(55, "a", 30), je(), Fo(56, "svg", 31), Fo(57, "g"), Zo(58, "rect", 32), Lo(), Fo(59, "g"), Fo(60, "g"), Zo(61, "path", 33), Zo(62, "polygon", 34), Lo(), Lo(), Lo(), Ne(), Fo(63, "span"), Uo(64, "Angular DevTools"), Lo(), je(), Fo(65, "svg", 23), Zo(66, "path", 25), Lo(), Lo(), Lo(), Ne(), Fo(67, "h2"), Uo(68, "Next Steps"), Lo(), Fo(69, "p"), Uo(70, "What do you want to do next with your app?"), Lo(), Zo(71, "input", 35, 36), Fo(73, "div", 21), Fo(74, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "component";
            }), je(), Fo(75, "svg", 23), Zo(76, "path", 38), Lo(), Ne(), Fo(77, "span"), Uo(78, "New Component"), Lo(), Lo(), Fo(79, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "material";
            }), je(), Fo(80, "svg", 23), Zo(81, "path", 38), Lo(), Ne(), Fo(82, "span"), Uo(83, "Angular Material"), Lo(), Lo(), Fo(84, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "pwa";
            }), je(), Fo(85, "svg", 23), Zo(86, "path", 38), Lo(), Ne(), Fo(87, "span"), Uo(88, "Add PWA Support"), Lo(), Lo(), Fo(89, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "dependency";
            }), je(), Fo(90, "svg", 23), Zo(91, "path", 38), Lo(), Ne(), Fo(92, "span"), Uo(93, "Add Dependency"), Lo(), Lo(), Fo(94, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "test";
            }), je(), Fo(95, "svg", 23), Zo(96, "path", 38), Lo(), Ne(), Fo(97, "span"), Uo(98, "Run and Watch Tests"), Lo(), Lo(), Fo(99, "div", 37), Bo("click", function () {
              return fe(_t171), No(72).value = "build";
            }), je(), Fo(100, "svg", 23), Zo(101, "path", 38), Lo(), Ne(), Fo(102, "span"), Uo(103, "Build for Production"), Lo(), Lo(), Lo(), Fo(104, "div", 39), jo(105, Dl, 2, 0, "pre", 40), jo(106, jl, 2, 0, "pre", 41), jo(107, Nl, 2, 0, "pre", 41), jo(108, Rl, 2, 0, "pre", 41), jo(109, Hl, 2, 0, "pre", 41), jo(110, Vl, 2, 0, "pre", 41), Lo(), Fo(111, "div", 21), Fo(112, "a", 42), je(), Fo(113, "svg", 43), Zo(114, "path", 44), Zo(115, "path", 45), Zo(116, "path", 46), Zo(117, "path", 47), Zo(118, "path", 48), Lo(), Lo(), Ne(), Fo(119, "a", 49), je(), Fo(120, "svg", 50), Fo(121, "title"), Uo(122, "Angular CLI Logo"), Lo(), Fo(123, "g", 51), Zo(124, "path", 52), Zo(125, "path", 53), Zo(126, "path", 54), Zo(127, "path", 55), Zo(128, "rect", 56), Lo(), Lo(), Lo(), Ne(), Fo(129, "a", 57), je(), Fo(130, "svg", 58), Fo(131, "title"), Uo(132, "Meetup Logo"), Lo(), Zo(133, "path", 59), Lo(), Lo(), Ne(), Fo(134, "a", 60), je(), Fo(135, "svg", 61), Fo(136, "title"), Uo(137, "Discord Logo"), Lo(), Zo(138, "path", 62), Zo(139, "path", 63), Lo(), Lo(), Lo(), Ne(), Fo(140, "footer"), Uo(141, " Love Angular?\xa0 "), Fo(142, "a", 64), Uo(143, " Give our repo a star. "), Fo(144, "div", 65), je(), Fo(145, "svg", 23), Zo(146, "path", 66), Zo(147, "path", 67), Lo(), Uo(148, " Star "), Lo(), Lo(), Ne(), Fo(149, "a", 64), je(), Fo(150, "svg", 23), Zo(151, "path", 68), Zo(152, "path", 66), Lo(), Lo(), Lo(), Fo(153, "svg", 69), Fo(154, "title"), Uo(155, "Gray Clouds Background"), Lo(), Zo(156, "path", 70), Lo(), Lo();
          }

          if (2 & t) {
            var _t172 = No(72);

            Tr(24), Wo("", e.title, " app is running!"), Tr(80), Ho("ngSwitch", _t172.value), Tr(2), Ho("ngSwitchCase", "material"), Tr(1), Ho("ngSwitchCase", "pwa"), Tr(1), Ho("ngSwitchCase", "dependency"), Tr(1), Ho("ngSwitchCase", "test"), Tr(1), Ho("ngSwitchCase", "build");
          }
        },
        directives: [Xi, el, tl],
        styles: ["", '[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: "\\2022 \\2022 \\2022";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }']
      }), t;
    }(),
        Ll = function () {
      var t = function t() {
        _classCallCheck(this, t);
      };

      return t.ɵfac = function (e) {
        return new (e || t)();
      }, t.ɵmod = Dt({
        type: t,
        bootstrap: [Fl]
      }), t.ɵinj = X({
        providers: [],
        imports: [[Ol]]
      }), t;
    }();

    (function () {
      if (Ni) throw new Error("Cannot enable prod mode after platform setup.");
      ji = !1;
    })(), Ml().bootstrapModule(Ll)["catch"](function (t) {
      return console.error(t);
    });
  }
}, function (t) {
  "use strict";

  t(t.s = 392);
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
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/ngapp/dist/ngapp/main.89881a79dd5b779099e1.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;