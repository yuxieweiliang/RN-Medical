import React, { Component } from 'react';
import { TouchableHighlight, View, Image, Text, Dimensions, TextInput,StyleSheet } from 'react-native'
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
    initialRouteName: 'TabNavigator',
    navigationOptions: {
      ...config,
    },
  }
);