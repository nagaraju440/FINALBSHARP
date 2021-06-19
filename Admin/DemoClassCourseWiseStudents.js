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
        data:[],
        batchesData:{}
    };
  }
  componentDidMount=()=>{
    //   console.log("data",this.props.route.params)
      firebase.database().ref('/DemoClass/Courses/Course'+this.props.route.params.no+'/Students/')
      .once('value').then(l=>{
          // console.log(l.val())
        this.setState({data:Object.values(l.val())})
      })
      firebase.database().ref('/Courses/Course'+this.props.route.params.no+'')
      .once('value').then(l=>{
          console.log(l.val())
        // this.setState({data:Object.values(l.val())})
      this.setState({batchesData:l.val()})
      })
  }
  render() {
    return (
      <View>
          {/* <Text>hlo</Text> */}
                        {
                           this.state.data.length === 0 ? (
                            <View>
                              <Text>Loading...</Text>
                            </View>
                          ) : (
                            <View style={{alignItems: 'center'}}>
                              {this.state.data.map((l, i) => {
                                return (
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      width: 330,
                                      height: 70,
                                      borderRadius: 10,
                                      borderWidth: 1,
                                      alignItems:'center',
                                      justifyContent:'space-between',
                                      padding:12,
                                      marginTop:10,
                                      // backgroundColor:'#D9DBFC',
                                      borderColor:'#D9DBFC'
                                    }}
                                    key={i}>
                                    {/* <Image
                                        source={{
                                          uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
                                        }}
                                        style={{width: 50, height: 50}}
                                      /> */}
                                      <View >
                                        <Text
                                          style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#06183C',
                                          }}>
                                          {l.name}
                                        </Text>
                                        <Text
                                          style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 16,
                                            color: '#06183C',
                                            marginTop:3,
                                          }}>
                                          {l.number}
                                        </Text>
                                      </View>
                                      <TouchableOpacity
                                      onPress={()=>{
this.props.navigation.navigate({name:'SelectSlot',params:{batchesData:this.state.batchesData,userData:l,img:this.props.route.params.img,no:this.props.route.params.no,name:this.props.route.params.name}})

                                      }}
                                      style={{height:30,width:70,backgroundColor:'#000dff',
                                    justifyContent:'center',
                                  alignItems:'center',
                                borderRadius:5,
                  
                              }}
                                      >
                                        <Text style={{color:'#fff',fontFamily:'Roboto',}}>Register</Text>
                                      </TouchableOpacity>
                                    </View>
                                );
                              })}
                            </View>
                          )
                        }
      </View>
    );
  }
}

export default DemoClassCourseWiseStudents;
