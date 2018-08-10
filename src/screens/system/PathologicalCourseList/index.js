import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { getCourseOfDiseaseList } from '../../../reducers/system/actions'
import { randomString } from '../../../utils'

import styles from './style'

const { width, height } = Dimensions.get('window');


class Symptom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    for(let key = 0; key < 40; key ++) {
      this.state.data.push({key: randomString(4)})
    }
    console.log(this.state)
  }



  componentDidMount() { }
  async componentWillMount() {
    const { dispatch, symptom, position } = this.props
    const data = {
      hospitalId: symptom ? symptom.MerchantID : 1001,
      clayCode: 'man',
      positionCode: position ? position.ItemCode : '1',
      symptomCode: symptom ? symptom.ItemCode : '1'
    }

    // 获取病理病程
    await dispatch(getCourseOfDiseaseList(data))
  }
  componentWillUnmount() { }

  addListDataKey(option, key = 'ItemName') {
    return option && option.map(item => ({...item, key: item[key]}))
  }

  complicationOnPress(complication) {
    const { navigator, dispatch } = this.props

    this.props.onClose(complication)
    /*dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'pathological',
        value: complication
      }
    })*/
    // navigator.push({screen: 'Koe.Complication'})
  }
  render() {
    let { pathologicalCourseList } = this.props
    pathologicalCourseList = this.addListDataKey(pathologicalCourseList)

    return (
      <View style={styles.container}>
        <View style={styles.rightContent}>
          <FlatList
            data={pathologicalCourseList}
            renderItem={({item, index}) => (
              <TouchableNativeFeedback
                onPress={() => this.complicationOnPress(item)}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={[styles.list, styles.listRight]}>
                  <Text style={styles.text}>病理病程{index}</Text>
                </View>
              </TouchableNativeFeedback>
            )}
          />
        </View>
      </View>
    );
  }
}

Symptom.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    drawerLabel: '病理病程',
  }
};

export default connect(state => ({
  ...state.system,
  consult: state.user.consult
}))(Symptom)