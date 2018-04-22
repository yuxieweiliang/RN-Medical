import React, { Component } from 'react';
import { Text, TouchableHighlight, WebView, View, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../components/TabCardView/index'
import { connect } from 'react-redux'
import at from './action'


class HomePage extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // console.log(navigationOptions)
    return {
      headerLeft: navigationOptions.headerLeft(navigation, navigationOptions),
      headerRight: (
        <View style={{width: 70, paddingRight: 15, alignItems: 'flex-end'}}>
          <Icon name="commenting-o" style={{fontSize: 30, color: '#fff'}}/>
        </View>
      ),
      headerTitle: navigationOptions.headerTitle(navigation, navigationOptions, '首页'),
      // title: <View><Icon name="home"/><Text>首页</Text></View>,
      // tabBarVisible: false,
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (
      <View style={{width: 20, height: 20, borderWidth: 1, borderColor: 'red'}}>
        <Image
          source={require('../../../assets/images/a1.jpg')}
          style={[styles.icon, {tintColor: '#fff'}]}
        />
      </View>
      ),
      showIcon: true

    }
  };

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(at.login())
  }
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
    const { tabCardData }= this.props
    const tabItemStyle= {width, height: 200, padding: 15}

    return (

      <ScrollView style={styles.slide1}>

        <WebView
          automaticallyAdjustContentInsets={false}
          style={{width, height: 300, }}
          source={{uri: 'http://henhaomai.top:8011'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />

        <View style={{ flex: 1 }}>

          <TabCardView {...tabCardData}>
            {
              tabCardData.dataSource && tabCardData.dataSource.map((item,i) => (
                <View key={i} style={tabItemStyle}>
                  <Text style={{fontSize: 16}}>{item.context.text}</Text>
                  <TouchableHighlight
                    style={{width: width - 30, height: 40, backgroundColor: '#ccc', borderRadius: 10, alignItems: 'center', marginTop: 20}} underlayColor="#eee">

                    <Text style={{height: 40, lineHeight: 40, fontSize: 16}}>
                      {item.context.button}
                    </Text>

                  </TouchableHighlight>
                </View>
              ))
            }
          </TabCardView>

        </View>
      </ScrollView>

    );
  }
}


const createState = function(state) {
  return ({...state.loginIn})
}

export default connect(createState)(HomePage)