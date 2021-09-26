import Runtime from '../../Runtime';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

Runtime.update({
    'navigation:topTabMaterial': createMaterialTopTabNavigator,
});

Runtime.default({
    'navigation:topTab': createMaterialTopTabNavigator,
});
