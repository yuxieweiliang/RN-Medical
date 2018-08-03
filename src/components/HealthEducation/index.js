import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableHighlight, View, Image } from 'react-native';
import config from '../../config'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const {
  color: { APP }
} = config

/**
 * context: 内容
 * time: 时间
 */
export default function HealthEducation({ context, time }) {
  console.log(context, time)
  return (
    <View style={{
      width: width,
      borderBottomColor: '#ccc',
      borderBottomWidth: borderWidth,
      flexDirection: 'row',
      paddingRight: 10,
      paddingBottom: 10,
      backgroundColor: '#fafafa'
    }}>
      <View style={{
        width: width / 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          width: 16,
          height: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red'
        }}>
          <Text style={{fontSize: 12, color: 'white'}}>入</Text>
        </View>
      </View>
      <View  style={{
        width: width - 60,
        paddingTop: 10,
        flexDirection: 'column'
      }}>
        <Text>{context}</Text>
        <Text style={{
          fontSize: 12,
          color: '#888',
          paddingTop: 5,
          width: '100%'
        }}>{time}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  content: {
    padding: 10,
    flexDirection: 'column'
  },
  time: {
    fontSize: 12,
    color: '#888',
    paddingTop: 5,
    width: '100%'
  },

});
