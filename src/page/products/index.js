import React, { Component } from 'react';
import {
  Platform, StyleSheet, Image,
  Text, TouchableHighlight , View, TextInput,
  DrawerLayoutAndroid, Button, Dimensions, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { navigation } from 'react-navigation';
import styles from './style'

const { width, height } = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // console.log(navigation)
    return {
      title: params ? params.otherParam : 'product',
      headerLeft: <View style={{
        width: 60,
      }}>
        <Icon name="bars" style={{alignSelf: 'center'}} size={30} color="#fff" />
      </View>,
    }
  };
  _onPressButton() {
    this.props.navigation.goBack()
  }

  // 当组建销毁时调用
  componentWillUnmount() {
    /// this._onPressButton.remove()
  }
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          {/*<Image
            source={require('../../icon.jpg')}
          />*/}
          <Text style={styles.welcome}>
            注册 | 登陆
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid="transparent"
            placeholder="用户名"
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid="transparent"
            placeholder="密码"
            value={this.state.password}
          />
          <TouchableHighlight style={styles.button} onPress={() => this._onPressButton()}>
            <Text>按钮</Text>
          </TouchableHighlight>

          <Button title="Learn More" style={styles.button} onPress={() => this._onPressButton()}
                  color="#841584"/>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}


