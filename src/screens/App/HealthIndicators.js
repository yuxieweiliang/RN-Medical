import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, View, TouchableOpacity } from 'react-native';
import { Container, Content, Button,  ScrollableTab, List, Tab, Tabs, Card, CardItem, Left, Right, Item, Text } from 'native-base';
import { connect } from 'react-redux'
import {
  getHealthIndicatorsData,
  changeSuitable,
  changeTaboo,
  saveAndUpdateHealthIndicators
} from '../../reducers/system/actions'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const TITLE = '健康指标'

class HealthIndicators extends React.Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: '保存',
        id: 'saveHealthIndicators',
        buttonColor: 'white',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      },
    ]
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {};
    // this.onDayPress = this.onDayPress.bind(this);
  }

  /**
   * 点击右上角保存按钮
   * @param event
   */
  onNavigatorEvent(event) {
    const { healthIndicatorsList, dispatch } = this.props
    if(event.id === 'saveHealthIndicators') {


      // console.log(healthIndicatorsList)
      // 保存数据
      dispatch(saveAndUpdateHealthIndicators(healthIndicatorsList))

      // 返回
      this.props.navigator.pop();
    }
  }

  componentWillMount() {
    this.props.dispatch(getHealthIndicatorsData())
  }
  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  changeSuitable(item, value) {
    // console.log(item)
    this.props.dispatch(changeSuitable(item, value))
  }
  changeTaboo(item, value) {
    this.props.dispatch(changeTaboo(item, value))

  }
  render() {
    const { healthIndicatorsList, dispatch } = this.props

    // console.log(this.props)
    return (
      <Container>
        <Content style={{backgroundColor: '#eee'}}>
          <Card title="适宜类型" bordered={false} transparent>
            <CardItem bordered={true}>
              <Text style={styles.fontSmall}>适宜类型</Text>
            </CardItem>
            {
              healthIndicatorsList && (
                <List
                  dataArray={healthIndicatorsList.suitable}
                  renderRow={item => {
                    const setColor = function(type) {
                      const _type = (type === item.value) || (type === '一般' && !item.value)
                      return {
                        button: _type ? {backgroundColor: '#1b70f2'} : {},
                        text: _type ? {color: '#fff'} : {color: '#1b70f2'},
                      }
                    }
                    return (
                      <Item style={styles.item} bordered={false}>
                        <View style={styles.rowLeft}>
                          <Text style={styles.fontSmall}>{item.category}:</Text>
                        </View>
                        <View style={styles.rowMiddle}>
                          <TouchableOpacity
                            style={[styles.button, styles.btnLeft, setColor('少量').button]}
                            onPress={() => this.changeSuitable(item, '少量')}>
                            <Text style={[styles.fontSmall, {color: '#1b70f2'}, setColor('少量').text]}>少量</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, setColor('一般').button]}
                            onPress={() => this.changeSuitable(item, '一般')}>
                            <Text style={[styles.fontSmall, {color: '#fff'}, setColor('一般').text]}>一般</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, styles.btnRight, setColor('大量').button]}
                            onPress={() => this.changeSuitable(item, '大量')}>
                            <Text style={[styles.fontSmall, {color: '#1b70f2'}, setColor('大量').text]}>大量</Text>
                          </TouchableOpacity>
                        </View>
                        <Left style={styles.rowRight}>
                          <Text style={styles.fontDetailed}>{item.detailed}</Text>
                        </Left>
                      </Item>
                    )
                  }}
                />
              )
            }


          </Card>
          <Card title="禁忌类型" bordered={false} transparent>
            <CardItem bordered={true}>
              <Text style={styles.fontSmall}>禁忌类型</Text>
            </CardItem>
            {
              healthIndicatorsList && (
                <List
                  dataArray={healthIndicatorsList.taboo}
                  renderRow={item => {
                    return (
                      <Item style={styles.item} bordered={false}>
                        <View style={styles.rowLeft}>
                          <Text style={styles.fontSmall}>{item.category}:</Text>
                        </View>
                        <View style={styles.rowMiddle}>
                          <TouchableOpacity
                            style={[styles.button, styles.btnRight]}
                            onPress={() => this.changeTaboo(item, '少量')}>
                            <Text style={[styles.fontSmall, {color: '#1b70f2'}]}>少量</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, {backgroundColor: '#1b70f2',}]}
                            onPress={() => this.changeTaboo(item, '一般')}>
                            <Text style={[styles.fontSmall, {color: '#fff'}]}>一般</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, styles.btnRight]}
                            onPress={() => this.changeTaboo(item, '大量')}>
                            <Text style={[styles.fontSmall, {color: '#1b70f2'}]}>大量</Text>
                          </TouchableOpacity>
                        </View>
                        <Left style={styles.rowRight}>
                          <Text style={styles.fontDetailed}>{item.detailed}</Text>
                        </Left>
                      </Item>
                    )
                  }}
                />
              )
            }


          </Card>
        </Content>


      </Container>
    );
  }
}

/*HealthIndicators.navigationOptions = ({ navigation, navigationOptions }) => {
 const { params } = navigation.state;
 return {
 title: TITLE,
 }
 };*/

const styles =  StyleSheet.create({
  container: {
    width,
    height,
  },
  item: {
    width,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fafafa',
    // borderBottomWidth: 1,
    borderColor: 'transparent'
  },
  rowLeft: {
    flexDirection: 'row',
    width: 60
  },
  rowMiddle: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowRight: {
    flex: 1,
    paddingLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  button: {
    borderWidth,
    borderColor: '#1b70f2',
    backgroundColor: '#e0ebff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4
  },
  btnLeft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  btnRight: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  fontDetailed: {
    fontSize: 12,
    color: '#666',
  },
  fontSmall: {
    fontSize: 12
  },
});


export default connect(state => {
  // console.log(state)
  return state.system
})(HealthIndicators)




/**
 * 健康指标
 * @param healthIndicators
 * @param style
 */
/*export default function healthIndicators({ healthIndicators, style }) {
  // console.log(healthIndicators, 'option')


  return ( <View style={style}>
      {
        healthIndicators.map((items, i) => (
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
        ))
      }
    </View>
  )
}*/
