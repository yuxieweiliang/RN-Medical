import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar, StyleSheet  } from 'react-native';
import { Container, Content, Header, Button,  ScrollableTab, Title, Tab, Tabs, Card, CardItem, Left, Right, Icon, Text } from 'native-base';
import { connect } from 'react-redux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import fetch from '../../utils/fetch'
// 栏目卡片
import { healthDaily } from '../../reducers/user/actions'
// 精灵
import Spirit from '../../components/Spirit'

// 健康指标
import HealthIndicators from './healthIndicators'
// 生活指南
import GuideToLife from './guideToLife'
// 健康状况
import HealthStatus from './healthStatus'
// 就医状况
import MedicalStatus from './medicalStatus'
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
    const { navigator }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData

    // console.log('defaultData: ', defaultData)


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
        {/* <StatusBar  barStyle="default" animated={'backgroundColor'} translucent={true}/>
         <View style={{height: 25, backgroundColor: 'red'}}/>*/}
        {/*    精灵    */}
        <Spirit/>
        {/*<ScrollView style={styles.container}
                    onScroll={(e) => console.log(e.nativeEvent.contentOffset)}>*/}
          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            <Tabs
              // 默认显示第一个
              initialPage={0}
              // 如果超过四个，则超出的隐藏，可以左右滑动
              renderTabBar={()=> <ScrollableTab tabStyle={{color: 'red'}}/>}
              >
              <Tab heading="就医情况">
                <MedicalStatus
                  navigator={navigator}
                  medicalStatus={medicalStatus}
                  style={styles.tabItemStyle}/>
              </Tab>
              {/*  健康日报  */}
              <Tab heading="健康日报">
                <Content style={{  backgroundColor: '#eee', paddingLeft: 5, paddingRight: 5}}>
                <FlatList
                  data={list}
                  /*ItemSeparatorComponent={item => <View style={{height: 5, backgroundColor: '#ccc'}}/>}*/
                  renderItem={item => {
                    // console.log(item.item.title)
                    item.item.horizontal = true
                    return (
                      <TouchableOpacity
                        key={item.key}
                        activeOpacity={.95}
                        onPress={() => navigator.push({screen: 'Koe.HealthDaily'})}
                        underlayColor={null}>
                        <Card
                          style={{ borderColor: '#fff', borderRadius: 4}}
                          transparent
                        >
                          <CardItem style={{flex: 1, borderRadius: 4 }}>
                            <Text style={{width: '100%', fontWeight: 'bold', fontSize: 14, color: '#222'}} numberOfLines={1}>
                              这里是晒健康的内容，这里是晒健康的内容
                            </Text>
                          </CardItem>
                          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15, margin: 0, flexDirection: 'row' }} transparent>
                            <View style={{flex: 1, padding: 0, margin: 0 }}>
                              <Image source={item.item.avatar} style={{width: '100%', height: width/6}}/>
                            </View>
                            <View style={{flex: 2, paddingLeft: 10 }}>
                              <Text style={{width: '100%', fontSize: 14,}}>
                                这里是晒健康的内容，这里是晒健康的内容
                                这里是晒健康的内容，这里是晒健康的内容
                              </Text>
                            </View>
                          </View>
                          <CardItem style={{flex: 1, borderRadius: 4 }}>
                            <Left style={{flex: 1 }}>
                              <Text style={{width: '100%', fontSize: 12,}}>
                                2018-12-12
                              </Text>
                            </Left>
                            <Right style={{flex: 2, paddingLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Icon type="FontAwesome" name="thumbs-o-up" style={{color:"#aaa", marginRight: 25}}/>
                              <Icon type="FontAwesome" name="comments-o" style={{color:"#aaa", marginRight: 5}}/>
                              <Text style={{ fontSize: 12, marginRight: 25 }}>
                                33
                              </Text>
                              <Icon type="FontAwesome" name="heart-o" style={{color:"#aaa"}}/>
                            </Right>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    )
                  }}
                />
                </Content>
              </Tab>
              <Tab heading="健康状况">
                <HealthStatus
                  navigator={navigator}
                  healthStatus={healthStatus}
                  style={styles.tabItemStyle}/>
              </Tab>
              <Tab heading="生活指南">
                <GuideToLife
                  navigator={navigator}
                  guideToLife={guideToLife}
                  style={styles.tabItemStyle}/>
              </Tab>
            </Tabs>

          </View>

        {/*</ScrollView>*/}

      </Container>
    );
  }
}
const createState = function(state) {
  return ({...state.home, ...state.system})
}

export default connect(createState)(HomePage)