import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { Block } from 'galio-framework';
export default function JVCamera({
  meta,
  inline,
  key,
  styles,
  store
}) {
  const {
    name
  } = meta;
  const uri = store.getValue(name);
  return /*#__PURE__*/React.createElement(Block, null, /*#__PURE__*/React.createElement(Block, {
    key: key,
    style: {
      padding: 8
    }
  }, store.readOnly ? uri ? /*#__PURE__*/React.createElement(ImageBackground, {
    source: {
      uri: store.getValue(name)
    },
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/React.createElement(Text, null, '尚未上传照片。') : /*#__PURE__*/React.createElement(Text, {
    style: styles.errorText
  }, '请在手机App上拍照。')));
}
//# sourceMappingURL=Camera.web.js.map