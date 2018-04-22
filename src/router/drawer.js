import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import router from './drawerConfig'
import styles from './drawerStyle'
import {TouchImageButton, TouchButton} from '../../components/TouchButton'
const { width, height } = Dimensions.get('window');


export default props => {
  const imageData = {
    ...props,
    boxStyle: styles.boxStyle,
    imageStyle: styles.imageStyle,
    textStyle: styles.textStyle,
    router: 'Setting',
    source: require('../../assets/images/a1.jpg'),
    text: '用户名',
  }

  const bottomBtnStyle = {
    btnStyle: {
      height: 40,
      width: 70,
      paddingLeft: 20
    },
    fontStyle: {
      fontSize: 16,
      height: 40,
      lineHeight: 40,
    },
  }
  // console.log(props)
  return (
    <View style={styles.container}>

      {/*    这里是人物头像   */}
      <View  style={styles.photoBox}>
        <TouchImageButton {...imageData}/>
      </View>
      <ScrollView style={{height: height - 260}}>
        {/*     这里是自定义导航      */}
        <SafeAreaView >
          {
            props.items.map((item, key) => {

              const data = {
                ...props,
                btnStyle: styles.btnStyle,
                fontStyle: styles.fontStyle,
                router: item.key,
                text: router[item.routeName]
              }
              if(Object.keys(router).indexOf(item.key) < 0) return;

              return (
              <TouchButton key={key} {...data}/>
              )
            })
          }
        </SafeAreaView >
      </ScrollView>
      <View style={{height: 40, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#ccc'}}>

        <TouchButton
          {...{
            ...bottomBtnStyle,
            router: 'Login',
            text: '登陆'
          }}/>

        <TouchButton
          {...{
            ...bottomBtnStyle,
            router: 'Register',
            text: '注册'
          }}/>

        <TouchButton
          {...{
            ...bottomBtnStyle,
            router: 'exit',
            text: '退出'
          }}/>

      </View>
    </View>
  )
}