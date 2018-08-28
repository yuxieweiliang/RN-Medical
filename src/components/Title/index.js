import React, { Component } from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';
import styles from './style'


export default function(props) {
  // console.log('props: ', props)
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}