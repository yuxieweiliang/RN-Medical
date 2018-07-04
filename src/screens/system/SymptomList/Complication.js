import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, FlatList, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import { getComplicationList } from '../../../reducers/system/actions'
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
    console.log(this.state)
  }



  componentDidMount() { }
  componentWillMount() {
    const { dispatch } = this.props

    // 获取并发症
    dispatch(getComplicationList({
      hospitalId: 1001,
      clayCode: 'man',
      positionCode: 1,
      symptomCode: 1,
      complicationCode: 1
    }))
  }

  componentWillUnmount() { }

  complicationOnPress(complication) {
    const { navigator, dispatch } = this.props

    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'complication',
        value: complication
      }
    })
    navigator.popToRoot()
  }
  render() {
    let { complicationList } = this.props
    complicationList = complicationList && complicationList.map(item => ({...item, key: item.ItemName}))
    return (
      <View style={styles.container}>
        <View style={styles.rightContent}>
          <FlatList
            data={complicationList}
            renderItem={({item, index}) => (
              <TouchableNativeFeedback
                                       onPress={() => this.complicationOnPress(item)}
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

Symptom.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    drawerLabel: '并发症',
  }
};

export default connect(state => ({
  ...state.system,
  consult: state.user.consult
}))(Symptom)