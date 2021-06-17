import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native'
import Piano from '../images/pianoimage.jpg';
import auth from '@react-native-firebase/auth'
import RNUpiPayment from 'react-native-upi-pay';
var firebase = require('firebase');
var config = {
  databaseURL: 'https://sample-b0875.firebaseio.com/',
  projectId: 'sample-b0875',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default class PayNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          getkeys: [],
          getvalues: [],
          getvalue2: {},
          noCourses:''
        };
      }
      componentDidMount = () => {
    //    console.log(this.props)

     firebase
     .database()
     .ref('/Users/'+auth().currentUser.uid+'/Courses')
     .once('value')
     .then((snapshot) => {
    //    console.log('User data: ', snapshot.val()),
         this.setState({
           getkeys: Object.keys(snapshot.val()),
           getvalues: Object.values(snapshot.val()),
         });
     }).catch(e=>{
         this.setState({noCourses:1})
         console.log("no such document")

     })
 };
 mapping = () => {
   return (
     <View>
       <Text>hiiii</Text>
       {this.state.getkeys.map((i,i1) => {
         console.log('hiiii---------------');
         return (
           <View key={i1}>
             <Text>hiii</Text>
           </View>
         );
       })}
     </View>
   )}
   payNow=(i)=>{
     console.log(i)
   }
  render() {
    var that=this;
    function floo(paymentApp){
        RNUpiPayment.initializePayment({
            vpa: '9347747143@okbizaxis',  		//your upi address like 12345464896@okhdfcbank
            payeeName: ' abc',   			// payee name 
            amount: '1',				//amount
            transactionNote:'Testing Upi',		//note of transaction
            transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
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
            that.setState({message:data[Status]});
        }
    }
    function successCallback(data){
        //
        console.log(data);
        that.setState({Status:"SUCCESS"});
        that.setState({txnId:data['txnId']});
        that.setState({message:"Succccessfull payment"});
    }
    return (
      <View style={{flex:1}}>

        {/* <TouchableOpacity style={{
                color: '#fff',
                fontSize: 11,
                fontFamily: 'Poppins',
                height: 48,
                width: 282,
                backgroundColor: '#2C57EF',
                borderRadius: 6,
                textAlign: 'center',
                textAlignVertical: 'center',
                justifyContent:'center',alignItems:'center'
        }
        }>
          <Text style={{color:'white',fontSize:20}}>Pay Now</Text>
        </TouchableOpacity> */}
         {
             this.state.noCourses===1?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Text>You didin't register for any course</Text>
                 <Text>Go To home page and register for the course</Text>
             </View>:<View>
                 <ScrollView>
                <View style={styles.outerbox}>
              <Text style={styles.text1style}>Courses</Text>

                {this.state.getvalues.map((i,l) => {
              console.log('hiiii---------------');
              return (
                <View style={styles.sunilc} key={l}>
                  <View style={styles.image}>
                    <Image source={Piano} style={styles.piano1}></Image>
                  </View>
                  <View style={styles.sunilcborderwidth}>
                    <View style={styles.flex}>
                      <Text style={styles.language}>Telugu</Text>
                      <Text style={styles.courseName}>{i.name}</Text>
                      {/* <Text style={styles.courseCost}>₹{i.fees}</Text> */}
                    </View>
                   

                    <View style={styles.flex}>
                      <TouchableOpacity
                        onPress={() =>
                            {
                                this.payNow(i);
                                floo()
                            }
                        //   this.props.navigation.navigate({name:'Video',params:i})
                        }>
                        <Text style={styles.registerBtn}>Pay Now</Text>
                      </TouchableOpacity>
                      {/* <Text style={styles.teacherBtn}>{i.teacher.name}</Text> */}
                    </View>
                  </View>
                </View>
              );
            })}
                </View>
               </ScrollView>
             </View>
         }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    outerbox: {
      width: '85%',
    //   height: 3695,
      //   borderColor:"red",
      //   backgroundColor:"red",
      //   paddingTop:1000,
      marginLeft: '7%',
      marginTop: 34,
    },
    topnavstyle: {
      width: 418.39,
      height: 57,
      // position:"fixed",
    },
    imagestyle: {
      // width:"100%",
      // height:233,
      // backgroundColor:"whitesmoke",
    },
    text1style: {
      fontFamily: 'Poppins',
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
    //   marginTop: 21,
    },
    text2style: {
      fontFamily: 'Raleway',
      fontSize: 12,
      color: '#000000',
      lineHeight: 20,
      //    letterSpacing:0.1,
      marginTop: 20,
    },
    descriptionstyle: {
      fontFamily: 'Raleway',
      fontSize: 12,
      color: '#000000',
      lineHeight: 20,
      //    letterSpacing:0.1,
      marginTop: 10,
    },
    text3style: {
      fontFamily: 'Poppins',
      fontSize: 18,
      color: '#000000',
      lineHeight: 20,
      fontWeight: 'bold',
      marginTop: 25,
    },
    forthreeboxes: {
      marginTop: 39,
    },
    piano1: {
      width: '100%',
      height: '100%',
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    forfirstbox: {
      width: '42.88%',
      height: 219,
      backgroundColor: '#EEEEEE',
      borderRadius: 15,
    },
    forsecondbox: {
      marginLeft: 15,
      marginTop: 44,
      width: '51.41%',
      height: 175,
      backgroundColor: '#EEEEEE',
      borderRadius: 15,
    },
    fortwoboxes: {
      flexDirection: 'row',
    },
    forthirdbox: {
      // marginLeft:15,
      marginTop: 15,
      width: '100%',
      height: 175,
      backgroundColor: '#EEEEEE',
      borderRadius: 15,
    },
    sunilc: {
      width: '100%',
      height: 378,
      // backgroundColor:"blue",
      marginTop:20,
    },
    sunilcborderwidth: {
      borderRadius: 6,
      borderColor: 'whitesmoke',
      borderWidth: 3,
      height: 130,
      // borderRadius:15,
      marginTop: -1,
  
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    sunilc1: {
      width: '100%',
      height: 523,
      // backgroundColor:"whitesmoke",
      marginTop: 25,
    },
    teacherstyle: {
      fontFamily: 'Poppins',
      fontSize: 18,
      color: '#000000',
      fontWeight: 'bold',
      marginTop: 50,
    },
    haricstyle: {
      width: '100%',
      height: 236,
      // backgroundColor:"whitesmoke",
      marginTop: 25,
    },
    achive: {
      marginTop: 25,
      width: '100%',
      height: 392,
      // backgroundColor:"whitesmoke",
      flexDirection: 'row',
    },
    achive1: {
      width: '58%',
      height: '100%',
    },
    achive2: {
      width: '38%',
      height: '100%',
      marginLeft: 9,
    },
    achive3: {
      width: '100%',
      height: 152,
    },
    img1: {
      width: '100%',
      height: 111,
      borderRadius: 15,
      marginTop: 8,
    },
    twoimgachive1: {
      flexDirection: 'row',
      width: '100%',
      height: 152,
      marginTop: 8,
    },
    img3: {
      width: '48%',
      height: 152,
      borderRadius: 15,
    },
    img4: {
      width: '48%',
      height: 152,
      borderRadius: 15,
      marginLeft: 8,
    },
    img5: {
      width: '100%',
      height: 133,
      borderRadius: 15,
      marginTop: 8,
    },
    img7: {
      width: '100%',
      height: 108,
      borderRadius: 15,
      marginTop: 8,
    },
    //  suni gadi stylings
    image: {
      width: '100%',
      height: 200,
      backgroundColor: 'lightgrey',
      justifyContent: 'center',
      borderTopStartRadius: 15,
      borderTopRightRadius: 15,
      alignContent: 'center',
      alignItems: 'center',
    },
    flex: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 15,
    },
    language: {
      backgroundColor: 'lightgrey',
      height: 10,
      width: 30,
      textAlign: 'center',
      alignContent: 'center',
      borderRadius: 8,
      fontSize: 7,
      fontFamily: 'poppins',
      marginTop: 5,
      backgroundColor: '#EEEEEE',
    },
  
    courseName: {
      fontFamily: 'Raleway',
      fontSize: 15,
      fontWeight: '700',
      left: 25,
      width:150,
      color: '#292629',
    },
    courseCost: {
      fontSize: 9,
      left: 125,
      marginTop: 5,
      color: '#292629',
    },
    details: {
      marginTop: 10,
      marginLeft: 16,
      fontFamily: 'Raleway',
      color: '#292629',
      width: '90%',
      fontSize: 12,
      lineHeight: 20,
    },
  
    registerBtn: {
      color: '#fff',
      fontSize: 11,
      fontFamily: 'Poppins',
      height: 28,
      width: 82,
      backgroundColor: '#2C57EF',
      borderRadius: 6,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    registerBtn1: {
        color: '#fff',
        fontSize: 11,
        fontFamily: 'Poppins',
        height: 28,
        width: 142,
        backgroundColor: '#2C57EF',
        borderRadius: 6,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft:20
      },
    teacherBtn: {
      color: '#292929',
      fontSize: 11,
      fontFamily: 'Poppins',
      height: 28,
      width: 82,
      backgroundColor: '#EEEEEE',
      left: 5,
      borderRadius: 6,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });