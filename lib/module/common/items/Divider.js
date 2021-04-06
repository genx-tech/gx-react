import React from 'react';
import { View } from 'react-native';
export default function JVDivider({
  meta,
  value,
  inline,
  key,
  styles
}) {
  return /*#__PURE__*/React.createElement(View, {
    style: {
      paddingTop: 12,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      height: 0.5,
      width: '100%'
    }
  }));
}
//# sourceMappingURL=Divider.js.map