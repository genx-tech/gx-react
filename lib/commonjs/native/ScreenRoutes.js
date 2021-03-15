"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ScreenRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _stack = require("@react-navigation/stack");

var _Runtime = _interopRequireDefault(require("@genx/react/Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Stack = (0, _stack.createStackNavigator)();

const ScreenRoutes = ({
  screens,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(Stack.Navigator, props, screens.map((node, i) => {
    const Component = _Runtime.default.lazyLoad(node.component);

    return /*#__PURE__*/_react.default.createElement(Stack.Screen, {
      key: i,
      name: node.name,
      component: Component
    });
  }));
};

exports.ScreenRoutes = ScreenRoutes;
var _default = ScreenRoutes;
exports.default = _default;
//# sourceMappingURL=ScreenRoutes.js.map