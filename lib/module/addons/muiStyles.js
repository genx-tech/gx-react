function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { updateRuntime } from '../Runtime';
updateRuntime({
  muiStyles: (Component, styles) => {
    const useStyles = makeStyles(styles);
    return props => {
      const classes = useStyles(props);
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        styles: classes
      }));
    };
  }
});
export default function initialize(theme) {
  return App => ({
    props
  }) => /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(App, props));
}
//# sourceMappingURL=muiStyles.js.map