import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import styles from './style'


const { width, height } = Dimensions.get('window');

type Props = {};
class Select extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  static defaultProps = {
    dataStructure: null,
    visible: false,
    selectItem: () => {},
    onRequestClose: () => {},
    onClose: () => {},
  }

  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { dataStructure, visible, selectItem, onRequestClose, onClose } = this.props

    return (
      <Modal
        underlayColor="#000"
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <TouchableWithoutFeedback  onPress={onClose} >
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.selectBox}>
                {
                  dataStructure && dataStructure.map((item, key) => (
                    <TouchableHighlight
                      key={key}
                      activeOpacity={.8}
                      underlayColor="#A3FFCD"
                      onPress={() => selectItem(item)}
                    >
                      <View style={styles.selectItem}>
                        <Text style={{fontSize: 16}}>{item}</Text>
                      </View>
                    </TouchableHighlight>
                  ))
                }

              </View>

            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
export default Select