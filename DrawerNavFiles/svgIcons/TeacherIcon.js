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
    style={styles.Sections}
      xmlns="http://www.w3.org/2000/svg"
      width="20.63"
      height="23.434"
      viewBox="0 0 20.63 23.434">
      <Path
        id="Icon_awesome-user"
        data-name="Icon awesome-user"
        d="M9.815,11.217A5.609,5.609,0,1,0,4.206,5.609,5.608,5.608,0,0,0,9.815,11.217Zm3.926,1.4h-.732a7.627,7.627,0,0,1-6.389,0H5.889A5.891,5.891,0,0,0,0,18.508v1.823a2.1,2.1,0,0,0,2.1,2.1H17.527a2.1,2.1,0,0,0,2.1-2.1V18.508A5.891,5.891,0,0,0,13.741,12.619Z"
        transform="translate(0.5 0.5)"
        stroke-width="1"
        fill='#bbb'
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  Sections: {
    marginLeft: 20,
  },
  music: {
    marginLeft: 20,
  },
});

export default UpArrow;
