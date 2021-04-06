import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
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
// import
import Dashboard from '../DrawerNavFiles/Dashboard'
import About from '../DrawerNavFiles/About'
import HelpNSupport from '../DrawerNavFiles/HelpNSupport'
import MyCourse from'../DrawerNavFiles/MyCourse'
import Payments from '../DrawerNavFiles/Payments'
import SettingsIcon from '../Icons/SettingsIcon';
// import Piano from '../IMAGES/pianoimage.jpg'
const Stack = createStackNavigator();

const TopNav=()=> {
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
                                            // onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            >
                                            <User/>
                                            </TouchableOpacity>
                                            </View>)   
                        }
                    }
                        />
                    </Stack.Navigator>
    )
}
const Drawer = createDrawerNavigator();
function Drawernavi(){
        return(
        <NavigationContainer>
             <Drawer.Navigator
            // drawerContent={props =><DrawerContent {...props}/>} 
            >
            <Drawer.Screen name="TopNav" component={TopNav}
             options={{
                title:'BS#arp',
                //  drawerIcon:()=>(
                    //  <Piano/>
    // // //                 <DrawerIcon/>
                // )
            }}
    />
    <Drawer.Screen name="Dashboard" component={Dashboard}/>
    <Drawer.Screen name="About" component={About}/>
    <Drawer.Screen name="HelpNSupport" component={HelpNSupport}/>
    <Drawer.Screen name="MyCourse" component={MyCourse}/>
    <Drawer.Screen name="Payments" component={Payments}/>
             {/* //  drawerContent={props=><DrawerContent{...props}/>}  */}
             </Drawer.Navigator>
        </NavigationContainer>
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
     }
    })
export default Drawernavi