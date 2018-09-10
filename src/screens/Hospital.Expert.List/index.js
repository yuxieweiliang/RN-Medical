import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, FlatList } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import Card from '../../../components/Card'

const TITLE = '专家列表'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    let { expertList }= this.props
    expertList = expertList && expertList.map(item => ({...item, key: item.UserName + item.UserID}))


    return (
      <ScrollView style={styles.container}>
        <Card title="专家列表">
          <FlatList
            data={expertList}
            renderItem={({item}) => (
              <TouchableHighlight onPress={() => this.props.onClose(item)}>
                <View style={styles.list}>
                  <View style={{flex: 1}}>
                    <Image style={{width: '100%', height: 100}} source={require('../../../../assets/images/a3.jpg')}/>
                  </View>
                  <View style={{flex: 4, paddingLeft: 15 }}>
                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.UserName}</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 16,color: '#333'}}>
                        这里写医生的自我简介
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                      <View style={{flex: 1}}>
                        <View style={{backgroundColor: 'blue', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 4}}>
                          <Text style={{color: '#fff', }}>可预约</Text>
                        </View>
                      </View>
                      <View style={{flex: 4, paddingTop: 4, paddingLeft: 15}}>
                        <Text>这里些医生的级别</Text>
                      </View>

                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </Card>
      </ScrollView>



    );
  }
}

ExpertList.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 20}}>{TITLE}</Text>
        </View>
      )
    },
    headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
      <Text>
        搜索
      </Text>
    </View>
  }
};

const createState = function(state) {
  return ({...state.expert, ...state.user})
}

export default connect(createState)(ExpertList)
