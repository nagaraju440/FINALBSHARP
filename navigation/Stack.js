import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from '../screens/Login';
import Signup from '../screens/signup';
import Aboutpage from '../Aboutpage';
import AsyncStorage from '@react-native-community/async-storage';

const RootStack = createStackNavigator();




const RootStackScreen = ({navigation}) => (
    
   
  
    <RootStack.Navigator headerMode='none'>

        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Signup" component={Signup}/>
        <RootStack.Screen name="Aboutpage" component={Aboutpage}/>
    </RootStack.Navigator>
   
   
);

export default RootStackScreen;