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
function useAsyncCallback(fn, deps, initialState, reloadable) {
  const [changed, setChanged] = (0, _react.useState)(false);
  const lastCallId = (0, _react.useRef)(0);
  const isMounted = (0, _useMountedChecker.default)();
  const [state, setState] = (0, _react.useState)(() => {
    const init = {
      progress: 0,
      loading: false,
      ...initialState
    };

    if (reloadable) {
      init.reload = () => setChanged(prev => !prev);
    }

    return init;
  });
  const applyChange = (0, _react.useCallback)(payload => {
    setState(prevState => ({ ...prevState,
      ...payload
    }));
  }, [setState]);

  if (reloadable) {
    deps = deps.concat(changed);
  }

  const callback = (0, _react.useCallback)((...args) => {
    const callId = ++lastCallId.current;
    setState(prevState => ({ ...prevState,
      progress: 0,
      loading: true,
      error: undefined
    }));
    fn(...args).then(value => {
      isMounted() && callId === lastCallId.current && setState(prevState => ({ ...prevState,
        value,
        progress: 100,
        loading: false,
        error: undefined
      }));
      return value;
    }).catch(error => {
      isMounted() && callId === lastCallId.current && setState(prevState => ({ ...prevState,
        error,
        loading: false
      }));
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