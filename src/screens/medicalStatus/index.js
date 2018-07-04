import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '就医状况',
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
      <View style={styles.slide1}>
        <View style={{ flex: 1, width, }}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('TelephoneInterview')} style={{ height: 200, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ height: 200, width,}}>
              <View style={{ height: 50, width, flexDirection: 'row', justifyContent: 'center' }}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>就医历史</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>就医历史</Text>
                </View>
              </View>

              <View style={{ width }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>就医历史</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  就医历史点击进入建议的详情页面
                  就医历史点击进入建议的详情页面
                  就医历史点击进入建议的详情页面
                </Text>
              </View>
            </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('TelephoneInterview')} style={{ height: 200, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ height: 200, width,}}>
              <View style={{ height: 50, width, flexDirection: 'row', justifyContent: 'center' }}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>就医历史</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>就医历史</Text>
                </View>
              </View>

              <View style={{ width }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>就医历史</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  就医历史点击进入建议的详情页面
                  就医历史点击进入建议的详情页面
                  就医历史点击进入建议的详情页面
                </Text>
              </View>
            </View>


          </TouchableNativeFeedback>

        </View>
      </View>



    );
  }
}

