import Runtime from '../Runtime';
import inject from './inject';

export default (styles, styleMode) => (Component) => {
    styleMode != null || (styleMode = Runtime.defaultStyleMode);
    const withStyles = Runtime[`${styleMode}Styles`];
    const extraProps = {};

    if (typeof withStyles === 'function') {
        const [wrappedComponent, useStyles] = withStyles(Component, styles);
        Component = wrappedComponent;
        extraProps.useStyles = useStyles;
    }

    return inject(extraProps)(Component);
};
