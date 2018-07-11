import React, { Component } from 'react';
import { Text, Dimensions, ScrollView, View, TouchableNativeFeedback, Image } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');
import Card from '../../components/Card'
import { connect } from 'react-redux'


class TelephoneInterviewData extends React.Component {

  componentDidMount() {}
  componentWillUnmount() {
    // this._onPressButton.remove();
    // <Image style={{width: 30, height: 30, borderRadius: 15}} source={require('../../../assets/images/a7.jpg')}/>

  }
  render() {

    return (

      <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <View style={{height: 100}}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={require('../../../assets/images/a4.jpg')}/>
              <Text style={{flex: 1}}>张丫丫</Text>
              <Text style={{flex: 1}}>检查报告</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>10月21日</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{flex: 1}}>尿常规检查报告单（异常）</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>白细胞（WBC）10.7↑（3.5——7.0）</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{height: 100}}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={require('../../../assets/images/a7.jpg')}/>
              <Text style={{flex: 1}}>张丫丫</Text>
              <Text style={{flex: 1}}>检查报告</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>10月21日</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{flex: 1}}>尿常规检查报告单（异常）</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>白细胞（WBC）10.7↑（3.5——7.0）</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{height: 100}}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={require('../../../assets/images/a2.jpg')}/>
              <Text style={{flex: 1}}>张丫丫</Text>
              <Text style={{flex: 1}}>检查报告</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>10月21日</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{flex: 1}}>尿常规检查报告单（异常）</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>白细胞（WBC）10.7↑（3.5——7.0）</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{height: 100}}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={require('../../../assets/images/a5.jpg')}/>
              <Text style={{flex: 1}}>张丫丫</Text>
              <Text style={{flex: 1}}>检查报告</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>10月21日</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{flex: 1}}>尿常规检查报告单（异常）</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>白细胞（WBC）10.7↑（3.5——7.0）</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{height: 100}}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={require('../../../assets/images/a8.jpg')}/>
              <Text style={{flex: 1}}>张丫丫</Text>
              <Text style={{flex: 1}}>检查报告</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>10月21日</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{flex: 1}}>尿常规检查报告单（异常）</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>白细胞（WBC）10.7↑（3.5——7.0）</Text>
            </View>
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
