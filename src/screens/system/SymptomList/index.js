import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import { getSymptomList } from '../../../reducers/system/actions'
// import behavior from './behavior'


const TITLE = '症状'
const { width, height } = Dimensions.get('window');

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
      data: []
    }
    for(let key = 0; key < 40; key ++) {
      this.state.data.push({key: randomString(4)})
    }
  }

  componentDidMount() { }
  async componentWillMount() {
    const { dispatch } = this.props
    dispatch(getSymptomList({
      hospitalId: 1001,
      clayCode: 'man',
      positionCode: 1
    }))

  }
  componentWillUnmount() { }

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }

  _onPressSymptomList(symptom) {
    const { navigator, dispatch } = this.props
    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'symptom',
        value: symptom
      }
    })
    navigator.push({screen: 'Koe.Pathological'})
  }
  render() {
    let { bodyPartsList, symptomList } = this.props
    bodyPartsList = bodyPartsList && bodyPartsList.map(item => ({...item, key: item.ItemName}))
    symptomList = symptomList && symptomList.map(item => ({...item, key: item.ItemName}))

    return (
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <FlatList
            data={bodyPartsList}
            renderItem={({item, index}) => (
              <TouchableNativeFeedback
                                       onPress={() => this.props.navigation.goBack()}
                                       background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={[styles.list, styles.listLeft]}>
                  <Text style={styles.label}>{item.ItemName}</Text>
                </View>
              </TouchableNativeFeedback>
            )}
          />
        </View>
        <View style={styles.rightContent}>
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