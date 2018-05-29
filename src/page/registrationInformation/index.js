import React, { Component } from 'react';
import { Text, FlatList, TextInput, View, Dimensions } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import registrationAction from '../../action/registration'
import userAction from '../../action/user'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import behavior from './behavior'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window')

class RegistrationInformation extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(userAction.loadUser('322717145007458'))
    dispatch(registrationAction.getRegistration({start: '2018-05-18 00:00', end: '2018-05-29 23:59'}))
  }
  componentWillUnmount() { }

  registration() {
    let { user, expert, dispatch } = this.props
    dispatch(registrationAction.postRegistration())
    this.props.navigation.goBack()
  }
  render() {
    let { user, expert, dispatch } = this.props
    let userMessage = user && behavior.createUserMessage(user)
    registration = expert && behavior.createRegistration(expert)

    console.log(this.props)

    return (
      <View style={styles.container}>
        <Card title="专家信息" style={styles.registration}>
          <FlatList
            style={{width, marginBottom: 15}}
            data={registration}
            renderItem={(item) => this._renderCardItem(item)}
          />
        </Card>
        <Card title="我的预约" style={styles.userMessage}>
          <FlatList
            keyboardShouldPersistTaps="always"
            style={{width}}
            data={userMessage}
            renderItem={(item) => this._renderItem(item)}
          />
        </Card>
        <View style={{padding: 10}}>
          <Button style={{borderRadius: 4}}
            onPress={() => this.registration()}
            text="预约"/>
        </View>
      </View>
    );
  }

  _renderCardItem(option) {
    return (
      <View style={styles.cardList}>
        <View style={styles.label}>
          <Text style={[styles.labelFont, {lineHeight: 40}]}>{option.item.title}</Text>
        </View>
        <View style={styles.messageContent}><Text style={styles.contentFont}>{option.item.text}</Text></View>
      </View>
    )
  }
  _renderItem(option) {

    return (
      <View style={styles.list}>
        <View style={styles.label}>
          <Text style={styles.labelFont}>{option.item.title}</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.contentFont}
            placeholder={option.item.text}
          />
        </View>
      </View>
    )
  }
}

RegistrationInformation.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  // console.log(navigationOptions)
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text>{ TITLE }</Text>
        </View>
      )
    },
  }
};

export default connect(state => ({
  ...state.system,
  ...state.user.user,
  ...state.user.registration,
  ...state.hospital.expert,
}))(RegistrationInformation)

