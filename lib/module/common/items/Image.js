import React from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
export default function JVImage({
  meta,
  key
}) {
  const {
    url
  } = meta;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      padding: 16,
      width: '100%'
    },
    key: key
  }, /*#__PURE__*/React.createElement(ImageBackground, {
    source: {
      uri: url
    },
    style: {
      width: '100%'
    }
  }));
}
//# sourceMappingURL=Image.js.map