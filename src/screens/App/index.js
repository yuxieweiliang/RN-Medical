import React, { Component } from 'react';
import { View, Image, Dimensions  } from 'react-native';
import { Container, Content, Header, Button, ScrollableTab, Fab, Tab, Tabs, Card, Left, Right, Icon, Text } from 'native-base';
import { connect } from 'react-redux'
// 精灵
import Spirit from '../../components/Spirit'
import HeaderView from '../../components/HeaderView'
import { server } from '../../config'

import SignTrend from './SignTrendComponent'
// 健康状况
import HealthStatus from './HealthIndicatorsComponent'
import defaultData from './behavior'
import { initLocalState } from '../../reducers/app/actions'
// 样式
import styles from './style'

const { width, height } = Dimensions.get('window');

type Props = {};
class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { dispatch } = this.props;
    // 获取本地缓存
    dispatch(initLocalState())
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { navigator, patient }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData
    const portrait = patient ? {uri: server.file + patient.ImageUrl} : {}
    // console.log('defaultData: ', this.props)

    return (
      <Container style={styles.container}>

        <HeaderView
          {...this.props}
          avatar={ portrait }
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
                  screen: 'Koe.App.SignTrendEdit',
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
  return ({...state.app, ...state.system, ...state.patient})
}

export default connect(createState)(HomePage)