import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import behavior from './behavior'
import userAction from '../../action/user'
import systemAction from '../../action/system'
import styles from './style'
import storage from '../../storage'
const { width, height } = Dimensions.get('window');


const InputList = ({title, onChangeText, value, placeholder, isRequest}) => {
  return (
    <View
      title="Go to Details"
      onPress={() => this.props.navigation.goBack()}
    >
      <View style={styles.list}>
        <Text style={styles.label}>{title}：</Text>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          defaultValue={value}/>
        <Text style={styles.goto}>
          {
            isRequest ? '*' : ''
          }
        </Text>
      </View>
    </View>
  )
}

class UserMessagePage extends React.Component {
  componentDidMount() {

  }

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }

  async beforeMount() {
    let { dispatch, navigation, token } = this.props
    if(!token) {
      token = await dispatch(systemAction.loadToken())
    }

    console.log('token', token, this.props)

    if(token) {
      dispatch(userAction.loadUser('322717145007458'))
    } else {
      navigation.navigate('Login')
    }
  }
  componentWillMount() {
    const { dispatch } = this.props
    this.beforeMount()
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  onChangeText(text, key) {
    const { dispatch } = this.props
    dispatch({
      type: 'CHANGE_USER_MESSAGE',
      text,
      key
    })
    // this._onPressButton.remove();
  }
  saveUserMessage() {
    const { dispatch, user } = this.props
    dispatch(behavior.saveUserMessage(user))
  }
  render() {
    const { user = {} } = this.props
    const userStructure = behavior.createStructure(user)

    return (
      <View style={styles.container}>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.userCard}>
            <Image
              style={{width: 60, height: 60, borderRadius: 30}}
              source={require('../../../assets/images/a1.jpg')}/>
            <Text style={styles.label}>{message.UserName}</Text>
          </View>
        </View>
        {
          userStructure && (
            userStructure.map((items, key) => {
            return (
              <InputList
                key={items.key+ key}
                title={items.title}
                value={items.value}
                onChangeText={(text) => this.onChangeText(text, key)}
                placeholder="请输入"
              />
            )
          })
          )
        }
        <TouchableHighlight
          onPress={() => this.saveUserMessage()}>
          <Text>保存</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

UserMessagePage.navigationOptions = ({ navigation, navigationOptions }) => {
  const { headerLeft, headerRight, headerTitle } = navigationOptions;
  const { params } = navigation.state;
  return {
    headerLeft: headerLeft && headerLeft(navigation, navigationOptions),
    headerRight: headerRight && headerRight(navigation, navigationOptions),
    headerTitle: headerTitle && headerTitle(navigation, navigationOptions, '个人'),
    title: '我的',
    // tabBarVisible: false,
  }
}

const createState = state => {
  return {
    ...state.user.user,
    ...state.system
  }
}
export default connect(createState)(UserMessagePage)