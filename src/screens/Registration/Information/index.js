import React, { Component } from 'react';
import { Text, FlatList, TextInput, View, Dimensions } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import { getRegistration, postRegistration } from '../../../reducers/registration/actions'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import ListInput from '../../../components/ListInput'
import behavior from './behavior'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window')

class RegistrationInformation extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getRegistration({start: '2018-05-18 00:00', end: '2018-05-29 23:59'}))
  }
  componentWillUnmount() { }

  registration() {
    let { user, expert, dispatch } = this.props
    // dispatch(postRegistration())
    this.props.navigator.popToRoot()
  }
  onChangeText() {

  }
  render() {
    let { user, expert, dispatch } = this.props
    let userMessage = user && behavior.createUserMessage(user)
    registration = behavior.createRegistration(expert)

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
            renderItem={({ item }) => {
              return (
                <ListInput
                  onChangeText={this.onChangeText}
                  title={item.title}
                  value={item.text}/>
              )
            }}
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
            style={styles.inputFont}
            placeholder={option.item.text}
          />
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  ...state.user,
  ...state.registration,
}))(RegistrationInformation)

