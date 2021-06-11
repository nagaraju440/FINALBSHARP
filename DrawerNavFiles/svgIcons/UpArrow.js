import React from 'react';
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
const UpArrow = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14 11.9163L20.9453 18.8671C21.4594 19.3812 22.2906 19.3812 22.7992 18.8671C23.3133 18.353 23.3078 17.5218 22.7992 17.0077L14.9297 9.13273C14.4321 8.63507 13.6336 8.62414 13.1196 9.09445L5.19534 17.0022C4.9383 17.2593 4.81252 17.5983 4.81252 17.9319C4.81252 18.2655 4.9383 18.6046 5.19534 18.8616C5.7094 19.3757 6.54065 19.3757 7.04924 18.8616L14 11.9163Z"
        fill="#121213"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  Sections: {
    marginLeft: 20,
  },
});

export default UpArrow;