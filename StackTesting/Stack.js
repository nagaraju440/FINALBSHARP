import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Br
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack1 from './Stack1'
import Stack2 from './Stack2'
import Stack3 from './Stack3'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = new createStackNavigator();
class Stack100 extends React.Component{
        render(){
            return(
                <NavigationContainer>
                     <Stack.Navigator
            //    screenOptions={{
            //             headerShown: false
            //                }}
               >        
                   <Stack.Screen 
                         name="Stack1" 
                         component={Stack1}
                        //  options={{headerShown: false}}
                        />
                        <Stack.Screen name="Stack2" component={Stack2} />
                        <Stack.Screen 
                        
                        name="Stack3" component={Stack3} />
                        {/* <Stack.Screen name="UserPage1" component={UserPage} /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }
}
export default Stack100;