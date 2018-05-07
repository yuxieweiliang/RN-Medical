import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../components/TabCardView/index'
import { connect } from 'react-redux'
import action from './action'

const list = [
  require(`../../../assets/images/a1.jpg`),
  require(`../../../assets/images/a2.jpg`),
  require(`../../../assets/images/a3.jpg`),
  require(`../../../assets/images/a4.jpg`),
  require(`../../../assets/images/a5.jpg`),
  require(`../../../assets/images/a7.jpg`),
]

type Props = {};
class HomePage extends Component<Props> {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // console.log(navigationOptions)
    return {
      headerLeft: navigationOptions.headerLeft(navigation, navigationOptions),
      headerRight: (
        <View style={{width: 70, paddingRight: 15, alignItems: 'flex-end'}}>
          <Icon name="commenting-o" style={{fontSize: 30, color: '#333'}}/>
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
      showIcon: true

    }
  };

  componentWillMount() {
    const { dispatch } = this.props

    dispatch(action.beforeHomeLoad())

    dispatch(action.homeLoad())

    dispatch(action.afterHomeLoad())
  }

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {}
  _onPressTabCardButton(option) {
    console.log(option)

    if(option === '历时指标') {
      this.props.navigation.navigate('HistoryMedical')
    } else if(option === '生活数据') {
      this.props.navigation.navigate('HistoryIndicators')
    } else if(option === '体征趋势') {
      this.props.navigation.navigate('SignTrend')
    } else if(option === '体征填写') {
      this.props.navigation.navigate('SignOut')
    } else if(option === '就医状况') {
      this.props.navigation.navigate('MedicalStatus')
    }
  }
  render() {
    const _this = this
    const { healthGuide }= this.props
    const tabItemStyle= {width, height: 200, padding: 15}

    return (

      <ScrollView style={styles.container}>

        {/*  健康指南  */}
        <View style={{ flex: 1 }}>

          <TabCardView {...healthGuide}>
            {
              healthGuide.dataSource && healthGuide.dataSource.map((items, i) => {
                const button = items.context.button
                const createBtn = function(option, key) {

                  return (
                    <TouchableHighlight
                      key={key}
                      style={{width: width - 30, height: 40, backgroundColor: '#ccc', borderRadius: 10, alignItems: 'center', marginTop: 20}}
                      onPress={() => _this._onPressTabCardButton(option)}
                      underlayColor="#eee">

                      <Text style={{height: 40, lineHeight: 40, fontSize: 16}}>
                        { option }
                      </Text>

                    </TouchableHighlight>
                  )
                }

                return (
                  <View key={i} style={tabItemStyle}>
                    <Text style={{fontSize: 16}}>{items.context.text}</Text>
                    {
                      (typeof button === 'object')
                        ? button.map((child, i) => createBtn( child, i))
                        : createBtn( button, items.context.text)
                    }


                  </View>
                )
              })
            }
          </TabCardView>
        </View>

        {/*  晒健康  */}
        <View style={{ height: 220 }}>
          <View style={styles.exposureHeader}>
            <View style={styles.exposureHeaderLeft}>
              <Text style={styles.exposureHeaderFont}>晒健康</Text>
            </View>
            <TouchableOpacity
              style={styles.exposureHeaderRight}
              onPress={() => this.props.navigation.navigate('HealthExposure')}>
              <Text style={styles.exposureHeaderFont}>更多</Text>
            </TouchableOpacity>

          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.exposureScroll}>
            <View
              style={styles.exposureBody}>
              {
                list.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={.95}
                    style={styles.exposureCard}
                    underlayColor="#eee">

                    <Text style={styles.exposureCardText}>
                      这里是晒健康的内容，这里是晒健康的内容，
                    </Text>
                    <Image source={item} style={{flex: 1}}/>

                  </TouchableOpacity>
                ))
              }
            </View>
          </ScrollView>
        </View>

        {/*  健康日报  */}
        <View>
          <View style={styles.exposureHeader}>
            <View style={styles.exposureHeaderLeft}>
              <Text style={styles.exposureHeaderFont}>健康日报</Text>
            </View>
            <TouchableOpacity
              style={styles.exposureHeaderRight}
              onPress={() => this.props.navigation.navigate('HealthDaily')}>
              <Text style={styles.exposureHeaderFont}>更多</Text>
            </TouchableOpacity>
          </View>
          <View
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[styles.exposureScroll, {height: 'auto'}]}>
            <View
              style={styles.dailyBody}>
              {
                list.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={.95}
                    style={styles.dailyCard}
                    underlayColor="#eee">
                    <Image source={item} style={{flex: 1}}/>

                    <View style={styles.dailyCardTextCenter}>
                      <View style={styles.dailyCardTextTitleBox}>
                        <Text style={styles.dailyCardTextTitle}>
                          这里是健康日报的标题
                        </Text>
                      </View>

                      <View style={styles.dailyCardTextBox}>
                        <Text style={styles.dailyCardText}>
                          这里是健康日报的内容，这里是健康日报的内容，这里是健康日报的内容，
                          这里是健康日报的内容，这里是健康日报的内容，这里是健康日报的内容，
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
        </View>


      </ScrollView>

    );
  }
}


const createState = function(state) {
  return ({...state.home})
}

export default connect(createState)(HomePage)