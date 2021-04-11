import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,ScrollView,
    TouchableOpacity,
    Button,
    // ScrollView
} from 'react-native';

// import Piano from './pianoimage.jpg'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
import Piano from './images/pianoimage.jpg'
import StackNav from './TopNavs/stack'
import Menu from './Icons/Menu'
import Notification from './Icons/Notification';
import User from './Icons/User'
import auth from '@react-native-firebase/auth';
class Courses extends React.Component {
  componentDidMount=()=>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!')
  
  );
  }
  click=()=>{
    console.log("registering")
    this.props.navigation.navigate('UserPage1')
  }
    render() {
        console.log(Piano);
        return (
          <View style={{backgroundColor:'white'}}>
      {/* <StackNav/> */}
       {/* .........................top bsharp..............................      */}
             <View style={{width:"100%",height:57,flexDirection:'row',alignItems:'center',borderWidth:0.0,elevation:1}}>

             <View style={{marginLeft:'6.5%'}}>
                <TouchableOpacity 
                onPress={()=>{
                  this.props.navigation.openDrawer()
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
                    this.props.navigation.navigate('NotificationPage')
                }}
               >
               <Notification/>
               </TouchableOpacity>
           </View>
           <View style={{marginLeft:'3.5%'}}>
              <TouchableOpacity
              onPress={()=>{
                    this.props.navigation.navigate('UserPage')
                }}>
              <User/>
              </TouchableOpacity>
           </View>
             </View>
          
            <ScrollView >
            {/* <StckNav */}
      
                <View style={styles.TopNav}>
                    
                    <Image source={Piano} style={styles.Image} />
                   <Text style={styles.heading1}>Full Course Mastering Keyboard</Text>
                    <Text style={styles.text1}>
                    We are the best Carnatic Classical Music Academy in 
Hyderabad, specialised in both online music classes and offline
music classes, established in the year  1998   with an   aim   to 
spread  the  knowledge of BS#ARP MUSIC worldwide. We 
provide online music classes for kids and all age group of 
students.
                    </Text>
                
                <View style={{marginTop:20
                    ,height:500}}>
                   
                  <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Name'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />  
       </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Age'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />
       </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Phone Number'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      /> 
        </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Email'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      /> 
        </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Batch'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      /> 
        </View> 
        <View  >
         <TouchableOpacity onPress={this.click}><Text style={styles.registerBtn}>Register</Text></TouchableOpacity>
         </View>
                </View>
                </View>
            </ScrollView>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container1: {
        // marginTop: 50,
        height: 944,
        width: "100%",
        // marginTop:45,
    },
    TopNav: {
        // height: 57,
        width: "87%",
        color: 'blue',
        // padding: 25,
        // marginTop:85,
        marginLeft: 25
    },
    Image: {
        height: 189,
        width: "100%",
        borderRadius:15,
        marginTop:30
    },
    heading1: {
        marginTop: 35,
        textAlign: 'center',
        fontFamily: 'Bold',
        fontSize: 16,
        // marginLeft: 50
    },
    text1: {
        marginTop: 17,
        fontSize: 12,
        // textAlign: 'center',
        fontFamily: 'poppins',
        // letterSpacing: 0.5
        lineHeight: 20,
        // marginRight: 91
    },
    registerBtn:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Poppins',
        height:48,
        width:"100%",
        backgroundColor:'#2C57EF',
        borderRadius:15,
        textAlign:'center',
        textAlignVertical:'center',
      marginTop:25
      
      },
});

export default Courses;