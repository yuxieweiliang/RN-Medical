import React, { Component } from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {};
class Search extends Component<Props> {

  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { title, more, children, style} = this.props
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid="transparent"
                   style={styles.searchInput}
                   placeholderTextColor="#666"
                   placeholder="内科"/>
      </View>
    );
  }
}
export default Search