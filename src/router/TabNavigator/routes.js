import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import React, { Component } from 'react';

import routes from '../routes'

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

const style =  StyleSheet.create({
  icon: {
    // color: '#000',
    fontSize: 20,
    marginTop: 5,
  }
});

function headerTitle() {
  return (
    <TextInput value="搜索"
               underlineColorAndroid="transparent"
               style={{
                 color: '#333',
                 fontSize: 18,
                 flex: 1,
                 marginRight: 15,
                 marginLeft: 15,
                 borderRadius: 10,
                 height: 40,
                 backgroundColor: 'rgba(0, 0, 0, .1)'
               }}/>
  )
}

export default {
  InitStack: {
    screen: routes.Home,
    // 这里可以设置所有的
    navigationOptions: {
      ...config,
      title: '首页',
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (
        <Icon  name="home"
               style={[style.icon, {color: tintColor}]}
        />
      ),
      headerTitle,
    },
  },
  Consult: {
    screen: routes.Consult,
    // 这里可以设置所有的
    navigationOptions: {
      ...config,
      title: '咨询',
      tabBarLabel: '咨询',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home"
              style={[style.icon, {color: tintColor}]}
        />
      ),
    },
  },
  Recommend: {
    screen: routes.Recommend,
    navigationOptions: {
      ...config,
      title: '推荐',
      tabBarLabel: '推荐',
      tabBarIcon: ({tintColor}) => (
        <Icon name="heart-o"
              style={[style.icon, {color: tintColor}]}
        />
      ),
    }
  },
  User: {
    screen: routes.User,
    navigationOptions: {
      ...config,
      title: '我的',
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user-o"
              style={[style.icon, {color: tintColor}]}
        />
      ),
      //header: null
    }
  },
}