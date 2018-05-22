import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import ac from './action'
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
        <Text style={styles.text}>{value}</Text>
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
    const { dispatch, navigation } = this.props
    let token = await storage.load('token')
    console.log('token', token)
    if(token) {
      dispatch(ac.loadUser())
    } else {
      navigation.navigate('Login')
    }

  }
  componentWillMount() {
    const { dispatch } = this.props
    this.beforeMount()

    dispatch({
      type: 'CHANGE_USER'
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    const { hospital, hospital_original } = this.props
    const tabItemStyle= {width, height: 200}
    console.log(this.props)
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
            <Text style={styles.label}>{hospital_original.UserName}</Text>
          </View>
        </View>
        {
          hospital && (
            hospital.map((items, key) => {
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
  saveUserMessage() {
    const { dispatch, user } = this.props
    dispatch(ac.saveUserMessage(user))
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
  return state.hospital
}
export default connect(createState)(UserMessagePage)