import React from 'react';
import * as Sqrl from 'squirrelly';
import { Text } from 'react-native';
export default function text(item, value, inline, key, styles) {
  let text = item.text;

  if (value != null) {
    text = Sqrl.render(text, value);
  }

  const {
    style,
    ...props
  } = item.props || {};

  if (style && styles) {
    props.style = styles[style];
  }

  if (key) {
    props.key = key;
  }

  return /*#__PURE__*/React.createElement(Text, props, text);
}
//# sourceMappingURL=text.js.map