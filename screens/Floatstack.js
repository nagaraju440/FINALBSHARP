import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TextInput,Button,ScrollView
} from 'react-native';
import FloatingActionRightScreen from '../screens/float'
import Tanpura from './Tanpura';
import Guitar from './Guitar';
import Metronome from './Metronome'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NotificationPage from '../Navigations/NotificationPage'
import UserPage from '../Navigations/UserPage'



const Stack = createStackNavigator();

class Floatstack extends React.Component{
      render(){
       return(
          
     
        <Stack.Navigator >
        <Stack.Screen name="float" component={FloatingActionRightScreen} options={{headerShown: false}}/>
        <Stack.Screen  name="Guitar" component={Guitar}/>
        <Stack.Screen name="Tanpura" component={Tanpura}/>
        <Stack.Screen name="Metronome" component={Metronome}/>
        <Stack.Screen name="NotificationPage" component={NotificationPage} />
        <Stack.Screen name="UserPage" component={UserPage} />

    </Stack.Navigator>
   
   
       )
   }
}
export default Floatstack;