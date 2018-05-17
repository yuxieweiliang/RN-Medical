import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 健康指标
 * @param option
 */
export default function healthIndicators(option) {
  const { healthGuide, routers, list }= this.props
  console.log(option.type, )
  return option.context.text.map((items, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={{flexDirection: 'row'}}
        onPress={() => this.props.navigation.navigate('HealthIndicators')}>
        <Text style={[styles.tabCardText, {flex: 3, flexWrap: 'nowrap'}]}>
          { items.name }
        </Text>
        <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
          { items.size }
        </Text>
        <Text style={[styles.tabCardText, {flex: 2, textAlign: 'right'}]}>
          { items.default }
        </Text>
      </TouchableOpacity>
    )
  })
}
