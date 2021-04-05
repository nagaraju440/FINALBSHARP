import React from 'react'
import {View,StyleSheet,Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerItem,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Button
}from 'react-native-paper'
import MyCourses from './MyCourses';
import Payments from './Payments';
import About from './About';
import HelpSupport from './HelpSupport';
import Settings from './Settings';
import DashBoard from './DashBoard';
import Bsharpimg from '../images/bsharp.jpg'
import Homeicon from './Homeicon';
import MusicPlayericon from './music-playericon';
import CreditCardicon from './CreditCardicon';
import Abouticon from './Abouticon';
import Messagesicon from './Messagesicon';
import Settingsicon from './Settingsicon';
// import { color } from 'react-native-reanimated';
const Stack = createStackNavigator();
function DrawerContent(props,navigation){
    return(
        <View style={{flex:1}} >
            <DrawerContentScrollView {...props} style={styles.header}>
            <Drawer.Section >
                <View style={styles.direction}>
                <Image
                source={Bsharpimg} 
                style={styles.image}               
                />
                <Title style={styles.bsharp}>BS#ARP</Title>
                </View>
                </Drawer.Section>
                <Drawer.Section >
                    <View>
                <DrawerItemList  {...props} 
                labelStyle={{paddingLeft:28}}
                // activeTintColor='blue'
                />
                </View>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}
function All({navigation}){
    return(
      <View>
        <Text>Hiii this is D,M,P,A,H,S</Text>
      </View>
    )
  }
const styles=StyleSheet.create({
    bsharp:{
      fontSize:22,
      fontWeight:'500',
      marginLeft:28,
      marginTop:19
    },
    image:{
        width:26,
        height:39,
        marginLeft:35,
        marginTop:16
    },
    direction:{
        display:'flex',
        flexDirection:'row',
        // width:10
      },
      line:{
          width:1
      },
      header:{
          width:289
      },
      home:{
          display:'flex',
          flexDirection:'row',
          width:100,
          backgroundColor:'black'
      },
      font:{
       color:'#2C57EF'
      },
      icons:{
        marginLeft:40,
        color:'black'
      }
    //   Home:{
    //       float:left
    //   },
    //   dashboard:{
        
    //       float:right
    //   }

})
export default DrawerContent
 {/* <Drawer.Section >
                    <View >
                    <View style={{flex: 1, color: 'red',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'cochin',
        letterSpacing: 4}} >
                           <Homeicon  
                        //    onPress={()=>props.navigation.navigate(All)}
                           />
                           <DrawerItem label="Dashboard" 
                           onPress={()=>props.navigation.navigate(All)
                            icon
                        // <Button/>
                    }
                        //    onPress={()=> {console.log('Dashboard')}}
                            />
                        </View>
                     </View>
                     <View >
                        <MusicPlayericon  
                        // onPress={()=>props.navigation.navigate(All)}
                        />
                        <DrawerItem label="My Courses" 
                         onPress={()=>props.navigation.navigate(All)}
                        //  onPress={()=>{console.log('My Courses')}}
                         />
                    </View>
                    <View>
                        <CreditCardicon 
                        //  onPress={()=>props.navigation.navigate(All)}
                        />
                        <DrawerItem label="Payments"
                         onPress={()=>props.navigation.navigate(All)}
                        //  onPress={()=>{console.log('Payments')}} 
                        />
                    </View>
                    <View>
                        <Abouticon 
                        //  onPress={()=>props.navigation.navigate(All)}
                        />
                        <DrawerItem label="About" 
                         onPress={()=>props.navigation.navigate(All)}
                        // onPress={()=>{console.log('About')}} 
                        />
                    </View>
                    <View>
                        <Messagesicon  
                        // onPress={()=>props.navigation.navigate(All)}
                         />
                        <DrawerItem label="Help & Support" 
                         onPress={()=>props.navigation.navigate(All)}
                        //  onPress={()=>{console.log('Help & Support')}}
                         />
                    </View>
                    <View>
                        <Settingsicon  
                        // onPress={()=>props.navigation.navigate(All)}
                        />
                        <DrawerItem label="Settings" 
                         onPress={()=>props.navigation.navigate(All)}
                        //  onPress={()=>{console.log('Settings')}}
                         />
                    </View>
                </Drawer.Section> */}
                {/* <Drawer.Screen name="DashBoard" component={DashBoard}/>
            <Drawer.Screen name="MyCourses" component={MyCourses}/>
            <Drawer.Screen name="Payments" component={Payments}/>
            <Drawer.Screen name="About" component={About}/>
            <Drawer.Screen name="HelpSupport" component={HelpSupport}/>
            <Drawer.Screen name="Settings" component={Settings}/> */}
           