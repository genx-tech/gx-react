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

const renderScreens = (Screen, screens) =>
    screens.map((node, i) => {
        if (node.nested) {
            const Navigator = mapOfNavigator[node.nested];
            const { nestedOptions, ...screenProps } = node;
            return (
                <Screen key={i} {...screenProps}>
                    {(props) => <Navigator {...props} {...nestedOptions} />}
                </Screen>
            );
        }

        return <Screen key={i} {...node} />;
    });

const BottomTabNavigator = ({ screens, ...props }) => {
    const Tab = useMemo(() => createBottomTabNavigator(), []);

    const mapOfIcon = screens.reduce(
        (r, node) => ((r[node.name] = node.icon), r),
        {}
    );

    const screenOptions = ({ route }) => ({
        tabBarIcon: mapOfIcon[route.name],
    });

    return (
        <Tab.Navigator screenOptions={screenOptions} {...props}>
            {renderScreens(Tab.Screen, screens)}
        </Tab.Navigator>
    );
};

const StackNavigator = ({ screens, ...props }) => {
    const Stack = useMemo(() => stackNavigatorCreator(), []);

    return (
        <Stack.Navigator {...props}>
            {renderScreens(Stack.Screen, screens)}
        </Stack.Navigator>
    );
};

const mapOfNavigator = {
    bottomTab: BottomTabNavigator,
    stack: StackNavigator,
};

const StaticRoutes = ({ type = 'stack', ...props }) => {
    const Navigator = mapOfNavigator[type];
    return <Navigator {...props} />;
};

export default StaticRoutes;
