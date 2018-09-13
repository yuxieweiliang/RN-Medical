import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import styles from './style'

/**
 * btnStyle: 按钮样式
 * fontStyle: 文字样式
 * router: 路由
 * text: 文字
 */
export default function TouchButton({
    children,
    text,
    style,
    fontStyle,
    router,
    navigation,
    activeOpacity = .8,
    underlayColor  = '#4573E9',
    onPress
}) {
  return (
    <TouchableHighlight
      style={[ styles.btnStyle, style, ]}
      activeOpacity={activeOpacity}
      underlayColor={underlayColor}
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