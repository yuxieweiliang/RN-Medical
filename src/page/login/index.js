import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { navigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  _onPressButton() {
    this.props.navigation.goBack()
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    console.log(navigation)
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };
  usernameFocus() {
    this.setState({usernameInput: 10})
  }
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <ImageBackground style={{height,width}} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <Image
              style={styles.icon}
              source={require('../../../assets/images/icon.png')}
            />
          </View>

          <View style={styles.inputBox}>
            <View style={styles.iconBox}><Icon style={styles.userIcon} name="user"/></View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              underlineColorAndroid="transparent"
              placeholderTextColor='#fff'
              placeholder="用户名"
              autoFocus={true}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputBox}>
            <View style={styles.iconBox}><Icon style={styles.userIcon} name="lock"/></View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              underlineColorAndroid="transparent"
              placeholderTextColor='#fff'
              secureTextEntry={true}
              placeholder="密码"
              value={this.state.username}
            />
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._onPressButton()}>
            <Text
              style={styles.btnText}>
              登&nbsp;&nbsp;&nbsp;&nbsp;录
            </Text>
          </TouchableHighlight>
          <View style={{display: 'flex', width, justifyContent: 'flex-end'}}>
            <Text style={styles.goRegister}>
              注册 | 登陆
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
