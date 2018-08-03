import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left , Right, Icon, Thumbnail  } from 'native-base';
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
            <Item style={[styles.listItem, {marginTop: 20}]}>
              <TouchableOpacity onPress={() => this.navigate('QRCode')}>
                <Left style={{flex: 1, flexDirection: 'row'}}>
                  <Thumbnail square source={require('../../../assets/images/a8.jpg')} />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{
                      fontSize: 16,
                      color: '#333',
                      height: 30,
                      lineHeight: 30
                    }}>赵千山</Text>
                    <Text style={{color: '#888'}}>fdsafdsafdsafdsafdsafdsafdsafdsafdsafdsa</Text>
                  </View>
                </Left>
              </TouchableOpacity>
              {/*<Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />*/}
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Examination')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{fontSize: 30}}
                />
                <Text style={styles.listItemLeftText}>检查</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Follow')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{fontSize: 30}}
                />
                <Text style={styles.listItemLeftText}>关注</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('MyRegistration')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{fontSize: 30}}
                />
                <Text style={styles.listItemLeftText}>预约</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Record')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{fontSize: 30}}
                />
                <Text style={styles.listItemLeftText}>记录</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Follow')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{fontSize: 30}}
                />
                <Text style={styles.listItemLeftText}>推荐[智护康]给好友</Text>
              </Left>
            </Item>
          </List>
        </Content>



      </Container>
    );
  }
 /* _renderItem({ index, item, section }) {
    return (
      <TouchableNativeFeedback
        title="Go to Details"
        onPress={() => item.type && navigator.push({screen: `Koe.${item.type}`})}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{item.title}</Text>
          {
            item.icon
              ? item.icon
              : (
              <Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />
            )
          }
        </View>
      </TouchableNativeFeedback>
    )
  }*/
}
export default connect((state) => ({
  ...state.user
}))(UserPage)