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
function CreditCardicon() {
    const active="#2C57EF"
    const inactive="#BBBBBB"
    return (
        <View style={{left:28}}>
         <Svg id="credit-card_2_" data-name="credit-card (2)" xmlns="http://www.w3.org/2000/svg" width="21.713" height="17.882" viewBox="0 0 21.713 17.882">
          <Path id="Path_1340" data-name="Path 1340" d="M21.713,84.216V82.845A2.642,2.642,0,0,0,19.338,80H2.375A2.642,2.642,0,0,0,0,82.845v1.372a.236.236,0,0,0,.212.254H21.5A.236.236,0,0,0,21.713,84.216Z" transform="translate(0 -80)" 
          fill={inactive}
          />
          <Path id="Path_1341" data-name="Path 1341" d="M0,200.254v8.687a2.642,2.642,0,0,0,2.375,2.845H19.338a2.642,2.642,0,0,0,2.375-2.845v-8.687A.236.236,0,0,0,21.5,200H.212A.236.236,0,0,0,0,200.254Zm5.428,6.655a.755.755,0,0,1-.679.813H4.071a.755.755,0,0,1-.679-.813V206.1a.755.755,0,0,1,.679-.813H4.75a.755.755,0,0,1,.679.813Z" transform="translate(0 -193.904)" 
          fill={inactive}
          />
        </Svg>
        </View>
    )
}

export default CreditCardicon
