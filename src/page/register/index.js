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


function InputView({icon, onChangeText, value, placeholder, secureTextEntry}) {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconBox}>
        <Icon style={styles.userIcon} name={icon}/>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        placeholderTextColor='#fff'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
      />
    </View>
  )
}


type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      logo: {
        url: require('../../../assets/images/icon.png'),
        width: 140,
        height: 140
      },
      username: null,
      password: null
    }
    this.imageHeight = new Animated.Value(140);
  }
  _onPressButton() {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    // this.props.navigation.goBack()
  }
  componentWillMount () {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.call(this));
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.call(this));
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.call(this));
    }
  }
  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.call(this));
    }
  }
  keyboardWillShow = (event) => {
    let { logo } = this.state
    logo.height = 80
    logo.width = 80
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 140,
      toValue: 80,
    }).start();
  };

  keyboardWillHide = (event) => {
    let { logo } = this.state
    logo.height = 140
    logo.width = 140
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 80,
      toValue: 140,
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

  returnIcon(){
    this.props.navigation.goBack()
  }
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
            style={{height: 140, width: 140}}
            width={this.state.logo.width}
            height={this.state.logo.height}
            source={this.state.logo.url}
            resizeMode='cover'
          />
        </Animated.View>
        <View style={styles.container}>
          <InputView
            icon="user"
            placeholder="用户名"
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
          />
          <InputView
            icon="lock"
            placeholder="密码"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />

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
              前往登陆
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
