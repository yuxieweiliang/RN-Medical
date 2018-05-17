import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 生活指南
 * @param option
 */
export default function guideToLife(option) {
  return (
    <Text style={styles.tabCardText}>
      { option.context.text }
    </Text>
  )
}

