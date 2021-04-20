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
x=0;
 auth().onAuthStateChanged((user) => {
    if (user) {
    //   setAuthenticated(true);
    console.log("a user is there",auth().currentUser.email)
    x=1;
    } else {
        x=0;
    console.log("no  user is there")

    }
  })
class RootStackScreen extends React.Component{
      render(){
       return(
        //    <Text>{this.state.com}</Text>
     
        <RootStack.Navigator headerMode='none'>

        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Signup" component={Signup}/>
        
    </RootStack.Navigator>
       )
   }
}
export default RootStackScreen;