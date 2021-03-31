"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function buildItem(meta, value, inline, key, factory) {
  let content = [];

  function mergeItem(itemResult) {
    if (Array.isArray(itemResult)) {
      content = content.concat(itemResult);
    } else {
      content.push(itemResult);
    }
  }

  if (meta.items) {
    if (meta.header) {
      mergeItem(factory.build(meta.header, value, false, 'header'));
    }

    meta.items.forEach((innerItem, i) => mergeItem(buildItem(innerItem, value, meta.inline, i, factory)));

    if (meta.footer) {
      mergeItem(factory.build(meta.footer, value, false, 'footer'));
    }
  } else {
    mergeItem(factory.build(meta, value, inline));
  }

  if (content.length === 1) {
    content = content[0];
  }

  if (meta.inline) {
    return factory.wrapInlineRow(content, key);
  }

  return factory.wrapRow(content, key);
}

const JsonView = ({
  data,
  value,
  factory
}) => {
  const view = (0, _react.useMemo)(() => buildItem({
    items: data
  }, value, false, undefined, factory), [data, value, factory]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, view);
};

var _default = JsonView;
exports.default = _default;
//# sourceMappingURL=JsonView.js.map