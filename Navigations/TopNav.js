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
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Courses from '../topnav2';
import Menu from '../Icons/Menu'
import Notification from '../Icons/Notification';
import User from '../Icons/User'
import DashboardIcon from '../Icons/DashBoardIcon';
import AboutIcon from '../Icons/AboutIcon';
import HelpNSupportIcon from '../Icons/HelpNSupportIcon';
import MyCourseIcon from '../Icons/MyCourseIcon';
import PaymentsIcon from '../Icons/PaymentsIcon';
// import Bsharp from '../IMAGES/bsharp.png'
import Dashboard from '../DrawerNavFiles/Dashboard'
import About from '../DrawerNavFiles/About';
// import MyCourses from '../DrawerNavFiles/MyCourse'
import HelpNSupport from '../DrawerNavFiles/HelpNSupport'
import MyCourses from'../DrawerNavFiles/mycourses-P'
import Payments from '../DrawerNavFiles/Payments'
import SettingsIcon from '../Icons/SettingsIcon';
import NotificationPage from './NotificationPage'
import UserPage from './UserPage'
import DrawerContent from './DrawerContent';
import Settings from '../DrawerNavFiles/Settings'
import DashBoardIcon from '../Icons/DashBoardIcon';
// import Piano from '../IMAGES/pianoimage.jpg'
const Stack = createStackNavigator();

const TopNav=({navigation})=> {
    return (
            //--------------- Creating stack navigation for TopNav-------------------
                <Stack.Navigator>
                   <Stack.Screen 
                         name="Courses " 
                         component={Courses }
                         options={{
                             title:'BS#arp',
                            // headerTitleStyle:{
                            //     // height:80,
                            //     fontSize:16,
                            //     fontWeight:"500",
                            //     marginLeft:40,
                            //     fontFamily:'Roboto',
                            // },
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            onPress={()=> navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            onPress={()=> navigation.navigate('UserPage')}
                                            >
                                            <User/>
                                            </TouchableOpacity>
                                            </View>)   
                        }
                    }
                        />
                        <Stack.Screen name="NotificationPage" component={NotificationPage} />
                        <Stack.Screen name="UserPage" component={UserPage} />
                    </Stack.Navigator>
    )
}
const Drawer = createDrawerNavigator();
function Drawernavi(){
        return(
            <>
        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={props =><DrawerContent {...props} />}
            >
    <Drawer.Screen name="Dashboard" component={TopNav} 
    options={{
        drawerIcon: ({focused, size}) => (
            <DashBoardIcon/>
      )
      }}/>
    <Drawer.Screen name="MyCourses" component={MyCourses}
     options={{
        drawerIcon: ({focused, size}) => (
            <MyCourseIcon/>
      )
      }}
      />
    <Drawer.Screen name="Payments" component={Payments}
     options={{
        drawerIcon: ({focused, size}) => (
            <PaymentsIcon/>
      )
      }}
      />
    <Drawer.Screen name="About" component={About}
     options={{
        drawerIcon: ({focused, size}) => (
            <AboutIcon/>
      )
      }}
      />
    <Drawer.Screen name="HelpNSupport" component={HelpNSupport}
     options={{
        drawerIcon: ({focused, size}) => (
            <HelpNSupportIcon/>
      )
      }}
      />
    <Drawer.Screen name="Settings" component={Settings}
     options={{
        drawerIcon: ({focused, size}) => (
            <SettingsIcon/>
      )
      }}
      />
             </Drawer.Navigator>
        </NavigationContainer>
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
     }
    })
export default Drawernavi
// // title="BS#arp"
//             // drawerIcon:()=>(
//             //              <Image source={Bsharp} style={styles.image}/>
//             //         )
//             >
//             {/* <Drawer.Screen name="TopNav" component={TopNav}
//             //  options={{
//             //     // title:'BS#arp',
//             //      drawerIcon:()=>(
//             //          <Image source={Bsharp} style={styles.image}/>
//             //     )
//             // }}
//     /> */}
//     {/* <Drawer.Navigator/> */}
    