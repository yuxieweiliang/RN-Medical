import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import { routeNames } from '../config'
import styles from './style'
import {TouchButton} from '../../../components/TouchButton'
const { width, height } = Dimensions.get('window');


export default props => {

  // console.log(props)
  const imageData = {
    ...props,
    boxStyle: styles.boxStyle,
    imageStyle: styles.imageStyle,
    textStyle: styles.textStyle,
    router: 'Setting',
    source: require('../../../assets/images/a1.jpg'),
    text: '用户名',
  }

  const bottomBtnData = {
    ...props,
    btnStyle: styles.bottomBtnStyle,
    fontStyle: styles.bottomFontStyle,

  }
  //
  return (
    <View style={styles.container}>

      {/*    这里是人物头像   */}
      <View  style={styles.photoBox}>
        <TouchableHighlight
          onPress={() => props.navigation && props.navigation.navigate('Setting')}>
          <View style={styles.boxStyle}>
            <Image style={styles.imageStyle} source={require('../../../assets/images/a1.jpg')}/>
            <Text style={styles.textStyle}>用户名</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollBox}>
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
                <TouchButton key={key} {...data}>
                  <View style={styles.listIconContent}><Text>》</Text></View>
                </TouchButton>
              )
            })
          }
        </SafeAreaView >
      </ScrollView>
      <View style={styles.bottomBox}>
        <TouchButton {...bottomBtnData}
                     router="Login"
                     text="登陆"
        />
        <TouchButton {...bottomBtnData}
                     router="Register"
                     text="注册"
        />

        <TouchButton {...bottomBtnData}
                     router="exit"
                     text="退出"
        />
      </View>
    </View>
  )
}