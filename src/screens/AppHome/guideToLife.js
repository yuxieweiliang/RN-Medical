import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 生活指南
 * @param guideToLife
 * @param style
 * @param navigator
 */
export default function guideToLife({ guideToLife, style, navigator }) {
  return (
  <View style={style}>
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() => navigator.resetTo('HealthIndicators')}>
      <Text style={styles.tabCardText}>
        { guideToLife }
      </Text>
    </TouchableOpacity>
  </View>
  )
}

