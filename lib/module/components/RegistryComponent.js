import React, { memo } from 'react';
const RegistryComponent = /*#__PURE__*/memo(({
  _name,
  _registry,
  ...props
}) => {
  const Component = _registry[_name];

  if (!Component) {
    console.error(`Component [${_name}] not found in the given registry.`);
    return;
  }

  return /*#__PURE__*/React.createElement(Component, props);
});
export default RegistryComponent;
//# sourceMappingURL=RegistryComponent.js.map