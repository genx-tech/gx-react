import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { applyScreenComposer } from '../../Runtime';

export default function initialize({ position = 'top' } = {}) {
    applyScreenComposer((elScreen) => (
        <>
            {elScreen}
            <FlashMessage position={position} />
        </>
    ));
}
