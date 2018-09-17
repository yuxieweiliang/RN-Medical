import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, StyleSheet, SectionList, Platform, Dimensions, Alert } from 'react-native'
import { Container, Content, Text } from 'native-base';

import {  getExpert } from '../../reducers/expert/actions'
import { getDepartmentList, getDepartment, getDoctorDeptInfo } from '../../reducers/department/actions'
import { getToken } from '../../utils/_utils'
import QRCode from 'react-native-qrcode';

const {width, height} = Dimensions.get('window')


class UserScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentWillMount() {
    const token = getToken(global.token.access_token)
  }


  _changeSearchText(val) {
    this.props.navigator.push({
      screen: 'Koe.Search',
      navigatorStyle: {
        navBarHidden: true,
      }
    });
  }

  render() {
    const { expert } = this.props
    console.log('ffffffffffffffff', this.props)
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={styles.qrcodeCode}>
            <View style={styles.qrcode}>
              <QRCode
                value={'http://facebook.github.io/react-native/'}
                size={200}
                bgColor='purple'
                fgColor='white'
              />
            </View>
            <View style={{
              marginTop: 20
            }}>
              <Text style={{color: '#444', fontSize: 14}}>
                扫一扫上面的二维码，添加好友
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const User = connect(store => {
  // console.log(store)
  return ({
    ...store.appointmentConsultation,
  })
})(UserScreen);
export default User;

const styles = StyleSheet.create({
  container: {
  },
  content: {
    flex: 1,
    width: '100%',
    height: height - 200,
    /*borderColor: 'red',
     borderWidth: 1*/
  },
  qrcodeCode: {
    flex: 1,
    width: '100%',
    height: height - 140,
    /*borderColor: 'red',
     borderWidth: 1,*/
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrcode: {
    padding: 10,
    borderWidth: 4,
    borderColor: '#6f2ea3',
    backgroundColor: '#fafafa'
  }

})
