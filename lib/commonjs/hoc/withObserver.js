"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobxReactLite = require("mobx-react-lite");

var _inject = _interopRequireDefault(require("./inject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withObserver = props => Component => (0, _inject.default)(props)((0, _mobxReactLite.observer)(Component));

var _default = withObserver;
exports.default = _default;
//# sourceMappingURL=withObserver.js.map