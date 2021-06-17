import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,ScrollView,
    TouchableOpacity,
    Button, LogBox 
    // ScrollView
} from 'react-native';

// import Piano from './pianoimage.jpg'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
import Piano from './images/pianoimage.jpg'
// import StackNav from './TopNavs/Stack'
import Menu from './Icons/Menu'
import Notification from './Icons/Notification';
import User from './Icons/User'
import { FloatingAction } from "react-native-floating-action"; // eslint-disable-line import/no-unresolved
// import RNUpiPayment from 'react-native-upi-payment'
import RNUpiPayment from 'react-native-upi-pay';
import auth from '@react-native-firebase/auth';
import { NavigationActions } from 'react-navigation'
import Floatstack from './screens/float'
import { EventRegister } from 'react-native-event-listeners'
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const actions = [
  {
   color: "#25D366",
    icon: require("./images/M.png"),
    name: "M",
    position: 3,
  },
  {
   color: "#0084FF",
    icon: require("./images/T.png"),
    name: "T",
    position: 2,
  },
  {
    color: "#FF6D18",
   
    icon: require("./images/G.png"),
    name: "G",
    position: 1,
  },

];

class Courses extends React.Component {
  constructor(props){
    super(props);
    this.state={
        Status:"", txnId:"",
        name:'',
        age:'',
        number:'',
        email:'',
        courseData:'',
        batchNo:''
    }
}
  componentDidMount=()=>{
    console.log(this.props,"is props hiii")
    // this.props.navigation.popToTop()

  //   auth()
  // .signOut()
  // .then(() => console.log('User signed out!')
  
  // );
  }
  click=()=>{
    console.log("registering",this.state,this.props.route.params.data)
    
    // this.props.navigation.navigate('UserPage1')
  }
  registerStudent=()=>{
    console.log("hehehheeheheh")
  }
  componentDidMount=()=>{
    // EventRegister.emit('loadData', 'it works!!!')
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    this.setState({courseData:this.props.route.params.data,batchNo:this.props.route.params.batchNo})
    // console.log(this.props.route.params,"topnav2.js")
  }
  
