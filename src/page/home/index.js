import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
// 选项卡
import TabCardView from '../../../components/TabCardView'
// 栏目卡片
import Card from '../../../components/Card'
// 精灵
import Spirit from '../../../components/Spirit'
// 样式
import styles from './style'

// 健康指标
import HealthIndicators from './healthIndicators'
// 生活指南
import GuideToLife from './guideToLife'
// 健康状况
import HealthStatus from './healthStatus'
// 就医状况
import MedicalStatus from './medicalStatus'

// 操作动作
import userAction from '../../action/user'
import systemAction from '../../action/system'

const { width, height } = Dimensions.get('window');


type Props = {};
class HomePage extends Component<Props> {
  /**
   * 检查是否登录
   * */
  async beforeMount() {
    let { dispatch, navigation, token } = this.props
    if(!token) {
      token = await dispatch(systemAction.loadToken())
    }
    if(token) {
      dispatch(userAction.loadUser('322717145007458'))
    } else {
      navigation.navigate('Login')
    }
  }
  componentWillMount() {
    this.beforeMount()
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { healthGuide, tabCardData,  navigation, list }= this.props
    const { healthIndicators, guideToLife,  healthStatus, medicalStatus }= tabCardData

    return (
      <View style={styles.container}>
        {/*    精灵    */}
        <Spirit/>
        <ScrollView style={styles.container}>

          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>
            {
              healthGuide && (
                <TabCardView {...healthGuide}>
                  <HealthIndicators healthIndicators={healthIndicators} style={styles.tabItemStyle}/>
                  <GuideToLife guideToLife={guideToLife} style={styles.tabItemStyle}/>
                  <HealthStatus healthStatus={healthStatus} style={styles.tabItemStyle}/>
                  <MedicalStatus medicalStatus={medicalStatus} style={styles.tabItemStyle}/>
                </TabCardView>
              )
            }
          </View>

          {/*  晒健康  */}
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
                      onPress={() => navigation.navigate('HealthExposure')}
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
                data={list
                } renderItem={item => {
                // console.log(item.item.title)
                item.item.horizontal = true
                return (
                  <TouchableOpacity
                    key={item.key}
                    activeOpacity={.95}
                    style={{width: width, paddingLeft: 10, paddingBottom: 10}}
                    onPress={() => navigation.navigate('HealthDaily')}
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

HomePage.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  // console.log(navigationOptions)
  return {
    headerLeft: navigationOptions.headerLeft(navigation, navigationOptions),
    headerRight: (
      <View style={{width: 70, paddingRight: 15, alignItems: 'flex-end',justifyContent: 'center', height: '100%'}}>
        <Icon name="commenting-o" style={{fontSize: 30, color: '#555', top: -5}}/>
      </View>
    ),
    headerTitle: navigationOptions.headerTitle(navigation, navigationOptions, '首页'),
    // title: <View><Icon name="home"/><Text>首页</Text></View>,
    // tabBarVisible: false,
    tabBarLabel: '首页',
    tabBarIcon: ({tintColor}) => (
      <View style={{width: 20, height: 20, borderWidth: 1, borderColor: 'red'}}>
        <Image
          source={require('../../../assets/images/a1.jpg')}
          style={[styles.icon]}
        />
      </View>
    ),
    showIcon: true,

  }
};
const createState = function(state) {

  return ({...state.home, ...state.system})
}

export default connect(createState)(HomePage)