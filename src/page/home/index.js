import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../components/TabCardView'
import List from '../../../components/List'
import { TouchButton } from '../../../components/TouchButton'
import Card from '../../../components/Card'
import { connect } from 'react-redux'
import ac from './action'

const navigation = ({ navigation, navigationOptions }) => {
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

type Props = {};
class HomePage extends Component<Props> {
  static navigationOptions = navigation

  componentWillMount() {
    const { dispatch } = this.props

    dispatch(ac.beforeHomeLoad())

    dispatch(ac.homeLoad())

    dispatch(ac.afterHomeLoad())
  }

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {}
  render() {
    const { healthGuide, routers, list }= this.props

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
                  const button = items.context.button
                  const createBtn = (option, key) => (
                    <TouchButton {...{ key, ...this.props, router: routers[option] }}>
                      { option }
                    </TouchButton>
                  )

                  return (
                    <View key={i} style={styles.tabItemStyle}>
                      <Text style={styles.tabCardText}>{items.context.text}</Text>
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
          <Card title="晒健康" horizontal={false}>
            {
              <FlatList
                data={list}
                horizontal={true}
                renderItem={item => {
                return <List {...item.item}
                             title=""
                             avatar={null}
                             listStyle={{width: width/3, paddingTop: 0}}
                             description="这里是晒健康的内容，这里是晒健康的内容，"
                             listTextStyle={{height: 40}}
                             horizontal={false}
                             key={item.item.key}>
                  <Image source={item.item.avatar} style={styles.avatar}/>
                </List>
              }}
              />
            }
          </Card>

          {/*  健康日报  */}
          <Card title="健康日报">
            {
              <FlatList
                data={list
                } renderItem={item => {
                // console.log(item.item.title)
                item.item.horizontal = true
                return <List {...item.item} key={item.item.title}/>
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
  return ({...state.home})
}

export default connect(createState)(HomePage)