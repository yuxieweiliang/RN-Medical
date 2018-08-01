import React, { Component } from 'react';
import { TouchableOpacity, View,  Dimensions, FlatList  } from 'react-native';
import { Container, Content, CardItem, Card, Left, Right, Text, Thumbnail, Badge } from 'native-base';
import styles from './style'
const { width, height } = Dimensions.get('window');

/**
 * 就医状况 historyMedical
 * @param medicalStatus
 * @param style
 * @param navigator
 */
export default function medicalStatus({ medicalStatus, style, navigator }) {

  return (
    <Content style={[style, {  backgroundColor: '#eee', paddingLeft: 5, paddingRight: 5}]}>

        <Card transparent style={{padding: 0, margin: 0, borderColor: '#fff', borderRadius: 4}}>
          <CardItem style={{flex: 1, borderRadius: 20 }} bordered={true}>
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
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  <View style={{
                    height: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 10,
                    backgroundColor: item.color,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{color: '#fff', fontSize: 12}}>{item.value}</Text>
                  </View>
                  <View style={{
                    height: 20,
                    paddingLeft: 10,
                    flex: 1
                  }}>
                    <Text style={{fontSize: 14, textAlign: 'right', width: '100%'}}>已完成</Text>
                  </View>
                </View>
              )}/>
          </CardItem>
          <CardItem
            style={{flex: 1, borderRadius: 4 }}>
            <Right style={{flex:1}}>
              <Text>3月2日 何护士</Text>
            </Right>
          </CardItem>
        </Card>
      <Card transparent>
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
            <View style={{flex:1}}>
              <Text style={{fontSize: 12, color: '#666'}}>电话访谈</Text>
            </View>
            <Right style={{flex:1}}>
              <Text style={{fontSize: 12, color: '#666'}}>3月2日 何护士</Text>
            </Right>
          </CardItem>
        </Card>
        <Card transparent style={{padding: 0, margin: 0}}>
          <CardItem bordered={true}>
            <Text>CT</Text>
          </CardItem>
          <CardItem button onPress={() => navigator.push({
            screen: 'Koe.HistoryMedical',
            title: '就医状况'
          })}>
            <FlatList
              data={[{key: 'a'}, {key: 'b'}]}
              renderItem={({item}) => <View><Text>入fdsafdsafdsafdsafdsa</Text></View>}/>
          </CardItem>
          <CardItem >
            <Right style={{flex:1}}>
              <Text>3月2日 何护士</Text>
            </Right>
          </CardItem>
        </Card>
    </Content>
  )
}

