import React from 'react';
// import CreditCardicon from './CreditCardicon'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  View,
} from 'react-native';
import { AppLink } from 'react-native-fbsdk';
import Menu from '../Icons/Menu';
import Notification from '../Icons/Notification';
import User from '../Icons/User';
import StackNav from '../TopNavs/stack';
function Settings({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height:800}}>
      <StackNav/>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text> Updated soon ..!</Text>

      </View>
    </View>
  );
}
export default Settings;
