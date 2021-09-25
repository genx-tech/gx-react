import React from 'react';
import FlashMessage, {
    showMessage,
    hideMessage,
} from 'react-native-flash-message';
import Runtime, { applyScreenComposer } from '../../Runtime';

Runtime.register('react-native-flash-message', { showMessage, hideMessage });

export default function initialize({ position = 'top' } = {}) {
    applyScreenComposer((elScreen) => (
        <>
            {elScreen}
            <FlashMessage position={position} />
        </>
    ));
}
