import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
function Profile() {
    return (
        <View>
           <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
             <G id="Group_1163" data-name="Group 1163" transform="translate(-0.167 0.127)">
             <Circle id="Ellipse_53" data-name="Ellipse 53" cx="13" cy="13" r="13" transform="translate(0.167 -0.127)" fill="#eee"/>
             <Path id="user-solid" d="M4.588,5.244A2.622,2.622,0,1,0,1.966,2.622,2.622,2.622,0,0,0,4.588,5.244ZM6.423,5.9H6.081a3.566,3.566,0,0,1-2.986,0H2.753A2.754,2.754,0,0,0,0,8.652V9.5a.983.983,0,0,0,.983.983h7.21A.983.983,0,0,0,9.176,9.5V8.652A2.754,2.754,0,0,0,6.423,5.9Z" transform="translate(8.579 7.629)" fill="#292629"/>
             </G>
           </Svg>
        </View>
    )
}

export default Profile
