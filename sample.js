import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/signup';
import RootStackScreen from './navigation/Stack';
import Aboutpage from './Aboutpage'
import auth from '@react-native-firebase/auth';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import Drawernavi from './Navigations/TopNav'
  var x=0

  //   auth()
  // .signOut()
  // .then(() => console.log('User signed out!')
  
  // );
  
  auth().onAuthStateChanged((user) => {
    if (user) {
    //   setAuthenticated(true);
    console.log("a user is there",auth().currentUser.email)
    x=1;
    } else {
    console.log("no  user is there")

    }
  })
class Sample extends React.Component {
    state = {  }
    render() {
         if(x===1){
                 return(
                    
                    // <NavigationContainer>
                    <Drawernavi/>
                //  </NavigationContainer>
                 )
         }else{
                 return(
                    // <NavigationContainer>
                    <RootStackScreen />
                //  </NavigationContainer>
                 )
         }
          
    }
}
 
export default Sample;