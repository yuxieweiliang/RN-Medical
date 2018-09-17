import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { registerForWY } from '../../reducers/app/actions'
import { getPrescriptionOrder, prescriptionChange } from '../../reducers/prescription/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  static navigatorStyle  = {
    tabBarHidden: true,
  }
  componentDidMount() {}

  componentWillMount() {
    /**
     * 获取回执列表
     */
    this.props.dispatch(getPrescriptionOrder())

  }

  navigate(router, option) {
    this.props.dispatch(prescriptionChange(option))
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { prescriptionList } = this.props

    console.log('prescriptionList', prescriptionList)
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <List
            dataArray={prescriptionList}
            renderRow={(item) => (
              <Item
                style={{padding: 10, backgroundColor: '#fafafa', flexDirection: 'column'}}
                onPress={() => this.navigate('Prescription', item)}
              >
                <View style={{width: '100%'}}>
                  <Text style={{ fontSize: 14, color: '#444'}}>
                    医生名称：{item.DoctorName}
                  </Text>
                </View>
                <View style={{width: '100%'}}>
                  <Text style={{ fontSize: 12, color: '#888'}}>
                    就诊日起：{item.VisitDate}
                  </Text>
                </View>
              </Item>
            )}
          />

        </Content>
      </Container>
    );
  }

}
export default connect((state) => ({
  ...state.prescription,
  ...state.patient,
}))(UserPage)