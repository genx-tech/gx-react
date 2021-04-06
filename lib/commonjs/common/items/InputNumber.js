"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVInput;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _galioFramework = require("galio-framework");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function JVInput({
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
  const [value, setValue] = (0, _react.useState)(() => store.getValue(name));
  const inputLabel = inputProps.placeholder;
  const inputWidth = inputProps.style.width;
  const addon = inputProps.addonAfter ? inputProps.addonAfter.text : null;
  const textInputProps = (0, _react.useMemo)(() => store.readOnly ? {
    editable: false
  } : {
    onChangeText: value => {
      store.setValue(name, value);
      setValue(value);
    }
  }, [store]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      paddingRight: 12,
      paddingLeft: 12
    },
    key: key
  }, /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    row: true,
    middle: true
  }, /*#__PURE__*/_react.default.createElement(_galioFramework.Input, _extends({
    defaultValue: value
  }, textInputProps)), /*#__PURE__*/_react.default.createElement(_galioFramework.Text, {
    style: {
      paddingLeft: 5,
      paddingTop: 5,
      alignContent: 'center'
    },
    size: 14
  }, addon)));
}
//# sourceMappingURL=InputNumber.js.map