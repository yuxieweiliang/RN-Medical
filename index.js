import { AppRegistry } from 'react-native';
import App from './src/router/index';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/ConfigureStore';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (

      <Provider store={store}>

        <App />

      </Provider>

    )

  }

}

AppRegistry.registerComponent('reactNative', () => Root);
