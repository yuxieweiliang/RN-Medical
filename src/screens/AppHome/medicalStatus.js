import React, { Component } from 'react';
import { TouchableOpacity, View,  Dimensions, FlatList  } from 'react-native';
import { Container, Content, CardItem, Card, Right, Text } from 'native-base';
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
    <Content style={style}>
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

