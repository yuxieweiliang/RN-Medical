import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { registerForWY } from '../../reducers/app/actions'
import { getPrescriptionList, prescriptionChange } from '../../reducers/prescription/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  static navigatorStyle  = {
    tabBarHidden: true,
  };
  componentDidMount() {}

  componentWillMount() {}

  render() {
    const { prescriptionList } = this.props;

    console.log('prescriptionList', prescriptionList);
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <List
            dataArray={[{orderName: '阿莫西林胶囊', VisitDate: '18.8'}, {orderName: '阿司匹林口服液', VisitDate: '58.9'}]}
            renderRow={(item) => (
              <Item
                style={{padding: 10, backgroundColor: '#fafafa', flexDirection: 'column'}}
              >
                <View style={{width: '40%'}}>
                  <Text style={{ fontSize: 14, color: '#444'}}>
                    药名：{item.orderName}
                  </Text>
                </View>
                <View style={{width: '40%'}}>
                  <Text style={{ fontSize: 12, color: '#888'}}>
                    价格：{item.VisitDate}
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