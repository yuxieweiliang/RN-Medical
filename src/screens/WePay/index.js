import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, Button , Item, Left , Right, Icon, Text, Thumbnail  } from 'native-base';
import * as wechat from 'react-native-wechat'
import behavior from './behavior'
import HeaderView from '../../components/HeaderView'
import { getPatient } from '../../reducers/patient/actions'
import { registerForWY } from '../../reducers/app/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {
    this.props.dispatch(getPatient())

    // 注册微信SDK
    wechat.registerApp('yunruofengsheng')

    console.log(wechat)

    /*.then(res => {
        // this.props.dispatch(registerForWY())
      })*/
  }

  navigate(router, title) {

    this.props.navigator.push({
      screen: `Koe.${router}`,
      title
    })
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
    const { patient } = this.props
    const messageStructure = patient && behavior.createStructure(patient)

    return (
      <Container style={{backgroundColor: '#eee'}}>
        <HeaderView
          {...this.props}
          avatar={require('../../../assets/images/a3.jpg')}
          onPressRight={this._changeSearchText.bind(this)}
          title="康恩"
        />

        <Content>
          <List>
            <Item style={[styles.listItem, {marginTop: 20}]}>
              <TouchableOpacity onPress={() => this.navigate('Self.QRCode')}>
                <Left style={{flex: 1, flexDirection: 'row'}}>
                  <Thumbnail square source={require('../../../assets/images/a8.jpg')} />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{
                      fontSize: 16,
                      color: '#333',
                      height: 30,
                      lineHeight: 30
                    }}>赵千山</Text>
                    <Text style={{color: '#888'}}>fdsafdsafdsafdsafdsafdsafdsafdsafdsafdsa</Text>
                  </View>
                </Left>
              </TouchableOpacity>
              {/*<Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />*/}
            </Item>


            <Button full onPress={()=>{
              wechat.isWXAppInstalled()
                .then((isInstalled)=>{
                  if(isInstalled){
                    wechat.openWXApp()
                  }else {
                    ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT)
                  }
                })
            }
            }>
              <Text>微信支付</Text>
            </Button>


          </List>
        </Content>



      </Container>
    );
  }
 /* _renderItem({ index, item, section }) {
    return (
      <TouchableNativeFeedback
        title="Go to Details"
        onPress={() => item.type && navigator.push({screen: `Koe.${item.type}`})}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{item.title}</Text>
          {
            item.icon
              ? item.icon
              : (
              <Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />
            )
          }
        </View>
      </TouchableNativeFeedback>
    )
  }*/
}
export default connect((state) => ({
  ...state.consult,
  ...state.patient
}))(UserPage)