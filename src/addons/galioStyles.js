import React from 'react';
import { withGalio, GalioProvider } from 'galio-framework';
import { updateRuntime } from '../Runtime';

updateRuntime({
    galioStyles: (Component, styles) => [
        withGalio(Component, styles),
        (model) => model.props.styles,
    ],
});

export default function initialize(theme) {
    return (App) => ({ props }) => (
        <GalioProvider theme={theme}>
            <App {...props} />
        </GalioProvider>
    );
};
