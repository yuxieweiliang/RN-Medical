import React, { Component } from 'react';
import { View,Image,TextInput,StyleSheet,Text,Dimensions} from 'react-native';
import { Container, Content, Button, Icon,ListItem,Left,Right } from 'native-base';
import {NimSession} from 'react-native-netease-im';
import { connect } from 'react-redux'
import md5 from '../utils/md5';
import { login } from '../reducers/app/actions'

const {height,width} = Dimensions.get('window');
class Login extends Component {
  static navigatorStyle = {
    statusBarColor: '#fff'
  };
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      password: ''
    };
  }
  componentWillUnmount() {
    //清除密码
    this.setState({password: ''});
  }
  componentWillReceiveProps(nextProps) {
    const { token, navigator } = nextProps

    /**
     * 如果token值存在
     * 证明登陆成功
     */
    /*if(token) {
      navigator.resetTo({
        screen:'Koe.AppHome',
        title:"主页"
      });
    }*/
  }
  async loginIn() {
    const { navigator } = this.props;
    let query = {
      username: 'loginname|1001|xueyufei',
      password: 'xyf.3342',
    }
    // let nim = await NimSession.login(this.state.name,this.state.password)



    NimSession
      .login('test', 'asdf1234')
      .then(() => {

        global.imaccount = this.state.name;

        /**
         * 登陆
         */
        login(query).then(res => {
          console.log(res)
          navigator.resetTo({
            screen:'Koe.AppHome',
            title:"主页"
          });
        })

      })
      .catch(error => console.log(error))
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
            onChangeText={name => {
              this.setState({name});
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
    console.log(this.props)
    console.log('-----------------')
    return (
      <Container>
        <Content alwaysBounceVertical={false}>
          {this._renderContent()}
          <View style={styles.bottom}>
            <Button block onPress={() => this.loginIn()}>
              <Text style={styles.buttonText}>登录</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({...state.system}))(Login)


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
  buttonText: {
    color: '#fff'
  },
});
