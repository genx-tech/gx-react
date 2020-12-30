import { makeStyles } from '@material-ui/styles';
import { updateRuntime } from '../runtimeConfig';
updateRuntime({
  muiStyles: (Component, styles) => [Component, makeStyles(styles)]
});
//# sourceMappingURL=muiStyles.js.map