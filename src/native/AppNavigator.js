import React, { memo } from 'react';
import Runtime from '../Runtime';
import _mapValues from 'lodash/mapValues';
import navIconCreator from '../helpers/navIconCreator';

const renderScreens = (Screen, registry, screens) =>
    screens.map(({ component, componentProps, options, ...screenProps }) => {
        options && (options = buildProps(options));

        let Component =
            typeof component === 'string' ? registry[component] : component;

        if (componentProps) {
            return (
                <Screen
                    key={screenProps.name}
                    options={options}
                    {...screenProps}
                >
                    {(props) => (
                        <Component
                            {...componentProps}
                            {...props}
                            _registry={registry}
                        />
                    )}
                </Screen>
            );
        }

        return (
            <Screen
                key={screenProps.name}
                options={options}
                {...screenProps}
                component={Component}
            />
        );
    });

const buildProps = (props) =>
    _mapValues(props, (v, k) => {
        console.log(k, v);
        if (k.endsWith('Icon') && typeof v !== 'function') {
            return navIconCreator(v);
        }
        return v;
    });

const AppNavigator = memo(
    ({ type = 'stack', _registry, screens, screenOptions, ...props }) => {
        const Navigation = Runtime[`navigation:${type}`]();
        const Screen = Navigation.Screen;
        const elScreens = renderScreens(
            Screen,
            { Navigator: AppNavigator, ..._registry },
            screens
        );
        screenOptions && (screenOptions = buildProps(screenOptions));

        return (
            <Navigation.Navigator screenOptions={screenOptions} {...props}>
                {elScreens}
            </Navigation.Navigator>
        );
    }
);

export default AppNavigator;
