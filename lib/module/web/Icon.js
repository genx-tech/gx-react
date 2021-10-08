function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import Runtime, { AppContext } from '../Runtime';

function Icon({
  _registry,
  type,
  name,
  ...props
}) {
  const appContext = useContext(AppContext);

  if (type === 'registry') {
    const CachedIcon = _registry[name];
    return /*#__PURE__*/React.createElement(CachedIcon, props);
  }

  if (!appContext.iconFamilies) {
    Runtime.log('error', 'Missing "iconFamilies" in app context!');
    return null;
  }

  type = type.substr(2);
  const CustomIcon = appContext.iconFamilies[type];
  return /*#__PURE__*/React.createElement(CustomIcon, _extends({
    name: name
  }, props));
}

export default Icon;
//# sourceMappingURL=Icon.js.map