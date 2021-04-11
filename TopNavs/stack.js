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
class StackNav extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
             <View style={{width:"100%",height:57,flexDirection:'row',alignItems:'center',borderWidth:0.0,elevation:1}}>

             <View style={{marginLeft:'6.5%'}}>
                <TouchableOpacity 
                
                >
                <Menu/>
                </TouchableOpacity>
             </View>
           <View style={{marginLeft:'5.5%'}}>
               <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Poppins'}}>BS#arp</Text>
           </View>
           <View style={{marginLeft:'44.9%'}}>
               <TouchableOpacity
               onPress={()=>{
                    this.props.navigation.navigate('NotificationPage')
                }}
               >
               <Notification/>
               </TouchableOpacity>
           </View>
           <View style={{marginLeft:'3.5%'}}>
              <TouchableOpacity>
              <User/>
              </TouchableOpacity>
           </View>
             </View>
            </View>
         );
    }
}
 
export default StackNav;