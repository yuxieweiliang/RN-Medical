import React, { Component } from 'react';
import { View, Image, TouchableOpacity  } from 'react-native';
import styles from './style'

export default class Spirit extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.spirit} onPress={() => alert('杀了你！！！')}>
        <Image style={{width: '100%', height: '100%'}} source={require('../../assets/images/spirit.png')}/>
      </TouchableOpacity>
    )
  }
}