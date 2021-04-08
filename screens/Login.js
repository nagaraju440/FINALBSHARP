  import React from 'react';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TextInput,Button,ScrollView
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// const Userinfo = {username:'admin' ,password:'admin123', email:'decoder@123'}
import { NavigationActions, StackActions } from 'react-navigation'
 class SplashScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      check:false,
      username: '',
      password:'',
      email:'',

    }

  }
 
  login=()=>{  
    console.log("hiiii", this.state.email,this.state.password)  
      if(this.state.email==='' || this.state.password===''){
          console.log("provide")
          alert(" please provide email or password")
      }else{
        auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
          console.log("sucsessfully logged")
          console.log("does not navigatin hehehhe")

               this.props.navigation.navigate('Aboutpage')
               console.log("does not navigatin")
             
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            alert(error.code)
          }
        })
      }
  }
   render() {
     return (
      <ScrollView style={styles.container}>
          
          <View style={styles.header}>
            
              <Image source ={require ('../images/Tom.jpg')} style={styles.logo} />
          </View>
          <View style={styles.footer}>
              <Text style={{fontSize: 15,color: "#707070"}}>Welcome To</Text>
              <Text style={{fontWeight: "bold",fontSize: 35,}}>BMinor</Text>

           
           <View style={{marginTop:23}}><OutlinedTextField
        label='Email'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
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
            <TouchableOpacity  style={styles.button} 
            onPress = {()=>{this.login()}}
            // onPress={() => this.props.navigation.navigate('Aboutpage')}
            >
              <Text style={styles.ButtonText}>Login</Text></TouchableOpacity>
            <TouchableOpacity  style={styles.button1} onPress={() => this.props.navigation.navigate('Signup')} ><Text style={styles.ButtonText1}>Signup</Text></TouchableOpacity>
            <View style={{flexDirection:'row', alignItems: 'center', flexGrow:1, paddingLeft:40}}>
            <Text>Forget password?</Text>
            <Text>Click here</Text>
            </View>
            </View>
            
            

           
           
          </ScrollView>
         
      
    );
  }
//   _login =async() =>{
//     if(Userinfo.username ===this.state.username && Userinfo.password ===this.state.password && Userinfo.email ===this.state.email )
//     {
     
//       this.props.navigation.navigate('Aboutpage');
//     }
    
//     else{
//       alert("wrong credentials" );
//     }
//   }
}




// const {height} = Dimensions.get("screen");


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#191720'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:50
  },
  footer: {
    flex:3,
    width:"94%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginLeft:11,
  },
  logo: {
    height: 250,
    width: 246,
    backgroundColor: "black",
    borderRadius: 250/2, 
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
      marginTop: 30,
      
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      backgroundColor:"black",
      marginTop:10,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
  },
  button1 :{
    marginTop: 30,
    alignSelf:'stretch',
    alignItems:"center",
    padding:20,
    backgroundColor:"#DDDDDD",
    marginTop:10,
    borderColor:"#DDDDDD",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:"#DDDDDD",
    borderRadius:10
  },
 
  ButtonText: {
    fontSize: 18,
    color: "#fff",
    
    fontWeight: "bold",
    alignSelf: "center",
   
  },
  ButtonText1: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
   
  }
});
export default SplashScreen;