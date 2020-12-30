"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsFirstMount;

var _react = require("react");

function useIsFirstMount() {
  const isFirst = (0, _react.useRef)(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
}
//# sourceMappingURL=useIsFirstMount.js.map