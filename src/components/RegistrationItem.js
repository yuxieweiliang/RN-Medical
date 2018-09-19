/**
 * Created by xueyufei on 2018/8/8.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, Row, Col, Icon } from 'native-base';

const { width, height } = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;
const header = require('../../assets/images/a4.jpg')

export default class RegistrationItem extends Component {
  renderItem(item, key, index) {
    const { onPressItem } = this.props
    const am = {backgroundColor: item.am ? '#aadcff' : '#fff'}
    const pm = {backgroundColor: item.pm ? '#aadcff' : '#fff'}
    const amColor = {fontSize: 12, color: item.am ? '#333' : '#fff'}
    const pmColor = {fontSize: 12, color: item.pm ? '#333' : '#fff'}

    return (
      <View key={key} style={styles.itemChild}>
        <TouchableOpacity
          style={[styles.itemChildTop, am]}
          onPress={() => onPressItem(item, '1')}>
          <Text style={amColor}>{item.am}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChildBottom, pm]}
          onPress={() => onPressItem(item, '2')}>
          <Text style={pmColor}>{item.pm}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  createSchedules(Schedules) {
    return Schedules.map((item, key) => {
      let am, pm;
      if(item.FreeHours === 1 || item.FreeHours === 3) {
        am = '空闲'
      }
      if(item.FreeHours === 2 || item.FreeHours === 3) {
        pm = '空闲'
      }
      return({
        ...item, am, pm, key,
      })
    })
  }
  render() {
    const { item: { Schedules, Doctor }, onPressPic } = this.props
    let portrait = Doctor ? { uri: Doctor.ImageUrl } : header
    let schedules = Schedules && this.createSchedules(Schedules)

    return (
      <Item style={styles.item}>
        <TouchableOpacity
          style={styles.imageBox}
          onPress={onPressPic}
        >

          <Image
            style={styles.image}
            source={portrait}
          />

          <Text style={{fontSize: 12}}>
            {Doctor && Doctor.UserName}
          </Text>

        </TouchableOpacity>

        <View  style={styles.content}>
          {
            schedules
              .map((item, key) => this.renderItem(item, key))
          }
        </View>
        <View style={{
          width: 15,
          height: 60,
        }}>
          <View style={styles.am}>
            <Text style={{fontSize: 10}}>上</Text>
          </View>
          <View style={styles.pm}>
            <Text style={{fontSize: 10}}>下</Text>
          </View>
        </View>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 60,
    paddingLeft: 15,
    paddingRight: 10
  },
  imageBox: {
    width: 50
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemChild: {
    width: '14%',
    height: 60,
  },
  itemChildTop: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: borderWidth,
    borderBottomColor: '#ccc'
  },
  itemChildBottom: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  am: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pm: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

