"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAsyncProgress;

var _react = require("react");

var _useAsyncCallback = _interopRequireDefault(require("./useAsyncCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React hook that returns a state with shape { value, error, loading } of which the value is returned by an async function. Just like async version of useMemo.
 * @param {*} fn
 * @param {*} deps
 */
function useAsyncProgress(fn, deps) {
  const [state, callback, applyChange] = (0, _useAsyncCallback.default)(fn, deps, true);
  const setProgress = (0, _react.useCallback)(progress => {
    applyChange({
      progress
    });
  }, [applyChange]);
  (0, _react.useEffect)(() => {
    callback(setProgress);
  }, [callback, setProgress]);
  return state;
}
//# sourceMappingURL=useAsyncProgress.js.map