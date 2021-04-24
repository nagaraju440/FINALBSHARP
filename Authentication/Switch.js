import React from "react";
import {  SwitchNavigator, NavigationContainer } from 'react-navigation';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
const Switch = createSwitchNavigator();
  class Switch extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
          return ( 
              <NavigationContainer>
                  <Switch.Navigator>
                    <Switch.Screen name="ResolveAuth" component={ResolveAuthScreen} />
                    <Switch.Screen name="signinFlow" component={SignInFlowScreens} />
                    <Switch.Screen name="appFlow" component={AppFlowScreens} />
                </Switch.Navigator>


              </NavigationContainer>
           );
      }
  }
   
  export default Switch;
