import React from 'react';
import Runtime from '../runtimeConfig';

export default (styleMode, styles) => (Component) => {
    styleMode != null || (styleMode = Runtime.defaultStyleMode);
    const withStyles = Runtime[`${styleMode}Styles`];
    const extraProps = {};

    if (typeof withStyles === 'function') {
        const [wrappedComponent, useStyles] = withStyles(Component, styles);
        Component = wrappedComponent;
        extraProps.useStyles = useStyles;
    }

    return (...props) => <Component {...props} {...extraProps} />;
};
