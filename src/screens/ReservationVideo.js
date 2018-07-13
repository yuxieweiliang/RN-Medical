import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native';
import { typeOf } from '../utils'
import Card from '../components/Card'

const { width, height } = Dimensions.get('window');

const ConsultItem = ({itemTitle, itemName, onPress}) => (
  <TouchableNativeFeedback
    title="Go to Details"
    onPress={onPress}
  >
    <View style={styles.listItem}>
      <Text>{itemTitle}：</Text>
      <Text style={{flex:1}}>{itemName}</Text>
      <Text>》</Text>
    </View>
  </TouchableNativeFeedback>
)

const PathologicalCardItem = ({itemTitle, itemName}) => {
  let ItemContent = null
  let createItem = (text, key) => (
    <View style={styles.listChildRight} key={key}>
      <Text style={styles.listChildRightTextColor}>
        {text}
      </Text>
    </View>
  )

  if(itemName) {
    ItemContent = typeOf(itemName, 'array')
      ? itemName.map((item, key) => createItem(itemName, key))
      : createItem(itemName)
  }

  return (
    <View style={styles.listChildItem}>
      <View style={styles.listChildItemLeft}>
        <Text>{itemTitle}：</Text>
      </View>
      <View style={{height: 30}}>
        {ItemContent}
      </View>
    </View>
  )
}

export default class ReservationVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  onPressItem(router) {
    let { navigator } = this.props
    navigator.push({
      screen: router,
      passProps: {
        router: 'pop'
      }})
  }

  render() {
    let { complication, symptom, position,
      pathological, hospital, expert, illness } = this.props


    return(
      <View>
        <ConsultItem
          itemTitle="医院"
          itemName={hospital && hospital.MerchantName}
          onPress={() => this.onPressItem('Koe.HospitalList')}
        />
        <ConsultItem
          itemTitle="病种"
          itemName={illness && illness.Illness_Name}
          onPress={() => this.onPressItem('Koe.IllnessTypeList')}
        />
        <ConsultItem
          itemTitle="专家"
          itemName={expert && expert.UserName}
          onPress={() => this.onPressItem('Koe.ExpertList')}
        />
        <Card title="症状"
              onPress={() => this.onPressItem('Koe.BodyParts')}
              style={styles.listChildCard}>
          <TouchableHighlight
            onPress={() => this.onPressItem('Koe.BodyParts')}>
            <View style={{padding: 15}}>

              <PathologicalCardItem
                itemTitle="身体部位"
                itemName={position && position.ItemName}
              />
              <PathologicalCardItem
                itemTitle="状态症状"
                itemName={symptom && symptom.ItemName}
              />
              <PathologicalCardItem
                itemTitle="病例病程"
                itemName={complication && complication.ItemName}
              />
              <PathologicalCardItem
                itemTitle="并发症状"
                itemName={pathological && pathological.ItemName}
              />
            </View>
          </TouchableHighlight>
        </Card>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  listItem: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listChildCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listChildItem: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  listChildItemLeft: {
    width: 100,
  },
  listChildRight: {
    backgroundColor: '#57aeff',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    // borderColor: 'red',
    // borderWidth: 1
  },
  listChildRightTextColor: {
    color: '#fafafa',
    // borderColor: 'red',
    // borderWidth: 1
  }
});
