import Runtime from '../../Runtime';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

Runtime.update({
    'navigation:bottomTab': createBottomTabNavigator,
    'navigation:bottomTabNative': createBottomTabNavigator,
});
