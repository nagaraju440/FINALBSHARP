import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TextInput,Button
} from 'react-native';
 
 class SplashScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      check:false,
      username: '',

    }
    this.validates = this.validates.bind(this);
  }
  validates = () => { 

    let text = this.state.username; 
    let usernameError = this.state.usernames;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    if(reg.test(text) === false) 
    { 
    alert("Invalid username")
    this.setState({username:text}) 
    return false; 
    } 
    else { 
    this.setState({username:text}) 
    alert("Username is Correct"); 
    } 
} 
   render() {
     return (
      <View style={styles.container}>
          
          <View style={styles.header}>
            
              <Image source ={require ('../images/Tom.jpg')} style={styles.logo} />
          </View>
          <View style={styles.footer}>
              <Text style={{fontSize: 15,color: "#707070"}}>Welcome To</Text>
              <Text style={{fontWeight: "bold",fontSize: 35,}}>BMinor</Text>
              
              <TextInput style={styles.input} placeholder="Username" autoCapitalize="none"  onChangeText={(text) => this.setState({usernamel:text})} type='username'
            value={this.state.email} keyboardType='email-address' underlineColorAndroid='transparent'/>
              <TextInput style={styles.input} placeholder="Name" autoCapitalize="none" />
              
              
              <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  underlineColorAndroid='transparent'/>  
            <TouchableOpacity  style={styles.button}onPress={this.validates} ><Text style={styles.ButtonText}>Signup</Text></TouchableOpacity>
            <TouchableOpacity  style={styles.button1} onPress={this.validates} ><Text style={styles.ButtonText1}>login</Text></TouchableOpacity>

            </View>
          </View>
         
      
    );
  }
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  logo: {
    height: 250,
    width: 250,
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