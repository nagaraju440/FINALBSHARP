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
// import 'react-native-gesture-handler';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import Drawernavi from './Navigations/TopNav'
// // import TopNav from './Navigations/TopNav'
// import StackNav from './TopNavs/stack'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Sample from './sample'
// // import Stack100 from './StackTesting/Stack'
// import Bsharpimage from './images/Bsharpimage';
import Login from './Splashscreens/login';
import Signupp from './Splashscreens/Signup';
import Splash from './Splashscreens/SplashScreen';
import FloatingActionRightScreen from './screens/float';
import Floatstack from './screens/Floatstack'
function App(){
    // ----------------port-1111------------------
    return(
// ---------------------------Adding drawer nav--------------------
        // <Drawernavi />
        // <Sample/>
        // <Stack100/>
        // <Splash />
        <Floatstack />
        // <FloatingActionRightScreen />
        // <Login />
        // <Signupp/>
        // <StackNav/>
        // <TopNav/>
    )
}

export default App;
