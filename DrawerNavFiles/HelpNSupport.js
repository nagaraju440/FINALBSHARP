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
import Menu from '../Icons/Menu'
import Notification from '../Icons/Notification';
import User from '../Icons/User'
// import Floatstack from '../screens/floatstack'
import FloatingActionRightScreen from '../screens/float'
function HelpNSupport({navigation}){
    return(
    <View style={{backgroundColor:'white',height:800}}>
      <View>
             <View style={{width:"100%",height:57,flexDirection:'row',alignItems:'center',borderWidth:0.0,elevation:1}}>

             <View style={{marginLeft:'6.5%'}}>
                <TouchableOpacity 
               onPress={()=>{
                    navigation.openDrawer()
                }}
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
                    // navigation.navigate('NotificationPage')
                }}
               >
               <Notification/>
               </TouchableOpacity>
           </View>
           <View style={{marginLeft:'3.5%'}}>
              <TouchableOpacity
              onPress={()=>{
                    // navigation.navigate('UserPage')
                }} >
              <User/>
              </TouchableOpacity>
           </View>
             </View>
            </View>
         
        <Text>
            hi HelpNSupport
        </Text>
        {/* <View style={{marginTop:200}}> */}
      {/* <Floatstack/> */}
      <FloatingActionRightScreen/>
            {/* </View> */}
    </View>
    )
}
export default HelpNSupport;