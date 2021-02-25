import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export default class ReactNative extends Component{
    render() {
        return <App/>;
    }
}

AppRegistry.registerComponent(appName, () => App);