/**
 * 病种列表项
 */
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';

import ChevronDown from 'react-native-vector-icons/EvilIcons'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');


/**
 * 不管再多，每一病种只显示前十个，点击更改多，显示全部
 * more: false
 * wrap: null | 'wrap'
 * Icon: null # 默认每个病种是没有 icon 的，如果需要，请自己在数据中设置
 */
export default class HospitalListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: null,
      more: false,

    }
  }
  componentWillMount(){
    this.setState({
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })

    // console.log(this.props.data)
  }

  showMore() {
    this.setState({
      list: [1,2,3,4,5,6,7,8,9,0,12,13,14,15,15,16,17,19]
    })

    alert('显示更多')
  }
  render() {
    const { onPress,icon, data } = this.props
    return (
      <View style={styles.list}>
        <View style={styles.titleBox}>
          <View style={styles.titleIcon}>
            { icon }
          </View>
          <Text style={styles.title}>内科 / <Text style={styles.titleSmall}> 常见病</Text></Text>
          <TouchableOpacity
            style={styles.titleIcon}
            onPress={() => this.showMore()}
          >
            <ChevronDown name="chevron-down" size={30}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.body]}>

          {
            this.state.list && this.state.list.map(key => (
              <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
                <Text>医院地址</Text>
              </TouchableOpacity>
            ))
          }

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  list: {
    width,
  },
  titleBox: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    flex: 1,
    fontSize: width/32,
    lineHeight:  width/14,
    color: '#333',
    paddingRight: 5
  },
  titleSmall: {
    fontSize: width/40,
    lineHeight:  width/14,
    color: '#888',
    paddingLeft: 5
  },
  titleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    /*borderWidth: 1,
    borderColor: 'red'*/
  },
  body: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#eee',
    flexDirection: 'row',
    paddingBottom: 10,
    flexWrap: 'wrap'
  },

  item: {
    marginTop: 10,
    marginRight: 10,
  }

});
