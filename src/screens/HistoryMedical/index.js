import React, { Component } from 'react';
import { Text, TouchableHighlight, Image, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { fullList } from '../../reducers/user/actions'
import { connect } from 'react-redux'
// 栏目卡片
import Card from '../../components/Card'

const { width, height } = Dimensions.get('window');

/**
 * 就医历史
 */
class HistoryMedical extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    console.log(this.props)
    dispatch(fullList({}))
  }

  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (

      <Container style={styles.container}>
        <Tabs initialPage={0}>
          <Tab heading="检查" style={{height: 200}}>
            <Card title="CT" style={{paddingBottom: 10}}>

              <View style={styles.listBody}>
                <View >
                  <Text>入fdsafdsafdsafdsafdsa</Text>
                </View>
                <View>
                  <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                </View>
              </View>
            </Card>
            <Card title="CT" style={{paddingBottom: 10}}>

              <View style={styles.listBody}>
                <View >
                  <Text>入fdsafdsafdsafdsafdsa</Text>
                </View>
                <View>
                  <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                </View>
              </View>
            </Card>
            <Card title="CT" style={{paddingBottom: 10}}>

              <View style={styles.listBody}>
                <View >
                  <Text>入fdsafdsafdsafdsafdsa</Text>
                </View>
                <View>
                  <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                </View>
              </View>
            </Card>
          </Tab>
          <Tab heading="宣教" style={{height: 200}}>
            <Card title="健康宣教的列表1." style={{paddingBottom: 10}}>

              <View style={styles.listFooter}>
                <View style={styles.listFooterLeft}>
                  <Text style={{flex: 1}}>入</Text>
                </View>
                <View style={styles.listFooterRight}>
                  <Text style={{flex: 1, textAlign: 'right'}}>2018-12-12</Text>
                </View>
              </View>
            </Card>
            <Card title="健康宣教的列表2." style={{paddingBottom: 10}}>
              <View style={styles.listFooter}>
                <View style={styles.listFooterLeft}>
                  <Text style={{flex: 1}}>出</Text>
                </View>
                <View style={styles.listFooterRight}>
                  <Text style={{flex: 1, textAlign: 'right'}}>2018-12-12</Text>
                </View>
              </View>
            </Card>
          </Tab>
          <Tab heading="访谈" style={{height: 200}}>
            <TouchableNativeFeedback onPress={() => this.props.navigator.push({screen: 'Koe.TelephoneInterview', title: '健康访谈'})}>
              <Card style={styles.list} title="存在问题：这里是问题？">
                <View style={styles.listBody}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 100 }}>健康指导：</Text>
                    <Text style={{flex: 1}}>就医历史就医历,史就医历史就医历史,就医历史就医历史,就医历史就医历史就医,历史就医历史就医历,史就医历史</Text>
                  </View>
                </View>
                <View style={styles.listFooter}>
                  <View style={styles.listFooterLeft}>
                    <Image style={styles.userAvatar} source={require('../../../assets/images/a3.jpg')}/>
                    <Text style={styles.username}>护士名字</Text>
                  </View>
                  <View style={styles.listFooterRight}>
                    <Text style={{flex: 1}}>电话宣教</Text>
                    <Text style={{flex: 1, textAlign: 'right'}}>2018-12-12</Text>
                  </View>
                </View>
              </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this.props.navigator.push({screen: 'Koe.TelephoneInterview', title: '健康访谈'})}>
              <Card style={styles.list} title="存在问题：这里是问题？">
                <View style={styles.listBody}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 100 }}>健康指导：</Text>
                    <Text style={{flex: 1}}>就医历史就医历,史就医历史就医历史,就医历史就医历史,就医历史就医历史就医,历史就医历史就医历,史就医历史</Text>
                  </View>
                </View>
                <View style={styles.listFooter}>
                  <View style={styles.listFooterLeft}>
                    <Image style={styles.userAvatar} source={require('../../../assets/images/a3.jpg')}/>
                    <Text style={styles.username}>护士名字</Text>
                  </View>
                  <View style={styles.listFooterRight}>
                    <Text style={{flex: 1}}>电话宣教</Text>
                    <Text style={{flex: 1, textAlign: 'right'}}>2018-12-12</Text>
                  </View>
                </View>
              </Card>
            </TouchableNativeFeedback>
          </Tab>
          <Tab heading="问诊" style={{height: 200}}>
            <Card style={styles.list} title="存在问题：这里是问题？">
              <View style={styles.listBody}>
                <View style={{flexDirection: 'column', height: 200}}>
                  <Text style={{ width: 100 }}>健康指导：</Text>
                  <Text style={{flex: 1}}>就医历史就医历,史就医历史就医历史,就医历史就医历史,就医历史就医历史就医,历史就医历史就医历,史就医历史</Text>
                </View>
              </View>
            </Card>
          </Tab>
        </Tabs>

      </Container>

    );
  }
}



export default connect(state => ({...state.user}))(HistoryMedical)