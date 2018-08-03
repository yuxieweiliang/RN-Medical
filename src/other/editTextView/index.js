import React, { Component } from 'react';
import { Text, Dimensions, TextInput, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '健康指标',
    }
  };

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={{ width, }}>
          <TextInput onChangeText={(text) => this.setState({text})}/>
          <View style={{ height: 200, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('User', {
                text: this.state.text
              })}
              style={{ width, flexDirection: 'row' }}>
              <Text style={{ width: '50%',fontSize: 16 }}>保存</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack('')}
              style={{ width, flexDirection: 'row' }}>
              <Text style={{ width: '50%',fontSize: 16 }}>取消</Text>
            </TouchableOpacity>


          </View>

        </View>
      </View>



    );
  }
}

