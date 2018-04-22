import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';

/**
 * {
 *    btnStyle: 按钮样式
 *    fontStyle: 文字样式
 *    router: 路由
 *    text: 文字
 *  }
 * @param props
 * @returns {XML}
 */
export function TouchButton(props) {
  return (
    <TouchableHighlight
      style={props.btnStyle}
      onPress={() => props.navigation.navigate(props.router)}>
      <Text style={props.fontStyle}>
        {props.text}
      </Text>
    </TouchableHighlight>
  )
}

/**
 * {
 *    boxStyle: 宽度
 *    imageStyle: 高度
 *    router: 路由
 *    source: 图片地址
 *    text: 图片说明
 *  }
 * @param props
 * @returns {XML}
 */
export function TouchImageButton(props) {
  return (
    <TouchableHighlight
      onPress={() => props.navigation && props.navigation.navigate(props.router)}>
      <View style={props.boxStyle}>
        <Image style={props.imageStyle} source={props.source}/>
        <Text style={props.textStyle}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
}