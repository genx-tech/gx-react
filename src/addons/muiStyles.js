import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { updateRuntime } from '../Runtime';

updateRuntime({
    muiStyles: (Component, styles) => {
        const useStyles = makeStyles(styles);

        return (props) => {
            const classes = useStyles(props);
            return <Component {...props} styles={classes} />;
        };
    },
});

export default function initialize(theme) {
    return (App) =>
        ({ props }) =>
            (
                <ThemeProvider theme={theme}>
                    <App {...props} />
                </ThemeProvider>
            );
}
