import React, { Component } from 'react';
import { View, Text } from 'react-native';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
class CourseWiseRegisterdStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
           data:[]
    };
  }
componentDidMount=()=>{
    console.log("props",this.props.route.params)
    firebase.database().ref('/Students').orderByChild('courseNo').equalTo(this.props.route.params.courseNo)
    .once('value').then(l=>{
        // console.log("l is", Object.values(l.val()))

    //    l.val().filter(m=>m.courseNo==this.props.route.params.courseNo)
    //     console.log("huuuuuuuuuuuuuuuuu",x,"is x")
      var x=  Object.values(l.val())
      var y=n=>x.filter(k=>k.BatchNo==this.props.route.params.batchNo)
    //   console.log("we get it",y())
      this.state.data=y()
      this.setState({data:this.state.data})
      console.log("final data is",this.state.data)
    })
}
  render() {
    return (
      <View>
        <Text> CourseWiseRegisterdStudents </Text>
      </View>
    );
  }
}

export default CourseWiseRegisterdStudents;
