import React, { Component } from 'react';
import { View, Image, Dimensions  } from 'react-native';
import { Container, Content, Header, Button, ScrollableTab, Fab, Tab, Tabs, Card, Left, Right, Icon, Text } from 'native-base';
import { connect } from 'react-redux'
import SignTrend from '../App_SignTrend'
// 精灵
import Spirit from '../../components/Spirit'
import HeaderView from '../../components/HeaderView'

// 健康状况
import HealthStatus from '../App_HealthIndicators'
import defaultData from './behavior'
// 样式
import styles from './style'

let search = null
const { width, height } = Dimensions.get('window');

type Props = {};
class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { dispatch } = this.props
    // 请求健康日报
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  _changeSearchText(val) {
    this.props.navigator.push({
      screen: 'Koe.Search',
      navigatorStyle: {
        navBarHidden: true,
      }
    });
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { navigator }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData
    // console.log('defaultData: ', this.props)

    return (
      <Container style={styles.container}>

        <HeaderView
          {...this.props}
          avatar={require('../../../assets/images/a3.jpg')}
          onPressRight={this._changeSearchText.bind(this)}
          title="康恩"
        />

        {/*    精灵    */}
        <Spirit/>

          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            <Tabs
              // 默认显示第一个
              initialPage={0}
              // 如果超过四个，则超出的隐藏，可以左右滑动
              renderTabBar={()=> <ScrollableTab tabStyle={{color: 'red'}}/>}
              >

              {/*  健康指南  */}
              <Tab heading="健康状况">
                <SignTrend
                  {...this.props}
                  style={styles.tabItemStyle}/>
                <Fab
                  direction="up"
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => navigator.push({
                    screen: 'Koe.SignTrendEdit',
                    title: '健康状况'
                  })}>
                  <Icon name="add" />
                </Fab>
              </Tab>


              <Tab heading="生活指南">
                <HealthStatus
                  navigator={navigator}
                  healthStatus={healthStatus}
                  style={styles.tabItemStyle}/>
              </Tab>




              {/*  健康日报  */}
              {/*<Tab heading="健康日报">
               <Content style={{  backgroundColor: '#eee', paddingLeft: 5, paddingRight: 5}}>
               {
               healthList && (
               <FlatList
               data={healthList}
               renderItem={(item) => {
               // console.log(item)
               return (
               <HealthDaily
               item={item}
               onPress={() => navigator.push({
               screen: 'Koe.HealthDailyDetails',
               title: '健康日报'
               })}/>
               )
               }}
               />
               )
               }
               </Content>
               </Tab>*/}
            </Tabs>

          </View>

      </Container>
    );
  }
}
const createState = function(state) {
  return ({...state.app, ...state.system})
}

export default connect(createState)(HomePage)