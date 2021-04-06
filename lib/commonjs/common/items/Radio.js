"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVRadio;

var _react = _interopRequireWildcard(require("react"));

var _galioFramework = require("galio-framework");

var _reactNativeElements = require("react-native-elements");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function JVRadio({
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
  const [selectedValue, setSelectedValue] = (0, _react.useState)(() => store.getValue(name));

  const toggleValue = value => {
    setSelectedValue(prev => value === prev ? null : value);
    store.setValue(name, selectedValue);
  };

  return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, null, label && /*#__PURE__*/_react.default.createElement(_galioFramework.Text, null, label), /*#__PURE__*/_react.default.createElement(_galioFramework.Block, null, store.readOnly ? /*#__PURE__*/_react.default.createElement(_galioFramework.Text, null, (_radioItems$find = radioItems.find(item => selectedValue === item.value)) === null || _radioItems$find === void 0 ? void 0 : _radioItems$find.label) : radioItems.map((item, index) => /*#__PURE__*/_react.default.createElement(_galioFramework.Block, null, /*#__PURE__*/_react.default.createElement(_reactNativeElements.CheckBox, {
    key: index,
    title: item.label,
    checked: selectedValue === item.value,
    onPress: () => toggleValue(item.value)
  })))));
}
//# sourceMappingURL=Radio.js.map