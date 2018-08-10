import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import { Text, Container, CardItem, Card, Tab, Tabs, Left, Body, Button, Right, Content, Thumbnail } from 'native-base';


const { width, height } = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;

export default class TelephoneInterview extends React.Component {
  render() {
    const problem = [
      '血压增高1',
      '血压增高2血压增高2血压增高2血压增高2',
      '血压增高2血压增高2',
      '血压增高2血压增高2',
      '血压增高2血压增高2',
      '血压增高2'
    ]

    const guidance = [
      '减少热量，膳食平衡，增加运动，（BMI保持20-24kg/m2）（减重10kg收缩压下降5-20mmHg）',
      '减少热量，膳食平衡，增加运动，（减重10kg收缩压下降5-20mmHg）',
      '血压增高2',
      ]

    return (
    <Card transparent>
      <CardItem bordered={true}>
        <Text style={styles.title}>生活习惯第三次随访 </Text>
        <Right style={{flex:1}}>
          <Thumbnail source={require('../../assets/images/a3.jpg')} style={{width: 30, height: 30}} />
        </Right>
      </CardItem>
      <CardItem
        button
        style={styles.card}
        onPress={() => navigator.push({
          screen: 'Koe.HistoryMedical',
          title: '就医状况'
        })}>
        <View style={[styles.tag, {backgroundColor: 'red',}]}>
          <Text style={ { color: '#fff', fontSize: 12 } }>问题</Text>
        </View>
        <Right style={styles.right}>
          {
            problem && problem.map((item, key) => {
              return (
                <View style={styles.badge} key={key}>
                  <Text style={{fontSize: 14}}>{item}</Text>
                </View>
              )
            })
          }
        </Right>

      </CardItem>
      <CardItem
        style={{alignItems: 'flex-start'}}
        button
        onPress={() => navigator.push({
          screen: 'Koe.HistoryMedical',
          title: '就医状况'
        })}>
        <View style={[styles.tag, {backgroundColor: 'green',}]}>
          <Text style={{color: '#fff', fontSize: 12}}>指导</Text>
        </View>
        <Right style={{
          flex:1,
          paddingLeft: 10,
          width: '100%'
        }}>
          {
            guidance && guidance.map((item, key)  => {
              return (
                <View style={styles.rightItemContent} key={key}>
                  <View style={styles.rightItem}/>
                  <Text style={{fontSize: 14}}>
                    { item }
                  </Text>
                </View>
              )
            })
          }

        </Right>
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
    )
  }
}



const styles =  StyleSheet.create({
  title: {
    fontWeight: 'bold', fontSize: 14
  },
  card: {
    alignItems: 'flex-start'
  },
  tag: {
    height: 20,
    paddingLeft: 5,
    paddingRight: 5,
    // borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex:1,
    paddingLeft: 10 ,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  badge: {
    height: 20,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 1,
    marginTop: 1,
    // borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItemContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  rightItem: {
    height: 6,
    width: 6,
    backgroundColor: '#aaa',
    marginRight: 5,
    marginTop: 6,
    borderRadius: 6,
  }
});
