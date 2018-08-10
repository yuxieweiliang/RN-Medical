import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, TextInput, FlatList } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import { getDiseaseSpeciesList } from '../../../reducers/system/actions'
import { extendKey } from '../../../utils'

const TITLE = '专家列表'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getDiseaseSpeciesList({hospitalId: 1001}))
  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressList(option) {
    const { navigator, dispatch, router, onClose } = this.props
    onClose(option)
  }
  render() {
    const { diseaseSpeciesList }= this.props
    const list = extendKey(diseaseSpeciesList)

    return (
      <Container style={styles.container}>
        {
          list && (
            <List
              dataArray={list}
              renderRow={(item) => (
                <Item style={styles.list} onPress={() => this._onPressList(item)}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.Illness_Name}</Text>
                </Item>
              )}
            />
          )
        }
      </Container>
    );
  }
}

/*ExpertList.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
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
};*/

const createState = function(state) {
  return ({...state.system})
}

export default connect(createState)(ExpertList)
