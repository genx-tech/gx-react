"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTimeout;

var _react = require("react");

function useTimeout(f, timeout) {
  timeout != null || (timeout = 1000);
  (0, _react.useEffect)(() => {
    let timeoutHandle;

    const timeoutFn = () => {
      f();
      timeoutHandle = setTimeout(timeoutFn, timeout);
    };

    timeoutHandle = setTimeout(timeoutFn, timeout);
    return () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [f, timeout]);
}
//# sourceMappingURL=useTimeout.js.map