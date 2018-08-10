import React, { Component } from 'react';
import { Image,ScrollView, View, Dimensions, TouchableHighlight, TextInput, FlatList } from 'react-native';
import { Container, Content, Button, Icon, Header, Text, List, ListItem, Item, Left, Right, Input, Body, Title, CheckBox } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import { getIllnessList } from '../../../reducers/system/actions'
import expertAction from '../../../reducers/expert/actions'

const TITLE = '选择病种'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getIllnessList({hospitalId: 1001}))
  }


  componentDidMount() {}
  componentWillUnmount() {}

  _onPressList(option) {
    const { navigator, dispatch, router } = this.props

    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'illness',
        value: option
      }
    })


    if(router === 'pop') {
      navigator.pop()
    } else {
      navigator.push({
        screen: 'Koe.ExpertHome',
        params: {
          doctor: option,
        }})
    }
  }
  render() {
    let { illnessList }= this.props
    illnessList = illnessList && illnessList.map(item => ({...item, key: item.Illness_Name + item.ID}))

    console.log(illnessList)
    return (
    <Container>
      <Header>
        <Left/>
        <Body>
        <Title>{ TITLE }</Title>
        </Body>
        <Right><Text style={{color: '#fff'}}>跳过</Text></Right>
      </Header>
      <Content style={styles.container}>

        {
          illnessList && (
            <List dataArray={illnessList}
                  renderRow={(item) => {
                    console.log(item)
                    return (
                      <ListItem>
                        <View style={{width: 40}}><CheckBox checked={true} color="blue"/></View>

                        <Text>{item.Illness_Name}</Text>
                      </ListItem>
                    )
                  }
                  }>
            </List>
          )
        }



        {/*<FlatList
          data={illnessList}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressList(item)}>
              <View style={styles.list}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.Illness_Name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />*/}
      </Content>
      <View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>

        <Button style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text>下一步</Text>
        </Button>
      </View>
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
