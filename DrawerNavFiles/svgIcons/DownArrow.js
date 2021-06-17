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
const DownArrow = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14 16.0837L7.05467 9.13291C6.5406 8.61885 5.70935 8.61885 5.20076 9.13291C4.6867 9.64697 4.69217 10.4782 5.20076 10.9923L13.0703 18.8673C13.5679 19.3649 14.3664 19.3759 14.8804 18.9056L22.8047 10.9978C23.0617 10.7407 23.1875 10.4017 23.1875 10.0681C23.1875 9.73447 23.0617 9.39541 22.8047 9.13838C22.2906 8.62432 21.4594 8.62432 20.9508 9.13838L14 16.0837Z"
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

export default DownArrow;