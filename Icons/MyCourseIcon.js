import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
 function MyCourseIcon(){
    return(
        <Svg style={styles.Sections} xmlns="http://www.w3.org/2000/svg" width="17.582" height="22.712" viewBox="0 0 17.582 22.712">
        <Path id="music-player" d="M19.464.1a.312.312,0,0,0-.272-.1L8.506,1.66a.4.4,0,0,0-.3.409V16.776a3.366,3.366,0,0,0-2.758-1.5A3.594,3.594,0,0,0,2,19a3.594,3.594,0,0,0,3.447,3.717A3.594,3.594,0,0,0,8.895,19c0-.1-.007-.19-.013-.284a.467.467,0,0,0,.013-.079V6.656l10-1.55v7.539a3.366,3.366,0,0,0-2.758-1.5,3.594,3.594,0,0,0-3.447,3.717,3.594,3.594,0,0,0,3.447,3.717,3.588,3.588,0,0,0,3.445-3.662c0-.005,0-.01,0-.015V.413A.451.451,0,0,0,19.464.1Z" transform="translate(-2 -0.001)" fill="#bbb"/>
        </Svg>

    )
}
const styles=StyleSheet.create({
    Sections:{
      marginLeft:20
    }
  })
export default MyCourseIcon