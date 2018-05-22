import React, { Component } from 'react';
import { Text, Image,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import { GiftedChat } from 'react-native-gifted-chat'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '即时资讯',
    }
  };
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
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  render() {
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

