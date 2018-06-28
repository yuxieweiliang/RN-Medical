import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

/**
 * 就医状况 historyMedical
 * @param medicalStatus
 * @param style
 * @param navigator
 */
export default function medicalStatus({ medicalStatus, style, navigator }) {
  return (
  <View style={style}>
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() => navigator.resetTo('HistoryMedical')}>
      <Text style={styles.tabCardText}>
          { medicalStatus }
      </Text>
    </TouchableOpacity>
  </View>
  )
}

