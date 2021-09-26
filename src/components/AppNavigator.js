import React, { memo, useMemo } from 'react';
import Runtime from '../Runtime';

const renderScreens = (Screen, screens) =>
    screens.map((node) => {
        const { nested, nestedOptions, ...screenProps } = node;

        if (nested) {
            return (
                <Screen key={screenProps.name} {...screenProps}>
                    {(props) => (
                        <AppNavigator
                            {...props}
                            {...nestedOptions}
                            type={node.nested}
                        />
                    )}
                </Screen>
            );
        }

        return <Screen key={screenProps.name} {...screenProps} />;
    });

const AppNavigator = memo(({ type = 'stack', screens, ...props }) => {
    const Navigation = useMemo(() => Runtime[`navigation:${type}`](), [type]);

    return (
        <Navigation.Navigator {...props}>
            {renderScreens(Navigation.Screen, screens)}
        </Navigation.Navigator>
    );
});

export default AppNavigator;
