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
      title: '历时指标',
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
        <View style={{ width, }}>
          <View style={{ height: 200, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ height: 50, width, flexDirection: 'row', alignItems: 'center' }}>
              <Text>就医历史</Text>
              <Text>就医历史</Text>
            </View>

            <View style={{ width,  }}>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('BodyParts')} style={{ width, flexDirection: 'row' }}>
                <View>
                  <Text style={{ width: '50%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                  <Text style={{ width: '20%',fontSize: 16 }}>1255</Text>
                  <Text style={{ width: '30%',fontSize: 16 }}>建议的详情页面</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('BodyParts')} style={{ width, flexDirection: 'row' }}>
                <View>
                  <Text style={{ width: '50%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                  <Text style={{ width: '20%',fontSize: 16 }}>1255</Text>
                  <Text style={{ width: '30%',fontSize: 16 }}>建议的详情页面</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('BodyParts')} style={{ width, flexDirection: 'row' }}>
                <View>
                  <Text style={{ width: '50%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                  <Text style={{ width: '20%',fontSize: 16 }}>1255</Text>
                  <Text style={{ width: '30%',fontSize: 16 }}>建议的详情页面</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('BodyParts')} style={{ width, flexDirection: 'row' }}>
                <View>
                  <Text style={{ width: '50%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                  <Text style={{ width: '20%',fontSize: 16 }}>1255</Text>
                  <Text style={{ width: '30%',fontSize: 16 }}>建议的详情页面</Text>
                </View>
              </TouchableNativeFeedback>


            </View>

          </View>

        </View>
      </View>



    );
  }
}

