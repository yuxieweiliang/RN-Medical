import React, { Component } from 'react';
import {
  Image, TouchableHighlight, TouchableOpacity, Dimensions, View, ImageBackground,
  TextInput, ToastAndroid, Platform , BackHandler, Animated, Keyboard, StyleSheet
} from 'react-native';
import { Container, Content, Button, Icon, Text, Item, Left, Right, Input, Label } from 'native-base';
import { register, requestSmsCode, verifySmsCode, registerNetEase, login } from '../../reducers/app/actions'
import { getUser } from '../../reducers/user/actions'
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
const short = ToastAndroid.SHORT


const borderWidth = StyleSheet.hairlineWidth;
function InputView({icon, onChangeText, value, placeholder, secureTextEntry}) {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconBox}>
        <Icon style={styles.userIcon} type="FontAwesome" name={icon}/>
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
      // 验证验证码
      const verify = await verifySmsCode(verifyCode, username)

      // 验证失败
      if(!verify) {
        ToastAndroid.show('验证码不正确 !', short);
      }

      // 注册账号
      const data = await register(username, password, password)

      if(!data) {
        ToastAndroid.show('注册失败 !', short);
      }

      /**
       * 注册声网账号，使用userId作为用户名，密码统一为123456
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
      const netEase  = await registerNetEase(data.userID)

      // this.props.dispatch({type: 'app.ROOT_CHANGED/修改Root状态', data: 'DiseaseSpecies'})

    } catch(error) {
      // console.log(error)
    }
    // this.props.navigation.goBack()
  }

  render() {
    const { verifyTime } = this.state
    const verifyBtnColor = verifyTime <= 0 ? '#03a47f' : '#ccc'
    const verifyText = verifyTime <= 0 ? '验证码' : `${verifyTime}秒`

    /*this.props.dispatch(login('xueyufei', 'xyf.3342')).then(res => {

      // console.log(res)
      if(res) {
        this.props.dispatch(getUser()).then(res => {
          this.props.dispatch({type: 'app.ROOT_CHANGED/修改Root状态', data: 'DiseaseSpecies'})
        })
      }
      /!*if(res) {
       navigator.resetTo({
       screen:'Koe.AppHome',
       title:"主页"
       });
       }*!/
    })*/





    return (
      <ImageBackground style={styles.container}  source={require('../../../assets/images/bg.jpg')}>

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
            <Icon type="FontAwesome" name='lock' style={{color: 'rgba(255, 255, 255, .8)'}} />
            <Input
              placeholderTextColor="#fff"
              returnKeyType ="search"
              androidreturnKeyLabel ="search"
              style={{color:"#fff"}}
              value={this.state.password}
              secureTextEntry={true} // 密码
              onChangeText={(text) => this.setState({password: text})}
              placeholder='密码'
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
              注&nbsp;&nbsp;&nbsp;&nbsp;册
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
      </ImageBackground>
    );
  }
}


export default connect(state => ({...state.app}))(Register)