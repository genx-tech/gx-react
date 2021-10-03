import React from 'react';
import Icon from '../native/Icon';

const navIconCreator = ({ focused: focusedProps, ...otherIconProps }) => ({
    focused,
    color,
    size,
}) => (
    <Icon
        color={color}
        size={size}
        {...(focused && focusedProps
            ? { ...otherIconProps, ...focusedProps }
            : otherIconProps)}
    />
);

export default navIconCreator;
