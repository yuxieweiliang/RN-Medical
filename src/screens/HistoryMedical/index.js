import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, Image, View, Dimensions, StyleSheet } from 'react-native';
import { Container, CardItem, Card, Tab, Tabs, Left, Body, Button, Right, Content, Item, List } from 'native-base';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { fullList, paperList } from '../../reducers/user/actions'
import { connect } from 'react-redux'
import TelephoneInterview from '../../components/TelephoneInterview'
import HealthEducation from '../../components/HealthEducation'
import Inspect from '../../components/Inspect'



const borderWidth = StyleSheet.hairlineWidth
const { width, height } = Dimensions.get('window');


/*<View style={{
 width: 16,
 height: 16,
 backgroundColor: 'red',
 alignItems: 'center',
 justifyContent: 'center'
 }}>
 <Text style={{color: 'white', fontSize: 10}}>入</Text>
 </View>
 */



/**
 * 就医历史
 */
class HistoryMedical extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    console.log(this.props)
    // dispatch(fullList({}))

    // 电话访谈
    dispatch(paperList({}))


  }

  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  navTo() {
    this.props.navigator.push()
  }
  render() {
    const row = [{
      context: '12健康宣教的列表，康宣教的列表健康宣，教的列健康宣教的列表健康宣教的列健康宣教的列表，康宣教的列健康宣教的列表1',
      time: '2018-12-12'
    },{
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },{
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },{
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },
    ]


    return (

      <Container style={styles.container}>
        <Tabs initialPage={0}>



          {/*    健康宣教    */}
          <Tab heading="宣教" style={{backgroundColor: '#eee'}}>
            <Content>
              <List
                dataArray={row}
                renderRow={(item) => (
                  <HealthEducation {...item}/>
                )}
              >
              </List>



            </Content>
          </Tab>
          <Tab heading="检查" style={{backgroundColor: '#eee'}}>
            <Content>
              <Card transparent style={{borderColor: 'transparent'}}>
                <CardItem bordered={true}>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <Inspect/>
                </CardItem>
                <CardItem >
                  <Left style={{flex:1}}>
                    <Text style={{fontSize: 12, color: '#888'}}>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Left>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem bordered={true}>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <Inspect/>
                </CardItem>
                <CardItem >
                  <Left style={{flex:1}}>
                    <Text style={{fontSize: 12, color: '#888'}}>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          </Tab>




          {/*    电话访谈    */}
          <Tab heading="访谈" style={{backgroundColor: '#fafafa'}}>
            <Content style={styles.container}>
              <TelephoneInterview/>
              <Card transparent style={{borderColor: '#fff', borderRadius: 4}}>
                <CardItem bordered={true}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>问题：血压偏高，心律不齐 </Text>
                </CardItem>
                <CardItem button onPress={() => navigator.push({
                  screen: 'Koe.HistoryMedical',
                  title: '就医状况'
                })}>
                  <Text style={{fontSize: 14}}>指导：减少热量，膳食平衡，增加运动，（BMI保持20-24kg/m2）（减重10kg收缩压下降5-20mmHg）</Text>
                </CardItem>
                <CardItem >
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 12, color: '#666'}}>电话访谈</Text>
                  </View>
                  <Right style={{flex: 1}}>
                    <Text style={{fontSize: 12, color: '#666'}}>3月2日 何护士</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Tab>




          <Tab heading="问诊" style={{backgroundColor: '#fafafa'}}>
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