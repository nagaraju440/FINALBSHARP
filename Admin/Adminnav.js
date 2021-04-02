import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './home.js'
import Students from './Students'
const Stack = createStackNavigator();
class Adminnav extends React.Component {
    state = {  }
    render() { 
        return ( 
            // <View>
                // {/* <Text>hello</Text> */}
                <NavigationContainer>
                 <Stack.Navigator>
                 <Stack.Screen name="Home" component={Home}  options={{
               headerShown: false
              }}/>
                 <Stack.Screen name="Students" component={Students} />
                 {/* <Stack.Screen name="Fee" component={Fee} />
                 <Stack.Screen name="Attendence" component={Attendence} />
                 <Stack.Screen name="Posts" component={Posts} /> */}
                 
                 </Stack.Navigator>
                </NavigationContainer>
            // </View>
         );
    }
}
 
export default Adminnav;