import React from "react";
import {  createAppContainer, createSwitchNavigator, SwitchNavigator } from 'react-navigation';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Swipe";
import LandingPage22 from "./Deside"
import Login from "./Login";
import Signupp from "./SignUp"
const Switch = createSwitchNavigator({
  Swipe : Splash,
  Deside : LandingPage22,
  Login : Login,
  SignUp : Signupp
},
{
  initialRouteName:'Swipe'
}
);
AppContainer = createAppContainer(Switch);
  class SwitchNav extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
          return ( 
              <NavigationContainer>
                  {/* <Switch.Navigator>
                    <Switch.Screen name="Swipe" component={Splash} />
                    <Switch.Screen name="Deside" component={LandingPage22} />
                    <Switch.Screen name="Login" component={Login} />
                    <Switch.Screen name="SignUp" component={Signupp} />
                </Switch.Navigator> */}
                
                <AppContainer/>
                
                

              </NavigationContainer>
           );
      }
  }
   
  export default SwitchNav;
