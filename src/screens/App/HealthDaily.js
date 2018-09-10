import React, { Component } from 'react';
import {  TouchableOpacity, View,  Dimensions, Image  } from 'react-native';
import { Card, CardItem, Left, Right, Icon, Text } from 'native-base';
const { width, height } = Dimensions.get('window');


/**
 * 健康状况
 * @param healthStatus
 * @param style
 * @param navigator
 */
export default class HealthStatus extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }
  render() {
    const { item, onPress } = this.props
    // console.log('this.state:', this.props);
    return (
      <TouchableOpacity
        key={item.key}
        activeOpacity={.95}
        onPress={onPress}
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
              {/*<Image source={item.item.avatar} style={{width: '100%', height: width/6}}/>*/}
              <Image source={ require(`../../../assets/images/a1.jpg`)} style={{width: '100%', height: width/6}}/>
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
  }
}
