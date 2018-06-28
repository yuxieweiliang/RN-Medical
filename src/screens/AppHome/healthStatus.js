import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 健康状况
 * @param healthStatus
 * @param style
 * @param navigator
 */
export default function healthStatus({ healthStatus, style, navigator }) {

  return (
  <View style={style}>
    <TouchableOpacity
      onPress={() => navigator.resetTo('SignTrend')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center'}}><Text>4月</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>体温</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>呼吸</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>血氧</Text></View>
        <View style={{flex: 2, alignItems: 'center'}}><Text>血压</Text></View>
      </View>
      {
        healthStatus.map((items, i) => {
          return (
            <View
              key={i}
              style={{flexDirection: 'row'}}>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.time }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.temperature }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.breathing }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.bloodOxygen }
              </Text>
              <Text style={[styles.tabCardText, {flex: 2, textAlign: 'center'}]}>
                { items.bloodPressure }
              </Text>
            </View>
          )
        })
      }
    </TouchableOpacity>
  </View>
  )
}
