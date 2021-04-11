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
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from '../screens/Login';
import Signup from '../screens/signup';
import Aboutpage from '../Aboutpage';
import Drawernavi from '../Navigations/TopNav'
// import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
const RootStack = createStackNavigator();

class RootStackScreen extends React.Component{
      render(){
       return(
        //    <Text>{this.state.com}</Text>
     
        <RootStack.Navigator headerMode='none'>

        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Signup" component={Signup}/>
        <RootStack.Screen name="Aboutpage" component={Drawernavi}/>
    </RootStack.Navigator>
       )
   }
}
export default RootStackScreen;