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



const Stack = createStackNavigator();

class Floatstack extends React.Component{
      render(){
       return(
       <NavigationContainer>
        <Stack.Navigator headerMode='none'>

        <Stack.Screen name="float" component={FloatingActionRightScreen}/>
        <Stack.Screen name="Guitar" component={Guitar}/>
        <Stack.Screen name="Tanpura" component={Tanpura}/>
        <Stack.Screen name="Metronome" component={Metronome}/>

    </Stack.Navigator>
    </NavigationContainer>
       )
   }
}
export default Floatstack;