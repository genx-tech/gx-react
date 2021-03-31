function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Runtime from '../Runtime';
export default ((styles, styleMode) => Component => {
  styleMode != null || (styleMode = Runtime.defaultStyleMode);
  const withStyles = Runtime[`${styleMode}Styles`];

  if (typeof withStyles === 'function') {
    const [wrappedComponent, useStyles] = withStyles(Component, styles);
    Component = wrappedComponent;
    return props => {
      const classes = useStyles(props);
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        classes: classes
      }));
    };
  }

  return Component;
});
//# sourceMappingURL=withStyles.js.map