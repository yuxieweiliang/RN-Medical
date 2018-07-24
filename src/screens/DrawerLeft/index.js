import React, { Component } from 'react';
import { FlatList, ImageBackground, View, TouchableOpacity, Image, Dimensions , StatusBar  } from 'react-native';
import { Container, Icon, Content, List, ListItem, Text, Left, Button, Right } from 'native-base';
import styles from './style'


const { width, height } = Dimensions.get('window');


export default class DrawerExample extends Component {

  router(screen) {
    this.props.navigator.showModal({screen})
  }
  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity onPress={() => this.router('Koe.UserMessages')}>
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
            <ListItem onPress={() => this.router('Koe.Authentication')}>
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
            </ListItem>
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
            <Button small transparent >
              <Text>注册</Text>
            </Button>
            <Button small transparent >
              <Text>登陆</Text>
            </Button>
          </Left>
          <Right  style={styles.footerRight}>
            <Button small transparent>
              <Text>退出</Text>
            </Button>
          </Right>
        </View>
      </Container>
    );
  }
}