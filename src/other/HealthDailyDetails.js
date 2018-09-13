import React, { Component } from 'react';
import { Image,StatusBar, View, Button, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Icon, Text } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '健康日报',
    }
  };

  componentDidMount() {}

  _onPressButton() {
    /*this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })*/
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (
    <Container>
      <Content>
        <Card transparent>
          <View style={styles.card}>
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>健康日报</Text>
            </View>
            <View style={styles.cardImageBox}>
              <Image style={styles.cardImage} source={require('../../../assets/images/a1.jpg')}/>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardContentText}>健康日报健康日，报健康日报健康日报健康日，报健康日报健康日，报健康日报健康日报健康日，报健康日报健......</Text>
            </View>
          </View>

          <CardItem style={{flex: 1, borderRadius: 4 }}>
            <Left style={{flex: 1 }}>
              <Text style={{width: '100%', fontSize: 12,}}>
                2018-12-12
              </Text>
            </Left>
            <Right style={{flex: 2, paddingLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Icon type="FontAwesome" name="thumbs-o-up" style={{color:"#aaa", marginRight: 25}}/>
              <Icon type="FontAwesome" name="comments-o" style={{color:"#aaa", marginRight: 5}}/>
              <Text style={{ fontSize: 12, marginRight: 25 }}>
                33
              </Text>
              <Icon type="FontAwesome" name="heart-o" style={{color:"#aaa"}}/>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>

    );
  }
}


const styles =  StyleSheet.create({

  card: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa'
  },
  cardTitle: {
    height: 30,
  },
  cardTitleText: {
    fontSize: 20,
    color: '#333',
  },
  cardImageBox: {
    height: 200,
    overflow: 'hidden',
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardImage: {
    width: '100%',
    overflow: 'hidden'
  },
  cardContent: {
    backgroundColor: '#fafafa',
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardContentText: {
    fontSize: 16,
    lineHeight: 30,
  },

});
