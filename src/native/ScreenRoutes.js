import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Runtime from '@genx/react/Runtime';

const Stack = createStackNavigator();

export const ScreenRoutes = ({ screens, ...props }) => {
    return (
        <Stack.Navigator {...props}>
            {sitemap.screens.map((node, i) => {
                const Component = Runtime.lazyLoad(node.component);
                return (
                    <Stack.Screen
                        key={i}
                        name={node.name}
                        component={Component}
                    />
                );
            })}
        </Stack.Navigator>
    );
};

export default ScreenRoutes;
