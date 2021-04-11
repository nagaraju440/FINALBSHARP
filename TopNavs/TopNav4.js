import React, { PropTypes, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer ,useRoute} from '@react-navigation/native';
import Courses from '../topnav2';
import Menu from '../Icons/Menu'
import Notification from '../Icons/Notification';
import User from '../Icons/User'
import AboutIcon from '../Icons/AboutIcon';
import HelpNSupportIcon from '../Icons/HelpNSupportIcon';
import MyCourseIcon from '../Icons/MyCourseIcon';
import PaymentsIcon from '../Icons/PaymentsIcon';
import About from '../DrawerNavFiles/About';
import HelpNSupport from '../DrawerNavFiles/HelpNSupport'
import MyCourses from'../DrawerNavFiles/mycourses-P'
import Payments from '../DrawerNavFiles/Payments'
import SettingsIcon from '../Icons/SettingsIcon';
// import NotificationPage from '../Naviagations/NotificationPage'
// import UserPage from '../Navigations/UserPage'
import NotificationPage from '../Navigations/NotificationPage'
import UserPage from '../Navigations/UserPage'
import DrawerContent from '../Navigations/DrawerContent';
import Settings from '../DrawerNavFiles/Settings'
import DashBoardIcon from '../Icons/DashBoardIcon';
const Stack = new createStackNavigator();


const TopNav4=({ navigation })=> {
    console.log('hii About:TopNav4');
    // console.log(props.route.params.Params,"hloooooooo")
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="About" 
                         component={About}
                         options={{headerShown: false}}
                        />
                        <Stack.Screen name="NotificationPage" component={NotificationPage} />
                        <Stack.Screen name="UserPage" component={UserPage} />
                        <Stack.Screen name="UserPage1" component={UserPage} />
                    </Stack.Navigator>
                    // {/* </NavigationContainer> */}
    )
}
export default TopNav4;

const styles=StyleSheet.create({
    direction:{
        flexDirection:'row'
      },
      Menu:{
       paddingLeft:25
      },
      Notification:{
          paddingLeft:100,
          paddingRight:15
      },
     User:{
         paddingRight:20
     },
     image:{
         width:26,
         height:39,
     },
     Sections:{
        marginLeft:15
      }
    })