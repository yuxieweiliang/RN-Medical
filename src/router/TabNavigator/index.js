import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { TouchableHighlight, View, Image, Text, Dimensions, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Route from './routes'
import config from '../../config'
const { width, height } = Dimensions.get('window');

const { color, component } = config
function headerLeft(navigation) {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('DrawerOpen')}
      style={{width: 70, paddingLeft: 15}}>

      <Image
        style={{width: 36, height: 36, borderRadius: 20}}
        source={require('../../../assets/images/a1.jpg')}/>

    </TouchableHighlight>
  )
}

function headerRight() {
  return (
    <View style={{width: 70, paddingRight: 15, alignItems: 'flex-end'}}>
      {/*<Icon name="commenting-o" style={{fontSize: 30, color: '#fff'}}/>*/}
    </View>
  )
}

function headerTitle(option, nav, title) {
  // console.log(option, nav, title)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18}}>
        {title}</Text>
    </View>
  )
}


const initConfig = {
  // 初始化
  // initialRouteName: 'Home',
  // 是否懒加载
  lazy: true,
  // 使用图标
  tabBarComponent: TabBarBottom,
  // 出现在底部
  tabBarPosition: 'bottom',
  // 配置
  tabBarOptions: {
    // 选中色
    activeTintColor: color.APP.THEME,
    // tab 选中时的背景色
    activeBackgroundColor: 'rgba(255, 255, 255, 0)',

    style: {
      height: 50,
      // backgroundColor: '#000',
      zIndex: 0,
      position: 'relative'
    },
    // 文字的颜色
    labelStyle: {
      // color: '#000',
      fontSize: 12,
      paddingVertical: 0,
      marginTop: 0
    },
    // 图标的样式
    iconStyle: {
      paddingTop: 6
    },
    tabStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
  },
  navigationOptions: {
    headerLeft,
    headerRight,
    headerTitle,
    // activeTintColor: '#5a77e9',
    // activeBackgroundColor : '#111',
    // inactiveTintColor: '#000',
    // pressOpacity: 0.8,
  },
}


export default TabNavigator(Route, initConfig);
