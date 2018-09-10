import React, { Component } from 'react';
import { Text, Dimensions,WebView, View, Button, TouchableNativeFeedback } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import { connect } from 'react-redux'
// import systemAction from '../../../reducers/consult/actions'
import { getPositionList, getCommonDicList } from '../../../reducers/system/actions'
import TabCardView from '../../../components/TabCardView/index'
import styles from './style'
import moment from 'moment'


const { width, height } = Dimensions.get('window');
const time = moment().format();

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
    const { navigator, dispatch, bodyPositionList } = this.props
    let text = e.nativeEvent.data;
    let option = null;


    console.log(e.nativeEvent)

    if(bodyPositionList && bodyPositionList.length > 0) {
      bodyPositionList.map(item => {
        if(item.ItemName === text) {
          option = item
        }
      })
    }

    console.log(this.props)

    if(option) {
      this.props.onClose(bodyPositionList[0])
    }

    // this.props.onClose(bodyPositionList[0])

    /*dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'clayCode',
        value: 'man'
      }
    })*/
    // navigator.push({screen: 'Koe.SymptomList'})
    // this.setState({webViewData: e.nativeEvent.data});
  }
  render() {
    const webViewSet = {
      // 自动调整内容集
      automaticallyAdjustContentInsets: false,
      // 开启js
      javaScriptEnabled: true,
      // 指定是否开启DOM本地存储。
      domStorageEnabled: true,
      // 指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。
      decelerationRate: 'normal',
      // 强制WebView在第一次加载时先显示loading视图。默认为true。
      startInLoadingState: true,
    }
    // console.log(this)
    return (
      <Container>
        <Tabs>
          <Tab heading="女性" style={{ paddingTop: 10}}>
            <WebView
              {...webViewSet}
              style={styles.scroll}
              source={{uri: 'http://10.0.0.33:8011/bodyParts/woman.html?' + time}}
              onMessage={(e) => {
                this.handleMessage(e)
              }}
            />
          </Tab>
          <Tab heading="男性">
            <WebView
              {...webViewSet}
              style={styles.scroll}
              source={{uri: 'http://10.0.0.33:8011/bodyParts/man.html?' + time}}
              onMessage={(e) => {
                this.handleMessage(e)
              }}
            />
          </Tab>
          <Tab heading="小孩">
            <WebView
              {...webViewSet}
              style={styles.scroll}
              source={{uri: 'http://10.0.0.33:8011/bodyParts/boy.html?' + time}}
              onMessage={(e) => {
                this.handleMessage(e)
              }}
            />
          </Tab>
        </Tabs>
      </Container>
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