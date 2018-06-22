import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Image, TouchableOpacity, Text, TouchableHighlight, Dimensions, View, ImageBackground, TextInput, Animated, StatusBar } from 'react-native';
import ImageEnlarge from '../../../components/ImageEnlarge'
import ac from './action'
import styles from './style'
import { SYSTEM } from '../../type'
import moment from 'moment'
const { width, height } = Dimensions.get('window');


type State = {
  scrollY: Animated.Value,
};
type Props = {};
class LoginPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      logo: {
        url: require('../../../assets/images/icon.png'),
        width: 200,
        height: 200
      },
      username: null,
      password: null,
    }
    this.imageHeight = new Animated.Value(200);
  }

  _login() {
    const { dispatch, navigation } = this.props

    dispatch(ac.login(this.state))
      .then(res => {
        navigation.navigate('Home')
        console.log(res)
      })
      .catch(error => alert('登陆失败！'))
  }

  componentWillMount () {

    // this._login()
    // this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.call(this));
    // this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.call(this));

  }

  componentWillUnmount() {
    // this.keyboardDidShow.remove();
    // this.keyboardDidHide.remove();
  }

  keyboardWillShow = (event) => {
    let { logo } = this.state
    logo.height = 100
    logo.width = 100
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 100,
      toValue: 100,
    }).start();
  };

  keyboardWillHide = (event) => {
    let { logo } = this.state
    logo.height = 200
    logo.width = 200
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 100,
      toValue: 200,
    }).start();
  };
  componentDidMount() {

  }
  returnIcon(){
    this.props.navigation.goBack()
  }
  render() {
    const underlayOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });


    console.log()
    return (
      <ImageBackground style={styles.container} source={require('../../../assets/images/bg.jpg')} resizeMode='cover'>
        <View
          style={[{
            top: 0,
            left: 0,
            right: 0,
            height: StatusBar.currentHeight
          }]}
        />
       {/* <View style={styles.returnBox}>
          <TouchableOpacity onPress={() => this.returnIcon()}>
            <View style={styles.returnIconBox}>
              <Icon style={styles.returnIcon} name="angle-left"/>
              <Text style={styles.returnIconFont}>返回</Text>
            </View>
          </TouchableOpacity>
        </View>*/}

        <Animated.View style={[styles.logoBox, { height: this.imageHeight }]}>
          <ImageEnlarge
            style={{height: 200, width: 200}}
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
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          translucent={true}
          backgroundColor={'transparent'}
        />
      </ImageBackground>
    );
  }
}

export default connect((state) => state.login)(LoginPage)