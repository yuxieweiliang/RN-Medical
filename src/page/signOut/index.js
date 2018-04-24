import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '体征填写',
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

        <View
          onPress={() => this.props.navigation.goBack()}>
          <View style={styles.list}>
            <Text style={styles.label}>高压：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>

        <View
          onPress={() => this.props.navigation.goBack()}>
          <View style={styles.list}>
            <Text style={styles.label}>低压：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>

        <View
          onPress={() => this.props.navigation.goBack()}>
          <View style={styles.list}>
            <Text style={styles.label}>血氧：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>

        <View
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>呼吸：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>
        <View
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>心率：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

        <View
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>体温：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

        <View
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>脉搏：</Text>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="请输入"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

      </View>



    );
  }
}

