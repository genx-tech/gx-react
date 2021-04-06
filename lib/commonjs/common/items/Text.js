"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVText;

var _react = _interopRequireWildcard(require("react"));

var Sqrl = _interopRequireWildcard(require("squirrelly"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function JVText({
  meta,
  value,
  inline,
  key,
  styles
}) {
  const text = (0, _react.useMemo)(() => {
    let text = meta.text;

    if (value != null) {
      text = Sqrl.render(text, value);
    }

    return text;
  }, [meta, value]);
  const {
    style,
    ...props
  } = meta.props || {};

  if (style && styles) {
    props.style = styles[style];
  }

  if (key) {
    props.key = key;
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, props, text);
}
//# sourceMappingURL=Text.js.map