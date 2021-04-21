// import React, { useState, useEffect } from 'react'
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     ScrollView,
//     TouchableOpacity,
//     Button,
//     StatusBar,

//     // ScrollView
// } from 'react-native';
// import auth from '@react-native-firebase/auth';

// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from 'react-native-google-signin';

// function GoogleLogin() {
//     const [loggedIn, setloggedIn] = useState(false);
//     const [userInfo, setuserInfo] = useState([]);

//     _signIn = async () => {
//         console.log("try to signing in")
//         try {
//         console.log("try to signing in try block")

//             await GoogleSignin.hasPlayServices();
//             const { accessToken, idToken } = await GoogleSignin.signIn();
//             setloggedIn(true);
//             const credential = auth.GoogleAuthProvider.credential(
//                 idToken,
//                 accessToken,
//             );
//             console.log(credential,"hello")
//             await auth().signInWithCredential(credential);

//         } catch (error) {
//             if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//                 // user cancelled the login flow
//                 alert('Cancel');
//             } else if (error.code === statusCodes.IN_PROGRESS) {
//                 alert('Signin in progress');
//                 // operation (f.e. sign in) is in progress already
//             } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//                 alert('PLAY_SERVICES_NOT_AVAILABLE');
//                 // play services not available or outdated
//             } else {
//                 // some other error happened
//             }
//             // console.log();
//         }
//     };

//     useEffect(() => {
//         GoogleSignin.configure({
//             scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
//             webClientId:
//                 '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//             offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//         });
//     }, []);

//     signOut = async () => {
//         try {
//             await GoogleSignin.revokeAccess();
//             await GoogleSignin.signOut();
//             setloggedIn(false);
//             setuserInfo([]);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             {/* <StatusBar barStyle="dark-content" /> */}
//             {/* <SafeAreaView> */}
//             {/* <ScrollView
//                     contentInsetAdjustmentBehavior="automatic"
//                     style={styles.scrollView}>
//                     <Header /> */}

//             {/* <View style={styles.body}> */}
//             {/* <View style={styles.sectionContainer}> */}
//             <GoogleSigninButton
//                 style={{ width: 192, height: 48 }}
//                 size={GoogleSigninButton.Size.Wide}
//                 color={GoogleSigninButton.Color.Dark}
//                 onPress={this._signIn}
//             />
//             {/* </View> */}
//             {/* <View style={styles.buttonContainer}>
//                             {!loggedIn && <Text>You are currently logged out</Text>}
//                             {loggedIn && (
//                                 <Button
//                                     onPress={this.signOut}
//                                     title="LogOut"
//                                     color="red"></Button>
//                             )}
//                         </View> */}
//             {/* </View> */}
//             {/* </ScrollView> */}
//             {/* </SafeAreaView> */}
//         </>
//     );
// }






import React from 'react';
import { Button,View ,Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '251203130049-bfofh8n0mvo3m2r1dmfl00p3329p0tjd.apps.googleusercontent.com',
});

function GoogleLogin() {

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
       
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }

      // GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
      // .requestIdToken("251203130049-bfofh8n0mvo3m2r1dmfl00p3329p0tjd.apps.googleusercontent.com")
      // .requestEmail()
      // .build();

      


      
  return (
    <View>
<Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    </View>
  );
}




export default GoogleLogin;