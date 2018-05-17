import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TabCardView from '../../../components/TabCardView'
import List from '../../../components/List'
import { TouchButton } from '../../../components/TouchButton'
import Card from '../../../components/Card'
import { connect } from 'react-redux'
import ac from './action'
import storage from '../../storage'
import styles from './style'

const { width, height } = Dimensions.get('window');


const createBtn = (option, key) => (
  <TouchButton {...{ key, ...this.props, router: routers[option] }}>
    { option }
  </TouchButton>
)

/**
 * 健康指标
 * @param option
 */
function healthIndicators(option) {
  const { healthGuide, routers, list }= this.props
  console.log(option.type, )
  return option.context.text.map((items, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={{flexDirection: 'row'}}
        onPress={() => this.props.navigation.navigate('HealthIndicators')}>
        <Text style={[styles.tabCardText, {flex: 3, flexWrap: 'nowrap'}]}>
          { items.name }
        </Text>
        <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
          { items.size }
        </Text>
        <Text style={[styles.tabCardText, {flex: 2, textAlign: 'right'}]}>
          { items.default }
        </Text>
      </TouchableOpacity>
    )
  })
}

/**
 * 生活指南
 * @param option
 */
function guideToLife(option) {
  return (
    <Text style={styles.tabCardText}>
      { option.context.text }
    </Text>
  )
}

/**
 * 健康状况
 * @param option
 */
function healthStatus(option) {
  return (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('SignTrend')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center'}}><Text>4月</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>体温</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>呼吸</Text></View>
        <View style={{flex: 1, alignItems: 'center'}}><Text>血氧</Text></View>
        <View style={{flex: 2, alignItems: 'center'}}><Text>血压</Text></View>
      </View>
      {
        option.context.text.map((items, i) => {
          return (
            <View
              key={i}
              style={{flexDirection: 'row'}}>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.time }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.temperature }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.breathing }
              </Text>
              <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                { items.bloodOxygen }
              </Text>
              <Text style={[styles.tabCardText, {flex: 2, textAlign: 'center'}]}>
                { items.bloodPressure }
              </Text>
            </View>
          )
        })
      }
    </TouchableOpacity>
  )
}

/**
 * 就医状况
 * @param option
 */
function medicalStatus(option) {
  return (
    <Text style={styles.tabCardText}>
      { option.context.text }
    </Text>
  )
}

type Props = {};
class HomePage extends Component<Props> {
  async beforeMount() {
    const { dispatch, navigation } = this.props

    let token = await storage.load('token')
    if(token) {
      dispatch(ac.homeLoad())
    } else {
      navigation.navigate('Login')
    }
  }

  componentWillMount() {
    this.beforeMount()
  }

  componentDidMount() {

  }

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {}
  render() {
    const { healthGuide, navigation, list }= this.props

    return (
      <View style={styles.container}>
        <View style={{width: 40, height: 40, position: 'absolute', right: 20, top: 100, backgroundColor: 'rgba(0, 155, 155, .5)', borderRadius: 20, zIndex: 100}}>
          <Image source={require('../../../assets/images/spirit.png')}/>
        </View>
        <ScrollView style={styles.container}>

          {/*  健康指南  */}
          <View style={{ flex: 1 ,borderColor: 'transparent' }}>

            <TabCardView {...healthGuide}>
              {
                healthGuide.dataSource && healthGuide.dataSource.map((items, i) => {
                  let func = {
                    healthIndicators,
                    guideToLife,
                    healthStatus,
                    medicalStatus,
                  }
                  // onPress={() => navigation.navigate(toUppercase(items.type))}
                  return (
                    <View
                      key={i}
                      style={styles.tabItemStyle}
                      >
                      {func[items.type].call(this, items)}
                    </View>
                  )
                })
              }
            </TabCardView>
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
                      underlayColor={null}>
                      <View style={{width: '100%'}}>
                        <Text style={{width: '100%'}}>
                          这里是晒健康的内容，这里是晒健康的内容
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
  return ({...state.home})
}

export default connect(createState)(HomePage)