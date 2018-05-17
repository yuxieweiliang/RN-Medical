import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

/**
 * 就医状况
 * @param option
 */
export default function medicalStatus(option) {
  return (
    <Text style={styles.tabCardText}>
      { option.context.text }
    </Text>
  )
}

