import React, { Component } from 'react';
import { Text, Dimensions, ScrollView, View, TouchableNativeFeedback, Image } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');
import action from './action'
import Card from '../../../components/Card'
import { connect } from 'react-redux'
import { system } from '../../type'


class TelephoneInterviewData extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '电话访谈',
    }
  };

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
    // <Image style={{width: 30, height: 30, borderRadius: 15}} source={require('../../../assets/images/a7.jpg')}/>

  }
  render() {

    console.log(system)
    return (

      <ScrollView style={styles.container}>
        <View style={styles.doctor}>
          <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
            <Text style={{flex: 1}}>生活习惯第三次随访</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>张丫丫</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <Text style={{flex: 1}}>电话随访</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>2018-18-18</Text>
          </View>
        </View>

        <Card title="基本情况">
          <View  style={styles.basicSituation}>
            <View  style={styles.basicSituationRow}>
              <Text style={styles.basicSituationRowLabel}>姓名</Text>
              <Text style={styles.basicSituationRowText}>编号</Text>
            </View>
            <View  style={styles.basicSituationRow}>
              <Text style={styles.basicSituationRowLabel}>性别</Text>
              <Text style={styles.basicSituationRowText}>编号</Text>
            </View>
            <View  style={styles.basicSituationRow}>
              <Text style={styles.basicSituationRowLabel}>类型</Text>
              <Text style={styles.basicSituationRowText}>编号</Text>
            </View>
            <View  style={styles.basicSituationRow}>
              <Text style={styles.basicSituationRowLabel}>编号</Text>
              <Text style={styles.basicSituationRowText}>编号</Text>
            </View>
          </View>
        </Card>

        <Card title="存在问题">
          <Text style={styles.detailedContent}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
        </Card>

        <Card title="健康指导">
          <View  style={styles.detailedContent}>
            <Text style={{fontSize: 14 }}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
          </View>
        </Card>


        <View style={styles.footer}>

          <View style={{ width, flexDirection: 'row' }}>
            <Text style={{fontSize: 14 }}>点击进入建议的详情页面</Text>
          </View>
        </View>
      </ScrollView>



    );
  }
}

const createState = function(state) {
  return ({...state.interview})
}
export default connect(createState)(TelephoneInterviewData)
