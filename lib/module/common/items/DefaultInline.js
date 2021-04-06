function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Block } from 'galio-framework';
export default function DefaultInline({
  content,
  ...others
}) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    row: true,
    style: {
      width: '95%',
      flexWrap: 'wrap',
      paddingLeft: 12
    }
  }, others), content);
}
//# sourceMappingURL=DefaultInline.js.map