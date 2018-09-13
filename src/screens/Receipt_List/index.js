import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left, Tabs, Tab, Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import { registerForWY } from '../../reducers/app/actions'
import { getReceiptListByPatientId, changeReceipt } from '../../reducers/receipt/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {
    /**
     * 获取回执列表
     */
    this.props.dispatch(getReceiptListByPatientId())

  }

  navigate(router, option) {
    this.props.dispatch(changeReceipt(option))
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { receiptList } = this.props
    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <List
            dataArray={receiptList}
            renderRow={(item) => (
              <Item
                style={{padding: 10, backgroundColor: '#fafafa', flexDirection: 'column'}}
                onPress={() => this.navigate('Receipt', item)}
              >
                <View style={{width: '100%'}}>
                  <Text style={{ fontSize: 14, color: '#444'}}>
                    {item.PatientComplaint}
                  </Text>
                </View>
                <View style={{width: '100%'}}>
                  <Text style={{ fontSize: 12, color: '#888'}}>
                    {item.ReceiptContent}
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
  ...state.receipt,
  ...state.patient,
}))(UserPage)