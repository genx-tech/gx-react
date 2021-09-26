import Runtime from '../../Runtime';
import { createDrawerNavigator } from '@react-navigation/drawer';

Runtime.update({
    'navigation:drawer': createDrawerNavigator,
});

Runtime.default({
    'navigation:drawerReanimated': createDrawerNavigator,
});
