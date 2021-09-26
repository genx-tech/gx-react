import Runtime from '../../Runtime';
import { createStackNavigator } from '@react-navigation/stack';

Runtime.update({
    'navigation:stackReact': createStackNavigator,
});

Runtime.default({
    'navigation:stack': createStackNavigator,
});
