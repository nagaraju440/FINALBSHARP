import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const Stack = createStackNavigator();

const RunSwitchNav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Screen2"
            component = {Screen2}
            options =   {{title : 'Screen2'}}>
                
            </Stack.Screen>
            <Stack.Screen
            name="Screen1"
            component = {Screen1}
            options =   {{title : 'Screen1'}}>
                
            </Stack.Screen>
            
            <Stack.Screen
            name="Screen3"
            component = {Screen3}
            options =   {{title : 'Screen3'}}>
                
            </Stack.Screen>
            <Stack.Screen
            name="Screen4"
            component = {Screen4}
            options =   {{title : 'Screen4'}}>
                
            </Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RunSwitchNav;
