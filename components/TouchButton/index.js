import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import styles from './style'

/**
 * btnStyle: 按钮样式
 * fontStyle: 文字样式
 * router: 路由
 * text: 文字
 */
export function TouchButton({
    children,
    text,
    btnStyle,
    fontStyle,
    router,
    navigation,
    onPress
}) {
  return (
    <TouchableHighlight
      style={[ styles.btnStyle, btnStyle, ]}
      onPress={ onPress ? onPress : () => navigation.navigate(router)}>
      <View style={styles.btnContent}>
        <Text style={[ styles.fontStyle, fontStyle,]}>{text}</Text>
        {
          (typeof children === 'string')
            ? <Text style={[ styles.fontStyle, fontStyle,]}>{children}</Text>
            : children
        }
      </View>
    </TouchableHighlight>
  )
}

/**
 * boxStyle: 宽度
 * imageStyle: 高度
 * router: 路由
 * source: 图片地址
 * text: 图片说明
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