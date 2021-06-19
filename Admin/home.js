import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button, 
    ImageBackground,ScrollView
} from 'react-native';
import Svg, {G,Path} from 'react-native-svg'
import StackNav from '../TopNavs/stack';
import welcome from './welcome.png';
class Home extends React.Component {
  constructor(props){
    super(props)
  }
    state = {  }
    componentDidMount=()=>{
      // console.log(this.props)
    }
    
    render() { 
        return (
          <View style={{backgroundColor:'white'}}> 
            <StackNav/>
            <ScrollView style={{backgroundColor:"white"}}>
                <View style={styles.overall}>
                    <View style={{Width:"100%",height:197}}>
                     <ImageBackground source={welcome} style={{Width:"100%",height:197,borderRadius:15,justifyContent: "center"}}
                      imageStyle={{ borderRadius: 15}}>
                     <Text style={{textAlign: "center",color:"white",fontSize:20,fontFamily:"poppins"}}> Welcome to BS#arp</Text>
                     </ImageBackground>
                    </View>

                    {/* first rowwww */}
                    <View style={{width:"100%",height:395,marginTop:30}}>
                      <View style={{flexDirection:"row"}}>
                      <TouchableOpacity
                      onPress={()=>{
                        this.props.navigation.navigate('Students')
                      }}
                      style={{width:"47.09%",height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                      <Text style={{fontSize:17}}>Students</Text>
                          </TouchableOpacity>
{/* ........................................View Demo.......................... */}
<TouchableOpacity 
onPress={()=>{
  this.props.navigation.navigate('DemoClassStudents')
}}
style={{width:"47.09%",marginLeft:21,height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                          <Svg id="Document" xmlns="http://www.w3.org/2000/svg" width="34.029" height="34.029" viewBox="0 0 34.029 34.029">
  <G id="Document-2" data-name="Document" transform="translate(5.318 3.899)">
    <Path id="Stroke_1" data-name="Stroke 1" d="M10.237.5H0" transform="translate(6.729 18.604)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_2" data-name="Stroke 2" d="M10.237.5H0" transform="translate(6.729 12.668)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_3" data-name="Stroke 3" d="M3.906.5H0" transform="translate(6.729 6.746)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_4" data-name="Stroke 4" d="M17.239,0,6.337.006C2.423.03,0,2.6,0,6.532V19.571C0,23.518,2.442,26.1,6.389,26.1l10.9,0c3.913-.024,6.338-2.6,6.338-6.528V6.532C23.629,2.585,21.186,0,17.239,0Z" transform="translate(0 0)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </G>
</Svg>

                             <Text style={{fontSize:14}}>Demo Class Students</Text>
                          </TouchableOpacity>
                          {/* ...................attendence.................. */}
                          {/* <TouchableOpacity style={{width:"47.09%",marginLeft:21,height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                          <Svg id="Document" xmlns="http://www.w3.org/2000/svg" width="34.029" height="34.029" viewBox="0 0 34.029 34.029">
  <G id="Document-2" data-name="Document" transform="translate(5.318 3.899)">
    <Path id="Stroke_1" data-name="Stroke 1" d="M10.237.5H0" transform="translate(6.729 18.604)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_2" data-name="Stroke 2" d="M10.237.5H0" transform="translate(6.729 12.668)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_3" data-name="Stroke 3" d="M3.906.5H0" transform="translate(6.729 6.746)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_4" data-name="Stroke 4" d="M17.239,0,6.337.006C2.423.03,0,2.6,0,6.532V19.571C0,23.518,2.442,26.1,6.389,26.1l10.9,0c3.913-.024,6.338-2.6,6.338-6.528V6.532C23.629,2.585,21.186,0,17.239,0Z" transform="translate(0 0)" fill="none" stroke="#0e0e0e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </G>
</Svg>

                             <Text style={{fontSize:17}}>Attendence</Text>
                          </TouchableOpacity> */}
                      </View>

                      {/* second rowwww */}
                      <View style={{width:"100%",height:395,marginTop:30}}>
                      <View style={{flexDirection:"row"}}>
                      <TouchableOpacity style={{width:"47.09%",height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                      <Svg xmlns="http://www.w3.org/2000/svg" width="27.438" height="27.438" viewBox="0 0 27.438 27.438">
  <G id="Arrow_-_Up_Square" data-name="Arrow - Up Square" transform="translate(26.438 26.438) rotate(180)">
    <Path id="Stroke_1" data-name="Stroke 1" d="M6.76,25.438h11.92c4.153,0,6.758-2.941,6.758-7.1V7.1c0-4.162-2.592-7.1-6.758-7.1H6.76C2.593,0,0,2.941,0,7.1V18.334C0,22.5,2.593,25.438,6.76,25.438Z" transform="translate(0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_3" data-name="Stroke 3" d="M0,11.237V0" transform="translate(12.719 7.101)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <Path id="Stroke_5" data-name="Stroke 5" d="M10.307,0,5.153,5.175,0,0" transform="translate(7.565 13.162)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </G>
</Svg>

                              <Text style={{fontSize:17}}>Upload Course</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{width:"47.09%",marginLeft:21,height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>

                             <Text style={{fontSize:17}}>Assignments</Text>
                          </TouchableOpacity>
                      </View>

                      {/* third rowwww */}
                      <View style={{width:"100%",height:395,marginTop:30}}>
                      <View style={{flexDirection:"row"}}>
                      <TouchableOpacity style={{width:"47.09%",height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                      <Svg xmlns="http://www.w3.org/2000/svg" width="28.281" height="27.833" viewBox="0 0 28.281 27.833">
  <G id="Iconly_Light_Work" data-name="Iconly/Light/Work" transform="translate(1.001 1)">
    <G id="Work">
      <Path id="Stroke_1" data-name="Stroke 1" d="M0,0S.2,2.462.248,3.239A5.416,5.416,0,0,0,1.384,6.25,4.2,4.2,0,0,0,4.938,7.8c1.752,0,14.5,0,16.248,0A4.2,4.2,0,0,0,24.741,6.25a5.428,5.428,0,0,0,1.138-3.012c.045-.776.247-3.239.247-3.239" transform="translate(0.077 18.029)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <Path id="Stroke_3" data-name="Stroke 3" d="M0,3.654V3.128A3.127,3.127,0,0,1,3.128,0H6.786A3.128,3.128,0,0,1,9.914,3.128v.526" transform="translate(8.14)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <Path id="Stroke_5" data-name="Stroke 5" d="M.5,1.833V0" transform="translate(12.597 17.898)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <Path id="Stroke_7" data-name="Stroke 7" d="M0,4.332V9.244a23.13,23.13,0,0,0,9.545,3.545,3.655,3.655,0,0,1,7.062.014,23.128,23.128,0,0,0,9.587-3.559V4.332A4.322,4.322,0,0,0,21.863,0H4.345A4.334,4.334,0,0,0,0,4.332Z" transform="translate(0 3.656)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </G>
  </G>
</Svg>

                              <Text style={{fontSize:17}}>Fee Updates</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{width:"47.09%",marginLeft:21,height:115,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center"}}>
                             <Text style={{fontSize:17}}>Post</Text>
                          </TouchableOpacity>
                      </View>                
                    </View>
                    </View>
                    </View>
                </View>
                <View style={{height:70}}></View>
            </ScrollView>
            </View>
         );
    }
}
 
export default Home;
const styles = StyleSheet.create({
    overall:{
        marginLeft:21,
        width:"89.85%",
        marginTop:45,
    }
})
