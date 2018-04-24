import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import routes from './routes'
import { config } from '../config'

export default StackNavigator(
  routes,
  {
    initialRouteName: 'HistoryIndicators',
    navigationOptions: {
      ...config
    },
  }
);