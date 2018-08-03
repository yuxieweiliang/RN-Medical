import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Text, Container, Header, Content, List, ListItem , Item, Left , Right, Icon, Button  } from 'native-base';
import behavior from './behavior'
import { getUser } from '../../reducers/user/actions'
import { registerForWY } from '../../reducers/app/actions'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {
    this.props.dispatch(getUser())/*.then(res => {
     // this.props.dispatch(registerForWY())
     })*/
  }

  navigate(router) {
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { user } = this.props
    const messageStructure = user && behavior.createStructure(user)

    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <List>

            <ListItem itemDivider>
              <Left>
                <Text>预约挂号</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small transparent info><Text>创建</Text></Button>
                <Button small transparent info><Text>历史记录</Text></Button>
              </Right>
            </ListItem>
            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>
            </Item>
            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>
            </Item>
            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>

            </Item>

          </List>
          <List>

            <ListItem itemDivider>
              <Left>
                <Text>预约问诊</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small transparent info><Text>创建</Text></Button>
                <Button small transparent info><Text>历史记录</Text></Button>
              </Right>
            </ListItem>

            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>

            </Item>
            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>

            </Item>
            <Item style={[styles.listItem]}>
              <Left style={styles.listItemLeft}>
                <Text style={styles.listItemLeftText}>2018-12-12 12:12:12</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Button small info onPress={() => this.navigate('Friends')}><Text>取消</Text></Button>
              </Right>

            </Item>
          </List>
        </Content>



      </Container>
    );
  }

}
export default connect((state) => ({
  ...state.user
}))(UserPage)