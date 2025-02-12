import {
  require_prop_types
} from "./chunk-BLG6QWMW.js";
import {
  require_shallowequal
} from "./chunk-OJMNJ562.js";
import {
  require_react_dom
} from "./chunk-LV7LEDEA.js";
import {
  __commonJS,
  __export,
  __toESM,
  require_react
} from "./chunk-JRE55LYH.js";

// node_modules/@fluentui/react-component-ref/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@fluentui/react-component-ref/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf3(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf3(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf3(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf3(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf3(object) === REACT_PROVIDER_TYPE;
        }
        function isElement3(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf3(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf3(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf3(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf3(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf3(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf3(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf3(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf3(object) === REACT_SUSPENSE_TYPE;
        }
        exports2.AsyncMode = AsyncMode;
        exports2.ConcurrentMode = ConcurrentMode;
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element2;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal2;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement3;
        exports2.isForwardRef = isForwardRef2;
        exports2.isFragment = isFragment2;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/@fluentui/react-component-ref/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@fluentui/react-component-ref/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/exenv/index.js
var require_exenv = __commonJS({
  "node_modules/exenv/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
      };
      if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function() {
          return ExecutionEnvironment;
        });
      } else if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports = ExecutionEnvironment;
      } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
      }
    })();
  }
});

// node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.development.js
var require_event_stack_development = __commonJS({
  "node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.development.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var env = require_exenv();
    var PropTypes164 = require_prop_types();
    var React179 = require_react();
    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    function _classCallCheck(instance3, Constructor) {
      if (!(instance3 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      if (superClass) _setPrototypeOf2(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self2);
    }
    var EventSet = function() {
      function EventSet2(eventHandlers) {
        _classCallCheck(this, EventSet2);
        _defineProperty(this, "handlers", void 0);
        this.handlers = eventHandlers.slice(0);
      }
      _createClass2(EventSet2, [{
        key: "addHandlers",
        value: function addHandlers(additionalHandlers) {
          var newHandlers = this.handlers.slice(0);
          var length = additionalHandlers.length;
          for (var i = 0; i < length; i += 1) {
            newHandlers.push(additionalHandlers[i]);
          }
          return new EventSet2(newHandlers);
        }
        /**
         * @see https://jsperf.com/suir-eventset-dispatchsingle
         * @see https://jsperf.com/suir-eventset-dispatchmultiple2
         */
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event, dispatchAll) {
          var count = this.handlers.length - 1;
          if (!dispatchAll) {
            var recentHandler = this.handlers[count];
            recentHandler(event);
            return;
          }
          for (var i = count; i >= 0; i -= 1) {
            if (!this.handlers[i].called) {
              this.handlers[i].called = true;
              this.handlers[i](event);
            }
          }
          for (var _i = count; _i >= 0; _i -= 1) {
            this.handlers[_i].called = false;
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers() {
          return this.handlers.length > 0;
        }
        /**
         * @see https://jsperf.com/suir-eventset-removehandlers
         */
      }, {
        key: "removeHandlers",
        value: function removeHandlers(removalHandlers) {
          var newHandlers = [];
          var length = this.handlers.length;
          for (var i = 0; i < length; i += 1) {
            var handler = this.handlers[i];
            if (removalHandlers.indexOf(handler) === -1) {
              newHandlers.push(handler);
            }
          }
          return new EventSet2(newHandlers);
        }
      }]);
      return EventSet2;
    }();
    function cloneMap(map2) {
      var newMap = /* @__PURE__ */ new Map();
      map2.forEach(function(value, key) {
        newMap.set(key, value);
      });
      return newMap;
    }
    function normalizeHandlers(handlers) {
      return Array.isArray(handlers) ? handlers : [handlers];
    }
    var isRefObject3 = function isRefObject4(ref2) {
      return ref2 !== null && _typeof2(ref2) === "object" && ref2.hasOwnProperty("current");
    };
    function normalizeTarget(target) {
      if (target === "document") return document;
      if (target === "window") return window;
      if (isRefObject3(target)) return target.current || document;
      return target || document;
    }
    var EventPool = function() {
      function EventPool2(poolName, handlerSets) {
        _classCallCheck(this, EventPool2);
        _defineProperty(this, "handlerSets", void 0);
        _defineProperty(this, "poolName", void 0);
        this.handlerSets = handlerSets;
        this.poolName = poolName;
      }
      _createClass2(EventPool2, [{
        key: "addHandlers",
        value: function addHandlers(eventType, eventHandlers) {
          var handlerSets = cloneMap(this.handlerSets);
          if (handlerSets.has(eventType)) {
            var eventSet = handlerSets.get(eventType);
            handlerSets.set(eventType, eventSet.addHandlers(eventHandlers));
          } else {
            handlerSets.set(eventType, new EventSet(eventHandlers));
          }
          return new EventPool2(this.poolName, handlerSets);
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(eventType, event) {
          var handlerSet = this.handlerSets.get(eventType);
          var shouldDispatchAll = this.poolName === "default";
          if (handlerSet) {
            handlerSet.dispatchEvent(event, shouldDispatchAll);
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers(eventType) {
          if (!eventType) {
            return this.handlerSets.size > 0;
          }
          var eventSet = this.handlerSets.get(eventType);
          if (eventSet) {
            return eventSet.hasHandlers();
          }
          return false;
        }
      }, {
        key: "removeHandlers",
        value: function removeHandlers(eventType, eventHandlers) {
          var handlerSets = cloneMap(this.handlerSets);
          if (!handlerSets.has(eventType)) {
            return new EventPool2(this.poolName, handlerSets);
          }
          var currentSet = handlerSets.get(eventType);
          var nextSet = currentSet.removeHandlers(eventHandlers);
          if (nextSet.hasHandlers()) {
            handlerSets.set(eventType, nextSet);
          } else {
            handlerSets.delete(eventType);
          }
          return new EventPool2(this.poolName, handlerSets);
        }
      }]);
      return EventPool2;
    }();
    _defineProperty(EventPool, "createByType", function(poolName, eventType, eventHandlers) {
      var handlerSets = /* @__PURE__ */ new Map();
      handlerSets.set(eventType, new EventSet(eventHandlers));
      return new EventPool(poolName, handlerSets);
    });
    var EventTarget = function() {
      function EventTarget2(target) {
        var _this = this;
        _classCallCheck(this, EventTarget2);
        _defineProperty(this, "handlers", /* @__PURE__ */ new Map());
        _defineProperty(this, "pools", /* @__PURE__ */ new Map());
        _defineProperty(this, "target", void 0);
        _defineProperty(this, "createEmitter", function(eventType) {
          return function(event) {
            _this.pools.forEach(function(pool) {
              pool.dispatchEvent(eventType, event);
            });
          };
        });
        this.target = target;
      }
      _createClass2(EventTarget2, [{
        key: "addHandlers",
        value: function addHandlers(poolName, eventType, eventHandlers) {
          if (this.pools.has(poolName)) {
            var eventPool = this.pools.get(poolName);
            this.pools.set(poolName, eventPool.addHandlers(eventType, eventHandlers));
          } else {
            this.pools.set(poolName, EventPool.createByType(poolName, eventType, eventHandlers));
          }
          if (!this.handlers.has(eventType)) {
            this.addTargetHandler(eventType);
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers() {
          return this.handlers.size > 0;
        }
      }, {
        key: "removeHandlers",
        value: function removeHandlers(poolName, eventType, eventHandlers) {
          if (!this.pools.has(poolName)) {
            return;
          }
          var pool = this.pools.get(poolName);
          var newPool = pool.removeHandlers(eventType, eventHandlers);
          if (newPool.hasHandlers()) {
            this.pools.set(poolName, newPool);
          } else {
            this.pools.delete(poolName);
          }
          var hasHandlers = false;
          this.pools.forEach(function(pool2) {
            return hasHandlers = hasHandlers || pool2.hasHandlers(eventType);
          });
          if (!hasHandlers) {
            this.removeTargetHandler(eventType);
          }
        }
      }, {
        key: "addTargetHandler",
        value: function addTargetHandler(eventType) {
          var handler = this.createEmitter(eventType);
          this.handlers.set(eventType, handler);
          this.target.addEventListener(eventType, handler, true);
        }
      }, {
        key: "removeTargetHandler",
        value: function removeTargetHandler(eventType) {
          if (this.handlers.has(eventType)) {
            this.target.removeEventListener(eventType, this.handlers.get(eventType), true);
            this.handlers.delete(eventType);
          }
        }
      }]);
      return EventTarget2;
    }();
    var EventStack4 = function() {
      function EventStack5() {
        var _this = this;
        _classCallCheck(this, EventStack5);
        _defineProperty(this, "targets", /* @__PURE__ */ new Map());
        _defineProperty(this, "getTarget", function(target) {
          var autoCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var normalized = normalizeTarget(target);
          if (_this.targets.has(normalized)) {
            return _this.targets.get(normalized);
          }
          if (!autoCreate) return null;
          var eventTarget = new EventTarget(normalized);
          _this.targets.set(normalized, eventTarget);
          return eventTarget;
        });
        _defineProperty(this, "removeTarget", function(target) {
          _this.targets.delete(normalizeTarget(target));
        });
      }
      _createClass2(EventStack5, [{
        key: "sub",
        value: function sub(eventName, eventHandlers) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (!env.canUseDOM) return;
          var _options$target = options.target, target = _options$target === void 0 ? document : _options$target, _options$pool = options.pool, pool = _options$pool === void 0 ? "default" : _options$pool;
          var eventTarget = this.getTarget(target);
          eventTarget.addHandlers(pool, eventName, normalizeHandlers(eventHandlers));
        }
      }, {
        key: "unsub",
        value: function unsub(eventName, eventHandlers) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (!env.canUseDOM) return;
          var _options$target2 = options.target, target = _options$target2 === void 0 ? document : _options$target2, _options$pool2 = options.pool, pool = _options$pool2 === void 0 ? "default" : _options$pool2;
          var eventTarget = this.getTarget(target, false);
          if (eventTarget) {
            eventTarget.removeHandlers(pool, eventName, normalizeHandlers(eventHandlers));
            if (!eventTarget.hasHandlers()) this.removeTarget(target);
          }
        }
      }]);
      return EventStack5;
    }();
    var instance2 = new EventStack4();
    var EventStack$1 = function(_React$PureComponent) {
      _inherits(EventStack5, _React$PureComponent);
      function EventStack5() {
        _classCallCheck(this, EventStack5);
        return _possibleConstructorReturn(this, _getPrototypeOf(EventStack5).apply(this, arguments));
      }
      _createClass2(EventStack5, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.subscribe(this.props);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          this.unsubscribe(prevProps);
          this.subscribe(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unsubscribe(this.props);
        }
      }, {
        key: "subscribe",
        value: function subscribe(props) {
          var name = props.name, on = props.on, pool = props.pool, target = props.target;
          instance2.sub(name, on, {
            pool,
            target
          });
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(props) {
          var name = props.name, on = props.on, pool = props.pool, target = props.target;
          instance2.unsub(name, on, {
            pool,
            target
          });
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);
      return EventStack5;
    }(React179.PureComponent);
    _defineProperty(EventStack$1, "defaultProps", {
      pool: "default",
      target: "document"
    });
    EventStack$1.propTypes = {
      /** An event name on which we will subscribe. */
      name: PropTypes164.string.isRequired,
      /** An event handler or array of event handlers. */
      on: PropTypes164.oneOfType([PropTypes164.func, PropTypes164.arrayOf(PropTypes164.func)]).isRequired,
      /** A name of pool. */
      pool: PropTypes164.string,
      /** A DOM element on which we will subscribe. */
      target: PropTypes164.oneOfType([
        PropTypes164.oneOf(["document", "window"]),
        // Heads up!
        // This condition for SSR safety.
        PropTypes164.instanceOf(env.canUseDOM ? HTMLElement : Object),
        PropTypes164.shape({
          current: PropTypes164.object
        })
      ])
    };
    exports2.instance = instance2;
    exports2.default = EventStack$1;
  }
});

// node_modules/@semantic-ui-react/event-stack/lib/index.js
var require_lib = __commonJS({
  "node_modules/@semantic-ui-react/event-stack/lib/index.js"(exports2, module2) {
    "use strict";
    var stack;
    if (false) {
      stack = null;
    } else {
      stack = require_event_stack_development();
    }
    module2.exports = stack.default;
    module2.exports.instance = stack.instance;
  }
});

// node_modules/keyboard-key/src/keyboardKey.js
var require_keyboardKey = __commonJS({
  "node_modules/keyboard-key/src/keyboardKey.js"(exports2, module2) {
    "use strict";
    var isObject2 = function isObject3(val) {
      return val !== null && !Array.isArray(val) && typeof val === "object";
    };
    var codes = {
      // ----------------------------------------
      // By Code
      // ----------------------------------------
      3: "Cancel",
      6: "Help",
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      28: "Convert",
      29: "NonConvert",
      30: "Accept",
      31: "ModeChange",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      41: "Select",
      42: "Print",
      43: "Execute",
      44: "PrintScreen",
      45: "Insert",
      46: "Delete",
      48: ["0", ")"],
      49: ["1", "!"],
      50: ["2", "@"],
      51: ["3", "#"],
      52: ["4", "$"],
      53: ["5", "%"],
      54: ["6", "^"],
      55: ["7", "&"],
      56: ["8", "*"],
      57: ["9", "("],
      91: "OS",
      93: "ContextMenu",
      144: "NumLock",
      145: "ScrollLock",
      181: "VolumeMute",
      182: "VolumeDown",
      183: "VolumeUp",
      186: [";", ":"],
      187: ["=", "+"],
      188: [",", "<"],
      189: ["-", "_"],
      190: [".", ">"],
      191: ["/", "?"],
      192: ["`", "~"],
      219: ["[", "{"],
      220: ["\\", "|"],
      221: ["]", "}"],
      222: ["'", '"'],
      224: "Meta",
      225: "AltGraph",
      246: "Attn",
      247: "CrSel",
      248: "ExSel",
      249: "EraseEof",
      250: "Play",
      251: "ZoomOut"
    };
    for (i = 0; i < 24; i += 1) {
      codes[112 + i] = "F" + (i + 1);
    }
    var i;
    for (j = 0; j < 26; j += 1) {
      n = j + 65;
      codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
    }
    var n;
    var j;
    var keyboardKey6 = {
      codes,
      /**
       * Get the `keyCode` or `which` value from a keyboard event or `key` name.
       * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
       * @param {string} [eventOrKey.key] If object, it must have one of these keys.
       * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
       * @param {number} [eventOrKey.which] If object, it must have one of these keys.
       * @returns {number|undefined}
       */
      getCode: function getCode(eventOrKey) {
        if (isObject2(eventOrKey)) {
          return eventOrKey.keyCode || eventOrKey.which || this[eventOrKey.key];
        }
        return this[eventOrKey];
      },
      /**
       * Get the key name from a keyboard event, `keyCode`, or `which` value.
       * @param {number|object} eventOrCode A keyboard event-like object or key code.
       * @param {string} [eventOrCode.key] If object with a `key` name, it will be returned.
       * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
       * @param {number} [eventOrCode.which] If object, it must have one of these keys.
       * @param {boolean} [eventOrCode.shiftKey] If object, it must have one of these keys.
       * @returns {string|undefined}
       */
      getKey: function getKey(eventOrCode) {
        var isEvent = isObject2(eventOrCode);
        if (isEvent && eventOrCode.key) {
          return eventOrCode.key;
        }
        var name = codes[isEvent ? eventOrCode.keyCode || eventOrCode.which : eventOrCode];
        if (Array.isArray(name)) {
          if (isEvent) {
            name = name[eventOrCode.shiftKey ? 1 : 0];
          } else {
            name = name[0];
          }
        }
        return name;
      },
      // ----------------------------------------
      // By Name
      // ----------------------------------------
      // declare these manually for static analysis
      Cancel: 3,
      Help: 6,
      Backspace: 8,
      Tab: 9,
      Clear: 12,
      Enter: 13,
      Shift: 16,
      Control: 17,
      Alt: 18,
      Pause: 19,
      CapsLock: 20,
      Escape: 27,
      Convert: 28,
      NonConvert: 29,
      Accept: 30,
      ModeChange: 31,
      " ": 32,
      PageUp: 33,
      PageDown: 34,
      End: 35,
      Home: 36,
      ArrowLeft: 37,
      ArrowUp: 38,
      ArrowRight: 39,
      ArrowDown: 40,
      Select: 41,
      Print: 42,
      Execute: 43,
      PrintScreen: 44,
      Insert: 45,
      Delete: 46,
      0: 48,
      ")": 48,
      1: 49,
      "!": 49,
      2: 50,
      "@": 50,
      3: 51,
      "#": 51,
      4: 52,
      $: 52,
      5: 53,
      "%": 53,
      6: 54,
      "^": 54,
      7: 55,
      "&": 55,
      8: 56,
      "*": 56,
      9: 57,
      "(": 57,
      a: 65,
      A: 65,
      b: 66,
      B: 66,
      c: 67,
      C: 67,
      d: 68,
      D: 68,
      e: 69,
      E: 69,
      f: 70,
      F: 70,
      g: 71,
      G: 71,
      h: 72,
      H: 72,
      i: 73,
      I: 73,
      j: 74,
      J: 74,
      k: 75,
      K: 75,
      l: 76,
      L: 76,
      m: 77,
      M: 77,
      n: 78,
      N: 78,
      o: 79,
      O: 79,
      p: 80,
      P: 80,
      q: 81,
      Q: 81,
      r: 82,
      R: 82,
      s: 83,
      S: 83,
      t: 84,
      T: 84,
      u: 85,
      U: 85,
      v: 86,
      V: 86,
      w: 87,
      W: 87,
      x: 88,
      X: 88,
      y: 89,
      Y: 89,
      z: 90,
      Z: 90,
      OS: 91,
      ContextMenu: 93,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      F13: 124,
      F14: 125,
      F15: 126,
      F16: 127,
      F17: 128,
      F18: 129,
      F19: 130,
      F20: 131,
      F21: 132,
      F22: 133,
      F23: 134,
      F24: 135,
      NumLock: 144,
      ScrollLock: 145,
      VolumeMute: 181,
      VolumeDown: 182,
      VolumeUp: 183,
      ";": 186,
      ":": 186,
      "=": 187,
      "+": 187,
      ",": 188,
      "<": 188,
      "-": 189,
      _: 189,
      ".": 190,
      ">": 190,
      "/": 191,
      "?": 191,
      "`": 192,
      "~": 192,
      "[": 219,
      "{": 219,
      "\\": 220,
      "|": 220,
      "]": 221,
      "}": 221,
      "'": 222,
      '"': 222,
      Meta: 224,
      AltGraph: 225,
      Attn: 246,
      CrSel: 247,
      ExSel: 248,
      EraseEof: 249,
      Play: 250,
      ZoomOut: 251
    };
    keyboardKey6.Spacebar = keyboardKey6[" "];
    keyboardKey6.Digit0 = keyboardKey6["0"];
    keyboardKey6.Digit1 = keyboardKey6["1"];
    keyboardKey6.Digit2 = keyboardKey6["2"];
    keyboardKey6.Digit3 = keyboardKey6["3"];
    keyboardKey6.Digit4 = keyboardKey6["4"];
    keyboardKey6.Digit5 = keyboardKey6["5"];
    keyboardKey6.Digit6 = keyboardKey6["6"];
    keyboardKey6.Digit7 = keyboardKey6["7"];
    keyboardKey6.Digit8 = keyboardKey6["8"];
    keyboardKey6.Digit9 = keyboardKey6["9"];
    keyboardKey6.Tilde = keyboardKey6["~"];
    keyboardKey6.GraveAccent = keyboardKey6["`"];
    keyboardKey6.ExclamationPoint = keyboardKey6["!"];
    keyboardKey6.AtSign = keyboardKey6["@"];
    keyboardKey6.PoundSign = keyboardKey6["#"];
    keyboardKey6.PercentSign = keyboardKey6["%"];
    keyboardKey6.Caret = keyboardKey6["^"];
    keyboardKey6.Ampersand = keyboardKey6["&"];
    keyboardKey6.PlusSign = keyboardKey6["+"];
    keyboardKey6.MinusSign = keyboardKey6["-"];
    keyboardKey6.EqualsSign = keyboardKey6["="];
    keyboardKey6.DivisionSign = keyboardKey6["/"];
    keyboardKey6.MultiplicationSign = keyboardKey6["*"];
    keyboardKey6.Comma = keyboardKey6[","];
    keyboardKey6.Decimal = keyboardKey6["."];
    keyboardKey6.Colon = keyboardKey6[":"];
    keyboardKey6.Semicolon = keyboardKey6[";"];
    keyboardKey6.Pipe = keyboardKey6["|"];
    keyboardKey6.BackSlash = keyboardKey6["\\"];
    keyboardKey6.QuestionMark = keyboardKey6["?"];
    keyboardKey6.SingleQuote = keyboardKey6["'"];
    keyboardKey6.DoubleQuote = keyboardKey6['"'];
    keyboardKey6.LeftCurlyBrace = keyboardKey6["{"];
    keyboardKey6.RightCurlyBrace = keyboardKey6["}"];
    keyboardKey6.LeftParenthesis = keyboardKey6["("];
    keyboardKey6.RightParenthesis = keyboardKey6[")"];
    keyboardKey6.LeftAngleBracket = keyboardKey6["<"];
    keyboardKey6.RightAngleBracket = keyboardKey6[">"];
    keyboardKey6.LeftSquareBracket = keyboardKey6["["];
    keyboardKey6.RightSquareBracket = keyboardKey6["]"];
    module2.exports = keyboardKey6;
  }
});

// node_modules/semantic-ui-react/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/semantic-ui-react/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf3(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf3(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf3(object) === REACT_PROVIDER_TYPE;
        }
        function isElement3(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf3(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf3(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf3(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf3(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf3(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf3(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf3(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf3(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf3(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element2;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal2;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.SuspenseList = SuspenseList;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement3;
        exports2.isForwardRef = isForwardRef2;
        exports2.isFragment = isFragment2;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isSuspenseList = isSuspenseList;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/semantic-ui-react/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/semantic-ui-react/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development2();
    }
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports2, module2) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys2;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
        keys2 = Object.keys(a);
        length = keys2.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length; i-- !== 0; ) {
          if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys2[i]], b[keys2[i]])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module2.exports = function isEqual3(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports2, module2) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module2.exports = warning2;
  }
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (e.includes(n)) continue;
    t[n] = r2[n];
  }
  return t;
}

// node_modules/@fluentui/react-component-ref/dist/es/Ref.js
var React3 = __toESM(require_react());
var ReactIs = __toESM(require_react_is());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
var React = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@fluentui/react-component-ref/dist/es/utils.js
var handleRef = function handleRef2(ref2, node) {
  if (true) {
    if (typeof ref2 === "string") {
      throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
    }
  }
  if (typeof ref2 === "function") {
    ref2(node);
    return;
  }
  if (ref2 !== null && typeof ref2 === "object") {
    ref2.current = node;
  }
};
var isRefObject = function isRefObject2(ref2) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    ref2 !== null && typeof ref2 === "object" && ref2.hasOwnProperty("current")
  );
};

// node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
function isFiberRef(node) {
  if (node === null) {
    return false;
  }
  if (node instanceof Element || node instanceof Text) {
    return false;
  }
  return !!(node.type && node.tag);
}
var RefFindNode = function(_React$Component) {
  _inheritsLoose(RefFindNode2, _React$Component);
  function RefFindNode2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prevNode = void 0;
    return _this;
  }
  var _proto = RefFindNode2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var currentNode = ReactDOM.findDOMNode(this);
    if (true) {
      if (isFiberRef(currentNode)) {
        currentNode = null;
      }
    }
    this.prevNode = currentNode;
    handleRef(this.props.innerRef, currentNode);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var currentNode = ReactDOM.findDOMNode(this);
    if (true) {
      if (isFiberRef(currentNode)) {
        currentNode = null;
      }
    }
    if (this.prevNode !== currentNode) {
      this.prevNode = currentNode;
      handleRef(this.props.innerRef, currentNode);
    }
    if (prevProps.innerRef !== this.props.innerRef) {
      handleRef(this.props.innerRef, currentNode);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    handleRef(this.props.innerRef, null);
    delete this.prevNode;
  };
  _proto.render = function render() {
    var children = this.props.children;
    return children;
  };
  return RefFindNode2;
}(React.Component);

// node_modules/@fluentui/react-component-ref/dist/es/RefForward.js
var React2 = __toESM(require_react());
var RefForward = function(_React$Component) {
  _inheritsLoose(RefForward2, _React$Component);
  function RefForward2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.currentNode = void 0;
    _this.handleRefOverride = function(node) {
      var _this$props = _this.props, children = _this$props.children, innerRef = _this$props.innerRef;
      handleRef(children.ref, node);
      handleRef(innerRef, node);
      _this.currentNode = node;
    };
    return _this;
  }
  var _proto = RefForward2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.innerRef !== this.props.innerRef) {
      handleRef(this.props.innerRef, this.currentNode);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    delete this.currentNode;
  };
  _proto.render = function render() {
    var children = this.props.children;
    return React2.cloneElement(children, {
      ref: this.handleRefOverride
    });
  };
  return RefForward2;
}(React2.Component);

// node_modules/@fluentui/react-component-ref/dist/es/Ref.js
var _excluded = ["children", "innerRef"];
var Ref = function Ref2(props) {
  var children = props.children, innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, _excluded);
  var child = React3.Children.only(children);
  var ElementType = ReactIs.isForwardRef(child) ? RefForward : RefFindNode;
  var childWithProps = child && rest && Object.keys(rest).length > 0 ? React3.cloneElement(child, rest) : child;
  return React3.createElement(ElementType, {
    innerRef
  }, childWithProps);
};

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/lodash-es/_baseHas.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto2 = Object.prototype;
var hasOwnProperty2 = objectProto2.hasOwnProperty;
var nativeObjectToString = objectProto2.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto3 = Object.prototype;
var nativeObjectToString2 = objectProto3.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto4 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto7 = Object.prototype;
var hasOwnProperty6 = objectProto7.hasOwnProperty;
var propertyIsEnumerable = objectProto7.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/_baseInvoke.js
function baseInvoke(object, path, args) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  var func = object == null ? object : object[toKey_default(last_default(path))];
  return func == null ? void 0 : apply_default(func, object, args);
}
var baseInvoke_default = baseInvoke;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start2) {
  return setToString_default(overRest_default(func, start2, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/invoke.js
var invoke = baseRest_default(baseInvoke_default);
var invoke_default = invoke;

// node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js
var import_prop_types24 = __toESM(require_prop_types());
var import_react28 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/lodash-es/_baseClamp.js
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var baseClamp_default = baseClamp;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/toFinite.js
var INFINITY3 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY3 || value === -INFINITY3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// node_modules/lodash-es/startsWith.js
function startsWith(string, target, position) {
  string = toString_default(string);
  position = position == null ? 0 : baseClamp_default(toInteger_default(position), 0, string.length);
  target = baseToString_default(target);
  return string.slice(position, position + target.length) == target;
}
var startsWith_default = startsWith;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto8 = Object.prototype;
var hasOwnProperty7 = objectProto8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_isPrototype.js
var objectProto9 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto9;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/lodash-es/_baseFilter.js
function baseFilter(collection, predicate) {
  var result = [];
  baseEach_default(collection, function(value, index, collection2) {
    if (predicate(value, index, collection2)) {
      result.push(value);
    }
  });
  return result;
}
var baseFilter_default = baseFilter;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values2[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var mapTag2 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag2 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag2 = "[object DataView]";
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag2:
    case dateTag2:
    case numberTag2:
      return eq_default(+object, +other);
    case errorTag2:
      return object.name == other.name && object.message == other.message;
    case regexpTag2:
    case stringTag2:
      return object == other + "";
    case mapTag2:
      var convert = mapToArray_default;
    case setTag2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values2) {
  var index = -1, length = values2.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values2[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto11 = Object.prototype;
var propertyIsEnumerable2 = objectProto11.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto12 = Object.prototype;
var hasOwnProperty9 = objectProto12.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty9.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/lodash-es/_getTag.js
var mapTag3 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag3 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag3 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag3;
        case mapCtorString:
          return mapTag3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag3;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto13 = Object.prototype;
var hasOwnProperty10 = objectProto13.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty10.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty10.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/filter.js
function filter(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, baseIteratee_default(predicate, 3));
}
var filter_default = filter;

// node_modules/lodash-es/isEmpty.js
var mapTag4 = "[object Map]";
var setTag4 = "[object Set]";
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag4 || tag == setTag4) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty11.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/_baseIntersection.js
var nativeMin = Math.min;
function baseIntersection(arrays, iteratee, comparator) {
  var includes2 = comparator ? arrayIncludesWith_default : arrayIncludes_default, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap_default(array, baseUnary_default(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache_default(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index = -1, seen = caches[0];
  outer:
    while (++index < length && result.length < maxLength) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas_default(seen, computed) : includes2(result, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas_default(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseIntersection_default = baseIntersection;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/_castArrayLikeObject.js
function castArrayLikeObject(value) {
  return isArrayLikeObject_default(value) ? value : [];
}
var castArrayLikeObject_default = castArrayLikeObject;

// node_modules/lodash-es/intersection.js
var intersection = baseRest_default(function(arrays) {
  var mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped) : [];
});
var intersection_default = intersection;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// node_modules/lodash-es/forEach.js
function forEach(collection, iteratee) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee));
}
var forEach_default = forEach;

// node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js
var import_react = __toESM(require_react());
var getDefaultPropName = function getDefaultPropName2(prop) {
  return "default" + (prop[0].toUpperCase() + prop.slice(1));
};
var getAutoControlledStateValue = function getAutoControlledStateValue2(propName, props, state, includeDefaults) {
  if (includeDefaults === void 0) {
    includeDefaults = false;
  }
  var propValue = props[propName];
  if (propValue !== void 0) return propValue;
  if (includeDefaults) {
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== void 0) return defaultProp;
    if (state) {
      var initialState = state[propName];
      if (initialState !== void 0) return initialState;
    }
  }
  if (propName === "checked") return false;
  if (propName === "value") return props.multiple ? [] : "";
};
var ModernAutoControlledComponent = function(_React$Component) {
  _inheritsLoose(ModernAutoControlledComponent2, _React$Component);
  function ModernAutoControlledComponent2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    var _this$constructor = _this.constructor, autoControlledProps = _this$constructor.autoControlledProps, getAutoControlledStateFromProps = _this$constructor.getAutoControlledStateFromProps;
    var state = invoke_default(_assertThisInitialized(_this), "getInitialAutoControlledState", _this.props) || {};
    if (true) {
      var _this$constructor2 = _this.constructor, defaultProps = _this$constructor2.defaultProps, name = _this$constructor2.name, propTypes = _this$constructor2.propTypes, getDerivedStateFromProps = _this$constructor2.getDerivedStateFromProps;
      if (getDerivedStateFromProps !== ModernAutoControlledComponent2.getDerivedStateFromProps) {
        console.error("Auto controlled " + name + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps().");
      }
      forEach_default(autoControlledProps, function(prop) {
        var defaultProp = getDefaultPropName(prop);
        if (!has_default(propTypes, defaultProp)) {
          console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
        }
        if (!has_default(propTypes, prop)) {
          console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
        }
      });
      var illegalDefaults = intersection_default(autoControlledProps, keys_default(defaultProps));
      if (!isEmpty_default(illegalDefaults)) {
        console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + name + ' props: "' + illegalDefaults + '".'].join(" "));
      }
      var illegalAutoControlled = filter_default(autoControlledProps, function(prop) {
        return startsWith_default(prop, "default");
      });
      if (!isEmpty_default(illegalAutoControlled)) {
        console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(" "));
      }
    }
    var initialAutoControlledState = autoControlledProps.reduce(function(acc, prop) {
      acc[prop] = getAutoControlledStateValue(prop, _this.props, state, true);
      if (true) {
        var defaultPropName = getDefaultPropName(prop);
        var _name = _this.constructor.name;
        if (!isUndefined_default(_this.props[defaultPropName]) && !isUndefined_default(_this.props[prop])) {
          console.error(_name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + " or " + prop + ", but not both.");
        }
      }
      return acc;
    }, {});
    _this.state = _extends({}, state, initialAutoControlledState, {
      autoControlledProps,
      getAutoControlledStateFromProps
    });
    return _this;
  }
  ModernAutoControlledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var autoControlledProps = state.autoControlledProps, getAutoControlledStateFromProps = state.getAutoControlledStateFromProps;
    var newStateFromProps = autoControlledProps.reduce(function(acc, prop) {
      var isNextDefined = !isUndefined_default(props[prop]);
      if (isNextDefined) acc[prop] = props[prop];
      return acc;
    }, {});
    if (getAutoControlledStateFromProps) {
      var computedState = getAutoControlledStateFromProps(props, _extends({}, state, newStateFromProps), state);
      return _extends({}, newStateFromProps, computedState);
    }
    return newStateFromProps;
  };
  ModernAutoControlledComponent2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps() {
    return null;
  };
  return ModernAutoControlledComponent2;
}(import_react.default.Component);

// node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var childrenUtils_exports = {};
__export(childrenUtils_exports, {
  findByType: () => findByType,
  isNil: () => isNil,
  someByType: () => someByType
});

// node_modules/lodash-es/_createFind.js
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_default(collection)) {
      var iteratee = baseIteratee_default(predicate, 3);
      collection = keys_default(collection);
      predicate = function(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
  };
}
var createFind_default = createFind;

// node_modules/lodash-es/findIndex.js
var nativeMax2 = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax2(length + index, 0);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
}
var findIndex_default = findIndex;

// node_modules/lodash-es/find.js
var find = createFind_default(findIndex_default);
var find_default = find;

// node_modules/lodash-es/_baseSome.js
function baseSome(collection, predicate) {
  var result;
  baseEach_default(collection, function(value, index, collection2) {
    result = predicate(value, index, collection2);
    return !result;
  });
  return !!result;
}
var baseSome_default = baseSome;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/some.js
function some(collection, predicate, guard) {
  var func = isArray_default(collection) ? arraySome_default : baseSome_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var some_default = some;

// node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var import_react2 = __toESM(require_react());
var someByType = function someByType2(children, type) {
  return some_default(import_react2.Children.toArray(children), {
    type
  });
};
var findByType = function findByType2(children, type) {
  return find_default(import_react2.Children.toArray(children), {
    type
  });
};
var isNil = function isNil2(children) {
  return children === null || children === void 0 || Array.isArray(children) && children.length === 0;
};

// node_modules/semantic-ui-react/dist/es/lib/numberToWord.js
var numberToWordMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
function numberToWord(value) {
  var type = typeof value;
  if (type === "string" || type === "number") {
    return numberToWordMap[value] || value;
  }
  return "";
}

// node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var useKeyOnly = function useKeyOnly2(val, key) {
  return val && key;
};
var useValueAndKey = function useValueAndKey2(val, key) {
  return val && val !== true && val + " " + key;
};
var useKeyOrValueAndKey = function useKeyOrValueAndKey2(val, key) {
  return val && (val === true ? key : val + " " + key);
};
var useMultipleProp = function useMultipleProp2(val, key) {
  if (!val || val === true) return null;
  return val.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(prop) {
    return prop.replace("-", " ") + " " + key;
  }).join(" ");
};
var useTextAlignProp = function useTextAlignProp2(val) {
  return val === "justified" ? "justified" : useValueAndKey(val, "aligned");
};
var useVerticalAlignProp = function useVerticalAlignProp2(val) {
  return useValueAndKey(val, "aligned");
};
var useWidthProp = function useWidthProp2(val, widthClass, canEqual) {
  if (widthClass === void 0) {
    widthClass = "";
  }
  if (canEqual === void 0) {
    canEqual = false;
  }
  if (canEqual && val === "equal") {
    return "equal width";
  }
  var valType = typeof val;
  if ((valType === "string" || valType === "number") && widthClass) {
    return numberToWord(val) + " " + widthClass;
  }
  return numberToWord(val);
};

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var customPropTypes_exports = {};
__export(customPropTypes_exports, {
  collectionShorthand: () => collectionShorthand,
  contentShorthand: () => contentShorthand,
  demand: () => demand,
  deprecate: () => deprecate,
  disallow: () => disallow,
  domNode: () => domNode,
  every: () => every,
  givenProps: () => givenProps,
  itemShorthand: () => itemShorthand,
  multipleProp: () => multipleProp,
  ref: () => ref,
  refObject: () => refObject,
  suggest: () => suggest
});

// node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE2 = 200;
function baseDifference(array, values2, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values2.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values2 = arrayMap_default(values2, baseUnary_default(iteratee));
  }
  if (comparator) {
    includes2 = arrayIncludesWith_default;
    isCommon = false;
  } else if (values2.length >= LARGE_ARRAY_SIZE2) {
    includes2 = cacheHas_default;
    isCommon = false;
    values2 = new SetCache_default(values2);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values2[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes2(values2, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var baseDifference_default = baseDifference;

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/difference.js
var difference = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference;

// node_modules/lodash-es/_castSlice.js
function castSlice(array, start2, end2) {
  var length = array.length;
  end2 = end2 === void 0 ? length : end2;
  return !start2 && end2 >= length ? array : baseSlice_default(array, start2, end2);
}
var castSlice_default = castSlice;

// node_modules/lodash-es/_charsEndIndex.js
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;
  while (index-- && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsEndIndex_default = charsEndIndex;

// node_modules/lodash-es/_charsStartIndex.js
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1, length = strSymbols.length;
  while (++index < length && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsStartIndex_default = charsStartIndex;

// node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string) {
  return string.split("");
}
var asciiToArray_default = asciiToArray;

// node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
var hasUnicode_default = hasUnicode;

// node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// node_modules/lodash-es/_stringToArray.js
function stringToArray(string) {
  return hasUnicode_default(string) ? unicodeToArray_default(string) : asciiToArray_default(string);
}
var stringToArray_default = stringToArray;

// node_modules/lodash-es/trim.js
function trim(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return baseTrim_default(string);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), chrSymbols = stringToArray_default(chars), start2 = charsStartIndex_default(strSymbols, chrSymbols), end2 = charsEndIndex_default(strSymbols, chrSymbols) + 1;
  return castSlice_default(strSymbols, start2, end2).join("");
}
var trim_default = trim;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/_assignValue.js
var objectProto15 = Object.prototype;
var hasOwnProperty12 = objectProto15.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty12.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result, castPath_default(path, object), value);
    }
  }
  return result;
}
var basePickBy_default = basePickBy;

// node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag4 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto16 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty13 = objectProto16.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag4) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty13.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/isNil.js
function isNil3(value) {
  return value == null;
}
var isNil_default = isNil3;

// node_modules/lodash-es/_baseExtremum.js
function baseExtremum(array, iteratee, comparator) {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
      var computed = current, result = value;
    }
  }
  return result;
}
var baseExtremum_default = baseExtremum;

// node_modules/lodash-es/_baseLt.js
function baseLt(value, other) {
  return value < other;
}
var baseLt_default = baseLt;

// node_modules/lodash-es/min.js
function min(array) {
  return array && array.length ? baseExtremum_default(array, identity_default, baseLt_default) : void 0;
}
var min_default = min;

// node_modules/lodash-es/_baseSum.js
function baseSum(array, iteratee) {
  var result, index = -1, length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== void 0) {
      result = result === void 0 ? current : result + current;
    }
  }
  return result;
}
var baseSum_default = baseSum;

// node_modules/lodash-es/sum.js
function sum(array) {
  return array && array.length ? baseSum_default(array, identity_default) : 0;
}
var sum_default = sum;

// node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var baseMap_default = baseMap;

// node_modules/lodash-es/map.js
function map(collection, iteratee) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee, 3));
}
var map_default = map;

// node_modules/lodash-es/_baseSortBy.js
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
var baseSortBy_default = baseSortBy;

// node_modules/lodash-es/_compareAscending.js
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol_default(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol_default(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
var compareAscending_default = compareAscending;

// node_modules/lodash-es/_compareMultiple.js
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending_default(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order2 = orders[index];
      return result * (order2 == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
var compareMultiple_default = compareMultiple;

// node_modules/lodash-es/_baseOrderBy.js
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap_default(iteratees, function(iteratee) {
      if (isArray_default(iteratee)) {
        return function(value) {
          return baseGet_default(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity_default];
  }
  var index = -1;
  iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
  var result = baseMap_default(collection, function(value, key, collection2) {
    var criteria = arrayMap_default(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy_default(result, function(object, other) {
    return compareMultiple_default(object, other, orders);
  });
}
var baseOrderBy_default = baseOrderBy;

// node_modules/lodash-es/sortBy.js
var sortBy = baseRest_default(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall_default(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall_default(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy_default(collection, baseFlatten_default(iteratees, 1), []);
});
var sortBy_default = sortBy;

// node_modules/lodash-es/take.js
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger_default(n);
  return baseSlice_default(array, 0, n < 0 ? 0 : n);
}
var take_default = take;

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var import_prop_types = __toESM(require_prop_types());

// node_modules/semantic-ui-react/dist/es/lib/leven.js
var leven = function leven2() {
  return 0;
};
if (true) {
  arr = [];
  charCodeCache = [];
  leven = function leven3(a, b) {
    if (a === b) return 0;
    var aLen = a.length;
    var bLen = b.length;
    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;
    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;
    while (i < aLen) {
      charCodeCache[i] = a.charCodeAt(i);
      arr[i] = ++i;
    }
    while (j < bLen) {
      bCharCode = b.charCodeAt(j);
      tmp = j++;
      ret = j;
      for (i = 0; i < aLen; i++) {
        tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
        tmp = arr[i];
        ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
      }
    }
    return ret;
  };
}
var arr;
var charCodeCache;
var leven_default = leven;

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var typeOf = function typeOf2() {
  var _Object$prototype$toS;
  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};
var domNode = function domNode2(props, propName) {
  if (props[propName] === void 0) return;
  if (typeof Element === "undefined") return;
  if (props[propName] instanceof Element) return;
  return new Error('Invalid prop "' + propName + '" supplied, expected a DOM node.');
};
var suggest = function suggest2(suggestions) {
  if (!Array.isArray(suggestions)) {
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  }
  var findBestSuggestions = memoize_default(function(str) {
    var propValueWords = str.split(" ");
    return take_default(sortBy_default(map_default(suggestions, function(suggestion) {
      var suggestionWords = suggestion.split(" ");
      var propValueScore = sum_default(map_default(map_default(propValueWords, function(x) {
        return map_default(suggestionWords, function(y) {
          return leven_default(x, y);
        });
      }), min_default));
      var suggestionScore = sum_default(map_default(map_default(suggestionWords, function(x) {
        return map_default(propValueWords, function(y) {
          return leven_default(x, y);
        });
      }), min_default));
      return {
        suggestion,
        score: propValueScore + suggestionScore
      };
    }), ["score", "suggestion"]), 3);
  });
  var suggestionsLookup = suggestions.reduce(function(acc, key) {
    acc[key.split(" ").sort().join(" ")] = true;
    return acc;
  }, {});
  return function(props, propName, componentName) {
    var propValue = props[propName];
    if (!propValue || suggestionsLookup[propValue]) return;
    var propValueSorted = propValue.split(" ").sort().join(" ");
    if (suggestionsLookup[propValueSorted]) return;
    var bestMatches = findBestSuggestions(propValue);
    if (bestMatches.some(function(x) {
      return x.score === 0;
    })) return;
    return new Error(["Invalid prop `" + propName + "` of value `" + propValue + "` supplied to `" + componentName + "`.", "\n\nInstead of `" + propValue + "`, did you mean:", bestMatches.map(function(x) {
      return "\n  - " + x.suggestion;
    }).join(""), "\n"].join(""));
  };
};
var disallow = function disallow2(disallowedProps) {
  return function(props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + propName + "` prop in `" + componentName + "`."].join(""));
    }
    if (isNil_default(props[propName]) || props[propName] === false) {
      return;
    }
    var disallowed = disallowedProps.reduce(function(acc, disallowedProp) {
      if (!isNil_default(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(acc, [disallowedProp]);
      }
      return acc;
    }, []);
    if (disallowed.length > 0) {
      return new Error(["Prop `" + propName + "` in `" + componentName + "` conflicts with props: `" + disallowed.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
};
var every = function every2(validators) {
  return function(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }
    if (!Array.isArray(validators)) {
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var errors = [];
    validators.forEach(function(validator) {
      if (typeof validator !== "function") {
        throw new Error('every() argument "validators" should contain functions, found: ' + typeOf(validator) + ".");
      }
      var error = validator.apply(void 0, [props, propName, componentName].concat(rest));
      if (error) {
        errors.push(error);
      }
    });
    return errors[0];
  };
};
var givenProps = function givenProps2(propsShape, validator) {
  return function(props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }
    if (!isPlainObject_default(propsShape)) {
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    if (typeof validator !== "function") {
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var shouldValidate = keys_default(propsShape).every(function(key) {
      var val = propsShape[key];
      return typeof val === "function" ? !val.apply(void 0, [props, key, componentName].concat(rest)) : val === props[propName];
    });
    if (!shouldValidate) return;
    var error = validator.apply(void 0, [props, propName, componentName].concat(rest));
    if (error) {
      var prettyProps = "{ " + keys_default(pick_default(keys_default(propsShape), props)).map(function(key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === "string") renderedValue = '"' + val + '"';
        else if (Array.isArray(val)) renderedValue = "[" + val.join(", ") + "]";
        else if (isObject_default(val)) renderedValue = "{...}";
        return key + ": " + renderedValue;
      }).join(", ") + " }";
      error.message = "Given props " + prettyProps + ": " + error.message;
      return error;
    }
  };
};
var demand = function demand2(requiredProps) {
  return function(props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(["Invalid `requiredProps` argument supplied to require, expected an instance of array.", " See `" + propName + "` prop in `" + componentName + "`."].join(""));
    }
    if (props[propName] === void 0) return;
    var missingRequired = requiredProps.filter(function(requiredProp) {
      return props[requiredProp] === void 0;
    });
    if (missingRequired.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` requires props: `" + missingRequired.join("`, `") + "`.");
    }
  };
};
var multipleProp = function multipleProp2(possible) {
  return function(props, propName, componentName) {
    if (!Array.isArray(possible)) {
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var propValue = props[propName];
    if (isNil_default(propValue) || propValue === false) return;
    var values2 = propValue.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(val) {
      return trim_default(val).replace("-", " ");
    });
    var invalid = difference_default(values2, possible);
    if (invalid.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` has invalid values: `" + invalid.join("`, `") + "`.");
    }
  };
};
var contentShorthand = function contentShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.node]).apply(void 0, arguments);
};
var itemShorthand = function itemShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node, import_prop_types.default.object, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.object]))])]).apply(void 0, arguments);
};
var collectionShorthand = function collectionShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.arrayOf(itemShorthand)]).apply(void 0, arguments);
};
var deprecate = function deprecate2(help, validator) {
  return function(props, propName, componentName) {
    if (typeof help !== "string") {
      throw new Error(["Invalid `help` argument supplied to deprecate, expected a string.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    if (props[propName] === void 0) return;
    var error = new Error("The `" + propName + "` prop in `" + componentName + "` is deprecated.");
    if (help) error.message += " " + help;
    if (validator) {
      if (typeof validator === "function") {
        for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }
        var validationError = validator.apply(void 0, [props, propName, componentName].concat(args));
        if (validationError) {
          error.message = error.message + " " + validationError.message;
        }
      } else {
        throw new Error(["Invalid argument supplied to deprecate, expected a function.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
      }
    }
    return error;
  };
};
var refObject = import_prop_types.default.shape({
  current: import_prop_types.default.object
});
var ref = import_prop_types.default.oneOfType([import_prop_types.default.func, refObject]);

// node_modules/semantic-ui-react/dist/es/lib/eventStack/index.js
var import_event_stack = __toESM(require_lib());
var eventStack_default = import_event_stack.instance;

// node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// node_modules/lodash-es/_createSet.js
var INFINITY4 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY4) ? noop_default : function(values2) {
  return new Set_default(values2);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE3 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE3) {
    var set2 = iteratee ? null : createSet_default(array);
    if (set2) {
      return setToArray_default(set2);
    }
    isCommon = false;
    includes2 = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseUniq_default = baseUniq;

// node_modules/lodash-es/uniq.js
function uniq(array) {
  return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;

// node_modules/lodash-es/isNumber.js
var numberTag3 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag3;
}
var isNumber_default = isNumber;

// node_modules/lodash-es/isString.js
var stringTag3 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag3;
}
var isString_default = isString;

// node_modules/lodash-es/isBoolean.js
var boolTag3 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag3;
}
var isBoolean_default = isBoolean;

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/semantic-ui-react/dist/es/lib/factories.js
var React5 = __toESM(require_react());
var DEPRECATED_CALLS = {};
function createShorthand(Component34, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof Component34 !== "function" && typeof Component34 !== "string") {
    throw new Error("createShorthand() Component must be a string or function.");
  }
  if (isNil_default(val) || isBoolean_default(val)) {
    return null;
  }
  var valIsString = isString_default(val);
  var valIsNumber = isNumber_default(val);
  var valIsFunction = isFunction_default(val);
  var valIsReactElement = React5.isValidElement(val);
  var valIsPropsObject = isPlainObject_default(val);
  var valIsPrimitiveValue = valIsString || valIsNumber || isArray_default(val);
  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (true) {
      console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof val + "."].join(""));
    }
    return null;
  }
  var _options = options, _options$defaultProps = _options.defaultProps, defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps;
  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val);
  var _options2 = options, _options2$overridePro = _options2.overrideProps, overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
  overrideProps = isFunction_default(overrideProps) ? overrideProps(_extends({}, defaultProps, usersProps)) : overrideProps;
  var props = _extends({}, defaultProps, usersProps, overrideProps);
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = clsx_m_default(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = uniq_default(mergedClassesNames.split(" ")).join(" ");
  }
  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = _extends({}, defaultProps.style, usersProps.style, overrideProps.style);
  }
  if (isNil_default(props.key)) {
    var childKey = props.childKey;
    var _options3 = options, _options3$autoGenerat = _options3.autoGenerateKey, autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;
    if (!isNil_default(childKey)) {
      props.key = typeof childKey === "function" ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      props.key = val;
    }
  }
  if (valIsReactElement) {
    return React5.cloneElement(val, props);
  }
  if (typeof props.children === "function") {
    return props.children(Component34, _extends({}, props, {
      children: void 0
    }));
  }
  if (valIsPrimitiveValue || valIsPropsObject) {
    return React5.createElement(Component34, props);
  }
  if (valIsFunction) {
    if (true) {
      if (!DEPRECATED_CALLS[Component34]) {
        DEPRECATED_CALLS[Component34] = true;
        console.warn('Warning: There is a deprecated shorthand function usage for "' + Component34 + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029');
      }
    }
    return val(Component34, props, props.children);
  }
}
function createShorthandFactory(Component34, mapValueToProps) {
  if (typeof Component34 !== "function" && typeof Component34 !== "string") {
    throw new Error("createShorthandFactory() Component must be a string or function.");
  }
  return function(val, options) {
    return createShorthand(Component34, mapValueToProps, val, options);
  };
}
var createHTMLDivision = createShorthandFactory("div", function(val) {
  return {
    children: val
  };
});
var createHTMLIframe = createShorthandFactory("iframe", function(src) {
  return {
    src
  };
});
var createHTMLImage = createShorthandFactory("img", function(val) {
  return {
    src: val
  };
});
var createHTMLInput = createShorthandFactory("input", function(val) {
  return {
    type: val
  };
});
var createHTMLLabel = createShorthandFactory("label", function(val) {
  return {
    children: val
  };
});
var createHTMLParagraph = createShorthandFactory("p", function(val) {
  return {
    children: val
  };
});

// node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = function getUnhandledProps2(Component34, props) {
  var _Component$handledPro = Component34.handledProps, handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
  return Object.keys(props).reduce(function(acc, prop) {
    if (prop === "childKey") return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};
var getUnhandledProps_default = getUnhandledProps;

// node_modules/semantic-ui-react/dist/es/lib/getElementType.js
function getElementType(Component34, props, getDefault) {
  var _Component$defaultPro = Component34.defaultProps, defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro;
  if (props.as && props.as !== defaultProps.as) return props.as;
  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  }
  if (props.href) return "a";
  return defaultProps.as || "div";
}
var getElementType_default = getElementType;

// node_modules/lodash-es/_baseValues.js
function baseValues(object, props) {
  return arrayMap_default(props, function(key) {
    return object[key];
  });
}
var baseValues_default = baseValues;

// node_modules/lodash-es/values.js
function values(object) {
  return object == null ? [] : baseValues_default(object, keys_default(object));
}
var values_default = values;

// node_modules/lodash-es/includes.js
var nativeMax3 = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_default(collection) ? collection : values_default(collection);
  fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax3(length + fromIndex, 0);
  }
  return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
}
var includes_default = includes;

// node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js
var htmlInputAttrs = [
  // REACT
  "selected",
  "defaultValue",
  "defaultChecked",
  // LIMITED HTML PROPS
  "accept",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "checked",
  "disabled",
  "enterKeyHint",
  "form",
  "id",
  "inputMode",
  "lang",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "step",
  "title",
  "type",
  "value"
];
var htmlInputEvents = [
  // EVENTS
  // keyboard
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  // focus
  "onFocus",
  "onBlur",
  // form
  "onChange",
  "onInput",
  // mouse
  "onClick",
  "onContextMenu",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  // selection
  "onSelect",
  // touch
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart"
];
var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
var htmlImageProps = ["alt", "height", "src", "srcSet", "width", "loading"];
var partitionHTMLProps = function partitionHTMLProps2(props, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$htmlProps = _options.htmlProps, htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps, _options$includeAria = _options.includeAria, includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
  var inputProps = {};
  var rest = {};
  forEach_default(props, function(val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === "role");
    var target = includes_default(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });
  return [inputProps, rest];
};

// node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var hasDocument = typeof document === "object" && document !== null;
var hasWindow = typeof window === "object" && window !== null && window.self === window;
var isBrowser = function isBrowser2() {
  return !isNil_default(isBrowser2.override) ? isBrowser2.override : hasDocument && hasWindow;
};
var isBrowser_default = isBrowser;

// node_modules/lodash-es/_baseInRange.js
var nativeMax4 = Math.max;
var nativeMin2 = Math.min;
function baseInRange(number, start2, end2) {
  return number >= nativeMin2(start2, end2) && number < nativeMax4(start2, end2);
}
var baseInRange_default = baseInRange;

// node_modules/lodash-es/inRange.js
function inRange(number, start2, end2) {
  start2 = toFinite_default(start2);
  if (end2 === void 0) {
    end2 = start2;
    start2 = 0;
  } else {
    end2 = toFinite_default(end2);
  }
  number = toNumber_default(number);
  return baseInRange_default(number, start2, end2);
}
var inRange_default = inRange;

// node_modules/lodash-es/head.js
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_default = head;

// node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = function doesNodeContainClick2(node, e) {
  if (some_default([e, node], isNil_default)) return false;
  if (e.target) {
    invoke_default(e.target, "setAttribute", "data-suir-click-target", true);
    if (document.querySelector("[data-suir-click-target=true]")) {
      invoke_default(e.target, "removeAttribute", "data-suir-click-target");
      return node.contains(e.target);
    }
  }
  var clientX = e.clientX, clientY = e.clientY;
  if (some_default([clientX, clientY], isNil_default)) return false;
  var clientRects = node.getClientRects();
  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false;
  var _first2 = head_default(clientRects), top2 = _first2.top, bottom2 = _first2.bottom, left2 = _first2.left, right2 = _first2.right;
  if (some_default([top2, bottom2, left2, right2], isNil_default)) return false;
  return inRange_default(clientY, top2, bottom2 + 1e-3) && inRange_default(clientX, left2, right2 + 1e-3);
};
var doesNodeContainClick_default = doesNodeContainClick;

// node_modules/semantic-ui-react/dist/es/lib/createPaginationItems/itemFactories.js
var createEllipsisItem = function createEllipsisItem2(pageNumber) {
  return {
    active: false,
    type: "ellipsisItem",
    value: pageNumber
  };
};
var createFirstPage = function createFirstPage2() {
  return {
    active: false,
    type: "firstItem",
    value: 1
  };
};
var createPrevItem = function createPrevItem2(activePage) {
  return {
    active: false,
    type: "prevItem",
    value: Math.max(1, activePage - 1)
  };
};
var createPageFactory = function createPageFactory2(activePage) {
  return function(pageNumber) {
    return {
      active: activePage === pageNumber,
      type: "pageItem",
      value: pageNumber
    };
  };
};
var createNextItem = function createNextItem2(activePage, totalPages) {
  return {
    active: false,
    type: "nextItem",
    value: Math.min(activePage + 1, totalPages)
  };
};
var createLastItem = function createLastItem2(totalPages) {
  return {
    active: false,
    type: "lastItem",
    value: totalPages
  };
};

// node_modules/lodash-es/_baseRange.js
var nativeCeil = Math.ceil;
var nativeMax5 = Math.max;
function baseRange(start2, end2, step, fromRight) {
  var index = -1, length = nativeMax5(nativeCeil((end2 - start2) / (step || 1)), 0), result = Array(length);
  while (length--) {
    result[fromRight ? length : ++index] = start2;
    start2 += step;
  }
  return result;
}
var baseRange_default = baseRange;

// node_modules/lodash-es/_createRange.js
function createRange(fromRight) {
  return function(start2, end2, step) {
    if (step && typeof step != "number" && isIterateeCall_default(start2, end2, step)) {
      end2 = step = void 0;
    }
    start2 = toFinite_default(start2);
    if (end2 === void 0) {
      end2 = start2;
      start2 = 0;
    } else {
      end2 = toFinite_default(end2);
    }
    step = step === void 0 ? start2 < end2 ? 1 : -1 : toFinite_default(step);
    return baseRange_default(start2, end2, step, fromRight);
  };
}
var createRange_default = createRange;

// node_modules/lodash-es/range.js
var range = createRange_default();
var range_default = range;

// node_modules/semantic-ui-react/dist/es/lib/createPaginationItems/suffixFactories.js
var createInnerPrefix = function createInnerPrefix2(firstGroupEnd, innerGroupStart, pageFactory) {
  var prefixPage = innerGroupStart - 1;
  var showEllipsis = prefixPage !== firstGroupEnd + 1;
  var prefixFactory = showEllipsis ? createEllipsisItem : pageFactory;
  return prefixFactory(prefixPage);
};
var createInnerSuffix = function createInnerSuffix2(innerGroupEnd, lastGroupStart, pageFactory) {
  var suffixPage = innerGroupEnd + 1;
  var showEllipsis = suffixPage !== lastGroupStart - 1;
  var suffixFactory = showEllipsis ? createEllipsisItem : pageFactory;
  return suffixFactory(suffixPage);
};

// node_modules/semantic-ui-react/dist/es/lib/createPaginationItems/rangeFactories.js
var createSimpleRange = function createSimpleRange2(start2, end2, pageFactory) {
  return map_default(range_default(start2, end2 + 1), pageFactory);
};
var createComplexRange = function createComplexRange2(options, pageFactory) {
  var activePage = options.activePage, boundaryRange = options.boundaryRange, hideEllipsis = options.hideEllipsis, siblingRange = options.siblingRange, totalPages = options.totalPages;
  var ellipsisSize = hideEllipsis ? 0 : 1;
  var firstGroupEnd = boundaryRange;
  var firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);
  var lastGroupStart = totalPages + 1 - boundaryRange;
  var lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);
  var innerGroupStart = Math.min(Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1), lastGroupStart - ellipsisSize - 2 * siblingRange - 1);
  var innerGroupEnd = innerGroupStart + 2 * siblingRange;
  var innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory);
  return [].concat(firstGroup, [!hideEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory)], innerGroup, [!hideEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory)], lastGroup).filter(Boolean);
};

// node_modules/semantic-ui-react/dist/es/lib/createPaginationItems/paginationUtils.js
var isSimplePagination = function isSimplePagination2(_ref) {
  var boundaryRange = _ref.boundaryRange, hideEllipsis = _ref.hideEllipsis, siblingRange = _ref.siblingRange, totalPages = _ref.totalPages;
  var boundaryRangeSize = 2 * boundaryRange;
  var ellipsisSize = hideEllipsis ? 0 : 2;
  var siblingRangeSize = 2 * siblingRange;
  return 1 + ellipsisSize + siblingRangeSize + boundaryRangeSize >= totalPages;
};
var typifyOptions = function typifyOptions2(_ref2) {
  var activePage = _ref2.activePage, boundaryRange = _ref2.boundaryRange, hideEllipsis = _ref2.hideEllipsis, siblingRange = _ref2.siblingRange, totalPages = _ref2.totalPages;
  return {
    activePage: +activePage,
    boundaryRange: +boundaryRange,
    hideEllipsis: !!hideEllipsis,
    siblingRange: +siblingRange,
    totalPages: +totalPages
  };
};

// node_modules/semantic-ui-react/dist/es/lib/createPaginationItems/createPaginationItems.js
var createPaginationItems = function createPaginationItems2(rawOptions) {
  var options = typifyOptions(rawOptions);
  var activePage = options.activePage, totalPages = options.totalPages;
  var pageFactory = createPageFactory(activePage);
  var innerRange = isSimplePagination(options) ? createSimpleRange(1, totalPages, pageFactory) : createComplexRange(options, pageFactory);
  return [createFirstPage(), createPrevItem(activePage)].concat(innerRange, [createNextItem(activePage, totalPages), createLastItem(totalPages)]);
};
var createPaginationItems_default = createPaginationItems;

// node_modules/semantic-ui-react/dist/es/lib/SUI.js
var SUI_exports = {};
__export(SUI_exports, {
  ACCESSIBILITY: () => ACCESSIBILITY,
  ALL_ICONS_IN_ALL_CONTEXTS: () => ALL_ICONS_IN_ALL_CONTEXTS,
  ARROWS: () => ARROWS,
  AUDIO_VIDEO: () => AUDIO_VIDEO,
  BRANDS: () => BRANDS,
  BUSINESS: () => BUSINESS,
  CHESS: () => CHESS,
  CODE: () => CODE,
  COLORS: () => COLORS,
  COMMUNICATION: () => COMMUNICATION,
  COMPONENT_CONTEXT_SPECIFIC_ICONS: () => COMPONENT_CONTEXT_SPECIFIC_ICONS,
  COMPUTERS: () => COMPUTERS,
  CURRENCY: () => CURRENCY,
  DATE_TIME: () => DATE_TIME,
  DESIGN: () => DESIGN,
  DIRECTIONAL_TRANSITIONS: () => DIRECTIONAL_TRANSITIONS,
  EDITORS: () => EDITORS,
  FILES: () => FILES,
  FLOATS: () => FLOATS,
  GENDERS: () => GENDERS,
  HANDS_GESTURES: () => HANDS_GESTURES,
  HEALTH: () => HEALTH,
  ICONS: () => ICONS,
  ICONS_AND_ALIASES: () => ICONS_AND_ALIASES,
  ICON_ALIASES: () => ICON_ALIASES,
  IMAGES: () => IMAGES,
  INTERFACES: () => INTERFACES,
  LOGISTICS: () => LOGISTICS,
  MAPS: () => MAPS,
  MEDICAL: () => MEDICAL,
  OBJECTS: () => OBJECTS,
  PAYMENTS_SHOPPING: () => PAYMENTS_SHOPPING,
  SHAPES: () => SHAPES,
  SIZES: () => SIZES,
  SPINNERS: () => SPINNERS,
  SPORTS: () => SPORTS,
  STATIC_TRANSITIONS: () => STATIC_TRANSITIONS,
  STATUS: () => STATUS,
  TEXT_ALIGNMENTS: () => TEXT_ALIGNMENTS,
  TRANSITIONS: () => TRANSITIONS,
  USERS_PEOPLE: () => USERS_PEOPLE,
  VEHICLES: () => VEHICLES,
  VERTICAL_ALIGNMENTS: () => VERTICAL_ALIGNMENTS,
  VISIBILITY: () => VISIBILITY,
  WIDTHS: () => WIDTHS,
  WRITING: () => WRITING
});
var COLORS = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
var FLOATS = ["left", "right"];
var SIZES = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];
var TEXT_ALIGNMENTS = ["left", "center", "right", "justified"];
var VERTICAL_ALIGNMENTS = ["bottom", "middle", "top"];
var VISIBILITY = ["mobile", "tablet", "computer", "large screen", "widescreen"];
var WIDTHS = [].concat(keys_default(numberToWordMap), keys_default(numberToWordMap).map(Number), values_default(numberToWordMap));
var DIRECTIONAL_TRANSITIONS = ["browse", "browse right", "drop", "fade", "fade up", "fade down", "fade left", "fade right", "fly up", "fly down", "fly left", "fly right", "horizontal flip", "vertical flip", "scale", "slide up", "slide down", "slide left", "slide right", "swing up", "swing down", "swing left", "swing right", "zoom"];
var STATIC_TRANSITIONS = ["jiggle", "flash", "shake", "pulse", "tada", "bounce", "glow"];
var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS);
var ACCESSIBILITY = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"];
var ARROWS = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"];
var AUDIO_VIDEO = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"];
var BUSINESS = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"];
var CHESS = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"];
var CODE = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"];
var COMMUNICATION = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"];
var COMPUTERS = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"];
var CURRENCY = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"];
var DATE_TIME = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"];
var DESIGN = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"];
var EDITORS = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"];
var FILES = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"];
var GENDERS = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"];
var HANDS_GESTURES = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"];
var HEALTH = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"];
var IMAGES = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"];
var INTERFACES = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"];
var LOGISTICS = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"];
var MAPS = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"];
var MEDICAL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"];
var OBJECTS = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"];
var PAYMENTS_SHOPPING = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"];
var SHAPES = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"];
var SPINNERS = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"];
var SPORTS = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"];
var STATUS = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"];
var USERS_PEOPLE = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"];
var VEHICLES = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"];
var WRITING = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"];
var BRANDS = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"];
var ICONS = uniq_default([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
var ICON_ALIASES = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"];
var ICONS_AND_ALIASES = uniq_default([].concat(ICONS, ICON_ALIASES));
var COMPONENT_CONTEXT_SPECIFIC_ICONS = [
  "left dropdown"
  // nested dropdown menu direction icon
];
var ALL_ICONS_IN_ALL_CONTEXTS = uniq_default([].concat(ICONS_AND_ALIASES, COMPONENT_CONTEXT_SPECIFIC_ICONS));

// node_modules/semantic-ui-react/dist/es/lib/normalizeOffset.js
var normalizeOffset_default = function(value) {
  return typeof value === "number" || typeof value === "string" ? [value, value] : value;
};

// node_modules/semantic-ui-react/dist/es/lib/normalizeTransitionDuration.js
var normalizeTransitionDuration_default = function(duration, type) {
  return typeof duration === "number" || typeof duration === "string" ? duration : duration[type];
};

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return baseIsEqual_default(value, other);
}
var isEqual_default = isEqual;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/semantic-ui-react/dist/es/lib/hooks/useClassNamesOnNode.js
var import_react4 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/lib/hooks/useIsomorphicLayoutEffect.js
var import_react3 = __toESM(require_react());
var useIsomorphicLayoutEffect = isBrowser_default() && true ? import_react3.default.useLayoutEffect : import_react3.default.useEffect;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// node_modules/semantic-ui-react/dist/es/lib/hooks/useClassNamesOnNode.js
var CLASS_NAME_DELITIMITER = /\s+/;
function computeClassNames(classNameRefs) {
  var classNames = [];
  if (classNameRefs) {
    classNameRefs.forEach(function(classNameRef) {
      if (typeof classNameRef.current === "string") {
        var classNamesForRef = classNameRef.current.split(CLASS_NAME_DELITIMITER);
        classNamesForRef.forEach(function(className) {
          classNames.push(className);
        });
      }
    });
    return classNames.filter(function(className, i, array) {
      return className.length > 0 && array.indexOf(className) === i;
    });
  }
  return [];
}
function computeClassNamesDifference(prevClassNames2, currentClassNames) {
  return [currentClassNames.filter(function(className) {
    return prevClassNames2.indexOf(className) === -1;
  }), prevClassNames2.filter(function(className) {
    return currentClassNames.indexOf(className) === -1;
  })];
}
var prevClassNames = /* @__PURE__ */ new Map();
var handleClassNamesChange = function handleClassNamesChange2(node, classNameRefs) {
  var currentClassNames = computeClassNames(classNameRefs);
  var _computeClassNamesDif = computeClassNamesDifference(prevClassNames.get(node) || [], currentClassNames), forAdd = _computeClassNamesDif[0], forRemoval = _computeClassNamesDif[1];
  if (node) {
    forAdd.forEach(function(className) {
      return node.classList.add(className);
    });
    forRemoval.forEach(function(className) {
      return node.classList.remove(className);
    });
  }
  prevClassNames.set(node, currentClassNames);
};
var NodeRegistry = function NodeRegistry2() {
  var _this = this;
  this.add = function(node, classNameRef) {
    if (_this.nodes.has(node)) {
      var _set = _this.nodes.get(node);
      _set.add(classNameRef);
      return;
    }
    var set2 = /* @__PURE__ */ new Set();
    set2.add(classNameRef);
    _this.nodes.set(node, set2);
  };
  this.del = function(node, classNameRef) {
    if (!_this.nodes.has(node)) {
      return;
    }
    var set2 = _this.nodes.get(node);
    if (set2.size === 1) {
      _this.nodes.delete(node);
      return;
    }
    set2.delete(classNameRef);
  };
  this.emit = function(node, callback) {
    callback(node, _this.nodes.get(node));
  };
  this.nodes = /* @__PURE__ */ new Map();
};
var nodeRegistry = new NodeRegistry();
function useClassNamesOnNode(node, className) {
  var classNameRef = import_react4.default.useRef();
  var isMounted = import_react4.default.useRef(false);
  useIsomorphicLayoutEffect_default(function() {
    classNameRef.current = className;
    if (isMounted.current) {
      var element = isRefObject(node) ? node.current : node;
      nodeRegistry.emit(element, handleClassNamesChange);
    }
    isMounted.current = true;
  }, [className]);
  useIsomorphicLayoutEffect_default(function() {
    var element = isRefObject(node) ? node.current : node;
    nodeRegistry.add(element, classNameRef);
    nodeRegistry.emit(element, handleClassNamesChange);
    return function() {
      nodeRegistry.del(element, classNameRef);
      nodeRegistry.emit(element, handleClassNamesChange);
    };
  }, [node]);
}

// node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
var import_prop_types17 = __toESM(require_prop_types());
var import_react21 = __toESM(require_react());

// node_modules/lodash-es/without.js
var without = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, values2) : [];
});
var without_default = without;

// node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
function IconGroup(props) {
  var children = props.children, className = props.className, content = props.content, size2 = props.size;
  var classes = clsx_m_default(size2, "icons", className);
  var rest = getUnhandledProps_default(IconGroup, props);
  var ElementType = getElementType_default(IconGroup, props);
  return import_react5.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types2.default.elementType,
  /** Primary content. */
  children: import_prop_types2.default.node,
  /** Additional classes. */
  className: import_prop_types2.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Size of the icon group. */
  size: import_prop_types2.default.oneOf(without_default(SUI_exports.SIZES, "medium"))
} : {};
IconGroup.defaultProps = {
  as: "i"
};
var IconGroup_default = IconGroup;

// node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
var Icon = function(_PureComponent) {
  _inheritsLoose(Icon2, _PureComponent);
  function Icon2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (disabled) {
        e.preventDefault();
        return;
      }
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = Icon2.prototype;
  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props, ariaLabel = _this$props["aria-label"], ariaHidden = _this$props["aria-hidden"];
    if (isNil_default(ariaLabel)) {
      ariaOptions["aria-hidden"] = "true";
    } else {
      ariaOptions["aria-label"] = ariaLabel;
    }
    if (!isNil_default(ariaHidden)) {
      ariaOptions["aria-hidden"] = ariaHidden;
    }
    return ariaOptions;
  };
  _proto.render = function render() {
    var _this$props2 = this.props, bordered = _this$props2.bordered, circular = _this$props2.circular, className = _this$props2.className, color = _this$props2.color, corner = _this$props2.corner, disabled = _this$props2.disabled, fitted = _this$props2.fitted, flipped = _this$props2.flipped, inverted = _this$props2.inverted, link = _this$props2.link, loading = _this$props2.loading, name = _this$props2.name, rotated = _this$props2.rotated, size2 = _this$props2.size;
    var classes = clsx_m_default(color, name, size2, useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(disabled, "disabled"), useKeyOnly(fitted, "fitted"), useKeyOnly(inverted, "inverted"), useKeyOnly(link, "link"), useKeyOnly(loading, "loading"), useKeyOrValueAndKey(corner, "corner"), useValueAndKey(flipped, "flipped"), useValueAndKey(rotated, "rotated"), "icon", className);
    var rest = getUnhandledProps_default(Icon2, this.props);
    var ElementType = getElementType_default(Icon2, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return import_react6.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };
  return Icon2;
}(import_react6.PureComponent);
Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types3.default.elementType,
  /** Formatted to appear bordered. */
  bordered: import_prop_types3.default.bool,
  /** Icon can formatted to appear circular. */
  circular: import_prop_types3.default.bool,
  /** Additional classes. */
  className: import_prop_types3.default.string,
  /** Color of the icon. */
  color: import_prop_types3.default.oneOf(SUI_exports.COLORS),
  /** Icons can display a smaller corner icon. */
  corner: import_prop_types3.default.oneOfType([import_prop_types3.default.bool, import_prop_types3.default.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
  /** Show that the icon is inactive. */
  disabled: import_prop_types3.default.bool,
  /** Fitted, without space to left or right of Icon. */
  fitted: import_prop_types3.default.bool,
  /** Icon can be flipped. */
  flipped: import_prop_types3.default.oneOf(["horizontally", "vertically"]),
  /** Formatted to have its colors inverted for contrast. */
  inverted: import_prop_types3.default.bool,
  /** Icon can be formatted as a link. */
  link: import_prop_types3.default.bool,
  /** Icon can be used as a simple loader. */
  loading: import_prop_types3.default.bool,
  /** Name of the icon. */
  name: customPropTypes_exports.suggest(SUI_exports.ALL_ICONS_IN_ALL_CONTEXTS),
  /** Icon can rotated. */
  rotated: import_prop_types3.default.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: import_prop_types3.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": import_prop_types3.default.string,
  /** Icon can have an aria label. */
  "aria-label": import_prop_types3.default.string
} : {};
Icon.defaultProps = {
  as: "i"
};
Icon.Group = IconGroup_default;
Icon.create = createShorthandFactory(Icon, function(value) {
  return {
    name: value
  };
});
var Icon_default = Icon;

// node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
var import_prop_types13 = __toESM(require_prop_types());
var import_react17 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
var import_prop_types10 = __toESM(require_prop_types());
var import_react14 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
var import_prop_types8 = __toESM(require_prop_types());
var import_react12 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
var import_event_stack2 = __toESM(require_lib());
var import_keyboard_key = __toESM(require_keyboardKey());
var import_prop_types5 = __toESM(require_prop_types());
var import_react9 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/addons/Portal/utils/validateTrigger.js
var import_react7 = __toESM(require_react());
var ReactIs2 = __toESM(require_react_is2());
function validateTrigger(element) {
  if (element) {
    import_react7.default.Children.only(element);
    if (ReactIs2.isFragment(element)) {
      throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
    }
  }
}

// node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react8 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var PortalInner = function(_Component) {
  _inheritsLoose(PortalInner2, _Component);
  function PortalInner2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleRef = function(c) {
      handleRef(_this.props.innerRef, c);
    };
    return _this;
  }
  var _proto = PortalInner2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    invoke_default(this.props, "onMount", null, this.props);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    invoke_default(this.props, "onUnmount", null, this.props);
  };
  _proto.render = function render() {
    if (!isBrowser_default()) return null;
    var _this$props = this.props, children = _this$props.children, _this$props$mountNode = _this$props.mountNode, mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
    return (0, import_react_dom.createPortal)(import_react8.default.createElement(Ref, {
      innerRef: this.handleRef
    }, children), mountNode);
  };
  return PortalInner2;
}(import_react8.Component);
PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
PortalInner.propTypes = true ? {
  /** Primary content. */
  children: import_prop_types4.default.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: customPropTypes_exports.ref,
  /** The node where the portal should mount. */
  mountNode: import_prop_types4.default.any,
  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types4.default.func,
  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types4.default.func
} : {};
var PortalInner_default = PortalInner;

// node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
var Portal = function(_Component) {
  _inheritsLoose(Portal2, _Component);
  function Portal2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.contentRef = import_react9.default.createRef();
    _this.triggerRef = import_react9.default.createRef();
    _this.latestDocumentMouseDownEvent = null;
    _this.handleDocumentMouseDown = function(e) {
      _this.latestDocumentMouseDownEvent = e;
    };
    _this.handleDocumentClick = function(e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!_this.contentRef.current || // no portal
      doesNodeContainClick_default(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && doesNodeContainClick_default(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      doesNodeContainClick_default(_this.contentRef.current, e)) {
        return;
      }
      if (closeOnDocumentClick) {
        _this.close(e);
      }
    };
    _this.handleEscape = function(e) {
      if (!_this.props.closeOnEscape) return;
      if (import_keyboard_key.default.getCode(e) !== import_keyboard_key.default.Escape) return;
      _this.close(e);
    };
    _this.handlePortalMouseLeave = function(e) {
      var _this$props = _this.props, closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave, mouseLeaveDelay = _this$props.mouseLeaveDelay;
      if (!closeOnPortalMouseLeave) return;
      if (e.target !== _this.contentRef.current) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };
    _this.handlePortalMouseEnter = function() {
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
      if (!closeOnPortalMouseLeave) return;
      clearTimeout(_this.mouseLeaveTimer);
    };
    _this.handleTriggerBlur = function(e) {
      var _this$props2 = _this.props, trigger = _this$props2.trigger, closeOnTriggerBlur = _this$props2.closeOnTriggerBlur;
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      invoke_default.apply(void 0, [trigger, "props.onBlur", e].concat(rest));
      var target = e.relatedTarget || document.activeElement;
      var didFocusPortal = invoke_default(_this.contentRef.current, "contains", target);
      if (!closeOnTriggerBlur || didFocusPortal) return;
      _this.close(e);
    };
    _this.handleTriggerClick = function(e) {
      var _this$props3 = _this.props, trigger = _this$props3.trigger, closeOnTriggerClick = _this$props3.closeOnTriggerClick, openOnTriggerClick = _this$props3.openOnTriggerClick;
      var open = _this.state.open;
      for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }
      invoke_default.apply(void 0, [trigger, "props.onClick", e].concat(rest));
      if (open && closeOnTriggerClick) {
        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        _this.open(e);
      }
    };
    _this.handleTriggerFocus = function(e) {
      var _this$props4 = _this.props, trigger = _this$props4.trigger, openOnTriggerFocus = _this$props4.openOnTriggerFocus;
      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }
      invoke_default.apply(void 0, [trigger, "props.onFocus", e].concat(rest));
      if (!openOnTriggerFocus) return;
      _this.open(e);
    };
    _this.handleTriggerMouseLeave = function(e) {
      clearTimeout(_this.mouseEnterTimer);
      var _this$props5 = _this.props, trigger = _this$props5.trigger, closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave, mouseLeaveDelay = _this$props5.mouseLeaveDelay;
      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }
      invoke_default.apply(void 0, [trigger, "props.onMouseLeave", e].concat(rest));
      if (!closeOnTriggerMouseLeave) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };
    _this.handleTriggerMouseEnter = function(e) {
      clearTimeout(_this.mouseLeaveTimer);
      var _this$props6 = _this.props, trigger = _this$props6.trigger, mouseEnterDelay = _this$props6.mouseEnterDelay, openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter;
      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }
      invoke_default.apply(void 0, [trigger, "props.onMouseEnter", e].concat(rest));
      if (!openOnTriggerMouseEnter) return;
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    };
    _this.open = function(e) {
      invoke_default(_this.props, "onOpen", e, _extends({}, _this.props, {
        open: true
      }));
      _this.setState({
        open: true
      });
    };
    _this.openWithTimeout = function(e, delay) {
      var eventClone = _extends({}, e);
      return setTimeout(function() {
        return _this.open(eventClone);
      }, delay || 0);
    };
    _this.close = function(e) {
      _this.setState({
        open: false
      });
      invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
        open: false
      }));
    };
    _this.closeWithTimeout = function(e, delay) {
      var eventClone = _extends({}, e);
      return setTimeout(function() {
        return _this.close(eventClone);
      }, delay || 0);
    };
    _this.handleMount = function() {
      invoke_default(_this.props, "onMount", null, _this.props);
    };
    _this.handleUnmount = function() {
      invoke_default(_this.props, "onUnmount", null, _this.props);
    };
    _this.handleTriggerRef = function(c) {
      _this.triggerRef.current = c;
      handleRef(_this.props.triggerRef, c);
    };
    return _this;
  }
  var _proto = Portal2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.mouseEnterTimer);
    clearTimeout(this.mouseLeaveTimer);
  };
  _proto.render = function render() {
    var _this$props7 = this.props, children = _this$props7.children, eventPool = _this$props7.eventPool, mountNode = _this$props7.mountNode, trigger = _this$props7.trigger;
    var open = this.state.open;
    if (true) {
      validateTrigger(trigger);
    }
    return import_react9.default.createElement(import_react9.default.Fragment, null, open && import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement(PortalInner_default, {
      innerRef: this.contentRef,
      mountNode,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, children), import_react9.default.createElement(import_event_stack2.default, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: eventPool,
      target: this.contentRef
    }), import_react9.default.createElement(import_event_stack2.default, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: eventPool,
      target: this.contentRef
    }), import_react9.default.createElement(import_event_stack2.default, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: eventPool
    }), import_react9.default.createElement(import_event_stack2.default, {
      name: "click",
      on: this.handleDocumentClick,
      pool: eventPool
    }), import_react9.default.createElement(import_event_stack2.default, {
      name: "keydown",
      on: this.handleEscape,
      pool: eventPool
    })), trigger && import_react9.default.createElement(Ref, {
      innerRef: this.handleTriggerRef
    }, import_react9.default.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  };
  return Portal2;
}(ModernAutoControlledComponent);
Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Portal.propTypes = true ? {
  /** Primary content. */
  children: import_prop_types5.default.node.isRequired,
  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: import_prop_types5.default.bool,
  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: import_prop_types5.default.bool,
  /** Initial value of open. */
  defaultOpen: import_prop_types5.default.bool,
  /** Event pool namespace that is used to handle component events */
  eventPool: import_prop_types5.default.string,
  /** The node where the portal should mount. */
  mountNode: import_prop_types5.default.any,
  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: import_prop_types5.default.number,
  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: import_prop_types5.default.number,
  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: import_prop_types5.default.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types5.default.func,
  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: import_prop_types5.default.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types5.default.func,
  /** Controls whether or not the portal is displayed. */
  open: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: import_prop_types5.default.bool,
  /** Element to be rendered in-place where the portal is defined. */
  trigger: import_prop_types5.default.node,
  /** Called with a ref to the trigger node. */
  triggerRef: customPropTypes_exports.ref
} : {};
Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: "default",
  openOnTriggerClick: true
};
Portal.autoControlledProps = ["open"];
Portal.Inner = PortalInner_default;
var Portal_default = Portal;

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js
var import_prop_types6 = __toESM(require_prop_types());
var import_react10 = __toESM(require_react());
function DimmerDimmable(props) {
  var blurring = props.blurring, className = props.className, children = props.children, content = props.content, dimmed = props.dimmed;
  var classes = clsx_m_default(useKeyOnly(blurring, "blurring"), useKeyOnly(dimmed, "dimmed"), "dimmable", className);
  var rest = getUnhandledProps_default(DimmerDimmable, props);
  var ElementType = getElementType_default(DimmerDimmable, props);
  return import_react10.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
DimmerDimmable.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types6.default.elementType,
  /** A dimmable element can blur its contents. */
  blurring: import_prop_types6.default.bool,
  /** Primary content. */
  children: import_prop_types6.default.node,
  /** Additional classes. */
  className: import_prop_types6.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Controls whether or not the dim is displayed. */
  dimmed: import_prop_types6.default.bool
} : {};
var DimmerDimmable_default = DimmerDimmable;

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js
var import_prop_types7 = __toESM(require_prop_types());
var import_react11 = __toESM(require_react());
var DimmerInner = function(_Component) {
  _inheritsLoose(DimmerInner2, _Component);
  function DimmerInner2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.containerRef = (0, import_react11.createRef)();
    _this.contentRef = (0, import_react11.createRef)();
    _this.handleClick = function(e) {
      var contentRef = _this.contentRef.current;
      invoke_default(_this.props, "onClick", e, _this.props);
      if (contentRef && contentRef !== e.target && doesNodeContainClick_default(contentRef, e)) {
        return;
      }
      invoke_default(_this.props, "onClickOutside", e, _this.props);
    };
    return _this;
  }
  var _proto = DimmerInner2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var active = this.props.active;
    this.toggleStyles(active);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var currentActive = this.props.active;
    var prevActive = prevProps.active;
    if (prevActive !== currentActive) this.toggleStyles(currentActive);
  };
  _proto.toggleStyles = function toggleStyles(active) {
    var containerRef = this.containerRef.current;
    if (!containerRef || !containerRef.style) return;
    if (active) {
      containerRef.style.setProperty("display", "flex", "important");
    } else {
      containerRef.style.removeProperty("display");
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, disabled = _this$props.disabled, inverted = _this$props.inverted, page = _this$props.page, simple = _this$props.simple, verticalAlign = _this$props.verticalAlign;
    var classes = clsx_m_default("ui", useKeyOnly(active, "active transition visible"), useKeyOnly(disabled, "disabled"), useKeyOnly(inverted, "inverted"), useKeyOnly(page, "page"), useKeyOnly(simple, "simple"), useVerticalAlignProp(verticalAlign), "dimmer", className);
    var rest = getUnhandledProps_default(DimmerInner2, this.props);
    var ElementType = getElementType_default(DimmerInner2, this.props);
    var childrenContent = childrenUtils_exports.isNil(children) ? content : children;
    return import_react11.default.createElement(Ref, {
      innerRef: this.containerRef
    }, import_react11.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), childrenContent && import_react11.default.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, childrenContent)));
  };
  return DimmerInner2;
}(import_react11.Component);
DimmerInner.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
DimmerInner.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types7.default.elementType,
  /** An active dimmer will dim its parent container. */
  active: import_prop_types7.default.bool,
  /** Primary content. */
  children: import_prop_types7.default.node,
  /** Additional classes. */
  className: import_prop_types7.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A disabled dimmer cannot be activated */
  disabled: import_prop_types7.default.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types7.default.func,
  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: import_prop_types7.default.func,
  /** A dimmer can be formatted to have its colors inverted. */
  inverted: import_prop_types7.default.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: import_prop_types7.default.bool,
  /** A dimmer can be controlled with simple prop. */
  simple: import_prop_types7.default.bool,
  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: import_prop_types7.default.oneOf(["bottom", "top"])
} : {};

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
var Dimmer = function(_Component) {
  _inheritsLoose(Dimmer2, _Component);
  function Dimmer2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handlePortalMount = function() {
      if (!isBrowser_default()) return;
      document.body.classList.add("dimmed");
      document.body.classList.add("dimmable");
    };
    _this.handlePortalUnmount = function() {
      if (!isBrowser_default()) return;
      document.body.classList.remove("dimmed");
      document.body.classList.remove("dimmable");
    };
    return _this;
  }
  var _proto = Dimmer2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, page = _this$props.page;
    var rest = getUnhandledProps_default(Dimmer2, this.props);
    if (page) {
      return import_react12.default.createElement(Portal_default, {
        closeOnEscape: false,
        closeOnDocumentClick: false,
        onMount: this.handlePortalMount,
        onUnmount: this.handlePortalUnmount,
        open: active,
        openOnTriggerClick: false
      }, import_react12.default.createElement(DimmerInner, _extends({}, rest, {
        active,
        page
      })));
    }
    return import_react12.default.createElement(DimmerInner, _extends({}, rest, {
      active,
      page
    }));
  };
  return Dimmer2;
}(import_react12.Component);
Dimmer.handledProps = ["active", "page"];
Dimmer.propTypes = true ? {
  /** An active dimmer will dim its parent container. */
  active: import_prop_types8.default.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: import_prop_types8.default.bool
} : {};
Dimmer.Dimmable = DimmerDimmable_default;
Dimmer.Inner = DimmerInner;
Dimmer.create = createShorthandFactory(Dimmer, function(value) {
  return {
    content: value
  };
});

// node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js
var import_prop_types9 = __toESM(require_prop_types());
var import_react13 = __toESM(require_react());
function ImageGroup(props) {
  var children = props.children, className = props.className, content = props.content, size2 = props.size;
  var classes = clsx_m_default("ui", size2, className, "images");
  var rest = getUnhandledProps_default(ImageGroup, props);
  var ElementType = getElementType_default(ImageGroup, props);
  return import_react13.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
ImageGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types9.default.elementType,
  /** Primary content. */
  children: import_prop_types9.default.node,
  /** Additional classes. */
  className: import_prop_types9.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A group of images can be formatted to have the same size. */
  size: import_prop_types9.default.oneOf(SUI_exports.SIZES)
} : {};
var ImageGroup_default = ImageGroup;

// node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
function Image(props) {
  var avatar = props.avatar, bordered = props.bordered, centered = props.centered, children = props.children, circular = props.circular, className = props.className, content = props.content, dimmer = props.dimmer, disabled = props.disabled, floated = props.floated, fluid = props.fluid, hidden = props.hidden, href = props.href, inline = props.inline, label = props.label, rounded = props.rounded, size2 = props.size, spaced = props.spaced, verticalAlign = props.verticalAlign, wrapped = props.wrapped, ui = props.ui;
  var classes = clsx_m_default(useKeyOnly(ui, "ui"), size2, useKeyOnly(avatar, "avatar"), useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(centered, "centered"), useKeyOnly(disabled, "disabled"), useKeyOnly(fluid, "fluid"), useKeyOnly(hidden, "hidden"), useKeyOnly(inline, "inline"), useKeyOnly(rounded, "rounded"), useKeyOrValueAndKey(spaced, "spaced"), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign, "aligned"), "image", className);
  var rest = getUnhandledProps_default(Image, props);
  var _partitionHTMLProps = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  }), imgTagProps = _partitionHTMLProps[0], rootProps = _partitionHTMLProps[1];
  var ElementType = getElementType_default(Image, props, function() {
    if (!isNil_default(dimmer) || !isNil_default(label) || !isNil_default(wrapped) || !childrenUtils_exports.isNil(children)) {
      return "div";
    }
  });
  if (!childrenUtils_exports.isNil(children)) {
    return import_react14.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react14.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  if (ElementType === "img") {
    return import_react14.default.createElement(ElementType, _extends({}, rootProps, imgTagProps, {
      className: classes
    }));
  }
  return import_react14.default.createElement(ElementType, _extends({}, rootProps, {
    className: classes,
    href
  }), Dimmer.create(dimmer, {
    autoGenerateKey: false
  }), Label.create(label, {
    autoGenerateKey: false
  }), import_react14.default.createElement("img", imgTagProps));
}
Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Image.Group = ImageGroup_default;
Image.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types10.default.elementType,
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: import_prop_types10.default.bool,
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: import_prop_types10.default.bool,
  /** An image can appear centered in a content block. */
  centered: import_prop_types10.default.bool,
  /** Primary content. */
  children: import_prop_types10.default.node,
  /** An image may appear circular. */
  circular: import_prop_types10.default.bool,
  /** Additional classes. */
  className: import_prop_types10.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: import_prop_types10.default.bool,
  /** Shorthand for Dimmer. */
  dimmer: customPropTypes_exports.itemShorthand,
  /** An image can sit to the left or right of other content. */
  floated: import_prop_types10.default.oneOf(SUI_exports.FLOATS),
  /** An image can take up the width of its container. */
  fluid: customPropTypes_exports.every([import_prop_types10.default.bool, customPropTypes_exports.disallow(["size"])]),
  /** An image can be hidden. */
  hidden: import_prop_types10.default.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: import_prop_types10.default.string,
  /** An image may appear inline. */
  inline: import_prop_types10.default.bool,
  /** Shorthand for Label. */
  label: customPropTypes_exports.itemShorthand,
  /** An image may appear rounded. */
  rounded: import_prop_types10.default.bool,
  /** An image may appear at different sizes. */
  size: import_prop_types10.default.oneOf(SUI_exports.SIZES),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: import_prop_types10.default.oneOfType([import_prop_types10.default.bool, import_prop_types10.default.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: import_prop_types10.default.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: import_prop_types10.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: import_prop_types10.default.bool
} : {};
Image.defaultProps = {
  as: "img",
  ui: true
};
Image.create = createShorthandFactory(Image, function(value) {
  return {
    src: value
  };
});
var Image_default = Image;

// node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js
var import_prop_types11 = __toESM(require_prop_types());
var import_react15 = __toESM(require_react());
function LabelDetail(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("detail", className);
  var rest = getUnhandledProps_default(LabelDetail, props);
  var ElementType = getElementType_default(LabelDetail, props);
  return import_react15.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
LabelDetail.handledProps = ["as", "children", "className", "content"];
LabelDetail.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types11.default.elementType,
  /** Primary content. */
  children: import_prop_types11.default.node,
  /** Additional classes. */
  className: import_prop_types11.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
LabelDetail.create = createShorthandFactory(LabelDetail, function(val) {
  return {
    content: val
  };
});
var LabelDetail_default = LabelDetail;

// node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js
var import_prop_types12 = __toESM(require_prop_types());
var import_react16 = __toESM(require_react());
function LabelGroup(props) {
  var children = props.children, circular = props.circular, className = props.className, color = props.color, content = props.content, size2 = props.size, tag = props.tag;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(circular, "circular"), useKeyOnly(tag, "tag"), "labels", className);
  var rest = getUnhandledProps_default(LabelGroup, props);
  var ElementType = getElementType_default(LabelGroup, props);
  return import_react16.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
LabelGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types12.default.elementType,
  /** Primary content. */
  children: import_prop_types12.default.node,
  /** Labels can share shapes. */
  circular: import_prop_types12.default.bool,
  /** Additional classes. */
  className: import_prop_types12.default.string,
  /** Label group can share colors together. */
  color: import_prop_types12.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Label group can share sizes together. */
  size: import_prop_types12.default.oneOf(SUI_exports.SIZES),
  /** Label group can share tag formatting. */
  tag: import_prop_types12.default.bool
} : {};
var LabelGroup_default = LabelGroup;

// node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
var Label = function(_Component) {
  _inheritsLoose(Label2, _Component);
  function Label2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };
    _this.handleIconOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e) {
          invoke_default(predefinedProps, "onClick", e);
          invoke_default(_this.props, "onRemove", e, _this.props);
        }
      };
    };
    return _this;
  }
  var _proto = Label2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, attached = _this$props.attached, basic = _this$props.basic, children = _this$props.children, circular = _this$props.circular, className = _this$props.className, color = _this$props.color, content = _this$props.content, corner = _this$props.corner, detail = _this$props.detail, empty = _this$props.empty, floating = _this$props.floating, horizontal = _this$props.horizontal, icon = _this$props.icon, image = _this$props.image, onRemove = _this$props.onRemove, pointing = _this$props.pointing, prompt = _this$props.prompt, removeIcon = _this$props.removeIcon, ribbon = _this$props.ribbon, size2 = _this$props.size, tag = _this$props.tag;
    var pointingClass = pointing === true && "pointing" || (pointing === "left" || pointing === "right") && pointing + " pointing" || (pointing === "above" || pointing === "below") && "pointing " + pointing;
    var classes = clsx_m_default("ui", color, pointingClass, size2, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(empty, "empty"), useKeyOnly(floating, "floating"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(image === true, "image"), useKeyOnly(prompt, "prompt"), useKeyOnly(tag, "tag"), useKeyOrValueAndKey(corner, "corner"), useKeyOrValueAndKey(ribbon, "ribbon"), useValueAndKey(attached, "attached"), "label", className);
    var rest = getUnhandledProps_default(Label2, this.props);
    var ElementType = getElementType_default(Label2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react17.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    var removeIconShorthand = isUndefined_default(removeIcon) ? "delete" : removeIcon;
    return import_react17.default.createElement(ElementType, _extends({
      className: classes,
      onClick: this.handleClick
    }, rest), Icon_default.create(icon, {
      autoGenerateKey: false
    }), typeof image !== "boolean" && Image_default.create(image, {
      autoGenerateKey: false
    }), content, LabelDetail_default.create(detail, {
      autoGenerateKey: false
    }), onRemove && Icon_default.create(removeIconShorthand, {
      autoGenerateKey: false,
      overrideProps: this.handleIconOverrides
    }));
  };
  return Label2;
}(import_react17.Component);
Label.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
Label.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types13.default.elementType,
  /** A label can be active. */
  active: import_prop_types13.default.bool,
  /** A label can attach to a content segment. */
  attached: import_prop_types13.default.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
  /** A label can reduce its complexity. */
  basic: import_prop_types13.default.bool,
  /** Primary content. */
  children: import_prop_types13.default.node,
  /** A label can be circular. */
  circular: import_prop_types13.default.bool,
  /** Additional classes. */
  className: import_prop_types13.default.string,
  /** Color of the label. */
  color: import_prop_types13.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A label can position itself in the corner of an element. */
  corner: import_prop_types13.default.oneOfType([import_prop_types13.default.bool, import_prop_types13.default.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: customPropTypes_exports.itemShorthand,
  /** Formats the label as a dot. */
  empty: customPropTypes_exports.every([import_prop_types13.default.bool, customPropTypes_exports.demand(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: import_prop_types13.default.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: import_prop_types13.default.bool,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: import_prop_types13.default.oneOfType([import_prop_types13.default.bool, customPropTypes_exports.itemShorthand]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types13.default.func,
  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: import_prop_types13.default.func,
  /** A label can point to content next to it. */
  pointing: import_prop_types13.default.oneOfType([import_prop_types13.default.bool, import_prop_types13.default.oneOf(["above", "below", "left", "right"])]),
  /** A label can prompt for an error in your forms. */
  prompt: import_prop_types13.default.bool,
  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: customPropTypes_exports.itemShorthand,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: import_prop_types13.default.oneOfType([import_prop_types13.default.bool, import_prop_types13.default.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: import_prop_types13.default.oneOf(SUI_exports.SIZES),
  /** A label can appear as a tag. */
  tag: import_prop_types13.default.bool
} : {};
Label.Detail = LabelDetail_default;
Label.Group = LabelGroup_default;
Label.create = createShorthandFactory(Label, function(value) {
  return {
    content: value
  };
});

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js
var import_prop_types14 = __toESM(require_prop_types());
var import_react18 = __toESM(require_react());
function ButtonContent(props) {
  var children = props.children, className = props.className, content = props.content, hidden = props.hidden, visible = props.visible;
  var classes = clsx_m_default(useKeyOnly(visible, "visible"), useKeyOnly(hidden, "hidden"), "content", className);
  var rest = getUnhandledProps_default(ButtonContent, props);
  var ElementType = getElementType_default(ButtonContent, props);
  return import_react18.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types14.default.elementType,
  /** Primary content. */
  children: import_prop_types14.default.node,
  /** Additional classes. */
  className: import_prop_types14.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Initially hidden, visible on hover. */
  hidden: import_prop_types14.default.bool,
  /** Initially visible, hidden on hover. */
  visible: import_prop_types14.default.bool
} : {};
var ButtonContent_default = ButtonContent;

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js
var import_prop_types15 = __toESM(require_prop_types());
var import_react19 = __toESM(require_react());
function ButtonGroup(props) {
  var attached = props.attached, basic = props.basic, buttons = props.buttons, children = props.children, className = props.className, color = props.color, compact2 = props.compact, content = props.content, floated = props.floated, fluid = props.fluid, icon = props.icon, inverted = props.inverted, labeled = props.labeled, negative = props.negative, positive = props.positive, primary = props.primary, secondary = props.secondary, size2 = props.size, toggle = props.toggle, vertical = props.vertical, widths = props.widths;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(basic, "basic"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(icon, "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(labeled, "labeled"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useValueAndKey(floated, "floated"), useWidthProp(widths), "buttons", className);
  var rest = getUnhandledProps_default(ButtonGroup, props);
  var ElementType = getElementType_default(ButtonGroup, props);
  if (isNil_default(buttons)) {
    return import_react19.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  return import_react19.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), map_default(buttons, function(button) {
    return Button_default.create(button);
  }));
}
ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ButtonGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types15.default.elementType,
  /** Groups can be attached to other content. */
  attached: import_prop_types15.default.oneOfType([import_prop_types15.default.bool, import_prop_types15.default.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: import_prop_types15.default.bool,
  /** Array of shorthand Button values. */
  buttons: customPropTypes_exports.collectionShorthand,
  /** Primary content. */
  children: import_prop_types15.default.node,
  /** Additional classes. */
  className: import_prop_types15.default.string,
  /** Groups can have a shared color. */
  color: import_prop_types15.default.oneOf(SUI_exports.COLORS),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: import_prop_types15.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Groups can be aligned to the left or right of its container. */
  floated: import_prop_types15.default.oneOf(SUI_exports.FLOATS),
  /** Groups can take the width of their container. */
  fluid: import_prop_types15.default.bool,
  /** Groups can be formatted as icons. */
  icon: import_prop_types15.default.bool,
  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: import_prop_types15.default.bool,
  /** Groups can be formatted as labeled icon buttons. */
  labeled: import_prop_types15.default.bool,
  /** Groups can hint towards a negative consequence. */
  negative: import_prop_types15.default.bool,
  /** Groups can hint towards a positive consequence. */
  positive: import_prop_types15.default.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  primary: import_prop_types15.default.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  secondary: import_prop_types15.default.bool,
  /** Groups can have different sizes. */
  size: import_prop_types15.default.oneOf(SUI_exports.SIZES),
  /** Groups can be formatted to toggle on and off. */
  toggle: import_prop_types15.default.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: import_prop_types15.default.bool,
  /** Groups can have their widths divided evenly. */
  widths: import_prop_types15.default.oneOf(SUI_exports.WIDTHS)
} : {};
var ButtonGroup_default = ButtonGroup;

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js
var import_prop_types16 = __toESM(require_prop_types());
var import_react20 = __toESM(require_react());
function ButtonOr(props) {
  var className = props.className, text = props.text;
  var classes = clsx_m_default("or", className);
  var rest = getUnhandledProps_default(ButtonOr, props);
  var ElementType = getElementType_default(ButtonOr, props);
  return import_react20.default.createElement(ElementType, _extends({}, rest, {
    className: classes,
    "data-text": text
  }));
}
ButtonOr.handledProps = ["as", "className", "text"];
ButtonOr.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types16.default.elementType,
  /** Additional classes. */
  className: import_prop_types16.default.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])
} : {};
var ButtonOr_default = ButtonOr;

// node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
var Button = function(_Component) {
  _inheritsLoose(Button2, _Component);
  function Button2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = (0, import_react21.createRef)();
    _this.computeElementType = function() {
      var _this$props = _this.props, attached = _this$props.attached, label = _this$props.label;
      if (!isNil_default(attached) || !isNil_default(label)) return "div";
    };
    _this.computeTabIndex = function(ElementType) {
      var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
      if (!isNil_default(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === "div") return 0;
    };
    _this.focus = function(options) {
      return invoke_default(_this.ref.current, "focus", options);
    };
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (disabled) {
        e.preventDefault();
        return;
      }
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    _this.hasIconClass = function() {
      var _this$props3 = _this.props, labelPosition = _this$props3.labelPosition, children = _this$props3.children, content = _this$props3.content, icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || childrenUtils_exports.isNil(children) && isNil_default(content));
    };
    return _this;
  }
  var _proto = Button2.prototype;
  _proto.computeButtonAriaRole = function computeButtonAriaRole(ElementType) {
    var role = this.props.role;
    if (!isNil_default(role)) return role;
    if (ElementType !== "button") return "button";
  };
  _proto.render = function render() {
    var _this$props4 = this.props, active = _this$props4.active, animated = _this$props4.animated, attached = _this$props4.attached, basic = _this$props4.basic, children = _this$props4.children, circular = _this$props4.circular, className = _this$props4.className, color = _this$props4.color, compact2 = _this$props4.compact, content = _this$props4.content, disabled = _this$props4.disabled, floated = _this$props4.floated, fluid = _this$props4.fluid, icon = _this$props4.icon, inverted = _this$props4.inverted, label = _this$props4.label, labelPosition = _this$props4.labelPosition, loading = _this$props4.loading, negative = _this$props4.negative, positive = _this$props4.positive, primary = _this$props4.primary, secondary = _this$props4.secondary, size2 = _this$props4.size, toggle = _this$props4.toggle, type = _this$props4.type;
    var baseClasses = clsx_m_default(color, size2, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(this.hasIconClass(), "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOrValueAndKey(animated, "animated"), useKeyOrValueAndKey(attached, "attached"));
    var labeledClasses = clsx_m_default(useKeyOrValueAndKey(labelPosition || !!label, "labeled"));
    var wrapperClasses = clsx_m_default(useKeyOnly(disabled, "disabled"), useValueAndKey(floated, "floated"));
    var rest = getUnhandledProps_default(Button2, this.props);
    var ElementType = getElementType_default(Button2, this.props, this.computeElementType);
    var tabIndex = this.computeTabIndex(ElementType);
    if (!isNil_default(label)) {
      var buttonClasses = clsx_m_default("ui", baseClasses, "button", className);
      var containerClasses = clsx_m_default("ui", labeledClasses, "button", className, wrapperClasses);
      var labelElement = Label.create(label, {
        defaultProps: {
          basic: true,
          pointing: labelPosition === "left" ? "right" : "left"
        },
        autoGenerateKey: false
      });
      return import_react21.default.createElement(ElementType, _extends({}, rest, {
        className: containerClasses,
        onClick: this.handleClick
      }), labelPosition === "left" && labelElement, import_react21.default.createElement(Ref, {
        innerRef: this.ref
      }, import_react21.default.createElement("button", {
        className: buttonClasses,
        "aria-pressed": toggle ? !!active : void 0,
        disabled,
        type,
        tabIndex
      }, Icon_default.create(icon, {
        autoGenerateKey: false
      }), " ", content)), (labelPosition === "right" || !labelPosition) && labelElement);
    }
    var classes = clsx_m_default("ui", baseClasses, wrapperClasses, labeledClasses, "button", className);
    var hasChildren = !childrenUtils_exports.isNil(children);
    var role = this.computeButtonAriaRole(ElementType);
    return import_react21.default.createElement(Ref, {
      innerRef: this.ref
    }, import_react21.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      "aria-pressed": toggle ? !!active : void 0,
      disabled: disabled && ElementType === "button" || void 0,
      onClick: this.handleClick,
      role,
      type,
      tabIndex
    }), hasChildren && children, !hasChildren && Icon_default.create(icon, {
      autoGenerateKey: false
    }), !hasChildren && content));
  };
  return Button2;
}(import_react21.Component);
Button.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
Button.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types17.default.elementType,
  /** A button can show it is currently the active user selection. */
  active: import_prop_types17.default.bool,
  /** A button can animate to show hidden content. */
  animated: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.oneOf(["fade", "vertical"])]),
  /** A button can be attached to other content. */
  attached: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.oneOf(["left", "right", "top", "bottom"])]),
  /** A basic button is less pronounced. */
  basic: import_prop_types17.default.bool,
  /** Primary content. */
  children: customPropTypes_exports.every([import_prop_types17.default.node, customPropTypes_exports.disallow(["label"]), customPropTypes_exports.givenProps({
    icon: import_prop_types17.default.oneOfType([import_prop_types17.default.string.isRequired, import_prop_types17.default.object.isRequired, import_prop_types17.default.element.isRequired])
  }, customPropTypes_exports.disallow(["icon"]))]),
  /** A button can be circular. */
  circular: import_prop_types17.default.bool,
  /** Additional classes. */
  className: import_prop_types17.default.string,
  /** A button can have different colors */
  color: import_prop_types17.default.oneOf([].concat(SUI_exports.COLORS, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: import_prop_types17.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A button can show it is currently unable to be interacted with. */
  disabled: import_prop_types17.default.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: import_prop_types17.default.oneOf(SUI_exports.FLOATS),
  /** A button can take the width of its container. */
  fluid: import_prop_types17.default.bool,
  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.string, import_prop_types17.default.object, import_prop_types17.default.element]),
  /** A button can be formatted to appear on dark backgrounds. */
  inverted: import_prop_types17.default.bool,
  /** Add a Label by text, props object, or pass a <Label />. */
  label: import_prop_types17.default.oneOfType([import_prop_types17.default.string, import_prop_types17.default.object, import_prop_types17.default.element]),
  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: import_prop_types17.default.oneOf(["right", "left"]),
  /** A button can show a loading indicator. */
  loading: import_prop_types17.default.bool,
  /** A button can hint towards a negative consequence. */
  negative: import_prop_types17.default.bool,
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types17.default.func,
  /** A button can hint towards a positive consequence. */
  positive: import_prop_types17.default.bool,
  /** A button can be formatted to show different levels of emphasis. */
  primary: import_prop_types17.default.bool,
  /** The role of the HTML element. */
  role: import_prop_types17.default.string,
  /** A button can be formatted to show different levels of emphasis. */
  secondary: import_prop_types17.default.bool,
  /** A button can have different sizes. */
  size: import_prop_types17.default.oneOf(SUI_exports.SIZES),
  /** A button can receive focus. */
  tabIndex: import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: import_prop_types17.default.bool,
  /** The type of the HTML element. */
  type: import_prop_types17.default.oneOf(["button", "submit", "reset"])
} : {};
Button.defaultProps = {
  as: "button"
};
Button.Content = ButtonContent_default;
Button.Group = ButtonGroup_default;
Button.Or = ButtonOr_default;
Button.create = createShorthandFactory(Button, function(value) {
  return {
    content: value
  };
});
var Button_default = Button;

// node_modules/lodash-es/_arrayReduce.js
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/lodash-es/_baseReduce.js
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
  });
  return accumulator;
}
var baseReduce_default = baseReduce;

// node_modules/lodash-es/reduce.js
function reduce(collection, iteratee, accumulator) {
  var func = isArray_default(collection) ? arrayReduce_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee, 4), accumulator, initAccum, baseEach_default);
}
var reduce_default = reduce;

// node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js
var import_prop_types23 = __toESM(require_prop_types());
var import_react27 = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/semantic-ui-react/dist/es/modules/Modal/ModalActions.js
var import_prop_types18 = __toESM(require_prop_types());
var import_react22 = __toESM(require_react());
var ModalActions = function(_Component) {
  _inheritsLoose(ModalActions2, _Component);
  function ModalActions2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleButtonOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          invoke_default(predefinedProps, "onClick", e, buttonProps);
          invoke_default(_this.props, "onActionClick", e, buttonProps);
        }
      };
    };
    return _this;
  }
  var _proto = ModalActions2.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, actions = _this$props.actions, children = _this$props.children, className = _this$props.className, content = _this$props.content;
    var classes = clsx_m_default("actions", className);
    var rest = getUnhandledProps_default(ModalActions2, this.props);
    var ElementType = getElementType_default(ModalActions2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react22.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    if (!childrenUtils_exports.isNil(content)) {
      return import_react22.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), content);
    }
    return import_react22.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), map_default(actions, function(action) {
      return Button_default.create(action, {
        overrideProps: _this2.handleButtonOverrides
      });
    }));
  };
  return ModalActions2;
}(import_react22.Component);
ModalActions.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
ModalActions.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types18.default.elementType,
  /** Array of shorthand buttons. */
  actions: customPropTypes_exports.collectionShorthand,
  /** Primary content. */
  children: import_prop_types18.default.node,
  /** Additional classes. */
  className: import_prop_types18.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types18.default.func])
} : {};
ModalActions.create = createShorthandFactory(ModalActions, function(actions) {
  return {
    actions
  };
});

// node_modules/semantic-ui-react/dist/es/modules/Modal/ModalContent.js
var import_prop_types19 = __toESM(require_prop_types());
var import_react23 = __toESM(require_react());
function ModalContent(props) {
  var children = props.children, className = props.className, content = props.content, image = props.image, scrolling = props.scrolling;
  var classes = clsx_m_default(className, useKeyOnly(image, "image"), useKeyOnly(scrolling, "scrolling"), "content");
  var rest = getUnhandledProps_default(ModalContent, props);
  var ElementType = getElementType_default(ModalContent, props);
  return import_react23.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ModalContent.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
ModalContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types19.default.elementType,
  /** Primary content. */
  children: import_prop_types19.default.node,
  /** Additional classes. */
  className: import_prop_types19.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A modal can contain image content. */
  image: import_prop_types19.default.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: import_prop_types19.default.bool
} : {};
ModalContent.create = createShorthandFactory(ModalContent, function(content) {
  return {
    content
  };
});
var ModalContent_default = ModalContent;

// node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDescription.js
var import_prop_types20 = __toESM(require_prop_types());
var import_react24 = __toESM(require_react());
function ModalDescription(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("description", className);
  var rest = getUnhandledProps_default(ModalDescription, props);
  var ElementType = getElementType_default(ModalDescription, props);
  return import_react24.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ModalDescription.handledProps = ["as", "children", "className", "content"];
ModalDescription.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types20.default.elementType,
  /** Primary content. */
  children: import_prop_types20.default.node,
  /** Additional classes. */
  className: import_prop_types20.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var ModalDescription_default = ModalDescription;

// node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDimmer.js
var import_prop_types21 = __toESM(require_prop_types());
var import_react25 = __toESM(require_react());
function ModalDimmer(props) {
  var blurring = props.blurring, children = props.children, className = props.className, centered = props.centered, content = props.content, inverted = props.inverted, mountNode = props.mountNode, scrolling = props.scrolling;
  var ref2 = import_react25.default.useRef();
  var classes = clsx_m_default("ui", useKeyOnly(inverted, "inverted"), useKeyOnly(!centered, "top aligned"), "page modals dimmer transition visible active", className);
  var bodyClasses = clsx_m_default("dimmable dimmed", useKeyOnly(blurring, "blurring"), useKeyOnly(scrolling, "scrolling"));
  var rest = getUnhandledProps_default(ModalDimmer, props);
  var ElementType = getElementType_default(ModalDimmer, props);
  useClassNamesOnNode(mountNode, bodyClasses);
  import_react25.default.useEffect(function() {
    if (ref2.current && ref2.current.style) {
      ref2.current.style.setProperty("display", "flex", "important");
    }
  }, []);
  return import_react25.default.createElement(Ref, {
    innerRef: ref2
  }, import_react25.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children));
}
ModalDimmer.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
ModalDimmer.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types21.default.elementType,
  /** A dimmer can be blurred. */
  blurring: import_prop_types21.default.bool,
  /** Primary content. */
  children: import_prop_types21.default.node,
  /** Additional classes. */
  className: import_prop_types21.default.string,
  /** A dimmer can center its contents in the viewport. */
  centered: import_prop_types21.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A dimmer can be inverted. */
  inverted: import_prop_types21.default.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: import_prop_types21.default.any,
  /** A dimmer can make body scrollable. */
  scrolling: import_prop_types21.default.bool
} : {};
ModalDimmer.create = createShorthandFactory(ModalDimmer, function(content) {
  return {
    content
  };
});
var ModalDimmer_default = ModalDimmer;

// node_modules/semantic-ui-react/dist/es/modules/Modal/ModalHeader.js
var import_prop_types22 = __toESM(require_prop_types());
var import_react26 = __toESM(require_react());
function ModalHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(ModalHeader, props);
  var ElementType = getElementType_default(ModalHeader, props);
  return import_react26.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ModalHeader.handledProps = ["as", "children", "className", "content"];
ModalHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types22.default.elementType,
  /** Primary content. */
  children: import_prop_types22.default.node,
  /** Additional classes. */
  className: import_prop_types22.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ModalHeader.create = createShorthandFactory(ModalHeader, function(content) {
  return {
    content
  };
});
var ModalHeader_default = ModalHeader;

// node_modules/semantic-ui-react/dist/es/modules/Modal/utils/index.js
var OFFSET = 0;
var PADDING = 50;
var canFit = function canFit2(modalRect) {
  var scrollHeight = modalRect.height + OFFSET;
  var height = modalRect.height + OFFSET;
  var contextHeight = window.innerHeight;
  var verticalCenter = contextHeight / 2;
  var topOffset = -(height / 2);
  var paddingHeight = PADDING;
  var startPosition = verticalCenter + topOffset;
  return startPosition + scrollHeight + paddingHeight < contextHeight;
};
var getLegacyStyles = function getLegacyStyles2(isFitted, centered, modalRect) {
  var marginTop = centered && isFitted ? -(modalRect.height / 2) : 0;
  var marginLeft = -(modalRect.width / 2);
  return {
    marginLeft,
    marginTop
  };
};
var isLegacy = function isLegacy2() {
  return !window.ActiveXObject && "ActiveXObject" in window;
};

// node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js
var Modal = function(_Component) {
  _inheritsLoose(Modal2, _Component);
  function Modal2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.legacy = isBrowser_default() && isLegacy();
    _this.ref = (0, import_react27.createRef)();
    _this.dimmerRef = (0, import_react27.createRef)();
    _this.latestDocumentMouseDownEvent = null;
    _this.getMountNode = function() {
      return isBrowser_default() ? _this.props.mountNode || document.body : null;
    };
    _this.handleActionsOverrides = function(predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          invoke_default(predefinedProps, "onActionClick", e, actionProps);
          invoke_default(_this.props, "onActionClick", e, _this.props);
          _this.handleClose(e);
        }
      };
    };
    _this.handleClose = function(e) {
      _this.setState({
        open: false
      });
      invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
        open: false
      }));
    };
    _this.handleDocumentMouseDown = function(e) {
      _this.latestDocumentMouseDownEvent = e;
    };
    _this.handleDocumentClick = function(e) {
      var closeOnDimmerClick = _this.props.closeOnDimmerClick;
      var currentDocumentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!closeOnDimmerClick || doesNodeContainClick_default(_this.ref.current, currentDocumentMouseDownEvent) || doesNodeContainClick_default(_this.ref.current, e)) return;
      _this.setState({
        open: false
      });
      invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
        open: false
      }));
    };
    _this.handleIconOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e) {
          invoke_default(predefinedProps, "onClick", e);
          _this.handleClose(e);
        }
      };
    };
    _this.handleOpen = function(e) {
      invoke_default(_this.props, "onOpen", e, _extends({}, _this.props, {
        open: true
      }));
      _this.setState({
        open: true
      });
    };
    _this.handlePortalMount = function(e) {
      var eventPool = _this.props.eventPool;
      _this.setState({
        scrolling: false
      });
      _this.setPositionAndClassNames();
      eventStack_default.sub("mousedown", _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack_default.sub("click", _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      invoke_default(_this.props, "onMount", e, _this.props);
    };
    _this.handlePortalUnmount = function(e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);
      eventStack_default.unsub("mousedown", _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack_default.unsub("click", _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      invoke_default(_this.props, "onUnmount", e, _this.props);
    };
    _this.setPositionAndClassNames = function() {
      var centered = _this.props.centered;
      var scrolling;
      var newState = {};
      if (_this.ref.current) {
        var rect = _this.ref.current.getBoundingClientRect();
        var isFitted = canFit(rect);
        scrolling = !isFitted;
        var legacyStyles = _this.legacy ? getLegacyStyles(isFitted, centered, rect) : {};
        if (!(0, import_shallowequal.default)(_this.state.legacyStyles, legacyStyles)) {
          newState.legacyStyles = legacyStyles;
        }
        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }
      }
      if (!isEmpty_default(newState)) _this.setState(newState);
      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);
    };
    _this.renderContent = function(rest) {
      var _this$props = _this.props, actions = _this$props.actions, basic = _this$props.basic, children = _this$props.children, className = _this$props.className, closeIcon = _this$props.closeIcon, content = _this$props.content, header = _this$props.header, size2 = _this$props.size, style = _this$props.style;
      var _this$state = _this.state, legacyStyles = _this$state.legacyStyles, scrolling = _this$state.scrolling;
      var classes = clsx_m_default("ui", size2, useKeyOnly(basic, "basic"), useKeyOnly(_this.legacy, "legacy"), useKeyOnly(scrolling, "scrolling"), "modal transition visible active", className);
      var ElementType = getElementType_default(Modal2, _this.props);
      var closeIconName = closeIcon === true ? "close" : closeIcon;
      var closeIconJSX = Icon_default.create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });
      return import_react27.default.createElement(Ref, {
        innerRef: _this.ref
      }, import_react27.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        style: _extends({}, legacyStyles, style)
      }), closeIconJSX, childrenUtils_exports.isNil(children) ? import_react27.default.createElement(import_react27.default.Fragment, null, ModalHeader_default.create(header, {
        autoGenerateKey: false
      }), ModalContent_default.create(content, {
        autoGenerateKey: false
      }), ModalActions.create(actions, {
        overrideProps: _this.handleActionsOverrides
      })) : children));
    };
    return _this;
  }
  var _proto = Modal2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.handlePortalUnmount();
  };
  _proto.render = function render() {
    var _this$props2 = this.props, centered = _this$props2.centered, closeOnDocumentClick = _this$props2.closeOnDocumentClick, dimmer = _this$props2.dimmer, eventPool = _this$props2.eventPool, trigger = _this$props2.trigger;
    var _this$state2 = this.state, open = _this$state2.open, scrolling = _this$state2.scrolling;
    var mountNode = this.getMountNode();
    if (!isBrowser_default()) {
      return (0, import_react27.isValidElement)(trigger) ? trigger : null;
    }
    var unhandled = getUnhandledProps_default(Modal2, this.props);
    var portalPropNames = Portal_default.handledProps;
    var rest = reduce_default(unhandled, function(acc, val, key) {
      if (!includes_default(portalPropNames, key)) acc[key] = val;
      return acc;
    }, {});
    var portalProps = pick_default(unhandled, portalPropNames);
    return import_react27.default.createElement(Portal_default, _extends({
      closeOnDocumentClick
    }, portalProps, {
      trigger,
      eventPool,
      mountNode,
      open,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), import_react27.default.createElement(Ref, {
      innerRef: this.dimmerRef
    }, ModalDimmer_default.create(isPlainObject_default(dimmer) ? dimmer : {}, {
      autoGenerateKey: false,
      defaultProps: {
        blurring: dimmer === "blurring",
        inverted: dimmer === "inverted"
      },
      overrideProps: {
        children: this.renderContent(rest),
        centered,
        mountNode,
        scrolling
      }
    })));
  };
  return Modal2;
}(ModernAutoControlledComponent);
Modal.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
Modal.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types23.default.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: customPropTypes_exports.itemShorthand,
  /** A modal can reduce its complexity */
  basic: import_prop_types23.default.bool,
  /** A modal can be vertically centered in the viewport */
  centered: import_prop_types23.default.bool,
  /** Primary content. */
  children: import_prop_types23.default.node,
  /** Additional classes. */
  className: import_prop_types23.default.string,
  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: import_prop_types23.default.oneOfType([import_prop_types23.default.node, import_prop_types23.default.object, import_prop_types23.default.bool]),
  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: import_prop_types23.default.bool,
  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: import_prop_types23.default.bool,
  /** Simple text content for the Modal. */
  content: customPropTypes_exports.itemShorthand,
  /** Initial value of open. */
  defaultOpen: import_prop_types23.default.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: import_prop_types23.default.oneOfType([import_prop_types23.default.bool, import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: import_prop_types23.default.string,
  /** Modal displayed above the content in bold. */
  header: customPropTypes_exports.itemShorthand,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: import_prop_types23.default.any,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: import_prop_types23.default.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: import_prop_types23.default.func,
  /**
   * Called when the modal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types23.default.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: import_prop_types23.default.func,
  /**
   * Called when the modal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types23.default.func,
  /** Controls whether or not the Modal is displayed. */
  open: import_prop_types23.default.bool,
  /** A modal can vary in size */
  size: import_prop_types23.default.oneOf(["mini", "tiny", "small", "large", "fullscreen"]),
  /** Custom styles. */
  style: import_prop_types23.default.object,
  /** Element to be rendered in-place where the modal is defined. */
  trigger: import_prop_types23.default.node
  /**
   * NOTE: Any unhandled props that are defined in Modal are passed-through
   * to the inner Portal.
   */
} : {};
Modal.defaultProps = {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: "Modal"
};
Modal.autoControlledProps = ["open"];
Modal.Actions = ModalActions;
Modal.Content = ModalContent_default;
Modal.Description = ModalDescription_default;
Modal.Dimmer = ModalDimmer_default;
Modal.Header = ModalHeader_default;
var Modal_default = Modal;

// node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js
var Confirm = function(_Component) {
  _inheritsLoose(Confirm2, _Component);
  function Confirm2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleCancel = function(e) {
      invoke_default(_this.props, "onCancel", e, _this.props);
    };
    _this.handleCancelOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          invoke_default(predefinedProps, "onClick", e, buttonProps);
          _this.handleCancel(e);
        }
      };
    };
    _this.handleConfirmOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          invoke_default(predefinedProps, "onClick", e, buttonProps);
          invoke_default(_this.props, "onConfirm", e, _this.props);
        }
      };
    };
    return _this;
  }
  var _proto = Confirm2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, cancelButton = _this$props.cancelButton, confirmButton = _this$props.confirmButton, content = _this$props.content, header = _this$props.header, open = _this$props.open, size2 = _this$props.size;
    var rest = getUnhandledProps_default(Confirm2, this.props);
    var openProp = {};
    if (has_default(this.props, "open")) openProp.open = open;
    return import_react28.default.createElement(Modal_default, _extends({}, rest, openProp, {
      size: size2,
      onClose: this.handleCancel
    }), Modal_default.Header.create(header, {
      autoGenerateKey: false
    }), Modal_default.Content.create(content, {
      autoGenerateKey: false
    }), import_react28.default.createElement(Modal_default.Actions, null, Button_default.create(cancelButton, {
      autoGenerateKey: false,
      overrideProps: this.handleCancelOverrides
    }), Button_default.create(confirmButton, {
      autoGenerateKey: false,
      defaultProps: {
        primary: true
      },
      overrideProps: this.handleConfirmOverrides
    })));
  };
  return Confirm2;
}(import_react28.Component);
Confirm.handledProps = ["cancelButton", "confirmButton", "content", "header", "onCancel", "onConfirm", "open", "size"];
Confirm.propTypes = true ? {
  /** The cancel button text. */
  cancelButton: customPropTypes_exports.itemShorthand,
  /** The OK button text. */
  confirmButton: customPropTypes_exports.itemShorthand,
  /** The ModalContent text. */
  content: customPropTypes_exports.itemShorthand,
  /** The ModalHeader text. */
  header: customPropTypes_exports.itemShorthand,
  /**
   * Called when the Modal is closed without clicking confirm.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onCancel: import_prop_types24.default.func,
  /**
   * Called when the OK button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onConfirm: import_prop_types24.default.func,
  /** Whether or not the modal is visible. */
  open: import_prop_types24.default.bool,
  /** A Confirm can vary in size */
  size: import_prop_types24.default.oneOf(["mini", "tiny", "small", "large", "fullscreen"])
} : {};
Confirm.defaultProps = {
  cancelButton: "Cancel",
  confirmButton: "OK",
  content: "Are you sure?",
  size: "small"
};
var Confirm_default = Confirm;

// node_modules/semantic-ui-react/dist/es/addons/Pagination/Pagination.js
var import_prop_types30 = __toESM(require_prop_types());
var import_react34 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js
var import_prop_types28 = __toESM(require_prop_types());
var import_react32 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js
var import_prop_types25 = __toESM(require_prop_types());
var import_react29 = __toESM(require_react());
function MenuHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(MenuHeader, props);
  var ElementType = getElementType_default(MenuHeader, props);
  return import_react29.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MenuHeader.handledProps = ["as", "children", "className", "content"];
MenuHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types25.default.elementType,
  /** Primary content. */
  children: import_prop_types25.default.node,
  /** Additional classes. */
  className: import_prop_types25.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var MenuHeader_default = MenuHeader;

// node_modules/lodash-es/_basePropertyOf.js
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var basePropertyOf_default = basePropertyOf;

// node_modules/lodash-es/_deburrLetter.js
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf_default(deburredLetters);
var deburrLetter_default = deburrLetter;

// node_modules/lodash-es/deburr.js
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsCombo2 = "[" + rsComboRange3 + "]";
var reComboMark = RegExp(rsCombo2, "g");
function deburr(string) {
  string = toString_default(string);
  return string && string.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
}
var deburr_default = deburr;

// node_modules/lodash-es/_asciiWords.js
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var asciiWords_default = asciiWords;

// node_modules/lodash-es/_hasUnicodeWord.js
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var hasUnicodeWord_default = hasUnicodeWord;

// node_modules/lodash-es/_unicodeWords.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange4 = "\\u0300-\\u036f";
var reComboHalfMarksRange4 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange4 = "\\u20d0-\\u20ff";
var rsComboRange4 = rsComboMarksRange4 + reComboHalfMarksRange4 + rsComboSymbolsRange4;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['’]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo3 = "[" + rsComboRange4 + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo3 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ3 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsEmoji = "(?:" + [rsDingbat, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var unicodeWords_default = unicodeWords;

// node_modules/lodash-es/words.js
function words(string, pattern, guard) {
  string = toString_default(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord_default(string) ? unicodeWords_default(string) : asciiWords_default(string);
  }
  return string.match(pattern) || [];
}
var words_default = words;

// node_modules/lodash-es/_createCompounder.js
var rsApos2 = "['’]";
var reApos = RegExp(rsApos2, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce_default(words_default(deburr_default(string).replace(reApos, "")), callback, "");
  };
}
var createCompounder_default = createCompounder;

// node_modules/lodash-es/_createCaseFirst.js
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_default(string);
    var strSymbols = hasUnicode_default(string) ? stringToArray_default(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice_default(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var createCaseFirst_default = createCaseFirst;

// node_modules/lodash-es/upperFirst.js
var upperFirst = createCaseFirst_default("toUpperCase");
var upperFirst_default = upperFirst;

// node_modules/lodash-es/startCase.js
var startCase = createCompounder_default(function(result, word, index) {
  return result + (index ? " " : "") + upperFirst_default(word);
});
var startCase_default = startCase;

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js
var import_prop_types26 = __toESM(require_prop_types());
var import_react30 = __toESM(require_react());
var MenuItem = function(_Component) {
  _inheritsLoose(MenuItem2, _Component);
  function MenuItem2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (!disabled) invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = MenuItem2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, color = _this$props.color, content = _this$props.content, disabled = _this$props.disabled, fitted = _this$props.fitted, header = _this$props.header, icon = _this$props.icon, link = _this$props.link, name = _this$props.name, onClick = _this$props.onClick, position = _this$props.position;
    var classes = clsx_m_default(color, position, useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(icon === true || icon && !(name || content), "icon"), useKeyOnly(header, "header"), useKeyOnly(link, "link"), useKeyOrValueAndKey(fitted, "fitted"), "item", className);
    var ElementType = getElementType_default(MenuItem2, this.props, function() {
      if (onClick) return "a";
    });
    var rest = getUnhandledProps_default(MenuItem2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react30.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    return import_react30.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), Icon_default.create(icon, {
      autoGenerateKey: false
    }), childrenUtils_exports.isNil(content) ? startCase_default(name) : content);
  };
  return MenuItem2;
}(import_react30.Component);
MenuItem.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
MenuItem.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types26.default.elementType,
  /** A menu item can be active. */
  active: import_prop_types26.default.bool,
  /** Primary content. */
  children: import_prop_types26.default.node,
  /** Additional classes. */
  className: import_prop_types26.default.string,
  /** Additional colors can be specified. */
  color: import_prop_types26.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A menu item can be disabled. */
  disabled: import_prop_types26.default.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: import_prop_types26.default.oneOfType([import_prop_types26.default.bool, import_prop_types26.default.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: import_prop_types26.default.bool,
  /** MenuItem can be only icon. */
  icon: import_prop_types26.default.oneOfType([import_prop_types26.default.bool, customPropTypes_exports.itemShorthand]),
  /** MenuItem index inside Menu. */
  index: import_prop_types26.default.number,
  /** A menu item can be link. */
  link: import_prop_types26.default.bool,
  /** Internal name of the MenuItem. */
  name: import_prop_types26.default.string,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types26.default.func,
  /** A menu item can take left or right position. */
  position: import_prop_types26.default.oneOf(["left", "right"])
} : {};
MenuItem.create = createShorthandFactory(MenuItem, function(val) {
  return {
    content: val,
    name: val
  };
});

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js
var import_prop_types27 = __toESM(require_prop_types());
var import_react31 = __toESM(require_react());
function MenuMenu(props) {
  var children = props.children, className = props.className, content = props.content, position = props.position;
  var classes = clsx_m_default(position, "menu", className);
  var rest = getUnhandledProps_default(MenuMenu, props);
  var ElementType = getElementType_default(MenuMenu, props);
  return import_react31.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MenuMenu.handledProps = ["as", "children", "className", "content", "position"];
MenuMenu.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types27.default.elementType,
  /** Primary content. */
  children: import_prop_types27.default.node,
  /** Additional classes. */
  className: import_prop_types27.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A sub menu can take left or right position. */
  position: import_prop_types27.default.oneOf(["left", "right"])
} : {};
var MenuMenu_default = MenuMenu;

// node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js
var Menu = function(_Component) {
  _inheritsLoose(Menu2, _Component);
  function Menu2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleItemOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          var index = itemProps.index;
          _this.setState({
            activeIndex: index
          });
          invoke_default(predefinedProps, "onClick", e, itemProps);
          invoke_default(_this.props, "onItemClick", e, itemProps);
        }
      };
    };
    return _this;
  }
  var _proto = Menu2.prototype;
  _proto.renderItems = function renderItems() {
    var _this2 = this;
    var items = this.props.items;
    var activeIndex = this.state.activeIndex;
    return map_default(items, function(item, index) {
      return MenuItem.create(item, {
        defaultProps: {
          active: parseInt(activeIndex, 10) === index,
          index
        },
        overrideProps: _this2.handleItemOverrides
      });
    });
  };
  _proto.render = function render() {
    var _this$props = this.props, attached = _this$props.attached, borderless = _this$props.borderless, children = _this$props.children, className = _this$props.className, color = _this$props.color, compact2 = _this$props.compact, fixed = _this$props.fixed, floated = _this$props.floated, fluid = _this$props.fluid, icon = _this$props.icon, inverted = _this$props.inverted, pagination = _this$props.pagination, pointing = _this$props.pointing, secondary = _this$props.secondary, size2 = _this$props.size, stackable = _this$props.stackable, tabular = _this$props.tabular, text = _this$props.text, vertical = _this$props.vertical, widths = _this$props.widths;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(borderless, "borderless"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(inverted, "inverted"), useKeyOnly(pagination, "pagination"), useKeyOnly(pointing, "pointing"), useKeyOnly(secondary, "secondary"), useKeyOnly(stackable, "stackable"), useKeyOnly(text, "text"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(floated, "floated"), useKeyOrValueAndKey(icon, "icon"), useKeyOrValueAndKey(tabular, "tabular"), useValueAndKey(fixed, "fixed"), useWidthProp(widths, "item"), className, "menu");
    var rest = getUnhandledProps_default(Menu2, this.props);
    var ElementType = getElementType_default(Menu2, this.props);
    return import_react32.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? this.renderItems() : children);
  };
  return Menu2;
}(ModernAutoControlledComponent);
Menu.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Menu.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types28.default.elementType,
  /** Index of the currently active item. */
  activeIndex: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
  /** A menu may be attached to other content segments. */
  attached: import_prop_types28.default.oneOfType([import_prop_types28.default.bool, import_prop_types28.default.oneOf(["top", "bottom"])]),
  /** A menu item or menu can have no borders. */
  borderless: import_prop_types28.default.bool,
  /** Primary content. */
  children: import_prop_types28.default.node,
  /** Additional classes. */
  className: import_prop_types28.default.string,
  /** Additional colors can be specified. */
  color: import_prop_types28.default.oneOf(SUI_exports.COLORS),
  /** A menu can take up only the space necessary to fit its content. */
  compact: import_prop_types28.default.bool,
  /** Initial activeIndex value. */
  defaultActiveIndex: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
  /** A menu can be fixed to a side of its context. */
  fixed: import_prop_types28.default.oneOf(["left", "right", "bottom", "top"]),
  /** A menu can be floated. */
  floated: import_prop_types28.default.oneOfType([import_prop_types28.default.bool, import_prop_types28.default.oneOf(["right"])]),
  /** A vertical menu may take the size of its container. */
  fluid: import_prop_types28.default.bool,
  /** A menu may have just icons (bool) or labeled icons. */
  icon: import_prop_types28.default.oneOfType([import_prop_types28.default.bool, import_prop_types28.default.oneOf(["labeled"])]),
  /** A menu may have its colors inverted to show greater contrast. */
  inverted: import_prop_types28.default.bool,
  /** Shorthand array of props for Menu. */
  items: customPropTypes_exports.collectionShorthand,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types28.default.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: import_prop_types28.default.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: import_prop_types28.default.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: import_prop_types28.default.bool,
  /** A menu can vary in size. */
  size: import_prop_types28.default.oneOf(without_default(SUI_exports.SIZES, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: import_prop_types28.default.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: import_prop_types28.default.oneOfType([import_prop_types28.default.bool, import_prop_types28.default.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: import_prop_types28.default.bool,
  /** A vertical menu displays elements vertically. */
  vertical: import_prop_types28.default.bool,
  /** A menu can have its items divided evenly. */
  widths: import_prop_types28.default.oneOf(SUI_exports.WIDTHS)
} : {};
Menu.autoControlledProps = ["activeIndex"];
Menu.Header = MenuHeader_default;
Menu.Item = MenuItem;
Menu.Menu = MenuMenu_default;
Menu.create = createShorthandFactory(Menu, function(items) {
  return {
    items
  };
});
var Menu_default = Menu;

// node_modules/semantic-ui-react/dist/es/addons/Pagination/PaginationItem.js
var import_keyboard_key2 = __toESM(require_keyboardKey());
var import_prop_types29 = __toESM(require_prop_types());
var import_react33 = __toESM(require_react());
var PaginationItem = function(_Component) {
  _inheritsLoose(PaginationItem2, _Component);
  function PaginationItem2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    _this.handleKeyDown = function(e) {
      invoke_default(_this.props, "onKeyDown", e, _this.props);
      if (import_keyboard_key2.default.getCode(e) === import_keyboard_key2.default.Enter) invoke_default(_this.props, "onClick", e, _this.props);
    };
    _this.handleOverrides = function() {
      return {
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown
      };
    };
    return _this;
  }
  var _proto = PaginationItem2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, type = _this$props.type;
    var disabled = this.props.disabled || type === "ellipsisItem";
    return MenuItem.create(this.props, {
      defaultProps: {
        active,
        "aria-current": active,
        "aria-disabled": disabled,
        disabled,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: disabled ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  };
  return PaginationItem2;
}(import_react33.Component);
PaginationItem.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
PaginationItem.propTypes = true ? {
  /** A pagination item can be active. */
  active: import_prop_types29.default.bool,
  /** A pagination item can be disabled. */
  disabled: import_prop_types29.default.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types29.default.func,
  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: import_prop_types29.default.func,
  /** A pagination should have a type. */
  type: import_prop_types29.default.oneOf(["ellipsisItem", "firstItem", "prevItem", "pageItem", "nextItem", "lastItem"])
} : {};
PaginationItem.create = createShorthandFactory(PaginationItem, function(content) {
  return {
    content
  };
});
var PaginationItem_default = PaginationItem;

// node_modules/semantic-ui-react/dist/es/addons/Pagination/Pagination.js
var Pagination = function(_Component) {
  _inheritsLoose(Pagination2, _Component);
  function Pagination2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleItemClick = function(e, _ref) {
      var nextActivePage = _ref.value;
      var prevActivePage = _this.state.activePage;
      if (+prevActivePage === +nextActivePage) return;
      _this.setState({
        activePage: nextActivePage
      });
      invoke_default(_this.props, "onPageChange", e, _extends({}, _this.props, {
        activePage: nextActivePage
      }));
    };
    _this.handleItemOverrides = function(active, type, value) {
      return function(predefinedProps) {
        return {
          active,
          type,
          key: type + "-" + value,
          onClick: function onClick(e, itemProps) {
            invoke_default(predefinedProps, "onClick", e, itemProps);
            if (itemProps.type !== "ellipsisItem") _this.handleItemClick(e, itemProps);
          }
        };
      };
    };
    return _this;
  }
  var _proto = Pagination2.prototype;
  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      activePage: 1
    };
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, ariaLabel = _this$props["aria-label"], boundaryRange = _this$props.boundaryRange, disabled = _this$props.disabled, ellipsisItem = _this$props.ellipsisItem, siblingRange = _this$props.siblingRange, totalPages = _this$props.totalPages;
    var activePage = this.state.activePage;
    var items = createPaginationItems_default({
      activePage,
      boundaryRange,
      hideEllipsis: isNil_default(ellipsisItem),
      siblingRange,
      totalPages
    });
    var rest = getUnhandledProps_default(Pagination2, this.props);
    return import_react34.default.createElement(Menu_default, _extends({}, rest, {
      "aria-label": ariaLabel,
      pagination: true,
      role: "navigation"
    }), map_default(items, function(_ref2) {
      var active = _ref2.active, type = _ref2.type, value = _ref2.value;
      return PaginationItem_default.create(_this2.props[type], {
        defaultProps: {
          content: value,
          disabled,
          value
        },
        overrideProps: _this2.handleItemOverrides(active, type, value)
      });
    }));
  };
  return Pagination2;
}(ModernAutoControlledComponent);
Pagination.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Pagination.propTypes = true ? {
  /** A pagination item can have an aria label. */
  "aria-label": import_prop_types30.default.string,
  /** Initial activePage value. */
  defaultActivePage: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
  /** Index of the currently active page. */
  activePage: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
  /** Number of always visible pages at the beginning and end. */
  boundaryRange: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
  /** A pagination can be disabled. */
  disabled: import_prop_types30.default.bool,
  /** A shorthand for PaginationItem. */
  ellipsisItem: customPropTypes_exports.itemShorthand,
  /** A shorthand for PaginationItem. */
  firstItem: customPropTypes_exports.itemShorthand,
  /** A shorthand for PaginationItem. */
  lastItem: customPropTypes_exports.itemShorthand,
  /** A shorthand for PaginationItem. */
  nextItem: customPropTypes_exports.itemShorthand,
  /** A shorthand for PaginationItem. */
  pageItem: customPropTypes_exports.itemShorthand,
  /** A shorthand for PaginationItem. */
  prevItem: customPropTypes_exports.itemShorthand,
  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: import_prop_types30.default.func,
  /** Number of always visible pages before and after the current one. */
  siblingRange: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
  /** Total number of pages. */
  totalPages: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]).isRequired
} : {};
Pagination.autoControlledProps = ["activePage"];
Pagination.defaultProps = {
  "aria-label": "Pagination Navigation",
  boundaryRange: 1,
  ellipsisItem: "...",
  firstItem: {
    "aria-label": "First item",
    content: "«"
  },
  lastItem: {
    "aria-label": "Last item",
    content: "»"
  },
  nextItem: {
    "aria-label": "Next item",
    content: "⟩"
  },
  pageItem: {},
  prevItem: {
    "aria-label": "Previous item",
    content: "⟨"
  },
  siblingRange: 1
};
Pagination.Item = PaginationItem_default;

// node_modules/semantic-ui-react/dist/es/addons/Radio/Radio.js
var import_react36 = __toESM(require_react());

// node_modules/lodash-es/set.js
function set(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set;

// node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js
var import_prop_types31 = __toESM(require_prop_types());
var import_react35 = __toESM(require_react());
var Checkbox = function(_Component) {
  _inheritsLoose(Checkbox2, _Component);
  function Checkbox2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inputRef = (0, import_react35.createRef)();
    _this.labelRef = (0, import_react35.createRef)();
    _this.canToggle = function() {
      var _this$props = _this.props, disabled = _this$props.disabled, radio = _this$props.radio, readOnly = _this$props.readOnly;
      var checked = _this.state.checked;
      return !disabled && !readOnly && !(radio && checked);
    };
    _this.computeTabIndex = function() {
      var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
      if (!isNil_default(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    };
    _this.handleClick = function(e) {
      var id = _this.props.id;
      var _this$state = _this.state, checked = _this$state.checked, indeterminate = _this$state.indeterminate;
      var isInputClick = invoke_default(_this.inputRef.current, "contains", e.target);
      var isLabelClick = invoke_default(_this.labelRef.current, "contains", e.target);
      var isRootClick = !isLabelClick && !isInputClick;
      var hasId = !isNil_default(id);
      var isLabelClickAndForwardedToInput = isLabelClick && hasId;
      if (!isLabelClickAndForwardedToInput) {
        invoke_default(_this.props, "onClick", e, _extends({}, _this.props, {
          checked: !checked,
          indeterminate: !!indeterminate
        }));
      }
      if (_this.isClickFromMouse) {
        _this.isClickFromMouse = false;
        if (isLabelClick && !hasId) {
          _this.handleChange(e);
        }
        if (isRootClick) {
          _this.handleChange(e);
        }
        if (isLabelClick && hasId) {
          e.stopPropagation();
        }
      }
    };
    _this.handleChange = function(e) {
      var checked = _this.state.checked;
      if (!_this.canToggle()) return;
      invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
        checked: !checked,
        indeterminate: false
      }));
      _this.setState({
        checked: !checked,
        indeterminate: false
      });
    };
    _this.handleMouseDown = function(e) {
      var _this$state2 = _this.state, checked = _this$state2.checked, indeterminate = _this$state2.indeterminate;
      invoke_default(_this.props, "onMouseDown", e, _extends({}, _this.props, {
        checked: !!checked,
        indeterminate: !!indeterminate
      }));
      if (!e.defaultPrevented) {
        invoke_default(_this.inputRef.current, "focus");
      }
      e.preventDefault();
    };
    _this.handleMouseUp = function(e) {
      var _this$state3 = _this.state, checked = _this$state3.checked, indeterminate = _this$state3.indeterminate;
      _this.isClickFromMouse = true;
      invoke_default(_this.props, "onMouseUp", e, _extends({}, _this.props, {
        checked: !!checked,
        indeterminate: !!indeterminate
      }));
    };
    _this.setIndeterminate = function() {
      var indeterminate = _this.state.indeterminate;
      set_default(_this.inputRef, "current.indeterminate", !!indeterminate);
    };
    return _this;
  }
  var _proto = Checkbox2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.setIndeterminate();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.setIndeterminate();
  };
  _proto.render = function render() {
    var _this$props3 = this.props, className = _this$props3.className, disabled = _this$props3.disabled, label = _this$props3.label, id = _this$props3.id, name = _this$props3.name, radio = _this$props3.radio, readOnly = _this$props3.readOnly, slider = _this$props3.slider, toggle = _this$props3.toggle, type = _this$props3.type, value = _this$props3.value;
    var _this$state4 = this.state, checked = _this$state4.checked, indeterminate = _this$state4.indeterminate;
    var classes = clsx_m_default(
      "ui",
      useKeyOnly(checked, "checked"),
      useKeyOnly(disabled, "disabled"),
      useKeyOnly(indeterminate, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(isNil_default(label), "fitted"),
      useKeyOnly(radio, "radio"),
      useKeyOnly(readOnly, "read-only"),
      useKeyOnly(slider, "slider"),
      useKeyOnly(toggle, "toggle"),
      "checkbox",
      className
    );
    var unhandled = getUnhandledProps_default(Checkbox2, this.props);
    var ElementType = getElementType_default(Checkbox2, this.props);
    var _partitionHTMLProps = partitionHTMLProps(unhandled, {
      htmlProps: htmlInputAttrs
    }), htmlInputProps2 = _partitionHTMLProps[0], rest = _partitionHTMLProps[1];
    var labelElement = createHTMLLabel(label, {
      defaultProps: {
        htmlFor: id
      },
      autoGenerateKey: false
    }) || import_react35.default.createElement("label", {
      htmlFor: id
    });
    return import_react35.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), import_react35.default.createElement(Ref, {
      innerRef: this.inputRef
    }, import_react35.default.createElement("input", _extends({}, htmlInputProps2, {
      checked,
      className: "hidden",
      disabled,
      id,
      name,
      readOnly: true,
      tabIndex: this.computeTabIndex(),
      type,
      value
    }))), import_react35.default.createElement(Ref, {
      innerRef: this.labelRef
    }, labelElement));
  };
  return Checkbox2;
}(ModernAutoControlledComponent);
Checkbox.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Checkbox.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types31.default.elementType,
  /** Whether or not checkbox is checked. */
  checked: import_prop_types31.default.bool,
  /** Additional classes. */
  className: import_prop_types31.default.string,
  /** The initial value of checked. */
  defaultChecked: import_prop_types31.default.bool,
  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: import_prop_types31.default.bool,
  /** A checkbox can appear disabled and be unable to change states */
  disabled: import_prop_types31.default.bool,
  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: import_prop_types31.default.bool,
  /** A unique identifier. */
  id: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /** Whether or not checkbox is indeterminate. */
  indeterminate: import_prop_types31.default.bool,
  /** The text of the associated label element. */
  label: customPropTypes_exports.itemShorthand,
  /** The HTML input name. */
  name: import_prop_types31.default.string,
  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: import_prop_types31.default.func,
  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: import_prop_types31.default.func,
  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: import_prop_types31.default.func,
  /**
   * Called when the user releases the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseUp: import_prop_types31.default.func,
  /** Format as a radio element. This means it is an exclusive option. */
  radio: customPropTypes_exports.every([import_prop_types31.default.bool, customPropTypes_exports.disallow(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: import_prop_types31.default.bool,
  /** Format to emphasize the current selection state. */
  slider: customPropTypes_exports.every([import_prop_types31.default.bool, customPropTypes_exports.disallow(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /** Format to show an on or off choice. */
  toggle: customPropTypes_exports.every([import_prop_types31.default.bool, customPropTypes_exports.disallow(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: import_prop_types31.default.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: import_prop_types31.default.oneOfType([import_prop_types31.default.string, import_prop_types31.default.number])
} : {};
Checkbox.defaultProps = {
  type: "checkbox"
};
Checkbox.autoControlledProps = ["checked", "indeterminate"];

// node_modules/semantic-ui-react/dist/es/addons/Radio/Radio.js
function Radio(props) {
  var slider = props.slider, toggle = props.toggle, type = props.type;
  var rest = getUnhandledProps_default(Radio, props);
  var radio = !(slider || toggle) || void 0;
  return import_react36.default.createElement(Checkbox, _extends({}, rest, {
    type,
    radio,
    slider,
    toggle
  }));
}
Radio.handledProps = ["slider", "toggle", "type"];
Radio.propTypes = true ? {
  /** Format to emphasize the current selection state. */
  slider: Checkbox.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Checkbox.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Checkbox.propTypes.type
} : {};
Radio.defaultProps = {
  type: "radio"
};
var Radio_default = Radio;

// node_modules/semantic-ui-react/dist/es/addons/Select/Select.js
var import_prop_types40 = __toESM(require_prop_types());
var import_react46 = __toESM(require_react());

// node_modules/lodash-es/compact.js
function compact(array) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var compact_default = compact;

// node_modules/lodash-es/_arrayEvery.js
function arrayEvery(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}
var arrayEvery_default = arrayEvery;

// node_modules/lodash-es/_baseEvery.js
function baseEvery(collection, predicate) {
  var result = true;
  baseEach_default(collection, function(value, index, collection2) {
    result = !!predicate(value, index, collection2);
    return result;
  });
  return result;
}
var baseEvery_default = baseEvery;

// node_modules/lodash-es/every.js
function every3(collection, predicate, guard) {
  var func = isArray_default(collection) ? arrayEvery_default : baseEvery_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var every_default = every3;

// node_modules/lodash-es/dropRight.js
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger_default(n);
  n = length - n;
  return baseSlice_default(array, 0, n < 0 ? 0 : n);
}
var dropRight_default = dropRight;

// node_modules/lodash-es/_asciiSize.js
var asciiSize = baseProperty_default("length");
var asciiSize_default = asciiSize;

// node_modules/lodash-es/_unicodeSize.js
var rsAstralRange4 = "\\ud800-\\udfff";
var rsComboMarksRange5 = "\\u0300-\\u036f";
var reComboHalfMarksRange5 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange5 = "\\u20d0-\\u20ff";
var rsComboRange5 = rsComboMarksRange5 + reComboHalfMarksRange5 + rsComboSymbolsRange5;
var rsVarRange4 = "\\ufe0e\\ufe0f";
var rsAstral2 = "[" + rsAstralRange4 + "]";
var rsCombo4 = "[" + rsComboRange5 + "]";
var rsFitz3 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier3 = "(?:" + rsCombo4 + "|" + rsFitz3 + ")";
var rsNonAstral3 = "[^" + rsAstralRange4 + "]";
var rsRegional3 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair3 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ4 = "\\u200d";
var reOptMod3 = rsModifier3 + "?";
var rsOptVar3 = "[" + rsVarRange4 + "]?";
var rsOptJoin3 = "(?:" + rsZWJ4 + "(?:" + [rsNonAstral3, rsRegional3, rsSurrPair3].join("|") + ")" + rsOptVar3 + reOptMod3 + ")*";
var rsSeq3 = rsOptVar3 + reOptMod3 + rsOptJoin3;
var rsSymbol2 = "(?:" + [rsNonAstral3 + rsCombo4 + "?", rsCombo4, rsRegional3, rsSurrPair3, rsAstral2].join("|") + ")";
var reUnicode2 = RegExp(rsFitz3 + "(?=" + rsFitz3 + ")|" + rsSymbol2 + rsSeq3, "g");
function unicodeSize(string) {
  var result = reUnicode2.lastIndex = 0;
  while (reUnicode2.test(string)) {
    ++result;
  }
  return result;
}
var unicodeSize_default = unicodeSize;

// node_modules/lodash-es/_stringSize.js
function stringSize(string) {
  return hasUnicode_default(string) ? unicodeSize_default(string) : asciiSize_default(string);
}
var stringSize_default = stringSize;

// node_modules/lodash-es/size.js
var mapTag5 = "[object Map]";
var setTag5 = "[object Set]";
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike_default(collection)) {
    return isString_default(collection) ? stringSize_default(collection) : collection.length;
  }
  var tag = getTag_default(collection);
  if (tag == mapTag5 || tag == setTag5) {
    return collection.size;
  }
  return baseKeys_default(collection).length;
}
var size_default = size;

// node_modules/lodash-es/union.js
var union = baseRest_default(function(arrays) {
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true));
});
var union_default = union;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js
var import_event_stack3 = __toESM(require_lib());
var import_keyboard_key3 = __toESM(require_keyboardKey());
var import_prop_types39 = __toESM(require_prop_types());
var import_react45 = __toESM(require_react());
var import_shallowequal2 = __toESM(require_shallowequal());

// node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js
var import_prop_types32 = __toESM(require_prop_types());
var import_react37 = __toESM(require_react());
var names = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"];
var Flag = function(_PureComponent) {
  _inheritsLoose(Flag2, _PureComponent);
  function Flag2() {
    return _PureComponent.apply(this, arguments) || this;
  }
  var _proto = Flag2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, className = _this$props.className, name = _this$props.name;
    var classes = clsx_m_default(name, "flag", className);
    var rest = getUnhandledProps_default(Flag2, this.props);
    var ElementType = getElementType_default(Flag2, this.props);
    return import_react37.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }));
  };
  return Flag2;
}(import_react37.PureComponent);
Flag.handledProps = ["as", "className", "name"];
Flag.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types32.default.elementType,
  /** Additional classes. */
  className: import_prop_types32.default.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: customPropTypes_exports.suggest(names)
} : {};
Flag.defaultProps = {
  as: "i"
};
Flag.create = createShorthandFactory(Flag, function(value) {
  return {
    name: value
  };
});
var Flag_default = Flag;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js
var import_prop_types33 = __toESM(require_prop_types());
var import_react38 = __toESM(require_react());
function DropdownDivider(props) {
  var className = props.className;
  var classes = clsx_m_default("divider", className);
  var rest = getUnhandledProps_default(DropdownDivider, props);
  var ElementType = getElementType_default(DropdownDivider, props);
  return import_react38.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}
DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types33.default.elementType,
  /** Additional classes. */
  className: import_prop_types33.default.string
} : {};
var DropdownDivider_default = DropdownDivider;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js
var import_prop_types34 = __toESM(require_prop_types());
var import_react39 = __toESM(require_react());
var DropdownItem = function(_Component) {
  _inheritsLoose(DropdownItem2, _Component);
  function DropdownItem2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = DropdownItem2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, disabled = _this$props.disabled, description = _this$props.description, flag = _this$props.flag, icon = _this$props.icon, image = _this$props.image, label = _this$props.label, selected = _this$props.selected, text = _this$props.text;
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(selected, "selected"), "item", className);
    var iconName = isNil_default(icon) ? childrenUtils_exports.someByType(children, "DropdownMenu") && "dropdown" : icon;
    var rest = getUnhandledProps_default(DropdownItem2, this.props);
    var ElementType = getElementType_default(DropdownItem2, this.props);
    var ariaOptions = {
      role: "option",
      "aria-disabled": disabled,
      "aria-checked": active,
      "aria-selected": selected
    };
    if (!childrenUtils_exports.isNil(children)) {
      return import_react39.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    var flagElement = Flag_default.create(flag, {
      autoGenerateKey: false
    });
    var iconElement = Icon_default.create(iconName, {
      autoGenerateKey: false
    });
    var imageElement = Image_default.create(image, {
      autoGenerateKey: false
    });
    var labelElement = Label.create(label, {
      autoGenerateKey: false
    });
    var descriptionElement = createShorthand("span", function(val) {
      return {
        children: val
      };
    }, description, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: false
    });
    var textElement = createShorthand("span", function(val) {
      return {
        children: val
      };
    }, childrenUtils_exports.isNil(content) ? text : content, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: false
    });
    return import_react39.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
  };
  return DropdownItem2;
}(import_react39.Component);
DropdownItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
DropdownItem.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types34.default.elementType,
  /** Style as the currently chosen item. */
  active: import_prop_types34.default.bool,
  /** Primary content. */
  children: import_prop_types34.default.node,
  /** Additional classes. */
  className: import_prop_types34.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Additional text with less emphasis. */
  description: customPropTypes_exports.itemShorthand,
  /** A dropdown item can be disabled. */
  disabled: import_prop_types34.default.bool,
  /** Shorthand for Flag. */
  flag: customPropTypes_exports.itemShorthand,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand,
  /** Shorthand for Image. */
  image: customPropTypes_exports.itemShorthand,
  /** Shorthand for Label. */
  label: customPropTypes_exports.itemShorthand,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types34.default.func,
  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: import_prop_types34.default.bool,
  /** Display text. */
  text: customPropTypes_exports.contentShorthand,
  /** Stored value. */
  value: import_prop_types34.default.oneOfType([import_prop_types34.default.bool, import_prop_types34.default.number, import_prop_types34.default.string])
} : {};
DropdownItem.create = createShorthandFactory(DropdownItem, function(opts) {
  return opts;
});
var DropdownItem_default = DropdownItem;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js
var import_prop_types35 = __toESM(require_prop_types());
var import_react40 = __toESM(require_react());
function DropdownHeader(props) {
  var children = props.children, className = props.className, content = props.content, icon = props.icon;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(DropdownHeader, props);
  var ElementType = getElementType_default(DropdownHeader, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react40.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react40.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon_default.create(icon, {
    autoGenerateKey: false
  }), content);
}
DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
DropdownHeader.propTypes = true ? {
  /** An element type to render as (string or function) */
  as: import_prop_types35.default.elementType,
  /** Primary content. */
  children: import_prop_types35.default.node,
  /** Additional classes. */
  className: import_prop_types35.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand
} : {};
DropdownHeader.create = createShorthandFactory(DropdownHeader, function(content) {
  return {
    content
  };
});
var DropdownHeader_default = DropdownHeader;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js
var import_prop_types36 = __toESM(require_prop_types());
var import_react41 = __toESM(require_react());
function DropdownMenu(props) {
  var children = props.children, className = props.className, content = props.content, direction = props.direction, open = props.open, scrolling = props.scrolling;
  var classes = clsx_m_default(direction, useKeyOnly(open, "visible"), useKeyOnly(scrolling, "scrolling"), "menu transition", className);
  var rest = getUnhandledProps_default(DropdownMenu, props);
  var ElementType = getElementType_default(DropdownMenu, props);
  return import_react41.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
DropdownMenu.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types36.default.elementType,
  /** Primary content. */
  children: import_prop_types36.default.node,
  /** Additional classes. */
  className: import_prop_types36.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A dropdown menu can open to the left or to the right. */
  direction: import_prop_types36.default.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: import_prop_types36.default.bool,
  /** A dropdown menu can scroll. */
  scrolling: import_prop_types36.default.bool
} : {};
var DropdownMenu_default = DropdownMenu;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js
var import_prop_types37 = __toESM(require_prop_types());
var import_react42 = __toESM(require_react());
var DropdownSearchInput = function(_Component) {
  _inheritsLoose(DropdownSearchInput2, _Component);
  function DropdownSearchInput2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleChange = function(e) {
      var value = get_default(e, "target.value");
      invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
        value
      }));
    };
    return _this;
  }
  var _proto = DropdownSearchInput2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, autoComplete = _this$props.autoComplete, className = _this$props.className, tabIndex = _this$props.tabIndex, type = _this$props.type, value = _this$props.value;
    var classes = clsx_m_default("search", className);
    var rest = getUnhandledProps_default(DropdownSearchInput2, this.props);
    return import_react42.default.createElement("input", _extends({}, rest, {
      "aria-autocomplete": "list",
      autoComplete,
      className: classes,
      onChange: this.handleChange,
      tabIndex,
      type,
      value
    }));
  };
  return DropdownSearchInput2;
}(import_react42.Component);
DropdownSearchInput.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
DropdownSearchInput.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types37.default.elementType,
  /** An input can have the auto complete. */
  autoComplete: import_prop_types37.default.string,
  /** Additional classes. */
  className: import_prop_types37.default.string,
  /** An input can receive focus. */
  tabIndex: import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string]),
  /** The HTML input type. */
  type: import_prop_types37.default.string,
  /** Stored value. */
  value: import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string])
} : {};
DropdownSearchInput.defaultProps = {
  autoComplete: "off",
  type: "text"
};
DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function(type) {
  return {
    type
  };
});
var DropdownSearchInput_default = DropdownSearchInput;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownText.js
var import_prop_types38 = __toESM(require_prop_types());
var import_react43 = __toESM(require_react());
function DropdownText(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("divider", className);
  var rest = getUnhandledProps_default(DropdownText, props);
  var ElementType = getElementType_default(DropdownText, props);
  return import_react43.default.createElement(ElementType, _extends({
    "aria-atomic": true,
    "aria-live": "polite",
    role: "alert"
  }, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
DropdownText.handledProps = ["as", "children", "className", "content"];
DropdownText.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types38.default.elementType,
  /** Primary content. */
  children: import_prop_types38.default.node,
  /** Additional classes. */
  className: import_prop_types38.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
DropdownText.create = createShorthandFactory(DropdownText, function(val) {
  return {
    content: val
  };
});
var DropdownText_default = DropdownText;

// node_modules/lodash-es/escapeRegExp.js
var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = RegExp(reRegExpChar2.source);
function escapeRegExp(string) {
  string = toString_default(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
}
var escapeRegExp_default = escapeRegExp;

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/utils/getMenuOptions.js
var import_react44 = __toESM(require_react());
function getMenuOptions(config) {
  var additionLabel = config.additionLabel, additionPosition = config.additionPosition, allowAdditions = config.allowAdditions, deburr2 = config.deburr, multiple = config.multiple, options = config.options, search = config.search, searchQuery = config.searchQuery, value = config.value;
  var filteredOptions = options;
  if (multiple) {
    filteredOptions = filter_default(filteredOptions, function(opt) {
      return !includes_default(value, opt.value);
    });
  }
  if (search && searchQuery) {
    if (isFunction_default(search)) {
      filteredOptions = search(filteredOptions, searchQuery);
    } else {
      var strippedQuery = deburr2 ? deburr_default(searchQuery) : searchQuery;
      var re = new RegExp(escapeRegExp_default(strippedQuery), "i");
      filteredOptions = filter_default(filteredOptions, function(opt) {
        return re.test(deburr2 ? deburr_default(opt.text) : opt.text);
      });
    }
  }
  if (allowAdditions && search && searchQuery && !some_default(filteredOptions, {
    text: searchQuery
  })) {
    var additionLabelElement = import_react44.default.isValidElement(additionLabel) ? import_react44.default.cloneElement(additionLabel, {
      key: "addition-label"
    }) : additionLabel || "";
    var addItem = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [additionLabelElement, import_react44.default.createElement("b", {
        key: "addition-query"
      }, searchQuery)],
      value: searchQuery,
      className: "addition",
      "data-additional": true
    };
    if (additionPosition === "top") filteredOptions.unshift(addItem);
    else filteredOptions.push(addItem);
  }
  return filteredOptions;
}
getMenuOptions.handledProps = [];

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/utils/getSelectedIndex.js
function getSelectedIndex(config) {
  var additionLabel = config.additionLabel, additionPosition = config.additionPosition, allowAdditions = config.allowAdditions, deburr2 = config.deburr, multiple = config.multiple, options = config.options, search = config.search, searchQuery = config.searchQuery, selectedIndex = config.selectedIndex, value = config.value;
  var menuOptions = getMenuOptions({
    value,
    options,
    searchQuery,
    additionLabel,
    additionPosition,
    allowAdditions,
    deburr: deburr2,
    multiple,
    search
  });
  var enabledIndexes = reduce_default(menuOptions, function(memo, item, index) {
    if (!item.disabled) memo.push(index);
    return memo;
  }, []);
  var newSelectedIndex;
  if (!selectedIndex || selectedIndex < 0) {
    var firstIndex = enabledIndexes[0];
    newSelectedIndex = multiple ? firstIndex : findIndex_default(menuOptions, ["value", value]) || enabledIndexes[0];
  } else if (multiple) {
    newSelectedIndex = find_default(enabledIndexes, function(index) {
      return index >= selectedIndex;
    });
    if (selectedIndex >= menuOptions.length - 1) {
      newSelectedIndex = enabledIndexes[enabledIndexes.length - 1];
    }
  } else {
    var activeIndex = findIndex_default(menuOptions, ["value", value]);
    newSelectedIndex = includes_default(enabledIndexes, activeIndex) ? activeIndex : void 0;
  }
  if (!newSelectedIndex || newSelectedIndex < 0) {
    newSelectedIndex = enabledIndexes[0];
  }
  return newSelectedIndex;
}

// node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js
var getKeyOrValue = function getKeyOrValue2(key, value) {
  return isNil_default(key) ? value : key;
};
var getKeyAndValues = function getKeyAndValues2(options) {
  return options ? options.map(function(option) {
    return pick_default(option, ["key", "value"]);
  }) : options;
};
function renderItemContent(item) {
  var flag = item.flag, image = item.image, text = item.text;
  if (isFunction_default(text)) {
    return text;
  }
  return {
    content: import_react45.default.createElement(import_react45.default.Fragment, null, Flag_default.create(flag), Image_default.create(image), text)
  };
}
var Dropdown = function(_Component) {
  _inheritsLoose(Dropdown2, _Component);
  function Dropdown2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.searchRef = (0, import_react45.createRef)();
    _this.sizerRef = (0, import_react45.createRef)();
    _this.ref = (0, import_react45.createRef)();
    _this.handleChange = function(e, value) {
      invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
        value
      }));
    };
    _this.closeOnChange = function(e) {
      var _this$props = _this.props, closeOnChange = _this$props.closeOnChange, multiple = _this$props.multiple;
      var shouldClose = isUndefined_default(closeOnChange) ? !multiple : closeOnChange;
      if (shouldClose) {
        _this.close(e, noop_default);
      }
    };
    _this.closeOnEscape = function(e) {
      if (!_this.props.closeOnEscape) return;
      if (import_keyboard_key3.default.getCode(e) !== import_keyboard_key3.default.Escape) return;
      e.preventDefault();
      _this.close(e);
    };
    _this.moveSelectionOnKeyDown = function(e) {
      var _moves;
      var _this$props2 = _this.props, multiple = _this$props2.multiple, selectOnNavigation = _this$props2.selectOnNavigation;
      var open = _this.state.open;
      if (!open) {
        return;
      }
      var moves = (_moves = {}, _moves[import_keyboard_key3.default.ArrowDown] = 1, _moves[import_keyboard_key3.default.ArrowUp] = -1, _moves);
      var move = moves[import_keyboard_key3.default.getCode(e)];
      if (move === void 0) {
        return;
      }
      e.preventDefault();
      var nextIndex = _this.getSelectedIndexAfterMove(move);
      if (!multiple && selectOnNavigation) {
        _this.makeSelectedItemActive(e, nextIndex);
      }
      _this.setState({
        selectedIndex: nextIndex
      });
    };
    _this.openOnSpace = function(e) {
      var _e$target, _e$target2, _e$target3;
      var shouldHandleEvent = _this.state.focus && !_this.state.open && import_keyboard_key3.default.getCode(e) === import_keyboard_key3.default.Spacebar;
      var shouldPreventDefault = ((_e$target = e.target) == null ? void 0 : _e$target.tagName) !== "INPUT" && ((_e$target2 = e.target) == null ? void 0 : _e$target2.tagName) !== "TEXTAREA" && ((_e$target3 = e.target) == null ? void 0 : _e$target3.isContentEditable) !== true;
      if (shouldHandleEvent) {
        if (shouldPreventDefault) {
          e.preventDefault();
        }
        _this.open(e);
      }
    };
    _this.openOnArrow = function(e) {
      var _this$state = _this.state, focus = _this$state.focus, open = _this$state.open;
      if (focus && !open) {
        var code = import_keyboard_key3.default.getCode(e);
        if (code === import_keyboard_key3.default.ArrowDown || code === import_keyboard_key3.default.ArrowUp) {
          e.preventDefault();
          _this.open(e);
        }
      }
    };
    _this.makeSelectedItemActive = function(e, selectedIndex) {
      var _this$state2 = _this.state, open = _this$state2.open, value = _this$state2.value;
      var multiple = _this.props.multiple;
      var item = _this.getSelectedItem(selectedIndex);
      var selectedValue = get_default(item, "value");
      var disabled = get_default(item, "disabled");
      if (isNil_default(selectedValue) || !open || disabled) {
        return value;
      }
      var newValue = multiple ? union_default(value, [selectedValue]) : selectedValue;
      var valueHasChanged = multiple ? !!difference_default(newValue, value).length : newValue !== value;
      if (valueHasChanged) {
        _this.setState({
          value: newValue
        });
        _this.handleChange(e, newValue);
        if (item["data-additional"]) {
          invoke_default(_this.props, "onAddItem", e, _extends({}, _this.props, {
            value: selectedValue
          }));
        }
      }
      return value;
    };
    _this.selectItemOnEnter = function(e) {
      var search = _this.props.search;
      var _this$state3 = _this.state, open = _this$state3.open, selectedIndex = _this$state3.selectedIndex;
      if (!open) {
        return;
      }
      var shouldSelect = import_keyboard_key3.default.getCode(e) === import_keyboard_key3.default.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
      !search && import_keyboard_key3.default.getCode(e) === import_keyboard_key3.default.Spacebar;
      if (!shouldSelect) {
        return;
      }
      e.preventDefault();
      var optionSize = size_default(getMenuOptions({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      }));
      if (search && optionSize === 0) {
        return;
      }
      var nextValue = _this.makeSelectedItemActive(e, selectedIndex);
      _this.setState({
        selectedIndex: getSelectedIndex({
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search,
          selectedIndex,
          value: nextValue,
          options: _this.props.options,
          searchQuery: ""
        })
      });
      _this.closeOnChange(e);
      _this.clearSearchQuery();
      if (search) {
        invoke_default(_this.searchRef.current, "focus");
      }
    };
    _this.removeItemOnBackspace = function(e) {
      var _this$props3 = _this.props, multiple = _this$props3.multiple, search = _this$props3.search;
      var _this$state4 = _this.state, searchQuery = _this$state4.searchQuery, value = _this$state4.value;
      if (import_keyboard_key3.default.getCode(e) !== import_keyboard_key3.default.Backspace) return;
      if (searchQuery || !search || !multiple || isEmpty_default(value)) return;
      e.preventDefault();
      var newValue = dropRight_default(value);
      _this.setState({
        value: newValue
      });
      _this.handleChange(e, newValue);
    };
    _this.closeOnDocumentClick = function(e) {
      if (!_this.props.closeOnBlur) return;
      if (_this.ref.current && doesNodeContainClick_default(_this.ref.current, e)) return;
      _this.close();
    };
    _this.handleMouseDown = function(e) {
      _this.isMouseDown = true;
      invoke_default(_this.props, "onMouseDown", e, _this.props);
      document.addEventListener("mouseup", _this.handleDocumentMouseUp);
    };
    _this.handleDocumentMouseUp = function() {
      _this.isMouseDown = false;
      document.removeEventListener("mouseup", _this.handleDocumentMouseUp);
    };
    _this.handleClick = function(e) {
      var _this$props4 = _this.props, minCharacters = _this$props4.minCharacters, search = _this$props4.search;
      var _this$state5 = _this.state, open = _this$state5.open, searchQuery = _this$state5.searchQuery;
      invoke_default(_this.props, "onClick", e, _this.props);
      e.stopPropagation();
      if (!search) return _this.toggle(e);
      if (open) {
        invoke_default(_this.searchRef.current, "focus");
        return;
      }
      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);
        return;
      }
      invoke_default(_this.searchRef.current, "focus");
    };
    _this.handleIconClick = function(e) {
      var clearable = _this.props.clearable;
      var hasValue = _this.hasValue();
      invoke_default(_this.props, "onClick", e, _this.props);
      e.stopPropagation();
      if (clearable && hasValue) {
        _this.clearValue(e);
      } else {
        _this.toggle(e);
      }
    };
    _this.handleItemClick = function(e, item) {
      var _this$props5 = _this.props, multiple = _this$props5.multiple, search = _this$props5.search;
      var currentValue = _this.state.value;
      var value = item.value;
      e.stopPropagation();
      if (multiple || item.disabled) {
        e.nativeEvent.stopImmediatePropagation();
      }
      if (item.disabled) {
        return;
      }
      var isAdditionItem = item["data-additional"];
      var newValue = multiple ? union_default(_this.state.value, [value]) : value;
      var valueHasChanged = multiple ? !!difference_default(newValue, currentValue).length : newValue !== currentValue;
      if (valueHasChanged) {
        _this.setState({
          value: newValue
        });
        _this.handleChange(e, newValue);
      }
      _this.clearSearchQuery();
      if (search) {
        invoke_default(_this.searchRef.current, "focus");
      } else {
        invoke_default(_this.ref.current, "focus");
      }
      _this.closeOnChange(e);
      if (isAdditionItem) {
        invoke_default(_this.props, "onAddItem", e, _extends({}, _this.props, {
          value
        }));
      }
    };
    _this.handleFocus = function(e) {
      var focus = _this.state.focus;
      if (focus) return;
      invoke_default(_this.props, "onFocus", e, _this.props);
      _this.setState({
        focus: true
      });
    };
    _this.handleBlur = function(e) {
      var currentTarget = get_default(e, "currentTarget");
      if (currentTarget && currentTarget.contains(document.activeElement)) return;
      var _this$props6 = _this.props, closeOnBlur = _this$props6.closeOnBlur, multiple = _this$props6.multiple, selectOnBlur = _this$props6.selectOnBlur;
      if (_this.isMouseDown) return;
      invoke_default(_this.props, "onBlur", e, _this.props);
      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e, _this.state.selectedIndex);
        if (closeOnBlur) _this.close();
      }
      _this.setState({
        focus: false
      });
      _this.clearSearchQuery();
    };
    _this.handleSearchChange = function(e, _ref) {
      var value = _ref.value;
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = value;
      invoke_default(_this.props, "onSearchChange", e, _extends({}, _this.props, {
        searchQuery: newQuery
      }));
      _this.setState({
        searchQuery: newQuery,
        selectedIndex: 0
      });
      if (!open && newQuery.length >= minCharacters) {
        _this.open();
        return;
      }
      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    };
    _this.handleKeyDown = function(e) {
      _this.moveSelectionOnKeyDown(e);
      _this.openOnArrow(e);
      _this.openOnSpace(e);
      _this.selectItemOnEnter(e);
      invoke_default(_this.props, "onKeyDown", e);
    };
    _this.getSelectedItem = function(selectedIndex) {
      var options = getMenuOptions({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      });
      return get_default(options, "[" + selectedIndex + "]");
    };
    _this.getItemByValue = function(value) {
      var options = _this.props.options;
      return find_default(options, {
        value
      });
    };
    _this.getDropdownAriaOptions = function() {
      var _this$props7 = _this.props, loading = _this$props7.loading, disabled = _this$props7.disabled, search = _this$props7.search, multiple = _this$props7.multiple;
      var open = _this.state.open;
      var ariaOptions = {
        role: search ? "combobox" : "listbox",
        "aria-busy": loading,
        "aria-disabled": disabled,
        "aria-expanded": !!open
      };
      if (ariaOptions.role === "listbox") {
        ariaOptions["aria-multiselectable"] = multiple;
      }
      return ariaOptions;
    };
    _this.clearSearchQuery = function() {
      var searchQuery = _this.state.searchQuery;
      if (searchQuery === void 0 || searchQuery === "") return;
      _this.setState({
        searchQuery: ""
      });
    };
    _this.handleLabelClick = function(e, labelProps) {
      e.stopPropagation();
      _this.setState({
        selectedLabel: labelProps.value
      });
      invoke_default(_this.props, "onLabelClick", e, labelProps);
    };
    _this.handleLabelRemove = function(e, labelProps) {
      e.stopPropagation();
      var value = _this.state.value;
      var newValue = without_default(value, labelProps.value);
      _this.setState({
        value: newValue
      });
      _this.handleChange(e, newValue);
    };
    _this.getSelectedIndexAfterMove = function(offset2, startIndex) {
      if (startIndex === void 0) {
        startIndex = _this.state.selectedIndex;
      }
      var options = getMenuOptions({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      });
      if (options === void 0 || every_default(options, "disabled")) return;
      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection;
      var nextIndex = startIndex + offset2;
      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = lastIndex;
      }
      if (options[nextIndex].disabled) {
        return _this.getSelectedIndexAfterMove(offset2, nextIndex);
      }
      return nextIndex;
    };
    _this.handleIconOverrides = function(predefinedProps) {
      var clearable = _this.props.clearable;
      var classes = clsx_m_default(clearable && _this.hasValue() && "clear", predefinedProps.className);
      return {
        className: classes,
        onClick: function onClick(e) {
          invoke_default(predefinedProps, "onClick", e, predefinedProps);
          _this.handleIconClick(e);
        }
      };
    };
    _this.clearValue = function(e) {
      var multiple = _this.props.multiple;
      var newValue = multiple ? [] : "";
      _this.setState({
        value: newValue
      });
      _this.handleChange(e, newValue);
    };
    _this.computeSearchInputTabIndex = function() {
      var _this$props8 = _this.props, disabled = _this$props8.disabled, tabIndex = _this$props8.tabIndex;
      if (!isNil_default(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    };
    _this.computeSearchInputWidth = function() {
      var searchQuery = _this.state.searchQuery;
      if (_this.sizerRef.current && searchQuery) {
        _this.sizerRef.current.style.display = "inline";
        _this.sizerRef.current.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.current.getBoundingClientRect().width);
        _this.sizerRef.current.style.removeProperty("display");
        return searchWidth;
      }
    };
    _this.computeTabIndex = function() {
      var _this$props9 = _this.props, disabled = _this$props9.disabled, search = _this$props9.search, tabIndex = _this$props9.tabIndex;
      if (search) return void 0;
      if (disabled) return -1;
      return isNil_default(tabIndex) ? 0 : tabIndex;
    };
    _this.handleSearchInputOverrides = function(predefinedProps) {
      return {
        onChange: function onChange(e, inputProps) {
          invoke_default(predefinedProps, "onChange", e, inputProps);
          _this.handleSearchChange(e, inputProps);
        }
      };
    };
    _this.hasValue = function() {
      var multiple = _this.props.multiple;
      var value = _this.state.value;
      return multiple ? !isEmpty_default(value) : !isNil_default(value) && value !== "";
    };
    _this.scrollSelectedItemIntoView = function() {
      if (!_this.ref.current) return;
      var menu = _this.ref.current.querySelector(".menu.visible");
      if (!menu) return;
      var item = menu.querySelector(".item.selected");
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;
      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    };
    _this.setOpenDirection = function() {
      if (!_this.ref.current) return;
      var menu = _this.ref.current.querySelector(".menu.visible");
      if (!menu) return;
      var dropdownRect = _this.ref.current.getBoundingClientRect();
      var menuHeight = menu.clientHeight;
      var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
      var spaceAtTheTop = dropdownRect.top - menuHeight;
      var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;
      if (!upward !== !_this.state.upward) {
        _this.setState({
          upward
        });
      }
    };
    _this.open = function(e, triggerSetState) {
      if (e === void 0) {
        e = null;
      }
      if (triggerSetState === void 0) {
        triggerSetState = true;
      }
      var _this$props10 = _this.props, disabled = _this$props10.disabled, search = _this$props10.search;
      if (disabled) return;
      if (search) invoke_default(_this.searchRef.current, "focus");
      invoke_default(_this.props, "onOpen", e, _this.props);
      if (triggerSetState) {
        _this.setState({
          open: true
        });
      }
      _this.scrollSelectedItemIntoView();
    };
    _this.close = function(e, callback) {
      if (callback === void 0) {
        callback = _this.handleClose;
      }
      if (_this.state.open) {
        invoke_default(_this.props, "onClose", e, _this.props);
        _this.setState({
          open: false
        }, callback);
      }
    };
    _this.handleClose = function() {
      var hasSearchFocus = document.activeElement === _this.searchRef.current;
      if (!hasSearchFocus && _this.ref.current) {
        _this.ref.current.blur();
      }
      var hasDropdownFocus = document.activeElement === _this.ref.current;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      _this.setState({
        focus: hasFocus
      });
    };
    _this.toggle = function(e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    };
    _this.renderText = function() {
      var _this$props11 = _this.props, multiple = _this$props11.multiple, placeholder = _this$props11.placeholder, search = _this$props11.search, text = _this$props11.text;
      var _this$state6 = _this.state, searchQuery = _this$state6.searchQuery, selectedIndex = _this$state6.selectedIndex, value = _this$state6.value, open = _this$state6.open;
      var hasValue = _this.hasValue();
      var classes = clsx_m_default(placeholder && !hasValue && "default", "text", search && searchQuery && "filtered");
      var _text = placeholder;
      var selectedItem;
      if (text) {
        _text = text;
      } else if (open && !multiple) {
        selectedItem = _this.getSelectedItem(selectedIndex);
      } else if (hasValue) {
        selectedItem = _this.getItemByValue(value);
      }
      return DropdownText_default.create(selectedItem ? renderItemContent(selectedItem) : _text, {
        defaultProps: {
          className: classes
        }
      });
    };
    _this.renderSearchInput = function() {
      var _this$props12 = _this.props, search = _this$props12.search, searchInput = _this$props12.searchInput;
      var searchQuery = _this.state.searchQuery;
      return search && import_react45.default.createElement(Ref, {
        innerRef: _this.searchRef
      }, DropdownSearchInput_default.create(searchInput, {
        defaultProps: {
          style: {
            width: _this.computeSearchInputWidth()
          },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        },
        overrideProps: _this.handleSearchInputOverrides
      }));
    };
    _this.renderSearchSizer = function() {
      var _this$props13 = _this.props, search = _this$props13.search, multiple = _this$props13.multiple;
      return search && multiple && import_react45.default.createElement("span", {
        className: "sizer",
        ref: _this.sizerRef
      });
    };
    _this.renderLabels = function() {
      var _this$props14 = _this.props, multiple = _this$props14.multiple, renderLabel = _this$props14.renderLabel;
      var _this$state7 = _this.state, selectedLabel = _this$state7.selectedLabel, value = _this$state7.value;
      if (!multiple || isEmpty_default(value)) {
        return;
      }
      var selectedItems = map_default(value, _this.getItemByValue);
      return map_default(compact_default(selectedItems), function(item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: "a",
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };
        return Label.create(renderLabel(item, index, defaultProps), {
          defaultProps
        });
      });
    };
    _this.renderOptions = function() {
      var _this$props15 = _this.props, lazyLoad = _this$props15.lazyLoad, multiple = _this$props15.multiple, search = _this$props15.search, noResultsMessage = _this$props15.noResultsMessage;
      var _this$state8 = _this.state, open = _this$state8.open, selectedIndex = _this$state8.selectedIndex, value = _this$state8.value;
      if (lazyLoad && !open) return null;
      var options = getMenuOptions({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      });
      if (noResultsMessage !== null && search && isEmpty_default(options)) {
        return import_react45.default.createElement("div", {
          className: "message"
        }, noResultsMessage);
      }
      var isActive = multiple ? function(optValue) {
        return includes_default(value, optValue);
      } : function(optValue) {
        return optValue === value;
      };
      return map_default(options, function(opt, i) {
        return DropdownItem_default.create(_extends({
          active: isActive(opt.value),
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: _extends({}, opt.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: false,
          overrideProps: function overrideProps(predefinedProps) {
            return {
              onClick: function onClick(e, item) {
                predefinedProps.onClick == null ? void 0 : predefinedProps.onClick(e, item);
                _this.handleItemClick(e, item);
              }
            };
          }
        });
      });
    };
    _this.renderMenu = function() {
      var _this$props16 = _this.props, children = _this$props16.children, direction = _this$props16.direction, header = _this$props16.header;
      var open = _this.state.open;
      var ariaOptions = _this.getDropdownMenuAriaOptions();
      if (!childrenUtils_exports.isNil(children)) {
        var menuChild = import_react45.Children.only(children);
        var className = clsx_m_default(direction, useKeyOnly(open, "visible"), menuChild.props.className);
        return (0, import_react45.cloneElement)(menuChild, _extends({
          className
        }, ariaOptions));
      }
      return import_react45.default.createElement(DropdownMenu_default, _extends({}, ariaOptions, {
        direction,
        open
      }), DropdownHeader_default.create(header, {
        autoGenerateKey: false
      }), _this.renderOptions());
    };
    return _this;
  }
  var _proto = Dropdown2.prototype;
  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      focus: false,
      searchQuery: ""
    };
  };
  Dropdown2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(nextProps, computedState, prevState) {
    var derivedState = {
      __options: nextProps.options,
      __value: computedState.value
    };
    var shouldComputeSelectedIndex = (
      // On value change
      !(0, import_shallowequal2.default)(prevState.__value, computedState.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !isEqual_default(getKeyAndValues(nextProps.options), getKeyAndValues(prevState.__options))
    );
    if (shouldComputeSelectedIndex) {
      derivedState.selectedIndex = getSelectedIndex({
        additionLabel: nextProps.additionLabel,
        additionPosition: nextProps.additionPosition,
        allowAdditions: nextProps.allowAdditions,
        deburr: nextProps.deburr,
        multiple: nextProps.multiple,
        search: nextProps.search,
        selectedIndex: computedState.selectedIndex,
        value: computedState.value,
        options: nextProps.options,
        searchQuery: computedState.searchQuery
      });
    }
    return derivedState;
  };
  _proto.componentDidMount = function componentDidMount() {
    var open = this.state.open;
    if (open) {
      this.open(null, false);
    }
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, import_shallowequal2.default)(nextProps, this.props) || !(0, import_shallowequal2.default)(nextState, this.state);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props17 = this.props, closeOnBlur = _this$props17.closeOnBlur, minCharacters = _this$props17.minCharacters, openOnFocus = _this$props17.openOnFocus, search = _this$props17.search;
    if (true) {
      var isNextValueArray = Array.isArray(this.props.value);
      var hasValue = has_default(this.props, "value");
      if (hasValue && this.props.multiple && !isNextValueArray) {
        console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`."));
      } else if (hasValue && !this.props.multiple && isNextValueArray) {
        console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
      }
    }
    if (!prevState.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var openable = !search || search && minCharacters === 1 && !this.state.open;
        if (openOnFocus && openable) this.open();
      }
    } else if (prevState.focus && !this.state.focus) {
      if (!this.isMouseDown && closeOnBlur) {
        this.close();
      }
    }
    if (!prevState.open && this.state.open) {
      this.setOpenDirection();
      this.scrollSelectedItemIntoView();
    } else if (prevState.open && !this.state.open) {
    }
    if (prevState.selectedIndex !== this.state.selectedIndex) {
      this.scrollSelectedItemIntoView();
    }
  };
  _proto.getDropdownMenuAriaOptions = function getDropdownMenuAriaOptions() {
    var _this$props18 = this.props, search = _this$props18.search, multiple = _this$props18.multiple;
    var ariaOptions = {};
    if (search) {
      ariaOptions["aria-multiselectable"] = multiple;
      ariaOptions.role = "listbox";
    }
    return ariaOptions;
  };
  _proto.render = function render() {
    var _this$props19 = this.props, basic = _this$props19.basic, button = _this$props19.button, className = _this$props19.className, compact2 = _this$props19.compact, disabled = _this$props19.disabled, error = _this$props19.error, fluid = _this$props19.fluid, floating = _this$props19.floating, icon = _this$props19.icon, inline = _this$props19.inline, item = _this$props19.item, labeled = _this$props19.labeled, loading = _this$props19.loading, multiple = _this$props19.multiple, pointing = _this$props19.pointing, search = _this$props19.search, selection = _this$props19.selection, scrolling = _this$props19.scrolling, simple = _this$props19.simple, trigger = _this$props19.trigger;
    var _this$state9 = this.state, focus = _this$state9.focus, open = _this$state9.open, upward = _this$state9.upward;
    var classes = clsx_m_default(
      "ui",
      useKeyOnly(open, "active visible"),
      useKeyOnly(disabled, "disabled"),
      useKeyOnly(error, "error"),
      useKeyOnly(loading, "loading"),
      useKeyOnly(basic, "basic"),
      useKeyOnly(button, "button"),
      useKeyOnly(compact2, "compact"),
      useKeyOnly(fluid, "fluid"),
      useKeyOnly(floating, "floating"),
      useKeyOnly(inline, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      useKeyOnly(labeled, "labeled"),
      useKeyOnly(item, "item"),
      useKeyOnly(multiple, "multiple"),
      useKeyOnly(search, "search"),
      useKeyOnly(selection, "selection"),
      useKeyOnly(simple, "simple"),
      useKeyOnly(scrolling, "scrolling"),
      useKeyOnly(upward, "upward"),
      useKeyOrValueAndKey(pointing, "pointing"),
      "dropdown",
      className
    );
    var rest = getUnhandledProps_default(Dropdown2, this.props);
    var ElementType = getElementType_default(Dropdown2, this.props);
    var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
    return import_react45.default.createElement(Ref, {
      innerRef: this.ref
    }, import_react45.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
      className: classes,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), Icon_default.create(icon, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: false
    }), this.renderMenu(), open && import_react45.default.createElement(import_event_stack3.default, {
      name: "keydown",
      on: this.closeOnEscape
    }), open && import_react45.default.createElement(import_event_stack3.default, {
      name: "click",
      on: this.closeOnDocumentClick
    }), focus && import_react45.default.createElement(import_event_stack3.default, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  };
  return Dropdown2;
}(ModernAutoControlledComponent);
Dropdown.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
Dropdown.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types39.default.elementType,
  /** Label prefixed to an option added by a user. */
  additionLabel: import_prop_types39.default.oneOfType([import_prop_types39.default.element, import_prop_types39.default.string]),
  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: import_prop_types39.default.oneOf(["top", "bottom"]),
  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: customPropTypes_exports.every([customPropTypes_exports.demand(["options", "selection", "search"]), import_prop_types39.default.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: import_prop_types39.default.bool,
  /** Format the Dropdown to appear as a button. */
  button: import_prop_types39.default.bool,
  /** Primary content. */
  children: customPropTypes_exports.every([customPropTypes_exports.disallow(["options", "selection"]), customPropTypes_exports.givenProps({
    children: import_prop_types39.default.any.isRequired
  }, import_prop_types39.default.element.isRequired)]),
  /** Additional classes. */
  className: import_prop_types39.default.string,
  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: import_prop_types39.default.bool,
  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: import_prop_types39.default.bool,
  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: import_prop_types39.default.bool,
  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: import_prop_types39.default.bool,
  /** A compact dropdown has no minimum width. */
  compact: import_prop_types39.default.bool,
  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: import_prop_types39.default.bool,
  /** Initial value of open. */
  defaultOpen: import_prop_types39.default.bool,
  /** Initial value of searchQuery. */
  defaultSearchQuery: import_prop_types39.default.string,
  /** Currently selected label in multi-select. */
  defaultSelectedLabel: customPropTypes_exports.every([customPropTypes_exports.demand(["multiple"]), import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string])]),
  /** Initial value of upward. */
  defaultUpward: import_prop_types39.default.bool,
  /** Initial value or value array if multiple. */
  defaultValue: import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string, import_prop_types39.default.bool, import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.string, import_prop_types39.default.number, import_prop_types39.default.bool]))]),
  /** A dropdown menu can open to the left or to the right. */
  direction: import_prop_types39.default.oneOf(["left", "right"]),
  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: import_prop_types39.default.bool,
  /** An errored dropdown can alert a user to a problem. */
  error: import_prop_types39.default.bool,
  /** A dropdown menu can contain floated content. */
  floating: import_prop_types39.default.bool,
  /** A dropdown can take the full width of its parent */
  fluid: import_prop_types39.default.bool,
  /** A dropdown menu can contain a header. */
  header: import_prop_types39.default.node,
  /** Shorthand for Icon. */
  icon: import_prop_types39.default.oneOfType([import_prop_types39.default.node, import_prop_types39.default.object]),
  /** A dropdown can be formatted to appear inline in other content. */
  inline: import_prop_types39.default.bool,
  /** A dropdown can be formatted as a Menu item. */
  item: import_prop_types39.default.bool,
  /** A dropdown can be labeled. */
  labeled: import_prop_types39.default.bool,
  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: import_prop_types39.default.bool,
  /** A dropdown can show that it is currently loading data. */
  loading: import_prop_types39.default.bool,
  /** The minimum characters for a search to begin showing results. */
  minCharacters: import_prop_types39.default.number,
  /** A selection dropdown can allow multiple selections. */
  multiple: import_prop_types39.default.bool,
  /** Message to display when there are no results. */
  noResultsMessage: import_prop_types39.default.node,
  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: import_prop_types39.default.func,
  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: import_prop_types39.default.func,
  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: import_prop_types39.default.func,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types39.default.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: import_prop_types39.default.func,
  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: import_prop_types39.default.func,
  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: import_prop_types39.default.func,
  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: import_prop_types39.default.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: import_prop_types39.default.func,
  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: import_prop_types39.default.func,
  /** Controls whether or not the dropdown menu is displayed. */
  open: import_prop_types39.default.bool,
  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: import_prop_types39.default.bool,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types39.default.arrayOf(import_prop_types39.default.shape(DropdownItem_default.propTypes))]),
  /** Placeholder text. */
  placeholder: import_prop_types39.default.string,
  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: import_prop_types39.default.oneOfType([import_prop_types39.default.bool, import_prop_types39.default.oneOf(["left", "right", "top", "top left", "top right", "bottom", "bottom left", "bottom right"])]),
  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: import_prop_types39.default.func,
  /** A dropdown can have its menu scroll. */
  scrolling: import_prop_types39.default.bool,
  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: import_prop_types39.default.oneOfType([import_prop_types39.default.bool, import_prop_types39.default.func]),
  /** A shorthand for a search input. */
  searchInput: import_prop_types39.default.oneOfType([import_prop_types39.default.array, import_prop_types39.default.node, import_prop_types39.default.object]),
  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: import_prop_types39.default.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: import_prop_types39.default.bool,
  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: import_prop_types39.default.bool,
  /** Currently selected label in multi-select. */
  selectedLabel: customPropTypes_exports.every([customPropTypes_exports.demand(["multiple"]), import_prop_types39.default.oneOfType([import_prop_types39.default.string, import_prop_types39.default.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["options"]), import_prop_types39.default.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: import_prop_types39.default.bool,
  /** A dropdown can receive focus. */
  tabIndex: import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: import_prop_types39.default.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: customPropTypes_exports.every([customPropTypes_exports.disallow(["selection", "text"]), import_prop_types39.default.node]),
  /** Current value or value array if multiple. Creates a controlled component. */
  value: import_prop_types39.default.oneOfType([import_prop_types39.default.bool, import_prop_types39.default.string, import_prop_types39.default.number, import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.bool, import_prop_types39.default.string, import_prop_types39.default.number]))]),
  /** Controls whether the dropdown will open upward. */
  upward: import_prop_types39.default.bool,
  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: import_prop_types39.default.bool
} : {};
Dropdown.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: true,
  closeOnEscape: true,
  deburr: false,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: true,
  renderLabel: renderItemContent,
  searchInput: "text",
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
};
Dropdown.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
Dropdown.Divider = DropdownDivider_default;
Dropdown.Header = DropdownHeader_default;
Dropdown.Item = DropdownItem_default;
Dropdown.Menu = DropdownMenu_default;
Dropdown.SearchInput = DropdownSearchInput_default;
Dropdown.Text = DropdownText_default;

// node_modules/semantic-ui-react/dist/es/addons/Select/Select.js
function Select(props) {
  return import_react46.default.createElement(Dropdown, _extends({}, props, {
    selection: true
  }));
}
Select.handledProps = ["options"];
Select.propTypes = true ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: import_prop_types40.default.arrayOf(import_prop_types40.default.shape(Dropdown.Item.propTypes)).isRequired
} : {};
Select.Divider = Dropdown.Divider;
Select.Header = Dropdown.Header;
Select.Item = Dropdown.Item;
Select.Menu = Dropdown.Menu;
var Select_default = Select;

// node_modules/semantic-ui-react/dist/es/addons/TextArea/TextArea.js
var import_prop_types41 = __toESM(require_prop_types());
var import_react47 = __toESM(require_react());
var TextArea = function(_Component) {
  _inheritsLoose(TextArea2, _Component);
  function TextArea2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = (0, import_react47.createRef)();
    _this.focus = function() {
      return _this.ref.current.focus();
    };
    _this.handleChange = function(e) {
      var value = get_default(e, "target.value");
      invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
        value
      }));
    };
    _this.handleInput = function(e) {
      var value = get_default(e, "target.value");
      invoke_default(_this.props, "onInput", e, _extends({}, _this.props, {
        value
      }));
    };
    return _this;
  }
  var _proto = TextArea2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, rows = _this$props.rows, value = _this$props.value;
    var rest = getUnhandledProps_default(TextArea2, this.props);
    var ElementType = getElementType_default(TextArea2, this.props);
    return import_react47.default.createElement(Ref, {
      innerRef: this.ref
    }, import_react47.default.createElement(ElementType, _extends({}, rest, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows,
      value
    })));
  };
  return TextArea2;
}(import_react47.Component);
TextArea.handledProps = ["as", "onChange", "onInput", "rows", "value"];
TextArea.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types41.default.elementType,
  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: import_prop_types41.default.func,
  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: import_prop_types41.default.func,
  /** Indicates row count for a TextArea. */
  rows: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]),
  /** The value of the textarea. */
  value: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string])
} : {};
TextArea.defaultProps = {
  as: "textarea",
  rows: 3
};
var TextArea_default = TextArea;

// node_modules/semantic-ui-react/dist/es/addons/TransitionablePortal/TransitionablePortal.js
var import_prop_types44 = __toESM(require_prop_types());
var import_react52 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Transition/Transition.js
var import_prop_types43 = __toESM(require_prop_types());
var import_react51 = __toESM(require_react());

// node_modules/lodash-es/mapValues.js
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee_default(iteratee, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_default = mapValues;

// node_modules/semantic-ui-react/dist/es/modules/Transition/TransitionGroup.js
var import_prop_types42 = __toESM(require_prop_types());
var import_react50 = __toESM(require_react());

// node_modules/lodash-es/_arrayAggregator.js
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var arrayAggregator_default = arrayAggregator;

// node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
var baseAggregator_default = baseAggregator;

// node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee_default(iteratee, 2), accumulator);
  };
}
var createAggregator_default = createAggregator;

// node_modules/lodash-es/keyBy.js
var keyBy = createAggregator_default(function(result, value, key) {
  baseAssignValue_default(result, key, value);
});
var keyBy_default = keyBy;

// node_modules/semantic-ui-react/dist/es/modules/Transition/utils/childMapping.js
var import_react48 = __toESM(require_react());
var getChildMapping = function getChildMapping2(children) {
  return keyBy_default(filter_default(import_react48.Children.toArray(children), import_react48.isValidElement), "key");
};
var getPendingKeys = function getPendingKeys2(prev, next) {
  var nextKeysPending = {};
  var pendingKeys = [];
  forEach_default(keys_default(prev), function(prevKey) {
    if (!has_default(next, prevKey)) {
      pendingKeys.push(prevKey);
      return;
    }
    if (pendingKeys.length) {
      nextKeysPending[prevKey] = pendingKeys;
      pendingKeys = [];
    }
  });
  return [nextKeysPending, pendingKeys];
};
var getValue2 = function getValue3(key, prev, next) {
  return has_default(next, key) ? next[key] : prev[key];
};
var mergeChildMappings = function mergeChildMappings2(prev, next) {
  if (prev === void 0) {
    prev = {};
  }
  if (next === void 0) {
    next = {};
  }
  var childMapping = {};
  var _getPendingKeys = getPendingKeys(prev, next), nextKeysPending = _getPendingKeys[0], pendingKeys = _getPendingKeys[1];
  forEach_default(keys_default(next), function(nextKey) {
    if (has_default(nextKeysPending, nextKey)) {
      forEach_default(nextKeysPending[nextKey], function(pendingKey) {
        childMapping[pendingKey] = getValue2(pendingKey, prev, next);
      });
    }
    childMapping[nextKey] = getValue2(nextKey, prev, next);
  });
  forEach_default(pendingKeys, function(pendingKey) {
    childMapping[pendingKey] = getValue2(pendingKey, prev, next);
  });
  return childMapping;
};

// node_modules/semantic-ui-react/dist/es/modules/Transition/utils/wrapChild.js
var import_react49 = __toESM(require_react());
function wrapChild(child, onHide, options) {
  if (options === void 0) {
    options = {};
  }
  var key = child.key;
  var _options = options, animation = _options.animation, directional = _options.directional, duration = _options.duration, _options$transitionOn = _options.transitionOnMount, transitionOnMount = _options$transitionOn === void 0 ? false : _options$transitionOn, _options$visible = _options.visible, visible = _options$visible === void 0 ? true : _options$visible;
  return import_react49.default.createElement(Transition, {
    animation,
    directional,
    duration,
    key,
    onHide,
    reactKey: key,
    transitionOnMount,
    visible
  }, child);
}
wrapChild.handledProps = [];

// node_modules/semantic-ui-react/dist/es/modules/Transition/TransitionGroup.js
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      // Keeping a callback under the state is a hack to make it accessible under getDerivedStateFromProps()
      handleOnHide: function handleOnHide(nothing, childProps) {
        var reactKey = childProps.reactKey;
        _this.setState(function(state) {
          var children = _extends({}, state.children);
          delete children[reactKey];
          return {
            children
          };
        });
      }
    };
    return _this;
  }
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var animation = props.animation, duration = props.duration, directional = props.directional;
    var prevMapping = state.children;
    if (typeof prevMapping === "undefined") {
      return {
        children: mapValues_default(getChildMapping(props.children), function(child) {
          return wrapChild(child, state.handleOnHide, {
            animation,
            duration,
            directional
          });
        })
      };
    }
    var nextMapping = getChildMapping(props.children);
    var children = mergeChildMappings(prevMapping, nextMapping);
    forEach_default(children, function(child, key) {
      var hasPrev = has_default(prevMapping, key);
      var hasNext = has_default(nextMapping, key);
      var prevChild = prevMapping[key];
      var isLeaving = !get_default(prevChild, "props.visible");
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = wrapChild(child, state.handleOnHide, {
          animation,
          duration,
          directional,
          transitionOnMount: true
        });
        return;
      }
      if (!hasNext && hasPrev && !isLeaving) {
        children[key] = import_react50.default.cloneElement(prevChild, {
          visible: false
        });
        return;
      }
      var _prevChild$props = prevChild.props, visible = _prevChild$props.visible, transitionOnMount = _prevChild$props.transitionOnMount;
      children[key] = wrapChild(child, state.handleOnHide, {
        animation,
        duration,
        directional,
        transitionOnMount,
        visible
      });
    });
    return {
      children
    };
  };
  var _proto = TransitionGroup2.prototype;
  _proto.render = function render() {
    var children = this.state.children;
    var ElementType = getElementType_default(TransitionGroup2, this.props);
    var rest = getUnhandledProps_default(TransitionGroup2, this.props);
    return import_react50.default.createElement(ElementType, rest, values_default(children));
  };
  return TransitionGroup2;
}(import_react50.default.Component);
TransitionGroup.handledProps = ["animation", "as", "children", "directional", "duration"];
TransitionGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types42.default.elementType,
  /** Named animation event to used. Must be defined in CSS. */
  animation: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(SUI_exports.TRANSITIONS), import_prop_types42.default.string]),
  /** Primary content. */
  children: import_prop_types42.default.node,
  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: import_prop_types42.default.bool,
  /** Duration of the CSS transition animation in milliseconds. */
  duration: import_prop_types42.default.oneOfType([import_prop_types42.default.number, import_prop_types42.default.shape({
    hide: import_prop_types42.default.number.isRequired,
    show: import_prop_types42.default.number.isRequired
  }), import_prop_types42.default.string])
} : {};
TransitionGroup.defaultProps = {
  as: import_react50.default.Fragment,
  animation: "fade",
  duration: 500
};

// node_modules/semantic-ui-react/dist/es/modules/Transition/utils/computeStatuses.js
var TRANSITION_STATUS_INITIAL = "INITIAL";
var TRANSITION_STATUS_ENTERED = "ENTERED";
var TRANSITION_STATUS_ENTERING = "ENTERING";
var TRANSITION_STATUS_EXITED = "EXITED";
var TRANSITION_STATUS_EXITING = "EXITING";
var TRANSITION_STATUS_UNMOUNTED = "UNMOUNTED";
function computeStatuses(options) {
  var mountOnShow = options.mountOnShow, status = options.status, transitionOnMount = options.transitionOnMount, visible = options.visible, unmountOnHide = options.unmountOnHide;
  if (visible) {
    if (status === TRANSITION_STATUS_INITIAL) {
      if (transitionOnMount) {
        return {
          animating: true,
          status: TRANSITION_STATUS_ENTERING,
          nextStatus: TRANSITION_STATUS_ENTERED
        };
      }
      return {
        animating: false,
        status: TRANSITION_STATUS_ENTERED,
        nextStatus: void 0
      };
    }
    if (status === TRANSITION_STATUS_UNMOUNTED) {
      return {
        animating: true,
        status: TRANSITION_STATUS_ENTERING,
        nextStatus: TRANSITION_STATUS_ENTERED
      };
    }
    if (status === TRANSITION_STATUS_EXITED || status === TRANSITION_STATUS_EXITING) {
      return {
        animating: true,
        status: TRANSITION_STATUS_ENTERING,
        nextStatus: TRANSITION_STATUS_ENTERED
      };
    }
    if (status === TRANSITION_STATUS_ENTERING) {
      return {};
    }
    if (status === TRANSITION_STATUS_ENTERED) {
      return {
        animating: false,
        status: TRANSITION_STATUS_ENTERED,
        nextStatus: void 0
      };
    }
  }
  if (status === TRANSITION_STATUS_INITIAL) {
    if (mountOnShow || unmountOnHide) {
      return {
        animating: false,
        status: TRANSITION_STATUS_UNMOUNTED,
        nextStatus: void 0
      };
    }
    return {
      animating: false,
      status: TRANSITION_STATUS_EXITED,
      nextStatus: void 0
    };
  }
  if (status === TRANSITION_STATUS_ENTERED || status === TRANSITION_STATUS_ENTERING) {
    return {
      animating: true,
      status: TRANSITION_STATUS_EXITING,
      nextStatus: unmountOnHide ? TRANSITION_STATUS_UNMOUNTED : TRANSITION_STATUS_EXITED
    };
  }
  if (status === TRANSITION_STATUS_EXITING) {
    return {};
  }
  if (status === TRANSITION_STATUS_EXITED) {
    return {
      animating: false,
      status: TRANSITION_STATUS_EXITED,
      nextStatus: void 0
    };
  }
  if (status === TRANSITION_STATUS_UNMOUNTED) {
    return {
      animating: false,
      status: TRANSITION_STATUS_UNMOUNTED,
      nextStatus: void 0
    };
  }
  throw new Error("Transition:computeStatuses(): an unexpected status transition: { visible: " + visible + ", status: " + status + " }");
}

// node_modules/semantic-ui-react/dist/es/modules/Transition/Transition.js
var _TRANSITION_CALLBACK_;
var _TRANSITION_STYLE_TYP;
var TRANSITION_CALLBACK_TYPE = (_TRANSITION_CALLBACK_ = {}, _TRANSITION_CALLBACK_[TRANSITION_STATUS_ENTERED] = "show", _TRANSITION_CALLBACK_[TRANSITION_STATUS_EXITED] = "hide", _TRANSITION_CALLBACK_);
var TRANSITION_STYLE_TYPE = (_TRANSITION_STYLE_TYP = {}, _TRANSITION_STYLE_TYP[TRANSITION_STATUS_ENTERING] = "show", _TRANSITION_STYLE_TYP[TRANSITION_STATUS_EXITING] = "hide", _TRANSITION_STYLE_TYP);
var Transition = function(_Component) {
  _inheritsLoose(Transition2, _Component);
  function Transition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      status: TRANSITION_STATUS_INITIAL
    };
    _this.handleStart = function(nextStatus) {
      var duration = _this.props.duration;
      var durationType = TRANSITION_CALLBACK_TYPE[nextStatus];
      var durationValue = normalizeTransitionDuration_default(duration, durationType);
      _this.timeoutId = setTimeout(function() {
        return _this.setState({
          status: nextStatus
        });
      }, durationValue);
    };
    _this.updateStatus = function(prevState) {
      if (prevState.status !== _this.state.status) {
        clearTimeout(_this.timeoutId);
        if (_this.state.nextStatus) {
          _this.handleStart(_this.state.nextStatus);
        }
      }
      if (!prevState.animating && _this.state.animating) {
        invoke_default(_this.props, "onStart", null, _extends({}, _this.props, {
          status: _this.state.status
        }));
      }
      if (prevState.animating && !_this.state.animating) {
        var callback = _this.state.status === TRANSITION_STATUS_ENTERED ? "onShow" : "onHide";
        invoke_default(_this.props, "onComplete", null, _extends({}, _this.props, {
          status: _this.state.status
        }));
        invoke_default(_this.props, callback, null, _extends({}, _this.props, {
          status: _this.state.status
        }));
      }
    };
    _this.computeClasses = function() {
      var _this$props = _this.props, animation = _this$props.animation, directional = _this$props.directional, children = _this$props.children;
      var _this$state = _this.state, animating = _this$state.animating, status = _this$state.status;
      var childClasses = get_default(children, "props.className");
      var isDirectional = isNil_default(directional) ? includes_default(SUI_exports.DIRECTIONAL_TRANSITIONS, animation) : directional;
      if (isDirectional) {
        return clsx_m_default(animation, childClasses, useKeyOnly(animating, "animating"), useKeyOnly(status === TRANSITION_STATUS_ENTERING, "in"), useKeyOnly(status === TRANSITION_STATUS_EXITING, "out"), useKeyOnly(status === TRANSITION_STATUS_EXITED, "hidden"), useKeyOnly(status !== TRANSITION_STATUS_EXITED, "visible"), "transition");
      }
      return clsx_m_default(animation, childClasses, useKeyOnly(animating, "animating transition"));
    };
    _this.computeStyle = function() {
      var _this$props2 = _this.props, children = _this$props2.children, duration = _this$props2.duration;
      var status = _this.state.status;
      var childStyle = get_default(children, "props.style");
      var type = TRANSITION_STYLE_TYPE[status];
      var animationDuration = type && normalizeTransitionDuration_default(duration, type) + "ms";
      return _extends({}, childStyle, {
        animationDuration
      });
    };
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var derivedState = computeStatuses({
      mountOnShow: props.mountOnShow,
      status: state.status,
      transitionOnMount: props.transitionOnMount,
      visible: props.visible,
      unmountOnHide: props.unmountOnHide
    });
    return derivedState;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus({});
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    this.updateStatus(prevState);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  };
  _proto.render = function render() {
    var children = this.props.children;
    var status = this.state.status;
    if (status === TRANSITION_STATUS_UNMOUNTED) {
      return null;
    }
    return (0, import_react51.cloneElement)(children, {
      className: this.computeClasses(),
      style: this.computeStyle()
    });
  };
  return Transition2;
}(import_react51.Component);
Transition.INITIAL = TRANSITION_STATUS_INITIAL;
Transition.ENTERED = TRANSITION_STATUS_ENTERED;
Transition.ENTERING = TRANSITION_STATUS_ENTERING;
Transition.EXITED = TRANSITION_STATUS_EXITED;
Transition.EXITING = TRANSITION_STATUS_EXITING;
Transition.UNMOUNTED = TRANSITION_STATUS_UNMOUNTED;
Transition.Group = TransitionGroup;
Transition.handledProps = ["animation", "children", "directional", "duration", "mountOnShow", "onComplete", "onHide", "onShow", "onStart", "reactKey", "transitionOnMount", "unmountOnHide", "visible"];
Transition.propTypes = true ? {
  /** Named animation event to used. Must be defined in CSS. */
  animation: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(SUI_exports.TRANSITIONS), import_prop_types43.default.string]),
  /** Primary content. */
  children: import_prop_types43.default.element.isRequired,
  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: import_prop_types43.default.bool,
  /** Duration of the CSS transition animation in milliseconds. */
  duration: import_prop_types43.default.oneOfType([import_prop_types43.default.number, import_prop_types43.default.shape({
    hide: import_prop_types43.default.number,
    show: import_prop_types43.default.number
  }), import_prop_types43.default.string]),
  /** Show the component; triggers the enter or exit animation. */
  visible: import_prop_types43.default.bool,
  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: import_prop_types43.default.bool,
  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: import_prop_types43.default.func,
  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: import_prop_types43.default.func,
  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: import_prop_types43.default.func,
  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: import_prop_types43.default.func,
  /** React's key of the element. */
  reactKey: import_prop_types43.default.string,
  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: import_prop_types43.default.bool,
  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: import_prop_types43.default.bool
} : {};
Transition.defaultProps = {
  animation: "fade",
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
};

// node_modules/semantic-ui-react/dist/es/addons/TransitionablePortal/TransitionablePortal.js
var TransitionablePortal = function(_Component) {
  _inheritsLoose(TransitionablePortal2, _Component);
  function TransitionablePortal2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {};
    _this.handlePortalClose = function() {
      _this.setState({
        portalOpen: -1
      });
    };
    _this.handlePortalOpen = function() {
      _this.setState({
        portalOpen: true
      });
    };
    _this.handleTransitionHide = function(nothing, data) {
      var portalOpen = _this.state.portalOpen;
      _this.setState({
        transitionVisible: false
      });
      invoke_default(_this.props, "onClose", null, _extends({}, data, {
        portalOpen: false,
        transitionVisible: false
      }));
      invoke_default(_this.props, "onHide", null, _extends({}, data, {
        portalOpen,
        transitionVisible: false
      }));
    };
    _this.handleTransitionStart = function(nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;
      var transitionVisible = status === TRANSITION_STATUS_ENTERING;
      invoke_default(_this.props, "onStart", null, _extends({}, data, {
        portalOpen,
        transitionVisible
      }));
      if (!transitionVisible) return;
      _this.setState({
        transitionVisible
      });
      invoke_default(_this.props, "onOpen", null, _extends({}, data, {
        transitionVisible,
        portalOpen: true
      }));
    };
    return _this;
  }
  TransitionablePortal2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.portalOpen === -1) {
      return {
        portalOpen: false
      };
    }
    if (isUndefined_default(props.open)) {
      return null;
    }
    return {
      portalOpen: props.open
    };
  };
  var _proto = TransitionablePortal2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, children = _this$props.children, transition = _this$props.transition;
    var _this$state = this.state, portalOpen = _this$state.portalOpen, transitionVisible = _this$state.transitionVisible;
    var open = portalOpen || transitionVisible;
    var rest = getUnhandledProps_default(TransitionablePortal2, this.props);
    return import_react52.default.createElement(Portal_default, _extends({}, rest, {
      open,
      onOpen: this.handlePortalOpen,
      onClose: this.handlePortalClose
    }), import_react52.default.createElement(Transition, _extends({}, transition, {
      transitionOnMount: true,
      onStart: this.handleTransitionStart,
      onHide: this.handleTransitionHide,
      visible: portalOpen
    }), children));
  };
  return TransitionablePortal2;
}(import_react52.Component);
TransitionablePortal.handledProps = ["children", "onClose", "onHide", "onOpen", "onStart", "open", "transition"];
TransitionablePortal.propTypes = true ? {
  /** Primary content. */
  children: import_prop_types44.default.node.isRequired,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: import_prop_types44.default.func,
  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: import_prop_types44.default.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: import_prop_types44.default.func,
  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: import_prop_types44.default.func,
  /** Controls whether or not the portal is displayed. */
  open: import_prop_types44.default.bool,
  /** Transition props. */
  transition: import_prop_types44.default.object
} : {};
TransitionablePortal.defaultProps = {
  transition: {
    animation: "scale",
    duration: 400
  }
};

// node_modules/semantic-ui-react/dist/es/behaviors/Visibility/Visibility.js
var import_prop_types45 = __toESM(require_prop_types());
var import_react53 = __toESM(require_react());
var Visibility = function(_Component) {
  _inheritsLoose(Visibility2, _Component);
  function Visibility2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.calculations = {
      bottomPassed: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      offScreen: false,
      onScreen: false,
      topPassed: false,
      topVisible: false
    };
    _this.firedCallbacks = [];
    _this.ref = (0, import_react53.createRef)();
    _this.fire = function(_ref, value, reverse) {
      var callback = _ref.callback, name = _ref.name;
      if (reverse === void 0) {
        reverse = false;
      }
      var _this$props = _this.props, continuous = _this$props.continuous, once = _this$props.once;
      var matchesDirection = _this.calculations[value] !== reverse;
      var executionPossible = continuous || _this.calculations[value] !== _this.oldCalculations[value];
      if (matchesDirection && executionPossible) _this.execute(callback, name);
      if (!once) _this.firedCallbacks = without_default(_this.firedCallbacks, name);
    };
    _this.handleUpdate = function() {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(_this.update);
    };
    _this.update = function() {
      if (!_this.mounted) return;
      _this.ticking = false;
      _this.oldCalculations = _this.calculations;
      _this.calculations = _this.computeCalculations();
      _this.pageYOffset = _this.getPageYOffset();
      var _this$props2 = _this.props, onBottomPassed = _this$props2.onBottomPassed, onBottomPassedReverse = _this$props2.onBottomPassedReverse, onBottomVisible = _this$props2.onBottomVisible, onBottomVisibleReverse = _this$props2.onBottomVisibleReverse, onPassing = _this$props2.onPassing, onPassingReverse = _this$props2.onPassingReverse, onTopPassed = _this$props2.onTopPassed, onTopPassedReverse = _this$props2.onTopPassedReverse, onTopVisible = _this$props2.onTopVisible, onTopVisibleReverse = _this$props2.onTopVisibleReverse, onOffScreen = _this$props2.onOffScreen, onOnScreen = _this$props2.onOnScreen, updateOn = _this$props2.updateOn;
      var forward = {
        bottomPassed: {
          callback: onBottomPassed,
          name: "onBottomPassed"
        },
        bottomVisible: {
          callback: onBottomVisible,
          name: "onBottomVisible"
        },
        passing: {
          callback: onPassing,
          name: "onPassing"
        },
        offScreen: {
          callback: onOffScreen,
          name: "onOffScreen"
        },
        onScreen: {
          callback: onOnScreen,
          name: "onOnScreen"
        },
        topPassed: {
          callback: onTopPassed,
          name: "onTopPassed"
        },
        topVisible: {
          callback: onTopVisible,
          name: "onTopVisible"
        }
      };
      var reverse = {
        bottomPassed: {
          callback: onBottomPassedReverse,
          name: "onBottomPassedReverse"
        },
        bottomVisible: {
          callback: onBottomVisibleReverse,
          name: "onBottomVisibleReverse"
        },
        passing: {
          callback: onPassingReverse,
          name: "onPassingReverse"
        },
        topPassed: {
          callback: onTopPassedReverse,
          name: "onTopPassedReverse"
        },
        topVisible: {
          callback: onTopVisibleReverse,
          name: "onTopVisibleReverse"
        }
      };
      invoke_default(_this.props, "onUpdate", null, _extends({}, _this.props, {
        calculations: _this.calculations
      }));
      _this.fireOnPassed();
      forEach_default(reverse, function(data, value) {
        return _this.fire(data, value, true);
      });
      forEach_default(forward, function(data, value) {
        return _this.fire(data, value);
      });
      if (updateOn === "repaint") _this.handleUpdate();
    };
    return _this;
  }
  var _proto = Visibility2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    if (!isBrowser_default()) return;
    var _this$props3 = this.props, context = _this$props3.context, fireOnMount = _this$props3.fireOnMount, updateOn = _this$props3.updateOn;
    this.pageYOffset = this.getPageYOffset();
    this.attachHandlers(context, updateOn);
    if (fireOnMount) this.update();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var cleanHappened = prevProps.continuous !== this.props.continuous || prevProps.once !== this.props.once || prevProps.updateOn !== this.props.updateOn;
    if (cleanHappened) this.firedCallbacks = [];
    if (prevProps.context !== this.props.context || prevProps.updateOn !== this.props.updateOn) {
      this.unattachHandlers(prevProps.context);
      this.attachHandlers(this.props.context, this.props.updateOn);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var context = this.props.context;
    this.unattachHandlers(context);
    this.mounted = false;
  };
  _proto.attachHandlers = function attachHandlers(context, updateOn) {
    if (updateOn === "events") {
      if (context) {
        eventStack_default.sub("resize", this.handleUpdate, {
          target: context
        });
        eventStack_default.sub("scroll", this.handleUpdate, {
          target: context
        });
      }
      return;
    }
    this.handleUpdate();
  };
  _proto.unattachHandlers = function unattachHandlers(context) {
    if (context) {
      eventStack_default.unsub("resize", this.handleUpdate, {
        target: context
      });
      eventStack_default.unsub("scroll", this.handleUpdate, {
        target: context
      });
    }
    if (this.frameId) cancelAnimationFrame(this.frameId);
  };
  _proto.execute = function execute(callback, name) {
    var continuous = this.props.continuous;
    if (!callback) return;
    if (!continuous && includes_default(this.firedCallbacks, name)) return;
    callback(null, _extends({}, this.props, {
      calculations: this.calculations
    }));
    this.firedCallbacks.push(name);
  };
  _proto.fireOnPassed = function fireOnPassed() {
    var _this2 = this;
    var _this$calculations = this.calculations, percentagePassed = _this$calculations.percentagePassed, pixelsPassed = _this$calculations.pixelsPassed;
    var onPassed = this.props.onPassed;
    forEach_default(onPassed, function(callback, passed) {
      var pixelsValue = Number(passed);
      if (pixelsValue && pixelsPassed >= pixelsValue) {
        _this2.execute(callback, passed);
        return;
      }
      var matchPercentage = ("" + passed).match(/^(\d+)%$/);
      if (!matchPercentage) return;
      var percentageValue = Number(matchPercentage[1]) / 100;
      if (percentagePassed >= percentageValue) _this2.execute(callback, passed);
    });
  };
  _proto.computeCalculations = function computeCalculations() {
    var offset2 = this.props.offset;
    var _this$ref$current$get = this.ref.current.getBoundingClientRect(), bottom2 = _this$ref$current$get.bottom, height = _this$ref$current$get.height, top2 = _this$ref$current$get.top, width = _this$ref$current$get.width;
    var _normalizeOffset = normalizeOffset_default(offset2), topOffset = _normalizeOffset[0], bottomOffset = _normalizeOffset[1];
    var newOffset = this.getPageYOffset();
    var direction = newOffset > this.pageYOffset ? "down" : "up";
    var topPassed = top2 < topOffset;
    var bottomPassed = bottom2 < bottomOffset;
    var pixelsPassed = bottomPassed ? 0 : Math.max(top2 * -1, 0);
    var percentagePassed = pixelsPassed / height;
    var bottomVisible = bottom2 >= bottomOffset && bottom2 <= window.innerHeight;
    var topVisible = top2 >= topOffset && top2 <= window.innerHeight;
    var fits = topVisible && bottomVisible;
    var passing = topPassed && !bottomPassed;
    var onScreen = (topVisible || topPassed) && !bottomPassed;
    var offScreen = !onScreen;
    return {
      bottomPassed,
      bottomVisible,
      direction,
      fits,
      height,
      passing,
      percentagePassed,
      pixelsPassed,
      offScreen,
      onScreen,
      topPassed,
      topVisible,
      width
    };
  };
  _proto.getPageYOffset = function getPageYOffset() {
    var context = this.props.context;
    if (context) {
      return context === window ? window.pageYOffset : context.scrollTop;
    }
    return 0;
  };
  _proto.render = function render() {
    var children = this.props.children;
    var ElementType = getElementType_default(Visibility2, this.props);
    var rest = getUnhandledProps_default(Visibility2, this.props);
    return import_react53.default.createElement(Ref, {
      innerRef: this.ref
    }, import_react53.default.createElement(ElementType, rest, children));
  };
  return Visibility2;
}(import_react53.Component);
Visibility.handledProps = ["as", "children", "context", "continuous", "fireOnMount", "offset", "onBottomPassed", "onBottomPassedReverse", "onBottomVisible", "onBottomVisibleReverse", "onOffScreen", "onOnScreen", "onPassed", "onPassing", "onPassingReverse", "onTopPassed", "onTopPassedReverse", "onTopVisible", "onTopVisibleReverse", "onUpdate", "once", "updateOn"];
Visibility.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types45.default.elementType,
  /** Primary content. */
  children: import_prop_types45.default.node,
  /** Context which visibility should attach onscroll events. */
  context: import_prop_types45.default.object,
  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: import_prop_types45.default.bool,
  /** Fires callbacks immediately after mount. */
  fireOnMount: import_prop_types45.default.bool,
  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: import_prop_types45.default.func,
  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: import_prop_types45.default.func,
  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: import_prop_types45.default.func,
  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: import_prop_types45.default.func,
  /**
   * Value that context should be adjusted in pixels. Useful for making content appear below content fixed to the
   * page.
   */
  offset: import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.string, import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.string]))]),
  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: import_prop_types45.default.bool,
  /** Element is not visible on the screen. */
  onPassed: import_prop_types45.default.object,
  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: import_prop_types45.default.func,
  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: import_prop_types45.default.func,
  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: import_prop_types45.default.func,
  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: import_prop_types45.default.func,
  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: import_prop_types45.default.func,
  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: import_prop_types45.default.func,
  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: import_prop_types45.default.func,
  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: import_prop_types45.default.func,
  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: import_prop_types45.default.func,
  /**
   * Allows to choose the mode of the position calculations:
   * - `events` - (default) update and fire callbacks only on scroll/resize events
   * - `repaint` - update and fire callbacks on browser repaint (animation frames)
   */
  updateOn: import_prop_types45.default.oneOf(["events", "repaint"])
} : {};
Visibility.defaultProps = {
  context: isBrowser_default() ? window : null,
  continuous: false,
  offset: [0, 0],
  once: true,
  updateOn: "events"
};

// node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb.js
var import_prop_types48 = __toESM(require_prop_types());
var import_react56 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbDivider.js
var import_prop_types46 = __toESM(require_prop_types());
var import_react54 = __toESM(require_react());
function BreadcrumbDivider(props) {
  var children = props.children, className = props.className, content = props.content, icon = props.icon;
  var classes = clsx_m_default("divider", className);
  var rest = getUnhandledProps_default(BreadcrumbDivider, props);
  var ElementType = getElementType_default(BreadcrumbDivider, props);
  if (!isNil_default(icon)) {
    return Icon_default.create(icon, {
      defaultProps: _extends({}, rest, {
        className: classes
      }),
      autoGenerateKey: false
    });
  }
  if (!isNil_default(content)) {
    return import_react54.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react54.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? "/" : children);
}
BreadcrumbDivider.handledProps = ["as", "children", "className", "content", "icon"];
BreadcrumbDivider.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types46.default.elementType,
  /** Primary content. */
  children: import_prop_types46.default.node,
  /** Additional classes. */
  className: import_prop_types46.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes_exports.itemShorthand
} : {};
BreadcrumbDivider.create = createShorthandFactory(BreadcrumbDivider, function(icon) {
  return {
    icon
  };
});
var BreadcrumbDivider_default = BreadcrumbDivider;

// node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbSection.js
var import_prop_types47 = __toESM(require_prop_types());
var import_react55 = __toESM(require_react());
var BreadcrumbSection = function(_Component) {
  _inheritsLoose(BreadcrumbSection2, _Component);
  function BreadcrumbSection2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.computeElementType = function() {
      var _this$props = _this.props, link = _this$props.link, onClick = _this$props.onClick;
      if (link || onClick) return "a";
    };
    _this.handleClick = function(e) {
      return invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = BreadcrumbSection2.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props, active = _this$props2.active, children = _this$props2.children, className = _this$props2.className, content = _this$props2.content, href = _this$props2.href;
    var classes = clsx_m_default(useKeyOnly(active, "active"), "section", className);
    var rest = getUnhandledProps_default(BreadcrumbSection2, this.props);
    var ElementType = getElementType_default(BreadcrumbSection2, this.props, this.computeElementType);
    return import_react55.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href,
      onClick: this.handleClick
    }), childrenUtils_exports.isNil(children) ? content : children);
  };
  return BreadcrumbSection2;
}(import_react55.Component);
BreadcrumbSection.handledProps = ["active", "as", "children", "className", "content", "href", "link", "onClick"];
BreadcrumbSection.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types47.default.elementType,
  /** Style as the currently active section. */
  active: import_prop_types47.default.bool,
  /** Primary content. */
  children: import_prop_types47.default.node,
  /** Additional classes. */
  className: import_prop_types47.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes_exports.every([customPropTypes_exports.disallow(["link"]), import_prop_types47.default.string]),
  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes_exports.every([customPropTypes_exports.disallow(["href"]), import_prop_types47.default.bool]),
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types47.default.func
} : {};
BreadcrumbSection.create = createShorthandFactory(BreadcrumbSection, function(content) {
  return {
    content,
    link: true
  };
});

// node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb.js
function Breadcrumb(props) {
  var children = props.children, className = props.className, divider = props.divider, icon = props.icon, sections = props.sections, size2 = props.size;
  var classes = clsx_m_default("ui", size2, "breadcrumb", className);
  var rest = getUnhandledProps_default(Breadcrumb, props);
  var ElementType = getElementType_default(Breadcrumb, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react56.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var childElements = [];
  forEach_default(sections, function(section, index) {
    var breadcrumbElement = BreadcrumbSection.create(section);
    childElements.push(breadcrumbElement);
    if (index !== sections.length - 1) {
      var key = breadcrumbElement.key + "_divider" || JSON.stringify(section);
      childElements.push(BreadcrumbDivider_default.create({
        content: divider,
        icon,
        key
      }));
    }
  });
  return import_react56.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childElements);
}
Breadcrumb.handledProps = ["as", "children", "className", "divider", "icon", "sections", "size"];
Breadcrumb.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types48.default.elementType,
  /** Primary content. */
  children: import_prop_types48.default.node,
  /** Additional classes. */
  className: import_prop_types48.default.string,
  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: customPropTypes_exports.every([customPropTypes_exports.disallow(["icon"]), customPropTypes_exports.contentShorthand]),
  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes_exports.every([customPropTypes_exports.disallow(["divider"]), customPropTypes_exports.itemShorthand]),
  /** Shorthand array of props for Breadcrumb.Section. */
  sections: customPropTypes_exports.collectionShorthand,
  /** Size of Breadcrumb. */
  size: import_prop_types48.default.oneOf(without_default(SUI_exports.SIZES, "medium"))
} : {};
Breadcrumb.Divider = BreadcrumbDivider_default;
Breadcrumb.Section = BreadcrumbSection;
var Breadcrumb_default = Breadcrumb;

// node_modules/semantic-ui-react/dist/es/collections/Form/Form.js
var import_prop_types59 = __toESM(require_prop_types());
var import_react67 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js
var import_prop_types50 = __toESM(require_prop_types());
var import_react58 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Form/FormField.js
var import_prop_types49 = __toESM(require_prop_types());
var import_react57 = __toESM(require_react());
function FormField(props) {
  var children = props.children, className = props.className, content = props.content, control = props.control, disabled = props.disabled, error = props.error, inline = props.inline, label = props.label, required = props.required, type = props.type, width = props.width, id = props.id;
  var classes = clsx_m_default(useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(inline, "inline"), useKeyOnly(required, "required"), useWidthProp(width, "wide"), "field", className);
  var rest = getUnhandledProps_default(FormField, props);
  var ElementType = getElementType_default(FormField, props);
  var errorPointing = get_default(error, "pointing", "above");
  var errorLabel = Label.create(error, {
    autoGenerateKey: false,
    defaultProps: {
      prompt: true,
      pointing: errorPointing,
      id: id ? id + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": true
    }
  });
  var errorLabelBefore = (errorPointing === "below" || errorPointing === "right") && errorLabel;
  var errorLabelAfter = (errorPointing === "above" || errorPointing === "left") && errorLabel;
  if (isNil_default(control)) {
    if (isNil_default(label)) {
      return import_react57.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        id
      }), childrenUtils_exports.isNil(children) ? content : children);
    }
    return import_react57.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      id
    }), errorLabelBefore, createHTMLLabel(label, {
      autoGenerateKey: false
    }), errorLabelAfter);
  }
  var ariaDescribedBy = id && error ? id + "-error-message" : null;
  var ariaAttrs = {
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": error ? true : void 0
  };
  var controlProps = _extends({}, rest, {
    content,
    children,
    disabled,
    required,
    type,
    id
  });
  if (control === "input" && (type === "checkbox" || type === "radio")) {
    return import_react57.default.createElement(ElementType, {
      className: classes
    }, import_react57.default.createElement("label", null, errorLabelBefore, (0, import_react57.createElement)(control, _extends({}, ariaAttrs, controlProps)), " ", label, errorLabelAfter));
  }
  if (control === Checkbox || control === Radio_default) {
    return import_react57.default.createElement(ElementType, {
      className: classes
    }, errorLabelBefore, (0, import_react57.createElement)(control, _extends({}, ariaAttrs, controlProps, {
      label
    })), errorLabelAfter);
  }
  return import_react57.default.createElement(ElementType, {
    className: classes
  }, createHTMLLabel(label, {
    defaultProps: {
      htmlFor: id
    },
    autoGenerateKey: false
  }), errorLabelBefore, (0, import_react57.createElement)(control, _extends({}, ariaAttrs, controlProps)), errorLabelAfter);
}
FormField.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
FormField.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types49.default.elementType,
  /** Primary content. */
  children: import_prop_types49.default.node,
  /** Additional classes. */
  className: import_prop_types49.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: import_prop_types49.default.oneOfType([import_prop_types49.default.elementType, import_prop_types49.default.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: import_prop_types49.default.bool,
  /** Individual fields may display an error state along with a message. */
  error: import_prop_types49.default.oneOfType([import_prop_types49.default.bool, customPropTypes_exports.itemShorthand]),
  /** The id of the control */
  id: import_prop_types49.default.string,
  /** A field can have its label next to instead of above it. */
  inline: import_prop_types49.default.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: import_prop_types49.default.oneOfType([import_prop_types49.default.node, import_prop_types49.default.object]),
  /** A field can show that input is mandatory. */
  required: import_prop_types49.default.bool,
  /** Passed to the control component (i.e. <input type='password' />) */
  type: customPropTypes_exports.every([
    customPropTypes_exports.demand(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: import_prop_types49.default.oneOf(SUI_exports.WIDTHS)
} : {};
var FormField_default = FormField;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js
function FormButton(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormButton, props);
  var ElementType = getElementType_default(FormButton, props);
  return import_react58.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormButton.handledProps = ["as", "control"];
FormButton.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types50.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormButton.defaultProps = {
  as: FormField_default,
  control: Button_default
};
var FormButton_default = FormButton;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormCheckbox.js
var import_prop_types51 = __toESM(require_prop_types());
var import_react59 = __toESM(require_react());
function FormCheckbox(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormCheckbox, props);
  var ElementType = getElementType_default(FormCheckbox, props);
  return import_react59.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormCheckbox.handledProps = ["as", "control"];
FormCheckbox.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types51.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormCheckbox.defaultProps = {
  as: FormField_default,
  control: Checkbox
};
var FormCheckbox_default = FormCheckbox;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormDropdown.js
var import_prop_types52 = __toESM(require_prop_types());
var import_react60 = __toESM(require_react());
function FormDropdown(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormDropdown, props);
  var ElementType = getElementType_default(FormDropdown, props);
  return import_react60.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormDropdown.handledProps = ["as", "control"];
FormDropdown.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types52.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormDropdown.defaultProps = {
  as: FormField_default,
  control: Dropdown
};
var FormDropdown_default = FormDropdown;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormGroup.js
var import_prop_types53 = __toESM(require_prop_types());
var import_react61 = __toESM(require_react());
function FormGroup(props) {
  var children = props.children, className = props.className, grouped = props.grouped, inline = props.inline, unstackable = props.unstackable, widths = props.widths;
  var classes = clsx_m_default(useKeyOnly(grouped, "grouped"), useKeyOnly(inline, "inline"), useKeyOnly(unstackable, "unstackable"), useWidthProp(widths, null, true), "fields", className);
  var rest = getUnhandledProps_default(FormGroup, props);
  var ElementType = getElementType_default(FormGroup, props);
  return import_react61.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
FormGroup.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
FormGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types53.default.elementType,
  /** Primary content. */
  children: import_prop_types53.default.node,
  /** Additional classes. */
  className: import_prop_types53.default.string,
  /** Fields can show related choices. */
  grouped: customPropTypes_exports.every([customPropTypes_exports.disallow(["inline"]), import_prop_types53.default.bool]),
  /** Multiple fields may be inline in a row. */
  inline: customPropTypes_exports.every([customPropTypes_exports.disallow(["grouped"]), import_prop_types53.default.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: import_prop_types53.default.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: import_prop_types53.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"]))
} : {};
var FormGroup_default = FormGroup;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js
var import_prop_types55 = __toESM(require_prop_types());
var import_react63 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Input/Input.js
var import_prop_types54 = __toESM(require_prop_types());
var import_react62 = __toESM(require_react());
var Input = function(_Component) {
  _inheritsLoose(Input2, _Component);
  function Input2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inputRef = (0, import_react62.createRef)();
    _this.computeIcon = function() {
      var _this$props = _this.props, loading = _this$props.loading, icon = _this$props.icon;
      if (!isNil_default(icon)) return icon;
      if (loading) return "spinner";
    };
    _this.computeTabIndex = function() {
      var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
      if (!isNil_default(tabIndex)) return tabIndex;
      if (disabled) return -1;
    };
    _this.focus = function(options) {
      return _this.inputRef.current.focus(options);
    };
    _this.select = function() {
      return _this.inputRef.current.select();
    };
    _this.handleChange = function(e) {
      var value = get_default(e, "target.value");
      invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
        value
      }));
    };
    _this.handleChildOverrides = function(child, defaultProps) {
      return _extends({}, defaultProps, child.props, {
        ref: function ref2(c) {
          handleRef(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    };
    _this.partitionProps = function() {
      var _this$props3 = _this.props, disabled = _this$props3.disabled, type = _this$props3.type;
      var tabIndex = _this.computeTabIndex();
      var unhandled = getUnhandledProps_default(Input2, _this.props);
      var _partitionHTMLProps = partitionHTMLProps(unhandled), htmlInputProps2 = _partitionHTMLProps[0], rest = _partitionHTMLProps[1];
      return [_extends({}, htmlInputProps2, {
        disabled,
        type,
        tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    };
    return _this;
  }
  var _proto = Input2.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props4 = this.props, action = _this$props4.action, actionPosition = _this$props4.actionPosition, children = _this$props4.children, className = _this$props4.className, disabled = _this$props4.disabled, error = _this$props4.error, fluid = _this$props4.fluid, focus = _this$props4.focus, icon = _this$props4.icon, iconPosition = _this$props4.iconPosition, input = _this$props4.input, inverted = _this$props4.inverted, label = _this$props4.label, labelPosition = _this$props4.labelPosition, loading = _this$props4.loading, size2 = _this$props4.size, transparent = _this$props4.transparent, type = _this$props4.type;
    var classes = clsx_m_default("ui", size2, useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(fluid, "fluid"), useKeyOnly(focus, "focus"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(transparent, "transparent"), useValueAndKey(actionPosition, "action") || useKeyOnly(action, "action"), useValueAndKey(iconPosition, "icon") || useKeyOnly(icon || loading, "icon"), useValueAndKey(labelPosition, "labeled") || useKeyOnly(label, "labeled"), "input", className);
    var ElementType = getElementType_default(Input2, this.props);
    var _this$partitionProps = this.partitionProps(), htmlInputProps2 = _this$partitionProps[0], rest = _this$partitionProps[1];
    if (!childrenUtils_exports.isNil(children)) {
      var childElements = map_default(import_react62.Children.toArray(children), function(child) {
        if (child.type !== "input") return child;
        return (0, import_react62.cloneElement)(child, _this2.handleChildOverrides(child, htmlInputProps2));
      });
      return import_react62.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childElements);
    }
    var actionElement = Button_default.create(action, {
      autoGenerateKey: false
    });
    var labelElement = Label.create(label, {
      defaultProps: {
        className: clsx_m_default(
          "label",
          // add 'left|right corner'
          includes_default(labelPosition, "corner") && labelPosition
        )
      },
      autoGenerateKey: false
    });
    return import_react62.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), actionPosition === "left" && actionElement, labelPosition !== "right" && labelElement, createHTMLInput(input || type, {
      defaultProps: htmlInputProps2,
      autoGenerateKey: false
    }), Icon_default.create(this.computeIcon(), {
      autoGenerateKey: false
    }), actionPosition !== "left" && actionElement, labelPosition === "right" && labelElement);
  };
  return Input2;
}(import_react62.Component);
Input.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Input.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types54.default.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: import_prop_types54.default.oneOfType([import_prop_types54.default.bool, customPropTypes_exports.itemShorthand]),
  /** An action can appear along side an Input on the left or right. */
  actionPosition: import_prop_types54.default.oneOf(["left"]),
  /** Primary content. */
  children: import_prop_types54.default.node,
  /** Additional classes. */
  className: import_prop_types54.default.string,
  /** An Input field can show that it is disabled. */
  disabled: import_prop_types54.default.bool,
  /** An Input field can show the data contains errors. */
  error: import_prop_types54.default.bool,
  /** Take on the size of its container. */
  fluid: import_prop_types54.default.bool,
  /** An Input field can show a user is currently interacting with it. */
  focus: import_prop_types54.default.bool,
  /** Optional Icon to display inside the Input. */
  icon: import_prop_types54.default.oneOfType([import_prop_types54.default.bool, customPropTypes_exports.itemShorthand]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: import_prop_types54.default.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: customPropTypes_exports.itemShorthand,
  /** Format to appear on dark backgrounds. */
  inverted: import_prop_types54.default.bool,
  /** Optional Label to display along side the Input. */
  label: customPropTypes_exports.itemShorthand,
  /** A Label can appear outside an Input on the left or right. */
  labelPosition: import_prop_types54.default.oneOf(["left", "right", "left corner", "right corner"]),
  /** An Icon Input field can show that it is currently loading data. */
  loading: import_prop_types54.default.bool,
  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: import_prop_types54.default.func,
  /** An Input can vary in size. */
  size: import_prop_types54.default.oneOf(["mini", "small", "large", "big", "huge", "massive"]),
  /** An Input can receive focus. */
  tabIndex: import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]),
  /** Transparent Input has no background. */
  transparent: import_prop_types54.default.bool,
  /** The HTML input type. */
  type: import_prop_types54.default.string
} : {};
Input.defaultProps = {
  type: "text"
};
Input.create = createShorthandFactory(Input, function(type) {
  return {
    type
  };
});
var Input_default = Input;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js
function FormInput(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormInput, props);
  var ElementType = getElementType_default(FormInput, props);
  return import_react63.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormInput.handledProps = ["as", "control"];
FormInput.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types55.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormInput.defaultProps = {
  as: FormField_default,
  control: Input_default
};
var FormInput_default = FormInput;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormRadio.js
var import_prop_types56 = __toESM(require_prop_types());
var import_react64 = __toESM(require_react());
function FormRadio(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormRadio, props);
  var ElementType = getElementType_default(FormRadio, props);
  return import_react64.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormRadio.handledProps = ["as", "control"];
FormRadio.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types56.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormRadio.defaultProps = {
  as: FormField_default,
  control: Radio_default
};
var FormRadio_default = FormRadio;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormSelect.js
var import_prop_types57 = __toESM(require_prop_types());
var import_react65 = __toESM(require_react());
function FormSelect(props) {
  var control = props.control, options = props.options;
  var rest = getUnhandledProps_default(FormSelect, props);
  var ElementType = getElementType_default(FormSelect, props);
  return import_react65.default.createElement(ElementType, _extends({}, rest, {
    control,
    options
  }));
}
FormSelect.handledProps = ["as", "control", "options"];
FormSelect.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types57.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: import_prop_types57.default.arrayOf(import_prop_types57.default.shape(Dropdown.Item.propTypes)).isRequired
} : {};
FormSelect.defaultProps = {
  as: FormField_default,
  control: Select_default
};
var FormSelect_default = FormSelect;

// node_modules/semantic-ui-react/dist/es/collections/Form/FormTextArea.js
var import_prop_types58 = __toESM(require_prop_types());
var import_react66 = __toESM(require_react());
function FormTextArea(props) {
  var control = props.control;
  var rest = getUnhandledProps_default(FormTextArea, props);
  var ElementType = getElementType_default(FormTextArea, props);
  return import_react66.default.createElement(ElementType, _extends({}, rest, {
    control
  }));
}
FormTextArea.handledProps = ["as", "control"];
FormTextArea.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types58.default.elementType,
  /** A FormField control prop. */
  control: FormField_default.propTypes.control
} : {};
FormTextArea.defaultProps = {
  as: FormField_default,
  control: TextArea_default
};
var FormTextArea_default = FormTextArea;

// node_modules/semantic-ui-react/dist/es/collections/Form/Form.js
var Form = function(_Component) {
  _inheritsLoose(Form2, _Component);
  function Form2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
    _this.handleSubmit = function(e) {
      var action = _this.props.action;
      if (typeof action !== "string") invoke_default(e, "preventDefault");
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      invoke_default.apply(void 0, [_this.props, "onSubmit", e, _this.props].concat(args));
    };
    return _this;
  }
  var _proto = Form2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, action = _this$props.action, children = _this$props.children, className = _this$props.className, error = _this$props.error, inverted = _this$props.inverted, loading = _this$props.loading, reply = _this$props.reply, size2 = _this$props.size, success = _this$props.success, unstackable = _this$props.unstackable, warning2 = _this$props.warning, widths = _this$props.widths;
    var classes = clsx_m_default("ui", size2, useKeyOnly(error, "error"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(reply, "reply"), useKeyOnly(success, "success"), useKeyOnly(unstackable, "unstackable"), useKeyOnly(warning2, "warning"), useWidthProp(widths, null, true), "form", className);
    var rest = getUnhandledProps_default(Form2, this.props);
    var ElementType = getElementType_default(Form2, this.props);
    return import_react67.default.createElement(ElementType, _extends({}, rest, {
      action,
      className: classes,
      onSubmit: this.handleSubmit
    }), children);
  };
  return Form2;
}(import_react67.Component);
Form.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
Form.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types59.default.elementType,
  /** The HTML form action */
  action: import_prop_types59.default.string,
  /** Primary content. */
  children: import_prop_types59.default.node,
  /** Additional classes. */
  className: import_prop_types59.default.string,
  /** Automatically show any error Message children. */
  error: import_prop_types59.default.bool,
  /** A form can have its color inverted for contrast. */
  inverted: import_prop_types59.default.bool,
  /** Automatically show a loading indicator. */
  loading: import_prop_types59.default.bool,
  /** The HTML form submit handler. */
  onSubmit: import_prop_types59.default.func,
  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: import_prop_types59.default.bool,
  /** A form can vary in size. */
  size: import_prop_types59.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Automatically show any success Message children. */
  success: import_prop_types59.default.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: import_prop_types59.default.bool,
  /** Automatically show any warning Message children. */
  warning: import_prop_types59.default.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: import_prop_types59.default.oneOf(["equal"])
} : {};
Form.defaultProps = {
  as: "form"
};
Form.Field = FormField_default;
Form.Button = FormButton_default;
Form.Checkbox = FormCheckbox_default;
Form.Dropdown = FormDropdown_default;
Form.Group = FormGroup_default;
Form.Input = FormInput_default;
Form.Radio = FormRadio_default;
Form.Select = FormSelect_default;
Form.TextArea = FormTextArea_default;
var Form_default = Form;

// node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
var import_prop_types62 = __toESM(require_prop_types());
var import_react70 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js
var import_prop_types60 = __toESM(require_prop_types());
var import_react68 = __toESM(require_react());
function GridColumn(props) {
  var children = props.children, className = props.className, computer = props.computer, color = props.color, floated = props.floated, largeScreen = props.largeScreen, mobile = props.mobile, only = props.only, stretched = props.stretched, tablet = props.tablet, textAlign = props.textAlign, verticalAlign = props.verticalAlign, widescreen = props.widescreen, width = props.width;
  var classes = clsx_m_default(color, useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useTextAlignProp(textAlign), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign), useWidthProp(computer, "wide computer"), useWidthProp(largeScreen, "wide large screen"), useWidthProp(mobile, "wide mobile"), useWidthProp(tablet, "wide tablet"), useWidthProp(widescreen, "wide widescreen"), useWidthProp(width, "wide"), "column", className);
  var rest = getUnhandledProps_default(GridColumn, props);
  var ElementType = getElementType_default(GridColumn, props);
  return import_react68.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
GridColumn.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
GridColumn.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types60.default.elementType,
  /** Primary content. */
  children: import_prop_types60.default.node,
  /** Additional classes. */
  className: import_prop_types60.default.string,
  /** A grid column can be colored. */
  color: import_prop_types60.default.oneOf(SUI_exports.COLORS),
  /** A column can specify a width for a computer. */
  computer: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: import_prop_types60.default.oneOf(SUI_exports.FLOATS),
  /** A column can specify a width for a large screen device. */
  largeScreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can specify a width for a mobile device. */
  mobile: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: import_prop_types60.default.bool,
  /** A column can specify a width for a tablet device. */
  tablet: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can specify its text alignment. */
  textAlign: import_prop_types60.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types60.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** A column can specify a width for a wide screen device. */
  widescreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)]),
  /** Represents width of column. */
  width: customPropTypes_exports.every([customPropTypes_exports.disallow(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), import_prop_types60.default.oneOf(SUI_exports.WIDTHS)])
} : {};
GridColumn.create = createShorthandFactory(GridColumn, function(children) {
  return {
    children
  };
});
var GridColumn_default = GridColumn;

// node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js
var import_prop_types61 = __toESM(require_prop_types());
var import_react69 = __toESM(require_react());
function GridRow(props) {
  var centered = props.centered, children = props.children, className = props.className, color = props.color, columns = props.columns, divided = props.divided, only = props.only, reversed = props.reversed, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default(color, useKeyOnly(centered, "centered"), useKeyOnly(divided, "divided"), useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "row", className);
  var rest = getUnhandledProps_default(GridRow, props);
  var ElementType = getElementType_default(GridRow, props);
  return import_react69.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
GridRow.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types61.default.elementType,
  /** A row can have its columns centered. */
  centered: import_prop_types61.default.bool,
  /** Primary content. */
  children: import_prop_types61.default.node,
  /** Additional classes. */
  className: import_prop_types61.default.string,
  /** A grid row can be colored. */
  color: import_prop_types61.default.oneOf(SUI_exports.COLORS),
  /** Represents column count per line in Row. */
  columns: import_prop_types61.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: import_prop_types61.default.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: import_prop_types61.default.bool,
  /** A row can specify its text alignment. */
  textAlign: import_prop_types61.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types61.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
var GridRow_default = GridRow;

// node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
function Grid(props) {
  var celled = props.celled, centered = props.centered, children = props.children, className = props.className, columns = props.columns, container = props.container, divided = props.divided, doubling = props.doubling, inverted = props.inverted, padded = props.padded, relaxed = props.relaxed, reversed = props.reversed, stackable = props.stackable, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default("ui", useKeyOnly(centered, "centered"), useKeyOnly(container, "container"), useKeyOnly(doubling, "doubling"), useKeyOnly(inverted, "inverted"), useKeyOnly(stackable, "stackable"), useKeyOnly(stretched, "stretched"), useKeyOrValueAndKey(celled, "celled"), useKeyOrValueAndKey(divided, "divided"), useKeyOrValueAndKey(padded, "padded"), useKeyOrValueAndKey(relaxed, "relaxed"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "grid", className);
  var rest = getUnhandledProps_default(Grid, props);
  var ElementType = getElementType_default(Grid, props);
  return import_react70.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Grid.Column = GridColumn_default;
Grid.Row = GridRow_default;
Grid.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types62.default.elementType,
  /** A grid can have rows divided into cells. */
  celled: import_prop_types62.default.oneOfType([import_prop_types62.default.bool, import_prop_types62.default.oneOf(["internally"])]),
  /** A grid can have its columns centered. */
  centered: import_prop_types62.default.bool,
  /** Primary content. */
  children: import_prop_types62.default.node,
  /** Additional classes. */
  className: import_prop_types62.default.string,
  /** Represents column count per row in Grid. */
  columns: import_prop_types62.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
  /** A grid can be combined with a container to use the available layout and alignment. */
  container: import_prop_types62.default.bool,
  /** A grid can have dividers between its columns. */
  divided: import_prop_types62.default.oneOfType([import_prop_types62.default.bool, import_prop_types62.default.oneOf(["vertically"])]),
  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: import_prop_types62.default.bool,
  /** A grid's colors can be inverted. */
  inverted: import_prop_types62.default.bool,
  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: import_prop_types62.default.oneOfType([import_prop_types62.default.bool, import_prop_types62.default.oneOf(["horizontally", "vertically"])]),
  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: import_prop_types62.default.oneOfType([import_prop_types62.default.bool, import_prop_types62.default.oneOf(["very"])]),
  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: import_prop_types62.default.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: import_prop_types62.default.bool,
  /** A grid can specify its text alignment. */
  textAlign: import_prop_types62.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types62.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
var Grid_default = Grid;

// node_modules/semantic-ui-react/dist/es/collections/Message/Message.js
var import_prop_types67 = __toESM(require_prop_types());
var import_react75 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Message/MessageContent.js
var import_prop_types63 = __toESM(require_prop_types());
var import_react71 = __toESM(require_react());
function MessageContent(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(MessageContent, props);
  var ElementType = getElementType_default(MessageContent, props);
  return import_react71.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MessageContent.handledProps = ["as", "children", "className", "content"];
MessageContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types63.default.elementType,
  /** Primary content. */
  children: import_prop_types63.default.node,
  /** Additional classes. */
  className: import_prop_types63.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var MessageContent_default = MessageContent;

// node_modules/semantic-ui-react/dist/es/collections/Message/MessageHeader.js
var import_prop_types64 = __toESM(require_prop_types());
var import_react72 = __toESM(require_react());
function MessageHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(MessageHeader, props);
  var ElementType = getElementType_default(MessageHeader, props);
  return import_react72.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MessageHeader.handledProps = ["as", "children", "className", "content"];
MessageHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types64.default.elementType,
  /** Primary content. */
  children: import_prop_types64.default.node,
  /** Additional classes. */
  className: import_prop_types64.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
MessageHeader.create = createShorthandFactory(MessageHeader, function(val) {
  return {
    content: val
  };
});
var MessageHeader_default = MessageHeader;

// node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js
var import_prop_types66 = __toESM(require_prop_types());
var import_react74 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Message/MessageItem.js
var import_prop_types65 = __toESM(require_prop_types());
var import_react73 = __toESM(require_react());
function MessageItem(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(MessageItem, props);
  var ElementType = getElementType_default(MessageItem, props);
  return import_react73.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MessageItem.handledProps = ["as", "children", "className", "content"];
MessageItem.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types65.default.elementType,
  /** Primary content. */
  children: import_prop_types65.default.node,
  /** Additional classes. */
  className: import_prop_types65.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
MessageItem.defaultProps = {
  as: "li"
};
MessageItem.create = createShorthandFactory(MessageItem, function(content) {
  return {
    content
  };
});
var MessageItem_default = MessageItem;

// node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js
function MessageList(props) {
  var children = props.children, className = props.className, items = props.items;
  var classes = clsx_m_default("list", className);
  var rest = getUnhandledProps_default(MessageList, props);
  var ElementType = getElementType_default(MessageList, props);
  return import_react74.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? map_default(items, MessageItem_default.create) : children);
}
MessageList.handledProps = ["as", "children", "className", "items"];
MessageList.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types66.default.elementType,
  /** Primary content. */
  children: import_prop_types66.default.node,
  /** Additional classes. */
  className: import_prop_types66.default.string,
  /** Shorthand Message.Items. */
  items: customPropTypes_exports.collectionShorthand
} : {};
MessageList.defaultProps = {
  as: "ul"
};
MessageList.create = createShorthandFactory(MessageList, function(val) {
  return {
    items: val
  };
});
var MessageList_default = MessageList;

// node_modules/semantic-ui-react/dist/es/collections/Message/Message.js
var Message = function(_Component) {
  _inheritsLoose(Message2, _Component);
  function Message2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleDismiss = function(e) {
      var onDismiss = _this.props.onDismiss;
      if (onDismiss) onDismiss(e, _this.props);
    };
    return _this;
  }
  var _proto = Message2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, attached = _this$props.attached, children = _this$props.children, className = _this$props.className, color = _this$props.color, compact2 = _this$props.compact, content = _this$props.content, error = _this$props.error, floating = _this$props.floating, header = _this$props.header, hidden = _this$props.hidden, icon = _this$props.icon, info = _this$props.info, list = _this$props.list, negative = _this$props.negative, onDismiss = _this$props.onDismiss, positive = _this$props.positive, size2 = _this$props.size, success = _this$props.success, visible = _this$props.visible, warning2 = _this$props.warning;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(compact2, "compact"), useKeyOnly(error, "error"), useKeyOnly(floating, "floating"), useKeyOnly(hidden, "hidden"), useKeyOnly(icon, "icon"), useKeyOnly(info, "info"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(success, "success"), useKeyOnly(visible, "visible"), useKeyOnly(warning2, "warning"), useKeyOrValueAndKey(attached, "attached"), "message", className);
    var dismissIcon = onDismiss && import_react75.default.createElement(Icon_default, {
      name: "close",
      onClick: this.handleDismiss
    });
    var rest = getUnhandledProps_default(Message2, this.props);
    var ElementType = getElementType_default(Message2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react75.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), dismissIcon, children);
    }
    return import_react75.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), dismissIcon, Icon_default.create(icon, {
      autoGenerateKey: false
    }), (!isNil_default(header) || !isNil_default(content) || !isNil_default(list)) && import_react75.default.createElement(MessageContent_default, null, MessageHeader_default.create(header, {
      autoGenerateKey: false
    }), MessageList_default.create(list, {
      autoGenerateKey: false
    }), createHTMLParagraph(content, {
      autoGenerateKey: false
    })));
  };
  return Message2;
}(import_react75.Component);
Message.handledProps = ["as", "attached", "children", "className", "color", "compact", "content", "error", "floating", "header", "hidden", "icon", "info", "list", "negative", "onDismiss", "positive", "size", "success", "visible", "warning"];
Message.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types67.default.elementType,
  /** A message can be formatted to attach itself to other content. */
  attached: import_prop_types67.default.oneOfType([import_prop_types67.default.bool, import_prop_types67.default.oneOf(["bottom", "top"])]),
  /** Primary content. */
  children: import_prop_types67.default.node,
  /** Additional classes. */
  className: import_prop_types67.default.string,
  /** A message can be formatted to be different colors. */
  color: import_prop_types67.default.oneOf(SUI_exports.COLORS),
  /** A message can only take up the width of its content. */
  compact: import_prop_types67.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: import_prop_types67.default.bool,
  /** A message can float above content that it is related to. */
  floating: import_prop_types67.default.bool,
  /** Shorthand for MessageHeader. */
  header: customPropTypes_exports.itemShorthand,
  /** A message can be hidden. */
  hidden: import_prop_types67.default.bool,
  /** A message can contain an icon. */
  icon: import_prop_types67.default.oneOfType([customPropTypes_exports.itemShorthand, import_prop_types67.default.bool]),
  /** A message may be formatted to display information. */
  info: import_prop_types67.default.bool,
  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: customPropTypes_exports.collectionShorthand,
  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: import_prop_types67.default.bool,
  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onDismiss: import_prop_types67.default.func,
  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: import_prop_types67.default.bool,
  /** A message can have different sizes. */
  size: import_prop_types67.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: import_prop_types67.default.bool,
  /** A message can be set to visible to force itself to be shown. */
  visible: import_prop_types67.default.bool,
  /** A message may be formatted to display warning messages. */
  warning: import_prop_types67.default.bool
} : {};
Message.Content = MessageContent_default;
Message.Header = MessageHeader_default;
Message.List = MessageList_default;
Message.Item = MessageItem_default;

// node_modules/semantic-ui-react/dist/es/collections/Table/Table.js
var import_prop_types74 = __toESM(require_prop_types());
var import_react82 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js
var import_prop_types68 = __toESM(require_prop_types());
var import_react76 = __toESM(require_react());
function TableBody(props) {
  var children = props.children, className = props.className;
  var classes = clsx_m_default(className);
  var rest = getUnhandledProps_default(TableBody, props);
  var ElementType = getElementType_default(TableBody, props);
  return import_react76.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
TableBody.handledProps = ["as", "children", "className"];
TableBody.defaultProps = {
  as: "tbody"
};
TableBody.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types68.default.elementType,
  /** Primary content. */
  children: import_prop_types68.default.node,
  /** Additional classes. */
  className: import_prop_types68.default.string
} : {};
var TableBody_default = TableBody;

// node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js
var import_prop_types69 = __toESM(require_prop_types());
var import_react77 = __toESM(require_react());
function TableCell(props) {
  var active = props.active, children = props.children, className = props.className, collapsing = props.collapsing, content = props.content, disabled = props.disabled, error = props.error, icon = props.icon, negative = props.negative, positive = props.positive, selectable = props.selectable, singleLine = props.singleLine, textAlign = props.textAlign, verticalAlign = props.verticalAlign, warning2 = props.warning, width = props.width;
  var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(collapsing, "collapsing"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(selectable, "selectable"), useKeyOnly(singleLine, "single line"), useKeyOnly(warning2, "warning"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(width, "wide"), className);
  var rest = getUnhandledProps_default(TableCell, props);
  var ElementType = getElementType_default(TableCell, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react77.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react77.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon_default.create(icon), content);
}
TableCell.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
TableCell.defaultProps = {
  as: "td"
};
TableCell.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types69.default.elementType,
  /** A cell can be active or selected by a user. */
  active: import_prop_types69.default.bool,
  /** Primary content. */
  children: import_prop_types69.default.node,
  /** Additional classes. */
  className: import_prop_types69.default.string,
  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: import_prop_types69.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A cell can be disabled. */
  disabled: import_prop_types69.default.bool,
  /** A cell may call attention to an error or a negative value. */
  error: import_prop_types69.default.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: customPropTypes_exports.itemShorthand,
  /** A cell may let a user know whether a value is bad. */
  negative: import_prop_types69.default.bool,
  /** A cell may let a user know whether a value is good. */
  positive: import_prop_types69.default.bool,
  /** A cell can be selectable. */
  selectable: import_prop_types69.default.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: import_prop_types69.default.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: import_prop_types69.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: import_prop_types69.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** A cell may warn a user. */
  warning: import_prop_types69.default.bool,
  /** A table can specify the width of individual columns independently. */
  width: import_prop_types69.default.oneOf(SUI_exports.WIDTHS)
} : {};
TableCell.create = createShorthandFactory(TableCell, function(content) {
  return {
    content
  };
});
var TableCell_default = TableCell;

// node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js
var import_prop_types71 = __toESM(require_prop_types());
var import_react79 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js
var import_prop_types70 = __toESM(require_prop_types());
var import_react78 = __toESM(require_react());
function TableHeader(props) {
  var children = props.children, className = props.className, content = props.content, fullWidth = props.fullWidth;
  var classes = clsx_m_default(useKeyOnly(fullWidth, "full-width"), className);
  var rest = getUnhandledProps_default(TableHeader, props);
  var ElementType = getElementType_default(TableHeader, props);
  return import_react78.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
TableHeader.handledProps = ["as", "children", "className", "content", "fullWidth"];
TableHeader.defaultProps = {
  as: "thead"
};
TableHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types70.default.elementType,
  /** Primary content. */
  children: import_prop_types70.default.node,
  /** Additional classes. */
  className: import_prop_types70.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: import_prop_types70.default.bool
} : {};
var TableHeader_default = TableHeader;

// node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js
function TableFooter(props) {
  var as = props.as;
  var rest = getUnhandledProps_default(TableFooter, props);
  return import_react79.default.createElement(TableHeader_default, _extends({}, rest, {
    as
  }));
}
TableFooter.handledProps = ["as"];
TableFooter.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types71.default.elementType
} : {};
TableFooter.defaultProps = {
  as: "tfoot"
};
var TableFooter_default = TableFooter;

// node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js
var import_prop_types72 = __toESM(require_prop_types());
var import_react80 = __toESM(require_react());
function TableHeaderCell(props) {
  var as = props.as, className = props.className, sorted = props.sorted;
  var classes = clsx_m_default(useValueAndKey(sorted, "sorted"), className);
  var rest = getUnhandledProps_default(TableHeaderCell, props);
  return import_react80.default.createElement(TableCell_default, _extends({}, rest, {
    as,
    className: classes
  }));
}
TableHeaderCell.handledProps = ["as", "className", "sorted"];
TableHeaderCell.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types72.default.elementType,
  /** Additional classes. */
  className: import_prop_types72.default.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: import_prop_types72.default.oneOf(["ascending", "descending"])
} : {};
TableHeaderCell.defaultProps = {
  as: "th"
};
var TableHeaderCell_default = TableHeaderCell;

// node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js
var import_prop_types73 = __toESM(require_prop_types());
var import_react81 = __toESM(require_react());
function TableRow(props) {
  var active = props.active, cellAs = props.cellAs, cells = props.cells, children = props.children, className = props.className, disabled = props.disabled, error = props.error, negative = props.negative, positive = props.positive, textAlign = props.textAlign, verticalAlign = props.verticalAlign, warning2 = props.warning;
  var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(warning2, "warning"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps_default(TableRow, props);
  var ElementType = getElementType_default(TableRow, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react81.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react81.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), map_default(cells, function(cell) {
    return TableCell_default.create(cell, {
      defaultProps: {
        as: cellAs
      }
    });
  }));
}
TableRow.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
TableRow.defaultProps = {
  as: "tr",
  cellAs: "td"
};
TableRow.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types73.default.elementType,
  /** A row can be active or selected by a user. */
  active: import_prop_types73.default.bool,
  /** An element type to render as (string or function). */
  cellAs: import_prop_types73.default.elementType,
  /** Shorthand array of props for TableCell. */
  cells: customPropTypes_exports.collectionShorthand,
  /** Primary content. */
  children: import_prop_types73.default.node,
  /** Additional classes. */
  className: import_prop_types73.default.string,
  /** A row can be disabled. */
  disabled: import_prop_types73.default.bool,
  /** A row may call attention to an error or a negative value. */
  error: import_prop_types73.default.bool,
  /** A row may let a user know whether a value is bad. */
  negative: import_prop_types73.default.bool,
  /** A row may let a user know whether a value is good. */
  positive: import_prop_types73.default.bool,
  /** A table row can adjust its text alignment. */
  textAlign: import_prop_types73.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: import_prop_types73.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** A row may warn a user. */
  warning: import_prop_types73.default.bool
} : {};
TableRow.create = createShorthandFactory(TableRow, function(cells) {
  return {
    cells
  };
});
var TableRow_default = TableRow;

// node_modules/semantic-ui-react/dist/es/collections/Table/Table.js
function Table(props) {
  var attached = props.attached, basic = props.basic, celled = props.celled, children = props.children, className = props.className, collapsing = props.collapsing, color = props.color, columns = props.columns, compact2 = props.compact, definition = props.definition, fixed = props.fixed, footerRow = props.footerRow, headerRow = props.headerRow, headerRows = props.headerRows, inverted = props.inverted, padded = props.padded, renderBodyRow = props.renderBodyRow, selectable = props.selectable, singleLine = props.singleLine, size2 = props.size, sortable = props.sortable, stackable = props.stackable, striped = props.striped, structured = props.structured, tableData = props.tableData, textAlign = props.textAlign, unstackable = props.unstackable, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(celled, "celled"), useKeyOnly(collapsing, "collapsing"), useKeyOnly(definition, "definition"), useKeyOnly(fixed, "fixed"), useKeyOnly(inverted, "inverted"), useKeyOnly(selectable, "selectable"), useKeyOnly(singleLine, "single line"), useKeyOnly(sortable, "sortable"), useKeyOnly(stackable, "stackable"), useKeyOnly(striped, "striped"), useKeyOnly(structured, "structured"), useKeyOnly(unstackable, "unstackable"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(basic, "basic"), useKeyOrValueAndKey(compact2, "compact"), useKeyOrValueAndKey(padded, "padded"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column"), "table", className);
  var rest = getUnhandledProps_default(Table, props);
  var ElementType = getElementType_default(Table, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react82.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var hasHeaderRows = headerRow || headerRows;
  var headerShorthandOptions = {
    defaultProps: {
      cellAs: "th"
    }
  };
  var headerElement = hasHeaderRows && import_react82.default.createElement(TableHeader_default, null, TableRow_default.create(headerRow, headerShorthandOptions), map_default(headerRows, function(data) {
    return TableRow_default.create(data, headerShorthandOptions);
  }));
  return import_react82.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), headerElement, import_react82.default.createElement(TableBody_default, null, renderBodyRow && map_default(tableData, function(data, index) {
    return TableRow_default.create(renderBodyRow(data, index));
  })), footerRow && import_react82.default.createElement(TableFooter_default, null, TableRow_default.create(footerRow)));
}
Table.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Table.defaultProps = {
  as: "table"
};
Table.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types74.default.elementType,
  /** Attach table to other content */
  attached: import_prop_types74.default.oneOfType([import_prop_types74.default.bool, import_prop_types74.default.oneOf(["top", "bottom"])]),
  /** A table can reduce its complexity to increase readability. */
  basic: import_prop_types74.default.oneOfType([import_prop_types74.default.oneOf(["very"]), import_prop_types74.default.bool]),
  /** A table may be divided into individual cells. */
  celled: import_prop_types74.default.bool,
  /** Primary content. */
  children: import_prop_types74.default.node,
  /** Additional classes. */
  className: import_prop_types74.default.string,
  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: import_prop_types74.default.bool,
  /** A table can be given a color to distinguish it from other tables. */
  color: import_prop_types74.default.oneOf(SUI_exports.COLORS),
  /** A table can specify its column count to divide its content evenly. */
  columns: import_prop_types74.default.oneOf(SUI_exports.WIDTHS),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: import_prop_types74.default.oneOfType([import_prop_types74.default.bool, import_prop_types74.default.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: import_prop_types74.default.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: import_prop_types74.default.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: customPropTypes_exports.itemShorthand,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: customPropTypes_exports.every([customPropTypes_exports.disallow(["headerRows"]), customPropTypes_exports.itemShorthand]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: customPropTypes_exports.every([customPropTypes_exports.disallow(["headerRow"]), customPropTypes_exports.collectionShorthand]),
  /** A table's colors can be inverted. */
  inverted: import_prop_types74.default.bool,
  /** A table may sometimes need to be more padded for legibility. */
  padded: import_prop_types74.default.oneOfType([import_prop_types74.default.bool, import_prop_types74.default.oneOf(["very"])]),
  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["tableData"]), import_prop_types74.default.func]),
  /** A table can have its rows appear selectable. */
  selectable: import_prop_types74.default.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: import_prop_types74.default.bool,
  /** A table can also be small or large. */
  size: import_prop_types74.default.oneOf(without_default(SUI_exports.SIZES, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: import_prop_types74.default.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: import_prop_types74.default.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: import_prop_types74.default.bool,
  /** A table can be formatted to display complex structured data. */
  structured: import_prop_types74.default.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["renderBodyRow"]), import_prop_types74.default.array]),
  /** A table can adjust its text alignment. */
  textAlign: import_prop_types74.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: import_prop_types74.default.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: import_prop_types74.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
Table.Body = TableBody_default;
Table.Cell = TableCell_default;
Table.Footer = TableFooter_default;
Table.Header = TableHeader_default;
Table.HeaderCell = TableHeaderCell_default;
Table.Row = TableRow_default;
var Table_default = Table;

// node_modules/semantic-ui-react/dist/es/elements/Container/Container.js
var import_prop_types75 = __toESM(require_prop_types());
var import_react83 = __toESM(require_react());
function Container(props) {
  var children = props.children, className = props.className, content = props.content, fluid = props.fluid, text = props.text, textAlign = props.textAlign;
  var classes = clsx_m_default("ui", useKeyOnly(text, "text"), useKeyOnly(fluid, "fluid"), useTextAlignProp(textAlign), "container", className);
  var rest = getUnhandledProps_default(Container, props);
  var ElementType = getElementType_default(Container, props);
  return import_react83.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types75.default.elementType,
  /** Primary content. */
  children: import_prop_types75.default.node,
  /** Additional classes. */
  className: import_prop_types75.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Container has no maximum width. */
  fluid: import_prop_types75.default.bool,
  /** Reduce maximum width to more naturally accommodate text. */
  text: import_prop_types75.default.bool,
  /** Align container text. */
  textAlign: import_prop_types75.default.oneOf(SUI_exports.TEXT_ALIGNMENTS)
} : {};
var Container_default = Container;

// node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js
var import_prop_types76 = __toESM(require_prop_types());
var import_react84 = __toESM(require_react());
function Divider(props) {
  var children = props.children, className = props.className, clearing = props.clearing, content = props.content, fitted = props.fitted, hidden = props.hidden, horizontal = props.horizontal, inverted = props.inverted, section = props.section, vertical = props.vertical;
  var classes = clsx_m_default("ui", useKeyOnly(clearing, "clearing"), useKeyOnly(fitted, "fitted"), useKeyOnly(hidden, "hidden"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(inverted, "inverted"), useKeyOnly(section, "section"), useKeyOnly(vertical, "vertical"), "divider", className);
  var rest = getUnhandledProps_default(Divider, props);
  var ElementType = getElementType_default(Divider, props);
  return import_react84.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Divider.handledProps = ["as", "children", "className", "clearing", "content", "fitted", "hidden", "horizontal", "inverted", "section", "vertical"];
Divider.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types76.default.elementType,
  /** Primary content. */
  children: import_prop_types76.default.node,
  /** Additional classes. */
  className: import_prop_types76.default.string,
  /** Divider can clear the content above it. */
  clearing: import_prop_types76.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Divider can be fitted without any space above or below it. */
  fitted: import_prop_types76.default.bool,
  /** Divider can divide content without creating a dividing line. */
  hidden: import_prop_types76.default.bool,
  /** Divider can segment content horizontally. */
  horizontal: import_prop_types76.default.bool,
  /** Divider can have its colours inverted. */
  inverted: import_prop_types76.default.bool,
  /** Divider can provide greater margins to divide sections of content. */
  section: import_prop_types76.default.bool,
  /** Divider can segment content vertically. */
  vertical: import_prop_types76.default.bool
} : {};
var Divider_default = Divider;

// node_modules/semantic-ui-react/dist/es/elements/Header/Header.js
var import_prop_types79 = __toESM(require_prop_types());
var import_react87 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js
var import_prop_types77 = __toESM(require_prop_types());
var import_react85 = __toESM(require_react());
function HeaderSubheader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("sub header", className);
  var rest = getUnhandledProps_default(HeaderSubheader, props);
  var ElementType = getElementType_default(HeaderSubheader, props);
  return import_react85.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
HeaderSubheader.handledProps = ["as", "children", "className", "content"];
HeaderSubheader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types77.default.elementType,
  /** Primary content. */
  children: import_prop_types77.default.node,
  /** Additional classes. */
  className: import_prop_types77.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
HeaderSubheader.create = createShorthandFactory(HeaderSubheader, function(content) {
  return {
    content
  };
});
var HeaderSubheader_default = HeaderSubheader;

// node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js
var import_prop_types78 = __toESM(require_prop_types());
var import_react86 = __toESM(require_react());
function HeaderContent(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(HeaderContent, props);
  var ElementType = getElementType_default(HeaderContent, props);
  return import_react86.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
HeaderContent.handledProps = ["as", "children", "className", "content"];
HeaderContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types78.default.elementType,
  /** Primary content. */
  children: import_prop_types78.default.node,
  /** Additional classes. */
  className: import_prop_types78.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var HeaderContent_default = HeaderContent;

// node_modules/semantic-ui-react/dist/es/elements/Header/Header.js
function Header(props) {
  var attached = props.attached, block = props.block, children = props.children, className = props.className, color = props.color, content = props.content, disabled = props.disabled, dividing = props.dividing, floated = props.floated, icon = props.icon, image = props.image, inverted = props.inverted, size2 = props.size, sub = props.sub, subheader = props.subheader, textAlign = props.textAlign;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(block, "block"), useKeyOnly(disabled, "disabled"), useKeyOnly(dividing, "dividing"), useValueAndKey(floated, "floated"), useKeyOnly(icon === true, "icon"), useKeyOnly(image === true, "image"), useKeyOnly(inverted, "inverted"), useKeyOnly(sub, "sub"), useKeyOrValueAndKey(attached, "attached"), useTextAlignProp(textAlign), "header", className);
  var rest = getUnhandledProps_default(Header, props);
  var ElementType = getElementType_default(Header, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react87.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var iconElement = Icon_default.create(icon, {
    autoGenerateKey: false
  });
  var imageElement = Image_default.create(image, {
    autoGenerateKey: false
  });
  var subheaderElement = HeaderSubheader_default.create(subheader, {
    autoGenerateKey: false
  });
  if (iconElement || imageElement) {
    return import_react87.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), iconElement || imageElement, (content || subheaderElement) && import_react87.default.createElement(HeaderContent_default, null, content, subheaderElement));
  }
  return import_react87.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, subheaderElement);
}
Header.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Header.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types79.default.elementType,
  /** Attach header  to other content, like a segment. */
  attached: import_prop_types79.default.oneOfType([import_prop_types79.default.bool, import_prop_types79.default.oneOf(["top", "bottom"])]),
  /** Format header to appear inside a content block. */
  block: import_prop_types79.default.bool,
  /** Primary content. */
  children: import_prop_types79.default.node,
  /** Additional classes. */
  className: import_prop_types79.default.string,
  /** Color of the header. */
  color: import_prop_types79.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Show that the header is inactive. */
  disabled: import_prop_types79.default.bool,
  /** Divide header from the content below it. */
  dividing: import_prop_types79.default.bool,
  /** Header can sit to the left or right of other content. */
  floated: import_prop_types79.default.oneOf(SUI_exports.FLOATS),
  /** Add an icon by icon name or pass an Icon. */
  icon: customPropTypes_exports.every([customPropTypes_exports.disallow(["image"]), import_prop_types79.default.oneOfType([import_prop_types79.default.bool, customPropTypes_exports.itemShorthand])]),
  /** Add an image by img src or pass an Image. */
  image: customPropTypes_exports.every([customPropTypes_exports.disallow(["icon"]), import_prop_types79.default.oneOfType([import_prop_types79.default.bool, customPropTypes_exports.itemShorthand])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: import_prop_types79.default.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: import_prop_types79.default.oneOf(without_default(SUI_exports.SIZES, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: import_prop_types79.default.bool,
  /** Shorthand for Header.Subheader. */
  subheader: customPropTypes_exports.itemShorthand,
  /** Align header content. */
  textAlign: import_prop_types79.default.oneOf(SUI_exports.TEXT_ALIGNMENTS)
} : {};
Header.Content = HeaderContent_default;
Header.Subheader = HeaderSubheader_default;
var Header_default = Header;

// node_modules/semantic-ui-react/dist/es/elements/List/List.js
var import_prop_types86 = __toESM(require_prop_types());
var import_react94 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js
var import_prop_types82 = __toESM(require_prop_types());
var import_react90 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/List/ListDescription.js
var import_prop_types80 = __toESM(require_prop_types());
var import_react88 = __toESM(require_react());
function ListDescription(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default(className, "description");
  var rest = getUnhandledProps_default(ListDescription, props);
  var ElementType = getElementType_default(ListDescription, props);
  return import_react88.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ListDescription.handledProps = ["as", "children", "className", "content"];
ListDescription.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types80.default.elementType,
  /** Primary content. */
  children: import_prop_types80.default.node,
  /** Additional classes. */
  className: import_prop_types80.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ListDescription.create = createShorthandFactory(ListDescription, function(content) {
  return {
    content
  };
});
var ListDescription_default = ListDescription;

// node_modules/semantic-ui-react/dist/es/elements/List/ListHeader.js
var import_prop_types81 = __toESM(require_prop_types());
var import_react89 = __toESM(require_react());
function ListHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(ListHeader, props);
  var ElementType = getElementType_default(ListHeader, props);
  return import_react89.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ListHeader.handledProps = ["as", "children", "className", "content"];
ListHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types81.default.elementType,
  /** Primary content. */
  children: import_prop_types81.default.node,
  /** Additional classes. */
  className: import_prop_types81.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ListHeader.create = createShorthandFactory(ListHeader, function(content) {
  return {
    content
  };
});
var ListHeader_default = ListHeader;

// node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js
function ListContent(props) {
  var children = props.children, className = props.className, content = props.content, description = props.description, floated = props.floated, header = props.header, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default(useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign), "content", className);
  var rest = getUnhandledProps_default(ListContent, props);
  var ElementType = getElementType_default(ListContent, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react90.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react90.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ListHeader_default.create(header), ListDescription_default.create(description), content);
}
ListContent.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
ListContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types82.default.elementType,
  /** Primary content. */
  children: import_prop_types82.default.node,
  /** Additional classes. */
  className: import_prop_types82.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for ListDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** An list content can be floated left or right. */
  floated: import_prop_types82.default.oneOf(SUI_exports.FLOATS),
  /** Shorthand for ListHeader. */
  header: customPropTypes_exports.itemShorthand,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: import_prop_types82.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
ListContent.create = createShorthandFactory(ListContent, function(content) {
  return {
    content
  };
});
var ListContent_default = ListContent;

// node_modules/semantic-ui-react/dist/es/elements/List/ListIcon.js
var import_prop_types83 = __toESM(require_prop_types());
var import_react91 = __toESM(require_react());
function ListIcon(props) {
  var className = props.className, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default(useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps_default(ListIcon, props);
  return import_react91.default.createElement(Icon_default, _extends({}, rest, {
    className: classes
  }));
}
ListIcon.handledProps = ["className", "verticalAlign"];
ListIcon.propTypes = true ? {
  /** Additional classes. */
  className: import_prop_types83.default.string,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: import_prop_types83.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
ListIcon.create = createShorthandFactory(ListIcon, function(name) {
  return {
    name
  };
});
var ListIcon_default = ListIcon;

// node_modules/semantic-ui-react/dist/es/elements/List/ListItem.js
var import_prop_types84 = __toESM(require_prop_types());
var import_react92 = __toESM(require_react());
var ListItem = function(_Component) {
  _inheritsLoose(ListItem2, _Component);
  function ListItem2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (!disabled) invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = ListItem2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, description = _this$props.description, disabled = _this$props.disabled, header = _this$props.header, icon = _this$props.icon, image = _this$props.image, value = _this$props.value;
    var ElementType = getElementType_default(ListItem2, this.props);
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(ElementType !== "li", "item"), className);
    var rest = getUnhandledProps_default(ListItem2, this.props);
    var valueProp = ElementType === "li" ? {
      value
    } : {
      "data-value": value
    };
    if (!childrenUtils_exports.isNil(children)) {
      return import_react92.default.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), children);
    }
    var iconElement = ListIcon_default.create(icon, {
      autoGenerateKey: false
    });
    var imageElement = Image_default.create(image, {
      autoGenerateKey: false
    });
    if (!(0, import_react92.isValidElement)(content) && isPlainObject_default(content)) {
      return import_react92.default.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, ListContent_default.create(content, {
        autoGenerateKey: false,
        defaultProps: {
          header,
          description
        }
      }));
    }
    var headerElement = ListHeader_default.create(header, {
      autoGenerateKey: false
    });
    var descriptionElement = ListDescription_default.create(description, {
      autoGenerateKey: false
    });
    if (iconElement || imageElement) {
      return import_react92.default.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && import_react92.default.createElement(ListContent_default, null, headerElement, descriptionElement, content));
    }
    return import_react92.default.createElement(ElementType, _extends({}, valueProp, {
      role: "listitem",
      className: classes,
      onClick: this.handleClick
    }, rest), headerElement, descriptionElement, content);
  };
  return ListItem2;
}(import_react92.Component);
ListItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
ListItem.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types84.default.elementType,
  /** A list item can active. */
  active: import_prop_types84.default.bool,
  /** Primary content. */
  children: import_prop_types84.default.node,
  /** Additional classes. */
  className: import_prop_types84.default.string,
  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes_exports.itemShorthand,
  /** Shorthand for ListDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** A list item can disabled. */
  disabled: import_prop_types84.default.bool,
  /** Shorthand for ListHeader. */
  header: customPropTypes_exports.itemShorthand,
  /** Shorthand for ListIcon. */
  icon: customPropTypes_exports.every([customPropTypes_exports.disallow(["image"]), customPropTypes_exports.itemShorthand]),
  /** Shorthand for Image. */
  image: customPropTypes_exports.every([customPropTypes_exports.disallow(["icon"]), customPropTypes_exports.itemShorthand]),
  /** A ListItem can be clicked */
  onClick: import_prop_types84.default.func,
  /** A value for an ordered list. */
  value: import_prop_types84.default.string
} : {};
ListItem.create = createShorthandFactory(ListItem, function(content) {
  return {
    content
  };
});
var ListItem_default = ListItem;

// node_modules/semantic-ui-react/dist/es/elements/List/ListList.js
var import_prop_types85 = __toESM(require_prop_types());
var import_react93 = __toESM(require_react());
function ListList(props) {
  var children = props.children, className = props.className, content = props.content;
  var rest = getUnhandledProps_default(ListList, props);
  var ElementType = getElementType_default(ListList, props);
  var classes = clsx_m_default(useKeyOnly(ElementType !== "ul" && ElementType !== "ol", "list"), className);
  return import_react93.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ListList.handledProps = ["as", "children", "className", "content"];
ListList.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types85.default.elementType,
  /** Primary content. */
  children: import_prop_types85.default.node,
  /** Additional classes. */
  className: import_prop_types85.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var ListList_default = ListList;

// node_modules/semantic-ui-react/dist/es/elements/List/List.js
var List = function(_Component) {
  _inheritsLoose(List2, _Component);
  function List2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleItemOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          invoke_default(predefinedProps, "onClick", e, itemProps);
          invoke_default(_this.props, "onItemClick", e, itemProps);
        }
      };
    };
    return _this;
  }
  var _proto = List2.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, animated = _this$props.animated, bulleted = _this$props.bulleted, celled = _this$props.celled, children = _this$props.children, className = _this$props.className, content = _this$props.content, divided = _this$props.divided, floated = _this$props.floated, horizontal = _this$props.horizontal, inverted = _this$props.inverted, items = _this$props.items, link = _this$props.link, ordered = _this$props.ordered, relaxed = _this$props.relaxed, selection = _this$props.selection, size2 = _this$props.size, verticalAlign = _this$props.verticalAlign;
    var classes = clsx_m_default("ui", size2, useKeyOnly(animated, "animated"), useKeyOnly(bulleted, "bulleted"), useKeyOnly(celled, "celled"), useKeyOnly(divided, "divided"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(inverted, "inverted"), useKeyOnly(link, "link"), useKeyOnly(ordered, "ordered"), useKeyOnly(selection, "selection"), useKeyOrValueAndKey(relaxed, "relaxed"), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign), "list", className);
    var rest = getUnhandledProps_default(List2, this.props);
    var ElementType = getElementType_default(List2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react94.default.createElement(ElementType, _extends({
        role: "list",
        className: classes
      }, rest), children);
    }
    if (!childrenUtils_exports.isNil(content)) {
      return import_react94.default.createElement(ElementType, _extends({
        role: "list",
        className: classes
      }, rest), content);
    }
    return import_react94.default.createElement(ElementType, _extends({
      role: "list",
      className: classes
    }, rest), map_default(items, function(item) {
      return ListItem_default.create(item, {
        overrideProps: _this2.handleItemOverrides
      });
    }));
  };
  return List2;
}(import_react94.Component);
List.handledProps = ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"];
List.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types86.default.elementType,
  /** A list can animate to set the current item apart from the list. */
  animated: import_prop_types86.default.bool,
  /** A list can mark items with a bullet. */
  bulleted: import_prop_types86.default.bool,
  /** A list can divide its items into cells. */
  celled: import_prop_types86.default.bool,
  /** Primary content. */
  children: import_prop_types86.default.node,
  /** Additional classes. */
  className: import_prop_types86.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A list can show divisions between content. */
  divided: import_prop_types86.default.bool,
  /** An list can be floated left or right. */
  floated: import_prop_types86.default.oneOf(SUI_exports.FLOATS),
  /** A list can be formatted to have items appear horizontally. */
  horizontal: import_prop_types86.default.bool,
  /** A list can be inverted to appear on a dark background. */
  inverted: import_prop_types86.default.bool,
  /** Shorthand array of props for ListItem. */
  items: customPropTypes_exports.collectionShorthand,
  /** A list can be specially formatted for navigation links. */
  link: import_prop_types86.default.bool,
  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types86.default.func]),
  /** A list can be ordered numerically. */
  ordered: import_prop_types86.default.bool,
  /** A list can relax its padding to provide more negative space. */
  relaxed: import_prop_types86.default.oneOfType([import_prop_types86.default.bool, import_prop_types86.default.oneOf(["very"])]),
  /** A selection list formats list items as possible choices. */
  selection: import_prop_types86.default.bool,
  /** A list can vary in size. */
  size: import_prop_types86.default.oneOf(SUI_exports.SIZES),
  /** An element inside a list can be vertically aligned. */
  verticalAlign: import_prop_types86.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
List.Content = ListContent_default;
List.Description = ListDescription_default;
List.Header = ListHeader_default;
List.Icon = ListIcon_default;
List.Item = ListItem_default;
List.List = ListList_default;
var List_default = List;

// node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js
var import_prop_types87 = __toESM(require_prop_types());
var import_react95 = __toESM(require_react());
function Loader(props) {
  var active = props.active, children = props.children, className = props.className, content = props.content, disabled = props.disabled, indeterminate = props.indeterminate, inline = props.inline, inverted = props.inverted, size2 = props.size;
  var classes = clsx_m_default("ui", size2, useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(indeterminate, "indeterminate"), useKeyOnly(inverted, "inverted"), useKeyOnly(children || content, "text"), useKeyOrValueAndKey(inline, "inline"), "loader", className);
  var rest = getUnhandledProps_default(Loader, props);
  var ElementType = getElementType_default(Loader, props);
  return import_react95.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Loader.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Loader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types87.default.elementType,
  /** A loader can be active or visible. */
  active: import_prop_types87.default.bool,
  /** Primary content. */
  children: import_prop_types87.default.node,
  /** Additional classes. */
  className: import_prop_types87.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A loader can be disabled or hidden. */
  disabled: import_prop_types87.default.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: import_prop_types87.default.bool,
  /** Loaders can appear inline with content. */
  inline: import_prop_types87.default.oneOfType([import_prop_types87.default.bool, import_prop_types87.default.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: import_prop_types87.default.bool,
  /** Loaders can have different sizes. */
  size: import_prop_types87.default.oneOf(SUI_exports.SIZES)
} : {};
var Loader_default = Loader;

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/Placeholder.js
var import_prop_types92 = __toESM(require_prop_types());
var import_react100 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/PlaceholderHeader.js
var import_prop_types88 = __toESM(require_prop_types());
var import_react96 = __toESM(require_react());
function PlaceholderHeader(props) {
  var children = props.children, className = props.className, content = props.content, image = props.image;
  var classes = clsx_m_default(useKeyOnly(image, "image"), "header", className);
  var rest = getUnhandledProps_default(PlaceholderHeader, props);
  var ElementType = getElementType_default(PlaceholderHeader, props);
  return import_react96.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
PlaceholderHeader.handledProps = ["as", "children", "className", "content", "image"];
PlaceholderHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types88.default.elementType,
  /** Primary content. */
  children: import_prop_types88.default.node,
  /** Additional classes. */
  className: import_prop_types88.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A placeholder can contain an image. */
  image: import_prop_types88.default.bool
} : {};
var PlaceholderHeader_default = PlaceholderHeader;

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/PlaceholderImage.js
var import_prop_types89 = __toESM(require_prop_types());
var import_react97 = __toESM(require_react());
function PlaceholderImage(props) {
  var className = props.className, square = props.square, rectangular = props.rectangular;
  var classes = clsx_m_default(useKeyOnly(square, "square"), useKeyOnly(rectangular, "rectangular"), "image", className);
  var rest = getUnhandledProps_default(PlaceholderImage, props);
  var ElementType = getElementType_default(PlaceholderImage, props);
  return import_react97.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}
PlaceholderImage.handledProps = ["as", "className", "rectangular", "square"];
PlaceholderImage.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types89.default.elementType,
  /** Additional classes. */
  className: import_prop_types89.default.string,
  /** An image can modify size correctly with responsive styles. */
  square: customPropTypes_exports.every([customPropTypes_exports.disallow(["rectangular"]), import_prop_types89.default.bool]),
  /** An image can modify size correctly with responsive styles. */
  rectangular: customPropTypes_exports.every([customPropTypes_exports.disallow(["square"]), import_prop_types89.default.bool])
} : {};
var PlaceholderImage_default = PlaceholderImage;

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/PlaceholderLine.js
var import_prop_types90 = __toESM(require_prop_types());
var import_react98 = __toESM(require_react());
function PlaceholderLine(props) {
  var className = props.className, length = props.length;
  var classes = clsx_m_default("line", length, className);
  var rest = getUnhandledProps_default(PlaceholderLine, props);
  var ElementType = getElementType_default(PlaceholderLine, props);
  return import_react98.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}
PlaceholderLine.handledProps = ["as", "className", "length"];
PlaceholderLine.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types90.default.elementType,
  /** Additional classes. */
  className: import_prop_types90.default.string,
  /** A line can specify how long its contents should appear. */
  length: import_prop_types90.default.oneOf(["full", "very long", "long", "medium", "short", "very short"])
} : {};
var PlaceholderLine_default = PlaceholderLine;

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/PlaceholderParagraph.js
var import_prop_types91 = __toESM(require_prop_types());
var import_react99 = __toESM(require_react());
function PlaceholderParagraph(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("paragraph", className);
  var rest = getUnhandledProps_default(PlaceholderParagraph, props);
  var ElementType = getElementType_default(PlaceholderParagraph, props);
  return import_react99.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
PlaceholderParagraph.handledProps = ["as", "children", "className", "content"];
PlaceholderParagraph.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types91.default.elementType,
  /** Primary content. */
  children: import_prop_types91.default.node,
  /** Additional classes. */
  className: import_prop_types91.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var PlaceholderParagraph_default = PlaceholderParagraph;

// node_modules/semantic-ui-react/dist/es/elements/Placeholder/Placeholder.js
function Placeholder(props) {
  var children = props.children, className = props.className, content = props.content, fluid = props.fluid, inverted = props.inverted;
  var classes = clsx_m_default("ui", useKeyOnly(fluid, "fluid"), useKeyOnly(inverted, "inverted"), "placeholder", className);
  var rest = getUnhandledProps_default(Placeholder, props);
  var ElementType = getElementType_default(Placeholder, props);
  return import_react100.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Placeholder.handledProps = ["as", "children", "className", "content", "fluid", "inverted"];
Placeholder.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types92.default.elementType,
  /** Primary content. */
  children: import_prop_types92.default.node,
  /** Additional classes. */
  className: import_prop_types92.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A fluid placeholder takes up the width of its container. */
  fluid: import_prop_types92.default.bool,
  /** A placeholder can have their colors inverted. */
  inverted: import_prop_types92.default.bool
} : {};
Placeholder.Header = PlaceholderHeader_default;
Placeholder.Image = PlaceholderImage_default;
Placeholder.Line = PlaceholderLine_default;
Placeholder.Paragraph = PlaceholderParagraph_default;
var Placeholder_default = Placeholder;

// node_modules/semantic-ui-react/dist/es/elements/Rail/Rail.js
var import_prop_types93 = __toESM(require_prop_types());
var import_react101 = __toESM(require_react());
function Rail(props) {
  var attached = props.attached, children = props.children, className = props.className, close = props.close, content = props.content, dividing = props.dividing, internal = props.internal, position = props.position, size2 = props.size;
  var classes = clsx_m_default("ui", position, size2, useKeyOnly(attached, "attached"), useKeyOnly(dividing, "dividing"), useKeyOnly(internal, "internal"), useKeyOrValueAndKey(close, "close"), "rail", className);
  var rest = getUnhandledProps_default(Rail, props);
  var ElementType = getElementType_default(Rail, props);
  return import_react101.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Rail.handledProps = ["as", "attached", "children", "className", "close", "content", "dividing", "internal", "position", "size"];
Rail.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types93.default.elementType,
  /** A rail can appear attached to the main viewport. */
  attached: import_prop_types93.default.bool,
  /** Primary content. */
  children: import_prop_types93.default.node,
  /** Additional classes. */
  className: import_prop_types93.default.string,
  /** A rail can appear closer to the main viewport. */
  close: import_prop_types93.default.oneOfType([import_prop_types93.default.bool, import_prop_types93.default.oneOf(["very"])]),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A rail can create a division between itself and a container. */
  dividing: import_prop_types93.default.bool,
  /** A rail can attach itself to the inside of a container. */
  internal: import_prop_types93.default.bool,
  /** A rail can be presented on the left or right side of a container. */
  position: import_prop_types93.default.oneOf(SUI_exports.FLOATS).isRequired,
  /** A rail can have different sizes. */
  size: import_prop_types93.default.oneOf(without_default(SUI_exports.SIZES, "medium"))
} : {};
var Rail_default = Rail;

// node_modules/semantic-ui-react/dist/es/elements/Reveal/Reveal.js
var import_prop_types95 = __toESM(require_prop_types());
var import_react103 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Reveal/RevealContent.js
var import_prop_types94 = __toESM(require_prop_types());
var import_react102 = __toESM(require_react());
function RevealContent(props) {
  var children = props.children, className = props.className, content = props.content, hidden = props.hidden, visible = props.visible;
  var classes = clsx_m_default("ui", useKeyOnly(hidden, "hidden"), useKeyOnly(visible, "visible"), "content", className);
  var rest = getUnhandledProps_default(RevealContent, props);
  var ElementType = getElementType_default(RevealContent, props);
  return import_react102.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
RevealContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
RevealContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types94.default.elementType,
  /** Primary content. */
  children: import_prop_types94.default.node,
  /** Additional classes. */
  className: import_prop_types94.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A reveal may contain content that is visible before interaction. */
  hidden: import_prop_types94.default.bool,
  /** A reveal may contain content that is hidden before user interaction. */
  visible: import_prop_types94.default.bool
} : {};
var RevealContent_default = RevealContent;

// node_modules/semantic-ui-react/dist/es/elements/Reveal/Reveal.js
function Reveal(props) {
  var active = props.active, animated = props.animated, children = props.children, className = props.className, content = props.content, disabled = props.disabled, instant = props.instant;
  var classes = clsx_m_default("ui", animated, useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(instant, "instant"), "reveal", className);
  var rest = getUnhandledProps_default(Reveal, props);
  var ElementType = getElementType_default(Reveal, props);
  return import_react103.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Reveal.handledProps = ["active", "animated", "as", "children", "className", "content", "disabled", "instant"];
Reveal.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types95.default.elementType,
  /** An active reveal displays its hidden content. */
  active: import_prop_types95.default.bool,
  /** An animation name that will be applied to Reveal. */
  animated: import_prop_types95.default.oneOf(["fade", "small fade", "move", "move right", "move up", "move down", "rotate", "rotate left"]),
  /** Primary content. */
  children: import_prop_types95.default.node,
  /** Additional classes. */
  className: import_prop_types95.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A disabled reveal will not animate when hovered. */
  disabled: import_prop_types95.default.bool,
  /** An element can show its content without delay. */
  instant: import_prop_types95.default.bool
} : {};
Reveal.Content = RevealContent_default;
var Reveal_default = Reveal;

// node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js
var import_prop_types98 = __toESM(require_prop_types());
var import_react106 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentGroup.js
var import_prop_types96 = __toESM(require_prop_types());
var import_react104 = __toESM(require_react());
function SegmentGroup(props) {
  var children = props.children, className = props.className, compact2 = props.compact, content = props.content, horizontal = props.horizontal, piled = props.piled, raised = props.raised, size2 = props.size, stacked = props.stacked;
  var classes = clsx_m_default("ui", size2, useKeyOnly(compact2, "compact"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(piled, "piled"), useKeyOnly(raised, "raised"), useKeyOnly(stacked, "stacked"), "segments", className);
  var rest = getUnhandledProps_default(SegmentGroup, props);
  var ElementType = getElementType_default(SegmentGroup, props);
  return import_react104.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SegmentGroup.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
SegmentGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types96.default.elementType,
  /** Primary content. */
  children: import_prop_types96.default.node,
  /** Additional classes. */
  className: import_prop_types96.default.string,
  /** A segment may take up only as much space as is necessary. */
  compact: import_prop_types96.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Formats content to be aligned horizontally. */
  horizontal: import_prop_types96.default.bool,
  /** Formatted to look like a pile of pages. */
  piled: import_prop_types96.default.bool,
  /** A segment group may be formatted to raise above the page. */
  raised: import_prop_types96.default.bool,
  /** A segment group can have different sizes. */
  size: import_prop_types96.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: import_prop_types96.default.bool
} : {};
var SegmentGroup_default = SegmentGroup;

// node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentInline.js
var import_prop_types97 = __toESM(require_prop_types());
var import_react105 = __toESM(require_react());
function SegmentInline(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("inline", className);
  var rest = getUnhandledProps_default(SegmentInline, props);
  var ElementType = getElementType_default(SegmentInline, props);
  return import_react105.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SegmentInline.handledProps = ["as", "children", "className", "content"];
SegmentInline.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types97.default.elementType,
  /** Primary content. */
  children: import_prop_types97.default.node,
  /** Additional classes. */
  className: import_prop_types97.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var SegmentInline_default = SegmentInline;

// node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js
function Segment(props) {
  var attached = props.attached, basic = props.basic, children = props.children, circular = props.circular, className = props.className, clearing = props.clearing, color = props.color, compact2 = props.compact, content = props.content, disabled = props.disabled, floated = props.floated, inverted = props.inverted, loading = props.loading, placeholder = props.placeholder, padded = props.padded, piled = props.piled, raised = props.raised, secondary = props.secondary, size2 = props.size, stacked = props.stacked, tertiary = props.tertiary, textAlign = props.textAlign, vertical = props.vertical;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(clearing, "clearing"), useKeyOnly(compact2, "compact"), useKeyOnly(disabled, "disabled"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(placeholder, "placeholder"), useKeyOnly(piled, "piled"), useKeyOnly(raised, "raised"), useKeyOnly(secondary, "secondary"), useKeyOnly(stacked, "stacked"), useKeyOnly(tertiary, "tertiary"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(padded, "padded"), useTextAlignProp(textAlign), useValueAndKey(floated, "floated"), "segment", className);
  var rest = getUnhandledProps_default(Segment, props);
  var ElementType = getElementType_default(Segment, props);
  return import_react106.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Segment.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
Segment.Group = SegmentGroup_default;
Segment.Inline = SegmentInline_default;
Segment.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types98.default.elementType,
  /** Attach segment to other content, like a header. */
  attached: import_prop_types98.default.oneOfType([import_prop_types98.default.bool, import_prop_types98.default.oneOf(["top", "bottom"])]),
  /** A basic segment has no special formatting. */
  basic: import_prop_types98.default.bool,
  /** Primary content. */
  children: import_prop_types98.default.node,
  /** A segment can be circular. */
  circular: import_prop_types98.default.bool,
  /** Additional classes. */
  className: import_prop_types98.default.string,
  /** A segment can clear floated content. */
  clearing: import_prop_types98.default.bool,
  /** Segment can be colored. */
  color: import_prop_types98.default.oneOf(SUI_exports.COLORS),
  /** A segment may take up only as much space as is necessary. */
  compact: import_prop_types98.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A segment may show its content is disabled. */
  disabled: import_prop_types98.default.bool,
  /** Segment content can be floated to the left or right. */
  floated: import_prop_types98.default.oneOf(SUI_exports.FLOATS),
  /** A segment can have its colors inverted for contrast. */
  inverted: import_prop_types98.default.bool,
  /** A segment may show its content is being loaded. */
  loading: import_prop_types98.default.bool,
  /** A segment can increase its padding. */
  padded: import_prop_types98.default.oneOfType([import_prop_types98.default.bool, import_prop_types98.default.oneOf(["very"])]),
  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: import_prop_types98.default.bool,
  /** Formatted to look like a pile of pages. */
  piled: import_prop_types98.default.bool,
  /** A segment may be formatted to raise above the page. */
  raised: import_prop_types98.default.bool,
  /** A segment can be formatted to appear less noticeable. */
  secondary: import_prop_types98.default.bool,
  /** A segment can have different sizes. */
  size: import_prop_types98.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: import_prop_types98.default.bool,
  /** A segment can be formatted to appear even less noticeable. */
  tertiary: import_prop_types98.default.bool,
  /** Formats content to be aligned as part of a vertical group. */
  textAlign: import_prop_types98.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
  /** Formats content to be aligned vertically. */
  vertical: import_prop_types98.default.bool
} : {};
var Segment_default = Segment;

// node_modules/semantic-ui-react/dist/es/elements/Step/Step.js
var import_prop_types103 = __toESM(require_prop_types());
var import_react111 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Step/StepContent.js
var import_prop_types101 = __toESM(require_prop_types());
var import_react109 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Step/StepDescription.js
var import_prop_types99 = __toESM(require_prop_types());
var import_react107 = __toESM(require_react());
function StepDescription(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("description", className);
  var rest = getUnhandledProps_default(StepDescription, props);
  var ElementType = getElementType_default(StepDescription, props);
  return import_react107.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
StepDescription.handledProps = ["as", "children", "className", "content"];
StepDescription.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types99.default.elementType,
  /** Primary content. */
  children: import_prop_types99.default.node,
  /** Additional classes. */
  className: import_prop_types99.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
StepDescription.create = createShorthandFactory(StepDescription, function(content) {
  return {
    content
  };
});
var StepDescription_default = StepDescription;

// node_modules/semantic-ui-react/dist/es/elements/Step/StepTitle.js
var import_prop_types100 = __toESM(require_prop_types());
var import_react108 = __toESM(require_react());
function StepTitle(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("title", className);
  var rest = getUnhandledProps_default(StepTitle, props);
  var ElementType = getElementType_default(StepTitle, props);
  return import_react108.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
StepTitle.handledProps = ["as", "children", "className", "content"];
StepTitle.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types100.default.elementType,
  /** Primary content. */
  children: import_prop_types100.default.node,
  /** Additional classes. */
  className: import_prop_types100.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
StepTitle.create = createShorthandFactory(StepTitle, function(content) {
  return {
    content
  };
});
var StepTitle_default = StepTitle;

// node_modules/semantic-ui-react/dist/es/elements/Step/StepContent.js
function StepContent(props) {
  var children = props.children, className = props.className, content = props.content, description = props.description, title = props.title;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(StepContent, props);
  var ElementType = getElementType_default(StepContent, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react109.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react109.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react109.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), StepTitle_default.create(title, {
    autoGenerateKey: false
  }), StepDescription_default.create(description, {
    autoGenerateKey: false
  }));
}
StepContent.handledProps = ["as", "children", "className", "content", "description", "title"];
StepContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types101.default.elementType,
  /** Primary content. */
  children: import_prop_types101.default.node,
  /** Additional classes. */
  className: import_prop_types101.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for StepDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** Shorthand for StepTitle. */
  title: customPropTypes_exports.itemShorthand
} : {};
StepContent.create = createShorthandFactory(StepContent, function(content) {
  return {
    content
  };
});
var StepContent_default = StepContent;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result = [];
  while (object) {
    arrayPush_default(result, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto17 = Object.prototype;
var hasOwnProperty14 = objectProto17.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty14.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap_default(getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee_default(predicate);
  return basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default = pickBy;

// node_modules/semantic-ui-react/dist/es/elements/Step/StepGroup.js
var import_prop_types102 = __toESM(require_prop_types());
var import_react110 = __toESM(require_react());
var numberMap = true ? pickBy_default(numberToWordMap, function(val, key) {
  return key <= 8;
}) : {};
function StepGroup(props) {
  var attached = props.attached, children = props.children, className = props.className, content = props.content, fluid = props.fluid, items = props.items, ordered = props.ordered, size2 = props.size, stackable = props.stackable, unstackable = props.unstackable, vertical = props.vertical, widths = props.widths;
  var classes = clsx_m_default("ui", size2, useKeyOnly(fluid, "fluid"), useKeyOnly(ordered, "ordered"), useKeyOnly(unstackable, "unstackable"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useValueAndKey(stackable, "stackable"), useWidthProp(widths), "steps", className);
  var rest = getUnhandledProps_default(StepGroup, props);
  var ElementType = getElementType_default(StepGroup, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react110.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react110.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react110.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), map_default(items, function(item) {
    return Step_default.create(item);
  }));
}
StepGroup.handledProps = ["as", "attached", "children", "className", "content", "fluid", "items", "ordered", "size", "stackable", "unstackable", "vertical", "widths"];
StepGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types102.default.elementType,
  /** Steps can be attached to other elements. */
  attached: import_prop_types102.default.oneOfType([import_prop_types102.default.bool, import_prop_types102.default.oneOf(["top", "bottom"])]),
  /** Primary content. */
  children: import_prop_types102.default.node,
  /** Additional classes. */
  className: import_prop_types102.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A fluid step takes up the width of its container. */
  fluid: import_prop_types102.default.bool,
  /** Shorthand array of props for Step. */
  items: customPropTypes_exports.collectionShorthand,
  /** A step can show a ordered sequence of steps. */
  ordered: import_prop_types102.default.bool,
  /** Steps can have different sizes. */
  size: import_prop_types102.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** A step can stack vertically only on smaller screens. */
  stackable: import_prop_types102.default.oneOf(["tablet"]),
  /** A step can prevent itself from stacking on mobile. */
  unstackable: import_prop_types102.default.bool,
  /** A step can be displayed stacked vertically. */
  vertical: import_prop_types102.default.bool,
  /** Steps can be divided evenly inside their parent. */
  widths: import_prop_types102.default.oneOf([].concat(keys_default(numberMap), keys_default(numberMap).map(Number), values_default(numberMap)))
} : {};
var StepGroup_default = StepGroup;

// node_modules/semantic-ui-react/dist/es/elements/Step/Step.js
var Step = function(_Component) {
  _inheritsLoose(Step2, _Component);
  function Step2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.computeElementType = function() {
      var onClick = _this.props.onClick;
      if (onClick) return "a";
    };
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (!disabled) invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = Step2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, completed = _this$props.completed, content = _this$props.content, description = _this$props.description, disabled = _this$props.disabled, href = _this$props.href, icon = _this$props.icon, link = _this$props.link, title = _this$props.title;
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(completed, "completed"), useKeyOnly(disabled, "disabled"), useKeyOnly(link, "link"), "step", className);
    var rest = getUnhandledProps_default(Step2, this.props);
    var ElementType = getElementType_default(Step2, this.props, this.computeElementType);
    if (!childrenUtils_exports.isNil(children)) {
      return import_react111.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href,
        onClick: this.handleClick
      }), children);
    }
    if (!childrenUtils_exports.isNil(content)) {
      return import_react111.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href,
        onClick: this.handleClick
      }), content);
    }
    return import_react111.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href,
      onClick: this.handleClick
    }), Icon_default.create(icon, {
      autoGenerateKey: false
    }), StepContent_default.create({
      description,
      title
    }, {
      autoGenerateKey: false
    }));
  };
  return Step2;
}(import_react111.Component);
Step.handledProps = ["active", "as", "children", "className", "completed", "content", "description", "disabled", "href", "icon", "link", "onClick", "ordered", "title"];
Step.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types103.default.elementType,
  /** A step can be highlighted as active. */
  active: import_prop_types103.default.bool,
  /** Primary content. */
  children: import_prop_types103.default.node,
  /** Additional classes. */
  className: import_prop_types103.default.string,
  /** A step can show that a user has completed it. */
  completed: import_prop_types103.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for StepDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** Show that the Loader is inactive. */
  disabled: import_prop_types103.default.bool,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: import_prop_types103.default.string,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand,
  /** A step can be link. */
  link: import_prop_types103.default.bool,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types103.default.func,
  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: import_prop_types103.default.bool,
  /** Shorthand for StepTitle. */
  title: customPropTypes_exports.itemShorthand
} : {};
Step.Content = StepContent_default;
Step.Description = StepDescription_default;
Step.Group = StepGroup_default;
Step.Title = StepTitle_default;
Step.create = createShorthandFactory(Step, function(content) {
  return {
    content
  };
});
var Step_default = Step;

// node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js
var import_prop_types108 = __toESM(require_prop_types());
var import_react116 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionAccordion.js
var import_prop_types107 = __toESM(require_prop_types());
var import_react115 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionPanel.js
var import_prop_types106 = __toESM(require_prop_types());
var import_react114 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionTitle.js
var import_prop_types104 = __toESM(require_prop_types());
var import_react112 = __toESM(require_react());
var AccordionTitle = function(_Component) {
  _inheritsLoose(AccordionTitle2, _Component);
  function AccordionTitle2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      return invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = AccordionTitle2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, icon = _this$props.icon;
    var classes = clsx_m_default(useKeyOnly(active, "active"), "title", className);
    var rest = getUnhandledProps_default(AccordionTitle2, this.props);
    var ElementType = getElementType_default(AccordionTitle2, this.props);
    var iconValue = isNil_default(icon) ? "dropdown" : icon;
    if (!childrenUtils_exports.isNil(children)) {
      return import_react112.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    return import_react112.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), Icon_default.create(iconValue, {
      autoGenerateKey: false
    }), content);
  };
  return AccordionTitle2;
}(import_react112.Component);
AccordionTitle.handledProps = ["active", "as", "children", "className", "content", "icon", "index", "onClick"];
AccordionTitle.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types104.default.elementType,
  /** Whether or not the title is in the open state. */
  active: import_prop_types104.default.bool,
  /** Primary content. */
  children: import_prop_types104.default.node,
  /** Additional classes. */
  className: import_prop_types104.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand,
  /** AccordionTitle index inside Accordion. */
  index: import_prop_types104.default.oneOfType([import_prop_types104.default.string, import_prop_types104.default.number]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types104.default.func
} : {};
AccordionTitle.create = createShorthandFactory(AccordionTitle, function(content) {
  return {
    content
  };
});

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionContent.js
var import_prop_types105 = __toESM(require_prop_types());
var import_react113 = __toESM(require_react());
function AccordionContent(props) {
  var active = props.active, children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", useKeyOnly(active, "active"), className);
  var rest = getUnhandledProps_default(AccordionContent, props);
  var ElementType = getElementType_default(AccordionContent, props);
  return import_react113.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
AccordionContent.handledProps = ["active", "as", "children", "className", "content"];
AccordionContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types105.default.elementType,
  /** Whether or not the content is visible. */
  active: import_prop_types105.default.bool,
  /** Primary content. */
  children: import_prop_types105.default.node,
  /** Additional classes. */
  className: import_prop_types105.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
AccordionContent.create = createShorthandFactory(AccordionContent, function(content) {
  return {
    content
  };
});
var AccordionContent_default = AccordionContent;

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionPanel.js
var AccordionPanel = function(_Component) {
  _inheritsLoose(AccordionPanel2, _Component);
  function AccordionPanel2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleTitleOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, titleProps) {
          invoke_default(predefinedProps, "onClick", e, titleProps);
          invoke_default(_this.props, "onTitleClick", e, titleProps);
        }
      };
    };
    return _this;
  }
  var _proto = AccordionPanel2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, content = _this$props.content, index = _this$props.index, title = _this$props.title;
    return import_react114.default.createElement(import_react114.default.Fragment, null, AccordionTitle.create(title, {
      autoGenerateKey: false,
      defaultProps: {
        active,
        index
      },
      overrideProps: this.handleTitleOverrides
    }), AccordionContent_default.create(content, {
      autoGenerateKey: false,
      defaultProps: {
        active
      }
    }));
  };
  return AccordionPanel2;
}(import_react114.Component);
AccordionPanel.handledProps = ["active", "content", "index", "onTitleClick", "title"];
AccordionPanel.propTypes = true ? {
  /** Whether or not the title is in the open state. */
  active: import_prop_types106.default.bool,
  /** A shorthand for Accordion.Content. */
  content: customPropTypes_exports.itemShorthand,
  /** A panel index. */
  index: import_prop_types106.default.oneOfType([import_prop_types106.default.number, import_prop_types106.default.string]),
  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: import_prop_types106.default.func,
  /** A shorthand for Accordion.Title. */
  title: customPropTypes_exports.itemShorthand
} : {};
AccordionPanel.create = createShorthandFactory(AccordionPanel, null);
var AccordionPanel_default = AccordionPanel;

// node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionAccordion.js
var warnIfPropsAreInvalid = function warnIfPropsAreInvalid2(props, state) {
  var exclusive = props.exclusive;
  var activeIndex = state.activeIndex;
  if (exclusive && typeof activeIndex !== "number") {
    console.error("`activeIndex` must be a number if `exclusive` is true");
  } else if (!exclusive && !isArray_default(activeIndex)) {
    console.error("`activeIndex` must be an array if `exclusive` is false");
  }
};
var AccordionAccordion = function(_Component) {
  _inheritsLoose(AccordionAccordion2, _Component);
  function AccordionAccordion2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.computeNewIndex = function(index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index;
      return includes_default(activeIndex, index) ? without_default(activeIndex, index) : [].concat(activeIndex, [index]);
    };
    _this.handleTitleClick = function(e, titleProps) {
      var index = titleProps.index;
      _this.setState({
        activeIndex: _this.computeNewIndex(index)
      });
      invoke_default(_this.props, "onTitleClick", e, titleProps);
    };
    _this.isIndexActive = function(index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      return exclusive ? activeIndex === index : includes_default(activeIndex, index);
    };
    return _this;
  }
  var _proto = AccordionAccordion2.prototype;
  _proto.getInitialAutoControlledState = function getInitialAutoControlledState(_ref) {
    var exclusive = _ref.exclusive;
    return {
      activeIndex: exclusive ? -1 : []
    };
  };
  _proto.componentDidMount = function componentDidMount() {
    if (true) {
      warnIfPropsAreInvalid(this.props, this.state);
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    if (true) {
      warnIfPropsAreInvalid(this.props, this.state);
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, className = _this$props.className, children = _this$props.children, panels = _this$props.panels;
    var classes = clsx_m_default("accordion", className);
    var rest = getUnhandledProps_default(AccordionAccordion2, this.props);
    var ElementType = getElementType_default(AccordionAccordion2, this.props);
    return import_react115.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? map_default(panels, function(panel, index) {
      return AccordionPanel_default.create(panel, {
        defaultProps: {
          active: _this2.isIndexActive(index),
          index,
          onTitleClick: _this2.handleTitleClick
        }
      });
    }) : children);
  };
  return AccordionAccordion2;
}(ModernAutoControlledComponent);
AccordionAccordion.handledProps = ["activeIndex", "as", "children", "className", "defaultActiveIndex", "exclusive", "onTitleClick", "panels"];
AccordionAccordion.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types107.default.elementType,
  /** Index of the currently active panel. */
  activeIndex: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types107.default.oneOfType([import_prop_types107.default.arrayOf(import_prop_types107.default.number), import_prop_types107.default.number])]),
  /** Primary content. */
  children: import_prop_types107.default.node,
  /** Additional classes. */
  className: import_prop_types107.default.string,
  /** Initial activeIndex value. */
  defaultActiveIndex: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types107.default.oneOfType([import_prop_types107.default.arrayOf(import_prop_types107.default.number), import_prop_types107.default.number])]),
  /** Only allow one panel open at a time. */
  exclusive: import_prop_types107.default.bool,
  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types107.default.func]),
  /** Shorthand array of props for Accordion. */
  panels: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types107.default.arrayOf(import_prop_types107.default.shape({
    content: customPropTypes_exports.itemShorthand,
    title: customPropTypes_exports.itemShorthand
  }))])
} : {};
AccordionAccordion.defaultProps = {
  exclusive: true
};
AccordionAccordion.autoControlledProps = ["activeIndex"];
AccordionAccordion.create = createShorthandFactory(AccordionAccordion, function(content) {
  return {
    content
  };
});

// node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js
function Accordion(props) {
  var className = props.className, fluid = props.fluid, inverted = props.inverted, styled = props.styled;
  var classes = clsx_m_default("ui", useKeyOnly(fluid, "fluid"), useKeyOnly(inverted, "inverted"), useKeyOnly(styled, "styled"), className);
  var rest = getUnhandledProps_default(Accordion, props);
  return import_react116.default.createElement(AccordionAccordion, _extends({}, rest, {
    className: classes
  }));
}
Accordion.handledProps = ["className", "fluid", "inverted", "styled"];
Accordion.propTypes = true ? {
  /** Additional classes. */
  className: import_prop_types108.default.string,
  /** Format to take up the width of its container. */
  fluid: import_prop_types108.default.bool,
  /** Format for dark backgrounds. */
  inverted: import_prop_types108.default.bool,
  /** Adds some basic styling to accordion panels. */
  styled: import_prop_types108.default.bool
} : {};
Accordion.Accordion = AccordionAccordion;
Accordion.Content = AccordionContent_default;
Accordion.Panel = AccordionPanel_default;
Accordion.Title = AccordionTitle;
var Accordion_default = Accordion;

// node_modules/semantic-ui-react/dist/es/modules/Embed/Embed.js
var import_prop_types109 = __toESM(require_prop_types());
var import_react117 = __toESM(require_react());
var Embed = function(_Component) {
  _inheritsLoose(Embed2, _Component);
  function Embed2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;
      if (onClick) onClick(e, _extends({}, _this.props, {
        active: true
      }));
      if (!active) _this.setState({
        active: true
      });
    };
    return _this;
  }
  var _proto = Embed2.prototype;
  _proto.getSrc = function getSrc() {
    var _this$props = this.props, _this$props$autoplay = _this$props.autoplay, autoplay = _this$props$autoplay === void 0 ? true : _this$props$autoplay, _this$props$brandedUI = _this$props.brandedUI, brandedUI = _this$props$brandedUI === void 0 ? false : _this$props$brandedUI, _this$props$color = _this$props.color, color = _this$props$color === void 0 ? "#444444" : _this$props$color, _this$props$hd = _this$props.hd, hd = _this$props$hd === void 0 ? true : _this$props$hd, id = _this$props.id, source = _this$props.source, url = _this$props.url;
    if (source === "youtube") {
      return ["//www.youtube.com/embed/" + id, "?autohide=true", "&amp;autoplay=" + autoplay, "&amp;color=" + encodeURIComponent(color), "&amp;hq=" + hd, "&amp;jsapi=false", "&amp;modestbranding=" + brandedUI, "&amp;rel=" + (brandedUI ? 0 : 1)].join("");
    }
    if (source === "vimeo") {
      return ["//player.vimeo.com/video/" + id, "?api=false", "&amp;autoplay=" + autoplay, "&amp;byline=false", "&amp;color=" + encodeURIComponent(color), "&amp;portrait=false", "&amp;title=false"].join("");
    }
    return url;
  };
  _proto.render = function render() {
    var _this$props2 = this.props, aspectRatio = _this$props2.aspectRatio, className = _this$props2.className, icon = _this$props2.icon, placeholder = _this$props2.placeholder;
    var active = this.state.active;
    var classes = clsx_m_default("ui", aspectRatio, useKeyOnly(active, "active"), "embed", className);
    var rest = getUnhandledProps_default(Embed2, this.props);
    var ElementType = getElementType_default(Embed2, this.props);
    var iconShorthand = icon !== void 0 ? icon : "video play";
    return import_react117.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), Icon_default.create(iconShorthand, {
      autoGenerateKey: false
    }), placeholder && import_react117.default.createElement("img", {
      className: "placeholder",
      src: placeholder
    }), this.renderEmbed());
  };
  _proto.renderEmbed = function renderEmbed() {
    var _this$props3 = this.props, children = _this$props3.children, content = _this$props3.content, iframe = _this$props3.iframe, source = _this$props3.source;
    var active = this.state.active;
    if (!active) return null;
    if (!childrenUtils_exports.isNil(children)) return import_react117.default.createElement("div", {
      className: "embed"
    }, children);
    if (!childrenUtils_exports.isNil(content)) return import_react117.default.createElement("div", {
      className: "embed"
    }, content);
    return import_react117.default.createElement("div", {
      className: "embed"
    }, createHTMLIframe(childrenUtils_exports.isNil(iframe) ? this.getSrc() : iframe, {
      defaultProps: {
        allowFullScreen: false,
        frameBorder: 0,
        height: "100%",
        scrolling: "no",
        src: this.getSrc(),
        title: "Embedded content from " + source + ".",
        width: "100%"
      },
      autoGenerateKey: false
    }));
  };
  return Embed2;
}(ModernAutoControlledComponent);
Embed.handledProps = ["active", "as", "aspectRatio", "autoplay", "brandedUI", "children", "className", "color", "content", "defaultActive", "hd", "icon", "id", "iframe", "onClick", "placeholder", "source", "url"];
Embed.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types109.default.elementType,
  /** An embed can be active. */
  active: import_prop_types109.default.bool,
  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: import_prop_types109.default.oneOf(["4:3", "16:9", "21:9"]),
  /** Setting to true or false will force autoplay. */
  autoplay: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), import_prop_types109.default.bool]),
  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), import_prop_types109.default.bool]),
  /** Primary content. */
  children: import_prop_types109.default.node,
  /** Additional classes. */
  className: import_prop_types109.default.string,
  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), import_prop_types109.default.string]),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Initial value of active. */
  defaultActive: import_prop_types109.default.bool,
  /** Whether to prefer HD content. */
  hd: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), import_prop_types109.default.bool]),
  /** Specifies an icon to use with placeholder content. */
  icon: customPropTypes_exports.itemShorthand,
  /** Specifies an id for source. */
  id: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), import_prop_types109.default.string]),
  /** Shorthand for HTML iframe. */
  iframe: customPropTypes_exports.every([customPropTypes_exports.demand(["source"]), customPropTypes_exports.itemShorthand]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: import_prop_types109.default.func,
  /** A placeholder image for embed. */
  placeholder: import_prop_types109.default.string,
  /** Specifies a source to use. */
  source: customPropTypes_exports.every([customPropTypes_exports.disallow(["sourceUrl"]), import_prop_types109.default.oneOf(["youtube", "vimeo"])]),
  /** Specifies a url to use for embed. */
  url: customPropTypes_exports.every([customPropTypes_exports.disallow(["source"]), import_prop_types109.default.string])
} : {};
Embed.autoControlledProps = ["active"];

// node_modules/lodash-es/isElement.js
function isElement(value) {
  return isObjectLike_default(value) && value.nodeType === 1 && !isPlainObject_default(value);
}
var isElement_default = isElement;

// node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js
var import_event_stack4 = __toESM(require_lib());
var import_prop_types112 = __toESM(require_prop_types());
var import_react120 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Popper.js
var React121 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React118 = __toESM(require_react());
var ManagerReferenceNodeContext = React118.createContext();
var ManagerReferenceNodeSetterContext = React118.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React119 = __toESM(require_react());
var unwrapArray = function unwrapArray2(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke2(fn2) {
  if (typeof fn2 === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn2.apply(void 0, args);
  }
};
var setRef = function setRef2(ref2, node) {
  if (typeof ref2 === "function") {
    return safeInvoke(ref2, node);
  } else if (ref2 != null) {
    ref2.current = node;
  }
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && window.document && window.document.createElement ? React119.useLayoutEffect : React119.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React120 = __toESM(require_react());
var ReactDOM2 = __toESM(require_react_dom());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement2(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property2) {
        style2[property2] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min2 = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement2(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement2(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min3, value, max2) {
  return max(min3, min2(value, max2));
}
function withinMaxClamp(min3, value, max2) {
  var v = within(min3, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min3, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement2(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min3 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min2(min3, tetherMin) : min3, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance2.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React120.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React120.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React120.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM2.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React120.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React120.useRef();
  useIsomorphicLayoutEffect2(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect2(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper4 = options.createPopper || createPopper3;
    var popperInstance = createPopper4(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Popper.js
var NOOP = function NOOP2() {
  return void 0;
};
var NOOP_PROMISE = function NOOP_PROMISE2() {
  return Promise.resolve(null);
};
var EMPTY_MODIFIERS2 = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "bottom" : _ref$placement, _ref$strategy = _ref.strategy, strategy = _ref$strategy === void 0 ? "absolute" : _ref$strategy, _ref$modifiers = _ref.modifiers, modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS2 : _ref$modifiers, referenceElement = _ref.referenceElement, onFirstUpdate = _ref.onFirstUpdate, innerRef = _ref.innerRef, children = _ref.children;
  var referenceNode = React121.useContext(ManagerReferenceNodeContext);
  var _React$useState = React121.useState(null), popperElement = _React$useState[0], setPopperElement = _React$useState[1];
  var _React$useState2 = React121.useState(null), arrowElement = _React$useState2[0], setArrowElement = _React$useState2[1];
  React121.useEffect(function() {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React121.useMemo(function() {
    return {
      placement,
      strategy,
      onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: "arrow",
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);
  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options), state = _usePopper.state, styles = _usePopper.styles, forceUpdate = _usePopper.forceUpdate, update = _usePopper.update;
  var childrenProps = React121.useMemo(function() {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

// node_modules/react-popper/lib/esm/Reference.js
var React122 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js
var import_shallowequal3 = __toESM(require_shallowequal());

// node_modules/lodash-es/_baseInverter.js
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn_default(object, function(value, key, object2) {
    setter(accumulator, iteratee(value), key, object2);
  });
  return accumulator;
}
var baseInverter_default = baseInverter;

// node_modules/lodash-es/_createInverter.js
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter_default(object, setter, toIteratee(iteratee), {});
  };
}
var createInverter_default = createInverter;

// node_modules/lodash-es/invert.js
var objectProto18 = Object.prototype;
var nativeObjectToString3 = objectProto18.toString;
var invert = createInverter_default(function(result, value, key) {
  if (value != null && typeof value.toString != "function") {
    value = nativeObjectToString3.call(value);
  }
  result[value] = key;
}, constant_default(identity_default));
var invert_default = invert;

// node_modules/semantic-ui-react/dist/es/modules/Popup/lib/positions.js
var positionsMapping = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
};
var positions = keys_default(positionsMapping);
var placementMapping = invert_default(positionsMapping);

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r2) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2 || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o = r2[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/semantic-ui-react/dist/es/modules/Popup/lib/createReferenceProxy.js
var ReferenceProxy = function() {
  function ReferenceProxy2(refObject2) {
    this.ref = refObject2;
  }
  var _proto = ReferenceProxy2.prototype;
  _proto.getBoundingClientRect = function getBoundingClientRect2() {
    return invoke_default(this.ref.current, "getBoundingClientRect") || {};
  };
  _createClass(ReferenceProxy2, [{
    key: "clientWidth",
    get: function get2() {
      return this.getBoundingClientRect().width;
    }
  }, {
    key: "clientHeight",
    get: function get2() {
      return this.getBoundingClientRect().height;
    }
  }, {
    key: "parentNode",
    get: function get2() {
      return this.ref.current ? this.ref.current.parentNode : void 0;
    }
  }, {
    key: "contextElement",
    get: function get2() {
      return this.ref.current;
    }
  }]);
  return ReferenceProxy2;
}();
var createReferenceProxy = memoize_default(function(reference2) {
  return new ReferenceProxy(isRefObject(reference2) ? reference2 : {
    current: reference2
  });
});
var createReferenceProxy_default = createReferenceProxy;

// node_modules/semantic-ui-react/dist/es/modules/Popup/PopupContent.js
var import_prop_types110 = __toESM(require_prop_types());
var import_react118 = __toESM(require_react());
function PopupContent(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(PopupContent, props);
  var ElementType = getElementType_default(PopupContent, props);
  return import_react118.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
PopupContent.handledProps = ["as", "children", "className", "content"];
PopupContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types110.default.elementType,
  /** The content of the Popup */
  children: import_prop_types110.default.node,
  /** Classes to add to the Popup content className. */
  className: import_prop_types110.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
PopupContent.create = createShorthandFactory(PopupContent, function(children) {
  return {
    children
  };
});

// node_modules/semantic-ui-react/dist/es/modules/Popup/PopupHeader.js
var import_prop_types111 = __toESM(require_prop_types());
var import_react119 = __toESM(require_react());
function PopupHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(PopupHeader, props);
  var ElementType = getElementType_default(PopupHeader, props);
  return import_react119.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types111.default.elementType,
  /** Primary content. */
  children: import_prop_types111.default.node,
  /** Additional classes. */
  className: import_prop_types111.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
PopupHeader.create = createShorthandFactory(PopupHeader, function(children) {
  return {
    children
  };
});

// node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js
var Popup = function(_Component) {
  _inheritsLoose(Popup2, _Component);
  function Popup2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {};
    _this.open = false;
    _this.zIndexWasSynced = false;
    _this.triggerRef = import_react120.default.createRef();
    _this.elementRef = import_react120.default.createRef();
    _this.getPortalProps = function() {
      var portalProps = {};
      var _this$props = _this.props, on = _this$props.on, hoverable = _this$props.hoverable;
      var normalizedOn = isArray_default(on) ? on : [on];
      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }
      if (includes_default(normalizedOn, "hover")) {
        portalProps.openOnTriggerClick = false;
        portalProps.closeOnTriggerClick = false;
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true;
        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }
      if (includes_default(normalizedOn, "click")) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }
      if (includes_default(normalizedOn, "focus")) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }
      return portalProps;
    };
    _this.hideOnScroll = function(e) {
      if (isElement_default(e.target) && _this.elementRef.current.contains(e.target)) {
        return;
      }
      _this.setState({
        closed: true
      });
      eventStack_default.unsub("scroll", _this.hideOnScroll, {
        target: window
      });
      _this.timeoutId = setTimeout(function() {
        _this.setState({
          closed: false
        });
      }, 50);
      _this.handleClose(e);
    };
    _this.handleClose = function(e) {
      invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
        open: false
      }));
    };
    _this.handleOpen = function(e) {
      invoke_default(_this.props, "onOpen", e, _extends({}, _this.props, {
        open: true
      }));
    };
    _this.handlePortalMount = function(e) {
      invoke_default(_this.props, "onMount", e, _this.props);
    };
    _this.handlePortalUnmount = function(e) {
      _this.positionUpdate = null;
      invoke_default(_this.props, "onUnmount", e, _this.props);
    };
    _this.renderContent = function(_ref) {
      var popperPlacement = _ref.placement, popperRef = _ref.ref, update = _ref.update, popperStyle = _ref.style;
      var _this$props2 = _this.props, basic = _this$props2.basic, children = _this$props2.children, className = _this$props2.className, content = _this$props2.content, hideOnScroll = _this$props2.hideOnScroll, flowing = _this$props2.flowing, header = _this$props2.header, inverted = _this$props2.inverted, popper2 = _this$props2.popper, size2 = _this$props2.size, style = _this$props2.style, wide = _this$props2.wide;
      var contentRestProps = _this.state.contentRestProps;
      _this.positionUpdate = update;
      var classes = clsx_m_default("ui", placementMapping[popperPlacement], size2, useKeyOrValueAndKey(wide, "wide"), useKeyOnly(basic, "basic"), useKeyOnly(flowing, "flowing"), useKeyOnly(inverted, "inverted"), "popup transition visible", className);
      var ElementType = getElementType_default(Popup2, _this.props);
      var styles = _extends({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, style);
      var innerElement = import_react120.default.createElement(ElementType, _extends({}, contentRestProps, {
        className: classes,
        style: styles,
        ref: _this.elementRef
      }), childrenUtils_exports.isNil(children) ? import_react120.default.createElement(import_react120.default.Fragment, null, PopupHeader.create(header, {
        autoGenerateKey: false
      }), PopupContent.create(content, {
        autoGenerateKey: false
      })) : children, hideOnScroll && import_react120.default.createElement(import_event_stack4.default, {
        on: _this.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return createHTMLDivision(popper2 || {}, {
        overrideProps: {
          children: innerElement,
          ref: popperRef,
          style: _extends({
            // Fixes layout for floated elements
            // https://github.com/Semantic-Org/Semantic-UI-React/issues/4092
            display: "flex"
          }, popperStyle)
        }
      });
    };
    return _this;
  }
  Popup2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.closed || state.disabled) return {};
    var unhandledProps = getUnhandledProps_default(Popup2, props);
    var contentRestProps = reduce_default(unhandledProps, function(acc, val, key) {
      if (!includes_default(Portal_default.handledProps, key)) acc[key] = val;
      return acc;
    }, {});
    var portalRestProps = pick_default(unhandledProps, Portal_default.handledProps);
    return {
      contentRestProps,
      portalRestProps
    };
  };
  var _proto = Popup2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var depsEqual = (0, import_shallowequal3.default)(this.props.popperDependencies, prevProps.popperDependencies);
    if (!depsEqual) {
      this.handleUpdate();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  };
  _proto.handleUpdate = function handleUpdate() {
    if (this.positionUpdate) this.positionUpdate();
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props3 = this.props, context = _this$props3.context, disabled = _this$props3.disabled, eventsEnabled = _this$props3.eventsEnabled, offset2 = _this$props3.offset, pinned = _this$props3.pinned, popper2 = _this$props3.popper, popperModifiers = _this$props3.popperModifiers, position = _this$props3.position, positionFixed = _this$props3.positionFixed, trigger = _this$props3.trigger;
    var _this$state = this.state, closed = _this$state.closed, portalRestProps = _this$state.portalRestProps;
    if (closed || disabled) {
      return trigger;
    }
    var modifiers = [{
      name: "arrow",
      enabled: false
    }, {
      name: "eventListeners",
      options: {
        scroll: !!eventsEnabled,
        resize: !!eventsEnabled
      }
    }, {
      name: "flip",
      enabled: !pinned
    }, {
      name: "preventOverflow",
      enabled: !!offset2
    }, {
      name: "offset",
      enabled: !!offset2,
      options: {
        offset: offset2
      }
    }].concat(popperModifiers, [
      // We are syncing zIndex from `.ui.popup.content` to avoid layering issues as in SUIR we are using an additional
      // `div` for Popper.js
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/4083
      {
        name: "syncZIndex",
        enabled: true,
        phase: "beforeRead",
        fn: function fn2(_ref2) {
          var _popper$style;
          var state = _ref2.state;
          if (_this2.zIndexWasSynced) {
            return;
          }
          var definedZIndex = popper2 == null ? void 0 : (_popper$style = popper2.style) == null ? void 0 : _popper$style.zIndex;
          if (isUndefined_default(definedZIndex)) {
            state.elements.popper.style.zIndex = window.getComputedStyle(state.elements.popper.firstChild).zIndex;
          }
          _this2.zIndexWasSynced = true;
        },
        effect: function effect4() {
          return function() {
            _this2.zIndexWasSynced = false;
          };
        }
      }
    ]);
    var referenceElement = createReferenceProxy_default(isNil_default(context) ? this.triggerRef : context);
    var mergedPortalProps = _extends({}, this.getPortalProps(), portalRestProps);
    return import_react120.default.createElement(Portal_default, _extends({}, mergedPortalProps, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger,
      triggerRef: this.triggerRef
    }), import_react120.default.createElement(Popper, {
      modifiers,
      placement: positionsMapping[position],
      strategy: positionFixed ? "fixed" : null,
      referenceElement
    }, this.renderContent));
  };
  return Popup2;
}(import_react120.Component);
Popup.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
Popup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types112.default.elementType,
  /** Display the popup without the pointing arrow. */
  basic: import_prop_types112.default.bool,
  /** Primary content. */
  children: import_prop_types112.default.node,
  /** Additional classes. */
  className: import_prop_types112.default.string,
  /** Simple text content for the popover. */
  content: customPropTypes_exports.itemShorthand,
  /** Existing element the pop-up should be bound to. */
  context: import_prop_types112.default.oneOfType([import_prop_types112.default.object, customPropTypes_exports.refObject]),
  /** A disabled popup only renders its trigger. */
  disabled: import_prop_types112.default.bool,
  /** Enables the Popper.js event listeners. */
  eventsEnabled: import_prop_types112.default.bool,
  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: import_prop_types112.default.bool,
  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,
  /** Header displayed above the content in bold. */
  header: customPropTypes_exports.itemShorthand,
  /** Hide the Popup when scrolling the window. */
  hideOnScroll: import_prop_types112.default.bool,
  /** Whether the popup should not close on hover. */
  hoverable: import_prop_types112.default.bool,
  /** Invert the colors of the Popup. */
  inverted: import_prop_types112.default.bool,
  /**
   * Offset values in px unit to apply to rendered popup. The basic offset accepts an
   * array with two numbers in the form [skidding, distance]:
   * - `skidding` displaces the Popup along the reference element
   * - `distance` displaces the Popup away from, or toward, the reference element in the direction of its placement. A positive number displaces it further away, while a negative number lets it overlap the reference.
   *
   * @see https://popper.js.org/docs/v2/modifiers/offset/
   */
  offset: import_prop_types112.default.oneOfType([import_prop_types112.default.func, import_prop_types112.default.arrayOf(import_prop_types112.default.number)]),
  /** Events triggering the popup. */
  on: import_prop_types112.default.oneOfType([import_prop_types112.default.oneOf(["hover", "click", "focus"]), import_prop_types112.default.arrayOf(import_prop_types112.default.oneOf(["hover", "click", "focus"]))]),
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: import_prop_types112.default.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types112.default.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: import_prop_types112.default.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types112.default.func,
  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: import_prop_types112.default.bool,
  /** Position for the popover. */
  position: import_prop_types112.default.oneOf(positions),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: import_prop_types112.default.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: customPropTypes_exports.itemShorthand,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: import_prop_types112.default.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: import_prop_types112.default.array,
  /** Popup size. */
  size: import_prop_types112.default.oneOf(without_default(SUI_exports.SIZES, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: import_prop_types112.default.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: import_prop_types112.default.node,
  /** Popup width. */
  wide: import_prop_types112.default.oneOfType([import_prop_types112.default.bool, import_prop_types112.default.oneOf(["very"])])
} : {};
Popup.defaultProps = {
  disabled: false,
  eventsEnabled: true,
  on: ["click", "hover"],
  pinned: false,
  popperModifiers: [],
  position: "top left"
};
Popup.Content = PopupContent;
Popup.Header = PopupHeader;

// node_modules/lodash-es/_createRound.js
var nativeIsFinite = root_default.isFinite;
var nativeMin3 = Math.min;
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber_default(number);
    precision = precision == null ? 0 : nativeMin3(toInteger_default(precision), 292);
    if (precision && nativeIsFinite(number)) {
      var pair = (toString_default(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
      pair = (toString_default(value) + "e").split("e");
      return +(pair[0] + "e" + (+pair[1] - precision));
    }
    return func(number);
  };
}
var createRound_default = createRound;

// node_modules/lodash-es/round.js
var round2 = createRound_default("round");
var round_default = round2;

// node_modules/lodash-es/clamp.js
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber_default(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber_default(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp_default(toNumber_default(number), lower, upper);
}
var clamp_default = clamp;

// node_modules/semantic-ui-react/dist/es/modules/Progress/Progress.js
var import_prop_types113 = __toESM(require_prop_types());
var import_react121 = __toESM(require_react());
var Progress = function(_Component) {
  _inheritsLoose(Progress2, _Component);
  function Progress2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.calculatePercent = function() {
      var _this$props = _this.props, percent = _this$props.percent, total = _this$props.total, value = _this$props.value;
      if (!isUndefined_default(percent)) return percent;
      if (!isUndefined_default(total) && !isUndefined_default(value)) return value / total * 100;
    };
    _this.computeValueText = function(percent) {
      var _this$props2 = _this.props, progress = _this$props2.progress, total = _this$props2.total, value = _this$props2.value;
      if (progress === "value") return value;
      if (progress === "ratio") return value + "/" + total;
      return percent + "%";
    };
    _this.getPercent = function() {
      var _this$props3 = _this.props, precision = _this$props3.precision, progress = _this$props3.progress, total = _this$props3.total, value = _this$props3.value;
      var percent = clamp_default(_this.calculatePercent(), 0, 100);
      if (!isUndefined_default(total) && !isUndefined_default(value) && progress === "value") {
        return value / total * 100;
      }
      if (progress === "value") return value;
      if (isUndefined_default(precision)) return percent;
      return round_default(percent, precision);
    };
    _this.isAutoSuccess = function() {
      var _this$props4 = _this.props, autoSuccess = _this$props4.autoSuccess, percent = _this$props4.percent, total = _this$props4.total, value = _this$props4.value;
      return autoSuccess && (percent >= 100 || value >= total);
    };
    _this.renderLabel = function() {
      var _this$props5 = _this.props, children = _this$props5.children, content = _this$props5.content, label = _this$props5.label;
      if (!childrenUtils_exports.isNil(children)) return import_react121.default.createElement("div", {
        className: "label"
      }, children);
      if (!childrenUtils_exports.isNil(content)) return import_react121.default.createElement("div", {
        className: "label"
      }, content);
      return createHTMLDivision(label, {
        autoGenerateKey: false,
        defaultProps: {
          className: "label"
        }
      });
    };
    _this.renderProgress = function(percent) {
      var _this$props6 = _this.props, precision = _this$props6.precision, progress = _this$props6.progress;
      if (!progress && isUndefined_default(precision)) return;
      return import_react121.default.createElement("div", {
        className: "progress"
      }, _this.computeValueText(percent));
    };
    return _this;
  }
  var _proto = Progress2.prototype;
  _proto.render = function render() {
    var _this$props7 = this.props, active = _this$props7.active, attached = _this$props7.attached, className = _this$props7.className, color = _this$props7.color, disabled = _this$props7.disabled, error = _this$props7.error, indicating = _this$props7.indicating, inverted = _this$props7.inverted, size2 = _this$props7.size, success = _this$props7.success, warning2 = _this$props7.warning;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(active || indicating, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(indicating, "indicating"), useKeyOnly(inverted, "inverted"), useKeyOnly(success || this.isAutoSuccess(), "success"), useKeyOnly(warning2, "warning"), useValueAndKey(attached, "attached"), "progress", className);
    var rest = getUnhandledProps_default(Progress2, this.props);
    var ElementType = getElementType_default(Progress2, this.props);
    var percent = this.getPercent() || 0;
    return import_react121.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      "data-percent": Math.floor(percent)
    }), import_react121.default.createElement("div", {
      className: "bar",
      style: {
        width: percent + "%"
      }
    }, this.renderProgress(percent)), this.renderLabel());
  };
  return Progress2;
}(import_react121.Component);
Progress.handledProps = ["active", "as", "attached", "autoSuccess", "children", "className", "color", "content", "disabled", "error", "indicating", "inverted", "label", "percent", "precision", "progress", "size", "success", "total", "value", "warning"];
Progress.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types113.default.elementType,
  /** A progress bar can show activity. */
  active: import_prop_types113.default.bool,
  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: import_prop_types113.default.oneOf(["top", "bottom"]),
  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: import_prop_types113.default.bool,
  /** Primary content. */
  children: import_prop_types113.default.node,
  /** Additional classes. */
  className: import_prop_types113.default.string,
  /** A progress bar can have different colors. */
  color: import_prop_types113.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A progress bar be disabled. */
  disabled: import_prop_types113.default.bool,
  /** A progress bar can show a error state. */
  error: import_prop_types113.default.bool,
  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: import_prop_types113.default.bool,
  /** A progress bar can have its colors inverted. */
  inverted: import_prop_types113.default.bool,
  /** Can be set to either to display progress as percent or ratio. */
  label: customPropTypes_exports.itemShorthand,
  /** Current percent complete. */
  percent: customPropTypes_exports.every([customPropTypes_exports.disallow(["total", "value"]), import_prop_types113.default.oneOfType([import_prop_types113.default.number, import_prop_types113.default.string])]),
  /** Decimal point precision for calculated progress. */
  precision: import_prop_types113.default.number,
  /** A progress bar can contain a text value indicating current progress. */
  progress: import_prop_types113.default.oneOfType([import_prop_types113.default.bool, import_prop_types113.default.oneOf(["percent", "ratio", "value"])]),
  /** A progress bar can vary in size. */
  size: import_prop_types113.default.oneOf(without_default(SUI_exports.SIZES, "mini", "huge", "massive")),
  /** A progress bar can show a success state. */
  success: import_prop_types113.default.bool,
  /** For use with value. Together, these will calculate the percent. Mutually excludes percent. */
  total: customPropTypes_exports.every([customPropTypes_exports.demand(["value"]), customPropTypes_exports.disallow(["percent"]), import_prop_types113.default.oneOfType([import_prop_types113.default.number, import_prop_types113.default.string])]),
  /** For use with total. Together, these will calculate the percent. Mutually excludes percent. */
  value: customPropTypes_exports.every([customPropTypes_exports.disallow(["percent"]), import_prop_types113.default.oneOfType([import_prop_types113.default.number, import_prop_types113.default.string])]),
  /** A progress bar can show a warning state. */
  warning: import_prop_types113.default.bool
} : {};
var Progress_default = Progress;

// node_modules/lodash-es/times.js
var MAX_SAFE_INTEGER3 = 9007199254740991;
var MAX_ARRAY_LENGTH = 4294967295;
var nativeMin4 = Math.min;
function times(n, iteratee) {
  n = toInteger_default(n);
  if (n < 1 || n > MAX_SAFE_INTEGER3) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH, length = nativeMin4(n, MAX_ARRAY_LENGTH);
  iteratee = castFunction_default(iteratee);
  n -= MAX_ARRAY_LENGTH;
  var result = baseTimes_default(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}
var times_default = times;

// node_modules/semantic-ui-react/dist/es/modules/Rating/Rating.js
var import_prop_types115 = __toESM(require_prop_types());
var import_react123 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Rating/RatingIcon.js
var import_keyboard_key4 = __toESM(require_keyboardKey());
var import_prop_types114 = __toESM(require_prop_types());
var import_react122 = __toESM(require_react());
var RatingIcon = function(_Component) {
  _inheritsLoose(RatingIcon2, _Component);
  function RatingIcon2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    _this.handleKeyUp = function(e) {
      invoke_default(_this.props, "onKeyUp", e, _this.props);
      switch (import_keyboard_key4.default.getCode(e)) {
        case import_keyboard_key4.default.Enter:
        case import_keyboard_key4.default.Spacebar:
          e.preventDefault();
          invoke_default(_this.props, "onClick", e, _this.props);
          break;
        default:
      }
    };
    _this.handleMouseEnter = function(e) {
      invoke_default(_this.props, "onMouseEnter", e, _this.props);
    };
    return _this;
  }
  var _proto = RatingIcon2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, className = _this$props.className, selected = _this$props.selected;
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(selected, "selected"), "icon", className);
    var rest = getUnhandledProps_default(RatingIcon2, this.props);
    var ElementType = getElementType_default(RatingIcon2, this.props);
    return import_react122.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick,
      onKeyUp: this.handleKeyUp,
      onMouseEnter: this.handleMouseEnter,
      role: "radio"
    }));
  };
  return RatingIcon2;
}(import_react122.Component);
RatingIcon.handledProps = ["active", "as", "className", "index", "onClick", "onKeyUp", "onMouseEnter", "selected"];
RatingIcon.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types114.default.elementType,
  /** Indicates activity of an icon. */
  active: import_prop_types114.default.bool,
  /** Additional classes. */
  className: import_prop_types114.default.string,
  /** An index of icon inside Rating. */
  index: import_prop_types114.default.number,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types114.default.func,
  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: import_prop_types114.default.func,
  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: import_prop_types114.default.func,
  /** Indicates selection of an icon. */
  selected: import_prop_types114.default.bool
} : {};
RatingIcon.defaultProps = {
  as: "i"
};

// node_modules/semantic-ui-react/dist/es/modules/Rating/Rating.js
var Rating = function(_Component) {
  _inheritsLoose(Rating2, _Component);
  function Rating2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
    _this.handleIconClick = function(e, _ref) {
      var index = _ref.index;
      var _this$props = _this.props, clearable = _this$props.clearable, disabled = _this$props.disabled, maxRating = _this$props.maxRating, onRate = _this$props.onRate;
      var rating = _this.state.rating;
      if (disabled) return;
      var newRating = index + 1;
      if (clearable === "auto" && maxRating === 1) {
        newRating = +!rating;
      } else if (clearable === true && newRating === rating) {
        newRating = 0;
      }
      _this.setState({
        rating: newRating,
        isSelecting: false
      });
      if (onRate) onRate(e, _extends({}, _this.props, {
        rating: newRating
      }));
    };
    _this.handleIconMouseEnter = function(e, _ref2) {
      var index = _ref2.index;
      if (_this.props.disabled) return;
      _this.setState({
        selectedIndex: index,
        isSelecting: true
      });
    };
    _this.handleMouseLeave = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      invoke_default.apply(void 0, [_this.props, "onMouseLeave"].concat(args));
      if (_this.props.disabled) return;
      _this.setState({
        selectedIndex: -1,
        isSelecting: false
      });
    };
    return _this;
  }
  var _proto = Rating2.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props2 = this.props, className = _this$props2.className, disabled = _this$props2.disabled, icon = _this$props2.icon, maxRating = _this$props2.maxRating, size2 = _this$props2.size;
    var _this$state = this.state, rating = _this$state.rating, selectedIndex = _this$state.selectedIndex, isSelecting = _this$state.isSelecting;
    var classes = clsx_m_default("ui", icon, size2, useKeyOnly(disabled, "disabled"), useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, "selected"), "rating", className);
    var rest = getUnhandledProps_default(Rating2, this.props);
    var ElementType = getElementType_default(Rating2, this.props);
    return import_react123.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      role: "radiogroup",
      onMouseLeave: this.handleMouseLeave,
      tabIndex: disabled ? 0 : -1
    }), times_default(maxRating, function(i) {
      return import_react123.default.createElement(RatingIcon, {
        tabIndex: disabled ? -1 : 0,
        active: rating >= i + 1,
        "aria-checked": rating === i + 1,
        "aria-posinset": i + 1,
        "aria-setsize": maxRating,
        index: i,
        key: i,
        onClick: _this2.handleIconClick,
        onMouseEnter: _this2.handleIconMouseEnter,
        selected: selectedIndex >= i && isSelecting
      });
    }));
  };
  return Rating2;
}(ModernAutoControlledComponent);
Rating.handledProps = ["as", "className", "clearable", "defaultRating", "disabled", "icon", "maxRating", "onRate", "rating", "size"];
Rating.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types115.default.elementType,
  /** Additional classes. */
  className: import_prop_types115.default.string,
  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: import_prop_types115.default.oneOfType([import_prop_types115.default.bool, import_prop_types115.default.oneOf(["auto"])]),
  /** The initial rating value. */
  defaultRating: import_prop_types115.default.oneOfType([import_prop_types115.default.number, import_prop_types115.default.string]),
  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: import_prop_types115.default.bool,
  /** A rating can use a set of star or heart icons. */
  icon: import_prop_types115.default.oneOf(["star", "heart"]),
  /** The total number of icons. */
  maxRating: import_prop_types115.default.oneOfType([import_prop_types115.default.number, import_prop_types115.default.string]),
  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: import_prop_types115.default.func,
  /** The current number of active icons. */
  rating: import_prop_types115.default.oneOfType([import_prop_types115.default.number, import_prop_types115.default.string]),
  /** A progress bar can vary in size. */
  size: import_prop_types115.default.oneOf(without_default(SUI_exports.SIZES, "medium", "big"))
} : {};
Rating.autoControlledProps = ["rating"];
Rating.defaultProps = {
  clearable: "auto",
  maxRating: 1
};
Rating.Icon = RatingIcon;

// node_modules/lodash-es/_metaMap.js
var metaMap = WeakMap_default && new WeakMap_default();
var metaMap_default = metaMap;

// node_modules/lodash-es/_baseSetData.js
var baseSetData = !metaMap_default ? identity_default : function(func, data) {
  metaMap_default.set(func, data);
  return func;
};
var baseSetData_default = baseSetData;

// node_modules/lodash-es/_createCtor.js
function createCtor(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate_default(Ctor.prototype), result = Ctor.apply(thisBinding, args);
    return isObject_default(result) ? result : thisBinding;
  };
}
var createCtor_default = createCtor;

// node_modules/lodash-es/_createBind.js
var WRAP_BIND_FLAG = 1;
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor_default(func);
  function wrapper() {
    var fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return fn2.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
var createBind_default = createBind;

// node_modules/lodash-es/_composeArgs.js
var nativeMax6 = Math.max;
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax6(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}
var composeArgs_default = composeArgs;

// node_modules/lodash-es/_composeArgsRight.js
var nativeMax7 = Math.max;
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax7(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset2 = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset2 + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset2 + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}
var composeArgsRight_default = composeArgsRight;

// node_modules/lodash-es/_countHolders.js
function countHolders(array, placeholder) {
  var length = array.length, result = 0;
  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}
var countHolders_default = countHolders;

// node_modules/lodash-es/_baseLodash.js
function baseLodash() {
}
var baseLodash_default = baseLodash;

// node_modules/lodash-es/_LazyWrapper.js
var MAX_ARRAY_LENGTH2 = 4294967295;
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH2;
  this.__views__ = [];
}
LazyWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var LazyWrapper_default = LazyWrapper;

// node_modules/lodash-es/_getData.js
var getData = !metaMap_default ? noop_default : function(func) {
  return metaMap_default.get(func);
};
var getData_default = getData;

// node_modules/lodash-es/_realNames.js
var realNames = {};
var realNames_default = realNames;

// node_modules/lodash-es/_getFuncName.js
var objectProto19 = Object.prototype;
var hasOwnProperty15 = objectProto19.hasOwnProperty;
function getFuncName(func) {
  var result = func.name + "", array = realNames_default[result], length = hasOwnProperty15.call(realNames_default, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
var getFuncName_default = getFuncName;

// node_modules/lodash-es/_LodashWrapper.js
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var LodashWrapper_default = LodashWrapper;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_wrapperClone.js
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper_default) {
    return wrapper.clone();
  }
  var result = new LodashWrapper_default(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray_default(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var wrapperClone_default = wrapperClone;

// node_modules/lodash-es/wrapperLodash.js
var objectProto20 = Object.prototype;
var hasOwnProperty16 = objectProto20.hasOwnProperty;
function lodash(value) {
  if (isObjectLike_default(value) && !isArray_default(value) && !(value instanceof LazyWrapper_default)) {
    if (value instanceof LodashWrapper_default) {
      return value;
    }
    if (hasOwnProperty16.call(value, "__wrapped__")) {
      return wrapperClone_default(value);
    }
  }
  return new LodashWrapper_default(value);
}
lodash.prototype = baseLodash_default.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash_default = lodash;

// node_modules/lodash-es/_isLaziable.js
function isLaziable(func) {
  var funcName = getFuncName_default(func), other = wrapperLodash_default[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper_default.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData_default(other);
  return !!data && func === data[0];
}
var isLaziable_default = isLaziable;

// node_modules/lodash-es/_setData.js
var setData = shortOut_default(baseSetData_default);
var setData_default = setData;

// node_modules/lodash-es/_getWrapDetails.js
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var getWrapDetails_default = getWrapDetails;

// node_modules/lodash-es/_insertWrapDetails.js
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
var insertWrapDetails_default = insertWrapDetails;

// node_modules/lodash-es/_updateWrapDetails.js
var WRAP_BIND_FLAG2 = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;
var WRAP_ARY_FLAG = 128;
var WRAP_REARG_FLAG = 256;
var WRAP_FLIP_FLAG = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG],
  ["bind", WRAP_BIND_FLAG2],
  ["bindKey", WRAP_BIND_KEY_FLAG],
  ["curry", WRAP_CURRY_FLAG],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG],
  ["flip", WRAP_FLIP_FLAG],
  ["partial", WRAP_PARTIAL_FLAG],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
  ["rearg", WRAP_REARG_FLAG]
];
function updateWrapDetails(details, bitmask) {
  arrayEach_default(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes_default(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
var updateWrapDetails_default = updateWrapDetails;

// node_modules/lodash-es/_setWrapToString.js
function setWrapToString(wrapper, reference2, bitmask) {
  var source = reference2 + "";
  return setToString_default(wrapper, insertWrapDetails_default(source, updateWrapDetails_default(getWrapDetails_default(source), bitmask)));
}
var setWrapToString_default = setWrapToString;

// node_modules/lodash-es/_createRecurry.js
var WRAP_BIND_FLAG3 = 1;
var WRAP_BIND_KEY_FLAG2 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG2 = 8;
var WRAP_PARTIAL_FLAG2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG2 = 64;
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG2, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG2 : WRAP_PARTIAL_RIGHT_FLAG2;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG2 : WRAP_PARTIAL_FLAG2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG3 | WRAP_BIND_KEY_FLAG2);
  }
  var newData = [
    func,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary,
    arity
  ];
  var result = wrapFunc.apply(void 0, newData);
  if (isLaziable_default(func)) {
    setData_default(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString_default(result, func, bitmask);
}
var createRecurry_default = createRecurry;

// node_modules/lodash-es/_getHolder.js
function getHolder(func) {
  var object = func;
  return object.placeholder;
}
var getHolder_default = getHolder;

// node_modules/lodash-es/_reorder.js
var nativeMin5 = Math.min;
function reorder(array, indexes) {
  var arrLength = array.length, length = nativeMin5(indexes.length, arrLength), oldArray = copyArray_default(array);
  while (length--) {
    var index = indexes[length];
    array[length] = isIndex_default(index, arrLength) ? oldArray[index] : void 0;
  }
  return array;
}
var reorder_default = reorder;

// node_modules/lodash-es/_replaceHolders.js
var PLACEHOLDER = "__lodash_placeholder__";
function replaceHolders(array, placeholder) {
  var index = -1, length = array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}
var replaceHolders_default = replaceHolders;

// node_modules/lodash-es/_createHybrid.js
var WRAP_BIND_FLAG4 = 1;
var WRAP_BIND_KEY_FLAG3 = 2;
var WRAP_CURRY_FLAG3 = 8;
var WRAP_CURRY_RIGHT_FLAG2 = 16;
var WRAP_ARY_FLAG2 = 128;
var WRAP_FLIP_FLAG2 = 512;
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG2, isBind = bitmask & WRAP_BIND_FLAG4, isBindKey = bitmask & WRAP_BIND_KEY_FLAG3, isCurried = bitmask & (WRAP_CURRY_FLAG3 | WRAP_CURRY_RIGHT_FLAG2), isFlip = bitmask & WRAP_FLIP_FLAG2, Ctor = isBindKey ? void 0 : createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder_default(wrapper), holdersCount = countHolders_default(args, placeholder);
    }
    if (partials) {
      args = composeArgs_default(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight_default(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders_default(args, placeholder);
      return createRecurry_default(
        func,
        bitmask,
        createHybrid,
        wrapper.placeholder,
        thisArg,
        args,
        newHolders,
        argPos,
        ary,
        arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
    length = args.length;
    if (argPos) {
      args = reorder_default(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root_default && this instanceof wrapper) {
      fn2 = Ctor || createCtor_default(fn2);
    }
    return fn2.apply(thisBinding, args);
  }
  return wrapper;
}
var createHybrid_default = createHybrid;

// node_modules/lodash-es/_createCurry.js
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length, placeholder = getHolder_default(wrapper);
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders_default(args, placeholder);
    length -= holders.length;
    if (length < arity) {
      return createRecurry_default(
        func,
        bitmask,
        createHybrid_default,
        wrapper.placeholder,
        void 0,
        args,
        holders,
        void 0,
        void 0,
        arity - length
      );
    }
    var fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return apply_default(fn2, this, args);
  }
  return wrapper;
}
var createCurry_default = createCurry;

// node_modules/lodash-es/_createPartial.js
var WRAP_BIND_FLAG5 = 1;
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG5, Ctor = createCtor_default(func);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply_default(fn2, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var createPartial_default = createPartial;

// node_modules/lodash-es/_mergeData.js
var PLACEHOLDER2 = "__lodash_placeholder__";
var WRAP_BIND_FLAG6 = 1;
var WRAP_BIND_KEY_FLAG4 = 2;
var WRAP_CURRY_BOUND_FLAG2 = 4;
var WRAP_CURRY_FLAG4 = 8;
var WRAP_ARY_FLAG3 = 128;
var WRAP_REARG_FLAG2 = 256;
var nativeMin6 = Math.min;
function mergeData(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG6 | WRAP_BIND_KEY_FLAG4 | WRAP_ARY_FLAG3);
  var isCombo = srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_CURRY_FLAG4 || srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_REARG_FLAG2 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG3 | WRAP_REARG_FLAG2) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG4;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG6) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG6 ? 0 : WRAP_CURRY_BOUND_FLAG2;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs_default(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders_default(data[3], PLACEHOLDER2) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight_default(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders_default(data[5], PLACEHOLDER2) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG3) {
    data[8] = data[8] == null ? source[8] : nativeMin6(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var mergeData_default = mergeData;

// node_modules/lodash-es/_createWrap.js
var FUNC_ERROR_TEXT2 = "Expected a function";
var WRAP_BIND_FLAG7 = 1;
var WRAP_BIND_KEY_FLAG5 = 2;
var WRAP_CURRY_FLAG5 = 8;
var WRAP_CURRY_RIGHT_FLAG3 = 16;
var WRAP_PARTIAL_FLAG3 = 32;
var WRAP_PARTIAL_RIGHT_FLAG3 = 64;
var nativeMax8 = Math.max;
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG5;
  if (!isBindKey && typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG3 | WRAP_PARTIAL_RIGHT_FLAG3);
    partials = holders = void 0;
  }
  ary = ary === void 0 ? ary : nativeMax8(toInteger_default(ary), 0);
  arity = arity === void 0 ? arity : toInteger_default(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG3) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData_default(func);
  var newData = [
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary,
    arity
  ];
  if (data) {
    mergeData_default(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax8(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3)) {
    bitmask &= ~(WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG7) {
    var result = createBind_default(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG5 || bitmask == WRAP_CURRY_RIGHT_FLAG3) {
    result = createCurry_default(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG3 || bitmask == (WRAP_BIND_FLAG7 | WRAP_PARTIAL_FLAG3)) && !holders.length) {
    result = createPartial_default(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid_default.apply(void 0, newData);
  }
  var setter = data ? baseSetData_default : setData_default;
  return setWrapToString_default(setter(result, newData), func, bitmask);
}
var createWrap_default = createWrap;

// node_modules/lodash-es/partialRight.js
var WRAP_PARTIAL_RIGHT_FLAG4 = 64;
var partialRight = baseRest_default(function(func, partials) {
  var holders = replaceHolders_default(partials, getHolder_default(partialRight));
  return createWrap_default(func, WRAP_PARTIAL_RIGHT_FLAG4, void 0, partials, holders);
});
partialRight.placeholder = {};
var partialRight_default = partialRight;

// node_modules/semantic-ui-react/dist/es/modules/Search/Search.js
var import_keyboard_key5 = __toESM(require_keyboardKey());
var import_prop_types120 = __toESM(require_prop_types());
var import_react128 = __toESM(require_react());
var import_shallowequal4 = __toESM(require_shallowequal());

// node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategory.js
var import_prop_types117 = __toESM(require_prop_types());
var import_react125 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategoryLayout.js
var import_prop_types116 = __toESM(require_prop_types());
var import_react124 = __toESM(require_react());
function SearchCategoryLayout(props) {
  var categoryContent = props.categoryContent, resultsContent = props.resultsContent;
  return import_react124.default.createElement(import_react124.default.Fragment, null, import_react124.default.createElement("div", {
    className: "name"
  }, categoryContent), import_react124.default.createElement("div", {
    className: "results"
  }, resultsContent));
}
SearchCategoryLayout.handledProps = ["categoryContent", "resultsContent"];
SearchCategoryLayout.propTypes = true ? {
  /** The rendered category content */
  categoryContent: import_prop_types116.default.element.isRequired,
  /** The rendered results content */
  resultsContent: import_prop_types116.default.element.isRequired
} : {};
var SearchCategoryLayout_default = SearchCategoryLayout;

// node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategory.js
function SearchCategory(props) {
  var active = props.active, children = props.children, className = props.className, content = props.content, layoutRenderer = props.layoutRenderer, renderer2 = props.renderer;
  var classes = clsx_m_default(useKeyOnly(active, "active"), "category", className);
  var rest = getUnhandledProps_default(SearchCategory, props);
  var ElementType = getElementType_default(SearchCategory, props);
  var categoryContent = renderer2(props);
  var resultsContent = childrenUtils_exports.isNil(children) ? content : children;
  return import_react125.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), layoutRenderer({
    categoryContent,
    resultsContent
  }));
}
SearchCategory.handledProps = ["active", "as", "children", "className", "content", "layoutRenderer", "name", "renderer", "results"];
SearchCategory.defaultProps = {
  layoutRenderer: SearchCategoryLayout_default,
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};
SearchCategory.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types117.default.elementType,
  /** The item currently selected by keyboard shortcut. */
  active: import_prop_types117.default.bool,
  /** Primary content. */
  children: import_prop_types117.default.node,
  /** Additional classes. */
  className: import_prop_types117.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Display name. */
  name: import_prop_types117.default.string,
  /**
   * Renders the category layout contents.
   *
   * @param {object} props - The SearchCategoryLayout props object.
   * @returns {*} - Renderable category layout contents.
   */
  layoutRenderer: import_prop_types117.default.func,
  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: import_prop_types117.default.func,
  /** Array of Search.Result props. */
  results: import_prop_types117.default.array
} : {};
var SearchCategory_default = SearchCategory;

// node_modules/semantic-ui-react/dist/es/modules/Search/SearchResult.js
var import_prop_types118 = __toESM(require_prop_types());
var import_react126 = __toESM(require_react());
var defaultRenderer = function defaultRenderer2(_ref) {
  var image = _ref.image, price = _ref.price, title = _ref.title, description = _ref.description;
  return [image && import_react126.default.createElement("div", {
    key: "image",
    className: "image"
  }, createHTMLImage(image, {
    autoGenerateKey: false
  })), import_react126.default.createElement("div", {
    key: "content",
    className: "content"
  }, price && import_react126.default.createElement("div", {
    className: "price"
  }, price), title && import_react126.default.createElement("div", {
    className: "title"
  }, title), description && import_react126.default.createElement("div", {
    className: "description"
  }, description))];
};
defaultRenderer.handledProps = [];
var SearchResult = function(_Component) {
  _inheritsLoose(SearchResult2, _Component);
  function SearchResult2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };
    return _this;
  }
  var _proto = SearchResult2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, className = _this$props.className, renderer2 = _this$props.renderer;
    var classes = clsx_m_default(useKeyOnly(active, "active"), "result", className);
    var rest = getUnhandledProps_default(SearchResult2, this.props);
    var ElementType = getElementType_default(SearchResult2, this.props);
    return import_react126.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), renderer2(this.props));
  };
  return SearchResult2;
}(import_react126.Component);
SearchResult.handledProps = ["active", "as", "className", "content", "description", "id", "image", "onClick", "price", "renderer", "title"];
SearchResult.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types118.default.elementType,
  /** The item currently selected by keyboard shortcut. */
  active: import_prop_types118.default.bool,
  /** Additional classes. */
  className: import_prop_types118.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Additional text with less emphasis. */
  description: import_prop_types118.default.string,
  /** A unique identifier. */
  id: import_prop_types118.default.oneOfType([import_prop_types118.default.number, import_prop_types118.default.string]),
  /** Add an image to the item. */
  image: import_prop_types118.default.string,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types118.default.func,
  /** Customized text for price. */
  price: import_prop_types118.default.string,
  /**
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: import_prop_types118.default.func,
  /** Display title. */
  title: import_prop_types118.default.string.isRequired
} : {};
SearchResult.defaultProps = {
  renderer: defaultRenderer
};

// node_modules/semantic-ui-react/dist/es/modules/Search/SearchResults.js
var import_prop_types119 = __toESM(require_prop_types());
var import_react127 = __toESM(require_react());
function SearchResults(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("results transition", className);
  var rest = getUnhandledProps_default(SearchResults, props);
  var ElementType = getElementType_default(SearchResults, props);
  return import_react127.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SearchResults.handledProps = ["as", "children", "className", "content"];
SearchResults.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types119.default.elementType,
  /** Primary content. */
  children: import_prop_types119.default.node,
  /** Additional classes. */
  className: import_prop_types119.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var SearchResults_default = SearchResults;

// node_modules/semantic-ui-react/dist/es/modules/Search/Search.js
var overrideSearchInputProps = function overrideSearchInputProps2(predefinedProps) {
  var input = predefinedProps.input;
  if (isUndefined_default(input)) {
    return _extends({}, predefinedProps, {
      input: {
        className: "prompt"
      }
    });
  }
  if (isPlainObject_default(input)) {
    return _extends({}, predefinedProps, {
      input: _extends({}, input, {
        className: clsx_m_default(input.className, "prompt")
      })
    });
  }
  return predefinedProps;
};
var Search = function(_Component) {
  _inheritsLoose(Search2, _Component);
  function Search2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleResultSelect = function(e, result) {
      invoke_default(_this.props, "onResultSelect", e, _extends({}, _this.props, {
        result
      }));
    };
    _this.handleSelectionChange = function(e) {
      var result = _this.getSelectedResult();
      invoke_default(_this.props, "onSelectionChange", e, _extends({}, _this.props, {
        result
      }));
    };
    _this.closeOnEscape = function(e) {
      if (import_keyboard_key5.default.getCode(e) !== import_keyboard_key5.default.Escape) return;
      e.preventDefault();
      _this.close();
    };
    _this.moveSelectionOnKeyDown = function(e) {
      switch (import_keyboard_key5.default.getCode(e)) {
        case import_keyboard_key5.default.ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(e, 1);
          break;
        case import_keyboard_key5.default.ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(e, -1);
          break;
        default:
          break;
      }
    };
    _this.selectItemOnEnter = function(e) {
      if (import_keyboard_key5.default.getCode(e) !== import_keyboard_key5.default.Enter) return;
      var result = _this.getSelectedResult();
      if (!result) return;
      e.preventDefault();
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    };
    _this.closeOnDocumentClick = function(e) {
      _this.close();
    };
    _this.handleMouseDown = function(e) {
      _this.isMouseDown = true;
      invoke_default(_this.props, "onMouseDown", e, _this.props);
      eventStack_default.sub("mouseup", _this.handleDocumentMouseUp);
    };
    _this.handleDocumentMouseUp = function() {
      _this.isMouseDown = false;
      eventStack_default.unsub("mouseup", _this.handleDocumentMouseUp);
    };
    _this.handleInputClick = function(e) {
      e.nativeEvent.stopImmediatePropagation();
      _this.tryOpen();
    };
    _this.handleItemClick = function(e, _ref) {
      var id = _ref.id;
      var result = _this.getSelectedResult(id);
      e.nativeEvent.stopImmediatePropagation();
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    };
    _this.handleItemMouseDown = function(e) {
      e.preventDefault();
    };
    _this.handleFocus = function(e) {
      invoke_default(_this.props, "onFocus", e, _this.props);
      _this.setState({
        focus: true
      });
    };
    _this.handleBlur = function(e) {
      invoke_default(_this.props, "onBlur", e, _this.props);
      _this.setState({
        focus: false
      });
    };
    _this.handleSearchChange = function(e) {
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = e.target.value;
      invoke_default(_this.props, "onSearchChange", e, _extends({}, _this.props, {
        value: newQuery
      }));
      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }
      _this.setValue(newQuery);
    };
    _this.getFlattenedResults = function() {
      var _this$props = _this.props, category = _this$props.category, results = _this$props.results;
      return !category ? results : reduce_default(results, function(memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    };
    _this.getSelectedResult = function(index) {
      if (index === void 0) {
        index = _this.state.selectedIndex;
      }
      var results = _this.getFlattenedResults();
      return get_default(results, index);
    };
    _this.setValue = function(value) {
      var selectFirstResult = _this.props.selectFirstResult;
      _this.setState({
        value,
        selectedIndex: selectFirstResult ? 0 : -1
      });
    };
    _this.moveSelectionBy = function(e, offset2) {
      var selectedIndex = _this.state.selectedIndex;
      var results = _this.getFlattenedResults();
      var lastIndex = results.length - 1;
      var nextIndex = selectedIndex + offset2;
      if (nextIndex > lastIndex) nextIndex = 0;
      else if (nextIndex < 0) nextIndex = lastIndex;
      _this.setState({
        selectedIndex: nextIndex
      });
      _this.scrollSelectedItemIntoView();
      _this.handleSelectionChange(e);
    };
    _this.scrollSelectedItemIntoView = function() {
      if (!isBrowser_default()) return;
      var menu = document.querySelector(".ui.search.active.visible .results.visible");
      if (!menu) return;
      var item = menu.querySelector(".result.active");
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;
      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    };
    _this.tryOpen = function(currentValue) {
      if (currentValue === void 0) {
        currentValue = _this.state.value;
      }
      var minCharacters = _this.props.minCharacters;
      if (currentValue.length < minCharacters) return;
      _this.open();
    };
    _this.open = function() {
      _this.setState({
        open: true
      });
    };
    _this.close = function() {
      _this.setState({
        open: false
      });
    };
    _this.renderSearchInput = function(rest) {
      var _this$props2 = _this.props, icon = _this$props2.icon, input = _this$props2.input, placeholder = _this$props2.placeholder;
      var value = _this.state.value;
      return Input_default.create(input, {
        autoGenerateKey: false,
        defaultProps: _extends({}, rest, {
          autoComplete: "off",
          icon,
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          tabIndex: "0",
          value,
          placeholder
        }),
        // Nested shorthand props need special treatment to survive the shallow merge
        overrideProps: overrideSearchInputProps
      });
    };
    _this.renderNoResults = function() {
      var _this$props3 = _this.props, noResultsDescription = _this$props3.noResultsDescription, noResultsMessage = _this$props3.noResultsMessage;
      return import_react128.default.createElement("div", {
        className: "message empty"
      }, import_react128.default.createElement("div", {
        className: "header"
      }, noResultsMessage), noResultsDescription && import_react128.default.createElement("div", {
        className: "description"
      }, noResultsDescription));
    };
    _this.renderResult = function(_ref2, index, _array, offset2) {
      var childKey = _ref2.childKey, result = _objectWithoutPropertiesLoose(_ref2, ["childKey"]);
      if (offset2 === void 0) {
        offset2 = 0;
      }
      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;
      var offsetIndex = index + offset2;
      return import_react128.default.createElement(SearchResult, _extends({
        key: childKey != null ? childKey : result.id || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        onMouseDown: _this.handleItemMouseDown,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex
        // Used to lookup the result on item click
      }));
    };
    _this.renderResults = function() {
      var results = _this.props.results;
      return map_default(results, _this.renderResult);
    };
    _this.renderCategories = function() {
      var _this$props4 = _this.props, categoryLayoutRenderer = _this$props4.categoryLayoutRenderer, categoryRenderer = _this$props4.categoryRenderer, categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;
      var count = 0;
      return map_default(categories, function(_ref3) {
        var childKey = _ref3.childKey, category = _objectWithoutPropertiesLoose(_ref3, ["childKey"]);
        var categoryProps = _extends({
          key: childKey != null ? childKey : category.name,
          active: inRange_default(selectedIndex, count, count + category.results.length),
          layoutRenderer: categoryLayoutRenderer,
          renderer: categoryRenderer
        }, category);
        var renderFn = partialRight_default(_this.renderResult, count);
        count += category.results.length;
        return import_react128.default.createElement(SearchCategory_default, categoryProps, category.results.map(renderFn));
      });
    };
    _this.renderMenuContent = function() {
      var _this$props5 = _this.props, category = _this$props5.category, showNoResults = _this$props5.showNoResults, results = _this$props5.results;
      if (isEmpty_default(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }
      return category ? _this.renderCategories() : _this.renderResults();
    };
    _this.renderResultsMenu = function() {
      var open = _this.state.open;
      var resultsClasses = open ? "visible" : "";
      var menuContent = _this.renderMenuContent();
      if (!menuContent) return;
      return import_react128.default.createElement(SearchResults_default, {
        className: resultsClasses
      }, menuContent);
    };
    return _this;
  }
  Search2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(props, state) {
    if (typeof state.prevValue !== "undefined" && (0, import_shallowequal4.default)(state.prevValue, state.value)) {
      return {
        prevValue: state.value
      };
    }
    var selectedIndex = props.selectFirstResult ? 0 : -1;
    return {
      prevValue: state.value,
      selectedIndex
    };
  };
  var _proto = Search2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, import_shallowequal4.default)(nextProps, this.props) || !(0, import_shallowequal4.default)(nextState, this.state);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!prevState.focus && this.state.focus) {
      if (!this.isMouseDown) {
        this.tryOpen();
      }
      if (this.state.open) {
        eventStack_default.sub("keydown", [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    } else if (prevState.focus && !this.state.focus) {
      if (!this.isMouseDown) {
        this.close();
      }
      eventStack_default.unsub("keydown", [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    }
    if (!prevState.open && this.state.open) {
      this.open();
      eventStack_default.sub("click", this.closeOnDocumentClick);
      eventStack_default.sub("keydown", [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } else if (prevState.open && !this.state.open) {
      this.close();
      eventStack_default.unsub("click", this.closeOnDocumentClick);
      eventStack_default.unsub("keydown", [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    eventStack_default.unsub("click", this.closeOnDocumentClick);
    eventStack_default.unsub("keydown", [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
  };
  _proto.render = function render() {
    var _this$state = this.state, searchClasses = _this$state.searchClasses, focus = _this$state.focus, open = _this$state.open;
    var _this$props6 = this.props, aligned = _this$props6.aligned, category = _this$props6.category, className = _this$props6.className, fluid = _this$props6.fluid, loading = _this$props6.loading, size2 = _this$props6.size;
    var classes = clsx_m_default("ui", open && "active visible", size2, searchClasses, useKeyOnly(category, "category"), useKeyOnly(focus, "focus"), useKeyOnly(fluid, "fluid"), useKeyOnly(loading, "loading"), useValueAndKey(aligned, "aligned"), "search", className);
    var unhandled = getUnhandledProps_default(Search2, this.props);
    var ElementType = getElementType_default(Search2, this.props);
    var _partitionHTMLProps = partitionHTMLProps(unhandled, {
      htmlProps: htmlInputAttrs
    }), htmlInputProps2 = _partitionHTMLProps[0], rest = _partitionHTMLProps[1];
    return import_react128.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onMouseDown: this.handleMouseDown
    }), this.renderSearchInput(htmlInputProps2), this.renderResultsMenu());
  };
  return Search2;
}(ModernAutoControlledComponent);
Search.handledProps = ["aligned", "as", "category", "categoryLayoutRenderer", "categoryRenderer", "className", "defaultOpen", "defaultValue", "fluid", "icon", "input", "loading", "minCharacters", "noResultsDescription", "noResultsMessage", "onBlur", "onFocus", "onMouseDown", "onResultSelect", "onSearchChange", "onSelectionChange", "open", "placeholder", "resultRenderer", "results", "selectFirstResult", "showNoResults", "size", "value"];
Search.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types120.default.elementType,
  // ------------------------------------
  // Behavior
  // ------------------------------------
  /** Initial value of open. */
  defaultOpen: import_prop_types120.default.bool,
  /** Initial value. */
  defaultValue: import_prop_types120.default.string,
  /** Shorthand for Icon. */
  icon: import_prop_types120.default.oneOfType([import_prop_types120.default.node, import_prop_types120.default.object]),
  /** Minimum characters to query for results */
  minCharacters: import_prop_types120.default.number,
  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: import_prop_types120.default.node,
  /** Message to display when there are no results. */
  noResultsMessage: import_prop_types120.default.node,
  /** Controls whether or not the results menu is displayed. */
  open: import_prop_types120.default.bool,
  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: import_prop_types120.default.oneOfType([import_prop_types120.default.arrayOf(import_prop_types120.default.shape(SearchResult.propTypes)), import_prop_types120.default.shape(SearchCategory_default.propTypes)]),
  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: import_prop_types120.default.bool,
  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: import_prop_types120.default.bool,
  /** Current value of the search input. Creates a controlled component. */
  value: import_prop_types120.default.string,
  // ------------------------------------
  // Rendering
  // ------------------------------------
  /**
   * Renders the SearchCategory layout.
   *
   * @param {object} categoryContent - The Renderable SearchCategory contents.
   * @param {object} resultsContent - The Renderable SearchResult contents.
   * @returns {*} - Renderable SearchCategory layout.
   */
  categoryLayoutRenderer: import_prop_types120.default.func,
  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: import_prop_types120.default.func,
  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: import_prop_types120.default.func,
  // ------------------------------------
  // Callbacks
  // ------------------------------------
  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: import_prop_types120.default.func,
  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: import_prop_types120.default.func,
  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: import_prop_types120.default.func,
  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: import_prop_types120.default.func,
  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: import_prop_types120.default.func,
  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: import_prop_types120.default.func,
  // ------------------------------------
  // Style
  // ------------------------------------
  /** A search can have its results aligned to its left or right container edge. */
  aligned: import_prop_types120.default.string,
  /** A search can display results from remote content ordered by categories. */
  category: import_prop_types120.default.bool,
  /** Additional classes. */
  className: import_prop_types120.default.string,
  /** A search can have its results take up the width of its container. */
  fluid: import_prop_types120.default.bool,
  /** Shorthand for input element. */
  input: customPropTypes_exports.itemShorthand,
  /** A search can show a loading indicator. */
  loading: import_prop_types120.default.bool,
  /** A search can have different sizes. */
  size: import_prop_types120.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** A search can show placeholder text when empty. */
  placeholder: import_prop_types120.default.string
} : {};
Search.defaultProps = {
  icon: "search",
  input: "text",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  showNoResults: true
};
Search.autoControlledProps = ["open", "value"];
Search.Category = SearchCategory_default;
Search.Result = SearchResult;
Search.Results = SearchResults_default;

// node_modules/@fluentui/react-component-event-listener/dist/es/useEventListener.js
var React134 = __toESM(require_react());
var getWindowEvent = function getWindowEvent2(target) {
  if (target) {
    var _ownerDocument$defaul, _ownerDocument, _ownerDocument$defaul2;
    if (typeof target.window === "object" && target.window === target) {
      return target.event;
    }
    return (_ownerDocument$defaul = (_ownerDocument = target.ownerDocument) == null ? void 0 : (_ownerDocument$defaul2 = _ownerDocument.defaultView) == null ? void 0 : _ownerDocument$defaul2.event) != null ? _ownerDocument$defaul : void 0;
  }
  return void 0;
};
var isActionSupported = function isActionSupported2(element, method) {
  return element ? !!element[method] : false;
};
var useEventListener = function useEventListener2(options) {
  var capture = options.capture, listener = options.listener, type = options.type, target = options.target, targetRef = options.targetRef;
  var latestListener = React134.useRef(listener);
  latestListener.current = listener;
  var eventHandler = React134.useCallback(function(event) {
    return latestListener.current(event);
  }, []);
  var timeoutId = React134.useRef(void 0);
  if (true) {
    React134.useEffect(function() {
      if (typeof target !== "undefined" && typeof targetRef !== "undefined") {
        throw new Error("`target` and `targetRef` props are mutually exclusive, please use one of them.");
      }
      if (typeof target === "undefined" && typeof targetRef === "undefined") {
        throw new Error("`target` and `targetRef` props are `undefined`, it' required to use one of them.");
      }
    }, [target, targetRef]);
  }
  React134.useEffect(function() {
    var element = typeof targetRef === "undefined" ? target : targetRef.current;
    var currentEvent = getWindowEvent(window);
    var conditionalHandler = function conditionalHandler2(event) {
      if (event === currentEvent) {
        currentEvent = void 0;
        return;
      }
      eventHandler(event);
    };
    if (isActionSupported(element, "addEventListener")) {
      element.addEventListener(type, conditionalHandler, capture);
    } else if (true) {
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    }
    timeoutId.current = setTimeout(function() {
      currentEvent = void 0;
    }, 1);
    return function() {
      clearTimeout(timeoutId.current);
      currentEvent = void 0;
      if (isActionSupported(element, "removeEventListener")) {
        element.removeEventListener(type, conditionalHandler, capture);
      } else if (true) {
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
      }
    };
  }, [capture, eventHandler, target, targetRef, type]);
};

// node_modules/@fluentui/react-component-event-listener/dist/es/EventListener.js
var EventListener = function() {
  function EventListener2(props) {
    useEventListener(props);
    return null;
  }
  EventListener2.defaultProps = {
    capture: false
  };
  return EventListener2;
}();

// node_modules/@fluentui/react-component-event-listener/dist/es/index.js
var documentRef = {
  current: typeof document === "undefined" ? null : document
};

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js
var import_prop_types123 = __toESM(require_prop_types());
var import_react131 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js
var import_prop_types121 = __toESM(require_prop_types());
var import_react129 = __toESM(require_react());
function SidebarPushable(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default("pushable", className);
  var rest = getUnhandledProps_default(SidebarPushable, props);
  var ElementType = getElementType_default(SidebarPushable, props);
  return import_react129.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SidebarPushable.handledProps = ["as", "children", "className", "content"];
SidebarPushable.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types121.default.elementType,
  /** Primary content. */
  children: import_prop_types121.default.node,
  /** Additional classes. */
  className: import_prop_types121.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var SidebarPushable_default = SidebarPushable;

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js
var import_prop_types122 = __toESM(require_prop_types());
var import_react130 = __toESM(require_react());
function SidebarPusher(props) {
  var className = props.className, dimmed = props.dimmed, children = props.children, content = props.content;
  var classes = clsx_m_default("pusher", useKeyOnly(dimmed, "dimmed"), className);
  var rest = getUnhandledProps_default(SidebarPusher, props);
  var ElementType = getElementType_default(SidebarPusher, props);
  return import_react130.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types122.default.elementType,
  /** Primary content. */
  children: import_prop_types122.default.node,
  /** Additional classes. */
  className: import_prop_types122.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Controls whether or not the dim is displayed. */
  dimmed: import_prop_types122.default.bool
} : {};
var SidebarPusher_default = SidebarPusher;

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js
var Sidebar = function(_Component) {
  _inheritsLoose(Sidebar2, _Component);
  function Sidebar2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.ref = (0, import_react131.createRef)();
    _this.handleAnimationStart = function() {
      var visible = _this.props.visible;
      var callback = visible ? "onVisible" : "onHide";
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(_this.handleAnimationEnd, Sidebar2.animationDuration);
      if (_this.skipNextCallback) {
        _this.skipNextCallback = false;
        return;
      }
      invoke_default(_this.props, callback, null, _this.props);
    };
    _this.handleAnimationEnd = function() {
      var visible = _this.props.visible;
      var callback = visible ? "onShow" : "onHidden";
      _this.setState({
        animationTick: 0
      });
      invoke_default(_this.props, callback, null, _this.props);
    };
    _this.handleDocumentClick = function(e) {
      if (!doesNodeContainClick_default(_this.ref.current, e)) {
        _this.skipNextCallback = true;
        invoke_default(_this.props, "onHide", e, _extends({}, _this.props, {
          visible: false
        }));
      }
    };
    _this.state = {
      animationTick: 0,
      visible: props.visible
    };
    return _this;
  }
  Sidebar2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var tickIncrement = !!props.visible === !!state.visible ? 0 : 1;
    return {
      animationTick: state.animationTick + tickIncrement,
      visible: props.visible
    };
  };
  var _proto = Sidebar2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.animationTick > prevState.animationTick) {
      this.handleAnimationStart();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.animationTimer);
  };
  _proto.render = function render() {
    var _this$props = this.props, animation = _this$props.animation, className = _this$props.className, children = _this$props.children, content = _this$props.content, direction = _this$props.direction, target = _this$props.target, visible = _this$props.visible, width = _this$props.width;
    var animationTick = this.state.animationTick;
    var classes = clsx_m_default("ui", animation, direction, width, useKeyOnly(animationTick > 0, "animating"), useKeyOnly(visible, "visible"), "sidebar", className);
    var rest = getUnhandledProps_default(Sidebar2, this.props);
    var ElementType = getElementType_default(Sidebar2, this.props);
    var targetProp = isRefObject(target) ? {
      targetRef: target
    } : {
      target
    };
    return import_react131.default.createElement(import_react131.default.Fragment, null, import_react131.default.createElement(Ref, {
      innerRef: this.ref
    }, import_react131.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children)), visible && import_react131.default.createElement(EventListener, _extends({
      listener: this.handleDocumentClick,
      type: "click"
    }, targetProp)));
  };
  return Sidebar2;
}(import_react131.Component);
Sidebar.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
Sidebar.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types123.default.elementType,
  /** Animation style. */
  animation: import_prop_types123.default.oneOf(["overlay", "push", "scale down", "uncover", "slide out", "slide along"]),
  /** Primary content. */
  children: import_prop_types123.default.node,
  /** Additional classes. */
  className: import_prop_types123.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Direction the sidebar should appear on. */
  direction: import_prop_types123.default.oneOf(["top", "right", "bottom", "left"]),
  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: import_prop_types123.default.func,
  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: import_prop_types123.default.func,
  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: import_prop_types123.default.func,
  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: import_prop_types123.default.func,
  /** A sidebar can handle clicks on the passed element. */
  target: import_prop_types123.default.oneOfType([customPropTypes_exports.domNode, customPropTypes_exports.refObject]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: import_prop_types123.default.bool,
  /** Sidebar width. */
  width: import_prop_types123.default.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
Sidebar.defaultProps = {
  direction: "left",
  target: documentRef,
  visible: false
};
Sidebar.animationDuration = 500;
Sidebar.autoControlledProps = ["visible"];
Sidebar.Pushable = SidebarPushable_default;
Sidebar.Pusher = SidebarPusher_default;
var Sidebar_default = Sidebar;

// node_modules/semantic-ui-react/dist/es/modules/Sticky/Sticky.js
var import_prop_types124 = __toESM(require_prop_types());
var import_react132 = __toESM(require_react());
var Sticky = function(_Component) {
  _inheritsLoose(Sticky2, _Component);
  function Sticky2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: true,
      sticky: false
    };
    _this.stickyRef = (0, import_react132.createRef)();
    _this.triggerRef = (0, import_react132.createRef)();
    _this.addListeners = function(scrollContext) {
      var scrollContextNode = isRefObject(scrollContext) ? scrollContext.current : scrollContext;
      if (scrollContextNode) {
        eventStack_default.sub("resize", _this.handleUpdate, {
          target: scrollContextNode
        });
        eventStack_default.sub("scroll", _this.handleUpdate, {
          target: scrollContextNode
        });
      }
    };
    _this.removeListeners = function(scrollContext) {
      var scrollContextNode = isRefObject(scrollContext) ? scrollContext.current : scrollContext;
      if (scrollContextNode) {
        eventStack_default.unsub("resize", _this.handleUpdate, {
          target: scrollContextNode
        });
        eventStack_default.unsub("scroll", _this.handleUpdate, {
          target: scrollContextNode
        });
      }
    };
    _this.update = function(e) {
      var pushing = _this.state.pushing;
      _this.ticking = false;
      _this.assignRects();
      if (pushing) {
        if (_this.didReachStartingPoint()) return _this.stickToContextTop(e);
        if (_this.didTouchScreenBottom()) return _this.stickToScreenBottom(e);
        return _this.stickToContextBottom(e);
      }
      if (_this.isOversized()) {
        if (_this.contextRect.top > 0) return _this.stickToContextTop(e);
        if (_this.contextRect.bottom < window.innerHeight) return _this.stickToContextBottom(e);
      }
      if (_this.didTouchScreenTop()) {
        if (_this.didReachContextBottom()) return _this.stickToContextBottom(e);
        return _this.stickToScreenTop(e);
      }
      return _this.stickToContextTop(e);
    };
    _this.handleUpdate = function(e) {
      if (!_this.ticking) {
        _this.ticking = true;
        _this.frameId = requestAnimationFrame(function() {
          return _this.update(e);
        });
      }
    };
    _this.assignRects = function() {
      var context = _this.props.context;
      var contextNode = isRefObject(context) ? context.current : context || document.body;
      _this.triggerRect = _this.triggerRef.current.getBoundingClientRect();
      _this.contextRect = contextNode.getBoundingClientRect();
      _this.stickyRect = _this.stickyRef.current.getBoundingClientRect();
    };
    _this.didReachContextBottom = function() {
      var offset2 = _this.props.offset;
      return _this.stickyRect.height + offset2 >= _this.contextRect.bottom;
    };
    _this.didReachStartingPoint = function() {
      return _this.stickyRect.top <= _this.triggerRect.top;
    };
    _this.didTouchScreenTop = function() {
      return _this.triggerRect.top < _this.props.offset;
    };
    _this.didTouchScreenBottom = function() {
      var bottomOffset = _this.props.bottomOffset;
      return _this.contextRect.bottom + bottomOffset > window.innerHeight;
    };
    _this.isOversized = function() {
      return _this.stickyRect.height > window.innerHeight;
    };
    _this.pushing = function(pushing) {
      var possible = _this.props.pushing;
      if (possible) _this.setState({
        pushing
      });
    };
    _this.stick = function(e, bound) {
      _this.setState({
        bound,
        sticky: true
      });
      invoke_default(_this.props, "onStick", e, _this.props);
    };
    _this.unstick = function(e, bound) {
      _this.setState({
        bound,
        sticky: false
      });
      invoke_default(_this.props, "onUnstick", e, _this.props);
    };
    _this.stickToContextBottom = function(e) {
      invoke_default(_this.props, "onBottom", e, _this.props);
      _this.stick(e, true);
      _this.pushing(true);
    };
    _this.stickToContextTop = function(e) {
      invoke_default(_this.props, "onTop", e, _this.props);
      _this.unstick(e, false);
      _this.pushing(false);
    };
    _this.stickToScreenBottom = function(e) {
      var bottom2 = _this.props.bottomOffset;
      _this.stick(e, false);
      _this.setState({
        bottom: bottom2,
        top: null
      });
    };
    _this.stickToScreenTop = function(e) {
      var top2 = _this.props.offset;
      _this.stick(e, false);
      _this.setState({
        top: top2,
        bottom: null
      });
    };
    return _this;
  }
  var _proto = Sticky2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (!isBrowser_default()) return;
    var active = this.state.active;
    if (active) {
      this.handleUpdate();
      this.addListeners(this.props.scrollContext);
    }
  };
  Sticky2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.active !== props.active && !props.active) {
      return {
        active: props.active,
        sticky: false
      };
    }
    return {
      active: props.active
    };
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.active === this.state.active) {
      if (prevProps.scrollContext !== this.props.scrollContext) {
        this.removeListeners(prevProps.scrollContext);
        this.addListeners(this.props.scrollContext);
      }
      return;
    }
    if (this.state.active) {
      this.handleUpdate();
      this.addListeners(this.props.scrollContext);
      return;
    }
    this.removeListeners(prevProps.scrollContext);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!isBrowser_default()) return;
    var active = this.state.active;
    if (active) {
      this.removeListeners(this.props.scrollContext);
      cancelAnimationFrame(this.frameId);
    }
  };
  _proto.computeStyle = function computeStyle() {
    var styleElement = this.props.styleElement;
    var _this$state = this.state, bottom2 = _this$state.bottom, bound = _this$state.bound, sticky = _this$state.sticky, top2 = _this$state.top;
    if (!sticky) return styleElement;
    return _extends({
      bottom: bound ? 0 : bottom2,
      top: bound ? void 0 : top2,
      width: this.triggerRect.width
    }, styleElement);
  };
  _proto.render = function render() {
    var _this$props = this.props, children = _this$props.children, className = _this$props.className;
    var _this$state2 = this.state, bottom2 = _this$state2.bottom, bound = _this$state2.bound, sticky = _this$state2.sticky;
    var rest = getUnhandledProps_default(Sticky2, this.props);
    var ElementType = getElementType_default(Sticky2, this.props);
    var containerClasses = clsx_m_default(sticky && "ui", sticky && "stuck-container", sticky && (bound ? "bound-container" : "fixed-container"), className);
    var elementClasses = clsx_m_default("ui", sticky && (bound ? "bound bottom" : "fixed"), sticky && !bound && (bottom2 === null ? "top" : "bottom"), "sticky");
    var triggerStyles = sticky && this.stickyRect ? {
      height: this.stickyRect.height
    } : {};
    return import_react132.default.createElement(ElementType, _extends({}, rest, {
      className: containerClasses
    }), import_react132.default.createElement("div", {
      ref: this.triggerRef,
      style: triggerStyles
    }), import_react132.default.createElement("div", {
      className: elementClasses,
      ref: this.stickyRef,
      style: this.computeStyle()
    }, children));
  };
  return Sticky2;
}(import_react132.Component);
Sticky.handledProps = ["active", "as", "bottomOffset", "children", "className", "context", "offset", "onBottom", "onStick", "onTop", "onUnstick", "pushing", "scrollContext", "styleElement"];
Sticky.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types124.default.elementType,
  /** A Sticky can be active. */
  active: import_prop_types124.default.bool,
  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset: import_prop_types124.default.number,
  /** Primary content. */
  children: import_prop_types124.default.node,
  /** Additional classes. */
  className: import_prop_types124.default.string,
  /** Context which sticky element should stick to. */
  context: import_prop_types124.default.oneOfType([customPropTypes_exports.domNode, customPropTypes_exports.refObject]),
  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset: import_prop_types124.default.number,
  /**
   * Callback when element is bound to bottom of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBottom: import_prop_types124.default.func,
  /**
   * Callback when element is fixed to page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onStick: import_prop_types124.default.func,
  /**
   * Callback when element is bound to top of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onTop: import_prop_types124.default.func,
  /**
   * Callback when element is unfixed from page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onUnstick: import_prop_types124.default.func,
  /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
  pushing: import_prop_types124.default.bool,
  /** Context which sticky should attach onscroll events. */
  scrollContext: import_prop_types124.default.oneOfType([customPropTypes_exports.domNode, customPropTypes_exports.refObject]),
  /** Custom style for sticky element. */
  styleElement: import_prop_types124.default.object
} : {};
Sticky.defaultProps = {
  active: true,
  bottomOffset: 0,
  offset: 0,
  scrollContext: isBrowser_default() ? window : null
};

// node_modules/semantic-ui-react/dist/es/modules/Tab/Tab.js
var import_prop_types126 = __toESM(require_prop_types());
var import_react134 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Tab/TabPane.js
var import_prop_types125 = __toESM(require_prop_types());
var import_react133 = __toESM(require_react());
function TabPane(props) {
  var active = props.active, children = props.children, className = props.className, content = props.content, loading = props.loading;
  var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(loading, "loading"), "tab", className);
  var rest = getUnhandledProps_default(TabPane, props);
  var ElementType = getElementType_default(TabPane, props);
  var calculatedDefaultProps = {};
  if (ElementType === Segment_default) {
    calculatedDefaultProps.attached = "bottom";
  }
  return import_react133.default.createElement(ElementType, _extends({}, calculatedDefaultProps, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
TabPane.handledProps = ["active", "as", "children", "className", "content", "loading"];
TabPane.defaultProps = {
  as: Segment_default,
  active: true
};
TabPane.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types125.default.elementType,
  /** A tab pane can be active. */
  active: import_prop_types125.default.bool,
  /** Primary content. */
  children: import_prop_types125.default.node,
  /** Additional classes. */
  className: import_prop_types125.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A Tab.Pane can display a loading indicator. */
  loading: import_prop_types125.default.bool
} : {};
TabPane.create = createShorthandFactory(TabPane, function(content) {
  return {
    content
  };
});
var TabPane_default = TabPane;

// node_modules/semantic-ui-react/dist/es/modules/Tab/Tab.js
var Tab = function(_Component) {
  _inheritsLoose(Tab2, _Component);
  function Tab2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleItemClick = function(e, _ref) {
      var index = _ref.index;
      invoke_default(_this.props, "onTabChange", e, _extends({}, _this.props, {
        activeIndex: index
      }));
      _this.setState({
        activeIndex: index
      });
    };
    return _this;
  }
  var _proto = Tab2.prototype;
  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      activeIndex: 0
    };
  };
  _proto.renderItems = function renderItems() {
    var _this$props = this.props, panes = _this$props.panes, renderActiveOnly = _this$props.renderActiveOnly;
    var activeIndex = this.state.activeIndex;
    if (renderActiveOnly) return invoke_default(get_default(panes, "[" + activeIndex + "]"), "render", this.props);
    return map_default(panes, function(_ref2, index) {
      var pane = _ref2.pane;
      return TabPane_default.create(pane, {
        overrideProps: {
          active: index === activeIndex
        }
      });
    });
  };
  _proto.renderMenu = function renderMenu() {
    var _this$props2 = this.props, menu = _this$props2.menu, panes = _this$props2.panes, menuPosition = _this$props2.menuPosition;
    var activeIndex = this.state.activeIndex;
    if (menu.tabular === true && menuPosition === "right") {
      menu.tabular = "right";
    }
    return Menu_default.create(menu, {
      autoGenerateKey: false,
      overrideProps: {
        items: map_default(panes, "menuItem"),
        onItemClick: this.handleItemClick,
        activeIndex
      }
    });
  };
  _proto.renderVertical = function renderVertical(menu) {
    var _this$props3 = this.props, grid = _this$props3.grid, menuPosition = _this$props3.menuPosition;
    var paneWidth = grid.paneWidth, tabWidth = grid.tabWidth, gridProps = _objectWithoutPropertiesLoose(grid, ["paneWidth", "tabWidth"]);
    var position = menuPosition || menu.props.tabular === "right" && "right" || "left";
    return import_react134.default.createElement(Grid_default, gridProps, position === "left" && GridColumn_default.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }), GridColumn_default.create({
      width: paneWidth,
      children: this.renderItems(),
      stretched: true
    }, {
      autoGenerateKey: false
    }), position === "right" && GridColumn_default.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }));
  };
  _proto.render = function render() {
    var menu = this.renderMenu();
    var rest = getUnhandledProps_default(Tab2, this.props);
    var ElementType = getElementType_default(Tab2, this.props);
    if (menu.props.vertical) {
      return import_react134.default.createElement(ElementType, rest, this.renderVertical(menu));
    }
    return import_react134.default.createElement(ElementType, rest, menu.props.attached !== "bottom" && menu, this.renderItems(), menu.props.attached === "bottom" && menu);
  };
  return Tab2;
}(ModernAutoControlledComponent);
Tab.handledProps = ["activeIndex", "as", "defaultActiveIndex", "grid", "menu", "menuPosition", "onTabChange", "panes", "renderActiveOnly"];
Tab.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types126.default.elementType,
  /** The initial activeIndex. */
  defaultActiveIndex: import_prop_types126.default.oneOfType([import_prop_types126.default.number, import_prop_types126.default.string]),
  /** Index of the currently active tab. */
  activeIndex: import_prop_types126.default.oneOfType([import_prop_types126.default.number, import_prop_types126.default.string]),
  /**
   * Shorthand props for the Menu.
   * tabular, if true, will derive final value from `menuPosition`, otherwise set 'left' or 'right' explicitly.
   */
  menu: import_prop_types126.default.object,
  /** Align vertical menu */
  menuPosition: import_prop_types126.default.oneOf(["left", "right"]),
  /** Shorthand props for the Grid. Only applicable to vertical menus. */
  grid: import_prop_types126.default.object,
  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: import_prop_types126.default.func,
  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * { menuItem: 'Home', render: () => <Tab.Pane /> }
   * or
   * { menuItem: 'Home', pane: 'Welcome' }
   */
  panes: import_prop_types126.default.arrayOf(import_prop_types126.default.shape({
    menuItem: customPropTypes_exports.itemShorthand,
    pane: customPropTypes_exports.itemShorthand,
    render: import_prop_types126.default.func
  })),
  /** A Tab can render only active pane. */
  renderActiveOnly: import_prop_types126.default.bool
} : {};
Tab.autoControlledProps = ["activeIndex"];
Tab.defaultProps = {
  grid: {
    paneWidth: 12,
    tabWidth: 4
  },
  menu: {
    attached: true,
    tabular: true
  },
  renderActiveOnly: true
};
Tab.Pane = TabPane_default;
var Tab_default = Tab;

// node_modules/semantic-ui-react/dist/es/views/Advertisement/Advertisement.js
var import_prop_types127 = __toESM(require_prop_types());
var import_react135 = __toESM(require_react());
function Advertisement(props) {
  var centered = props.centered, children = props.children, className = props.className, content = props.content, test = props.test, unit = props.unit;
  var classes = clsx_m_default("ui", unit, useKeyOnly(centered, "centered"), useKeyOnly(test, "test"), "ad", className);
  var rest = getUnhandledProps_default(Advertisement, props);
  var ElementType = getElementType_default(Advertisement, props);
  return import_react135.default.createElement(ElementType, _extends({}, rest, {
    className: classes,
    "data-text": test
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Advertisement.handledProps = ["as", "centered", "children", "className", "content", "test", "unit"];
Advertisement.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types127.default.elementType,
  /** Center the advertisement. */
  centered: import_prop_types127.default.bool,
  /** Primary content. */
  children: import_prop_types127.default.node,
  /** Additional classes. */
  className: import_prop_types127.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Text to be displayed on the advertisement. */
  test: import_prop_types127.default.oneOfType([import_prop_types127.default.bool, import_prop_types127.default.number, import_prop_types127.default.string]),
  /** Varies the size of the advertisement. */
  unit: import_prop_types127.default.oneOf(["medium rectangle", "large rectangle", "vertical rectangle", "small rectangle", "mobile banner", "banner", "vertical banner", "top banner", "half banner", "button", "square button", "small button", "skyscraper", "wide skyscraper", "leaderboard", "large leaderboard", "mobile leaderboard", "billboard", "panorama", "netboard", "half page", "square", "small square"]).isRequired
} : {};
var Advertisement_default = Advertisement;

// node_modules/semantic-ui-react/dist/es/views/Card/Card.js
var import_prop_types133 = __toESM(require_prop_types());
var import_react141 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js
var import_prop_types131 = __toESM(require_prop_types());
var import_react139 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js
var import_prop_types128 = __toESM(require_prop_types());
var import_react136 = __toESM(require_react());
function CardDescription(props) {
  var children = props.children, className = props.className, content = props.content, textAlign = props.textAlign;
  var classes = clsx_m_default(useTextAlignProp(textAlign), "description", className);
  var rest = getUnhandledProps_default(CardDescription, props);
  var ElementType = getElementType_default(CardDescription, props);
  return import_react136.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CardDescription.handledProps = ["as", "children", "className", "content", "textAlign"];
CardDescription.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types128.default.elementType,
  /** Primary content. */
  children: import_prop_types128.default.node,
  /** Additional classes. */
  className: import_prop_types128.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A card content can adjust its text alignment. */
  textAlign: import_prop_types128.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified"))
} : {};
var CardDescription_default = CardDescription;

// node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js
var import_prop_types129 = __toESM(require_prop_types());
var import_react137 = __toESM(require_react());
function CardHeader(props) {
  var children = props.children, className = props.className, content = props.content, textAlign = props.textAlign;
  var classes = clsx_m_default(useTextAlignProp(textAlign), "header", className);
  var rest = getUnhandledProps_default(CardHeader, props);
  var ElementType = getElementType_default(CardHeader, props);
  return import_react137.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CardHeader.handledProps = ["as", "children", "className", "content", "textAlign"];
CardHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types129.default.elementType,
  /** Primary content. */
  children: import_prop_types129.default.node,
  /** Additional classes. */
  className: import_prop_types129.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A card header can adjust its text alignment. */
  textAlign: import_prop_types129.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified"))
} : {};
var CardHeader_default = CardHeader;

// node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js
var import_prop_types130 = __toESM(require_prop_types());
var import_react138 = __toESM(require_react());
function CardMeta(props) {
  var children = props.children, className = props.className, content = props.content, textAlign = props.textAlign;
  var classes = clsx_m_default(useTextAlignProp(textAlign), "meta", className);
  var rest = getUnhandledProps_default(CardMeta, props);
  var ElementType = getElementType_default(CardMeta, props);
  return import_react138.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CardMeta.handledProps = ["as", "children", "className", "content", "textAlign"];
CardMeta.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types130.default.elementType,
  /** Primary content. */
  children: import_prop_types130.default.node,
  /** Additional classes. */
  className: import_prop_types130.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A card meta can adjust its text alignment. */
  textAlign: import_prop_types130.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified"))
} : {};
var CardMeta_default = CardMeta;

// node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js
function CardContent(props) {
  var children = props.children, className = props.className, content = props.content, description = props.description, extra = props.extra, header = props.header, meta = props.meta, textAlign = props.textAlign;
  var classes = clsx_m_default(useKeyOnly(extra, "extra"), useTextAlignProp(textAlign), "content", className);
  var rest = getUnhandledProps_default(CardContent, props);
  var ElementType = getElementType_default(CardContent, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react139.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react139.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react139.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(CardHeader_default, function(val) {
    return {
      content: val
    };
  }, header, {
    autoGenerateKey: false
  }), createShorthand(CardMeta_default, function(val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }), createShorthand(CardDescription_default, function(val) {
    return {
      content: val
    };
  }, description, {
    autoGenerateKey: false
  }));
}
CardContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
CardContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types131.default.elementType,
  /** Primary content. */
  children: import_prop_types131.default.node,
  /** Additional classes. */
  className: import_prop_types131.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for CardDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: import_prop_types131.default.bool,
  /** Shorthand for CardHeader. */
  header: customPropTypes_exports.itemShorthand,
  /** Shorthand for CardMeta. */
  meta: customPropTypes_exports.itemShorthand,
  /** A card content can adjust its text alignment. */
  textAlign: import_prop_types131.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified"))
} : {};
var CardContent_default = CardContent;

// node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js
var import_prop_types132 = __toESM(require_prop_types());
var import_react140 = __toESM(require_react());
function CardGroup(props) {
  var centered = props.centered, children = props.children, className = props.className, content = props.content, doubling = props.doubling, items = props.items, itemsPerRow = props.itemsPerRow, stackable = props.stackable, textAlign = props.textAlign;
  var classes = clsx_m_default("ui", useKeyOnly(centered, "centered"), useKeyOnly(doubling, "doubling"), useKeyOnly(stackable, "stackable"), useTextAlignProp(textAlign), useWidthProp(itemsPerRow), "cards", className);
  var rest = getUnhandledProps_default(CardGroup, props);
  var ElementType = getElementType_default(CardGroup, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react140.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react140.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  var itemsJSX = map_default(items, function(item) {
    var _item$key;
    var key = (_item$key = item.key) != null ? _item$key : [item.header, item.description].join("-");
    return import_react140.default.createElement(Card, _extends({
      key
    }, item));
  });
  return import_react140.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), itemsJSX);
}
CardGroup.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"];
CardGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types132.default.elementType,
  /** A group of cards can center itself inside its container. */
  centered: import_prop_types132.default.bool,
  /** Primary content. */
  children: import_prop_types132.default.node,
  /** Additional classes. */
  className: import_prop_types132.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A group of cards can double its column width for mobile. */
  doubling: import_prop_types132.default.bool,
  /** Shorthand array of props for Card. */
  items: customPropTypes_exports.collectionShorthand,
  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: import_prop_types132.default.oneOf(SUI_exports.WIDTHS),
  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: import_prop_types132.default.bool,
  /** A card group can adjust its text alignment. */
  textAlign: import_prop_types132.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified"))
} : {};
var CardGroup_default = CardGroup;

// node_modules/semantic-ui-react/dist/es/views/Card/Card.js
var Card = function(_Component) {
  _inheritsLoose(Card2, _Component);
  function Card2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };
    return _this;
  }
  var _proto = Card2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, centered = _this$props.centered, children = _this$props.children, className = _this$props.className, color = _this$props.color, content = _this$props.content, description = _this$props.description, extra = _this$props.extra, fluid = _this$props.fluid, header = _this$props.header, href = _this$props.href, image = _this$props.image, link = _this$props.link, meta = _this$props.meta, onClick = _this$props.onClick, raised = _this$props.raised;
    var classes = clsx_m_default("ui", color, useKeyOnly(centered, "centered"), useKeyOnly(fluid, "fluid"), useKeyOnly(link, "link"), useKeyOnly(raised, "raised"), "card", className);
    var rest = getUnhandledProps_default(Card2, this.props);
    var ElementType = getElementType_default(Card2, this.props, function() {
      if (onClick) return "a";
    });
    if (!childrenUtils_exports.isNil(children)) {
      return import_react141.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href,
        onClick: this.handleClick
      }), children);
    }
    if (!childrenUtils_exports.isNil(content)) {
      return import_react141.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href,
        onClick: this.handleClick
      }), content);
    }
    return import_react141.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href,
      onClick: this.handleClick
    }), Image_default.create(image, {
      autoGenerateKey: false,
      defaultProps: {
        ui: false,
        wrapped: true
      }
    }), (description || header || meta) && import_react141.default.createElement(CardContent_default, {
      description,
      header,
      meta
    }), extra && import_react141.default.createElement(CardContent_default, {
      extra: true
    }, extra));
  };
  return Card2;
}(import_react141.Component);
Card.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
Card.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types133.default.elementType,
  /** A Card can center itself inside its container. */
  centered: import_prop_types133.default.bool,
  /** Primary content. */
  children: import_prop_types133.default.node,
  /** Additional classes. */
  className: import_prop_types133.default.string,
  /** A Card can be formatted to display different colors. */
  color: import_prop_types133.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for CardDescription. */
  description: customPropTypes_exports.itemShorthand,
  /** Shorthand for primary content of CardContent. */
  extra: customPropTypes_exports.contentShorthand,
  /** A Card can be formatted to take up the width of its container. */
  fluid: import_prop_types133.default.bool,
  /** Shorthand for CardHeader. */
  header: customPropTypes_exports.itemShorthand,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: import_prop_types133.default.string,
  /** A card can contain an Image component. */
  image: customPropTypes_exports.itemShorthand,
  /** A card can be formatted to link to other content. */
  link: import_prop_types133.default.bool,
  /** Shorthand for CardMeta. */
  meta: customPropTypes_exports.itemShorthand,
  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types133.default.func,
  /** A Card can be formatted to raise above the page. */
  raised: import_prop_types133.default.bool
} : {};
Card.Content = CardContent_default;
Card.Description = CardDescription_default;
Card.Group = CardGroup_default;
Card.Header = CardHeader_default;
Card.Meta = CardMeta_default;

// node_modules/semantic-ui-react/dist/es/views/Comment/Comment.js
var import_prop_types142 = __toESM(require_prop_types());
var import_react150 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentAction.js
var import_prop_types134 = __toESM(require_prop_types());
var import_react142 = __toESM(require_react());
function CommentAction(props) {
  var active = props.active, className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default(useKeyOnly(active, "active"), className);
  var rest = getUnhandledProps_default(CommentAction, props);
  var ElementType = getElementType_default(CommentAction, props);
  return import_react142.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentAction.handledProps = ["active", "as", "children", "className", "content"];
CommentAction.defaultProps = {
  as: "a"
};
CommentAction.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types134.default.elementType,
  /** Style as the currently active action. */
  active: import_prop_types134.default.bool,
  /** Primary content. */
  children: import_prop_types134.default.node,
  /** Additional classes. */
  className: import_prop_types134.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentAction_default = CommentAction;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentActions.js
var import_prop_types135 = __toESM(require_prop_types());
var import_react143 = __toESM(require_react());
function CommentActions(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default("actions", className);
  var rest = getUnhandledProps_default(CommentActions, props);
  var ElementType = getElementType_default(CommentActions, props);
  return import_react143.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentActions.handledProps = ["as", "children", "className", "content"];
CommentActions.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types135.default.elementType,
  /** Primary content. */
  children: import_prop_types135.default.node,
  /** Additional classes. */
  className: import_prop_types135.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentActions_default = CommentActions;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentAuthor.js
var import_prop_types136 = __toESM(require_prop_types());
var import_react144 = __toESM(require_react());
function CommentAuthor(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default("author", className);
  var rest = getUnhandledProps_default(CommentAuthor, props);
  var ElementType = getElementType_default(CommentAuthor, props);
  return import_react144.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentAuthor.handledProps = ["as", "children", "className", "content"];
CommentAuthor.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types136.default.elementType,
  /** Primary content. */
  children: import_prop_types136.default.node,
  /** Additional classes. */
  className: import_prop_types136.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentAuthor_default = CommentAuthor;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentAvatar.js
var import_prop_types137 = __toESM(require_prop_types());
var import_react145 = __toESM(require_react());
function CommentAvatar(props) {
  var className = props.className, src = props.src;
  var classes = clsx_m_default("avatar", className);
  var rest = getUnhandledProps_default(CommentAvatar, props);
  var _partitionHTMLProps = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  }), imageProps = _partitionHTMLProps[0], rootProps = _partitionHTMLProps[1];
  var ElementType = getElementType_default(CommentAvatar, props);
  return import_react145.default.createElement(ElementType, _extends({}, rootProps, {
    className: classes
  }), createHTMLImage(src, {
    autoGenerateKey: false,
    defaultProps: imageProps
  }));
}
CommentAvatar.handledProps = ["as", "className", "src"];
CommentAvatar.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types137.default.elementType,
  /** Additional classes. */
  className: import_prop_types137.default.string,
  /** Specifies the URL of the image. */
  src: import_prop_types137.default.string
} : {};
var CommentAvatar_default = CommentAvatar;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentContent.js
var import_prop_types138 = __toESM(require_prop_types());
var import_react146 = __toESM(require_react());
function CommentContent(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default(className, "content");
  var rest = getUnhandledProps_default(CommentContent, props);
  var ElementType = getElementType_default(CommentContent, props);
  return import_react146.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentContent.handledProps = ["as", "children", "className", "content"];
CommentContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types138.default.elementType,
  /** Primary content. */
  children: import_prop_types138.default.node,
  /** Additional classes. */
  className: import_prop_types138.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentContent_default = CommentContent;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentGroup.js
var import_prop_types139 = __toESM(require_prop_types());
var import_react147 = __toESM(require_react());
function CommentGroup(props) {
  var className = props.className, children = props.children, collapsed = props.collapsed, content = props.content, minimal = props.minimal, size2 = props.size, threaded = props.threaded;
  var classes = clsx_m_default("ui", size2, useKeyOnly(collapsed, "collapsed"), useKeyOnly(minimal, "minimal"), useKeyOnly(threaded, "threaded"), "comments", className);
  var rest = getUnhandledProps_default(CommentGroup, props);
  var ElementType = getElementType_default(CommentGroup, props);
  return import_react147.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentGroup.handledProps = ["as", "children", "className", "collapsed", "content", "minimal", "size", "threaded"];
CommentGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types139.default.elementType,
  /** Primary content. */
  children: import_prop_types139.default.node,
  /** Additional classes. */
  className: import_prop_types139.default.string,
  /** Comments can be collapsed, or hidden from view. */
  collapsed: import_prop_types139.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: import_prop_types139.default.bool,
  /** Comments can have different sizes. */
  size: import_prop_types139.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: import_prop_types139.default.bool
} : {};
var CommentGroup_default = CommentGroup;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentMetadata.js
var import_prop_types140 = __toESM(require_prop_types());
var import_react148 = __toESM(require_react());
function CommentMetadata(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default("metadata", className);
  var rest = getUnhandledProps_default(CommentMetadata, props);
  var ElementType = getElementType_default(CommentMetadata, props);
  return import_react148.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentMetadata.handledProps = ["as", "children", "className", "content"];
CommentMetadata.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types140.default.elementType,
  /** Primary content. */
  children: import_prop_types140.default.node,
  /** Additional classes. */
  className: import_prop_types140.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentMetadata_default = CommentMetadata;

// node_modules/semantic-ui-react/dist/es/views/Comment/CommentText.js
var import_prop_types141 = __toESM(require_prop_types());
var import_react149 = __toESM(require_react());
function CommentText(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default(className, "text");
  var rest = getUnhandledProps_default(CommentText, props);
  var ElementType = getElementType_default(CommentText, props);
  return import_react149.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
CommentText.handledProps = ["as", "children", "className", "content"];
CommentText.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types141.default.elementType,
  /** Primary content. */
  children: import_prop_types141.default.node,
  /** Additional classes. */
  className: import_prop_types141.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var CommentText_default = CommentText;

// node_modules/semantic-ui-react/dist/es/views/Comment/Comment.js
function Comment(props) {
  var className = props.className, children = props.children, collapsed = props.collapsed, content = props.content;
  var classes = clsx_m_default(useKeyOnly(collapsed, "collapsed"), "comment", className);
  var rest = getUnhandledProps_default(Comment, props);
  var ElementType = getElementType_default(Comment, props);
  return import_react150.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Comment.handledProps = ["as", "children", "className", "collapsed", "content"];
Comment.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types142.default.elementType,
  /** Primary content. */
  children: import_prop_types142.default.node,
  /** Additional classes. */
  className: import_prop_types142.default.string,
  /** Comment can be collapsed, or hidden from view. */
  collapsed: import_prop_types142.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
Comment.Author = CommentAuthor_default;
Comment.Action = CommentAction_default;
Comment.Actions = CommentActions_default;
Comment.Avatar = CommentAvatar_default;
Comment.Content = CommentContent_default;
Comment.Group = CommentGroup_default;
Comment.Metadata = CommentMetadata_default;
Comment.Text = CommentText_default;
var Comment_default = Comment;

// node_modules/semantic-ui-react/dist/es/views/Feed/Feed.js
var import_prop_types152 = __toESM(require_prop_types());
var import_react160 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedContent.js
var import_prop_types149 = __toESM(require_prop_types());
var import_react157 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedDate.js
var import_prop_types143 = __toESM(require_prop_types());
var import_react151 = __toESM(require_react());
function FeedDate(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("date", className);
  var rest = getUnhandledProps_default(FeedDate, props);
  var ElementType = getElementType_default(FeedDate, props);
  return import_react151.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
FeedDate.handledProps = ["as", "children", "className", "content"];
FeedDate.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types143.default.elementType,
  /** Primary content. */
  children: import_prop_types143.default.node,
  /** Additional classes. */
  className: import_prop_types143.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var FeedDate_default = FeedDate;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedExtra.js
var import_prop_types144 = __toESM(require_prop_types());
var import_react152 = __toESM(require_react());
function FeedExtra(props) {
  var children = props.children, className = props.className, content = props.content, images = props.images, text = props.text;
  var classes = clsx_m_default(useKeyOnly(images, "images"), useKeyOnly(content || text, "text"), "extra", className);
  var rest = getUnhandledProps_default(FeedExtra, props);
  var ElementType = getElementType_default(FeedExtra, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react152.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var imageElements = map_default(images, function(image, index) {
    var key = [index, image].join("-");
    return createHTMLImage(image, {
      key
    });
  });
  return import_react152.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, imageElements);
}
FeedExtra.handledProps = ["as", "children", "className", "content", "images", "text"];
FeedExtra.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types144.default.elementType,
  /** Primary content. */
  children: import_prop_types144.default.node,
  /** Additional classes. */
  className: import_prop_types144.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** An event can contain additional information like a set of images. */
  images: customPropTypes_exports.every([customPropTypes_exports.disallow(["text"]), import_prop_types144.default.oneOfType([import_prop_types144.default.bool, customPropTypes_exports.collectionShorthand])]),
  /** An event can contain additional text information. */
  text: import_prop_types144.default.bool
} : {};
var FeedExtra_default = FeedExtra;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedMeta.js
var import_prop_types146 = __toESM(require_prop_types());
var import_react154 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedLike.js
var import_prop_types145 = __toESM(require_prop_types());
var import_react153 = __toESM(require_react());
function FeedLike(props) {
  var children = props.children, className = props.className, content = props.content, icon = props.icon;
  var classes = clsx_m_default("like", className);
  var rest = getUnhandledProps_default(FeedLike, props);
  var ElementType = getElementType_default(FeedLike, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react153.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react153.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon_default.create(icon, {
    autoGenerateKey: false
  }), content);
}
FeedLike.handledProps = ["as", "children", "className", "content", "icon"];
FeedLike.defaultProps = {
  as: "a"
};
FeedLike.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types145.default.elementType,
  /** Primary content. */
  children: import_prop_types145.default.node,
  /** Additional classes. */
  className: import_prop_types145.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for icon. Mutually exclusive with children. */
  icon: customPropTypes_exports.itemShorthand
} : {};
var FeedLike_default = FeedLike;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedMeta.js
function FeedMeta(props) {
  var children = props.children, className = props.className, content = props.content, like = props.like;
  var classes = clsx_m_default("meta", className);
  var rest = getUnhandledProps_default(FeedMeta, props);
  var ElementType = getElementType_default(FeedMeta, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react154.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react154.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedLike_default, function(val) {
    return {
      content: val
    };
  }, like, {
    autoGenerateKey: false
  }), content);
}
FeedMeta.handledProps = ["as", "children", "className", "content", "like"];
FeedMeta.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types146.default.elementType,
  /** Primary content. */
  children: import_prop_types146.default.node,
  /** Additional classes. */
  className: import_prop_types146.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for FeedLike. */
  like: customPropTypes_exports.itemShorthand
} : {};
var FeedMeta_default = FeedMeta;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedSummary.js
var import_prop_types148 = __toESM(require_prop_types());
var import_react156 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedUser.js
var import_prop_types147 = __toESM(require_prop_types());
var import_react155 = __toESM(require_react());
function FeedUser(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("user", className);
  var rest = getUnhandledProps_default(FeedUser, props);
  var ElementType = getElementType_default(FeedUser, props);
  return import_react155.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
FeedUser.handledProps = ["as", "children", "className", "content"];
FeedUser.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types147.default.elementType,
  /** Primary content. */
  children: import_prop_types147.default.node,
  /** Additional classes. */
  className: import_prop_types147.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
FeedUser.defaultProps = {
  as: "a"
};
var FeedUser_default = FeedUser;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedSummary.js
function FeedSummary(props) {
  var children = props.children, className = props.className, content = props.content, date = props.date, user = props.user;
  var classes = clsx_m_default("summary", className);
  var rest = getUnhandledProps_default(FeedSummary, props);
  var ElementType = getElementType_default(FeedSummary, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react156.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react156.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedUser_default, function(val) {
    return {
      content: val
    };
  }, user, {
    autoGenerateKey: false
  }), content && " ", content, content && " ", createShorthand(FeedDate_default, function(val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }));
}
FeedSummary.handledProps = ["as", "children", "className", "content", "date", "user"];
FeedSummary.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types148.default.elementType,
  /** Primary content. */
  children: import_prop_types148.default.node,
  /** Additional classes. */
  className: import_prop_types148.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for FeedDate. */
  date: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedUser. */
  user: customPropTypes_exports.itemShorthand
} : {};
var FeedSummary_default = FeedSummary;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedContent.js
function FeedContent(props) {
  var children = props.children, className = props.className, content = props.content, extraImages = props.extraImages, extraText = props.extraText, date = props.date, meta = props.meta, summary = props.summary;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(FeedContent, props);
  var ElementType = getElementType_default(FeedContent, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react157.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react157.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedDate_default, function(val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }), createShorthand(FeedSummary_default, function(val) {
    return {
      content: val
    };
  }, summary, {
    autoGenerateKey: false
  }), content, createShorthand(FeedExtra_default, function(val) {
    return {
      text: true,
      content: val
    };
  }, extraText, {
    autoGenerateKey: false
  }), createShorthand(FeedExtra_default, function(val) {
    return {
      images: val
    };
  }, extraImages, {
    autoGenerateKey: false
  }), createShorthand(FeedMeta_default, function(val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }));
}
FeedContent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "meta", "summary"];
FeedContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types149.default.elementType,
  /** Primary content. */
  children: import_prop_types149.default.node,
  /** Additional classes. */
  className: import_prop_types149.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** An event can contain a date. */
  date: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedExtra with images. */
  extraImages: FeedExtra_default.propTypes.images,
  /** Shorthand for FeedExtra with text. */
  extraText: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedMeta. */
  meta: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedSummary. */
  summary: customPropTypes_exports.itemShorthand
} : {};
var FeedContent_default = FeedContent;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedEvent.js
var import_prop_types151 = __toESM(require_prop_types());
var import_react159 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedLabel.js
var import_prop_types150 = __toESM(require_prop_types());
var import_react158 = __toESM(require_react());
function FeedLabel(props) {
  var children = props.children, className = props.className, content = props.content, icon = props.icon, image = props.image;
  var classes = clsx_m_default("label", className);
  var rest = getUnhandledProps_default(FeedLabel, props);
  var ElementType = getElementType_default(FeedLabel, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react158.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react158.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, Icon_default.create(icon, {
    autoGenerateKey: false
  }), createHTMLImage(image));
}
FeedLabel.handledProps = ["as", "children", "className", "content", "icon", "image"];
FeedLabel.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types150.default.elementType,
  /** Primary content. */
  children: import_prop_types150.default.node,
  /** Additional classes. */
  className: import_prop_types150.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** An event can contain icon label. */
  icon: customPropTypes_exports.itemShorthand,
  /** An event can contain image label. */
  image: customPropTypes_exports.itemShorthand
} : {};
var FeedLabel_default = FeedLabel;

// node_modules/semantic-ui-react/dist/es/views/Feed/FeedEvent.js
function FeedEvent(props) {
  var content = props.content, children = props.children, className = props.className, date = props.date, extraImages = props.extraImages, extraText = props.extraText, image = props.image, icon = props.icon, meta = props.meta, summary = props.summary;
  var classes = clsx_m_default("event", className);
  var rest = getUnhandledProps_default(FeedEvent, props);
  var ElementType = getElementType_default(FeedEvent, props);
  var hasContentProp = content || date || extraImages || extraText || meta || summary;
  var contentProps = {
    content,
    date,
    extraImages,
    extraText,
    meta,
    summary
  };
  return import_react159.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedLabel_default, function(val) {
    return {
      icon: val
    };
  }, icon, {
    autoGenerateKey: false
  }), createShorthand(FeedLabel_default, function(val) {
    return {
      image: val
    };
  }, image, {
    autoGenerateKey: false
  }), hasContentProp && import_react159.default.createElement(FeedContent_default, contentProps), children);
}
FeedEvent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "icon", "image", "meta", "summary"];
FeedEvent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types151.default.elementType,
  /** Primary content. */
  children: import_prop_types151.default.node,
  /** Additional classes. */
  className: import_prop_types151.default.string,
  /** Shorthand for FeedContent. */
  content: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedDate. */
  date: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedExtra with images. */
  extraImages: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedExtra with content. */
  extraText: customPropTypes_exports.itemShorthand,
  /** An event can contain icon label. */
  icon: customPropTypes_exports.itemShorthand,
  /** An event can contain image label. */
  image: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedMeta. */
  meta: customPropTypes_exports.itemShorthand,
  /** Shorthand for FeedSummary. */
  summary: customPropTypes_exports.itemShorthand
} : {};
var FeedEvent_default = FeedEvent;

// node_modules/semantic-ui-react/dist/es/views/Feed/Feed.js
function Feed(props) {
  var children = props.children, className = props.className, events = props.events, size2 = props.size;
  var classes = clsx_m_default("ui", size2, "feed", className);
  var rest = getUnhandledProps_default(Feed, props);
  var ElementType = getElementType_default(Feed, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react160.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var eventElements = map_default(events, function(eventProps) {
    var childKey = eventProps.childKey, date = eventProps.date, meta = eventProps.meta, summary = eventProps.summary, eventData = _objectWithoutPropertiesLoose(eventProps, ["childKey", "date", "meta", "summary"]);
    var finalKey = childKey != null ? childKey : [date, meta, summary].join("-");
    return import_react160.default.createElement(FeedEvent_default, _extends({
      date,
      key: finalKey,
      meta,
      summary
    }, eventData));
  });
  return import_react160.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), eventElements);
}
Feed.handledProps = ["as", "children", "className", "events", "size"];
Feed.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types152.default.elementType,
  /** Primary content. */
  children: import_prop_types152.default.node,
  /** Additional classes. */
  className: import_prop_types152.default.string,
  /** Shorthand array of props for FeedEvent. */
  events: customPropTypes_exports.collectionShorthand,
  /** A feed can have different sizes. */
  size: import_prop_types152.default.oneOf(without_default(SUI_exports.SIZES, "mini", "tiny", "medium", "big", "huge", "massive"))
} : {};
Feed.Content = FeedContent_default;
Feed.Date = FeedDate_default;
Feed.Event = FeedEvent_default;
Feed.Extra = FeedExtra_default;
Feed.Label = FeedLabel_default;
Feed.Like = FeedLike_default;
Feed.Meta = FeedMeta_default;
Feed.Summary = FeedSummary_default;
Feed.User = FeedUser_default;
var Feed_default = Feed;

// node_modules/semantic-ui-react/dist/es/views/Item/Item.js
var import_prop_types159 = __toESM(require_prop_types());
var import_react168 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Item/ItemContent.js
var import_prop_types157 = __toESM(require_prop_types());
var import_react165 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Item/ItemHeader.js
var import_prop_types153 = __toESM(require_prop_types());
var import_react161 = __toESM(require_react());
function ItemHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(ItemHeader, props);
  var ElementType = getElementType_default(ItemHeader, props);
  return import_react161.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ItemHeader.handledProps = ["as", "children", "className", "content"];
ItemHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types153.default.elementType,
  /** Primary content. */
  children: import_prop_types153.default.node,
  /** Additional classes. */
  className: import_prop_types153.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ItemHeader.create = createShorthandFactory(ItemHeader, function(content) {
  return {
    content
  };
});
var ItemHeader_default = ItemHeader;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemDescription.js
var import_prop_types154 = __toESM(require_prop_types());
var import_react162 = __toESM(require_react());
function ItemDescription(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("description", className);
  var rest = getUnhandledProps_default(ItemDescription, props);
  var ElementType = getElementType_default(ItemDescription, props);
  return import_react162.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ItemDescription.handledProps = ["as", "children", "className", "content"];
ItemDescription.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types154.default.elementType,
  /** Primary content. */
  children: import_prop_types154.default.node,
  /** Additional classes. */
  className: import_prop_types154.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ItemDescription.create = createShorthandFactory(ItemDescription, function(content) {
  return {
    content
  };
});
var ItemDescription_default = ItemDescription;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemExtra.js
var import_prop_types155 = __toESM(require_prop_types());
var import_react163 = __toESM(require_react());
function ItemExtra(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("extra", className);
  var rest = getUnhandledProps_default(ItemExtra, props);
  var ElementType = getElementType_default(ItemExtra, props);
  return import_react163.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ItemExtra.handledProps = ["as", "children", "className", "content"];
ItemExtra.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types155.default.elementType,
  /** Primary content. */
  children: import_prop_types155.default.node,
  /** Additional classes. */
  className: import_prop_types155.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ItemExtra.create = createShorthandFactory(ItemExtra, function(content) {
  return {
    content
  };
});
var ItemExtra_default = ItemExtra;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemMeta.js
var import_prop_types156 = __toESM(require_prop_types());
var import_react164 = __toESM(require_react());
function ItemMeta(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("meta", className);
  var rest = getUnhandledProps_default(ItemMeta, props);
  var ElementType = getElementType_default(ItemMeta, props);
  return import_react164.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ItemMeta.handledProps = ["as", "children", "className", "content"];
ItemMeta.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types156.default.elementType,
  /** Primary content. */
  children: import_prop_types156.default.node,
  /** Additional classes. */
  className: import_prop_types156.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
ItemMeta.create = createShorthandFactory(ItemMeta, function(content) {
  return {
    content
  };
});
var ItemMeta_default = ItemMeta;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemContent.js
function ItemContent(props) {
  var children = props.children, className = props.className, content = props.content, description = props.description, extra = props.extra, header = props.header, meta = props.meta, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default(useVerticalAlignProp(verticalAlign), "content", className);
  var rest = getUnhandledProps_default(ItemContent, props);
  var ElementType = getElementType_default(ItemContent, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react165.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react165.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ItemHeader_default.create(header, {
    autoGenerateKey: false
  }), ItemMeta_default.create(meta, {
    autoGenerateKey: false
  }), ItemDescription_default.create(description, {
    autoGenerateKey: false
  }), ItemExtra_default.create(extra, {
    autoGenerateKey: false
  }), content);
}
ItemContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
ItemContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types157.default.elementType,
  /** Primary content. */
  children: import_prop_types157.default.node,
  /** Additional classes. */
  className: import_prop_types157.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for ItemDescription component. */
  description: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemExtra component. */
  extra: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemHeader component. */
  header: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemMeta component. */
  meta: customPropTypes_exports.itemShorthand,
  /** Content can specify its vertical alignment. */
  verticalAlign: import_prop_types157.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
var ItemContent_default = ItemContent;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemGroup.js
var import_prop_types158 = __toESM(require_prop_types());
var import_react166 = __toESM(require_react());
function ItemGroup(props) {
  var children = props.children, className = props.className, content = props.content, divided = props.divided, items = props.items, link = props.link, relaxed = props.relaxed, unstackable = props.unstackable;
  var classes = clsx_m_default("ui", useKeyOnly(divided, "divided"), useKeyOnly(link, "link"), useKeyOnly(unstackable, "unstackable"), useKeyOrValueAndKey(relaxed, "relaxed"), "items", className);
  var rest = getUnhandledProps_default(ItemGroup, props);
  var ElementType = getElementType_default(ItemGroup, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react166.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react166.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  var itemsJSX = map_default(items, function(item) {
    var childKey = item.childKey, itemProps = _objectWithoutPropertiesLoose(item, ["childKey"]);
    var finalKey = childKey != null ? childKey : [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join("-");
    return import_react166.default.createElement(Item_default, _extends({}, itemProps, {
      key: finalKey
    }));
  });
  return import_react166.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), itemsJSX);
}
ItemGroup.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
ItemGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types158.default.elementType,
  /** Primary content. */
  children: import_prop_types158.default.node,
  /** Additional classes. */
  className: import_prop_types158.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Items can be divided to better distinguish between grouped content. */
  divided: import_prop_types158.default.bool,
  /** Shorthand array of props for Item. */
  items: customPropTypes_exports.collectionShorthand,
  /** An item can be formatted so that the entire contents link to another page. */
  link: import_prop_types158.default.bool,
  /** A group of items can relax its padding to provide more negative space. */
  relaxed: import_prop_types158.default.oneOfType([import_prop_types158.default.bool, import_prop_types158.default.oneOf(["very"])]),
  /** Prevent items from stacking on mobile. */
  unstackable: import_prop_types158.default.bool
} : {};
var ItemGroup_default = ItemGroup;

// node_modules/semantic-ui-react/dist/es/views/Item/ItemImage.js
var import_react167 = __toESM(require_react());
function ItemImage(props) {
  var size2 = props.size;
  var rest = getUnhandledProps_default(ItemImage, props);
  return import_react167.default.createElement(Image_default, _extends({}, rest, {
    size: size2,
    ui: !!size2,
    wrapped: true
  }));
}
ItemImage.handledProps = ["size"];
ItemImage.propTypes = true ? {
  /** An image may appear at different sizes. */
  size: Image_default.propTypes.size
} : {};
ItemImage.create = createShorthandFactory(ItemImage, function(src) {
  return {
    src
  };
});
var ItemImage_default = ItemImage;

// node_modules/semantic-ui-react/dist/es/views/Item/Item.js
function Item(props) {
  var children = props.children, className = props.className, content = props.content, description = props.description, extra = props.extra, header = props.header, image = props.image, meta = props.meta;
  var classes = clsx_m_default("item", className);
  var rest = getUnhandledProps_default(Item, props);
  var ElementType = getElementType_default(Item, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react168.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  return import_react168.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ItemImage_default.create(image, {
    autoGenerateKey: false
  }), import_react168.default.createElement(ItemContent_default, {
    content,
    description,
    extra,
    header,
    meta
  }));
}
Item.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
Item.Content = ItemContent_default;
Item.Description = ItemDescription_default;
Item.Extra = ItemExtra_default;
Item.Group = ItemGroup_default;
Item.Header = ItemHeader_default;
Item.Image = ItemImage_default;
Item.Meta = ItemMeta_default;
Item.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types159.default.elementType,
  /** Primary content. */
  children: import_prop_types159.default.node,
  /** Additional classes. */
  className: import_prop_types159.default.string,
  /** Shorthand for ItemContent component. */
  content: customPropTypes_exports.contentShorthand,
  /** Shorthand for ItemDescription component. */
  description: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemExtra component. */
  extra: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemHeader component. */
  header: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemImage component. */
  image: customPropTypes_exports.itemShorthand,
  /** Shorthand for ItemMeta component. */
  meta: customPropTypes_exports.itemShorthand
} : {};
var Item_default = Item;

// node_modules/semantic-ui-react/dist/es/views/Statistic/Statistic.js
var import_prop_types163 = __toESM(require_prop_types());
var import_react172 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticGroup.js
var import_prop_types160 = __toESM(require_prop_types());
var import_react169 = __toESM(require_react());
function StatisticGroup(props) {
  var children = props.children, className = props.className, color = props.color, content = props.content, horizontal = props.horizontal, inverted = props.inverted, items = props.items, size2 = props.size, widths = props.widths;
  var classes = clsx_m_default("ui", color, size2, useKeyOnly(horizontal, "horizontal"), useKeyOnly(inverted, "inverted"), useWidthProp(widths), "statistics", className);
  var rest = getUnhandledProps_default(StatisticGroup, props);
  var ElementType = getElementType_default(StatisticGroup, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react169.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react169.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react169.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), map_default(items, function(item) {
    return Statistic_default.create(item);
  }));
}
StatisticGroup.handledProps = ["as", "children", "className", "color", "content", "horizontal", "inverted", "items", "size", "widths"];
StatisticGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types160.default.elementType,
  /** Primary content. */
  children: import_prop_types160.default.node,
  /** Additional classes. */
  className: import_prop_types160.default.string,
  /** A statistic group can be formatted to be different colors. */
  color: import_prop_types160.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A statistic group can present its measurement horizontally. */
  horizontal: import_prop_types160.default.bool,
  /** A statistic group can be formatted to fit on a dark background. */
  inverted: import_prop_types160.default.bool,
  /** Array of props for Statistic. */
  items: customPropTypes_exports.collectionShorthand,
  /** A statistic group can vary in size. */
  size: import_prop_types160.default.oneOf(without_default(SUI_exports.SIZES, "big", "massive", "medium")),
  /** A statistic group can have its items divided evenly. */
  widths: import_prop_types160.default.oneOf(SUI_exports.WIDTHS)
} : {};
var StatisticGroup_default = StatisticGroup;

// node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticLabel.js
var import_prop_types161 = __toESM(require_prop_types());
var import_react170 = __toESM(require_react());
function StatisticLabel(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("label", className);
  var rest = getUnhandledProps_default(StatisticLabel, props);
  var ElementType = getElementType_default(StatisticLabel, props);
  return import_react170.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
StatisticLabel.handledProps = ["as", "children", "className", "content"];
StatisticLabel.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types161.default.elementType,
  /** Primary content. */
  children: import_prop_types161.default.node,
  /** Additional classes. */
  className: import_prop_types161.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
StatisticLabel.create = createShorthandFactory(StatisticLabel, function(content) {
  return {
    content
  };
});
var StatisticLabel_default = StatisticLabel;

// node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticValue.js
var import_prop_types162 = __toESM(require_prop_types());
var import_react171 = __toESM(require_react());
function StatisticValue(props) {
  var children = props.children, className = props.className, content = props.content, text = props.text;
  var classes = clsx_m_default(useKeyOnly(text, "text"), "value", className);
  var rest = getUnhandledProps_default(StatisticValue, props);
  var ElementType = getElementType_default(StatisticValue, props);
  return import_react171.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
StatisticValue.handledProps = ["as", "children", "className", "content", "text"];
StatisticValue.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types162.default.elementType,
  /** Primary content. */
  children: import_prop_types162.default.node,
  /** Additional classes. */
  className: import_prop_types162.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Format the value with smaller font size to fit nicely beside number values. */
  text: import_prop_types162.default.bool
} : {};
StatisticValue.create = createShorthandFactory(StatisticValue, function(content) {
  return {
    content
  };
});
var StatisticValue_default = StatisticValue;

// node_modules/semantic-ui-react/dist/es/views/Statistic/Statistic.js
function Statistic(props) {
  var children = props.children, className = props.className, color = props.color, content = props.content, floated = props.floated, horizontal = props.horizontal, inverted = props.inverted, label = props.label, size2 = props.size, text = props.text, value = props.value;
  var classes = clsx_m_default("ui", color, size2, useValueAndKey(floated, "floated"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(inverted, "inverted"), "statistic", className);
  var rest = getUnhandledProps_default(Statistic, props);
  var ElementType = getElementType_default(Statistic, props);
  if (!childrenUtils_exports.isNil(children)) {
    return import_react172.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return import_react172.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  return import_react172.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), StatisticValue_default.create(value, {
    defaultProps: {
      text
    },
    autoGenerateKey: false
  }), StatisticLabel_default.create(label, {
    autoGenerateKey: false
  }));
}
Statistic.handledProps = ["as", "children", "className", "color", "content", "floated", "horizontal", "inverted", "label", "size", "text", "value"];
Statistic.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types163.default.elementType,
  /** Primary content. */
  children: import_prop_types163.default.node,
  /** Additional classes. */
  className: import_prop_types163.default.string,
  /** A statistic can be formatted to be different colors. */
  color: import_prop_types163.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A statistic can sit to the left or right of other content. */
  floated: import_prop_types163.default.oneOf(SUI_exports.FLOATS),
  /** A statistic can present its measurement horizontally. */
  horizontal: import_prop_types163.default.bool,
  /** A statistic can be formatted to fit on a dark background. */
  inverted: import_prop_types163.default.bool,
  /** Label content of the Statistic. */
  label: customPropTypes_exports.contentShorthand,
  /** A statistic can vary in size. */
  size: import_prop_types163.default.oneOf(without_default(SUI_exports.SIZES, "big", "massive", "medium")),
  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: import_prop_types163.default.bool,
  /** Value content of the Statistic. */
  value: customPropTypes_exports.contentShorthand
} : {};
Statistic.Group = StatisticGroup_default;
Statistic.Label = StatisticLabel_default;
Statistic.Value = StatisticValue_default;
Statistic.create = createShorthandFactory(Statistic, function(content) {
  return {
    content
  };
});
var Statistic_default = Statistic;
export {
  Accordion_default as Accordion,
  AccordionAccordion,
  AccordionContent_default as AccordionContent,
  AccordionPanel_default as AccordionPanel,
  AccordionTitle,
  Advertisement_default as Advertisement,
  Breadcrumb_default as Breadcrumb,
  BreadcrumbDivider_default as BreadcrumbDivider,
  BreadcrumbSection,
  Button_default as Button,
  ButtonContent_default as ButtonContent,
  ButtonGroup_default as ButtonGroup,
  ButtonOr_default as ButtonOr,
  Card,
  CardContent_default as CardContent,
  CardDescription_default as CardDescription,
  CardGroup_default as CardGroup,
  CardHeader_default as CardHeader,
  CardMeta_default as CardMeta,
  Checkbox,
  Comment_default as Comment,
  CommentAction_default as CommentAction,
  CommentActions_default as CommentActions,
  CommentAuthor_default as CommentAuthor,
  CommentAvatar_default as CommentAvatar,
  CommentContent_default as CommentContent,
  CommentGroup_default as CommentGroup,
  CommentMetadata_default as CommentMetadata,
  CommentText_default as CommentText,
  Confirm_default as Confirm,
  Container_default as Container,
  Dimmer,
  DimmerDimmable_default as DimmerDimmable,
  DimmerInner,
  Divider_default as Divider,
  Dropdown,
  DropdownDivider_default as DropdownDivider,
  DropdownHeader_default as DropdownHeader,
  DropdownItem_default as DropdownItem,
  DropdownMenu_default as DropdownMenu,
  DropdownSearchInput_default as DropdownSearchInput,
  DropdownText_default as DropdownText,
  Embed,
  Feed_default as Feed,
  FeedContent_default as FeedContent,
  FeedDate_default as FeedDate,
  FeedEvent_default as FeedEvent,
  FeedExtra_default as FeedExtra,
  FeedLabel_default as FeedLabel,
  FeedLike_default as FeedLike,
  FeedMeta_default as FeedMeta,
  FeedSummary_default as FeedSummary,
  FeedUser_default as FeedUser,
  Flag_default as Flag,
  Form_default as Form,
  FormButton_default as FormButton,
  FormCheckbox_default as FormCheckbox,
  FormDropdown_default as FormDropdown,
  FormField_default as FormField,
  FormGroup_default as FormGroup,
  FormInput_default as FormInput,
  FormRadio_default as FormRadio,
  FormSelect_default as FormSelect,
  FormTextArea_default as FormTextArea,
  Grid_default as Grid,
  GridColumn_default as GridColumn,
  GridRow_default as GridRow,
  Header_default as Header,
  HeaderContent_default as HeaderContent,
  HeaderSubheader_default as HeaderSubheader,
  Icon_default as Icon,
  IconGroup_default as IconGroup,
  Image_default as Image,
  ImageGroup_default as ImageGroup,
  Input_default as Input,
  Item_default as Item,
  ItemContent_default as ItemContent,
  ItemDescription_default as ItemDescription,
  ItemExtra_default as ItemExtra,
  ItemGroup_default as ItemGroup,
  ItemHeader_default as ItemHeader,
  ItemImage_default as ItemImage,
  ItemMeta_default as ItemMeta,
  Label,
  LabelDetail_default as LabelDetail,
  LabelGroup_default as LabelGroup,
  List_default as List,
  ListContent_default as ListContent,
  ListDescription_default as ListDescription,
  ListHeader_default as ListHeader,
  ListIcon_default as ListIcon,
  ListItem_default as ListItem,
  ListList_default as ListList,
  Loader_default as Loader,
  Menu_default as Menu,
  MenuHeader_default as MenuHeader,
  MenuItem,
  MenuMenu_default as MenuMenu,
  Message,
  MessageContent_default as MessageContent,
  MessageHeader_default as MessageHeader,
  MessageItem_default as MessageItem,
  MessageList_default as MessageList,
  Modal_default as Modal,
  ModalActions,
  ModalContent_default as ModalContent,
  ModalDescription_default as ModalDescription,
  ModalDimmer_default as ModalDimmer,
  ModalHeader_default as ModalHeader,
  Pagination,
  PaginationItem_default as PaginationItem,
  Placeholder_default as Placeholder,
  PlaceholderHeader_default as PlaceholderHeader,
  PlaceholderImage_default as PlaceholderImage,
  PlaceholderLine_default as PlaceholderLine,
  PlaceholderParagraph_default as PlaceholderParagraph,
  Popup,
  PopupContent,
  PopupHeader,
  Portal_default as Portal,
  PortalInner_default as PortalInner,
  Progress_default as Progress,
  Radio_default as Radio,
  Rail_default as Rail,
  Rating,
  RatingIcon,
  Ref,
  Reveal_default as Reveal,
  RevealContent_default as RevealContent,
  Search,
  SearchCategory_default as SearchCategory,
  SearchResult,
  SearchResults_default as SearchResults,
  Segment_default as Segment,
  SegmentGroup_default as SegmentGroup,
  SegmentInline_default as SegmentInline,
  Select_default as Select,
  Sidebar_default as Sidebar,
  SidebarPushable_default as SidebarPushable,
  SidebarPusher_default as SidebarPusher,
  Statistic_default as Statistic,
  StatisticGroup_default as StatisticGroup,
  StatisticLabel_default as StatisticLabel,
  StatisticValue_default as StatisticValue,
  Step_default as Step,
  StepContent_default as StepContent,
  StepDescription_default as StepDescription,
  StepGroup_default as StepGroup,
  StepTitle_default as StepTitle,
  Sticky,
  Tab_default as Tab,
  TabPane_default as TabPane,
  Table_default as Table,
  TableBody_default as TableBody,
  TableCell_default as TableCell,
  TableFooter_default as TableFooter,
  TableHeader_default as TableHeader,
  TableHeaderCell_default as TableHeaderCell,
  TableRow_default as TableRow,
  TextArea_default as TextArea,
  Transition,
  TransitionGroup,
  TransitionablePortal,
  Visibility
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

exenv/index.js:
  (*!
    Copyright (c) 2015 Jed Watson.
    Based on code that is Copyright 2013-2015, Facebook, Inc.
    All rights reserved.
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=semantic-ui-react.js.map
