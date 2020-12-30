"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useThrottleMemo;

var _react = require("react");

/**
 * React hook that throttles an function call.
 * @param {Function} fn
 * @param {integer} ms
 * @param {Array} args
 */
function useThrottleMemo(fn, ms, args) {
  ms != null || (ms = 200);
  args != null || (args = []);
  const [state, setState] = (0, _react.useState)(null);
  var timeout = (0, _react.useRef)();
  var nextArgs = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (!timeout.current) {
      setState(fn(...args));

      const timeoutHandler = () => {
        if (nextArgs.current) {
          setState(fn(...args));
          nextArgs.current = undefined;
          timeout.current = setTimeout(timeoutHandler, ms);
        } else {
          timeout.current = undefined;
        }
      };

      timeout.current = setTimeout(timeoutHandler, ms);
    } else {
      //waiting period
      nextArgs.current = args;
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  args
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  (0, _react.useEffect)(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);
  return state;
}
//# sourceMappingURL=useThrottleMemo.js.map