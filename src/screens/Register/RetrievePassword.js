import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  View,
  ImageBackground,
  TextInput,
  ToastAndroid,
  Platform ,
  BackHandler,
  Animated,
  Keyboard,
  StyleSheet
} from 'react-native';
import { Button, Icon, Text, Item, Left, Right, Input, Label } from 'native-base';
import { register, requestSmsCode, verifySmsCode, registerNetEase } from '../../reducers/app/actions'
import styles from './style'
import { connect } from 'react-redux'

const { width, height } = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;
const short = ToastAndroid.SHORT


type Props = {};
class Register extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      verifyPhone: true,
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
      // 打开下一个页面
      this.setState({verifyPhone: true})

    } catch(error) {
      console.log(error)
    }
    // this.props.navigation.goBack()
  }




  renderNewPassword() {
    return (
      <View style={styles.content}>
        <Item style={styles.item}>
          <Icon type="FontAwesome" name='lock' style={{color: 'rgba(255, 255, 255, .8)'}} />
          <Input
            placeholderTextColor="#fff"
            returnKeyType ="search"
            androidreturnKeyLabel ="search"
            style={{color:"#fff"}}
            value={this.state.password}
            secureTextEntry={true} // 密码
            onChangeText={(text) => this.setState({password: text})}
            placeholder='新密码'
          />
        </Item>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this._register()}>
          <Text
            style={styles.btnText}>
            确&nbsp;&nbsp;&nbsp;&nbsp;定
          </Text>
        </TouchableHighlight>

        <View style={styles.content}>

          <Button
            transparent
            light
            style={{ alignSelf: 'flex-end' }}
            // onPress={() => this.props.navigator.dismissLightBox()}
            onPress={() => this.props.navigator.dismissModal()}
          >
            <Text>返回登陆</Text>
          </Button>
        </View>
      </View>
    )
  }


  renderVerifyPhone() {
    const { verifyTime } = this.state
    const verifyBtnColor = verifyTime <= 0 ? '#03a47f' : '#ccc'
    const verifyText = verifyTime <= 0 ? '验证码' : `${verifyTime}秒`

    return (
      <View style={styles.content}>
        <Item style={styles.item}>
          <Icon type="FontAwesome" name='user' style={{color: 'rgba(255, 255, 255, .8)'}} />
          <Input
            keyboardType="numeric"
            placeholderTextColor="#fff"
            returnKeyType ="next"
            iosreturnKeyType  ="next"
            style={{color:"#fff"}}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder='手机号'
          />
        </Item>
        <Item style={styles.item}>
          <Icon type="FontAwesome" name='key' style={{color: 'rgba(255, 255, 255, .8)'}} />
          <Input
            placeholderTextColor="#fff"
            style={{color:"#fff"}}
            value={this.state.verifyCode}
            secureTextEntry={true} // 密码
            onChangeText={(text) => this.setState({verifyCode: text})}
            placeholder='验证码'
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
        </Item>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this._register()}>
          <Text
            style={styles.btnText}>
            下&nbsp;一&nbsp;步
          </Text>
        </TouchableHighlight>

        <View style={styles.content}>

          <Button
            transparent
            light
            style={{ alignSelf: 'flex-end' }}
            // onPress={() => this.props.navigator.dismissLightBox()}
            onPress={() => this.props.navigator.dismissModal()}
          >
            <Text>返回登陆</Text>
          </Button>
        </View>
      </View>
    )
  }


  render() {

    return (
      <ImageBackground style={styles.container}  source={require('../../../assets/images/bg.jpg')}>

        { this.state.verifyPhone ? this.renderVerifyPhone() : this.renderNewPassword() }

      </ImageBackground>
    );
  }
}


export default connect(state => ({...state.app}))(Register)