import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar  } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
// 栏目卡片
import Card from '../../components/Card'
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

const { width, height } = Dimensions.get('window');

type Props = {};
class HomePage extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {}
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // console.log(event, this.props)
    if (event.type === 'DeepLink') {
      const parts = event.link.split('/');
      if (parts[0] === 'tab1') {
        this.props.navigator.push({
          screen: parts[1]
        });
      }
    }
  }
  componentWillMount() {

    console.log('****************|||||||||||     home page    |||||||||||****************')
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { navigator }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData

    // console.log('defaultData: ', defaultData)
    return (
      <View style={styles.container}>
        {/* <StatusBar  barStyle="default" animated={'backgroundColor'} translucent={true}/>
         <View style={{height: 25, backgroundColor: 'red'}}/>*/}
        {/*    精灵    */}
        <Spirit/>
        <ScrollView style={styles.container}
                    onScroll={(e) => console.log(e.nativeEvent.contentOffset)}>

          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            <Tabs initialPage={0}>
              {/*  健康日报  */}
              <Tab heading="健康日报">
                <FlatList
                  data={list}
                  renderItem={item => {

                    // console.log(item.item.title)
                    item.item.horizontal = true
                    return (
                      <TouchableOpacity
                        key={item.key}
                        activeOpacity={.95}
                        style={styles.healthDaily}
                        onPress={() => navigator.push({screen: 'Koe.HealthDaily'})}
                        underlayColor={null}>
                        <View style={{width: '100%', flexDirection: 'row'}}>
                          <Image source={item.item.avatar} style={{flex: 1, height: 80}}/>
                          <Text style={{width: '75%', paddingLeft: 10, paddingRight: 10}}>
                            这里是晒健康的内容，这里是晒健康的内容
                            这里是晒健康的内容，这里是晒健康的内容
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )
                  }}
                />
              </Tab>
              <Tab heading="健康状况">
                <HealthStatus
                  navigator={navigator}
                  healthStatus={healthStatus}
                  style={styles.tabItemStyle}/>
              </Tab>
              <Tab heading="就医情况">
                <MedicalStatus
                  navigator={navigator}
                  medicalStatus={medicalStatus}
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



        </ScrollView>

      </View>
    );
  }
}
const createState = function(state) {
  return ({...state.home, ...state.system})
}

export default connect(createState)(HomePage)