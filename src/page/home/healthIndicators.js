import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 健康指标
 * @param healthIndicators
 * @param style
 */
export default function healthIndicators({ healthIndicators, style }) {
  console.log(healthIndicators, 'option')


  return ( <View style={style}>
      {
        healthIndicators.map((items, i) => (
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
        ))
      }
    </View>
  )
}
