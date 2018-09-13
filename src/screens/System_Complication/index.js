import React, { Component } from 'react';
import { Text, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import { getComplicationList, complicationChange } from '../../reducers/complication/actions'


class Symptom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    // console.log(this.state)
  }

  componentDidMount() { }
  componentWillMount() {
    const { dispatch, symptom, bodyPosition, pathological } = this.props
    const hosId = symptom ? symptom.MerchantID : 1001
    const posCode = bodyPosition ? bodyPosition.ItemCode : '1'
    const symCode = symptom ? symptom.ItemCode : '1'
    // const pathological = pathological ? pathological.ItemCode : '1'

    // 获取并发症
    dispatch(getComplicationList(hosId, posCode, symCode, 1))
  }

  componentWillUnmount() { }

  complicationOnPress(option) {
    const { navigator, dispatch } = this.props

    dispatch(complicationChange(option))
    navigator.popToRoot()

  }
  render() {
    let { complicationList } = this.props

    console.log('complicationList', complicationList)

    return (
      <View style={styles.container}>
        <View style={styles.rightContent}>
          <List
            dataArray={complicationList}
            renderRow={(item) => (
              <Item
                onPress={() => this.complicationOnPress(item)}>
                <View style={[styles.list, styles.listRight]}>
                  <Text style={styles.text}>{item.ItemName}</Text>
                </View>
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
  ...state.complication,
}))(Symptom)