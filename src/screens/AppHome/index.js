import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
// 选项卡
import TabCardView from '../../components/TabCardView'
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
// 操作动作
import { getUser } from '../../reducers/user/actions'
import defaultData from './behavior'
// 样式
import styles from './style'

const { width, height } = Dimensions.get('window');

type Props = {};
class HomePage extends Component<Props> {
  /**
   * 检查是否登录
   * */
  async beforeMount() {
    let { dispatch, navigator } = this.props


    console.log(this.props)
    if(token) {
      dispatch(getUser('322717145007458'))
    }
  }
  componentWillMount() {
    this.beforeMount()

    console.log('****************|||||||||||     home page    |||||||||||****************')
    console.log(global)
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { navigator }= this.props
    const { healthGuide, tabCardData={}, list }= defaultData
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData

    console.log('defaultData: ', defaultData)
    return (
      <View style={styles.container}>
       {/* <StatusBar  barStyle="default" animated={'backgroundColor'} translucent={true}/>
        <View style={{height: 25, backgroundColor: 'red'}}/>*/}
        {/*    精灵    */}
        <Spirit/>
        <ScrollView style={styles.container}>

          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            {
              healthGuide && (
                <TabCardView {...healthGuide}>

                  <HealthStatus
                    navigator={navigator}
                    healthStatus={healthStatus}
                    style={styles.tabItemStyle}/>

                  <GuideToLife
                    navigator={navigator}
                    guideToLife={guideToLife}
                    style={styles.tabItemStyle}/>

                  <MedicalStatus
                    navigator={navigator}
                    medicalStatus={medicalStatus}
                    style={styles.tabItemStyle}/>

                </TabCardView>
              )
            }
          </View>

          {/*   晒健康  */}
          <Card title="晒健康" style={{paddingBottom: 10}}>
            {
              <FlatList
                data={list}
                horizontal={true}
                renderItem={item => {
                  return (
                    <TouchableOpacity
                      key={item.key}
                      activeOpacity={.95}
                      style={{width: width/3, paddingLeft: 10}}
                      onPress={() => navigator.resetTo('HealthExposure')}
                      underlayColor={null}>
                      <View style={{width: '100%'}}>
                        <Text style={{width: '100%'}}>
                          这里是晒健康的内容，这里是晒健h康的内容
                        </Text>
                        <Image source={item.item.avatar} style={{width: '100%', height: 80}}/>
                      </View>
                    </TouchableOpacity>
                  )
                }}
              />
            }
          </Card>

          {/*  健康日报  */}
          <Card title="健康日报" style={{paddingBottom: 10}}>
            {
              <FlatList
                data={list}
                renderItem={item => {

                  // console.log(item.item.title)
                  item.item.horizontal = true
                  return (
                    <TouchableOpacity
                      key={item.key}
                      activeOpacity={.95}
                      style={{width: width, paddingLeft: 10, paddingBottom: 10}}
                      onPress={() => navigator.resetTo('HealthDaily')}
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
            }
          </Card>
        </ScrollView>

      </View>
    );
  }
}
const createState = function(state) {
  return ({...state.home, ...state.system})
}

export default connect(createState)(HomePage)