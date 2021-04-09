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
function Settingsicon() {
  const active="#2C57EF"
  const inactive="#BBBBBB"
    return (
      <View style={{left:28}}>
      <Svg id="icon_setting" xmlns="http://www.w3.org/2000/svg" width="20.224" height="20.224" viewBox="0 0 20.224 20.224">
      <Path id="Path_108" data-name="Path 108" d="M16.811,6.573,18.2,3.918l-1.77-1.77-2.654,1.39a4.528,4.528,0,0,0-1.39-.506L11.376,0H8.848L7.837,2.907a5.282,5.282,0,0,0-1.264.506L3.918,2.022l-1.9,1.9,1.39,2.654a5.282,5.282,0,0,0-.506,1.264L0,8.848v2.528l2.907,1.011c.126.506.379.885.506,1.39l-1.39,2.654,1.77,1.77,2.654-1.39a4.528,4.528,0,0,0,1.39.506l1.011,2.907h2.528l1.011-2.907c.506-.126.885-.379,1.39-.506l2.654,1.39,1.77-1.77-1.39-2.654a4.528,4.528,0,0,0,.506-1.39l2.907-1.011V8.848L17.317,7.837A5.283,5.283,0,0,0,16.811,6.573Zm-6.7,7.331A3.724,3.724,0,0,1,6.32,10.112,3.724,3.724,0,0,1,10.112,6.32,3.724,3.724,0,0,1,13.9,10.112,3.724,3.724,0,0,1,10.112,13.9Z"
       fill={inactive}
       />
      </Svg>
      </View>
    )
}

export default Settingsicon
