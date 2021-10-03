import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './test/App';
import appSettings from 'config/app';

AppRegistry.registerComponent(appSettings.name, () => App);
