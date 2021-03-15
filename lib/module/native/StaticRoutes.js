function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Runtime from '../Runtime';
let stackNavigatorCreator;

if (Runtime.useNativeStack) {
  enableScreens();
  stackNavigatorCreator = createNativeStackNavigator;
} else {
  stackNavigatorCreator = createStackNavigator;
}

const renderScreens = (Screen, screens) => screens.map((node, i) => {
  if (node.nested) {
    const Navigator = mapOfNavigator[node.nested];
    const {
      nestedOptions,
      ...screenProps
    } = node;
    return /*#__PURE__*/React.createElement(Screen, _extends({
      key: i
    }, screenProps), props => /*#__PURE__*/React.createElement(Navigator, _extends({}, props, nestedOptions)));
  }

  return /*#__PURE__*/React.createElement(Screen, _extends({
    key: i
  }, node));
});

const BottomTabNavigator = ({
  screens,
  ...props
}) => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);
  const mapOfIcon = screens.reduce((r, node) => (r[node.name] = node.icon, r), {});

  const screenOptions = ({
    route
  }) => ({
    tabBarIcon: mapOfIcon[route.name]
  });

  return /*#__PURE__*/React.createElement(Tab.Navigator, _extends({
    screenOptions: screenOptions
  }, props), renderScreens(Tab.Screen, screens));
};

const StackNavigator = ({
  screens,
  ...props
}) => {
  const Stack = useMemo(() => stackNavigatorCreator(), []);
  return /*#__PURE__*/React.createElement(Stack.Navigator, props, renderScreens(Stack.Screen, screens));
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
  return /*#__PURE__*/React.createElement(Navigator, props);
};

export default StaticRoutes;
//# sourceMappingURL=StaticRoutes.js.map