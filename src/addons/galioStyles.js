import { withGalio } from 'galio-framework';
import { updateRuntime } from '../runtimeConfig';

updateRuntime({
    galioStyles: (Component, styles) => [
        withGalio(Component, styles),
        (model) => model.props.styles,
    ],
});
