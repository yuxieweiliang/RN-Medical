import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar, StyleSheet  } from 'react-native';
import { Container, Content, Header, Button,  ScrollableTab, Fab, Tab, Tabs, Card, CardItem, Left, Right, Icon, Text } from 'native-base';
import { connect } from 'react-redux'
import SignTrend from './SignTrend'
// 栏目卡片
import { healthDaily } from '../../reducers/system/actions'
import { getUserInfo } from '../../reducers/sign/actions'
// 精灵
import Spirit from '../../components/Spirit'

// 健康日报
import HealthDaily from './HealthDaily'
// 健康状况
import HealthStatus from './healthStatus'
import { extendKey } from '../../utils'
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

    /*FontAwesomeIcon
      .getImageSource('search', 24)
      .then((values) => {
        this.props.navigator.setButtons({
          rightButtons: [
            {
              icon: values,
              id: 'search'
            },
            {
              id: 'custom-button',
              navBarComponentAlignment: 'center',
              component: 'Koe.TitleView', // This line loads our component as a nav bar button item
              passProps: {
                title: '主页',
              }
            },
          ]})
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }).catch((error) => {
      console.log(error);
    });*/
  }

/*  onNavigatorEvent(event) {
    console.log(event, this.props)
    if (event.type === 'NavBarButtonPress') {
      // const parts = event.link.split('/');
      if (event.id === 'search') {
        this.props.navigator.push({
          screen: 'Koe.SearchView'
        });
      }
    }
  }*/
  componentWillMount() {
    const { dispatch } = this.props
    // 请求健康日报
    dispatch(healthDaily({}))
    console.log('****************|||||||||||     home page    |||||||||||****************')
    // fetch.get('http://userdata.api.koenn.cn:81/api/Data_User_AdvicePaper_Dto/GetByPaperID/电话随访/322717145007458').then(res => console.log(res))

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
    const { healthDailyList, navigator }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData
    const healthList = healthDailyList && extendKey(healthDailyList)
    console.log('defaultData: ', this.props)

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={this.toggleDrawer}>
            <Image source={require('../../../assets/images/a3.jpg')} style={{width: 36, height: 36, borderRadius: 18}} />
          </Button>

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff'}}>Header</Text>
          </View>

          <Button
            transparent
            onPress={() => this.props.navigator.push({
              screen: 'Koe.SearchView',
              navigatorStyle: {
                navBarHidden: true
              },
            })}>
            <Icon name="ios-search" />
          </Button>
        </Header>

        {/*    精灵    */}
        <Spirit/>

          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            <Tabs
              // 默认显示第一个
              initialPage={0}
              // 如果超过四个，则超出的隐藏，可以左右滑动
              renderTabBar={()=> <ScrollableTab tabStyle={{color: 'red'}}/>}
              >


              {/*  健康日报  */}
              <Tab heading="健康日报">
                <Content style={{  backgroundColor: '#eee', paddingLeft: 5, paddingRight: 5}}>
                  {
                    healthList && (
                      <FlatList
                        data={healthList}
                        renderItem={(item) => {
                          console.log(item)
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
              </Tab>

              <Tab heading="健康状况">
                <SignTrend
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


            </Tabs>

          </View>

      </Container>
    );
  }
}
const createState = function(state) {
  return ({...state.home, ...state.system})
}

export default connect(createState)(HomePage)