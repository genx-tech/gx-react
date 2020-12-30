"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAsyncCallback;

var _react = require("react");

var _useMountedChecker = _interopRequireDefault(require("./useMountedChecker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React hook that returns state and a callback for an async function or a function that returns a promise. Just like an async version of useCallback.
 * @param {*} fn - Async function
 * @param {Array} deps
 * @param {boolean} [loadingState=false]
 */
function useAsyncCallback(fn, deps, loadingState) {
  const lastCallId = (0, _react.useRef)(0);
  const isMounted = (0, _useMountedChecker.default)();
  const [state, setState] = (0, _react.useState)({
    loading: loadingState ? true : false
  });
  const applyChange = (0, _react.useCallback)(payload => {
    setState(prevState => ({ ...prevState,
      ...payload
    }));
  }, [setState]);
  const callback = (0, _react.useCallback)((...args) => {
    const callId = ++lastCallId.current;
    setState(prevState => ({ ...prevState,
      loading: true
    }));
    fn(...args).then(value => {
      isMounted() && callId === lastCallId.current && setState({
        value,
        loading: false
      });
      return value;
    }).catch(error => {
      isMounted() && callId === lastCallId.current && setState({
        error,
        loading: false
      });
      return error;
    });
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  deps
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  return [state, callback, applyChange];
}
//# sourceMappingURL=useAsyncCallback.js.map