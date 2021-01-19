"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _galioFramework = require("galio-framework");

var _reactNative = require("react-native");

var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CheckBox = props => {
  const {
    checked,
    disabled,
    title,
    containerStyle,
    titleStyle,
    onPress,
    size = 18,
    activeColor = 'red',
    defaultColor = 'rgba(0,0,0,7)',
    disabledColor = 'rgba(0,0,0,0.3)',
    variant = 'square',
    splitTitle = false
  } = props;

  const checkedIcon = /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default, {
    name: variant === 'square' ? 'checkbox-marked' : 'checkbox-marked-circle',
    color: disabled ? disabledColor : activeColor,
    size: size,
    style: {
      marginRight: 4
    }
  });

  const uncheckedIcon = /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default, {
    name: variant === 'square' ? 'checkbox-blank-outline' : 'checkbox-blank-circle-outline',
    color: defaultColor,
    size: size,
    style: {
      marginRight: 4
    }
  });

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [containerStyle]
  }, splitTitle ? /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    row: true,
    top: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    style: {
      flex: 1
    },
    onPress: onPress,
    disabled: disabled
  }, checked ? checkedIcon : uncheckedIcon), typeof title === 'string' ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 0,
    style: [{
      marginLeft: 4
    }, titleStyle]
  }, title) : title) : /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    style: {
      flex: 1
    },
    onPress: onPress,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    row: true,
    middle: true
  }, checked ? checkedIcon : uncheckedIcon, typeof title === 'string' ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 0,
    style: [{
      marginLeft: 4
    }, titleStyle]
  }, title) : title)));
};

var _default = CheckBox;
exports.default = _default;
//# sourceMappingURL=CheckBox.js.map