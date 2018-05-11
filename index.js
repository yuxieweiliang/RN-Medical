import { AppRegistry, View, Text } from 'react-native';

import App from './src/router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/ConfigureStore';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reactNative', () => Root);
