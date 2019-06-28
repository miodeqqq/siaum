import React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './navigation/Routes';

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}

AppRegistry.registerComponent('zad3', () => App);
