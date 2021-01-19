import React from 'react';
import Runtime from '../Runtime';

export default (styles, styleMode) => (Component) => {
    styleMode != null || (styleMode = Runtime.defaultStyleMode);
    const withStyles = Runtime[`${styleMode}Styles`];

    if (typeof withStyles === 'function') {
        const [wrappedComponent, useStyles] = withStyles(Component, styles);
        Component = wrappedComponent;

        return (props) => {
            const classes = useStyles(props);
            return <Component {...props} classes={classes} />;
        };
    }

    return Component;
};
