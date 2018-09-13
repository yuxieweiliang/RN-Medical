import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import {Container, Content, CardItem, Card, Left, Right, Text, Thumbnail, Badge} from 'native-base';


const {width, height} = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;

/**
 * 就医状况 historyMedical
 * @param medicalStatus
 * @param style
 * @param navigator
 */
export default function medicalStatus({medicalStatus, style, navigator}) {

  return (
    <Content style={styles.content}>

      <Card transparent style={styles.card}>
        <CardItem bordered={true}>
          <Text>检查</Text>
        </CardItem>
        <CardItem
          button
          onPress={() => navigator.push({
            screen: 'Koe.HistoryMedical',
            title: '就医状况'
          })}>
          <FlatList
            data={[{key: 'a', value: '心电图', color: 'red'}, {key: 'b', value: '胸透', color: 'blue'}]}
            renderItem={({item}) => (
              <View style={styles.cardInnerList}>
                <View style={[styles.cardInnerItemLeft, {backgroundColor: item.color}]}>
                  <Text style={styles.cardInnerItemLeftText}>{item.value}</Text>
                </View>
                <View style={styles.cardInnerItemRight}>
                  <Text style={styles.cardInnerItemRightText}>已完成</Text>
                </View>
              </View>
            )}/>
        </CardItem>
        <CardItem >
          <View style={{flex: 1}}>
            <Text style={{fontSize: 12, color: '#666'}}>电话访谈</Text>
          </View>
          <Right style={{flex: 1}}>
            <Text style={{fontSize: 12, color: '#666'}}>3月2日 何护士</Text>
          </Right>
        </CardItem>
      </Card>
      <Card transparent style={{borderColor: '#fff', borderRadius: 4}}>
        <CardItem bordered={true}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>问题：血压偏高，心律不齐 </Text>
        </CardItem>
        <CardItem button onPress={() => navigator.push({
          screen: 'Koe.HistoryMedical',
          title: '就医状况'
        })}>
          <Text style={{fontSize: 14}}>指导：减少热量，膳食平衡，增加运动，（BMI保持20-24kg/m2）（减重10kg收缩压下降5-20mmHg）</Text>
        </CardItem>
        <CardItem >
          <View style={{flex: 1}}>
            <Text style={{fontSize: 12, color: '#666'}}>电话访谈</Text>
          </View>
          <Right style={{flex: 1}}>
            <Text style={{fontSize: 12, color: '#666'}}>3月2日 何护士</Text>
          </Right>
        </CardItem>
      </Card>

    </Content>
  )
}

const styles = StyleSheet.create({
  content: {
    width,
    height: 200,
    backgroundColor: '#eee',
    paddingLeft: 5,
    paddingRight: 5
  },
  card: {
    borderColor: '#fff',
    borderRadius: 4
  },
  cardInnerList: {
    flexDirection: 'row',
    marginBottom: 5
  },
  cardInnerItemLeft: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardInnerItemLeftText: {
    color: '#fff',
    fontSize: 12
  },
  cardInnerItemRight: {
    height: 20,
    paddingLeft: 10,
    flex: 1
  },
  cardInnerItemRightText: {
    fontSize: 14,
    textAlign: 'right',
    width: '100%'
  }
})
