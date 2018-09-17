import React, { Component } from 'react';
import { Text, TouchableHighlight, WebView, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'

// 获取症状列表
import { getSymptomList, symptomChange } from '../../reducers/symptom/actions'

// 更换 身体部位
import { bodyPositionChange, getPositionList } from '../../reducers/bodyPosition/actions'
import moment from 'moment'
// import behavior from './behavior'

const TITLE = '症状'
const { width, height } = Dimensions.get('window');
const time = moment().format();

class Symptom extends React.Component {
  static navigatorStyle = {
    title: TITLE,
    tabBarHidden: true,
  }
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() { }
  async componentWillMount() {
    const { dispatch } = this.props

    dispatch(getPositionList({
      merchantId: 1001,
      itemType: '部位',
      parentItemCode: 0
    }))
  }
  componentWillUnmount() { }

  /**
   * 跳转到 病理病程
   * @private
   */
  _onPressSymptomList(symptom) {
    const { navigator, dispatch } = this.props
    this.props.dispatch(symptomChange(symptom))
    this.props.navigator.push({
      screen: 'Koe.System.PathologicalList',
      title: '病理病程',
    })
  }


  /**
   * 修改当前袖中的身体部位
   * @param data
   */
  bodyPositionItemChange(data) {
    this.props.dispatch(bodyPositionChange(data))
    this.setState({showList: true})
    this.props.dispatch(getSymptomList({
      hospitalId: 1001,
      clayCode: 'man',
      positionCode: data.ItemCode
    }))
  }
  // 向 WebView 发送的数据
  bodyPositionChange(e) {
    let text = e.nativeEvent.data;

    this.props.bodyPositionList.map(item => {
      if(item.ItemName === text) {
        this.bodyPositionItemChange(item)
      }
    })

  }
  render() {

    let { bodyPositionList, symptomList } = this.props

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


    return (
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <List
            dataArray={bodyPositionList}
            renderRow={item => (
              <Item
                style={{backgroundColor: item.active ? '#403faa' : '#fafafa', padding: 10}}
                onPress={() => this.bodyPositionItemChange(item)}>
                <Text
                  style={{color: item.active ? '#fafafa' : '#555'}}>
                  {item.ItemName}
                  </Text>
              </Item>
            )}
          />
        </View>
        <View style={styles.rightContent}>
          {
            this.state.showList
              ? (
              <List
                dataArray={symptomList}
                renderRow={(item) => {
                  console.log('------------', symptomList, this.props)
                  return (
                    <Item onPress={() => this._onPressSymptomList(item)} style={{padding: 10}}>
                      <Text style={styles.text}>{item.ItemName}</Text>
                    </Item>
                  )
                }}
              />
            )
              : (
              <Tabs>
                <Tab heading="女性" style={{ paddingTop: 10}}>
                  <WebView
                    {...webViewSet}
                    style={styles.scroll}
                    source={{uri: 'http://10.0.0.33:8011/bodyParts/woman.html?' + time}}
                    onMessage={(e) => this.bodyPositionChange(e)}
                  />
                </Tab>
                <Tab heading="男性">
                  <WebView
                    {...webViewSet}
                    style={styles.scroll}
                    source={{uri: 'http://10.0.0.33:8011/bodyParts/man.html?' + time}}
                    onMessage={(e) => this.bodyPositionChange(e)}
                  />
                </Tab>
                <Tab heading="小孩">
                  <WebView
                    {...webViewSet}
                    style={styles.scroll}
                    source={{uri: 'http://10.0.0.33:8011/bodyParts/boy.html?' + time}}
                    onMessage={(e) => this.bodyPositionChange(e)}
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

export default connect(state => ({
  ...state.bodyPosition,
  ...state.symptom,
}))(Symptom)