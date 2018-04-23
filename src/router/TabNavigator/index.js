import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { TouchableHighlight, View, Image, Text, Dimensions, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Route from './routes'
const { width, height } = Dimensions.get('window');

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 20, color: '#333', fontWeight: 'bold'}}>{title}</Text></View>
  )
}


const initConfig = {
  initialRouteName: 'InitStack',
  lazy: true, // 是否懒加载
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#5a77e9',
    // tab 背景色
    // activeBackgroundColor: 'rgba(100, 100, 100, 1)',
    style: {
      height: 50,
      // backgroundColor: '#000',
      zIndex: 0,
      position: 'relative'
    },
    labelStyle: {
      // color: '#000',
      fontSize: 14,
      paddingVertical: 0,
      marginTop: 0
    },
    iconStyle: {
      paddingTop: 6
    },
    tabStyle: {
      // backgroundColor: '#000',
    },
  },
  navigationOptions: {
    headerLeft,
    headerRight,
    headerTitle,
    activeTintColor: '#5a77e9',
    // activeBackgroundColor : '#111',
    inactiveTintColor: '#000',
    pressOpacity: 0.8,
  },
}


export default TabNavigator(Route, initConfig);
