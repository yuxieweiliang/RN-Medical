import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Text, Container, Tabs, Tab, Content, List, ListItem , Item, Left , Right, Card, CardItem, Icon, Button  } from 'native-base';
import behavior from './behavior'
import moment from 'moment'
import { getToken } from '../../utils/_utils'
import { registerForWY } from '../../reducers/app/actions'
import { getRegistration } from '../../reducers/system/actions'
import { getConsultVideoList, changeConsult } from '../../reducers/consult/actions'
// 更换专家
import { changeExpert } from '../../reducers/expert/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  static navigatorStyle = {
    tabBarHidden: true,
  }
  componentDidMount() {}

  componentWillMount() {
    const self = getToken(global.token.access_token)

    this.props.dispatch(getConsultVideoList(self.MID, self.UserID))
    // 查询历史预约记录
    // this.props.dispatch(getRegistration({start: '2018-05-18 00:00', end: '2018-08-29 23:59'}))
  }

  navigate(router) {
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  /**
   * 点击预约列表每一项
   * @param option
   */
  consultSelect(option) {
    const { dispatch } = this.props

    dispatch(changeConsult(option))
    dispatch(changeExpert(option.Doctor))

    // 跳转到， 预约视频， 选择预约条件页面
    this.props.navigator.push({screen: 'Koe.Consult.Select'})
  }
  render() {
    const { user, registrationList, consultVideoList } = this.props
    const messageStructure = user && behavior.createStructure(user)
    let videoList = [];
      if(consultVideoList) {
        consultVideoList.map(item => {
          let today = moment().format();
          let endTime = moment(item.StartTime).add(item.ReserveHours*1, 'h').format();
          if(moment(today).isBefore(moment(endTime))) {
            videoList.push(item)
          }
        })
      }

    return (
      <Container style={{backgroundColor: '#eee'}}>
        <Tabs>
          <Tab heading="预约挂号">
            <Content>
              <Card>
                {
                  registrationList && (
                    <List
                      dataArray={registrationList}
                      renderRow={(item, i) => (
                        <Item style={[styles.listItem]}>
                          <View>

                          </View>

                          <Left style={styles.listItemLeft}>
                            <Text style={styles.listItemLeftText}>{item.Reg_VisitTime}</Text>
                          </Left>
                          <Right style={styles.listItemRight}>
                            {
                              (moment(item.Reg_VisitTime).isAfter(moment().subtract(30, 'd'))) ? (
                                <Button transparent  small primary
                                        onPress={() => this.navigate('Friends')}>
                                  <Text>取消</Text>
                                </Button>
                              ) : (
                                <Button transparent  small dark
                                        onPress={() => this.navigate('Friends')}>
                                  <Text>完成</Text>
                                </Button>
                              )
                            }
                          </Right>
                        </Item>
                      )}
                    />
                  )
                }
              </Card>
            </Content>
          </Tab>
          <Tab heading="预约问诊">
            <Content>

              <Card>

                <CardItem itemDivider>
                  <Left>
                    <Text></Text>
                  </Left>
                  <Right style={styles.listItemRight}>
                    <Button small transparent info><Text>历史记录</Text></Button>
                  </Right>
                </CardItem>
                <List dataArray={videoList} renderRow={(item) => {
                  let today = moment().format();
                  let { ReserveHours, StartTime, Doctor } = item;
                  let endTime = moment(StartTime).add(ReserveHours*1, 'h').format();
                  let text = moment(today).isBefore(moment(endTime)) ? '未完成' : '已完成'
                  return (
                    <Item style={{padding: 10}} onPress={() => this.consultSelect(item)}>
                      <Image style={{width: 40, height: 40}} source={require('../../../assets/images/a3.jpg')}/>
                      <Left style={{paddingLeft: 10}}>
                        <Text>{item.Doctor.UserName}</Text>
                        <Text>{moment(item.StartTime).format('MM/DD HH:mm')}</Text>
                      </Left>
                      <Right>
                        <Text>{item.Doctor.UserType}</Text>
                        <Text>{text}</Text>
                      </Right>
                    </Item>
                  )
                }}/>
                {/*<List>
                  <Item style={[styles.listItem]}>
                    <Left style={styles.listItemLeft}>
                      <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
                    </Left>
                    <Right style={styles.listItemRight}>
                      <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
                    </Right>

                  </Item>
                  <Item style={[styles.listItem]}>
                    <Left style={styles.listItemLeft}>
                      <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
                    </Left>
                    <Right style={styles.listItemRight}>
                      <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
                    </Right>

                  </Item>
                  <Item style={[styles.listItem]}>
                    <Left style={styles.listItemLeft}>
                      <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
                    </Left>
                    <Right style={styles.listItemRight}>
                      <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
                    </Right>

                  </Item>
                </List>*/}

              </Card>
            </Content>
          </Tab>
        </Tabs>




      </Container>
    );
  }

}


/*<View>
 <FlatList
 data={registrationList}
 renderItem={({item}) => (
 <View style={styles.list}>
 <View style={{flex: 1}}>
 <Text>预约挂号：</Text>
 </View>
 <View style={{flex: 3}}>
 <View style={{flexDirection: 'row'}}>
 <Text style={{flex: 2}}>{item.Reg_MerchantName}</Text>
 <Text style={{flex: 1}}>{item.Reg_Dept_Name}</Text>
 </View>
 <View>
 <Text>{item.Reg_VisitTime} {item.Reg_Doc_Title} 下午</Text>
 </View>
 </View>
 </View>
 )}
 />
 </View>*/
export default connect((state) => ({
  ...state.system,
  ...state.patient,
  ...state.consult,
}))(UserPage)