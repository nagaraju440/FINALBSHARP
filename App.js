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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Drawernavi from './Navigations/TopNav'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Bsharpimage from './IMAGES/Bsharpimage';
function App(){
    // ----------------port-1111------------------
    return(
// ---------------------------Adding drawer nav--------------------
        <Drawernavi />
        // <Bsharpimage/>
      
    )
}

export default App;
