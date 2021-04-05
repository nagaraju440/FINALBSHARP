import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,ScrollView,
    TouchableOpacity,
    Button
} from 'react-native';
import Piano from './pianoimage.jpg'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  
class Courses extends React.Component {
    render() {
        console.log(Piano);
        return (
            <ScrollView style={styles.container1}>
                <View style={styles.TopNav}>
                    <Text>Hii</Text>

                    <Text>
                        Coursesss
                    </Text>
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
        )
    }

}


const styles = StyleSheet.create({
    container1: {
        // marginTop: 50,
        height: 944,
        width: "100%"
    },
    TopNav: {
        // height: 57,
        width: "87%",
        color: 'blue',
        // padding: 25,
        marginLeft: 25
    },
    Image: {
        height: 189,
        width: "100%",
        borderRadius:15,
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