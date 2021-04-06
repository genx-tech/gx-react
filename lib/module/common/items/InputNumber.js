function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { Block, Input, withGalio, Text } from 'galio-framework';
export default function JVInput({
  meta,
  inline,
  key,
  styles,
  store
}) {
  const {
    name,
    inputProps,
    rules
  } = meta;
  const [value, setValue] = useState(() => store.getValue(name));
  const inputLabel = inputProps.placeholder;
  const inputWidth = inputProps.style.width;
  const addon = inputProps.addonAfter ? inputProps.addonAfter.text : null;
  const textInputProps = useMemo(() => store.readOnly ? {
    editable: false
  } : {
    onChangeText: value => {
      store.setValue(name, value);
      setValue(value);
    }
  }, [store]);
  return /*#__PURE__*/React.createElement(View, {
    style: {
      paddingRight: 12,
      paddingLeft: 12
    },
    key: key
  }, /*#__PURE__*/React.createElement(Block, {
    row: true,
    middle: true
  }, /*#__PURE__*/React.createElement(Input, _extends({
    defaultValue: value
  }, textInputProps)), /*#__PURE__*/React.createElement(Text, {
    style: {
      paddingLeft: 5,
      paddingTop: 5,
      alignContent: 'center'
    },
    size: 14
  }, addon)));
}
//# sourceMappingURL=InputNumber.js.map