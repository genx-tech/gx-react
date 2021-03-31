import React, { useMemo } from 'react';
import { View } from 'react-native';

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
  const view = useMemo(() => buildItem({
    items: data
  }, value, false, undefined, factory), [data, value, factory]);
  return /*#__PURE__*/React.createElement(View, null, view);
};

export default JsonView;
//# sourceMappingURL=JsonView.js.map