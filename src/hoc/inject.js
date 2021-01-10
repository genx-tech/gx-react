import React from 'react';

const inject = (injectProps) => (Component) => (props) => (
    <Component {...props} {...injectProps} />
);

export default inject;
