import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class Courosal extends React.Component {
  state = {
    active: 0
  }
  change = ({nativeEvent}) =>{
      const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
       if(slide !==this.state.active){
         this.setState({active:slide});
       }
  }
  render() {
    return (
      <View style={{  width:'100%',borderRadius:25,marginLeft:-25,marginTop:10}}>
        <ScrollView 
          pagingEnabled 
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={{  width,height }}>
          {
            images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width, height, resizeMode: 'contain',borderRadius:5 }}></Image>
            ))
          }
        </ScrollView>
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center', margin: 6 }}>
          {
            images.map((i, k) => (
              <Text key={k} style={k==this.state.active ? style.padingActiveText:style.padingText}>⬤</Text>
            ))
          }
        </View>
      
      </View>

    )
  }
}
const style = StyleSheet.create({
  padingText: {
    color: '#888',
    padding: 3,
    margin: 3,
    fontSize:(width/30)
  },
  padingActiveText: {
    color: '#fff',
    padding: 3,
    margin: 3,
    fontSize:(width/30)
  }
})