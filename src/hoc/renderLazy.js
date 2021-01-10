import React from 'react';
import Runtime from '../Runtime';

export default function renderLazy(componentUrl, props) {
    let Component = componentUrl;

    if (typeof componentUrl === 'string') {
        Component = React.lazy(() => Runtime.import_(componentUrl));
    }

    return <Component {...props} />;
}
