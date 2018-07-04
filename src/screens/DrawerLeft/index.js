import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar  } from 'react-native';
const { width, height } = Dimensions.get('window');


export default class DrawerExample extends Component {

  render() {
    return (
      <View navigator={this.props.navigator} style={{
        width: width * .7 ,
        height: height - 25,
        backgroundColor: '#fafafa',
        /*borderColor: 'red',
        borderWidth: 1*/
      }}>
        <Text>fdsafdsafdsafdsa</Text>
      </View>
    );
  }
}