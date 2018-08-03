import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { getUser } from '../../reducers/user/actions'
import { registerForWY } from '../../reducers/app/actions'
import HospitalListItem from '../../components/HospitalListItem'
import ExportListItem from '../../components/ExportListItem'
import DiseaseSpeciesListItem from '../../components/DiseaseSpeciesListItem'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

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
    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Tabs>
          <Tab heading="病种">
            <Content>
              <List
                dataArray={items}
                renderRow={(item) => (
                  <Item>
                    <DiseaseSpeciesListItem
                      data={[1,2,3,4,5,6,7,8,9,0,12,13,14,15,15,16,17,19]}
                      icon={<Icon name="chart" type={'EvilIcons'} size={20} style={{borderWidth: 1, borderColor: 'transparent'}}/>}
                      onPress={() => alert('fffff')}
                    />
                  </Item>
                )}
              />

            </Content>

          </Tab>
          <Tab heading="大夫">
            <Content>
              <List
                dataArray={items}
                renderRow={(item) => (
                  <Item  onPress={() => alert('fffff')}>
                    <ExportListItem />
                  </Item>
                )}
              />

            </Content>

          </Tab>
          <Tab heading="医院">

            <Content>
              <List
                dataArray={items}
                renderRow={(item) => (
                  <Item onPress={() => alert('fffff')}>
                    <HospitalListItem />
                  </Item>
                )}
              />

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