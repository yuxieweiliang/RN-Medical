import React, { Component } from 'react';
import { Text, Dimensions,WebView, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TabCardView from '../../../components/TabCardView/index'
const { width, height } = Dimensions.get('window');

const bodyParts = {
  headerStyle: {
    height: 50,
    backgroundColor: '#fafafa',
  },
  containerStyle: {
    height: 300
  },
  dataSource: [
    {
      active: true,
      title: '健康指标',
      context: {
        text: 'fdsafda生活生活生活生活sfdsafdsafdsafdsafdsa',
        button: '历时指标'
      }
    },{
      title: '生活指南',
      context: {
        text: '运动运动运动运动运动运动运动运动运动运动运动',
        button: '生活数据'
      }
    },{
      title: '健康状况',
      context: {
        text: '体征体征体征体征体征体征体征体征体征体征',
        button: ['体征趋势', '体征填写']
      }
    },
  ],
}
export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '身体部位',
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
          <View style={{ height, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ height: 50, width, flexDirection: 'row', alignItems: 'center' }}>
              <Text>身体部位</Text>
              <Text>身体部位</Text>
            </View>

            <View style={{ width, flex: 1 }}>

              <TabCardView {...bodyParts}>
                <WebView
                  automaticallyAdjustContentInsets={false}
                  style={styles.scroll}
                  source={{uri: 'http://10.0.0.98:8011'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  startInLoadingState={true}
                />
                <WebView
                  automaticallyAdjustContentInsets={false}
                  style={styles.scroll}
                  source={{uri: 'http://10.0.0.98:8011'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  startInLoadingState={true}
                />
                <WebView
                  automaticallyAdjustContentInsets={false}
                  style={styles.scroll}
                  source={{uri: 'http://10.0.0.98:8011'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  startInLoadingState={true}
                />
              </TabCardView>

            </View>

          </View>

        </View>
      </View>



    );
  }
}

