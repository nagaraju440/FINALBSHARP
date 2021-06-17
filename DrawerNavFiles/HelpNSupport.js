import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Menu from '../Icons/Menu';
import Notification from '../Icons/Notification';
import User from '../Icons/User';
// import Floatstack from '../screens/floatstack'
// import FloatingActionRightScreen from '../screens/float';
import StackNav from '../TopNavs/stack';
function HelpNSupport({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: 800}}>
      <StackNav/>

      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text> Updated soon ..!</Text>

      </View>
    </View>
  );
}
export default HelpNSupport;
