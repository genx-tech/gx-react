import React, { useContext } from 'react';
import { Icon } from 'react-native-elements';
import { AppContext } from './AppContainer';

function IconEx({ type, ...rest }) {
    const appContext = useContext(AppContext);

    if (type.startsWith('x-')) {
        if (!appContext.iconFamilies) {
            throw new Error('Missing "iconFamilies" in app context!');
        }

        type = type.substr(2);
        const CustomIcon = appContext.iconFamilies[type];
        return <CustomIcon {...rest} />;
    }

    return <Icon type={type} {...rest} />;
}

export default IconEx;
