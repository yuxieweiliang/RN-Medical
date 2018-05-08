import React, { Component } from 'react';
import {
  Image, Text, TouchableHighlight, TouchableOpacity, Dimensions, View, ImageBackground,
  TextInput, ToastAndroid, Platform , BackHandler, Animated, Keyboard
} from 'react-native';
import { navigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style'
import ImageEnlarge from '../../../components/ImageEnlarge'
const { width, height } = Dimensions.get('window');

type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      logo: {
        url: require('../../../assets/images/icon.png'),
        width: 300,
        height: 300
      },
      username: null,
      password: null
    }
    this.imageHeight = new Animated.Value(300);
  }
  _onPressButton() {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    // this.props.navigation.goBack()
  }
  componentWillMount () {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  keyboardWillShow = (event) => {
    let { logo } = this.state
    logo.height = 200
    logo.width = 200
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: 200,
    }).start();
  };

  keyboardWillHide = (event) => {
    let { logo } = this.state
    logo.height = 300
    logo.width = 300
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: 300,
    }).start();
  };
  onBackAndroid = () => {
    const nav = this.props.navigation
    const key = nav.state.key

    if (key !== 'Home' && key !== 'Login' && key !== 'Register') {
      nav.goBack();
      return true;
    }
    return false;
  };

  render() {

    return (
      <ImageBackground style={{height,width}} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
        <View style={styles.returnBox}>
          <TouchableOpacity onPress={() => this.returnIcon()}>
            <View style={styles.returnIconBox}>
              <Icon style={styles.returnIcon} name="angle-left"/>
              <Text style={styles.returnIconFont}>返回</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.logoBox, { height: this.imageHeight }]}>
          <ImageEnlarge
            style={{height: 300, width: 300}}
            width={this.state.logo.width}
            height={this.state.logo.height}
            source={this.state.logo.url}
            resizeMode='cover'
          />
        </Animated.View>
        <View style={styles.container}>
          {/*<View style={styles.logoBox}>
            <Image
              style={styles.icon}
              source={require('../../../assets/images/icon.png')}
            />
          </View>*/}

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
          <View style={styles.inputBox}>
            <View style={styles.iconBox}><Icon style={styles.userIcon} name="lock"/></View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              underlineColorAndroid="transparent"
              placeholderTextColor='#fff'
              secureTextEntry={true}
              placeholder="重复密码"
              value={this.state.username}
            />
          </View>
          <View style={styles.inputBox}>
            <View style={styles.iconBox}><Icon style={styles.userIcon} name="key"/></View>
            <TextInput
              style={styles.verification}
              onChangeText={(text) => this.setState({text})}
              underlineColorAndroid="transparent"
              placeholderTextColor='#fff'
              secureTextEntry={true}
              placeholder="验证码"
              value={this.state.username}
            />
            <TouchableHighlight
              style={styles.verify}
              onPress={() => this._onPressButton()}>
              <Text
                style={styles.verifyText}>
                获取验证码
              </Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._onPressButton()}>
            <Text
              style={styles.btnText}>
              注&nbsp;&nbsp;&nbsp;&nbsp;册
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