    render() {
      // console.log("hehehhehhe",this.props.navigation.navigate)
    var that=this;
     function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      function floo(){
        
        that.props.navigation.popToTop()

        // console.log("random uid is",uuidv4(),that.props.route.params)
        console.log("waiting for money")
          RNUpiPayment.initializePayment({
              vpa: '9347747143@okbizaxis', // or can be john@ybl or mobileNo@upi
              payeeName: 'Payee Name',
              amount: 1,
              transactionRef: 'AXId8c71205eb7d459889bb7018bdf2c056'
          },successCallback,failureCallback);
      }
      function failureCallback(data){
        console.log(data)
        // in case no action taken
        if (data['status']=="FAILURE"){
            that.setState({Status:"FAILURE"})
            that.setState({message:data['message']});
        }
        // in case of googlePay
        else if (data['Status']=="FAILURE"){
            that.setState({Status:"FAILURE"})
            that.setState({message:"app closed without doing payment"});;
        }
        // in case of phonepe
        else if (data['Status']=="Failed"){
            that.setState({Status:"FAILURE"});
            that.setState({message:"app closed without doing payment"});
        }
        // in case of phonepe
        else if(data['Status']=="Submitted"){
            that.setState({Status:"FAILURE"});
            that.setState({message:"transaction done but pending"});
        }
        // any other case than above mentioned
        else{
            that.setState({Status:"FAILURE"});
            that.setState({message:data['Status']});
        }
    }
    function successCallback(data){
        //
        alert("sucsessfulled payed")
        console.log(data);
        that.setState({Status:"SUCCESS"});
        that.setState({txnId:data['txnId']});
        that.setState({message:"Succccessfull payment"});
        var randomUid=uuidv4()
        firebase
        .database()
         .ref('/Courses/Course'+that.props.route.params.data.no+'/Batches/BatchNo'+that.props.route.params.batchNo+'/Peoples/'+auth().currentUser.uid)
         .set({
          uid:randomUid
        })
        .then((snapshot) => {
          console.log("sucsessfully added random uid")
          firebase.database().ref('/Students/'+randomUid)
          .set({
            name: that.state.name,
                age:that.state.age,
                email:that.state.email,
                number:that.state.number,
                userUid:auth().currentUser.uid,
                courseName:that.props.route.params.data.name,
                courseNo:that.props.route.params.data.no,
                BatchNo:that.props.route.params.batchNo
          }).then(l=>{
            console.log("sucsessfully registerd")
            alert("sucsessfully registered for the course")
          })
          firebase.database().ref('/Users/'+auth().currentUser.uid+'/Courses/course'+that.props.route.params.data.no)
          .set({
           name:that.props.route.params.data.name,
           isRegisterd:true,
           courseName:that.props.route.params.data.name,
           courseNo:that.props.route.params.data.no,
           BatchNo:that.props.route.params.batchNo
          }).then(l=>{
            console.log("sucsessfully registerd")
            alert("sucsessfully registered for the course") 
            that.props.navigation.popToTop()
           EventRegister.emit('loadData', 'it works!!!')
          })
        });
    }
      // function failureCallback(data){
//             console.log(data)
//             // in case no action taken
//             if (data['status']=="FAILURE"){
//                 that.setState({Status:"FAILURE"})
//                 that.setState({message:data['message']});
//             }
//             // in case of googlePay
//             else if (data['Status']=="FAILURE"){
//                 that.setState({Status:"FAILURE"})
//                 that.setState({message:"app closed without doing payment"});;
//             }
//             // in case of phonepe
//             else if (data['Status']=="Failed"){
//                 that.setState({Status:"FAILURE"});
//                 that.setState({message:"app closed without doing payment"});
//             }
//             // in case of phonepe
//             else if(data['Status']=="Submitted"){
//                 that.setState({Status:"FAILURE"});
//                 that.setState({message:"transaction done but pending"});
//             }
//             // any other case than above mentioned
//             else{
//                 that.setState({Status:"FAILURE"});
//                 that.setState({message:data['Status']});
//             }
//         }
//         function successCallback(data){
//             //
//             console.log(data);
//             that.setState({Status:"SUCCESS"});
//             that.setState({txnId:data['txnId']});
//             that.setState({message:"Succccessfull payment"});
//         }
      //  var failureCallback=(data)=>{
      //   console.log("failed",data)
      //   // this.registerStudent()
      //     if(data['Status']=="SUCCESS"){
      //       console.log("are yarr succsess brooooooooo")
      //       alert("sucsessfully regisstered for your course")
      //       firebase.database()
      //         .ref('/Admin/'+auth().currentUser.uid)
      //         .set({
      //           name: this.state.name,
      //           age: this.state.age,
      //           email:this.state.email,
      //           number:this.state.number
      //         })
      //         .then(() => console.log('Data set.'));
      //         that.setState({Status:"SUCCESS"});
      //         that.setState({txnId:data['txnId']});}
      //     else{
      //         that.setState({Status:"FAILURE"})}
      // }
      // function successCallback(data){
      //   console.log("sucsessfully register for your course")


      //     //nothing happened here using Google Pay
      // }
        return (
          <View style={{backgroundColor:'white'}}>
      {/* <StackNav/> */}
       {/* .........................top bsharp..............................      */}
             
          
            <ScrollView >
            {/* <StckNav */}
      
                <View style={styles.TopNav}>
                    
                    <Image source={Piano} style={styles.Image} />
                   <Text style={styles.heading1}>{this.props.route.params.data.name} Course</Text>
                    <Text style={styles.text1}>{this.props.route.params.data.description}
                    </Text>
                
                <View style={{marginTop:20
                    ,height:500}}>
                   
                  <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Name'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
        onChangeText={t=>{this.setState({name:t})}}
      />  


       </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Age'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
        onChangeText={t=>{this.setState({age:t})}}
      />

       </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Phone Number'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
        onChangeText={t=>{this.setState({number:t})}}
      /> 
        </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Email'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
        onChangeText={t=>{this.setState({email:t})}}
      /> 
        </View>
       <View style={{marginTop:22}}>
                 <OutlinedTextField
        label='Batch'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      /> 

        </View> 
        <View  >
         <TouchableOpacity onPress={()=>{floo()}}><Text style={styles.registerBtn}>Register</Text></TouchableOpacity>
         </View>
         
                </View>
                </View>
            </ScrollView>
            </View>
        )
    }
          
      //   <ScrollView>
      //     {/* <StckNav */}

      //     <View style={styles.TopNav}>
      //       <Image source={Piano} style={styles.Image} />
      //       <Text style={styles.heading1}>Full Course Mastering Keyboard</Text>
      //       <Text style={styles.text1}>
      //         We are the best Carnatic Classical Music Academy in Hyderabad,
      //         specialised in both online music classes and offline music
      //         classes, established in the year 1998 with an aim to spread the
      //         knowledge of BS#ARP MUSIC worldwide. We provide online music
      //         classes for kids and all age group of students.
      //       </Text>

      //        <View 
      //        style={{marginLeft:'6.5%'}}
      //        >
      //           <TouchableOpacity 
      //           onPress={()=>{
      //             this.props.navigation.openDrawer()
      //           }}
      //           >
      //           <Menu/>
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      // </ScrollView>
      // </View>
//     );
//   }
// }
  }
const styles = StyleSheet.create({
    container1: {
        // marginTop: 50,
        height: 944,
        width: "100%",
        // marginTop:45,
    },
    TopNav: {
        // height: 57,
        width: "87%",
        color: 'blue',
        // padding: 25,
        // marginTop:85,
        marginLeft: 25
    },
    Image: {
        height: 189,
        width: "100%",
        borderRadius:15,
        marginTop:30
    },
    heading1: {
        marginTop: 35,
        textAlign: 'center',
        fontFamily: 'bold',
        fontSize: 20,
        // marginLeft: 50
    },
    text1: {
        marginTop: 17,
        fontSize: 12,
        // textAlign: 'center',
        fontFamily: 'poppins',
        // letterSpacing: 0.5
        lineHeight: 20,
        // marginRight: 91
    },
    registerBtn:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Poppins',
        height:48,
        width:"100%",
        backgroundColor:'#2C57EF',
        borderRadius:15,
        textAlign:'center',
        textAlignVertical:'center',
      marginTop:25
      
      },
});

export default Courses;