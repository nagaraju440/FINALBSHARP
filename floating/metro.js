import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import metronome from '../react-native-metronome'
// import {NativeModules} from 'react-native';
// var Hello=NativeModules.RNMetronome;
import {NativeModules} from 'react-native';
var HelloWorld = NativeModules.HelloWorld;
var RNMetronome=NativeModules.RNMetronome;
class Metro extends Component {
    componentDidMount=()=>{
        // console.log(HelloWorld)
        // console.log(Metronome,"metronoem")
        // metronome.play(80);
        // HelloWorld.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)});
        console.log(RNMetronome,"hii brooo")
        // console.log();
        // RNMetronome.play(100)
    }
    render() {
        return (
            <View>
                <Text> textInComponent   tttttttttttttttt </Text>
                {/* <App/> */}
           </View> 
        )
    }
}

export default Metro;