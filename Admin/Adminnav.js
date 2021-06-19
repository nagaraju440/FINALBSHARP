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
import auth from '@react-native-firebase/auth';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './home.js'
import Students from './Students'
import DemoClassStudents from './DemoClassStudents.js';
import DemoClassCourseWiseStudents from './DemoClassCourseWiseStudents.js';
import SelectSlot from './SelectSlot'
import AdminTopNav2Register from '../AdminTopNav2Register.js';
import AdminStudents from './AdminStudents.js';
import CourseWiseRegisterdStudents from './CourseWiseRegisterdStudents.js';
const Stack = createStackNavigator();
class Adminnav extends React.Component {
    state = {  }
    componentDidMount=()=>{
        console.log("hehehhhehehlohohlhihlojih  ")
        auth()
  .createUserWithEmailAndPassword('nagarajuuuuuuuu1@gmail.com', 'S')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
      alert(error.code)
    // if (error.code === 'auth/email-already-in-use') {
    //   console.log('That email address is already in use!');
    // }

    // if (error.code === 'auth/invalid-email') {
    //   console.log('That email address is invalid!');
    // }

    // console.error(error);
  });
    }
    render() { 
        return ( 
            // <View>
                // {/* <Text>hello</Text> */}
                // <NavigationContainer>
                 <Stack.Navigator>
                 <Stack.Screen name="Home" component={Home}  options={{
               headerShown: false
              }}/>
                 <Stack.Screen name="Students" component={AdminStudents} />
                 {/* <Stack.Screen name="Students" component={Students} /> */}
                 <Stack.Screen name="DemoClassStudents" component={DemoClassStudents} />
                 {/* <Stack.Screen name="Fee" component={Fee} />
                 <Stack.Screen name="Attendence" component={Attendence} />
                 <Stack.Screen name="Posts" component={Posts} /> */}
                 <Stack.Screen name="DemoClassCourseWiseStudents" component={DemoClassCourseWiseStudents} />
                 <Stack.Screen name="SelectSlot" component={SelectSlot} />
                 <Stack.Screen name="AdminRegister" component={AdminTopNav2Register} />
                 <Stack.Screen name="CourseWiseRegisteredStudents" component={CourseWiseRegisterdStudents} />



                 </Stack.Navigator>
                // </NavigationContainer>
            // </View>
         );
    }
}
 
export default Adminnav;