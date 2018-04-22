import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Button, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TabCardView from '../../../components/TabCardView/index'
const { width, height } = Dimensions.get('window');


const tabCardData = {
  headerStyle: {
    height: 40,
    backgroundColor: '#fafafa',
  },
  containerStyle: {
    height: 400
  },
  dataSource: [
    {
      active: true,
      title: '留言',
      context: {
        text: 'fdsafdasfdsafdsafdsafdsafdsa'
      }
    },{
      title: '即时消息',
      context: {
        text: 'ddddddddddddddddddd'
      }
    },{
      title: '视频问诊',
      context: {
        text: 'aaaaaaaaaaaaaaaaaaa'
      }
    },
  ],
  tabChange(index, item) {
    console.log(index, item)
  }
}


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerLeft: navigationOptions.headerLeft(navigation, navigationOptions),
      headerRight: navigationOptions.headerRight(navigation, navigationOptions),
      headerTitle: navigationOptions.headerTitle(navigation, navigationOptions, '咨询'),
      // title: <View><Icon name="home"/><Text>咨询</Text></View>,
      // tabBarVisible: false,
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
    const tabItemStyle= {width, height: 200, padding: 15}
    return (
      <View style={styles.slide1}>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>医院：</Text>
            <Text style={{flex:1}}>西京医院</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>病种：</Text>
            <Text style={{flex:1}}>心脑血管疾病</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>专家：</Text>
            <Text style={{flex:1}}>张三</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>


        <View style={{width, height: 200}}>
          <TouchableNativeFeedback
            title="Go to Details"
            onPress={() => this.props.navigation.goBack()}
          >
            <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
              <Text>症状</Text>
              <Text style={{flex:1}}/>
            </View>
          </TouchableNativeFeedback>
          <View style={{padding: 15}}>
            <View>
              <Text>症状一：fdsafdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafdsa,fdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafdsafdsafdsafdsafdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafds</Text>
            </View>
          </View>
        </View>

        <TabCardView {...tabCardData}>
          <View style={tabItemStyle}><Text>1111111111111111111</Text></View>
          <View style={tabItemStyle}><Text>222222222222222222222222</Text></View>
          <View style={tabItemStyle}><Text>3333333333333333333333333333</Text></View>
        </TabCardView>
      </View>
    );
  }
}

