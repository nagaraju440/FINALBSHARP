import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Card,
} from 'react-native';
import Piano from '../images/pianoimage.jpg';
import auth from '@react-native-firebase/auth';
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
      noCourses: '',
      payDetails: {},
      date: new Date(),
    };
  }
  componentDidMount = () => {
    console.log(this.state.date);

    firebase
      .database()
      .ref('/Users/' + auth().currentUser.uid + '/Courses')
      .once('value')
      .then((snapshot) => {
        //    console.log('User data: ', snapshot.val()),
        this.setState({
          getkeys: Object.keys(snapshot.val()),
          getvalues: Object.values(snapshot.val()),
        });
      })
      .catch((e) => {
        this.setState({noCourses: 1});
        console.log('no such document');
      });
  };
  mapping = () => {
    return (
      <View>
        <Text>hiiii</Text>
        {this.state.getkeys.map((i, i1) => {
          console.log('hiiii---------------');
          return (
            <View key={i1}>
              <Text>hiii</Text>
            </View>
          );
        })}
      </View>
    );
  };
  payNow = (i) => {
    console.log(i);
    this.state.payDetails = i;
    this.setState({payDetails: this.state.payDetails});
    firebase
      .database()
      .ref(
        '/Users/' +
          auth().currentUser.uid +
          '/Courses/course' +
          this.state.payDetails.courseNo +
          '/Payments/',
      )
      .push()
      .set({
        name: 'nagaraju',
        money: 1500,
        payDate: JSON.stringify(this.state.date.getDate()),
        payMonth: JSON.stringify(this.state.date.getMonth()),
        payYear: JSON.stringify(this.state.date.getFullYear()),
        WholeDate: JSON.stringify(this.state.date),
        details: this.state.payDetails,
      })
      .then((l) => {
        console.log('added data');
      })
      .catch((l) => {});
  };
  render() {
    var that = this;
    function floo(paymentApp) {
      console.log(paymentApp, 'in floo');
      RNUpiPayment.initializePayment(
        {
          vpa: '9347747143@okbizaxis', //your upi address like 12345464896@okhdfcbank
          payeeName: ' abc', // payee name
          amount: '1', //amount
          transactionNote: 'Testing Upi', //note of transaction
          transactionRef: 'aasf-332-aoei-fn', //some refs to aknowledge the transaction
        },
        successCallback,
        failureCallback,
      );
    }
    function failureCallback(data) {
      console.log(data);
      // in case no action taken
      if (data['status'] == 'FAILURE') {
        that.setState({Status: 'FAILURE'});
        that.setState({message: data['message']});
      }
      // in case of googlePay
      else if (data['Status'] == 'FAILURE') {
        that.setState({Status: 'FAILURE'});
        that.setState({message: 'app closed without doing payment'});
      }
      // in case of phonepe
      else if (data['Status'] == 'Failed') {
        that.setState({Status: 'FAILURE'});
        that.setState({message: 'app closed without doing payment'});
      }
      // in case of phonepe
      else if (data['Status'] == 'Submitted') {
        that.setState({Status: 'FAILURE'});
        that.setState({message: 'transaction done but pending'});
      }
      // any other case than above mentioned
      else {
        that.setState({Status: 'FAILURE'});
        that.setState({message: data[Status]});
      }
    }
    function successCallback(data) {
      firebase
        .database()
        .ref(
          '/Users/' +
            auth().currentUser.uid +
            '/Courses/course' +
            that.state.payDetails.courseNo +
            '/Payments/',
        )
        .push()
        .set({
          name: 'nagaraju',
          money: 1500,
          payDate: JSON.stringify(that.state.date.getDate()),
          payMonth: JSON.stringify(that.state.date.getMonth()),
          payYear: JSON.stringify(that.state.date.getFullYear()),
          WholeDate: JSON.stringify(that.state.date),
          details: that.state.payDetails,
        })
        .then((l) => {
          console.log('added data');
        })
        .catch((l) => {});
      console.log(data);
      that.setState({Status: 'SUCCESS'});
      that.setState({txnId: data['txnId']});
      that.setState({message: 'Succccessfull payment'});
    }
    return (
      <View style={{flex: 1}}>
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
        {this.state.noCourses === 1 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You didin't register for any course</Text>
            <Text>Go To home page and register for the course</Text>
          </View>
        ) : (
          <ScrollView>
            {/* <Text style={styles.text1style}>Courses</Text> */}
            <View style={{flex:1,alignItems:'center'}}>

            {this.state.getvalues.map((i, l) => {
              console.log('hiiii---------------');
              return (
                <View style={styles.sunilc} key={l}>
                  <Text style={styles.courseName}>{i.name}</Text>

                  <TouchableOpacity
                    onPress={
                      () => {
                        this.payNow(i);
                        floo(i);
                      }
                      //   this.props.navigation.navigate({name:'Video',params:i})
                    }
                    style={styles.btnBg}>
                    <Text style={styles.registerBtn}>Pay Now</Text>
                  </TouchableOpacity>
                  {/* <Text style={styles.teacherBtn}>{i.teacher.name}</Text> */}
                </View>
              );
            })}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  sunilc: {
    width: '95%',
    height: 50,
    // backgroundColor:"blue",
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    // marginLeft: 10,
    // borderColor:'grey'
    alignItems:'center'
  },
 
 

  courseName: {
    fontFamily: '',
    fontSize: 15,
    fontWeight: '700',
    // left: 25,
    // width: 150,Raleway
    color: '#292629',
  },
  btnBg:{
    backgroundColor: '#2C57EF',
    borderRadius: 6,
    justifyContent:'center',
    alignItems:'center',
    height: 28,
    width: 82,

  },


  registerBtn: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Poppins',
   
  },
 
});
