import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Header, Text, Button, Icon } from 'native-base';
import { themes } from '../config'

export default class HeaderView extends Component {

  onPressLeft() {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  }
  render() {
    const { onPressLeft = this.onPressLeft.bind(this), title, onPressRight, avatar, icon } = this.props

    return (
      <Header>

        <Button transparent onPress={onPressLeft}>
          <Image source={avatar} style={styles.image} />
        </Button>

        <View style={styles.title}>
          <Text style={styles.titleFont}>
            { title }
          </Text>
        </View>

        <Button
          transparent
          onPress={onPressRight}>
          <Icon name="ios-search" />
        </Button>

      </Header>
    );
  }
}


const styles = StyleSheet.create({
  image: {width: 36, height: 36, borderRadius: 18},
  title: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  titleFont: {color: '#fff'},
})
