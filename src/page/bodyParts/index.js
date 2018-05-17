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
    height: 500
  },
  dataSource: [
    {
      active: true,
      title: '男性',
    },{
      title: '女性',
    },{
      title: '小孩',
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
    const webViewSet = {
      automaticallyAdjustContentInsets: true,
      javaScriptEnabled: true,
      domStorageEnabled: true,
      decelerationRate: 'normal',
      startInLoadingState: true,
    }
    return (

      <View style={styles.container}>
        <TabCardView {...bodyParts}>
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.98:8011/bodyParts/man.html'}}
          />
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.98:8011/bodyParts/woman.html'}}
          />
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.98:8011/bodyParts/boy.html'}}
          />
        </TabCardView>
      </View>



    );
  }
}

