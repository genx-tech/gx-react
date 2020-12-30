"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLifeCycle;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("./useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Effect handler for tracking a react component's life cycle.
 * @callback LifeCycleEffectHandler
 * @param {string} stage - The lift cycle stage: mounted, unmounted, updated
 */

/**
 *
 * @param {LiftCycleEffectHandler} fn
 */
function useLifeCycle(fn, ...payload) {
  (0, _react.useEffect)(() => {
    fn('mounted', ...payload);
    return () => fn('unmounted', ...payload);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  []
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  (0, _useUpdateEffect.default)(() => {
    fn('updated', ...payload);
  });
}
//# sourceMappingURL=useLifeCycle.js.map