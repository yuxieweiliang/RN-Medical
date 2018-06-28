import { Navigation } from 'react-native-navigation';
import { Text, FlatList, TouchableOpacity, View, ScrollView, Image, Dimensions , StatusBar  } from 'react-native';
import Login from './Login';
import AppHome from './AppHome';
import Consult from './system/Consult';
const CustomButton = ({ text }) =>
  <TouchableOpacity
    style={{ backgroundColor: 'tomato' }}
    onPress={() => console.log('pressed me!')}
  >
      <View>
          <Text style={{ color: 'red' }}>
            fdsafdsafa
          </Text>
      </View>
  </TouchableOpacity>;

// Register the component
export default function (store, Provider) {
  Navigation.registerComponent('CustomButton', () => CustomButton);
    Navigation.registerComponent('Koe.Login', () => Login, store, Provider);
    Navigation.registerComponent('Koe.AppHome', () => AppHome, store, Provider);
    Navigation.registerComponent('Koe.Consult', () => Consult, store, Provider);
}