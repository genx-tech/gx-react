"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAsyncMemo;

var _react = require("react");

var _useAsyncCallback = _interopRequireDefault(require("./useAsyncCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React hook that returns a state with shape { value, error, loading } of which the value is returned by an async function. Just like async version of useMemo.
 * @param {*} fn
 * @param {*} deps
 */
function useAsyncMemo(fn, deps) {
  const [state, callback] = (0, _useAsyncCallback.default)(fn, deps, true);
  (0, _react.useEffect)(() => {
    callback();
  }, [callback]);
  return state;
}
//# sourceMappingURL=useAsyncMemo.js.map