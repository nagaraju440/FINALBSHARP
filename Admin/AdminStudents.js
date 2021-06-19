import React, { Component } from 'react';
// import { TouchableOpacity } from 'react-native';
import { View, Text,TouchableOpacity } from 'react-native';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
class AdminStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sample:[],
        data:''
        };
  }
   componentDidMount=()=>{
      firebase.database().ref('Courses').
      once('value').then(l=>{
        //   console.log("data is",Object.keys(l.val()))
        this.state.data=[]
        this.setState({data:this.state.data})
          Object.values(l.val()).map(m=>{
            var  x=Object.values(m.Batches)
              var y=[]
              x.map(k=>{
                  y=y.concat({day:k.day,time:k.time,batchNo:k.no})
              })
         this.state.data=this.state.data.concat({courseName:m.name,batches:y,courseNo:m.no})
         this.setState({data:this.state.data})
          })
        console.log("final data is",this.state.data,"heheh")
      })
   }
  render() {
    return (
      <View>
        {
         this.state.data===''?<View><Text>Loading....</Text></View>:<View>
             {
                 this.state.data===0?<View><Text>No students are registered for the course</Text></View>:
                 <View>
                     {
                         this.state.data.map(l=>{
                            //  console.log("batches are",l.batches)
                             return(
                                 <View>
                                     <Text style={{fontSize:20}}>{l.courseName}</Text>
                                    <View>
                                        {
                                            l.batches.map(k=>{
                                                return(
                                                   <TouchableOpacity
                                                   onPress={()=>{
                                                // console.log("k is",k,l.courseNo)
                                                       this.props.navigation.navigate({name:'CourseWiseRegisteredStudents',params:{courseNo:l.courseNo,batchNo:k.batchNo}})
                                                   }}
                                                   >
                                                       <Text>{JSON.stringify(k)}</Text>
                                                   </TouchableOpacity> 
                                                )
                                            })
                                        }
                                    </View>
                                     </View>
                             )
                         })
                     }
                 </View>
             }
         </View>
        }
      </View>
    );
  }
}

export default AdminStudents;
