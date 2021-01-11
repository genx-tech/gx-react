import React from 'react';
export default function renderIt(anything) {
  if (anything) {
    if ( /*#__PURE__*/React.isValidElement(anything)) {
      return anything;
    }

    const AnyComponent = anything;
    return /*#__PURE__*/React.createElement(AnyComponent, null);
  }

  return false;
}
//# sourceMappingURL=renderIt.js.map