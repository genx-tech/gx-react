"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeScreens = require("react-native-screens");

var _nativeStack = require("react-native-screens/native-stack");

var _stack = require("@react-navigation/stack");

var _bottomTabs = require("@react-navigation/bottom-tabs");

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let stackNavigatorCreator;

if (_Runtime.default.useNativeStack) {
  (0, _reactNativeScreens.enableScreens)();
  stackNavigatorCreator = _nativeStack.createNativeStackNavigator;
} else {
  stackNavigatorCreator = _stack.createStackNavigator;
}

const renderScreens = (Screen, screens) => screens.map((node, i) => {
  if (node.nested) {
    const Navigator = mapOfNavigator[node.nested];
    const {
      nestedOptions,
      ...screenProps
    } = node;
    return /*#__PURE__*/_react.default.createElement(Screen, _extends({
      key: i
    }, screenProps), props => /*#__PURE__*/_react.default.createElement(Navigator, _extends({}, props, nestedOptions)));
  }

  return /*#__PURE__*/_react.default.createElement(Screen, _extends({
    key: i
  }, node));
});

const BottomTabNavigator = ({
  screens,
  ...props
}) => {
  const Tab = (0, _react.useMemo)(() => (0, _bottomTabs.createBottomTabNavigator)(), []);
  const mapOfIcon = screens.reduce((r, node) => {
    r[node.name] = node.icon;
    return r;
  }, {});

  const screenOptions = ({
    route
  }) => ({
    tabBarIcon: mapOfIcon[route.name]
  });

  return /*#__PURE__*/_react.default.createElement(Tab.Navigator, _extends({
    screenOptions: screenOptions
  }, props), renderScreens(Tab.Screen, screens));
};

const StackNavigator = ({
  screens,
  ...props
}) => {
  const Stack = (0, _react.useMemo)(() => stackNavigatorCreator(), []);
  return /*#__PURE__*/_react.default.createElement(Stack.Navigator, props, renderScreens(Stack.Screen, screens));
};

const mapOfNavigator = {
  bottomTab: BottomTabNavigator,
  stack: StackNavigator
};

const StaticRoutes = ({
  type = 'stack',
  ...props
}) => {
  const Navigator = mapOfNavigator[type];
  return /*#__PURE__*/_react.default.createElement(Navigator, props);
};

var _default = StaticRoutes;
exports.default = _default;
//# sourceMappingURL=StaticRoutes.js.map