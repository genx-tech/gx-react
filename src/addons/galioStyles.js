import { withGalio } from 'galio-framework';
import { updateRuntime } from '../Runtime';

updateRuntime({
    galioStyles: (Component, styles) => [
        withGalio(Component, styles),
        (model) => model.props.styles,
    ],
});

export default function initialize() {}
