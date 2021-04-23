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
import LandingPage22 from '../screens/LandingPage22'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUpPage'
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
       <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LandingPage22" component={LandingPage22}/>
        <RootStack.Screen name="LoginPage" component={LoginPage}/>
        <RootStack.Screen name="SignUpPage"component={SignUpPage}/>
        </RootStack.Navigator>
       )
   }
}
export default RootStackScreen;