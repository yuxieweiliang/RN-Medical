import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { StackNavigator } from 'react-navigation';
// 产品
import ProductScreen from '../page/products';
// 登陆
import LoginScreen from '../page/login';
// 主页
import HomeScreen from './TabNavigator'
// 咨询
import Consult from '../page/consult'
// 推荐
import Recommend from '../page/recommend'
// 咨询详情
import DefaultRecommend from '../page/recommend-details'
// 用户
import User from '../page/user'

const { width, height } = Dimensions.get('window');

const config = {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const  pageRoute = {
  Home: {
    screen: HomeScreen,
    // 这里可以设置所有的
    navigationOptions: {
      ...config,
    },
  },

  Product: {
    screen: ProductScreen,
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      ...config,
      header: null
    },
  },
  Consult: {
    screen: Consult,
    navigationOptions: {
      ...config
      // header: null
    },
  },
  DefaultRecommend: {
    screen: DefaultRecommend,
    navigationOptions: {
      ...config
      // header: null
    },
  },
  Recommend: {
    screen: Recommend,
    navigationOptions: {
      ...config
      // header: null
    },
  },
  User: {
    screen: User,
    navigationOptions: {
      ...config
      // header: null
    },
  },

}

const InitView = StackNavigator(
  pageRoute,
  {
    initialRouteName: 'Home',
/*    navigationOptions: {
      tabBarLabel: '热映3',
      tabBarIcon: ({tintColor}) => (
        <Icon style={{width: 30, height: 30}} name="home"/>
      ),
    },*/
  }
);
export default InitView