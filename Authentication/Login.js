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
import { initialWindowMetrics } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


var x = 0;

// var y=LoginManager.getInstance()
async function onFacebookButtonPress() {
  // LoginManager.setLoginBehavior(WEB_ONLY);

  // Attempt login with permissions
  // console.log(LoginManager.logInWithPermissions,"this is the reason bro");
  LoginManager.logOut();
  console.log(LoginManager.getDefaultAudience(), LoginManager.logOut())
  // y.logOut();


  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  // console.log(data,"this is the acsess token")


  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

/*************************************Google Login ************************/

GoogleSignin.configure({
  webClientId: '251203130049-bfofh8n0mvo3m2r1dmfl00p3329p0tjd.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
async function signOut() {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(() => alert('Your are signed out!'));
  } catch (error) {
    console.error(error);
  }
};

class Login extends React.Component {
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
  login = () => {
    this.setState({ l: 1 })
    console.log("hiiii", this.state.email, this.state.password)
    if (this.state.email === '' || this.state.password === '') {
      console.log("provide")
      alert("please provide email or password")
      setTimeout(() => {
        this.setState({ l: 0 })
      }, 1000)

    } else {
      auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          console.log("sucsessfully logged")
          console.log("does not navigatin hehehhe")
          auth().onAuthStateChanged((user) => {
            if (user) {
              //   setAuthenticated(true);
              this.state.x = 1;
              this.setState({ x: this.state.x, l: 0 })
              console.log("a user is there", auth().currentUser.email, "and this is from login bro and x is", this.state.x)

            } else {
              // this.state.x=0;
              // this.setState({x:this.state.x})
              console.log("no  user is there and fro login ", this.state.x, "is x")

            }
          })

        })
        .catch(error => {
          alert(error.code)
          this.setState({ l: 0 })
          // if (error.code === 'auth/invalid-email') {
          //   console.log('That email address is invalid!');
          //   alert(error.code)
          // }
        })
    }
  }




  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/bb.png')} style={styles.logo} />
          <View style={styles.pic1}>
            <Image source={require('../images/bs.png')} style={styles.pic} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ marginTop: 23 }}>
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
              containerStyle={{ height: 46, borderRadius: 15 }}
              inputContainerStyle={{ height: 46 }}
              baseColor="black"
              onChangeText={(emailvalue) => {
                this.setState({ email: emailvalue });
              }}
            />
          </View>
          <View style={{ marginTop: 23 }}>
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
              containerStyle={{ height: 46, borderRadius: 15 }}
              inputContainerStyle={{ height: 46 }}
              secureTextEntry={true}
              baseColor="black"
              onChangeText={(passvalue) => {
                this.setState({ password: passvalue });
              }}
            />
          </View>

          <View style={{ paddingLeft: 84 }}>
            <TouchableOpacity style={styles.forget}>
              <Text style={styles.ForgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: 45 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log('about page will be displayed');
                this.login()
              }}>
              <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#A5A5A5',
              fontSize: 12,
              fontWeight: 'bold',
              paddingLeft: 28,
              paddingTop: 28,
            }}>
            {' '}
            ───────── OR CONNECT WITH: ─────────{' '}
          </Text>

          <View
            style={{
              paddingLeft: 48,
              flexDirection: 'row',
              width: 250,
              height: 53,
            }}>
            <TouchableOpacity style={styles.google}
              onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            >
              <Image source={require('../images/google.png')} />
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingLeft: 48,
              flexDirection: 'row',
              width: 250,
              height: 53,
            }}>
            <TouchableOpacity style={styles.fb}
              onPress={() => {
                onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
              }}>
              <Image source={require('../images/Facebook.png')} />
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                Login with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: 56, marginTop: 25 }}>
            <Text style={{ fontWeight: 'bold', color: '#858192' }}>
              Don't you have any Account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}>
              <Text style={{ fontWeight: 'bold', color: '#858192' }}>
                {' '}
                Signup
              </Text>
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
    paddingBottom: 1,
    flexDirection: 'row',
    paddingLeft: 17,
    paddingTop: 17,
  },
  footer: {
    flex: 3,
    width: '92%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 2,
    paddingVertical: 1,
    marginLeft: 11,
  },

  logo: {
    height: 272,
    width: 297,
  },
  pic: {
    height: 180,
    width: 160,
    position: 'absolute',
  },
  pic1: {
    paddingLeft: 165,
    position: 'absolute',
    paddingTop: 139,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: {
    color: 'grey',
    marginTop: 5,
  },

  button: {
    marginTop: 19,

    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#B0B0B0',
    width: 240,
    height: 45,
  },

  fb: {
    marginTop: 20,

    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000DFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: 240,
    height: 45,
  },
  google: {
    marginTop: 30,

    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F63E28',
    marginTop: 20,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 22,
    flexDirection: 'row',
    width: 240,
    height: 45,
  },

  forget: {
    paddingLeft: 140,
    marginTop: 8,
  },
  ForgetText: {
    fontSize: 12,
    color: '#858192',
    fontWeight: 'bold',
  },

  ButtonText: {
    fontSize: 15,
    color: 'black',
    borderColor: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Login;
