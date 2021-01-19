import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { applyScreenComposer } from '../../Runtime';
export default function initialize({
  position = 'top'
} = {}) {
  applyScreenComposer(elScreen => /*#__PURE__*/React.createElement(React.Fragment, null, elScreen, /*#__PURE__*/React.createElement(FlashMessage, {
    position: position
  })));
}
//# sourceMappingURL=flashMessage.js.map