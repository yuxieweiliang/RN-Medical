import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, Image, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import { Container, CardItem, Card, Tab, Tabs, Left, Body, Button, Right, Content, Thumbnail } from 'native-base';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { fullList, paperList } from '../../reducers/user/actions'
import { connect } from 'react-redux'
import TelephoneInterview from './TelephoneInterview'

const { width, height } = Dimensions.get('window');








/**
 * 就医历史
 */
class HistoryMedical extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    console.log(this.props)
    // dispatch(fullList({}))

    // 电话访谈
    dispatch(paperList({}))


  }

  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  navTo() {
    this.props.navigator.push()
  }
  render() {
    return (

      <Container style={styles.container}>
        <Tabs initialPage={0}>
          <Tab heading="检查" style={{backgroundColor: '#fafafa'}}>
            <Content>
              <Card transparent style={{padding: 0, margin: 0, borderWidth: 1, borderColor: 'red'}}>
                <CardItem bordered={true}>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <View><Text>入fdsafdsafdsafdsafdsa</Text></View>}/>
                </CardItem>
                <CardItem >
                  <Right style={{flex:1}}>
                    <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem bordered={true}>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <View><Text>入fdsafdsafdsafdsafdsa</Text></View>}/>
                </CardItem>
                <CardItem >
                  <Right style={{flex:1}}>
                    <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <View><Text>入fdsafdsafdsafdsafdsa</Text></View>}/>
                </CardItem>
                <CardItem >
                  <Right style={{flex:1}}>
                    <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Text>CT</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <View><Text>入fdsafdsafdsafdsafdsa</Text></View>}/>
                </CardItem>
                <CardItem >
                  <Right style={{flex:1}}>
                    <Text>2018-12-1fdsafdsafdsafdsa2</Text>
                  </Right>
                </CardItem>
              </Card>

            </Content>
          </Tab>
          <Tab heading="宣教" style={{backgroundColor: '#fafafa'}}>
            <Content>
              <Card transparent style={{padding: 0, margin: 0, borderWidth: 1, borderColor: 'red'}}>
                <CardItem bordered={true}>
                  <Text>健康宣教的列表1</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <Left><Text style={{flex: 1}}>入</Text></Left>
                  <Right style={{flex:1}}>
                    <Text>2018-12-12</Text>
                  </Right>
                </CardItem>
                <CardItem >
                </CardItem>
              </Card>

              <Card transparent style={{padding: 0, margin: 0, borderWidth: 1, borderColor: 'red'}}>
                <CardItem bordered={true}>
                  <Text>健康宣教的列表2</Text>
                </CardItem>
                <CardItem button onPress={this.navTo.bind(this)}>
                  <Left><Text style={{flex: 1}}>出</Text></Left>
                  <Right style={{flex:1}}>
                    <Text>2018-12-12</Text>
                  </Right>
                </CardItem>
                <CardItem >
                </CardItem>
              </Card>
            </Content>
          </Tab>


          {/*    电话访谈    */}
          <Tab heading="访谈" style={{backgroundColor: '#fafafa'}}>
            <TelephoneInterview/>
          </Tab>


          <Tab heading="问诊" style={{backgroundColor: '#fafafa'}}>
            <Card style={styles.list} title="存在问题：这里是问题？">
              <View style={styles.listBody}>
                <View style={{flexDirection: 'column', height: 200}}>
                  <Text style={{ width: 100 }}>健康指导：</Text>
                  <Text style={{flex: 1}}>就医历史就医历,史就医历史就医历史,就医历史就医历史,就医历史就医历史就医,历史就医历史就医历,史就医历史</Text>
                </View>
              </View>
            </Card>
          </Tab>
        </Tabs>

      </Container>

    );
  }
}



export default connect(state => ({...state.user}))(HistoryMedical)