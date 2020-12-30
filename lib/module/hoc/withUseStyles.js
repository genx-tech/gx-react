function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Runtime from '../runtimeConfig';
export default ((styleMode, styles) => Component => {
  styleMode != null || (styleMode = Runtime.defaultStyleMode);
  const withStyles = Runtime["".concat(styleMode, "Styles")];
  const extraProps = {};

  if (typeof withStyles === 'function') {
    const [wrappedComponent, useStyles] = withStyles(Component, styles);
    Component = wrappedComponent;
    extraProps.useStyles = useStyles;
  }

  return (...props) => /*#__PURE__*/React.createElement(Component, _extends({}, props, extraProps));
});
//# sourceMappingURL=withUseStyles.js.map