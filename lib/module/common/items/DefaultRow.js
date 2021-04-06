function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Block } from 'galio-framework';
export default function DefaultRow({
  content,
  ...others
}) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    style: {
      width: '95%',
      paddingLeft: 12,
      paddingBottom: 8
    }
  }, others), content);
}
//# sourceMappingURL=DefaultRow.js.map