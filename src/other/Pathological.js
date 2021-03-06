import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import { getCourseOfDiseaseList } from '../../../reducers/system/actions'
function randomString(len) {
  len = len || 32;
  let $chars = 'ABCDEFGHIJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  let maxPos = $chars.length;
  let pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

class Symptom extends React.Component {
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
  async componentWillMount() {
    const { dispatch, symptom, position } = this.props
    const data = {
      hospitalId: symptom ? symptom.MerchantID : 1001,
      clayCode: 'man',
      positionCode: position ? position.ItemCode : '1',
      symptomCode: symptom ? symptom.ItemCode : '1'
    }


    // 获取症状
    await dispatch(getCourseOfDiseaseList(data))
  }
  componentWillUnmount() { }

  addListDataKey(option, key = 'ItemName') {
    return option && option.map(item => ({...item, key: item[key]}))
  }

  complicationOnPress(complication) {
    const { navigator, dispatch } = this.props

    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'pathological',
        value: complication
      }
    })
    navigator.push({screen: 'Koe.Complication'})
  }
  render() {
    let { courseDiseaseList } = this.props
    courseDiseaseList = this.addListDataKey(courseDiseaseList)

    return (
      <View style={styles.container}>
        <View style={styles.rightContent}>
          <FlatList
            data={courseDiseaseList}
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
    const tabItemStyle= {width, height: 200}
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