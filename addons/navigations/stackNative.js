import Runtime from '../../Runtime';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Runtime.update({
    'navigation:stack': createNativeStackNavigator,
    'navigation:stackNative': createNativeStackNavigator,
});
