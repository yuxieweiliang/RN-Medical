import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Card, CardItem, Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { getUser } from '../../reducers/user/actions'
import { registerForWY } from '../../reducers/app/actions'
import Inspect from '../../components/Inspect'
import HealthEducation from '../../components/HealthEducation'
import TelephoneInterview from '../../components/TelephoneInterview'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');


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
    console.log(this.props)
    this.props.dispatch(getUser())/*.then(res => {
     // this.props.dispatch(registerForWY())
     })*/
  }

  navigate(router) {
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { user } = this.props
    const messageStructure = user && behavior.createStructure(user)
    const row = [{
      context: '2018-12-12健康宣教的列表12018-12-12健康宣教的列表12018-12-12健康宣教的列表12018-12-12健康宣教的列表1',
      time: '2018-12-12'
    },{
      context: '2018-12-12健康宣教的列表12018-12-12健康宣教的列表12018-12-12健康宣教的列表12018-12-12健康宣教的列表1',
      time: '2018-12-12'
    },
    ]


    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Tabs>



          <Tab heading="随访">
            <Content style={{backgroundColor: '#eee'}}>
              <TelephoneInterview/>
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
              <Card transparent style={{padding: 0, margin: 0, borderColor: 'transparent'}}>
                <CardItem bordered={true}>
                  <Text>入院阶段</Text>
                </CardItem>
                <List
                  dataArray={row}
                  renderRow={(item) => (
                    <Item>
                      <HealthEducation {...item}/>
                    </Item>
                  )}
                >
                </List>
              </Card>

              <Card transparent style={{padding: 0, margin: 0, borderColor: 'transparent'}}>
                <CardItem bordered={true}>
                  <Text>在院阶段</Text>
                </CardItem>
                <List
                  dataArray={row}
                  renderRow={(item) => (
                    <Item>
                      <HealthEducation {...item}/>
                    </Item>
                  )}
                >
                </List>
              </Card>

              <Card transparent style={{padding: 0, margin: 0, borderColor: 'transparent'}}>
                <CardItem bordered={true}>
                  <Text>出院指导</Text>
                </CardItem>
                <List
                  dataArray={row}
                  renderRow={(item) => (
                    <Item>
                      <HealthEducation {...item}/>
                    </Item>
                  )}
                >
                </List>
              </Card>

            </Content>

          </Tab>


          <Tab heading="全部">

            <Content style={{backgroundColor: '#eee'}}>
              <TelephoneInterview/>

              <FollowUp/>
              <Card transparent style={{padding: 0, margin: 0, borderColor: 'transparent'}}>
                <CardItem bordered={true}>
                  <Text>入院阶段</Text>
                </CardItem>
                <List
                  dataArray={row}
                  renderRow={(item) => (
                    <Item>
                      <HealthEducation {...item}/>
                    </Item>
                  )}
                >
                </List>
              </Card>

              <TelephoneInterview/>
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