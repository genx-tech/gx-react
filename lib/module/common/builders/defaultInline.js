import React from 'react';
import { Block } from 'galio-framework';
export default function defaultInline(content, key) {
  return /*#__PURE__*/React.createElement(Block, {
    row: true,
    style: {
      width: '95%',
      flexWrap: 'wrap',
      paddingLeft: 12
    },
    key
  }, content);
}
//# sourceMappingURL=defaultInline.js.map