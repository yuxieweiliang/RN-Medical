import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import { connect } from 'react-redux'
import { getPathologicalList, pathologicalChange } from '../../reducers/pathological/actions'
import { randomString } from '../../utils'

import styles from './style'

const { width, height } = Dimensions.get('window');


class PathologicalList extends React.Component {
  static navigatorStyle = {
    title: '病理病程',
    tabBarHidden: true,
  }
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    for(let key = 0; key < 40; key ++) {
      this.state.data.push({key: randomString(4)})
    }
    // console.log(this.state)
  }



  componentDidMount() { }

  componentWillMount() {
    const { dispatch, symptom, bodyPosition } = this.props
    const hospitalId = symptom ? symptom.MerchantID : 1001
    const positionCode = bodyPosition ? bodyPosition.ItemCode : '1'
    const symptomCode = symptom ? symptom.ItemCode : '1'

    // 获取病理病程
    dispatch(getPathologicalList({ hospitalId, clayCode: 'man', positionCode, symptomCode }))
  }
  componentWillUnmount() { }

  complicationOnPress(option) {
    const { navigator, dispatch } = this.props

    navigator.pop()
    navigator.push({
      screen: 'Koe.System.Complication',
      title: '并发症',
    })

    dispatch(pathologicalChange(option))
    console.log('Koe.System.Complication')
  }
  render() {
    let { pathologicalList } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.rightContent}>
          <List
            dataArray={pathologicalList}
            renderRow={(item) => (
              <Item
                onPress={() => this.complicationOnPress(item)} style={{padding: 10}}>
                <Text style={styles.text}>{item.ItemName}</Text>
              </Item>
            )}
          />
        </View>
      </View>
    );
  }
}


export default connect(state => ({
  ...state.pathological,
  ...state.symptom,
  ...state.bodyPosition,
}))(PathologicalList)