import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from'./Home'
import Notification from '../NavBar/Notification'

const Stack = createStackNavigator();

export default function MyStack() {
  return (    
      <Stack.Navigator initialRouteName="Notification">
           <Stack.Screen name=" Notification" component={ Notification} />
           {/* <Stack.Screen name="Home" component={Home} /> */}
     </Stack.Navigator>
   
  );
}