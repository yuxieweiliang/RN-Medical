import React, { Component } from 'react';
import { FlatList, ImageBackground, View, TouchableOpacity, Image, Dimensions , StatusBar  } from 'react-native';
import { Container, Icon, Content, List, ListItem, Text, Left, Button, Right } from 'native-base';
import styles from './style'
import { exit } from '../../reducers/app/actions'
import { connect } from 'react-redux'


const { width, height } = Dimensions.get('window');

class DrawerLeft extends Component {

  router(screen) {
    /*this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });*/
    this.props.navigator.showModal({screen})
  }
  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity onPress={() => this.router('Koe.User.UserMessages')}>
          <ImageBackground
            style={styles.headerBackgroundImage}
            source={require('../../../assets/images/a8.jpg')}
          >
            <View style={styles.portraitBox}>
              <Image source={require('../../../assets/images/a4.jpg')} style={{height: 50, width: 50, borderRadius: 100 }}/>
            </View>
            <View style={styles.usernameBox}>
              <Text style={styles.username}>
                Your text here
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <Content>
          <List>
            <ListItem onPress={() => this.router('Koe.Account')}>
              <Left>
                <Text style={{color: '#111'}}>
                  我的账户
                </Text>
              </Left>
              <Right>
                <Icon
                  type="EvilIcons"
                  name="chevron-right"
                  style={{fontSize: 40}}
                />
              </Right>
            </ListItem>
            {/*<ListItem onPress={() => this.router('Koe.Authentication')}>
              <Left>
                <Text style={{color: '#111'}}>
                  认证
                </Text>
              </Left>
              <Right>
                <Icon
                  type="EvilIcons"
                  name="chevron-right"
                  style={{fontSize: 40}}
                />
              </Right>
            </ListItem>*/}
            <ListItem onPress={() => this.router('Koe.Help')}>
              <Left>
                <Text style={{color: '#111'}}>
                  帮助中心
                </Text>
              </Left>
              <Right>
                <Icon
                  type="EvilIcons"
                  name="chevron-right"
                  style={{fontSize: 40}}
                />
              </Right>
            </ListItem>
          </List>
        </Content>
        <View style={styles.footer}>
          <Left  style={styles.footerLeft}>
            <Button small transparent  onPress={() => this.router('Koe.Register')}>
              <Text>注册</Text>
            </Button>
            <Button small transparent  onPress={() => this.router('Koe.Login')}>
              <Text>登陆</Text>
            </Button>
          </Left>
          <Right  style={styles.footerRight}>
            <Button small transparent onPress={() => this.props.dispatch(exit())}>
              <Text>退出</Text>
            </Button>
          </Right>
        </View>
      </Container>
    );
  }
}


export default connect()(DrawerLeft)