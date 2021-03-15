import React from 'react';
import { Block } from 'galio-framework';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const checkedIcon = /*#__PURE__*/React.createElement(Icon, {
    name: variant === 'square' ? 'checkbox-marked' : 'checkbox-marked-circle',
    color: disabled ? disabledColor : activeColor,
    size: size,
    style: {
      marginRight: 4
    }
  });
  const uncheckedIcon = /*#__PURE__*/React.createElement(Icon, {
    name: variant === 'square' ? 'checkbox-blank-outline' : 'checkbox-blank-circle-outline',
    color: defaultColor,
    size: size,
    style: {
      marginRight: 4
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [containerStyle]
  }, splitTitle ? /*#__PURE__*/React.createElement(Block, {
    row: true,
    top: true
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    style: {
      flex: 1
    },
    onPress: onPress,
    disabled: disabled
  }, checked ? checkedIcon : uncheckedIcon), typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 0,
    style: [{
      marginLeft: 4
    }, titleStyle]
  }, title) : title) : /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    style: {
      flex: 1
    },
    onPress: onPress,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Block, {
    row: true,
    middle: true
  }, checked ? checkedIcon : uncheckedIcon, typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 0,
    style: [{
      marginLeft: 4
    }, titleStyle]
  }, title) : title)));
};

export default CheckBox;
//# sourceMappingURL=CheckBox.js.map