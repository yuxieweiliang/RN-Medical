import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, Button , Item, Left, Tabs, Tab, Right, Icon, Text  } from 'native-base';
import behavior from './behavior'
import { registerForWY } from '../../reducers/app/actions'
import { putReceiptByAdviceId } from '../../reducers/receipt/actions'
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
    // this.props.dispatch(getReceiptByAdviceId())

  }

  submitPrescription() {
    const { receipt } = this.props

    this.props.dispatch(putReceiptByAdviceId(receipt))
  }

  navigate() {
    this.props.navigator.popToRoot()
  }
  render() {
    const { receipt } = this.props
    const prescript = receipt.PrescriptionHave === 0 ? '无' : '有'
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <Item style={{padding: 10, backgroundColor: '#fafafa', flexDirection: 'column'}}
                onPress={() => this.navigate()}>
            <View style={{width: '100%'}}>
              <Text style={{ fontSize: 14, color: '#444'}}>
                {receipt.PatientComplaint}
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <Text style={{ fontSize: 12, color: '#888'}}>
                {receipt.ReceiptContent}
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <Text style={{ fontSize: 12, color: '#888'}}>
                处方：{ prescript }
              </Text>
            </View>
          </Item>
          <View style={{width: '100%', padding: 15}}>
            <Button onPress={() => this.submitPrescription()}>
              <Text>
                确认
              </Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }

}
export default connect((state) => ({
  ...state.receipt,
  ...state.patient,
}))(UserPage)