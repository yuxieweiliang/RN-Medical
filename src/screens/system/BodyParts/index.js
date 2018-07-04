import React, { Component } from 'react';
import { Text, Dimensions,WebView, View, Button, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux'
import systemAction from '../../../reducers/consult/actions'
import { getPositionList, getCommonDicList } from '../../../reducers/system/actions'
import TabCardView from '../../../components/TabCardView/index'
import styles from './style'


const { width, height } = Dimensions.get('window');

const bodyParts = {
  headerStyle: {
    height: 50,
    backgroundColor: '#fafafa',
  },
  containerStyle: {
    height: height - 80,
    borderWidth: 1,
  },
  bodyStyle: {
    height: height - 180,
    paddingLeft: 15,
    paddingRight: 15
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
class BodyParts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    }
    this.data = 0;
  }

  componentDidMount() {}
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getPositionList({
      merchantId: 1001,
      itemType: '部位',
      parentItemCode: 0
    }))
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  // 从 WebView 接收的数据
  sendMessage() {
    this.refs.webview.postMessage(++this.data);
  }

  // 向 WebView 发送的数据
  handleMessage(e) {
    const { navigator, dispatch, bodyPartsList } = this.props

    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'position',
        value: bodyPartsList[0]
      }
    })
    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'clayCode',
        value: 'man'
      }
    })
    navigator.push({screen: 'Koe.SymptomList'})
    this.setState({webViewData: e.nativeEvent.data});
  }
  render() {
    const webViewSet = {
      automaticallyAdjustContentInsets: true,
      javaScriptEnabled: true,
      domStorageEnabled: true,
      decelerationRate: 'normal',
      startInLoadingState: true,
    }
    console.log( this.props)
    return (

      <View style={styles.container}>
        <TabCardView {...bodyParts}>
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.33:8011/bodyParts/man.html?3'}}
            onMessage={(e) => {
              this.handleMessage(e)
            }}
          />
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.33:8011/bodyParts/woman.html'}}
            onMessage={(e) => {
              this.handleMessage(e)
            }}
          />
          <WebView
            {...webViewSet}
            style={styles.scroll}
            source={{uri: 'http://10.0.0.33:8011/bodyParts/boy.html'}}
            onMessage={(e) => {
              this.handleMessage(e)
            }}
          />
        </TabCardView>
      </View>
    );
  }
}

/*BodyParts.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: '身体部位',
  }
};*/

export default connect(state => ({
  ...state.system,
  ...state.consult,
}))(BodyParts)