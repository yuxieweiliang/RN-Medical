import React, { Component } from 'react';
import { FlatList, TextInput, View, Dimensions } from 'react-native';
import { Container, Content, List, Text, Item, Left, Right, Tab, Tabs, Card, CardItem, Row, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import ListInput from '../../../components/ListInput'
import { postRegistration } from '../../../reducers/appointmentConsultation/actions'
import behavior from './behavior'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window')

class RegistrationInformation extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    // dispatch(getRegistration({start: '2018-05-18 00:00', end: '2018-05-29 23:59'}))
  }
  componentWillUnmount() { }

  registration() {
    let { appointTime, user, hospital, department, expert } = this.props
    if(!appointTime) {
      alert('请选择预约时间')
      return;
    }
    if(!hospital) {
      alert('请选择医院')
      return;
    }
    if(!department) {
      alert('请选择科室')
      return;
    }

    this.props.dispatch(postRegistration({ appointTime, user, hospital, department, expert }))
    this.props.navigator.popToRoot()
  }

  registrationVideo() {
    let { appointTime, user, hospital, department, expert } = this.props
    if(!appointTime) {
      alert('请选择预约时间')
      return;
    }
    if(!hospital) {
      alert('请选择医院')
      return;
    }
    if(!department) {
      alert('请选择科室')
      return;
    }

    alert('预约成功')

    // this.props.dispatch(postRegistration({ appointTime, user, hospital, department, expert }))
    this.props.navigator.popToRoot()
  }

  onChangeText() {

  }
  render() {
    let { user, expert, dispatch } = this.props
    let userMessage = user && behavior.createUserMessage(user)
    registration = behavior.createRegistration(expert)

    return (
      <Container style={{backgroundColor: '#fafafa'}}>
        <Content>
          <Card style={styles.registration}>
            <CardItem><Text>专家信息</Text></CardItem>
            <FlatList
              style={{width, marginBottom: 15}}
              data={registration}
              renderItem={(item) => this._renderCardItem(item)}
            />
          </Card>
          <Card style={styles.userMessage}>
            <CardItem><Text>我的预约</Text></CardItem>
            <FlatList
              keyboardShouldPersistTaps="always"
              style={{width}}
              data={userMessage}
              renderItem={({ item }) => {
                return (
                  <ListInput
                    onChangeText={this.onChangeText}
                    title={item.title}
                    value={item.text}/>
                )
              }}
            />
          </Card>
          <Item>
            <Left>
              <Button onPress={() => this.registration()}><Text>预约挂号</Text></Button>
            </Left>
            <Right>
              <Button onPress={() => this.registrationVideo()}><Text>预约视频</Text></Button>
            </Right>
          </Item>
        </Content>

      </Container>
    );
  }

  _renderCardItem(option) {
    return (
      <View style={styles.cardList}>
        <View style={styles.label}>
          <Text style={[styles.labelFont, {lineHeight: 40}]}>{option.item.title}</Text>
        </View>
        <View style={styles.messageContent}><Text style={styles.contentFont}>{option.item.text}</Text></View>
      </View>
    )
  }
 /* _renderItem(option) {

    return (
      <View style={styles.list}>
        <View style={styles.label}>
          <Text style={styles.labelFont}>{option.item.title}</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputFont}
            placeholder={option.item.text}
          />
        </View>
      </View>
    )
  }*/
}

export default connect(state => ({
  ...state.user,
  ...state.appointmentConsultation,
}))(RegistrationInformation)

