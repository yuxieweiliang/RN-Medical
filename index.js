import { AppRegistry, YellowBox, Text } from 'react-native';

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

// 禁止黄色警告
// console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('reactNative', () => Root);
