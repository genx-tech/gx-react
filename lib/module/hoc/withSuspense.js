import React, { Suspense } from 'react';
import Runtime from '../Runtime';
export default (Component => ({
  fallback,
  ...props
}) => /*#__PURE__*/React.createElement(Suspense, {
  fallback: fallback || Runtime.suspenseFallbabck()
}, /*#__PURE__*/React.createElement(Component, props)));
//# sourceMappingURL=withSuspense.js.map