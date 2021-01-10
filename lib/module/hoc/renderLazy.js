import React from 'react';
import Runtime from '../Runtime';
export default function renderLazy(componentUrl, props) {
  let Component = componentUrl;

  if (typeof componentUrl === 'string') {
    Component = /*#__PURE__*/React.lazy(() => Runtime.import_(componentUrl));
  }

  return /*#__PURE__*/React.createElement(Component, props);
}
//# sourceMappingURL=renderLazy.js.map