"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDeepDeps;

var _react = require("react");

var _isDeepEqual = _interopRequireDefault(require("../utils/isDeepEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check component's mount state.
 * Returns a function that will return true if component mounted and false otherwise.
 */
function useDeepDeps(nextDeps) {
  const deps = (0, _react.useRef)(undefined);

  if (!deps.current || !(0, _isDeepEqual.default)(nextDeps, deps.current)) {
    deps.current = nextDeps;
  }

  return deps.current;
}
//# sourceMappingURL=useDeepDeps.js.map