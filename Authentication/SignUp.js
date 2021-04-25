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
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  LogBox,
  Linking,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';


class Signupp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      username: '',
      password: '',
      email: '',
      x: 0,
      l: 0,
    };
  }
  signupbuttonclicking=()=>{
    console.log("hiiii", this.state.email,this.state.password)
      auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
        alert("User account created and please log in")
        this.props.navigation.navigate('Login')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          alert(error.code)
        }
      
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert(error.code)
        }
      
        console.error(error);
      });
    // this.props.navigation.navigate('Aboutpage')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/cover.png')} style={styles.logo} />
          <View style={styles.pic1}>
            <Image source={require('../images/bs.png')} style={styles.pic} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{marginTop: 23}}>
            <OutlinedTextField
              label="Username"
              keyboardType="default"
              labelTextStyle={{
                fontWeight: 'bold',
                fontFamily: 'poppins',
                color: '#B0B0B0',
              }}
              // onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              containerStyle={{height: 46, borderRadius: 15}}
              inputContainerStyle={{height: 46}}
              baseColor="black"
              onChangeText={(userName) => {
                this.setState({userName: userName});
              }}
            />
          </View>
          <View style={{marginTop: 23}}>
            <OutlinedTextField
              label="Email"
              keyboardType="default"
              labelTextStyle={{
                fontWeight: 'bold',
                fontFamily: 'poppins',
                color: '#B0B0B0',
              }}
              // onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              containerStyle={{height: 46, borderRadius: 15}}
              inputContainerStyle={{height: 46}}
              baseColor="black"
              onChangeText={(emailvalue) => {
                this.setState({email: emailvalue});
              }}
            />
          </View>
          <View style={{marginTop: 23}}>
            <OutlinedTextField
              label="Password"
              keyboardType="default"
              labelTextStyle={{
                fontWeight: 'bold',
                fontFamily: 'poppins',
                color: 'black',
              }}
              // onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              containerStyle={{height: 46, borderRadius: 15}}
              inputContainerStyle={{height: 46}}
              secureTextEntry={true}
              baseColor="black"
              onChangeText={(passvalue) => {
                this.setState({password: passvalue});
              }}
            />
          </View>

          <View style={{paddingLeft: 38}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.signupbuttonclicking()
                 this.props.navigation.navigate('Login');
               
              }}>
              <Text style={styles.ButtonText}>Signup</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 56, marginTop: 30}}>
            <Text style={{fontWeight: 'bold', color: '#858192'}}>
              Already have an Account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log('singUp is pressed in login page');

                this.props.navigation.navigate('Login');
              }}>
              <Text style={{fontWeight: 'bold', color: '#858192'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
    flexDirection: 'row',
    paddingRight: 5,
    paddingTop: 17,
  },
  footer: {
    flex: 3,
    width: '92%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 3,
    paddingVertical: 14,
    marginLeft: 11,
  },

  logo: {
    height: 295,
    width: 295,
  },
  pic: {
    height: 195,
    width: 165,
    position: 'absolute',
  },
  pic1: {
    paddingRight: 164,
    position: 'absolute',
    paddingBottom: 150,
  },

  text: {
    color: 'grey',
    marginTop: 5,
  },

  button: {
    marginTop: 40,

    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderColor: '#B0B0B0',
    width: 240,
    height: 45,
  },

  ButtonText: {
    fontSize: 15,
    color: 'black',
    borderColor: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Signupp;
