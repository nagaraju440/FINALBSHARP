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
 function AboutIcon(){
    return(
        <Svg style={styles.Sections} xmlns="http://www.w3.org/2000/svg" width="17.582" height="20.704" viewBox="0 0 17.582 20.704">
        <G id="Group_427" data-name="Group 427" transform="translate(0 0)">
        <G id="Group_426" data-name="Group 426">
        <Path id="Path_438" data-name="Path 438" d="M10957.478-11201.858l.234-.937.433-.877.453-.52.4-.395.8-.611.754-.472.674-.362.907-.326.919-.272,1.044-.211.947-.085h2.153l1.92.229,1.635.428,1.593.675s.822.534,1.1.711a7.18,7.18,0,0,1,.934,1.126l.51.963.178,1.164v.819l-.178.786-.51,1.062-.756.8-1.124.916-1.965,1.192-1.375.776-.3.271-.375.329-.343.556s-.236.449-.313.6-.155.345-.208.458a2.236,2.236,0,0,1-.508.385l-.506.252-.923.119-1.1-.188-.578-.381-.521-.645-.11-.754.11-.83.4-.718.6-.68.716-.545.728-.515,1.924-1.238.947-.687.55-.646.356-.763v-.83a4.079,4.079,0,0,0-.5-.961l-.618-.581-.632-.326-.8-.16-1.014-.059-1.031.059-1.127.323-.8.57-.469.6-.4.744-.508.711-.6.523a1.3,1.3,0,0,1-.674.263,5.583,5.583,0,0,1-1.144,0h0a3.443,3.443,0,0,1-.73-.111,2.653,2.653,0,0,1-.769-.515,1.089,1.089,0,0,1-.314-.565Z" transform="translate(-10957.478 11206.926)" fill="#bbb"/>
        </G>
        <Ellipse id="Ellipse_88" data-name="Ellipse 88" cx="2.039" cy="2.442" rx="2.039" ry="2.442" transform="translate(6.398 15.82)" fill="#bbb"/>
        </G>
        </Svg>

    )
}
const styles=StyleSheet.create({
    Sections:{
      marginLeft:20
    }
  })
export default AboutIcon