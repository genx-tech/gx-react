import { makeStyles } from '@material-ui/styles';
import { updateRuntime } from '../Runtime';

updateRuntime({
    muiStyles: (Component, styles) => [Component, makeStyles(styles)],
});

export default function initialize() {}
