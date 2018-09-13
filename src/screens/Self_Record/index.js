import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Card, CardItem, Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { getPaperDetail, getTemplateByType } from '../../reducers/self/actions'
import { registerForWY } from '../../reducers/app/actions'
import Inspect from '../../components/Inspect'
import HealthEducation from '../../components/HealthEducation'
import TelephoneInterview from '../../components/TelephoneInterview'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const styles = {};

function FollowUp() {
  return (
    <Card transparent style={{borderColor: 'transparent'}}>
      <CardItem bordered={true}>
        <Text>CT</Text>
      </CardItem>
      <CardItem button>
        <Inspect/>
      </CardItem>
      <CardItem >
        <Left style={{flex:1}}>
          <Text style={{fontSize: 12, color: '#888'}}>2018-12-1fdsafdsafdsafdsa2</Text>
        </Left>
      </CardItem>
    </Card>
  )
}




class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {
    // 用户随访
    this.props.dispatch(getPaperDetail({hospitalId: 1001, templateId: 0}))
    // 用户随访模板
    this.props.dispatch(getTemplateByType({hospitalId: 1001, templateType: '电话随访'}))

  }

  navigate(router) {
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { user } = this.props
    const messageStructure = user && behavior.createStructure(user)
    const row = [{
      type: '入',
      context: `12健康宣教的列表，康宣教的列表健康宣，教的列健康宣教的列表健康宣教的列
      健康宣教的列表，康宣教的列健康宣教的列表1`,
      time: '2018-12-12'
    },{
      type: '入',
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },{
      type: '在',
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },{
      type: '出',
      context: '2018-12-12健康宣教的列表，健康宣教的列表，健康宣教的列表',
      time: '2018-12-12'
    },
    ]


    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Tabs>



          {/*    电话访谈    */}
          <Tab heading="随访">
            <Content style={{backgroundColor: '#eee'}}>
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
          <Tab heading="检查">
            <Content style={{backgroundColor: '#eee'}}>
              <List
                dataArray={items}
                renderRow={(item) => (
                  <FollowUp/>
                )}
              />
            </Content>
          </Tab>
          <Tab heading="宣教">
            <Content style={{backgroundColor: '#eee'}}>
              <List
                dataArray={row}
                renderRow={(item) => (
                  <Item>
                    <HealthEducation {...item}/>
                  </Item>
                )}
              >
              </List>

            </Content>

          </Tab>

        </Tabs>
      </Container>
    );
  }

}
export default connect((state) => ({
  ...state.user
}))(UserPage)