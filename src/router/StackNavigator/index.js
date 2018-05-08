import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import routes from './routes'
import { color } from '../../config'

const config =  {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: color.header,
  },
  /// headerTintColor: '#333',
  /*headerTitleStyle: {
    fontWeight: 'bold',
  }*/
}

export default StackNavigator(
  routes,
  {
    initialRouteName: 'Register',
    navigationOptions: {
      ...config,
    },
  }
);