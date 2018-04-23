import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { navigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style'
const { width, height } = Dimensions.get('window');
import action from './action'
import { connect } from 'react-redux'

type Props = {};
class LoginPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }

  _login() {
    const { dispatch } = this.props
    // this.props.navigation.goBack()

    dispatch(action.login(this.state))
  }

  componentWillMount() {}

  render() {

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
            onPress={() => this._login()}>
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


const createState = function(state) {
  return ({...state.loginIn})
}

export default connect(createState)(LoginPage)