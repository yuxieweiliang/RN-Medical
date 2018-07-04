import React, { Component } from 'react';
import {
  Image, Text, TouchableHighlight, TouchableOpacity, Dimensions, View, ImageBackground,
  TextInput, ToastAndroid, Platform , BackHandler, Animated, Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { register, requestSmsCode, verifySmsCode, registerNetEase } from '../../reducers/app/actions'
import styles from './style'
import { connect } from 'react-redux'
import CountDownButton from './CountDownButton'
import ImageEnlarge from '../../components/ImageEnlarge'
const { width, height } = Dimensions.get('window');
const short = ToastAndroid.SHORT


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
        placeholderTextColor='#ccc'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
      />
    </View>
  )
}

type Props = {};
class Register extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      verifyCode: null,
      verifyTime: 0
    }
  }

  /**
   * 获取验证码
   * @private
   */
  _getVerifyCode() {
    const { username } = this.state

    if(!username || username.length !== 11) {
      ToastAndroid.show('请输入正确的手机号码 !', short);
      return;
    }

    requestSmsCode(this.state.username)
      .then(res => {
        if(res) {
          this.setState({verifyTime: 60})

          this.timer = setInterval(() => {

            // console.log(this.state.verifyTime)
            if(this.state.verifyTime <= 0) {
              clearInterval(this.timer)
            }
            this.setState({verifyTime: this.state.verifyTime - 1})
          }, 1000)
        }
      })
    // this.props.navigation.goBack()
  }

  componentWillReceiveProps(nextProps) { }
  // shouldComponentUpdate(nextProps, nextState){ }
  componentWillUpdate(nextProps, nextState) { }

  /**
   * 注册
   * @private
   */
  async _register() {
    const { username, password, verifyCode } = this.state

    if(!username || !password || !verifyCode) {
      ToastAndroid.show('请输入正确的信息 !', short);
      return;
    }
    try {
      const verify = await verifySmsCode(verifyCode, username)

      // 验证失败
      if(!verify) {
        ToastAndroid.show('验证码不正确 !', short);
      }

      // 注册账号
      const userId = await register(username, password, password)

      if(!userId) {
        ToastAndroid.show('注册失败 !', short);
      }

      /**
       * 注册声网账号
       * true:
       * {
       *    code: 200,
       *    info: {
       *      accid: "aftqwhpi",
       *      name: "",
       *      token: "ZRAaTTaD"
       *    }
       * }
       * false:
       * {
       *    code: 414,
       *    desc: "already register" // 已经注册
       * }
       */
      const netEase  = await registerNetEase(userId)

      if(!netEase) {
        console.log('声网注册失败！')
      }

    } catch(error) {
      console.log(error)
    }
    // this.props.navigation.goBack()
  }

  render() {
    const { verifyTime } = this.state
    const verifyBtnColor = verifyTime <= 0 ? '#03a47f' : '#ccc'
    const verifyText = verifyTime <= 0 ? '获取验证码' : `${verifyTime}秒后重新获取`

    console.log(this.state)
    return (
      <View style={{height,width, backgroundColor: '#fafafa'}}>

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
            <View style={styles.iconBox}>
              <Icon style={styles.userIcon} name="key"/>
            </View>
            <TextInput
              style={styles.verification}
              onChangeText={(text) => this.setState({verifyCode: text})}
              underlineColorAndroid="transparent"
              placeholderTextColor='#ccc'
              placeholder="验证码"
              value={this.state.verifyCode}
            />
            <TouchableHighlight
              onPress={() => this._getVerifyCode()}>
              <View style={[styles.verifyBox,{backgroundColor: verifyBtnColor}]}>
                <Text
                  style={styles.verifyText}>
                  { verifyText }
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._register()}>
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
      </View>
    );
  }
}


export default connect(state => ({...state.app}))(Register)