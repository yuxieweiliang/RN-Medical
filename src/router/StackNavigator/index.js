import React, { Component } from 'react';
import { TouchableHighlight, View, Image, Text, Dimensions, TextInput,StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation';

import routes from './routes'
import { config } from '../config'


export default StackNavigator(
  routes,
  {
    initialRouteName: 'TabNavigator',
    navigationOptions: {
      ...config,
    },
  }
);