import React from 'react'
// import CreditCardicon from './CreditCardicon'
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
import Menu from '../Icons/Menu'
import Notification from '../Icons/Notification';
import User from '../Icons/User'
 function Settings({navigation}) {
    return (
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
                   navigation.navigate('NotificationPage')
                }}
               >
               <Notification/>
               </TouchableOpacity>
           </View>
           <View style={{marginLeft:'3.5%'}}>
              <TouchableOpacity 
               onPress={()=>{
                   navigation.navigate('UserPage')
                }}
              >
              <User/>
              </TouchableOpacity>
           </View>
             </View>
            </View>
            <Text>hiii this is Settings</Text>
        </View>
    )
}
export default Settings