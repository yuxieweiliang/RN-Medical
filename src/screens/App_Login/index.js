import React, { Component } from 'react';
import { View, ImageBackground, Image, StatusBar, StyleSheet, Dimensions} from 'react-native';
import { Container, Content, Button, Icon, Text, Item, Left, Right, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import { getPatient } from '../../reducers/patient/actions'
import { login, appInitialized } from '../../reducers/app/actions'

const {height,width} = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;
class Login extends Component {
  static navigatorStyle = {
    // statusBarColor: 'red',
    // drawUnderNavBar: true,
    // navBarTranslucent: true
  };
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password: ''
    };
  }
  componentWillUnmount() {
    //清除密码
    this.setState({password: ''});
  }
  componentWillReceiveProps(nextProps) {}

  /**
   * 如果token值存在
   * 证明登陆成功
   */
  login() {
    const { navigator, dispatch } = this.props;
    const { username, password } = this.state;


    // console.log(dispatch)

    dispatch(login(username, password)).then(res => {

      // console.log(res)
      if(res) {
        dispatch(getPatient())
      }

      dispatch(appInitialized('app'))

      /*if(res) {
       navigator.resetTo({
       screen:'Koe.AppHome',
       title:"主页"
       });
       }*/
    })
  }
  _renderContent(){
    return (
      <View style={styles.content}>
        <Item style={{borderBottomColor: 'rgba(255, 255, 255, .5)', borderBottomWidth: borderWidth}}>
          <Icon type="FontAwesome" name='user' style={{color: 'rgba(255, 255, 255, .8)'}} />
          <Input
            placeholderTextColor="#fff"
            style={{color:"#fff"}}
            value={this.state.name}
            returnKeyType='go'
            autoFocus
            maxLength={11}
            onChangeText={username => {
              this.setState({username});
            }}
            placeholder='手机号码'
          />
        </Item>
        <Item style={{borderBottomColor: 'rgba(255, 255, 255, .5)', borderBottomWidth: borderWidth}}>
          <Icon type="FontAwesome" name='lock' style={{color: 'rgba(255, 255, 255, .8)'}} />
          <Input
            placeholderTextColor="#fff"
            style={{color:"#fff"}}
            value={this.state.password}
            secureTextEntry={true} // 密码
            onChangeText={password => {
              this.setState({password});
            }}
            placeholder='密码'
          />
        </Item>
      </View>
    );
  }

  routerTo(screen, title) {
    // showModal, showLightBox
    this.props.navigator.showModal({
      screen,
      title,
      navigatorStyle: {
        // statusBarHidden: true,
        navBarHidden: true,
        statusBarColor:'#03c89b',
      },
      style: {
        backgroundBlur: 'none',
        backgroundColor: '#2effcc',
        // 点击背景隐藏
        tapBackgroundToDismiss: true
      }
    })
  }
  render() {
    const { showModal, showLightBox } = this.props.navigator;
    return (
      <ImageBackground style={styles.container}  source={require('../../../assets/images/bg.jpg')}>
        <Content alwaysBounceVertical={false}>
          <View
            style={styles.logoBox}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/icon.png')}/>
          </View>
          {this._renderContent()}

          <View style={styles.bottom}>
            <View style={styles.button}>
              <Button full rounded style={{backgroundColor:"#03a47f"}}
                      onPress={() => this.login()}>
                <Text>登录</Text>
              </Button>
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <Left>
                <Button transparent light
                        onPress={() => this.routerTo('Koe.RetrievePassword', '找回密码')}>
                  {/*<Text>忘记密码</Text>*/}
                </Button>
              </Left>
              <Right>
                <Button transparent light
                        onPress={() => this.routerTo('Koe.App.Register', '注册')}>
                  <Text>前往注册</Text>
                </Button>
              </Right>
            </View>
          </View>
        </Content>
      </ImageBackground>
    );
  }
}

export default connect(state => ({...state.app}))(Login)


const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  logoBox: {
    width,
    height: height / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: width/3,
    height: width/3,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    padding:12
  },
  bottom: {
    padding:12
  },

  inputView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 9,
    paddingRight: 9,
    alignItems: 'center',
    borderBottomWidth: borderWidth,
    borderBottomColor: '#ccc',
    height: 41,
    borderLeftWidth: borderWidth,
    borderLeftColor: '#ccc',
    borderRightWidth: borderWidth,
    borderRightColor: '#ccc'
  },
  inputLabel: {
    fontSize: 14,
    marginRight: 10
  },
  textViewStyle: {
    flex: 1,
    fontSize: 14,
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff'
  },
});
