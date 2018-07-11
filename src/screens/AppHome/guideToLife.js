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
      onPress={() => navigator.push({
        screen: 'Koe.HealthIndicators',
        title: '生活指南'
      })}>
      <Text style={{color: '#6881ff', marginBottom: 10}}>4月19日 农历 三月初四 天气：晴 健康指标：5星</Text>
      <Text style={styles.tabCardText}>
        富含精氨酸的食物有助调节血管张力、抑制血小板聚集，减少血管损伤。这类食物有海参、泥鳅、鳝鱼及芝麻、山药、银杏、豆腐皮、葵花子等。
      </Text>
    </TouchableOpacity>
  </View>
  )
}

