import React, { Component } from 'react';
import { View,Image,TextInput,StyleSheet,Text,Dimensions} from 'react-native';
import { Container, Content, Button, Icon,ListItem,Left,Right } from 'native-base';
import {NimSession} from 'react-native-netease-im';
import { connect } from 'react-redux'
import md5 from '../utils/md5';
import { getUser } from '../reducers/user/actions'
import { login } from '../reducers/app/actions'

const {height,width} = Dimensions.get('window');
class Login extends Component {
  static navigatorStyle = {
    statusBarColor: '#fff'
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

    dispatch(login(username, password)).then(res => {
      dispatch(getUser())
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
        <View style={[styles.inputView,{borderTopWidth:borderWidth,borderTopColor:'#ccc'}]}>
          <Text style={styles.inputLabel}>账户</Text>
          <TextInput
            style={styles.textViewStyle}
            value={this.state.name}
            underlineColorAndroid="transparent"
            placeholder="请输入帐号"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={username => {
              this.setState({username});
            }}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>密码</Text>
          <TextInput
            style={styles.textViewStyle}
            value={this.state.password}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="请输入密码"
            onChangeText={password => {
              this.setState({password});
            }}
          />
        </View>
      </View>
    );
  }
  render() {
    const { showModal, push } = this.props.navigator
    return (
      <Container>
        <Content alwaysBounceVertical={false}>
          {this._renderContent()}
          <View style={styles.bottom}>
            <Button style={styles.button} block
                    onPress={() => this.login()}>
              <Text style={styles.buttonText}>登录</Text>
            </Button>
            <Button style={styles.button} block
                    onPress={() => showModal({
                      screen: 'Koe.Register',
                      title: '注册',
                    })}>
              <Text style={styles.buttonText}>前往注册</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({...state.app}))(Login)


const borderWidth = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop:height/2-150,
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
    marginBottom: 10
  },
  buttonText: {
    color: '#fff'
  },
});
