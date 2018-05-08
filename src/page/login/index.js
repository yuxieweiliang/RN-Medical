import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Image, TouchableOpacity, Text, TouchableHighlight, Dimensions, View, ImageBackground, KeyboardAvoidingView, TextInput, Animated, Keyboard } from 'react-native';
import ImageEnlarge from '../../../components/ImageEnlarge'
import ac from './action'
import styles from './style'

const { width, height } = Dimensions.get('window');

type Props = {};
class LoginPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      logo: {
        url: require('../../../assets/images/icon.png'),
        width: 300,
        height: 300
      },
      username: null,
      password: null,
    }
    this.imageHeight = new Animated.Value(300);
  }

  _login() {
    const { dispatch } = this.props

    dispatch(ac.login(this.state))

  }

  componentWillMount () {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
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
  componentDidMount() { }
  returnIcon(){
    this.props.navigation.navigate('User')
  }
  render() {

    return (
      <ImageBackground style={styles.container} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
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

        <View style={styles.inputBox}>
          <View style={styles.iconBox}><Icon style={styles.userIcon} name="user"/></View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid="transparent"
            placeholderTextColor='#fff'
            placeholder="用户名"
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
      </ImageBackground>
    );
  }
}


const createState = function(state) {
  return ({...state.loginIn})
}

export default connect(createState)(LoginPage)