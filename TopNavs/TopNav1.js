import React, {PropTypes, Component} from 'react';
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
  Button,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import Courses from '../topnav2';
import Menu from '../Icons/Menu';
import Notification from '../Icons/Notification';
import User from '../Icons/User';
import AboutIcon from '../Icons/AboutIcon';
import HelpNSupportIcon from '../Icons/HelpNSupportIcon';
import MyCourseIcon from '../Icons/MyCourseIcon';
import PaymentsIcon from '../Icons/PaymentsIcon';
import About from '../DrawerNavFiles/About';
import HelpNSupport from '../DrawerNavFiles/HelpNSupport';
import MyCourses from '../DrawerNavFiles/mycourses-P';
import Payments from '../DrawerNavFiles/Payments';
import SettingsIcon from '../Icons/SettingsIcon';
// import NotificationPage from '../Naviagations/NotificationPage'
// import UserPage from '../Navigations/UserPage'
import NotificationPage from '../Navigations/NotificationPage';
import UserPage from '../Navigations/UserPage';
import DrawerContent from '../Navigations/DrawerContent';
import Settings from '../DrawerNavFiles/Settings';
import DashBoardIcon from '../Icons/DashBoardIcon';
import Float from '../screens/float';
import Metronome from '../screens/Metronome'
import Tanpura from '../screens/Tanpura'
import Guitar from '../screens/Guitar'
import Aboutpage from '../DrawerNavFiles/About'
import topnav2 from '../topnav2'
import ViewCourse from '../DrawerNavFiles/ViewCourse'
const Stack = new createStackNavigator();

const TopNav1 = ({navigation}) => {
  // console.log('hii dashboard:TopNav1');
  // console.log(props.route.params.Params,"hloooooooo")
  return (
    //--------------- Creating stack navigation for TopNav-------------------
    // <NavigationContainer>
    <Stack.Navigator
    //    screenOptions={{
    //             headerShown: false
    //                }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Float}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="NotificationPage" component={NotificationPage} />
      <Stack.Screen name="UserPage" component={UserPage} />
      <Stack.Screen name="UserPage1" component={UserPage} /> */}
      <Stack.Screen name="Metronome" component={Metronome} />
      <Stack.Screen name="Tanpura" component={Tanpura} />
      <Stack.Screen name="Guitar" component={Guitar} />
      <Stack.Screen name="About" component={Aboutpage}   options={{headerShown: false}}/>  
      <Stack.Screen name="topnav2" component={topnav2} />
      <Stack.Screen name="ViewCourse" component={ViewCourse} options={{headerTitle:'Course Details'}}/>
    </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
};
export default TopNav1;

const styles = StyleSheet.create({
  direction: {
    flexDirection: 'row',
  },
  Menu: {
    paddingLeft: 25,
  },
  Notification: {
    paddingLeft: 100,
    paddingRight: 15,
  },
  User: {
    paddingRight: 20,
  },
  image: {
    width: 26,
    height: 39,
  },
  Sections: {
    marginLeft: 15,
  },
});
