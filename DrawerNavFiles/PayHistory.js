import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
class PayHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getvalues: [],
      history: [],
    };
  }
  componentDidMount = () => {
    firebase
      .database()
      .ref('/Users/' + auth().currentUser.uid + '/Courses')
      .once('value')
      .then((snapshot) => {
        console.log('User data: ', Object.keys(snapshot.val())),
          this.setState({
            getkeys: Object.keys(snapshot.val()),
            getvalues: Object.values(snapshot.val()),
          });
        Object.keys(snapshot.val()).map((l) => {
          // console.log(snapshot.val()[l])
          firebase
            .database()
            .ref(
              '/Users/' +
                auth().currentUser.uid +
                '/Courses/' +
                l +
                '/Payments',
            )
            .once('value')
            .then((l) => {
              // console.log("l is",l)
              Object.values(l.val()).map((k) => {
                this.state.history = this.state.history.concat(k);
                this.setState({history: this.state.history});
              });
              console.log('final history is', this.state.history);
            });
        });
      })
      .catch((e) => {
        this.setState({noCourses: 1});
        console.log('no such document');
      });
  };
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        {this.state.noCourses === 1 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text>You didin't register for any course</Text>
              <Text>Go To home page and register for the course</Text>
            </View>
          </View>
        ) : (
          <View>
            {this.state.history.length === 0 ? (
              <Text>Laoding...</Text>
            ) : (
              <View>
                {this.state.history.map((l) => {
                  return (
                    <View style={{flex: 1}}>
                      {/* <View></View>
                      <Text>
                        you paid to {l.details.courseName} at this date
                        {l.payDate}/{l.payMonth}/{l.payYear}
                      </Text> */}
                      <View
                        style={{
                          width: '95%',
                          height:44,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 10,
                          paddingBottom: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderColor: 'black',
                          borderWidth: 1,
                          borderRadius: 10,
                          marginTop: 10,
                          height:50,
                          marginLeft:10
                        }}>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Roboto',
                              fontWeight: '700',
                              fontSize: 18,
                            }}>
                           {l.details.courseName}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto',
                              fontWeight: '500',
                              fontSize: 14,
                            }}>
                             {l.payDate}/{l.payMonth}/{l.payYear}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: '#04D049',
                            fontFamily: 'Roboto',
                            fontWeight: '500',
                            fontSize: 16,
                          }}>
                          1500
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default PayHistory;