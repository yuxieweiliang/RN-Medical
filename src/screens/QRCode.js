import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, Card, CardItem, Item, Left , Right, Icon, Thumbnail  } from 'native-base';

const styles = {}
const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {

  }

  navigate(router) {
    this.props.navigator.push({screen: `Koe.${router}`})
  }
  render() {
    const { user } = this.props

    return (
      <Container style={{backgroundColor: '#eee'}}>

        <Content>
          <Item style={[styles.listItem, {marginTop: 20}]}>
            <TouchableOpacity onPress={() => this.navigate('Friends')}>
              <Left style={{flex: 1, flexDirection: 'row'}}>
                <Thumbnail square source={require('../../assets/images/a8.jpg')} />
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
          </Item>
          <Card>
            <CardItem>
              <Text style={{
                fontSize: 16,
                color: '#333',
                height: 30,
                lineHeight: 30
              }}>二维码</Text>
            </CardItem>
            <CardItem>
              <Image source={require('../.././assets/images/a8.jpg')}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default connect((state) => ({
  ...state.user
}))(UserPage)