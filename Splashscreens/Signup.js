import React from 'react';

import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  span,
  TextInput,Button,ScrollView, ActivityIndicator,LogBox ,Linking
} from 'react-native';
import {
TextField,
FilledTextField,
OutlinedTextField,
} from 'react-native-material-textfield';
import { initialWindowMetrics } from 'react-native-safe-area-context';


class Signupp extends React.Component {
    constructor(props){
      super(props);
      this.state={
        check:false,
        username: '',
        password:'',
        email:'',
        x:0,
        l:0,
      }
  
    }

    render(){
       
        
            
              return(
                <ScrollView style={styles.container}>
                
                <View style={styles.header}>
                  
                    <Image source ={require ('../IMAGES/bsharp.png')} style={styles.logo} />
                </View>
                <View style={styles.footer}>
                         
                 <View style={{marginTop:23}}><OutlinedTextField
              label='Username'
              keyboardType='default'
              labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"#B0B0B0"}}
              onChangeText={(email) => this.setState({email})} value={this.state.email}
              containerStyle={{height:46,borderRadius:15}}
              inputContainerStyle={{height:46}}
              baseColor="black"
              onChangeText={(emailvalue)=>{this.setState({email:emailvalue})}}
            /></View>
             <View style={{marginTop:23}}><OutlinedTextField
              label='Email'
              keyboardType='default'
              labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"#B0B0B0"}}
              onChangeText={(email) => this.setState({email})} value={this.state.email}
              containerStyle={{height:46,borderRadius:15}}
              inputContainerStyle={{height:46}}
              baseColor="black"
              onChangeText={(emailvalue)=>{this.setState({email:emailvalue})}}
            /></View>
            <View style={{marginTop:23}}><OutlinedTextField
              label='Password'
              keyboardType='default'
              labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
              onChangeText={(password) => this.setState({password})} value={this.state.password}
              containerStyle={{height:46,borderRadius:15}}
              inputContainerStyle={{height:46}}
              secureTextEntry={true}
              baseColor="black"
              onChangeText={(passvalue)=>{this.setState({password:passvalue})}}
            /></View>


                  

            <View  style={{paddingLeft:45}}>
                    <TouchableOpacity  style={styles.button}>  
                 <Text style={styles.ButtonText}>Signup</Text>
                    </TouchableOpacity> 
                    </View> 

            
                    <View style={{flexDirection:"row",paddingLeft:56,marginTop:35}}>
                    <Text style={{fontWeight:"bold",color:"#858192"}}>Already have an Account?</Text>
                    <TouchableOpacity > 
                  <Text style={{fontWeight:"bold",color:"#858192"}}>   Login</Text>
                </TouchableOpacity> 
                  
                    
                    </View>
                 
                  </View>
                
                </ScrollView>
               )
             
       
      
            }
      }
      
      
      
      
     
      
      
      const styles = StyleSheet.create({
        container: {
          flex: 1, 
          backgroundColor: '#FFFFFF'
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom:0,
        },
        footer: {
          flex:3,
          width:"94%",
          backgroundColor: '#FFFFFF',
        
          paddingVertical:5,
          marginLeft:11,
        },

        logo: {
          height: 280,
          width: 200,
          paddingBottom:50,
        
         
        },
      
        title: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold'
        },
      
        text: {
            color: 'grey',
            marginTop:5
        },
      
        button: {
            marginTop: 50,
            
            alignSelf:'stretch',
            alignItems:"center",
            padding:20,
            backgroundColor:"white",
            borderWidth:1,
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderColor:"#B0B0B0",
            width:240,
            height:45,
        },
        
      
       
        ButtonText: {
          fontSize: 15,
          color: "black",
          borderColor:"black",
          fontWeight: "bold",
          alignSelf: "center",
         
        },
      
      });
      export default Signupp;