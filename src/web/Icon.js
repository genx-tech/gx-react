import React, { useContext } from 'react';
import Runtime, { AppContext } from '../Runtime';

function Icon({ _registry, type, name, ...props }) {
    const appContext = useContext(AppContext);

    if (type === 'registry') {
        const CachedIcon = _registry[name];
        return <CachedIcon {...props} />;
    }

    if (!appContext.iconFamilies) {
        Runtime.log('error', 'Missing "iconFamilies" in app context!');
        return null;
    }

    type = type.substr(2);
    const CustomIcon = appContext.iconFamilies[type];
    return <CustomIcon name={name} {...props} />;
}

export default Icon;
