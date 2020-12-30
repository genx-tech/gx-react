"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useUpdateEffect;

var _react = require("react");

var _useIsFirstMount = _interopRequireDefault(require("./useIsFirstMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useUpdateEffect(effect, deps) {
  const isFirstMount = (0, _useIsFirstMount.default)();
  (0, _react.useEffect)(() => {
    if (!isFirstMount) {
      return effect();
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  deps
  /* eslint-enable react-hooks/exhaustive-deps */
  );
}
//# sourceMappingURL=useUpdateEffect.js.map