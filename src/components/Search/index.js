import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, ScrollView, TextInput, Dimensions , StyleSheet  } from 'react-native';
import { Container, Content, Header, Button,  Item, Input, Tab, List, ListItem, CardItem, Left, Right, Icon, Text, Grid } from 'native-base';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {};
class Search extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      search: false, // true false
      tag: '搜索',
      back: '取消'
    }
  }

  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  onPressTag(tag) {
    this.setState({
      search: true, // true false
      tag: '搜索' + tag,
      back: '返回'
    })
  }

  /**
   * 渲染搜索页面
   * @returns {XML}
   */
  renderSearchTag() {
    return (
      <Content>
        <Grid style={{
          width: width,
          paddingTop: 60,
          padding: 20,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Text style={{color: '#ccc'}}>搜索指定内容</Text>
        </Grid>
        <Grid style={{
          width: width,
          padding: 20,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Button style={{margin: 2}}
                  small
                  transparent
                  success
                  onPress={() => this.onPressTag('Puppies')}
          >
            <Text>Puppies</Text>
          </Button>
          <Button style={{margin: 2}}
                  small
                  transparent
                  success
                  onPress={() => this.onPressTag('Kittens')}
          >
            <Text>Kittens</Text>
          </Button>
          <Button style={{margin: 2}}
                  small
                  transparent
                  success
                  onPress={() => this.onPressTag('Cubs')}
          >
            <Text>Cubs</Text>
          </Button>
        </Grid>

      </Content>
    )
  }
  // 渲染搜索出来的列表
  renderSearchList() {
    var items = [
      {key: 'a', value: 'Simon Mignolet'},
      {key: 'b', value: 'Nathaniel Clyne'},
      {key: 'c', value: 'Dejan Lovren'},
      {key: 'd', value: 'Mama Sakho'},
      {key: 'e', value: 'Emre Can'},];
    return (
      <Content>
        <FlatList
          data={items}
          // 列表为空时
          ListEmptyComponent={this.renderEmpty()}
          // 搜索的条目
          renderItem={({item}) => this.renderItem(item)}
        >
        </FlatList>
      </Content>
    )

  }
  // 渲染搜索的条目
  renderItem(item) {
    return (
      <Item style={{padding: 10}}>
        <Text style={{flex: 1}}>{item.value}</Text>
        <Icon
          type="EvilIcons"
          name="chevron-right"
          style={{fontSize: 40}}
        />
      </Item>
    )
  }
  // 当搜索列表为空时显示
  renderEmpty() {
    return (
      <View style={styles.searchItemEmpty}>
        <Text style={{color: '#999'}}>没有搜素到相关内容</Text>
      </View>
    )
  }


  searchValue() {
    const { tag, value } = this.state
    this.setState({search: true})
    console.log(value, tag)
  }
  back() {
    if(this.state.back === '取消') {
      this.props.navigator.pop()
    } else {
      this.setState({
        search: false,
        back: '取消',
        tag: '搜索'
      })
    }
  }
  render() {
    const { title, more, children, style} = this.props
    return (
      <Container>
        <Header>
          <View style={styles.search}>
            <Item regular style={{height: 36, backgroundColor: 'rgba(255, 255, 255, .4)', borderRadius: 4, borderColor: 'transparent'}}>
              <Icon name="ios-search" style={{color:'rgba(255, 255, 255, .6)'}}/>
              <Input
                style={{color: 'rgba(255, 255, 255, .8)'}}
                onChangeText={(value) => this.setState({ value })}
                returnKeyType ="search"
                onSubmitEditing={(e) => this.searchValue(e)}
                placeholderTextColor={'rgba(255, 255, 255, .8)'}
                placeholder={this.state.tag}
              />
            </Item>
          </View>

          <Button
            transparent
            onPress={() => this.back()}>
            <Text style={{color: 'rgba(255, 255, 255, .6)'}}>{this.state.back}</Text>
          </Button>
        </Header>

        {
          this.state.search ? this.renderSearchList() : this.renderSearchTag()
        }
      </Container>
    );
  }
}
export default Search