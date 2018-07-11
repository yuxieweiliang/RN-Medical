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
      style={{flexDirection: 'column'}}
      onPress={() => navigator.push({
        screen: 'Koe.HistoryMedical',
        title: '就医状况'
      })}>
      <Text style={[styles.tabCardText, {fontWeight: 'bold'}]}>
         尿常规检查报告
      </Text>
      <Text style={styles.tabCardText}>
         白细胞（WBC） 异常
      </Text>
      <Text style={styles.tabCardText}>
         高血压（39.2） 异常
      </Text>
      <Text style={styles.tabCardText}>
          3月2日 何护士
      </Text>
    </TouchableOpacity>
  </View>
  )
}

