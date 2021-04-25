import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native';
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
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
// GoogleSignin.configure({
//   webClientId: '251203130049-bfofh8n0mvo3m2r1dmfl00p3329p0tjd.apps.googleusercontent.com',
// });
// async function signOut() {
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//     auth()
//       .signOut()
//       .then(() => alert('Your are signed out!'));
//   } catch (error) {
//     console.error(error);
//   }
// };
function UserPage({ navigation }) {
  // FBLogout = () => {
    // LoginManager.logOut();
    auth()
      .signOut()
      .then(() => console.log('User signed out!')
      );
  // }
  return (
    <View>
      <Text>Hi Userrrrrrrr!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      {/* <Button onPress={FBLogout()}>Facebook Logout</Button>
      <Button title="Google Sign-Out"
        onPress={() => signOut().then(() => console.log('Signed out with Google!'))}>Google Logout</Button> */}
    </View>
  )
}
export default UserPage