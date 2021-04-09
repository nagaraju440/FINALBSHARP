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
function Messagesicon() {
    const active="#2C57EF"
    const inactive="#BBBBBB"
    return (
       <View style={{left:28}}>
       <Svg xmlns="http://www.w3.org/2000/svg" width="17.582" height="21.061" viewBox="0 0 17.582 21.061">
        <G id="Group_743" data-name="Group 743" transform="translate(0 0)">
        <G id="Group_742" data-name="Group 742" transform="translate(0 0)">
        <Path id="Path_429" data-name="Path 429" d="M15.7,0H1.884A2.1,2.1,0,0,0,0,2.259V14.294A2.1,2.1,0,0,0,1.884,16.55H4.113l-.342,3.678a.732.732,0,0,0,.555.83.564.564,0,0,0,.489-.189l4.007-4.32H15.7a2.1,2.1,0,0,0,1.884-2.257V2.259A2.1,2.1,0,0,0,15.7,0Z" transform="translate(0 -0.002)"
        fill={inactive}
        />
       </G>
       </G>
       </Svg>
       </View>
    )
}

export default Messagesicon
