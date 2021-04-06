import React, { useMemo } from 'react';
import * as Sqrl from 'squirrelly';
import { Text } from 'react-native';
export default function JVText({
  meta,
  value,
  inline,
  key,
  styles
}) {
  const text = useMemo(() => {
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

  return /*#__PURE__*/React.createElement(Text, props, text);
}
//# sourceMappingURL=Text.js.map