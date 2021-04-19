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


class Login extends React.Component {
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
                  
                    <Image source ={require ('../IMAGES/bsharp.jpg')} style={styles.logo} />
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


                   <View  style={{paddingLeft:90}}>
                    <TouchableOpacity  style={styles.forget}> 
                  <Text style={styles.ForgetText}>Forgot Password?</Text>
                </TouchableOpacity> 
                    </View> 

            <View  style={{paddingLeft:45}}>
                    <TouchableOpacity  style={styles.button}>  
                 <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity> 
                    </View> 

            
          <Text style={{color:'#858192',fontSize:12,fontWeight:'bold',paddingLeft:19,paddingTop:23,}}> ──────────  OR CONNECT WITH:  ──────────</Text>

                    <View  style={{paddingLeft:48,flexDirection:"row", width:250,height:53,}}>
                    <TouchableOpacity  style={styles.google}>  
                    <Image source ={require ('../IMAGES/google.png')}  />      
                 <Text style={{fontSize: 16, color: "white",fontWeight:"bold"}}>Login with Google</Text>
                    </TouchableOpacity> 
                    </View> 


                    <View  style={{paddingLeft:48,flexDirection:"row", width:250,height:53,}}>
                    <TouchableOpacity  style={styles.fb}>  
                    <Image source ={require ('../IMAGES/Facebook.png')}  />  
                 <Text style={{fontSize: 16, color: "white",fontWeight:"bold"}}>Login with Facebook</Text>
                    </TouchableOpacity></View> 



                    <View style={{flexDirection:"row",paddingLeft:56,marginTop:30}}>
                    <Text style={{fontWeight:"bold",color:"#858192"}}>Don't you have any Account?</Text>
                    <TouchableOpacity > 
                  <Text style={{fontWeight:"bold",color:"#858192"}}>   Signup</Text>
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
            marginTop: 25,
            
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
        
        fb: {
            marginTop: 20,
            
            alignSelf:'stretch',
            alignItems:"center",
            padding:20,
            backgroundColor:"#000DFF",
            borderRadius: 25,
            paddingVertical: 10,
            paddingHorizontal: 12,
            flexDirection:"row",
            width:240,
            height:45,

        },
        google: {
            marginTop: 30,
            
            alignSelf:'stretch',
            alignItems:"center",
            padding:20,
            backgroundColor:"#F63E28",
            marginTop:20,
            borderRadius: 25,
            paddingVertical: 10,
            paddingHorizontal: 12,
            flexDirection:"row",
            width:240,
            height:45,
        },

        forget:{
            paddingLeft:140,
            marginTop: 8,
           
            
        },
        ForgetText: {
            fontSize: 12,
            color: "#858192",
           fontWeight: "bold",
           
          },
      
        
       
        ButtonText: {
          fontSize: 15,
          color: "black",
          borderColor:"black",
          fontWeight: "bold",
          alignSelf: "center",
         
        },
      
      });
      export default Login;