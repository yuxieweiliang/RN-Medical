import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, Text, View, TouchableHighlight } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import DrawerView from './drawer'
import Route from './DrawerRoute'
const { width, height } = Dimensions.get('window');

/**
 *
 * Route: 路由
 * drawer: 抽屉
 */
export default DrawerNavigator(Route, {
  // 抽屉宽
  drawerWidth: width / 3 * 2,
  // 抽屉在左边还是右边
  drawerPosition: 'left',
  contentOptions: {
    // 默认页面组件
    initialRouteName: 'InitStack',
    // 正在活动的路由的key
    activeItemKey : 'Notifications',
    labelStyle : {//标签样式
      // color : 'red',
      height : 30,
    },
    // 选中文字颜色
    activeTintColor: 'white',
    // 选中背景颜色
    activeBackgroundColor: '#ff8500',
    // 未选中文字颜色
    inactiveTintColor: '#666',
    // 未选中背景颜色
    inactiveBackgroundColor: '#fff',
    // 样式
    style: {
      // 垂直间距
      marginVertical: 0,
    },
    //没有作用
    onItemPress : (route) => {
      // console.log('-------->' + JSON.stringify(route))
    },
  },
  contentComponent: DrawerView,
});

