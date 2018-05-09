import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      drawerLabel: 'Notifications',
    }
  };

  componentDidMount() {

  }

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
    const tabItemStyle= {width, height: 200}
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
            <Text style={styles.label}>张女士</Text>
          </View>
        </View>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>姓名：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="胡汉三"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>性别：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="不明"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>证件号码：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="61011424853945285815"/>
            <Text style={styles.goto}>*</Text>
          </View>
        </View>
        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>关注医院：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="西京医院"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>关注病种：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="营养"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>身高：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="185"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>
        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={styles.list}>
            <Text style={styles.label}>家属手机：</Text>
            <TextInput style={styles.text} underlineColorAndroid="transparent" value="1253483487"/>
            <Text style={styles.goto}></Text>
          </View>
        </View>

      </View>
    );
  }
}

