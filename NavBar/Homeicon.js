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
function Homeicon(props) {
    const active="#2C57EF"
    const inactive="#BBBBBB"
    return (
        <>
        
        <View style={{left:28}} {...props}>
           <Svg xmlns="http://www.w3.org/2000/svg" width="17.582" height="20.018" viewBox="0 0 17.582 20.018">
            <G id="home" transform="translate(0 0)">
            <G id="Group_730" data-name="Group 730" transform="translate(0 0)">
            <G id="Group_729" data-name="Group 729">
            <Path id="Path_389" data-name="Path 389" d="M17.286,21.569,9.4,12.959a.792.792,0,0,0-1.214,0L.3,21.569a1.223,1.223,0,0,0-.233,1.188.915.915,0,0,0,.841.69h1.26v8.627a.575.575,0,0,0,.517.619H7a.575.575,0,0,0,.517-.619V26.836h2.541v5.238a.575.575,0,0,0,.517.619H14.9a.575.575,0,0,0,.517-.619V23.447h1.26a.916.916,0,0,0,.841-.69A1.224,1.224,0,0,0,17.286,21.569Z" transform="translate(0 -12.675)" 
            fill={inactive}
            />
            </G>
            </G >
            </G>
            </Svg>
        </View>
        </>
    )
}

export default Homeicon
