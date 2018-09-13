import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Header, Content, List, ListItem , Item, Left, Tabs, Tab, Right, Icon, Text  } from 'native-base';
import styles from './style'

const { width, height } = Dimensions.get('window');

type Props = {};
class Select extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {}

  render() {
    const { label, value, onPress } = this.props

    return (
      <Item style={{height: 40, paddingRight: 10, flex: 1}} onPress={onPress}>
        <Left style={{flexDirection: 'row'}}>
          <Text>{label}: </Text>
          <Text style={{paddingLeft: 10}}>{value}</Text>
        </Left>
        <Icon name="chevron-down" type="EvilIcons"/>
      </Item>
    );
  }
}
export default Select