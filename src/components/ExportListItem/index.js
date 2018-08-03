import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableHighlight, View, Image } from 'react-native';
import config from '../../config'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const {
  color: { APP }
} = config

/**
 * btnStyle: 按钮样式
 * fontStyle: 文字样式
 * router: 路由
 * text: 文字
 */
export default function ExportListItem({ UserName, style }) {
  return (
    <View style={[styles.list, style]}>
      <Image style={styles.image} source={require('../../../assets/images/a3.jpg')}/>
      <View style={styles.right}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>张三</Text>
        </View>
        <View>
          <Text style={{fontSize: 16,color: '#333'}}>
            这里写医生的自我简介
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View style={{flex: 1}}>
            <View style={{backgroundColor: 'blue', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 4}}>
              <Text style={{color: '#fff', }}>可预约</Text>
            </View>
          </View>
          <View style={{flex: 4, paddingTop: 4, paddingLeft: 15}}>
            <Text>这里些医生的级别</Text>
          </View>

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
    height: width/5.5,
    width: width/5.5,
  },
  right: {
    flex: 4,
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
