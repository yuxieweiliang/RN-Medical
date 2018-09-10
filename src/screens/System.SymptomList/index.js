import React, { Component } from 'react';
import { Text, TouchableHighlight, WebView, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import { getPositionList, getSymptomList } from '../../../reducers/system/actions'
import moment from 'moment'
// import behavior from './behavior'


const TITLE = '症状'
const { width, height } = Dimensions.get('window');
const time = moment().format();

function randomString(len) {
  len = len || 32;
  let $chars = 'ABCDEFGHIJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = $chars.length
  let pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

class Symptom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showList: false
    }
    for(let key = 0; key < 40; key ++) {
      this.state.data.push({key: randomString(4)})
    }
  }

  componentDidMount() { }
  async componentWillMount() {
    const { dispatch } = this.props

    dispatch(getPositionList({
      merchantId: 1001,
      itemType: '部位',
      parentItemCode: 0
    }))

    dispatch(getSymptomList({
      hospitalId: 1001,
      clayCode: 'man',
      positionCode: 1
    }))

  }
  componentWillUnmount() { }

  _onPressSymptomList(symptom) {
    const { navigator, dispatch } = this.props

    this.props.onClose(symptom)
    /*dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'symptom',
        value: symptom
      }
    })*/
  }

  // 向 WebView 发送的数据
  handleMessage(e) {
    const { navigator, dispatch, bodyPositionList, bodyPositionChange, changeBodyPositionOfList } = this.props
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
      this.setState({showList: true})

      bodyPositionChange(option)
      changeBodyPositionOfList(option)
      // this.props.onClose(bodyPositionList[0])
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
    let { bodyPositionList, symptomList } = this.props
    bodyPositionList = bodyPositionList && bodyPositionList.map(item => ({...item, key: item.ItemName}))
    symptomList = symptomList && symptomList.map(item => ({...item, key: item.ItemName}))

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


    console.log('-------------------------------------')
    return (
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <List
            dataArray={bodyPositionList}
            renderRow={item => (
              <Item style={{backgroundColor: item.active ? '#403faa' : '#fafafa'}} onPress={() => this.props.navigation.goBack()}>
                <View style={[styles.list, styles.listLeft]}>
                  <Text  style={{color: item.active ? '#fafafa' : '#555'}}>{item.ItemName}</Text>
                </View>
              </Item>
            )}
          />
        </View>
        <View style={styles.rightContent}>
          {
            this.state.showList
              ? (
              <FlatList
                data={symptomList}
                renderItem={({item, index}) => (
                  <TouchableNativeFeedback
                    onPress={() => this._onPressSymptomList(item)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={[styles.list, styles.listRight]}>
                      <Text style={styles.text}>{item.ItemName}</Text>
                    </View>
                  </TouchableNativeFeedback>
                )}
              />
            )
              : (
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
            )
          }


        </View>
      </View>
    );
    const tabItemStyle= {width, height: 200}
  }
}

/*Symptom.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    drawerLabel: TITLE,
  }
};*/

export default connect(state => ({...state.system}))(Symptom)