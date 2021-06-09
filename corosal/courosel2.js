import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class Courosel2 extends React.Component {
//   state = {
//     active: 0
//   }
//   change = ({nativeEvent}) =>{
//       const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
//        if(slide !==this.state.active){
//          this.setState({active:slide});
//        }
//   }
  render() {
    return (
      <View style={{ width, height:236 }}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}> 
          <View style={{height:236,width:169,borderWidth:3,borderColor:'#EEEEEE',borderRadius:5}}>
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
          </View>
        </ScrollView>
        
        </View>
    )
  }
}