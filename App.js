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
import Decide from './Navigations/Decide'
// import Decide from './navigations/Decide'
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
// import Floatstack from './screens/'
import Floatstack from './screens/Floatstack'
import Metro from './floating/metro'
import database from '@react-native-firebase/database';
import firebase from "@react-native-firebase/app";
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
        // auth().signOut()
        console.log("a user is there", auth().currentUser.email, user.uid, "and i am from sample.js bro")
        this.state.x = 1;
        this.setState({ x: this.state.x })
      } else {
        this.state.x = 0;
        this.setState({ x: this.state.x })
        console.log("no  user is there and i am from smaple .js bro")

      }
    })
  }
  render() {


    if (this.state.x == 1) {
      return (<NavigationContainer>
        {/* <Drawernavi /> */}
        <Decide/>

      </NavigationContainer>
      )
    }
    else {
      return (<SwitchNav />)
    }

    //   return(
    //     <NavigationContainer>
    //     <Floatstack/>
    // </NavigationContainer>
    //   )
    {/* // return(
    // <Tanpura />
    // ) */}
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








// import React, {Component} from 'react';
// import {View,Text,Button} from 'react-native'; 
// import RNUpiPayment from 'react-native-upi-pay';
 
// /*
//     npm install react-native-upi-pay
//     react-native link
// */
 
// export default class App extends Component{
//     constructor(props){
//         super();
//         this.state={
//             Status:"", 
//             txnId:"",
//             GOOGLE_PAY:'GOOGLE_PAY',
//             PHONEPE:'PHONEPE',
//             PAYTM:'PAYTM',
//             message:""
//         }
//     }
//     render(){
//         that=this;
//         function floo(paymentApp){
//             RNUpiPayment.initializePayment({
//                 vpa: '9347747143@okbizaxis',  		//your upi address like 12345464896@okhdfcbank
//                 payeeName: ' abc',   			// payee name 
//                 amount: '1',				//amount
//                 transactionNote:'Testing Upi',		//note of transaction
//                 transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
//             },successCallback,failureCallback);
//         }
        // function failureCallback(data){
        //     console.log(data)
        //     // in case no action taken
        //     if (data['status']=="FAILURE"){
        //         that.setState({Status:"FAILURE"})
        //         that.setState({message:data['message']});
        //     }
        //     // in case of googlePay
        //     else if (data['Status']=="FAILURE"){
        //         that.setState({Status:"FAILURE"})
        //         that.setState({message:"app closed without doing payment"});;
        //     }
        //     // in case of phonepe
        //     else if (data['Status']=="Failed"){
        //         that.setState({Status:"FAILURE"});
        //         that.setState({message:"app closed without doing payment"});
        //     }
        //     // in case of phonepe
        //     else if(data['Status']=="Submitted"){
        //         that.setState({Status:"FAILURE"});
        //         that.setState({message:"transaction done but pending"});
        //     }
        //     // any other case than above mentioned
        //     else{
        //         that.setState({Status:"FAILURE"});
        //         that.setState({message:data['Status']});
        //     }
        // }
        // function successCallback(data){
        //     //
        //     console.log(data);
        //     that.setState({Status:"SUCCESS"});
        //     that.setState({txnId:data['txnId']});
        //     that.setState({message:"Succccessfull payment"});
        // }
//         return (
//         <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
//         <View style={{flexDirection:'row',padding:5}}>
//             <Button
//             title="Google pay"
//             onPress={() => {floo(this.state.GOOGLE_PAY)}}
//             />
 
//             <Button
//             title="Phone pe"
//             onPress={() => {floo(this.state.PHONEPE)}}
//             />
//             <Button
//             title="PAYTM"
//             onPress={() => {floo(this.state.PAYTM)}}
//             />
//         </View>
 
//         <Text>{this.state.Status+" "+this.state.txnId}</Text>
//         <Text>{this.state.message}</Text>
//         </View>
//         );
//     }
// }