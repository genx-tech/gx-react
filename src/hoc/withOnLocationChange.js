import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const withOnLocationChange = (Component) => ({
    onLocationChange,
    ...props
}) => {
    const history = useHistory();

    useEffect(() => {
        let unlisten;

        if (onLocationChange) {
            console.log('called listen');
            unlisten = history.listen(onLocationChange);
        }

        return () => unlisten && unlisten();
    }, [history, onLocationChange]);

    return <Component {...props} />;
};

export default withOnLocationChange;
