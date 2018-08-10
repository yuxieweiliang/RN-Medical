import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, View, TouchableOpacity } from 'react-native';
import { Container, Content, Button,  ScrollableTab, List, Tab, Tabs, Card, CardItem, Left, Right, Item, Text } from 'native-base';
import { connect } from 'react-redux'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');
const TITLE = '健康指标'

class HealthIndicators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  render() {

    const data = [
      {
        category: '菌类',
        detailed: '例如：灵芝、黑木耳、白木耳、香菇'
      },
      {
        category: '蔬菜类',
        detailed: '例如：芹菜、茼蒿、芦笋、萝卜'
      },
      {
        category: '坚果类',
        detailed: '例如：豌豆、蚕豆、绿豆、玉米'
      },
      {
        category: '水产类',
        detailed: '例如：海带、紫菜、海蜇、海参'
      },
      {
        category: '动物类',
        detailed: '例如：牛奶(脱脂)、猪胆、牛黄、蜂蜜'
      },
      {
        category: '水果类',
        detailed: '例如：苹果、西瓜、鲜梅、柠檬'
      },
    ]
    return (
      <Container>
        <Content style={{backgroundColor: '#eee'}}>
          <Card title="适宜类型" bordered={false} transparent>
            <CardItem bordered={true}>
              <Text style={styles.fontSmall}>适宜类型</Text>
            </CardItem>
            <List
              dataArray={data}
              renderRow={item => {
                return (
                  <Item style={styles.item} bordered={false}>
                    <View style={styles.rowLeft}>
                      <Text style={styles.fontSmall}>{item.category}:</Text>
                    </View>
                    <View style={styles.rowMiddle}>
                      <TouchableOpacity style={[styles.button, styles.btnLeft]} onPress={() => alert('aaa')}>
                        <Text style={[styles.fontSmall, {color: '#1b70f2'}]}>少量</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.button, {backgroundColor: '#1b70f2',}]} onPress={() => alert('aaa')}>
                        <Text style={[styles.fontSmall, {color: '#fff'}]}>一般</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.button, styles.btnRight]} onPress={() => alert('aaa')}>
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

          </Card>
          <Card title="禁忌类型" bordered={false} transparent>
            <CardItem bordered={true}>
              <Text style={styles.fontSmall}>禁忌类型</Text>
            </CardItem>
            <List
              dataArray={data}
              renderRow={item => {
                return (
                  <Item style={styles.item} bordered={false}>
                    <View style={styles.rowLeft}>
                      <Text style={styles.fontSmall}>{item.category}:</Text>
                    </View>
                    <View style={styles.rowMiddle}>
                      <TouchableOpacity style={[styles.button, styles.btnLeft]} onPress={() => alert('aaa')}>
                        <Text style={[styles.fontSmall, {color: '#1b70f2'}]}>少量</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.button, {backgroundColor: '#1b70f2',}]} onPress={() => alert('aaa')}>
                        <Text style={[styles.fontSmall, {color: '#fff'}]}>一般</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.button, styles.btnRight]} onPress={() => alert('aaa')}>
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
  console.log(state)
  return state
})(HealthIndicators)




/**
 * 健康指标
 * @param healthIndicators
 * @param style
 */
/*export default function healthIndicators({ healthIndicators, style }) {
  console.log(healthIndicators, 'option')


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
