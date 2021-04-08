import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
    // Avatar
} from 'react-native';
import Bsharp from './bsharp.png'
function Bsharpimage() {
    return (
       <View >
           <Image source={Bsharp} style={styles.image}/>
       </View>
    )
}
export default Bsharpimage
const styles=StyleSheet.create({
    image:{
        width:26,
        height:39,
        marginLeft:35,
        marginTop:16
        },
    })