import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Runtime from '@genx/react/Runtime';
const Stack = createStackNavigator();
export const ScreenRoutes = ({
  screens,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(Stack.Navigator, props, sitemap.screens.map((node, i) => {
    const Component = Runtime.lazyLoad(node.component);
    return /*#__PURE__*/React.createElement(Stack.Screen, {
      key: i,
      name: node.name,
      component: Component
    });
  }));
};
export default ScreenRoutes;
//# sourceMappingURL=ScreenRoutes.js.map