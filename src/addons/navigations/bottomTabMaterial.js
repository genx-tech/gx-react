import Runtime from '../../Runtime';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

Runtime.update({
    'navigation:bottomTabMaterial': createMaterialBottomTabNavigator,
});

Runtime.default({
    'navigation:bottomTab': createMaterialBottomTabNavigator,
});
