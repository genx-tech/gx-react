import React, { useState } from 'react';
import { Block, Text } from 'galio-framework';
import { CheckBox } from 'react-native-elements';
export default function JVRadio({
  meta,
  inline,
  key,
  styles,
  store
}) {
  var _radioItems$find;

  const {
    label,
    name,
    inputProps,
    radioItems,
    rules
  } = meta;
  const [selectedValue, setSelectedValue] = useState(() => store.getValue(name));

  const toggleValue = value => {
    setSelectedValue(prev => value === prev ? null : value);
    store.setValue(name, selectedValue);
  };

  return /*#__PURE__*/React.createElement(Block, null, label && /*#__PURE__*/React.createElement(Text, null, label), /*#__PURE__*/React.createElement(Block, null, store.readOnly ? /*#__PURE__*/React.createElement(Text, null, (_radioItems$find = radioItems.find(item => selectedValue === item.value)) === null || _radioItems$find === void 0 ? void 0 : _radioItems$find.label) : radioItems.map((item, index) => /*#__PURE__*/React.createElement(Block, null, /*#__PURE__*/React.createElement(CheckBox, {
    key: index,
    title: item.label,
    checked: selectedValue === item.value,
    onPress: () => toggleValue(item.value)
  })))));
}
//# sourceMappingURL=Radio.js.map