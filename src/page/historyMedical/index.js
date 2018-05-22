import React, { Component } from 'react';
import { Text, TouchableHighlight, Image, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '就医历史',
    }
  };

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

      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('TelephoneInterview')}>
          <View style={styles.list}>
            <View style={styles.listHeader}>
              <Image style={styles.userAvatar} source={require('../../../assets/images/a3.jpg')}/>
              <Text style={styles.username}>名字</Text>
            </View>
            <View style={styles.listBody}>
              <View style={styles.listBodyRow}>
                <Text style={styles.listBodyLabel}>存在问题：</Text>
                <Text style={styles.listBodyContent}>就医历史就医历史就医历史,就医历史就医历史就医历史,就医历史就医历史就,医历史就医历史就医历史,就医历史</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 100 }}>健康指导：</Text>
                <Text style={{flex: 1}}>就医历史就医历,史就医历史就医历史,就医历史就医历史,就医历史就医历史就医,历史就医历史就医历,史就医历史</Text>
              </View>
            </View>
            <View style={styles.listFooter}>
              <Text style={{flex: 1}}>电话宣教</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>2018-12-12</Text>
            </View>
          </View>
        </TouchableNativeFeedback>

      </View>



    );
  }
}

