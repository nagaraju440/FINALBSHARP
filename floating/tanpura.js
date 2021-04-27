import React from 'react'
import { View, Text,ScrollView,Image,Dimensions ,TouchableOpacity ,Slider,
Button } from 'react-native';
// import { Slider } from 'react-native-elements/dist/slider/Slider';

import tanpuraImg from '../images/tanpuraImage.png'
width=Dimensions.get('window').width
height=Dimensions.get('window').height
console.log(width,height,"thsea re the details")
class Tanpura extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         };
    }
    render() {
        return (
            // <ScrollView >
            // {/* <Text>hello babai   </Text> */}
         <View style={{width:width,height:height}}>
         <View style={{width:'100%',height:'55.58%'}}>
             <Image source={tanpuraImg} style={{width:'100%',height:'100%'}}></Image>
         </View>
           <View style={{width:'100%',height:'45%',marginTop:-30,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30}}>
           <View style={{width:'79%',height:'85%',marginLeft:'9%',marginTop:'10.3%'}}>
                   <View style={{width:'73%',height:'36%',backgroundColor:'whitesmoke'}}>
                <View style={{flexDirection:'row',fontSize:18}}>
                    <Text>Pitch Semi</Text>
                    <View style={{marginLeft:40,fontSize:18,flexDirection:'row'}}>
                        <TouchableOpacity>
                             <Text>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'gray'}}>
                            <Text>{width}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                             <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',fontSize:18}}>
                 <Text>Speed</Text>
                <View style={{marginLeft:40}}>
                <Slider/>
                </View>

                </View>
                <View style={{flexDirection:'row',fontSize:18}}>
                 <Text>Volume</Text>
                <View style={{marginLeft:40}}>
                <Slider/>
                </View>

                </View>

                   </View>
           </View>
           </View>
         </View>

            // </ScrollView>
        );
    }
}

export default Tanpura;