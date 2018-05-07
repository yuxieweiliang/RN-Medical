import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Dimensions, TouchableNativeFeedback } from 'react-native';
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
        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('RecommendDefault')}
                                 style={{ width}}>
          <View style={{ width, padding: 15, backgroundColor: '#3cffeb' }}>
            <View style={{ height: 40, flexDirection: 'row' }}>
              <View style={{ flex: 3}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 1}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 2}}>
                <Text>就医历史</Text>
              </View>
            </View>
            <View style={{  height: 40, flexDirection: 'row' }}>
              <View style={{ flex: 3}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 1}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 2}}>
                <Text>就医历史</Text>
              </View>
            </View>
            <View style={{ height: 40, flexDirection: 'row' }}>
              <View style={{ flex: 3}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 1}}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 2}}>
                <Text>就医历史</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>



    );
  }
}

