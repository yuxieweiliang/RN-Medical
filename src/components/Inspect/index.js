import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, FlatList, View, Image } from 'react-native';
import config from '../../config'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const {
  color: { APP }
} = config

/**
 * btnStyle: 按钮样式
 * fontStyle: 文字样式
 * router: 路由
 * text: 文字
 */
export default function Inspect({ UserName, style }) {
  return (
    <FlatList
      data={[{key: 'a'}, {key: 'b'}]}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>入fdsafdsafdsafdsafdsa</Text>
          <View><Text  style={{fontSize: 12, color: '#888'}}>高</Text></View>
        </View>
      )}/>
  )
}


const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  image: {
    height: width/5.5,
    width: width/5.5,
  },
  right: {
    flex: 4,
    paddingLeft: 10,
  },
  titleBox: {
    height: width/10
  },
  title: {
    fontSize: width/26,
    lineHeight:  width/10,
    color: '#333'
  },
  details: {
    fontSize: width/36,
  }

});
