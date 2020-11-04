/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/Router';
// import App from "./15.10.2020/src/Functional";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);