"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMountedChecker;

var _react = require("react");

/**
 * Check component's mount state.
 * Returns a function that will return true if component mounted and false otherwise.
 */
function useMountedChecker() {
  const mounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    mounted.current = true; //unmount

    return () => {
      mounted.current = false;
    };
  }, []);
  return () => mounted.current;
}
//# sourceMappingURL=useMountedChecker.js.map