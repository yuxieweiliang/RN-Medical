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
  renderItem(item, key) {
    const { onPressItem } = this.props
    const am = {backgroundColor: item.am ? '#eee' : '#fff'}
    const pm = {backgroundColor: item.pm ? '#eee' : '#fff'}
    return (
      <View key={key} style={styles.itemChild}>
        <TouchableOpacity
          style={[styles.itemChildTop, am]}
          onPress={() => onPressItem(item, item.am)}>
          <Text style={{fontSize: 12}}>{item.am}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChildBottom, pm]}
          onPress={() => onPressItem(item, item.pm)}>
          <Text style={{fontSize: 12}}>{item.pm}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    const { item, onPressPic } = this.props
    return (
      <Item style={styles.item}>
        <TouchableOpacity
          style={styles.imageBox}
          onPress={onPressPic}
        >

          <Image
            style={styles.image}
            source={ header }
          />

          <Text style={{fontSize: 12}}>
            {item.UserName}
          </Text>

        </TouchableOpacity>

        <View  style={styles.content}>
          {
            [ {key: '1', pm: '有空'}, {key: '2', am: '有空'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}]
              .map((item, key) => this.renderItem(item, key))
          }
        </View>
        <View style={{
          width: 15,
          height: 60,
        }}>
          <View style={{
            width: '100%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{fontSize: 10}}>上</Text>
          </View>
          <View style={{
            width: '100%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
})

