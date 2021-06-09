import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class Courosel2 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
//   state = {
//     active: 0
//   }
//   change = ({nativeEvent}) =>{
//       const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
//        if(slide !==this.state.active){
//          this.setState({active:slide});
//        }
//   }
componentDidMount=()=>{
  firebase.database()
  .ref('/teachers')
  .once('value')
 .then(snapshot => {
  //  console.log('User data: ', Object.values(snapshot.val())),
   this.setState({data:Object.values(snapshot.val())})
 })
}
  render() {
    return (
      <View style={{ width, height:276 }}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}> 
        {
          this.state.data.map(l=>{
            return(
              <View style={{height:276,width:169,borderWidth:3,borderColor:'#EEEEEE',borderRadius:5,marginLeft:10}}>
           <Image
            source={{uri:l.imgUrl}}
            style={{width:76,height:76,borderRadius:76,marginTop:5,marginLeft:45}}>
           </Image>
           <Text style={{textAlign:'center',marginTop:20,fontFamily:'SemiBold',fontSize:14}}>{l.name}</Text>
           <Text style={{textAlign:'center',fontSize:10,textAlign:'justify',padding:18}}>{l.description}</Text>
          </View>
            )
          })
        }
          {/* <View style={{height:236,width:169,borderWidth:3,borderColor:'#EEEEEE',borderRadius:5}}>
           <Image
            source={{uri:'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',}}
            style={{width:76,height:76,borderRadius:76,marginTop:20,marginLeft:45}}>
           </Image>
           <Text style={{textAlign:'center',marginTop:20,fontFamily:'SemiBold',fontSize:14}}>Viswanath Murthy</Text>
           <Text style={{textAlign:'center',fontSize:10,textAlign:'justify',padding:18}}>2 years teaching experience
                 at xyz academy, 257 Stage
                 performances and taught
                 more than 10,000 Students</Text>
          </View>
          <View style={{height:236,width:169,marginLeft:20,borderWidth:3,borderColor:'#EEEEEE',borderRadius:5}}>
          <Image
            source={{uri:'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',}}
            style={{width:76,height:76,borderRadius:76,marginTop:20,marginLeft:45}}>
           </Image>
           <Text style={{textAlign:'center',marginTop:20,fontFamily:'SemiBold',fontSize:14}}>Viswanath Murthy</Text>
           <Text style={{textAlign:'center',fontSize:10,textAlign:'justify',padding:18}}>2 years teaching experience
                 at xyz academy, 257 Stage
                 performances and taught
                 more than 10,000 Students</Text>
          </View>
          <View style={{height:236,width:167,marginLeft:20,borderWidth:3,borderColor:'#EEEEEE',borderRadius:5}}>
          <Image
            source={{uri:'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',}}
            style={{width:76,height:76,borderRadius:76,marginTop:20,marginLeft:45}}>
           </Image>
           <Text style={{textAlign:'center',marginTop:20,fontFamily:'SemiBold',fontSize:14}}>Viswanath Murthy</Text>
           <Text style={{textAlign:'center',fontSize:10,textAlign:'justify',padding:18}}>2 years teaching experience
                 at xyz academy, 257 Stage
                 performances and taught
                 more than 10,000 Students</Text>
          </View> */}
        </ScrollView>
        
        </View>
    )
  }
}