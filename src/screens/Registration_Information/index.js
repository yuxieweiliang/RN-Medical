import React, { Component } from 'react';
import { FlatList, TextInput, View, Dimensions } from 'react-native';
import { Container, Content, List, Text, Item, Left, Right, Tab, Tabs, Card, CardItem, Row, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import ListInput from '../../components/ListInput'
import { postRegistration, postVideoRegistration } from '../../reducers/registration/actions'
import behavior from './behavior'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window')

class RegistrationInformation extends React.Component {
  static navigatorStyle = {
    tabBarHidden: true,
  }
  static navigatorButtons = {
    rightButtons: [
      {
        title: '保存',
        id: 'saveRegistration',
        buttonColor: 'white',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      },
    ]
  };
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  /**
   * 点击右上角保存按钮 -》 保存预约信息
   * @param event
   */
  onNavigatorEvent(event) {
    const { dispatch, onClose, appointDate, appointTime, patient, hospital, department, expert } = this.props
    if(event.id === 'saveRegistration') {


      console.log('saveRegistration', this.props)
      // 新增挂号
      // dispatch(postRegistration({ appointDate, patient, hospital, department, expert }))
      // 新增视频预约
      dispatch(postVideoRegistration(appointDate, appointTime, patient, expert))
        .then(res => {
          if(res) {
            alert('预约成功！')
          }
        })
      // dispatch(saveAndUpdateUser(user))
      // onClose()
      // 返回
      // this.props.navigator.pop();
    }
  }
  componentWillMount() {
    const { dispatch } = this.props
    // dispatch(getRegistration({start: '2018-05-18 00:00', end: '2018-05-29 23:59'}))
  }
  componentWillUnmount() { }

  /*registration() {
    let { appointDate, user, hospital, department, expert } = this.props
    if(!appointDate) {
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

    this.props.dispatch(postRegistration({ appointDate, user, hospital, department, expert }))
    this.props.navigator.popToRoot()
  }
  registrationVideo() {
    let { appointDate, user, hospital, department, expert } = this.props
    if(!appointDate) {
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

    // this.props.dispatch(postRegistration({ appointDate, user, hospital, department, expert }))
    this.props.navigator.popToRoot()
  }
   */

  onChangeText() {

  }
  render() {
    let { patient, expert, dispatch, appointDate, appointTime } = this.props
    let userMessage = patient && behavior.createUserMessage(patient)
    registration = behavior.createRegistration(expert, `${appointDate} ${appointTime * 1 === 1 ? '上午' : '下午'}` )

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
         {/* <Item>
            <Left>
              <Button onPress={() => this.registration()}><Text>预约挂号</Text></Button>
            </Left>
            <Right>
              <Button onPress={() => this.registrationVideo()}><Text>预约视频</Text></Button>
            </Right>
          </Item>*/}
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
  ...state.expert,
  ...state.patient,
  ...state.registration,
}))(RegistrationInformation)

