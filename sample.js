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
  import database from '@react-native-firebase/database';
  var x=0
  class Sample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        x:0,
    }
  }

    
    componentDidMount=()=>{
      console.log("hlo login database")
      auth().onAuthStateChanged((user) => {
        if (user) {
        //   setAuthenticated(true);
        console.log("a user is there",auth().currentUser.email ,"and i am from sample.js bro")  
        this.state.x=1;
        this.setState({x:this.state.x})
        } else {
          this.state.x=0;
          this.setState({x:this.state.x})
        console.log("no  user is there and i am from smaple .js bro")
    
        }
      })
    }
    render() {
         if(this.state.x===1){
                 return(
                    
                    <NavigationContainer>
                    <Drawernavi/>
                 </NavigationContainer>
                 )
         }else{
                 return(
                    <NavigationContainer>
                    <RootStackScreen />
                 </NavigationContainer>
                 )
         }
          
    }
}
 
export default Sample;