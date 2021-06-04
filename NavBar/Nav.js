import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight ,
    Button,
    View
} from 'react-native';
import Courses from '../topnav2'
import Profile from './Profile'
import Notification from './Notification'
import Menu from './Menu'
import Home from '../TestNavigate/Home'
import Contact from '../TestNavigate/Contact'
import Homeicon from './Homeicon'
import Abouticon from'./Abouticon'
import Messagesicon from './Messagesicon'
import MusicPlayericon from'./music-playericon'
import Settingsicon from './Settingsicon'
import DashBoard from './DashBoard';
import DrawerContent from './DrawerContent'
import CreditCardicon from './CreditCardicon';
import { color } from 'react-native-reanimated';
const Stack = createStackNavigator();
const Nav=({navigation})=>{
    return(
     
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Courses}
          options={{
            title: 'BS#arp',
            headerTitleStyle:{
            fontSize:18,
            fontWeight:'300'
            },
            headerLeft:()=><TouchableOpacity  style={styles.menu} onPress={() =>  navigation.openDrawer()} ><Menu/></TouchableOpacity >,
            headerRight:()=><View  style={styles.direction}>
                              <TouchableOpacity  style={styles.notification}  onPress={() =>  navigation.navigate(Notify)}><Notification /></TouchableOpacity>
                              <TouchableOpacity  style={styles.profile} onPress={() =>  navigation.navigate(User)}><Profile/></TouchableOpacity>
                            </View>,
          }}
        />
        <Stack.Screen name="Notify" component={Notify}/>
        <Stack.Screen name="User" component={User}/>
        </Stack.Navigator>
     
    )  
    } 
     
const Drawer = createDrawerNavigator();
        function Drawernav(){
          return(
            <NavigationContainer>
            <Drawer.Navigator
            drawerContent={props =><DrawerContent {...props}/>} >
            <Drawer.Screen name="Dashboard" component={Nav} style={styles.icons}
            options={{
              title:'Dashboard',
              // marginLeft:100,
              
              drawerIcon:({tintcolor})=>(
                <Homeicon
                //  style={{activeTintColor:'blue'}}
                // style={styles.icons}
                />
                ),
                // drawerStyle:{paddingLeft:100,backgrouncolor:'black'},
            }}/>
            <Drawer.Screen name="My Courses" component={ MyCourses} 
            options={{
              title:'My Courses',
              drawerIcon:({focused,size})=>(
                <MusicPlayericon style={{color:'blue'}}/>
              )
            }}
            />
            <Drawer.Screen name="Payments" component={Payments}
             options={{
              title:'Payments',
              drawerIcon:({focused,size})=>(
                <CreditCardicon />
              )
            }}
            />
            <Drawer.Screen name="About" component={About}
             options={{
              title:'About',
              drawerIcon:({focused,size})=>(
                <Abouticon />
              )
            }}
            />
            <Drawer.Screen name="Help & Security" component={HelpSecurity}
             options={{
              title:'Help & Security',
              drawerIcon:({focused,size})=>(
                <Messagesicon />
              )
            }}
            />
            <Drawer.Screen name="Settings" component={Settings} 
             options={{
              title:'Settings',
              drawerIcon:({focused,size})=>(
                <Settingsicon />
              )
            }}
            />
            </Drawer.Navigator> 
            </NavigationContainer>
           )
      }
      function Notify({navigation}){
        return(
         <View>
            <Text>Hiii this is notification</Text>
          </View>
        )
      }
      function User({navigation}){
        return(
          <View>
            <Text >Hiii this is profile</Text>
          </View>
        )
      }
      function MyCourses({navigation}){
        return(
          <View>
            <Text>Hiii this is MyCourses</Text>
          </View>
        )
      }
      function Payments({navigation}){
        return(
          <View>
            <Text>Hiii this is Payments</Text>
          </View>
        )
      }
      function About({navigation}){
        return(
          <View>
            <Text>Hiii this is About</Text>
          </View>
        )
      }
      function HelpSecurity({navigation}){
        return(
          <View>
            <Text>Hiii this is Help & Security</Text>
          </View>
        )
      }
      function Settings({navigation}){
        return(
          <View>
            <Text>Hiii this is Settings</Text>
          </View>
        )
      }
    const styles=StyleSheet.create({
        menu:{
            paddingLeft:25
         },
        profile:{
           paddingRight:25,
        },
        notification:{
          paddingRight:15,
        },
        direction:{
          flexDirection:'row'
        },
        icons:{
          left:35,
          paddingLeft:30,
          // paddingLeft:100,
          // color:'black'
        }
       
    })
    
    export default Drawernav

