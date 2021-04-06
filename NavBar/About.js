// import React from 'react'
// import Abouticon from './Abouticon'
// import { Provider as PaperProvider } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     Image,
//     TouchableOpacity,
//     TouchableHighlight ,
//     Button,
//     View
// } from 'react-native';
// import { createDrawerNavigator,DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
// import auth from '@react-native-firebase/auth';
// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
//   } from 'react-native/Libraries/NewAppScreen';
// export default function About() {
//     return (
//         <View>
//             {/* <Abouticon /> */}
//             {/* return(
//       // <View>
//       //   <Text>hiiiiiiiiie  annnnaaaa fghjsdfghj h</Text>
//       // </View> */}
//      {/* <PaperProvider>
//         <NavigationContainer><Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Upload course" component={Notification} />
//     </Stack.Navigator></NavigationContainer>
//      </PaperProvider> */}
    
//   {/* } */}
// {/* } */}
//             <Text>hiii this is About</Text>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     scrollView: {
//       backgroundColor: Colors.lighter,
//     },
//     engine: {
//       position: 'absolute',
//       right: 0,
//     },
//     body: {
//       backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: Colors.black,
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//       color: Colors.dark,
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     footer: {
//       color: Colors.dark,
//       fontSize: 12,
//       fontWeight: '600',
//       padding: 4,
//       paddingRight: 12,
//       textAlign: 'right',
//     },
//     header:{
//       width:200
//     }
//    });
   import React from 'react'
   import {
       AppRegistry,
       StyleSheet,
       Text,
       View,
       ScrollView,
       Image,
       TouchableOpacity,
       TextInput,
       Button
   } from 'react-native';
   import Piano from './pianoimage.jpg'
   import image1 from './drawable-xxxhdpi/instrumental_doha_mar10_1.png'
   import image2 from './drawable-xxxhdpi/image2.png'
   import image3 from './drawable-xxxhdpi/15_1_1.png'
   import image4 from  './drawable-xxxhdpi/Conservatory-student-advances-to-final-round-of-Rotary-Youth-Instrumental-Music-Contest.png'
   import image5 from './drawable-xxxhdpi/b7.png'
   // import image6 from './drawable-xxxhdpi/image6.png'
   // import image7 from './drawable-xxxhdpi/image7.png'
   import image6 from './drawable-xxxhdpi/image6.png'
   import image7 from './drawable-xxxhdpi/image7.png'
   class Aboutpage extends React.Component{
     constructor(props){
       super(props);
       this.state={
   
       }
     }
     click=()=>{
       console.log("hiii")
     }
       render(){
           return(
               <ScrollView >
                   <View style={styles.topnavstyle}>
                       {/* fortopnav okkkk */}
                       {/* <Text>hello</Text> */}
                   </View>
                   <View style={styles.outerbox}>
                      <View style={styles.imagestyle}>
                           <Text>hii</Text>
                      </View>
                       <Text style={styles.text1style}>About our acadamy</Text>  
                       <Text style={styles.text2style}>
                       We are the best Carnatic Classical Music Academy in 
   Hyderabad, specialised in both online music classes and offline
   music classes, established in the year  1998   with an   aim   to 
   spread  the  knowledge of BS#ARP MUSIC worldwide. We 
   provide online music classes for kids and all age group of 
   students.
                           </Text>  
                           <Text style={styles.text3style}>Talent !!!</Text> 
                           <Text style={styles.text2style}>
                               
                           Some text to tell about what we teach. Something like
   Instruments, vocals and stuff. Make sure that atleast 5 lines
   are filled so that the description wouldn’t feel empty. I’ll just
   Write some random text and stuff to fill 5 lines but this didn’t
   seem to work so added some more text.</Text> 
              <View style={styles.forthreeboxes}>
                  <View style={styles.fortwoboxes}>
                  <View style={styles.forfirstbox}>
                        
                        </View>
                     <View style={styles.forsecondbox}>
                         
                       </View>   
   
                  </View>
                <View style={styles.forthirdbox}>
   
                </View>
                <Text style={styles.text1style}>Courses</Text>
                <Text style={styles.text2style}>
                Some text to tell about what we teach. Something like
   Instruments, vocals and stuff. Make sure that atleast 5 lines
   are filled so that the description wouldn’t feel empty. I’ll just
   Write some random text and stuff to fill 5 lines but this didn’t
   seem to work so added some more text. This is for courses
   and and stuff. 
                    </Text> 
                  </View>
               <View style={styles.sunilc}>
               <View style={styles.image}>
                 <Image source={Piano} style={styles.piano1}></Image>
               </View>
        <View style={styles.sunilcborderwidth}>
        <View style={styles.flex}>
            <Text style={styles.language}>Telugu</Text>
            <Text style={styles.courseName}>Guitar Course</Text>
            <Text style={styles.courseCost}>₹ 3500</Text>
          </View>
          <View >
            <Text style={styles.details}>
               Some text to tell about the course. This should ideally
             be around 3 to 4 lines but the maximum it can go is upto
             6 lines but it should have at least 3 lines. This is the bare
             Minimum so added another line to make it 4.
            </Text>
          </View>
        
          <View style={styles.flex} >
            <TouchableOpacity onPress={this.click}><Text style={styles.registerBtn}>Register</Text></TouchableOpacity>
            <Text style={styles.teacherBtn}>Teacher</Text>
            </View>
            
          </View>
                   </View>     
                   <View style={styles.sunilc1}>
                   <View style={styles.image}>
                 <Image source={Piano} style={styles.piano1}></Image>
               </View>
        <View style={styles.sunilcborderwidth}>
        <View style={styles.flex}>
            <Text style={styles.language}>Telugu</Text>
            <Text style={styles.courseName}>Guitar Course</Text>
            <Text style={styles.courseCost}>₹ 3500</Text>
          </View>
          <View >
            <Text style={styles.details}>
               Some text to tell about the course. This should ideally
             be around 3 to 4 lines but the maximum it can go is upto
             6 lines but it should have at least 3 lines. This is the bare
             Minimum so added another line to make it 4.
            </Text>
          </View>
        
          <View style={styles.flex} >
            <Text style={styles.registerBtn}>Register</Text>
            <Text style={styles.teacherBtn}>Teacher</Text>
            </View>
            
          </View>
                   </View>
                   <Text  style={styles.teacherstyle}>Teachers :)</Text>    
                   <Text style={styles.text2style}>
                   Some text to tell about what we teach. Something like
   Instruments, vocals and stuff. Make sure that atleast 5 lines
   are filled so that the description wouldn’t feel empty. I’ll just
   Write some random text and stuff to fill 5 lines but this didn’t
   seem to work so added some more text. This is for courses
   and and stuff. 
                   </Text>
                <View style={styles.haricstyle}>
                    
                    </View>
                    <Text  style={styles.teacherstyle}>Achievements</Text> 
                    <Text style={styles.text2style}>
                    Some text to tell about what we teach. Something like
   Instruments, vocals and stuff. Make sure that atleast 5 lines
   are filled so that the description wouldn’t feel empty. I’ll just
   Write some random text and stuff to fill 5 lines but this didn’t
   seem to work so added some more text. This is for courses
   and and stuff. 
                        </Text> 
   
                <View style={styles.achive}>
                    <View style={styles.achive1}>
                   <Image source={image1} style={styles.img1}></Image>
                    <Image source={image2} style={styles.img1}></Image>
                    <View style={styles.twoimgachive1} >
                    <Image source={image3} style={styles.img3}></Image>
                    <Image source={image4} style={styles.img4}></Image>   
                    </View>
                    </View>
                    <View style={styles.achive2}>
                    <Image source={image5} style={styles.img5}></Image>   
                    <Image source={image6} style={styles.img5}></Image>   
                    <Image source={image7} style={styles.img7}></Image>   
                   
                    </View>
                    </View>          
                   </View>
               </ScrollView>
           )
       }
   }
   
   export default Aboutpage;
   
   const styles = StyleSheet.create({
         outerbox:{
             width:"85%", 
             height:3695,
           //   borderColor:"red",
           //   backgroundColor:"red",
           //   paddingTop:1000,    
             marginLeft:"7%",
             marginTop:34,
   
         },
         topnavstyle:{
             width:418.39,
             height:57,
           // position:"fixed",
         },
         imagestyle:{
             width:"100%",
             height:233,
             backgroundColor:"whitesmoke",
         },
         text1style:{
           fontFamily: 'Poppins',
           fontSize: 16,
           color:"#000000",
           fontWeight:"bold",
             marginTop:41,
         },
         text2style:{
           fontFamily: 'Raleway',
           fontSize: 12,
           color:"#000000",
          lineHeight:20,
       //    letterSpacing:0.1,
             marginTop:25,
         },
         text3style:{
           fontFamily: 'Poppins',
           fontSize: 18,
           color:"#000000",
           lineHeight:20,
           fontWeight:"bold",
             marginTop:25,
         },
         forthreeboxes:{
             marginTop:39,
         },
         piano1:{
            width:"100%",
            height:295,
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
         },
         forfirstbox:{
           width:"42.88%",
           height:219,
             backgroundColor:"#EEEEEE",
             borderRadius:15,  
         },
         forsecondbox:{
             marginLeft:15,
             marginTop:44,
           width:"51.41%",
           height:175,
             backgroundColor:"#EEEEEE",
             borderRadius:15,  
         },
         fortwoboxes:{
           flexDirection: 'row',
         },
         forthirdbox:{
           // marginLeft:15,
           marginTop:15,
         width:"100%",
         height:175,
           backgroundColor:"#EEEEEE",
           borderRadius:15,  
       },
       sunilc:{
           width:"100%",
           height:518,
          
           // backgroundColor:"blue",
           marginTop:50,
       },
       sunilcborderwidth:{
         borderRadius:6,
         borderColor:"whitesmoke",
         borderWidth:3,
         height:223,
         // borderRadius:15, 
         marginTop:-1  ,
         
         borderBottomLeftRadius:15,
         borderBottomRightRadius:15, 
       },
       sunilc1:{
           width:"100%",
           height:523,
           // backgroundColor:"whitesmoke",
           marginTop:25,
           
       },
       teacherstyle:{
           fontFamily: 'Poppins',
           fontSize: 18,
           color:"#000000",
           fontWeight:"bold",
             marginTop:50,
         },
         haricstyle:{
             width:"100%",
             height:236,
             backgroundColor:"whitesmoke",
             marginTop:25,
         },
         achive:{
             marginTop:25,
             width:"100%",
             height:392,
             // backgroundColor:"whitesmoke",
             flexDirection:"row",
         },
         achive1:{
            width:"58%",
            height:"100%",
            
         },
         achive2:{
            width:"38%",
            height:"100%",
            marginLeft:9,
         },
         achive3:{
           width:"100%",
           height:152,
           
        },
         img1:{
           width:"100%",
           height:111,  
           borderRadius:15,
           marginTop:8,
         },
         twoimgachive1:{
           flexDirection:"row",
           width:"100%",
           height:152,
           marginTop:8,
         },
         img3:{
              width:"48%",
              height:152,
              borderRadius:15,
         },
         img4:{
           width:"48%",
           height:152,
           borderRadius:15,
           marginLeft:8,
      },
      img5:{
            width:"100%",
            height:133,
            borderRadius:15,
            marginTop:8,
      },
      img7:{
       width:"100%",
       height:108,
       borderRadius:15,
       marginTop:8,
   },
   //  suni gadi stylings
   image:{
     width:'100%',
     height:295,
     backgroundColor:"lightgrey",
     justifyContent:'center',
     borderTopStartRadius:15,
     borderTopRightRadius:15,
     alignContent:'center',
     alignItems:'center'
   },
   flex:{
     marginTop:10,
     display:'flex',
     flexDirection:'row',
     marginLeft:15,
   },
   language:{
     backgroundColor:'lightgrey',
     height:10,
     width:30,
     textAlign:'center',
     alignContent:'center',
     borderRadius:8,
     fontSize:7,
     fontFamily:'poppins',
     marginTop:5,
     backgroundColor:'#EEEEEE'
     
   },
   
   courseName:{
     fontFamily:'Raleway',
     fontSize:15,
     fontWeight:'700',
     left:25,
     color:'#292629',
   
   },
   courseCost:{
     fontSize:9,
     left:125,
     marginTop:5,
     color:'#292629'
   
   },
   details:{
     marginTop:10,
     marginLeft:16,
     fontFamily:'Raleway',
     color:'#292629',
     width:'90%',
     fontSize:12,
     lineHeight:20
   
   
   },
   
   registerBtn:{
     color:'#fff',
     fontSize:11,
     fontFamily:'Poppins',
     height:28,
     width:82,
     backgroundColor:'#292929',
     borderRadius:6,
     textAlign:'center',
     textAlignVertical:'center',
   
   
   },
   teacherBtn:{
     color:'#292929',
     fontSize:11,
     fontFamily:'Poppins',
     height:28,
     width:82,
     backgroundColor:'#EEEEEE',
     left:5,
     borderRadius:6,
     textAlign:'center',
     textAlignVertical:'center',
   },
   
   })