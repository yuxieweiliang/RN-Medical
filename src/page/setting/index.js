import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { navigation } from 'react-navigation';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');

type Props = {};
export default class extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  _onPressButton() {
    // 返回首页
    this.props.navigation.goBack()
    // 打开抽屉
    this.props.navigation.navigate('DrawerOpen')
  }
  static navigationOptions = {
    drawerLabel: 'System',
    drawerIcon: ({ tintColor }) => (
      <Icon name="bars" size={30} color="#900" />
    ),
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
    <ImageBackground style={{height,width}} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
      <View style={styles.container}>

        <Text style={styles.welcome}>
          用户中心
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => this._onPressButton()}>
          <Text>返回</Text>
        </TouchableHighlight>

      </View>
    </ImageBackground>
    );
  }
}
