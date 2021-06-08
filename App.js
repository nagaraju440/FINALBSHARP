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
  Br,
} from 'react-native';
import {AppRegistry} from 'react-native';
import RunSheet from './bottomSheet/RunSheet';
// import 'react-native-gesture-handler';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import Drawernavi from './Navigations/TopNav'
// // import TopNav from './Navigations/TopNav'
// import StackNav from './TopNavs/stack'
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Sample from './sample'
import SwitchNav from './Authentication/Switch';
import Drawernavi from './Navigations/TopNav';
import auth from '@react-native-firebase/auth';
// import { NavigationContainer } from '@react-navigation/native';
// import Tanpura from './floating/tanpura'
// import Stack100 from './StackTesting/Stack'
// import Bsharpimage from './images/Bsharpimage';
// import LandingPage22 from './screens/LandingPage22';
// import Sample from './sample'
// // import Stack100 from './StackTesting/Stack'
// import Bsharpimage from './images/Bsharpimage';
// import Login from './Splashscreens/login';
// import Signupp from './Splashscreens/Signup';
// import Splash from './Splashscreens/SplashScreen';
// import FloatingActionRightScreen from './screens/float';
import Floatstack from './screens/Floatstack';
import Metro from './floating/metro';
import ClassPage from './classSection/ClassPage';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  componentDidMount = () => {
    auth().onAuthStateChanged((user) => {
      // auth().signOut()
      if (user) {
        //   setAuthenticated(true);
        console.log(
          'a user is there',
          auth().currentUser.email,
          'and i am from sample.js bro',
        );
        this.state.x = 1;
        this.setState({x: this.state.x});
      } else {
        this.state.x = 0;
        this.setState({x: this.state.x});
        console.log('no  user is there and i am from smaple .js bro');
      }
    });
  };
  render() {
    // return (
    //   //  <Metro/>
    //   // <RunSheet/>
    //   // <NavigationContainer>
    //   //   <Floatstack />
    //   // </NavigationContainer>
    //   // <ClassPage/>
    // )


    ///////////////////////////////////   main   //////////////////////////////////////////
    if(this.state.x==1){
      return(<NavigationContainer>
        <Drawernavi/>
        

      </NavigationContainer>
      )
    }
    else{
      return(<SwitchNav/>)
    }

    
  }

  // ----------------port-8081------------------
  // if(x==1){
  //   return(<NavigationContainer>
  //     <Drawernavi/>

  //   </NavigationContainer>
  //   )
  // }
  // else{
  //   return(<SwitchNav/>)
  // }
  // return(
  // ---------------------------Adding drawer nav--------------------
  // <Drawernavi />
  // <Sample/>
  // <LandingPage22/>
  // <SwitchNav/>
  // <Stack100/>
  // <Splash />
  // <Login />
  // <Signupp/>
  // <StackNav/>
  // <TopNav/>
  // )
}
export default App;
