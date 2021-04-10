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
const Stack = createStackNavigator();

const TopNav1=({ navigation })=> {
    console.log('hii dashboard:TopNav1');
    // console.log(props.route.params.Params,"hloooooooo")
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="Dashboard " 
                         component={Courses}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={()=>}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}
const TopNav2=({ navigation })=> {
    console.log('hii MyCourses:TopNav2');
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="MyCourses " 
                         component={MyCourses}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}
const TopNav3=({ navigation })=> {
    console.log('hii Payments:TopNav3');
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="Payments" 
                         component={Payments}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}
const TopNav4=({ navigation })=> {
    console.log('hii About:TopNav4');
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="About" 
                         component={About}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}
const TopNav5=({ navigation })=> {
    console.log('hii HelpNSupport:TopNav5');
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="HelpNSupport" 
                         component={HelpNSupport}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}
const TopNav6=({ navigation })=> {
    console.log('hii Settings:TopNav6');
    return (
            //--------------- Creating stack navigation for TopNav-------------------
            // <NavigationContainer>
               <Stack.Navigator>        
                   <Stack.Screen 
                         name="Settings" 
                         component={Settings}
                         options={{
                             title:'BS#arp',
                             headerLeft:()=>(<View 
                             style={styles.direction}
                            >
                                            <TouchableOpacity 
                                            style={styles.Menu}
                                            // onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                                            onPress={() =>  navigation.openDrawer()}
                                            ><Menu /></TouchableOpacity>
                                            </View>),
                             
                                            headerRight:()=>(<View 
                                            style={styles.direction}
                                            >
                                            < TouchableOpacity
                                            style={styles.Notification}
                                            // onPress={()=>console.log('hlo')}
                                            onPress={()=>navigation.navigate('NotificationPage')}
                                            >
                                            <Notification />
                                            </TouchableOpacity>
                                            < TouchableOpacity
                                            style={styles.User}
                                            // onPress={()=>console.log('hii-2')}
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
                    // {/* </NavigationContainer> */}
    )
}


const Drawer = createDrawerNavigator();
function Drawernavi(){
        return(
            <>
{/* -------------------------------creating Navigation Container------------------------------             */}
        <NavigationContainer>
    {/* --------------------------------creating Drawer navigation--------------------------------         */}
            <Drawer.Navigator
            drawerContent={props =><DrawerContent {...props}
            options={{
                title:"BS#ARP"
            }} 
              />}
            >
         {/* --------------------------------creating Drawer Screens---------------------------------- */}
            <Drawer.Screen name="Dashboard" component={TopNav1} 
             options={{
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
            <Drawer.Screen name="Settings" component={TopNav6}
            options={{
            drawerIcon: ({focused, size}) => (
            <SettingsIcon/>
            )
            }}/>
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
     },
     Sections:{
        marginLeft:15
      }
    })
    export default Drawernavi
// export default TopNav