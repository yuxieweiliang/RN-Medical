import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');

/**
 * 我的账户
 */
export default class extends React.Component {

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (
      <View style={styles.slide1}>
        <View style={{ flex: 1, width, }}>

          <TouchableOpacity
            style={{ width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ width: '100%',}}>
              <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center',borderWidth: 1, borderColor: 'red' }}>

                <View style={{ flex: 1,  justifyContent: 'center' }}>
                  <Text>余额</Text>
                </View>
                <View style={{ justifyContent: 'center', width: 100, alignItems: 'flex-end',borderWidth: 1, borderColor: 'red' }}>
                  <Text>》</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ width: '100%',}}>
              <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center',borderWidth: 1, borderColor: 'red' }}>

                <View style={{ flex: 1,  justifyContent: 'center' }}>
                  <Text>银行卡</Text>
                </View>
                <View style={{ justifyContent: 'center', width: 100, alignItems: 'flex-end',borderWidth: 1, borderColor: 'red' }}>
                  <Text>》</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>



        </View>
      </View>



    );
  }
}

