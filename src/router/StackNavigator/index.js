import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import routes from './routes'

const config =  {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#fafafa',
  },
  /// headerTintColor: '#333',
  /*headerTitleStyle: {
    fontWeight: 'bold',
  }*/
}

export default StackNavigator(
  routes,
  {
    initialRouteName: 'ExpertHome',
    navigationOptions: {
      ...config,
      headerStyle:{
        backgroundColor: '#fafafa',
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        elevation: 0,
      }
    },
  }
);