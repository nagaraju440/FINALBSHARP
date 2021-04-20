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
  import { LoginManager, AccessToken,LoginButton } from 'react-native-fbsdk';
function UserPage({navigation}){
  LoginManager.logOut();
    auth()
  .signOut()
  .then(() => console.log('User signed out!')
  );
    return(
        <View>
            <Text>Hi Userrrrrrrr!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
        </View>
    )
}
export default UserPage