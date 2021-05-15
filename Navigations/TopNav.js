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
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import NotificationPage from './NotificationPage'
import UserPage from './UserPage'
import DrawerContent from './DrawerContent';
import Settings from '../DrawerNavFiles/Settings'
import DashBoardIcon from '../Icons/DashBoardIcon';
import Floatstack from '../screens/float'

import TopNav1 from '../TopNavs/TopNav1'
import TopNav2 from '../TopNavs/TopNav2'
import TopNav3 from '../TopNavs/TopNav3'
import TopNav4 from '../TopNavs/TopNav4'
import TopNav5 from '../TopNavs/TopNav5'
import TopNav6 from '../TopNavs/TopNav6'
const Stack = new createStackNavigator();
const Drawer = createDrawerNavigator();
function Drawernavi(route,navigation){
        return(
            <>
{/* -------------------------------creating Navigation Container------------------------------             */}
        {/* <NavigationContainer> */}
    {/* --------------------------------creating Drawer navigation--------------------------------         */}
            <Drawer.Navigator
              onChange={()=>{console.log("clicked")}}
            drawerContent={props =><DrawerContent {...props}
            options={{
                title:"BS#ARP",
            }}

              />}
             
            >
         {/* --------------------------------creating Drawer Screens---------------------------------- */}
            <Drawer.Screen name="Dashboard" component={TopNav1}
           
             options={{
                headerShown: false,
             drawerIcon: ({focused, size}) => (
             <DashBoardIcon/>
             
            )
            }}/>
            <Drawer.Screen name="MyCourses" component={TopNav2}
            options={{
            drawerIcon: ({focused, size}) => (
            <MyCourseIcon/>
            )
            }}/>
            <Drawer.Screen name="Payments" component={TopNav3}
            options={{
            drawerIcon: ({focused, size}) => (
            <PaymentsIcon/>
            )
            }}/>
            <Drawer.Screen name="About" component={TopNav4}
            options={{
            drawerIcon: ({focused, size}) => (
            <AboutIcon/>
            )
            }}/>
            <Drawer.Screen name="HelpNSupport" component={TopNav5}
            options={{
            drawerIcon: ({focused, size}) => (
            <HelpNSupportIcon/>
            )
            }}/>
            <Drawer.Screen name="Settings" component={Floatstack}
            options={{
            drawerIcon: ({focused, size}) => (
            <SettingsIcon/>
            )
            }}/>
            </Drawer.Navigator>
        {/* </NavigationContainer> */}
        </>
        )
    }
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
    export default Drawernavi;
// export default TopNav
