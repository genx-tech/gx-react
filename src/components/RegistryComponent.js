import React, { memo } from 'react';

const RegistryComponent = memo(({ _name, _registry, ...props }) => {
    const Component = _registry[_name];
    if (!Component) {
        console.error(`Component [${_name}] not found in the given registry.`);
        return;
    }

    return <Component {...props} />;
});

export default RegistryComponent;
