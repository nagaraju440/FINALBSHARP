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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Drawernavi from './Navigations/TopNav'
// import TopNav from './Navigations/TopNav'
import StackNav from './TopNavs/stack'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Sample from './sample'
import Switch from './Authentication/Switch'
// import Stack100 from './StackTesting/Stack'
import Bsharpimage from './images/Bsharpimage';
import VolumeSlider from 'react-native-volume-slider';
function App(){
    // ----------------port-1111------------------
    return(
// ---------------------------Adding drawer nav--------------------
        // <Drawernavi />
        <Sample/>
  
        
        // <Switch/>
        // <Stack100/>
        // <StackNav/>
        // <TopNav/>
    )
}

export default App;
const styles = StyleSheet.create({
  slider: {
    height: 30,
    marginLeft: 7,
  }
});
