/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';

import Router from './routes/router'
import {name as appName} from './app.json';

LogBox.ignoreAllLogs()

AppRegistry.registerComponent(appName, () => Router);
