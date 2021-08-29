/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './routes/router'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
