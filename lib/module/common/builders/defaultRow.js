import React from 'react';
import { Block } from 'galio-framework';
export default function defaultRow(content, key) {
  return /*#__PURE__*/React.createElement(Block, {
    style: {
      width: '95%',
      paddingLeft: 12,
      paddingBottom: 8
    },
    key
  }, content);
}
//# sourceMappingURL=defaultRow.js.map