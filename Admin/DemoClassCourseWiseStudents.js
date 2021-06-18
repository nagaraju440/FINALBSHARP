import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
class DemoClassCourseWiseStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }
  componentDidMount=()=>{
    //   console.log("data",this.props.route.params)
      firebase.database().ref('/DemoClass/Courses/Course'+this.props.route.params.no+'/Students/')
      .once('value').then(l=>{
        //   console.log(Object.keys(l.val()))
        this.setState({data:Object.values(l.val())})
      })
  }

  render() {
    return (
      <View>
          {/* <Text>hlo</Text> */}
                        {
                            this.state.data.length===0?<View><Text>Loading...</Text></View>:
                            <View>{
                                this.state.data.map((l,i)=>{
                                    return(
                                        <View style={{ marginTop:25 }} key={i}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 24, paddingRight: 24, width: 312,borderRadius:30 }}>
                                          <Image
                                            source={{uri:'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}}
                                            style={{width:50,height:50,}}
                                          />
                                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 250 }}>
                                            <View style={{ marginLeft: 15 }}>
                                              <Text style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: 'bold', color: '#06183C' }}>{l.name}</Text>
                                              <Text style={{ fontFamily: "Roboto", fontSize: 14, color: '#06183C', }}>{l.number}</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <Text>Register</Text>
                                            </TouchableOpacity>
                                          </View>
                    
                                        </View>
                    
                                      </View>
                                    )
                                })
                                }</View>
                        }
      </View>
    );
  }
}

export default DemoClassCourseWiseStudents;
