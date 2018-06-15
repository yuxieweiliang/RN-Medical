import React, { Component } from 'react';
import { Text, Image,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux'
// import { GiftedChat } from 'react-native-gifted-chat' // 聊天插件
import styles from './style'


const TITLE = '即时资讯'
class GiftedChatPage extends React.Component {
  state = {
    messages: [],
  }
  componentDidMount() {}

  _onPressButton() {
    /*this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })*/
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  componentWillMount() {

    /*const { dispatch, user, consult, consultMessage } = this.props
    if(user && !consultMessage) {
      dispatch(consultAction.postConsult(user.UserID))
    } else {
      dispatch(consultAction.postAdviceMessage('7ff26839b0cf4e0ea4e6c9f35fe15960'))
    }*/
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    /*this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))*/
  }
  render() {
    return (

      <View
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
    /*
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );*/
  }
}

GiftedChatPage.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: TITLE,
  }
};

export default connect(state => ({
  ...state.user.user,
  ...state.consult,
}))(GiftedChatPage)