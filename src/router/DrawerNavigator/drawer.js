import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import { routeNames } from '../config'
import styles from './style'
import {TouchImageButton, TouchButton} from '../../../components/TouchButton'
const { width, height } = Dimensions.get('window');


export default props => {

  console.log(props)
  const imageData = {
    ...props,
    boxStyle: styles.boxStyle,
    imageStyle: styles.imageStyle,
    textStyle: styles.textStyle,
    router: 'Setting',
    source: require('../../../assets/images/a1.jpg'),
    text: '用户名',
  }

  const btnStyle = {
    height: 40,
    width: 70,
    paddingLeft: 20
  }
  const fontStyle = {
    fontSize: 16,
    height: 40,
    lineHeight: 40,
  }
  //
  return (
    <View style={styles.container}>

      {/*    这里是人物头像   */}
      <View  style={styles.photoBox}>
        <TouchImageButton {...imageData}/>
      </View>
      <ScrollView style={{height: height - 300}}>
        {/*     这里是自定义导航      */}
        <SafeAreaView >
          {
            props.items.map((item, key) => {

              const data = {
                ...props,
                btnStyle: styles.btnStyle,
                fontStyle: styles.fontStyle,
                router: item.key,
                text: routeNames[item.routeName]
              }
              if(Object.keys(routeNames).indexOf(item.key) < 0) return;

              return (
              <TouchButton key={key} {...data}/>
              )
            })
          }
        </SafeAreaView >
      </ScrollView>
      <View style={{height: 180, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#ccc'}}>

        <TouchButton btnStyle={btnStyle} fontStyle={fontStyle}
          {...{
            ...props,
            router: 'Login',
            text: '登陆'
          }}/>

        <TouchButton btnStyle={btnStyle} fontStyle={fontStyle}
          {...{
            ...props,
            router: 'Register',
            text: '注册'
          }}/>

        <TouchButton btnStyle={btnStyle} fontStyle={fontStyle}
          {...{
            ...props,
            router: 'exit',
            text: '退出'
          }}/>

      </View>
    </View>
  )
}