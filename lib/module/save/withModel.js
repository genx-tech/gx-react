function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { observer, inject } from 'mobx-react';
import makeModel from './makeModel';
export default (model => component => {
  const modelObject = {};

  if (model.reactive) {
    component = observer(component);
  }

  if (model.external) {
    component = inject(...model.external)(component);
  }

  return (...props) => /*#__PURE__*/React.createElement("component", _extends({}, props, {
    useModel: makeModel(modelObject, props)
  }));
});
//# sourceMappingURL=withModel.js.map