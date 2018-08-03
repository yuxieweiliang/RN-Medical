import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableHighlight, View, Image } from 'react-native';
import config from '../../config'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const {
  color: { APP }
} = config


/**
 */
export default function HospitalListItem({ style }) {
  return (
    <View style={[styles.list, style]}>
      <Image style={styles.image} source={require('../../../assets/images/a3.jpg')}/>
      <View style={styles.right}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>这里是医院名称</Text>
        </View>
        <View>
          <Text style={styles.details}>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  image: {
    height: width/6,
    width: width/4,
  },
  right: {
    flex: 1,
    paddingLeft: 10,
  },
  titleBox: {
    height: width/10
  },
  title: {
    fontSize: width/26,
    lineHeight:  width/10,
    color: '#333'
  },
  details: {
    fontSize: width/36,
  }

});
