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
import Decide from './Decide'
// import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import Video from '../StackNavs/Video';
import ViewCourse from '../DrawerNavFiles/ViewCourse1';
import DetailsOfDemoClass from '../DetailsOfDemoClass'
import AfterBookDemo from '../DrawerNavFiles/AfterBookDemo';
const RootStack = createStackNavigator();

class StackNavi extends React.Component{
      render(){
       return(
       <RootStack.Navigator >
        <RootStack.Screen name="DrawerNavi" component={Decide} options={{headerShown:false}}/>
        <RootStack.Screen name="Video" component={Video}/>
        <RootStack.Screen name="ViewCourse" component={ViewCourse}/>
        <RootStack.Screen name="DetailsOfDemoClass" component={DetailsOfDemoClass}/>
        <RootStack.Screen name="AfterBookDemo" component={AfterBookDemo} options={{headerShown:false}} />


        {/* <RootStack.Screen name="SignUpPage"component={Drawernavi}/> */}
        </RootStack.Navigator>
       )
   }
}
export default StackNavi;