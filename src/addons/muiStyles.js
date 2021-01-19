import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import { updateRuntime } from '../Runtime';

updateRuntime({
    muiStyles: (Component, styles) => [Component, makeStyles(styles)],
});

export default function initialize(theme) {
    const muiTheme = createMuiTheme(theme);

    return (App) => ({ props }) => (
        <ThemeProvider theme={muiTheme}>
            <App {...props} />
        </ThemeProvider>
    );
}
