/**
 * 病种列表项
 */
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';
import { typeOf } from '../../utils'
const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

export default ({itemTitle, itemName}) => {
  let ItemContent = null
  let createItem = (text, key) => (
    <View style={styles.listChildRight} key={key}>
      <Text style={styles.listChildRightTextColor}>
        {text}
      </Text>
    </View>
  )

  // console.log(typeOf(itemName, 'array'), itemName)
  if(itemName) {
    ItemContent = typeOf(itemName, 'array')
      ? itemName.map((item, key) => createItem(itemName, key))
      : createItem(itemName)
  }

  return (
    <View style={styles.listChildItem}>
      <View style={styles.listChildItemLeft}>
        <Text>{itemTitle}：</Text>
      </View>
      <View style={{height: 30}}>
        {ItemContent}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  listItem: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listChildCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listChildItem: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  listChildItemLeft: {
    width: 100,
  },
  listChildRight: {
    backgroundColor: '#57aeff',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    // borderColor: 'red',
    // borderWidth: 1
  },
  listChildRightTextColor: {
    color: '#fafafa',
    // borderColor: 'red',
    // borderWidth: 1
  }
});
