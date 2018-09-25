import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, StyleSheet, SectionList, Platform, Dimensions, Alert } from 'react-native'
import { Container, Content, Text } from 'native-base';
import { getDepartmentList, getDepartment, getDoctorDeptInfo } from '../../reducers/department/actions'
import { getToken } from '../../utils/_utils'
import QRCode from 'react-native-qrcode';

const {width, height} = Dimensions.get('window');


class Prescription_QRCode extends Component {
  static navigatorStyle  = {
    tabBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentWillMount() {
    const token = getToken(global.token.access_token)
  }


  render() {
    const { prescription } = this.props;

    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={styles.qrcodeCode}>
            <View style={styles.qrcode}>
              <QRCode
                value={JSON.stringify({PrescriptionID: prescription.PrescriptionID, UserID: prescription.UserID})}
                size={200}
                bgColor='purple'
                fgColor='white'
              />
            </View>
            <View style={{
              marginTop: 20
            }}>
              <Text style={{color: '#444', fontSize: 14}}>
                康恩处方付款二维码，切勿向其他人出示
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(store => {
  // console.log(store)
  return ({
    ...store.prescription,
  })
})(Prescription_QRCode);

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
});
